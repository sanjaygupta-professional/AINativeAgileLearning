/**
 * AI Video Learning Lab - Configuration & Prompt Templates
 *
 * Educational prompt templates are drawn from the AI-Native Agile Learning
 * content library (virtual teaming, leadership, antifragility, etc.)
 */

const SEEDANCE_CONFIG = {
    model: 'seedance-2.0',
    defaultResolution: '720p',
    defaultDuration: 10,
    defaultAspectRatio: '16:9',
    pollIntervalMs: 3000,
    maxPollAttempts: 60,
    maxPromptLength: 2000,
};

/**
 * Educational prompt templates organized by learning topic.
 * Each template provides a detailed Seedance 2.0 prompt designed
 * to produce a short explainer-style video clip.
 */
const PROMPT_TEMPLATES = [
    // Virtual Teaming & Remote Collaboration
    {
        category: 'Virtual Teaming',
        title: 'The Five Challenges of Virtual Teams',
        prompt: 'An animated educational explainer showing five distinct challenge icons appearing one by one on a world map: distance (globe with arrows), time zones (clocks at different hours), technology gaps (broken chain link), cultural differences (diverse flags blending), and trust barriers (handshake fading in). Clean corporate style, soft blue and white color palette, smooth transitions between each challenge. Text labels appear below each icon. Professional narration tone.'
    },
    {
        category: 'Virtual Teaming',
        title: 'Building Trust Across Boundaries',
        prompt: 'A cinematic animation of two remote workers on opposite sides of a digital divide, each at their desk with laptops. A glowing bridge forms between them made of chat messages, video call frames, and shared documents. The bridge solidifies into a strong connection. Warm lighting, modern office backgrounds, smooth camera pan from left to right. Inspiring educational tone.'
    },
    {
        category: 'Virtual Teaming',
        title: 'Design Principles for Virtual Teams',
        prompt: 'A top-down view of a virtual whiteboard being drawn in real-time. A hand sketches a framework diagram with four pillars labeled: Clear Purpose, Structured Communication, Shared Technology, and Cultural Awareness. Each pillar lights up as it completes. Arrows connect them to a central "High-Performance Team" node. Clean line art style, dark background with neon-colored lines.'
    },

    // Leadership
    {
        category: 'Leadership',
        title: 'Transformational Leadership in Action',
        prompt: 'A visually striking scene of a leader standing before a team in a modern glass conference room. The leader gestures and ideas flow out as glowing particles that transform into project milestones floating above the table. Each team member catches a milestone and it becomes a completed task. Camera slowly orbits the room. Cinematic lighting with golden hour tones. Professional, inspiring atmosphere.'
    },
    {
        category: 'Leadership',
        title: 'Servant Leadership Concept',
        prompt: 'An animated diagram showing the traditional hierarchy pyramid flipping upside down. The leader moves from the top to the bottom, supporting the team above. As the pyramid inverts, team members rise and become more vibrant and productive. Smooth morphing animation, clean geometric shapes, blue-to-green gradient background. Educational motion graphics style.'
    },

    // Antifragility & Resilience
    {
        category: 'Antifragility',
        title: 'Antifragile Systems - Gaining from Disorder',
        prompt: 'Three glass objects side by side on a table: fragile (wine glass), robust (steel ball), and antifragile (a spring that grows). An earthquake shakes the table. The glass shatters, the steel ball stays the same, and the spring grows taller and stronger with each shake. Camera zooms into each reaction. Dramatic lighting, slow motion during the shake. Scientific documentary style.'
    },
    {
        category: 'Antifragility',
        title: 'The Barbell Strategy Explained',
        prompt: 'An animated infographic of a barbell shape. On the left heavy end: icons representing extremely safe investments (savings, bonds). On the right heavy end: icons for high-risk high-reward bets (startups, experiments). The thin bar in the middle is labeled "Nothing in between". Numbers and percentages animate in. Clean data visualization style, dark navy background, gold and silver accents.'
    },

    // AI & Technology
    {
        category: 'AI & Learning',
        title: 'How AI Transforms Learning',
        prompt: 'A student reading a static textbook. The pages lift off and transform into a holographic 3D interactive display showing animated diagrams, floating concepts, and interactive quizzes. The student reaches out and manipulates the holographic content. Futuristic classroom setting, blue holographic glow, smooth particle effects. Cinematic camera push-in from book to hologram.'
    },
    {
        category: 'AI & Learning',
        title: 'Neural Network Pattern Recognition',
        prompt: 'A macro visualization inside a neural network. Camera flies through layers of interconnected nodes pulsing with electric signals. Input images of handwritten digits enter from the left, travel through glowing pathways, and emerge as classified numbers on the right. Data particles flow along synaptic connections. Deep blue and electric purple color scheme, sci-fi aesthetic.'
    },
    {
        category: 'AI & Learning',
        title: 'The AI-Native Agile Team',
        prompt: 'A modern agile team sprint in action. Four team members at a kanban board, but AI assistants appear as translucent holographic helpers beside each person. One AI summarizes a document, another generates code, a third creates visual diagrams, and the fourth runs tests. Cards move across the board automatically. Bright, optimistic office setting, clean modern design.'
    },

    // Agile Methodology
    {
        category: 'Agile',
        title: 'The Agile Sprint Cycle',
        prompt: 'A circular animation showing the agile sprint cycle. Starting from Sprint Planning, the camera follows a glowing path through Daily Standups (people in a circle), Development (hands coding), Sprint Review (demo on screen), and Retrospective (thought bubbles with improvements). The cycle completes and spirals upward showing continuous improvement. Flat design animation, vibrant colors.'
    },
    {
        category: 'Agile',
        title: 'User Story Mapping Workshop',
        prompt: 'A birds-eye view of a table covered in colorful sticky notes. Hands arrange the notes into rows and columns forming a story map. The top row shows user activities, below are user tasks, and below those are individual stories. Some notes glow to indicate the MVP slice. Time-lapse feel, warm workshop lighting, shallow depth of field on featured notes.'
    },
];
