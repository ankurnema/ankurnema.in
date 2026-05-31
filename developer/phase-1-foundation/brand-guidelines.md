# Brand Guidelines — ankurnema.in

> **Status:** Phase 1 active. Designer SVG logo integrated (Prompt 003b).
> **Last updated:** 2026-05-17 (Prompt 003b)

---

## Color Palette

| Token Name | CSS Variable | Hex | Usage |
|---|---|---|---|
| brand-navy | `--color-brand-navy` | `#1E3A5F` | CTAs, headings, nav, hero background |
| brand-slate | `--color-brand-slate` | `#4A5568` | Body text, borders, metadata |
| brand-amber | `--color-brand-amber` | `#D4A017` | Accent highlights only; never as background behind white text |
| brand-canvas | `--color-brand-canvas` | `#F7F8FA` | Page background |
| brand-surface | `--color-brand-surface` | `#FFFFFF` | Cards, inputs, modals |
| brand-charcoal | `--color-brand-charcoal` | `#1A202C` | Primary body text |
| brand-navy-dark | `--color-brand-navy-dark` | `#3B82F6` | Dark mode: primary color |
| brand-slate-dark | `--color-brand-slate-dark` | `#94A3B8` | Dark mode: secondary/metadata |
| brand-amber-dark | `--color-brand-amber-dark` | `#FBBF24` | Dark mode: accent |
| brand-canvas-dark | `--color-brand-canvas-dark` | `#111827` | Dark mode: page background |
| brand-surface-dark | `--color-brand-surface-dark` | `#1F2937` | Dark mode: cards |
| brand-charcoal-dark | `--color-brand-charcoal-dark` | `#F9FAFB` | Dark mode: primary body text |

All tokens are defined in `src/styles/brand.css` as Tailwind v4 `@theme` CSS custom properties.
Use Tailwind utility classes: `text-brand-navy`, `bg-brand-navy`, `border-brand-navy`, etc.

These hex values are **Tier 1 locked brand decisions** — do not change them.

---

## Approved Color Pairings

| Context | Background | Text | Accent/Border |
|---|---|---|---|
| Hero section | `bg-brand-navy` (`#1E3A5F`) | `text-white` | `text-brand-amber` (`#D4A017`) |
| Body / Blog | `bg-brand-canvas` (`#F7F8FA`) | `text-brand-charcoal` (`#1A202C`) | — |
| Primary CTA button | `bg-brand-navy` (`#1E3A5F`) | `text-white` | — |
| Secondary CTA button | `bg-brand-surface` (`#FFFFFF`) | `text-brand-navy` (`#1E3A5F`) | `border-brand-navy` (2px) |

---

## Colors to Avoid

- Pure black `#000000` — use `brand-charcoal` (`#1A202C`) instead
- Any red or orange (e.g. `#FF0000`, `#FF6600`) — brand personality is calm, not alarming
- Teal or cyan (e.g. `#00B4D8`, `#06B6D4`) — conflicts with the navy palette
- Neon or high-saturation variants — the brand is calm and grounded

---

## Typography

| Role | Font | Weight | Tailwind class |
|---|---|---|---|
| H1 | Inter | 600 (SemiBold) | `font-semibold` |
| H2 | Inter | 600 (SemiBold) | `font-semibold` |
| H3 | Inter | 600 (SemiBold) | `font-semibold` |
| Body | DM Sans | 400 (Regular) | `font-normal` |
| Caption | DM Sans | 400 (Regular) | `font-normal text-sm` |

Recommended sizes:

| Element | Size | Tailwind |
|---|---|---|
| H1 | 48px / 3rem | `text-5xl` |
| H2 | 36px / 2.25rem | `text-4xl` |
| H3 | 24px / 1.5rem | `text-2xl` |
| Body | 16px / 1rem | `text-base` |
| Caption | 14px / 0.875rem | `text-sm` |

Font loading is handled in Prompt 004 (root layout) using `next/font/google`.

---

## Logo

### Files

| File | Use |
|------|-----|
| `public/logo/logo-light.svg` | Wordmark — white/canvas backgrounds |
| `public/logo/logo-dark.svg` | Wordmark — navy/dark backgrounds |
| `public/logo/monogram-light.svg` | Monogram mark — light backgrounds |
| `public/logo/monogram-dark.svg` | Monogram mark — dark backgrounds |

### Component

`src/components/LogoText.tsx` — `variant="light"` (default) renders `logo-light.svg`; `variant="dark"` renders `logo-dark.svg`. Both accept an optional `className` prop.

### Minimum display size

120px width minimum for the wordmark.

### Clear space

Maintain at least the logo's own height as clear space on all sides.

### When to use each variant

- `logo-light.svg` / `variant="light"` — on `bg-brand-canvas`, `bg-brand-surface`, white backgrounds
- `logo-dark.svg` / `variant="dark"` — on `bg-brand-navy` (hero, dark sections, dark mode headers)

---

## Favicon

**Files:** `public/icon.svg` + `public/favicon.ico`

The favicon uses the designer's AN monogram mark (`public/logo/monogram-light.svg`), which is a transparent-background SVG suitable for browser tabs (light background contexts):

- `public/icon.svg` — designer AN monogram (blue→navy gradient, transparent background, viewBox 157.12 × 144.19)
- `public/favicon.ico` — PNG-in-ICO format at 32×32 and 16×16, generated from `icon.svg`

**To regenerate** (e.g., after updating `icon.svg`): `node scripts/generate-favicon.mjs`

---

## OG Image

**File:** `public/og-default.png`
**Dimensions:** 1200×630 pixels

Spec:

| Element | Value |
|---|---|
| Background | `#1E3A5F` (brand-navy) |
| Primary heading | "Ankur Nema" — white, Inter SemiBold, 88px, horizontally centered |
| Divider | Thin horizontal rule, `#D4A017` (amber) |
| Tagline | "Mentoring · Career Guidance · Resume Review" — `#D4A017` (amber), 36px, centered |

**To regenerate:** `node scripts/generate-og.mjs`

Page-specific OG images will override this default in later prompts using Next.js `generateMetadata`.
