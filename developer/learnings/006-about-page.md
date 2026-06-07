# 006 — About Page

**Date:** 2026-06-07 (updated 2026-06-08)
**Prompt:** 006-about-page.md

## Learning 1 — Dev server must be running before `npm run test:e2e`

### What Happened
Running `npm run test:e2e` without a dev server produced 25 failures (all `ERR_CONNECTION_REFUSED`). The server was started manually and tests then passed 25/25.

### Why
`playwright.config.ts` has no `webServer` block. Playwright does not auto-start the server — it expects `localhost:3000` to already be listening. Previous E2E runs (prompt 005) passed because the dev server happened to be running at the time.

### Takeaway
Before running `npm run test:e2e` locally, always start the dev server first:
```bash
npm run dev &
npx wait-on http://localhost:3000
npm run test:e2e
```
Or one-liner: `npm run dev & npx wait-on http://localhost:3000 && npm run test:e2e`

Adding a `webServer` block to `playwright.config.ts` would auto-start it, but that was deferred — it would slow down CI since CI uses `next build` + `next start`, not `next dev`.

## Learning 2 — `getByText` strict mode with repeated number strings

### What Happened
The prompt spec used `page.getByText('17+')` in the stats test. The string "17+" also appears in the hero paragraph ("I have spent 17+ years…"). Per learning-005, `getByText` in strict mode fails when text appears in multiple elements.

### Why
Playwright `getByText` without `{ exact: true }` does substring matching, so the hero `<p>` element also matches.

### Takeaway
Any stat or number string that also appears in body copy must use `{ exact: true }`:
```ts
await expect(page.getByText('17+', { exact: true })).toBeVisible()
```
This is now applied in `e2e/about.spec.ts:16`.

---

## Learning 3 — `lucide-react` does not export `Github` or `Linkedin` icons

### What Happened
The homepage used `import { Linkedin, Github } from 'lucide-react'`, which threw a build error:
`Export 'Github' (imported as 'Github') was not found in 'lucide-react'`.

### Why
The version of `lucide-react` installed in this project predates the addition of brand mark icons.
`Github` and `Linkedin` are not available — lucide only ships these in newer releases, and the
brand-mark icons are periodically added/renamed across versions.

### Takeaway
Never assume brand/social icons exist in `lucide-react`. For LinkedIn, GitHub, X (Twitter), and
similar brand icons, use inline SVGs sourced from the official brand mark (SimpleIcons paths work
well). The paths used in this project are stored in `src/app/page.tsx` hero section.

---

## Learning 4 — SVG canvas whitespace makes logos appear tiny

### What Happened
Convergys and NetCracker logos appeared visually smaller than SAP/Amdocs even with identical
`height: 64px` constraints. The SVG files had large empty canvas areas — Convergys had
`width="1200" height="800"` with actual logo content filling only ~27% of that height.

### Why
`objectFit: contain` scales the image to fit within the element's bounds while preserving
aspect ratio. When the SVG's `viewBox` includes large empty margins, the browser treats the
full canvas (including whitespace) as the image — so the visible logo shrinks to a fraction
of the element height.

### Takeaway
Before using an SVG logo, check its `viewBox` against actual content bounds. Use browser
`getBBox()` to measure real content extents:
```js
// paste in DevTools console while SVG is visible
document.querySelector('svg').getBBox()
// returns: { x, y, width, height } — the tight bounding box around actual content
```
Then crop the `viewBox` to match: `viewBox="x-3 y-3 width+6 height+6"` (3px padding each side).
Alternatively, replace with a Wikipedia/SimpleIcons version which typically has tight dimensions.

---

## Learning 5 — Wide-ratio logos letterbox inside fixed-height containers

### What Happened
With `height: 48px; maxWidth: 152px; objectFit: contain`, Broadcom (7.37:1 ratio) rendered its
visible logo content at only ~21px tall inside the 48px element — letterboxed above and below.

### Why
`objectFit: contain` in a fixed-height element scales the image so its longest dimension fits.
For a 7.37:1 logo in a 152×48px box: scaling to fit height → 7.37×48 = 354px wide (exceeds
maxWidth), so it scales to fit width → 152×20.6px. The image occupies only 20.6px of the 48px
height. Visual height ≠ element height when aspect ratios differ greatly.

### Takeaway
For mixed-ratio logos, increase both `height` and `maxWidth` together to give wide logos more
room. Final values in this project: `height: 64px; width: auto; maxWidth: 202px` in a 250×110px
card. Logos with extreme ratios (Broadcom 7.37:1) will still appear shorter than square logos —
this is unavoidable without distortion. Accept the difference; do not stretch.

---

## Learning 6 — Justified text is not appropriate for web body copy

### What Happened
Question raised whether paragraph text should use `text-align: justify` for a more professional look.

### Why
Justified text works in print where typesetting controls precise word spacing and hyphenation.
In browsers, without `hyphens: auto` (which has inconsistent cross-browser support), justified
text creates uneven word gaps ("rivers of white space") that hurt readability, especially at
variable container widths on responsive layouts.

### Takeaway
Use left-aligned (`text-left`) for all body copy on the web. Every major professional web
publication (Medium, Substack, LinkedIn) uses left-align. Justified text reads as "trying to look
like a Word document" rather than professionally designed. Do not revisit this decision.
