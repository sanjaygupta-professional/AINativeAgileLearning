/**
 * Metal Stock Sentiment Analysis - Main Application
 */

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    updateLastUpdated();
    renderOverallSentiment();
    renderCriteria();
    renderStocksTable();
}

function updateLastUpdated() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    document.getElementById('lastUpdated').textContent = now.toLocaleDateString('en-IN', options);
}

function renderOverallSentiment() {
    const overallScore = calculateOverallSentiment();
    const gaugeElement = document.getElementById('overallGauge');
    const scoreElement = document.getElementById('overallScore');
    const labelElement = document.getElementById('overallLabel');

    // Score is -100 to +100, map to 0% to 100% position
    const position = ((overallScore + 100) / 200) * 100;
    gaugeElement.style.left = `${position}%`;

    scoreElement.textContent = (overallScore > 0 ? '+' : '') + overallScore;

    // Determine sentiment label
    let label, className;
    if (overallScore >= 30) {
        label = 'BULLISH';
        className = 'bullish';
    } else if (overallScore >= 10) {
        label = 'MODERATELY BULLISH';
        className = 'bullish';
    } else if (overallScore > -10) {
        label = 'NEUTRAL';
        className = 'neutral';
    } else if (overallScore > -30) {
        label = 'MODERATELY BEARISH';
        className = 'bearish';
    } else {
        label = 'BEARISH';
        className = 'bearish';
    }

    labelElement.textContent = label;
    labelElement.className = `sentiment-label ${className}`;
}

function renderCriteria() {
    renderCriteriaGroup('immediateCriteria', SENTIMENT_CRITERIA.immediate);
    renderCriteriaGroup('shortTermCriteria', SENTIMENT_CRITERIA.shortTerm);
    renderCriteriaGroup('mediumTermCriteria', SENTIMENT_CRITERIA.mediumTerm);
}

function renderCriteriaGroup(containerId, criteria) {
    const container = document.getElementById(containerId);
    container.innerHTML = criteria.map(c => createCriteriaCard(c)).join('');
}

function createCriteriaCard(criterion) {
    const isPositive = criterion.score >= 0;
    const scoreClass = isPositive ? 'positive' : 'negative';
    const scoreDisplay = isPositive ? `+${criterion.score}` : criterion.score;

    // Calculate bar width (absolute score out of 100)
    const barWidth = Math.min(Math.abs(criterion.score), 100);

    return `
        <div class="criteria-card">
            <div class="criteria-header">
                <span class="criteria-name">${criterion.name}</span>
                <span class="criteria-type">${criterion.type}</span>
            </div>
            <div class="criteria-value">${criterion.currentValue}</div>
            <div class="criteria-score">
                <div class="score-bar">
                    <div class="score-fill ${scoreClass}" style="width: ${barWidth}%"></div>
                </div>
                <span class="score-number ${scoreClass}">${scoreDisplay}</span>
            </div>
            <p class="criteria-note">${criterion.note}</p>
        </div>
    `;
}

function renderStocksTable() {
    const tbody = document.getElementById('stocksTableBody');

    // Sort stocks by score (highest first)
    const sortedStocks = [...METAL_STOCKS].sort((a, b) => b.score - a.score);

    tbody.innerHTML = sortedStocks.map(stock => {
        const scoreDisplay = stock.score > 0 ? `+${stock.score}` : stock.score;
        const scoreColor = stock.score > 0 ? '#10b981' : stock.score < 0 ? '#ef4444' : '#f59e0b';

        return `
            <tr>
                <td>
                    <strong>${stock.symbol}</strong>
                    <br>
                    <small style="color: #94a3b8;">${stock.name}</small>
                </td>
                <td>${stock.sector}</td>
                <td>
                    <span class="sentiment-badge ${stock.sentiment}">${stock.sentiment.toUpperCase()}</span>
                </td>
                <td style="color: ${scoreColor}; font-weight: bold;">${scoreDisplay}</td>
                <td style="font-size: 0.85rem; color: #94a3b8;">${stock.keyDriver}</td>
            </tr>
        `;
    }).join('');
}

// Utility function to simulate data refresh
function refreshData() {
    // In a real app, this would fetch from an API
    console.log('Refreshing sentiment data...');
    initializeApp();
}

// Make refresh available globally
window.refreshData = refreshData;
