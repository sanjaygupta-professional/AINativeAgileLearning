/**
 * AI Video Learning Lab - Seedance 2.0 Integration
 *
 * Implements the async job-based workflow:
 *   1. Submit generation request (text-to-video or image-to-video)
 *   2. Poll for job completion
 *   3. Retrieve and display the finished video
 */

(function () {
    'use strict';

    // ---- State ----
    let currentMode = 'text';
    let uploadedImageFile = null;
    let activeJobId = null;
    let pollTimer = null;
    let elapsedTimer = null;
    let elapsedSeconds = 0;
    const jobHistory = [];

    // ---- DOM refs ----
    const $ = (sel) => document.querySelector(sel);
    const apiKeyInput = $('#apiKey');
    const toggleKeyBtn = $('#toggleKey');
    const apiBaseSelect = $('#apiBase');
    const apiBaseCustom = $('#apiBaseCustom');
    const apiStatus = $('#apiStatus');
    const promptSelect = $('#promptSelect');
    const promptText = $('#promptText');
    const charCount = $('#charCount');
    const imgPromptText = $('#imgPromptText');
    const imageInput = $('#imageInput');
    const uploadArea = $('#uploadArea');
    const uploadPlaceholder = $('#uploadPlaceholder');
    const previewImage = $('#previewImage');
    const clearImageBtn = $('#clearImage');
    const generateBtn = $('#generateBtn');
    const outputSection = $('#outputSection');
    const progressContainer = $('#progressContainer');
    const progressStatus = $('#progressStatus');
    const progressTime = $('#progressTime');
    const progressFill = $('#progressFill');
    const progressDetail = $('#progressDetail');
    const videoContainer = $('#videoContainer');
    const videoPlayer = $('#videoPlayer');
    const videoSource = $('#videoSource');
    const downloadLink = $('#downloadLink');
    const regenerateBtn = $('#regenerateBtn');
    const errorContainer = $('#errorContainer');
    const errorMessage = $('#errorMessage');
    const retryBtn = $('#retryBtn');
    const historyList = $('#historyList');

    // ---- Initialization ----

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        populateTemplates();
        bindEvents();
        restoreApiKey();
    }

    function populateTemplates() {
        let currentCategory = '';
        PROMPT_TEMPLATES.forEach((t, i) => {
            if (t.category !== currentCategory) {
                const optgroup = document.createElement('optgroup');
                optgroup.label = t.category;
                promptSelect.appendChild(optgroup);
                currentCategory = t.category;
            }
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = t.title;
            promptSelect.lastElementChild.appendChild(opt);
        });
    }

    function bindEvents() {
        // Tabs
        document.querySelectorAll('.tab').forEach((tab) => {
            tab.addEventListener('click', () => switchMode(tab.dataset.mode));
        });

        // API key
        toggleKeyBtn.addEventListener('click', () => {
            const isPassword = apiKeyInput.type === 'password';
            apiKeyInput.type = isPassword ? 'text' : 'password';
            toggleKeyBtn.textContent = isPassword ? 'Hide' : 'Show';
        });
        apiKeyInput.addEventListener('input', onApiKeyChange);

        // API base
        apiBaseSelect.addEventListener('change', () => {
            apiBaseCustom.classList.toggle('hidden', apiBaseSelect.value !== 'custom');
        });

        // Templates
        promptSelect.addEventListener('change', () => {
            const idx = promptSelect.value;
            if (idx !== '') {
                promptText.value = PROMPT_TEMPLATES[idx].prompt;
                updateCharCount();
            }
        });

        // Prompt char count
        promptText.addEventListener('input', updateCharCount);

        // Image upload
        uploadArea.addEventListener('click', () => imageInput.click());
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });
        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('dragover');
        });
        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            if (e.dataTransfer.files.length) handleImageFile(e.dataTransfer.files[0]);
        });
        imageInput.addEventListener('change', () => {
            if (imageInput.files.length) handleImageFile(imageInput.files[0]);
        });
        clearImageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            clearImage();
        });

        // Generate
        generateBtn.addEventListener('click', startGeneration);
        regenerateBtn.addEventListener('click', startGeneration);
        retryBtn.addEventListener('click', startGeneration);
    }

    // ---- API key persistence (sessionStorage) ----

    function restoreApiKey() {
        const saved = sessionStorage.getItem('seedance_api_key');
        if (saved) {
            apiKeyInput.value = saved;
            updateApiStatus(true);
        }
    }

    function onApiKeyChange() {
        const key = apiKeyInput.value.trim();
        if (key) {
            sessionStorage.setItem('seedance_api_key', key);
            updateApiStatus(true);
        } else {
            sessionStorage.removeItem('seedance_api_key');
            updateApiStatus(false);
        }
    }

    function updateApiStatus(connected) {
        apiStatus.textContent = connected
            ? 'API Status: Key Configured'
            : 'API Status: Not Connected';
        apiStatus.classList.toggle('connected', connected);
    }

    // ---- Mode switching ----

    function switchMode(mode) {
        currentMode = mode;
        document.querySelectorAll('.tab').forEach((t) =>
            t.classList.toggle('active', t.dataset.mode === mode)
        );
        document.querySelectorAll('.tab-panel').forEach((p) =>
            p.classList.toggle('active', p.id === `panel-${mode}`)
        );
    }

    // ---- Char count ----

    function updateCharCount() {
        const len = promptText.value.length;
        charCount.textContent = len;
        charCount.style.color =
            len > SEEDANCE_CONFIG.maxPromptLength ? '#ef4444' : '';
    }

    // ---- Image handling ----

    function handleImageFile(file) {
        if (!file.type.startsWith('image/')) return;
        if (file.size > 10 * 1024 * 1024) {
            alert('Image must be under 10 MB.');
            return;
        }
        uploadedImageFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImage.src = e.target.result;
            previewImage.classList.remove('hidden');
            clearImageBtn.classList.remove('hidden');
            uploadPlaceholder.classList.add('hidden');
        };
        reader.readAsDataURL(file);
    }

    function clearImage() {
        uploadedImageFile = null;
        previewImage.src = '';
        previewImage.classList.add('hidden');
        clearImageBtn.classList.add('hidden');
        uploadPlaceholder.classList.remove('hidden');
        imageInput.value = '';
    }

    // ---- API helpers ----

    function getApiBase() {
        if (apiBaseSelect.value === 'custom') {
            return apiBaseCustom.value.trim().replace(/\/+$/, '');
        }
        return apiBaseSelect.value;
    }

    function getApiKey() {
        return apiKeyInput.value.trim();
    }

    function apiHeaders() {
        return {
            Authorization: `Bearer ${getApiKey()}`,
            'Content-Type': 'application/json',
        };
    }

    // ---- Generation flow ----

    async function startGeneration() {
        // Validate
        const key = getApiKey();
        if (!key) {
            alert('Please enter your Seedance 2.0 API key.');
            apiKeyInput.focus();
            return;
        }

        const prompt =
            currentMode === 'text'
                ? promptText.value.trim()
                : imgPromptText.value.trim();

        if (!prompt && currentMode === 'text') {
            alert('Please enter a video prompt.');
            promptText.focus();
            return;
        }

        if (currentMode === 'image' && !uploadedImageFile) {
            alert('Please upload a reference image.');
            return;
        }

        // Prepare UI
        showProgress();
        generateBtn.disabled = true;

        const params = {
            resolution: $('#resolution').value,
            duration: parseInt($('#duration').value, 10),
            aspect_ratio: $('#aspectRatio').value,
            audio: $('#audioSync').value,
        };

        try {
            let jobId;
            if (currentMode === 'text') {
                jobId = await submitTextToVideo(prompt, params);
            } else {
                jobId = await submitImageToVideo(uploadedImageFile, prompt, params);
            }

            activeJobId = jobId;
            addHistoryEntry(jobId, prompt, 'processing');
            startPolling(jobId);
        } catch (err) {
            showError(err.message || 'Failed to submit generation request.');
            generateBtn.disabled = false;
        }
    }

    /**
     * POST /generate/text
     * Submit a text-to-video generation job.
     */
    async function submitTextToVideo(prompt, params) {
        const base = getApiBase();
        const body = {
            model: SEEDANCE_CONFIG.model,
            prompt: prompt,
            resolution: params.resolution,
            duration: params.duration,
            aspect_ratio: params.aspect_ratio,
        };

        if (params.audio !== 'none') {
            body.audio = 'auto';
        }

        const res = await fetch(`${base}/generate/text`, {
            method: 'POST',
            headers: apiHeaders(),
            body: JSON.stringify(body),
        });

        const data = await res.json();

        if (!res.ok || data.status === 'error') {
            throw new Error(
                data.error?.message || data.message || `API error (${res.status})`
            );
        }

        return data.data?.task_id || data.data?.job_id || data.task_id;
    }

    /**
     * POST /generate/image
     * Submit an image-to-video generation job.
     */
    async function submitImageToVideo(imageFile, prompt, params) {
        const base = getApiBase();

        // Use multipart/form-data for image upload
        const formData = new FormData();
        formData.append('model', SEEDANCE_CONFIG.model);
        formData.append('image', imageFile);
        formData.append('prompt', prompt || '');
        formData.append('resolution', params.resolution);
        formData.append('duration', params.duration);
        formData.append('aspect_ratio', params.aspect_ratio);
        if (params.audio !== 'none') {
            formData.append('audio', 'auto');
        }

        const res = await fetch(`${base}/generate/image`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${getApiKey()}`,
                // Let browser set Content-Type with boundary for multipart
            },
            body: formData,
        });

        const data = await res.json();

        if (!res.ok || data.status === 'error') {
            throw new Error(
                data.error?.message || data.message || `API error (${res.status})`
            );
        }

        return data.data?.task_id || data.data?.job_id || data.task_id;
    }

    // ---- Polling ----

    function startPolling(jobId) {
        let attempts = 0;

        pollTimer = setInterval(async () => {
            attempts++;

            if (attempts > SEEDANCE_CONFIG.maxPollAttempts) {
                clearInterval(pollTimer);
                showError('Generation timed out. The job may still be processing on the server.');
                generateBtn.disabled = false;
                updateHistoryStatus(jobId, 'failed');
                return;
            }

            try {
                const result = await checkJobStatus(jobId);

                if (result.status === 'completed' || result.status === 'success') {
                    clearInterval(pollTimer);
                    const videoUrl =
                        result.data?.response?.[0] ||
                        result.data?.video_url ||
                        result.video_url;
                    showVideo(videoUrl);
                    updateHistoryStatus(jobId, 'completed', videoUrl);
                    generateBtn.disabled = false;
                } else if (result.status === 'failed' || result.status === 'error') {
                    clearInterval(pollTimer);
                    showError(
                        result.error?.message ||
                            result.message ||
                            'Video generation failed.'
                    );
                    updateHistoryStatus(jobId, 'failed');
                    generateBtn.disabled = false;
                } else {
                    // Still processing - update progress
                    const pct = Math.min(10 + attempts * 3, 90);
                    progressFill.style.width = `${pct}%`;
                    progressDetail.textContent = `Job ${jobId} — ${result.status || 'processing'}...`;
                }
            } catch (err) {
                // Network error during poll — keep trying
                progressDetail.textContent = `Polling... (retry ${attempts})`;
            }
        }, SEEDANCE_CONFIG.pollIntervalMs);
    }

    /**
     * GET /tasks/{jobId}
     * Check the status of a generation job.
     */
    async function checkJobStatus(jobId) {
        const base = getApiBase();
        const res = await fetch(`${base}/tasks/${jobId}`, {
            method: 'GET',
            headers: apiHeaders(),
        });

        if (!res.ok) {
            throw new Error(`Status check failed (${res.status})`);
        }

        return res.json();
    }

    // ---- UI updates ----

    function showProgress() {
        outputSection.classList.remove('hidden');
        progressContainer.classList.remove('hidden');
        videoContainer.classList.add('hidden');
        errorContainer.classList.add('hidden');

        progressFill.style.width = '5%';
        progressFill.className = 'progress-fill';
        progressStatus.textContent = 'Submitting...';
        progressDetail.textContent = 'Sending request to Seedance 2.0...';

        // Elapsed timer
        elapsedSeconds = 0;
        progressTime.textContent = '0s';
        clearInterval(elapsedTimer);
        elapsedTimer = setInterval(() => {
            elapsedSeconds++;
            progressTime.textContent = `${elapsedSeconds}s`;
        }, 1000);
    }

    function showVideo(url) {
        clearInterval(elapsedTimer);
        progressFill.style.width = '100%';
        progressFill.classList.add('complete');
        progressStatus.textContent = 'Complete';
        progressDetail.textContent = `Generated in ${elapsedSeconds}s`;

        videoSource.src = url;
        videoPlayer.load();
        downloadLink.href = url;
        videoContainer.classList.remove('hidden');
    }

    function showError(msg) {
        clearInterval(elapsedTimer);
        clearInterval(pollTimer);
        progressFill.style.width = '100%';
        progressFill.classList.add('error');
        progressStatus.textContent = 'Failed';

        errorMessage.textContent = msg;
        errorContainer.classList.remove('hidden');
    }

    // ---- History ----

    function addHistoryEntry(jobId, prompt, status) {
        jobHistory.unshift({ jobId, prompt, status, videoUrl: null, time: new Date() });
        renderHistory();
    }

    function updateHistoryStatus(jobId, status, videoUrl) {
        const entry = jobHistory.find((h) => h.jobId === jobId);
        if (entry) {
            entry.status = status;
            if (videoUrl) entry.videoUrl = videoUrl;
        }
        renderHistory();
    }

    function renderHistory() {
        if (jobHistory.length === 0) {
            historyList.innerHTML =
                '<p class="empty-state">No videos generated yet. Create your first educational video above.</p>';
            return;
        }

        historyList.innerHTML = jobHistory
            .map(
                (h) => `
            <div class="history-item">
                <div class="history-thumb">
                    ${
                        h.videoUrl
                            ? `<video src="${h.videoUrl}" muted preload="metadata"></video>`
                            : h.status === 'processing'
                              ? '...'
                              : '--'
                    }
                </div>
                <div class="history-info">
                    <p class="history-prompt">${escapeHtml(h.prompt)}</p>
                    <p class="history-meta">${h.jobId} &middot; ${formatTime(h.time)}</p>
                </div>
                <span class="history-status ${h.status}">${h.status}</span>
            </div>
        `
            )
            .join('');
    }

    // ---- Helpers ----

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function formatTime(date) {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
})();
