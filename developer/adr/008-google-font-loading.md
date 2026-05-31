# ADR-008: Google Font Loading via next/font/google

| Field | Value |
|-------|-------|
| **Status** | Accepted |
| **Date** | May 2026 |
| **Decided by** | Ankur Nema |
| **Related** | [ADR-001](001-tech-stack.md) — Tech stack, [ADR-007](007-app-router.md) — App Router |

---

## Context

The brand typography (documented in `developer/phase-1-foundation/brand-guidelines.md`) requires
two Google Fonts: **Inter** (headings, SemiBold 600) and **DM Sans** (body, Regular 400).

Google Fonts can be loaded several ways in a Next.js project:
1. A `<link>` tag pointing to `fonts.googleapis.com` in the HTML `<head>`
2. Self-hosted font files in `public/fonts/`
3. `next/font/google` — Next.js's built-in font module

The choice affects performance (layout shift, flash of unstyled text), privacy (third-party
requests), and Tailwind v4 integration.

---

## Options

### Option 1 — HTML `<link>` tag to Google Fonts CDN

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=DM+Sans&display=swap" rel="stylesheet">
```

| | Detail |
|--|--------|
| Bad | Sends a request to Google's servers on every page load — GDPR/privacy concern |
| Bad | Causes CLS (Cumulative Layout Shift) — font loads after initial paint |
| Bad | Requires `<head>` management; App Router metadata API doesn't cover this natively |
| Verdict | Rejected |

---

### Option 2 — Self-hosted font files in `public/fonts/`

Download the font files and serve them with `@font-face` declarations in CSS.

| | Detail |
|--|--------|
| Good | Full control, no third-party requests |
| Good | Works with any CSS toolchain |
| Bad | Manual download and update process |
| Bad | No automatic subsetting — ships more bytes than necessary |
| Bad | No built-in preload hints or size-adjust for CLS prevention |
| Verdict | Rejected for this phase (acceptable if Google CDN blocked in future) |

---

### Option 3 — `next/font/google` (Chosen)

Next.js's built-in font module. Downloads fonts at build time, serves them from the same
domain, and automatically injects `size-adjust` and `preload` hints.

```tsx
import { Inter, DM_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-inter', display: 'swap' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400'], variable: '--font-dm-sans', display: 'swap' })
```

| | Detail |
|--|--------|
| Good | Zero layout shift — `size-adjust` and `font-display: swap` built in |
| Good | No third-party requests — fonts served from ankurnema.in domain |
| Good | Automatic subsetting — only the characters actually used are downloaded |
| Good | `variable` option exposes a CSS custom property (`--font-inter`, `--font-dm-sans`) on `<html>` |
| Good | CSS custom properties work seamlessly with Tailwind v4 `@theme` font utilities |
| Neutral | Fonts are resolved at build time — `next/font/google` must be mocked in Vitest tests |
| Verdict | Accepted |

---

## Decision

Use `next/font/google` with the `variable` option for both Inter and DM Sans.

Load both fonts in `src/app/layout.tsx` (the root layout — they only need to be loaded once).
Apply both variable class names to the `<html>` element so CSS custom properties cascade to
all descendants.

Map the CSS custom properties to Tailwind v4 font utilities in `src/styles/brand.css`:

```css
@theme {
  --font-sans:    var(--font-dm-sans);   /* → font-sans utility = DM Sans body font */
  --font-heading: var(--font-inter);     /* → font-heading utility = Inter heading font */
}
```

This gives every page component access to `font-sans` (body) and `font-heading` (headings)
as Tailwind utility classes.

---

## Vitest Test Convention

Because `next/font/google` is a build-time module, it throws or behaves unexpectedly in the
jsdom test environment. Any test file that imports a component which uses `next/font/google`
must mock the module:

```ts
vi.mock('next/font/google', () => ({
  Inter: () => ({ className: '', variable: '--font-inter' }),
  DM_Sans: () => ({ className: '', variable: '--font-dm-sans' }),
}))
```

---

## Consequences

**Benefits:**
- CLS score of 0 for font loading — Lighthouse will not penalise for font-related layout shift
- No cross-origin font requests — GDPR-safe, no external tracking exposure
- Tailwind utilities `font-sans` and `font-heading` available everywhere in the app

**Tradeoffs:**
- `next/font/google` must be mocked in Vitest tests — minor test setup overhead
- Fonts are fetched from Google at build time (not at runtime) — requires internet access during `next build`

---

## Review Trigger

Revisit if Google Fonts CDN access is unavailable during CI builds. In that case, switch to
Option 2 (self-hosted) by downloading the current font files and replacing the `next/font/google`
import with `next/font/local`.
