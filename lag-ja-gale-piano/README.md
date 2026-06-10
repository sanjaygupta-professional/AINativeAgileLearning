# Lag Ja Gale — Piano Visual 🎹

A self-contained, zero-dependency web page that plays a piano instrumental
interpretation of the Hindi retro classic **"Lag Ja Gale"** (*Woh Kaun Thi*, 1964 —
Madan Mohan / Lata Mangeshkar) while an on-screen piano **plays itself**: the keys
press and glow, and colored "falling notes" (Synthesia-style) descend and land on
each key exactly when it sounds.

## How to run

Just open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari) and
press **▶ Play**. No build step, no install, no internet required — the piano sound
is synthesized live with the Web Audio API and the visuals are drawn on a `<canvas>`.

## What you get

- 🎵 **Live piano synthesis** — additive synth with a struck-string attack, long
  reverberant tail, and a warm algorithmic reverb. Nothing is pre-recorded.
- ⌨️ **Self-playing keyboard** — each key dips and glows the instant its note plays.
  You can also click any key to play it yourself.
- 🌊 **Falling notes** — warm amber (white keys) and rose (black keys) bars fall and
  hit the keyboard on the beat.
- 🎛️ **Controls** — Play/Pause, Restart, Tempo (50–100 BPM), Volume, and Loop.

## Editing the melody

This is a **melody-only, hand-transcribed interpretation**. Every note lives in one
place — the `MELODY` array near the top of the `<script>` in `index.html`:

```js
{ n:"G4", b:0, d:1 }   // note name, start beat, duration in beats
```

Change `n` (pitch), `b` (when it starts, in beats), or `d` (how long it holds) to
fine-tune the tune by ear. The audio and the visuals are driven from this same
array, so they always stay in sync.

## Notes on authenticity

We do **not** use the original recording or commercial sheet music — the melody is a
transcription played on a synthesized piano, colored with komal Ni (B♭) for the
song's longing feel. It's a recognizable cover, not a note-perfect studio score.
Treat the `MELODY` array as the place to refine it toward the exact phrasing you hear.
