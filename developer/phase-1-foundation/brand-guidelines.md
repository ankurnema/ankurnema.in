# Brand Guidelines — ankurnema.in

> **Status:** Phase 1 active. CSS text logo in use. Final SVG logo pending from designers.
> **Last updated:** 2026-05-17 (Prompt 003)

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

**Current treatment (Prompt 003):** CSS text logo rendered by `src/components/LogoText.tsx`.

- `variant="light"` (default) — "Ankur Nema" in `text-brand-navy` (`#1E3A5F`) on light backgrounds
- `variant="dark"` — "Ankur Nema" in `text-brand-navy-dark` (`#3B82F6`) on dark/navy backgrounds
- Classes applied: `font-semibold tracking-tight`

**Pending:** Final SVG logo files from professional designers. When delivered:

1. `public/logo.svg` — wordmark for light backgrounds
2. `public/logo-dark.svg` — wordmark for dark/navy backgrounds
3. Execute Prompt 003b to replace `LogoText.tsx` with `<Image>` components
4. Update this section with minimum size (≥120px width), clear space rules, and do/don't examples

---

## Favicon

**Files:** `public/icon.svg` + `public/favicon.ico`

The favicon is an "AN" monogram mark — independent of the final wordmark logo and permanent:

- 512×512 SVG canvas (`public/icon.svg`)
- Navy background rectangle: `#1E3A5F`
- "AN" in white, Inter SemiBold 600, centered via `text-anchor="middle" dominant-baseline="central"`
- `public/favicon.ico` — PNG-in-ICO format at 32×32 and 16×16

This mark remains the site favicon even after the wordmark SVG is delivered via Prompt 003b.

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
