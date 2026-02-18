# AI Video Learning Lab — Seedance 2.0

A lightweight web application that generates educational video clips using **ByteDance's Seedance 2.0** AI video generation model. Part of the [AI-Native Agile Learning](../) platform.

## What It Does

- **Text-to-Video**: Type or select an educational prompt and generate a short video clip (4–15 seconds, up to 1080p) with synchronized audio.
- **Image-to-Video**: Upload a reference image (diagram, slide, photo) and animate it with a motion prompt.
- **Educational Prompt Templates**: 12 pre-built prompts covering virtual teaming, leadership, antifragility, AI concepts, and agile methodology — all drawn from the platform's learning content.
- **Job Tracking**: Async polling UI with progress bar, elapsed time, and a session history of generated videos.

## Quick Start

1. Open `index.html` in any modern browser (no build step required).
2. Enter your Seedance 2.0 API key (stored in session storage only).
3. Select an API provider:
   - **Official**: `api.seedance.ai` (available after official launch ~Feb 24 2026)
   - **WaveSpeed AI**: third-party access available now
   - **Custom**: any OpenAI-compatible Seedance endpoint
4. Pick a template or write your own prompt, configure resolution/duration, and click **Generate Video**.

## Project Structure

```
seedance-video-app/
├── index.html          # Main UI
├── css/
│   └── style.css       # Dark-theme responsive styling
├── js/
│   ├── config.js       # API config & educational prompt templates
│   └── app.js          # Seedance 2.0 API integration & UI logic
└── README.md
```

## Seedance 2.0 API Flow

The app implements the standard async job workflow:

1. **Submit** — `POST /generate/text` (or `/generate/image`) with prompt + parameters
2. **Poll** — `GET /tasks/{job_id}` every 3 seconds until status is `completed` or `failed`
3. **Retrieve** — Extract video URL from the response and stream it in the browser

## Prompt Templates

| Category | Template |
|----------|----------|
| Virtual Teaming | Five Challenges of Virtual Teams |
| Virtual Teaming | Building Trust Across Boundaries |
| Virtual Teaming | Design Principles for Virtual Teams |
| Leadership | Transformational Leadership in Action |
| Leadership | Servant Leadership Concept |
| Antifragility | Antifragile Systems — Gaining from Disorder |
| Antifragility | The Barbell Strategy Explained |
| AI & Learning | How AI Transforms Learning |
| AI & Learning | Neural Network Pattern Recognition |
| AI & Learning | The AI-Native Agile Team |
| Agile | The Agile Sprint Cycle |
| Agile | User Story Mapping Workshop |

## Tech Stack

- Vanilla HTML/CSS/JavaScript — zero dependencies, no build step
- Seedance 2.0 REST API (async job-based)
- Responsive dark theme consistent with the platform's design

## Notes

- Your API key is stored in `sessionStorage` (cleared when the tab closes) and never sent anywhere except the configured Seedance endpoint.
- The official Seedance 2.0 API was announced February 10, 2026. Third-party providers offer access while the official endpoint stabilizes.
- Video generation typically takes 30–120 seconds depending on resolution and duration.
