# WA Motorcycle Knowledge Test — practice app

A bilingual (English / Русский) interactive web app to help prepare for the
Washington State motorcycle endorsement knowledge test.

**Live site:** https://sergeisysoev.github.io/wa-moto-prep/

## What it does
- One question at a time with four tappable answer cards.
- Tap an answer → instantly shows correct / incorrect (color **and** icon), and
  reveals the explanation with a citation to the official manual page.
- Language switch (EN / РУ) at the top-right — swaps everything instantly,
  keeps your place.
- Light & automatic dark mode, mobile-first, keyboard support (keys 1–4, Enter),
  screen-reader accessible.

## Content source
Practice questions are based on the official **Washington Motorcycle Operator
Manual**. Each explanation cites the manual page it comes from.

Full bank: **225 questions** — 199 text questions plus **26 picture questions**
built from the manual's figures (`img/`). Each practice session is a **topic-balanced
25-question set** (mirrors the real WA endorsement test: 25 questions, 80% to pass),
drawn at random so questions don't repeat within a topic until its pool is exhausted.

## Files
- `index.html` — the whole app (HTML + CSS + JS, no build step).
- `questions.js` — bilingual question data + UI strings.
- `.nojekyll` — tells GitHub Pages to serve files as-is.

## How to add questions
Append objects to `QUESTIONS` in `questions.js`:
```js
{ id: 6, page: '1-3', answer: 1,
  q:   { en: '...', ru: '...' },
  opts:[ {en:'...',ru:'...'}, {en:'...',ru:'...'}, {en:'...',ru:'...'}, {en:'...',ru:'...'} ],
  why: { en: '...', ru: '...' } }
```
`answer` is the 0-based index of the correct option. EN and RU options stay
index-aligned so the language toggle can never desync the correct answer.
After a content change, bump `questions.js?v=N` in `index.html` to beat the CDN cache.
