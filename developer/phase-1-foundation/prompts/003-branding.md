# Prompt 003 — Branding

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/README.md` — phase objective and persona context
- `CLAUDE.md` — owner profile: Ankur Nema, Director – DevOps & Developer Productivity, consulting practice
- `developer/adr/001-tech-stack.md` — Tailwind v4 CSS-first context

## Scope
**In scope:**
- Color palette: primary, secondary, accent, neutral, and semantic colors (success, warning, error); dark-mode variants; all as CSS custom properties in Tailwind v4 `@theme` block
- Typography: select 1–2 Google Fonts (heading + body); document choice rationale; do NOT load fonts in this prompt — that happens in Prompt 004 (root layout)
- Logo assets: `public/logo.svg` (light background), `public/logo-dark.svg` (dark background) — SVG wordmark "Ankur Nema" with a minimal abstract mark if final logo is not yet designed; mark clearly as v0 placeholder in SVG `<title>`
- Favicon: `public/favicon.ico` and `public/icon.svg` (must match logo mark)
- OG image placeholder: `public/og-default.png` (1200×630, brand colors + name + tagline text as placeholder)
- `src/styles/brand.css`: Tailwind v4 `@theme` block with all color and spacing tokens; imported in `src/app/globals.css`
- `developer/phase-1-foundation/brand-guidelines.md`: brand reference document — color hex values + usage rules, font names + weights, logo usage rules (min size, clear space, do/don't), spacing scale

**Out of scope:**
- Font loading in Next.js (Prompt 004 — root layout)
- Applying brand to any page or component (Prompts 004 onward)
- Final professional logo design — a clean placeholder SVG is acceptable
- Dark mode toggle / system preference detection (later phase)

## End Deliverable
- `src/styles/brand.css` — Tailwind v4 `@theme` block with complete color token system; imported in `globals.css`
- `public/logo.svg` and `public/logo-dark.svg` — SVG wordmarks
- `public/favicon.ico` and `public/icon.svg`
- `public/og-default.png` — 1200×630 placeholder with brand colors
- `developer/phase-1-foundation/brand-guidelines.md` — brand reference document
- `npm run build` still passes after CSS additions
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Prompt

You are executing Prompt 003 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `CLAUDE.md` (owner: Ankur Nema, DevOps Director, consulting)
3. `developer/adr/001-tech-stack.md` (Tailwind v4 CSS-first)

**Task:** Define the brand system for ankurnema.in and create all brand asset files.

**Brand context:** Ankur Nema is a DevOps Director and consultant. The brand should feel: professional, modern, technical (but approachable), trustworthy. Avoid startup-flashy; prefer refined and confident. Think clean dark/light palette suitable for a technical consulting practice.

Step 1 — Color system:
Design a color palette appropriate for a DevOps consulting personal brand. Suggest colors but explain rationale. Create `src/styles/brand.css` using Tailwind v4's `@theme {}` block:
```css
@theme {
  --color-primary-*: ...;
  --color-secondary-*: ...;
  --color-accent-*: ...;
  --color-neutral-*: ...;
  /* semantic: success, warning, error */
}
```
Import this file in `src/app/globals.css` with `@import "../styles/brand.css"` (after the Tailwind import).

Step 2 — Typography:
Choose 1–2 Google Fonts suitable for a professional consulting brand. Document the choices and reasoning in `brand-guidelines.md`. Do NOT add `next/font` loading here — that goes in the root layout (Prompt 004).

Step 3 — Logo SVGs:
Create `public/logo.svg` — SVG wordmark "Ankur Nema" with a minimal abstract mark (e.g., initials "AN" as a geometric shape). Create `public/logo-dark.svg` for use on dark backgrounds. Both must be clean, scalable SVGs. Add `<title>Ankur Nema logo (placeholder v0)</title>` in the SVG.

Step 4 — Favicon:
Create `public/icon.svg` — simplified version of the logo mark. Generate `public/favicon.ico` from it (16×16 and 32×32 embedded, or a single 32×32 ICO).

Step 5 — OG image placeholder:
Create `public/og-default.png` at 1200×630. Use brand primary color as background, "Ankur Nema" in the heading font, tagline "DevOps Consulting · Mentoring · Career Guidance" in body font. This can be generated programmatically or as a static file — a clean static placeholder is fine.

Step 6 — Brand guidelines doc:
Write `developer/phase-1-foundation/brand-guidelines.md` covering:
- Color palette: hex values, Tailwind token names, and when to use each
- Typography: font names, weights, sizes for heading/body/caption
- Logo usage: min size, clear space, which variant to use on which background
- OG image spec

Step 7 — Verify: Run `npm run build` — confirm no CSS errors. Confirm `src/styles/brand.css` is imported and Tailwind resolves the custom tokens.

Step 8 — Update CHANGELOG: Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
