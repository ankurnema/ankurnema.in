# Prompt 003 — Branding

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/README.md` — phase objective and persona context
- `CLAUDE.md` — owner profile: Ankur Nema, Director – DevOps & Developer Productivity, consulting practice
- `developer/adr/001-tech-stack.md` — Tailwind v4 CSS-first context

> **Brand colors and typography are specified in this prompt — do not invent or suggest alternatives.**
> These are locked Tier 1 brand decisions. Implement them exactly as given.

## Scope
**In scope:**
- Color palette: all tokens provided below; light and dark variants; all as CSS custom properties in Tailwind v4 `@theme` block
- Typography: Inter (headings) + DM Sans (body) — document in brand-guidelines.md; do NOT load fonts in this prompt — that happens in Prompt 004 (root layout)
- CSS text logo: `src/components/LogoText.tsx` — React component rendering "Ankur Nema" as styled text using brand tokens; two variants (`light` / `dark`); no SVG logo files — final logo is in progress with designers
- Favicon: `public/favicon.ico` and `public/icon.svg` — "AN" monogram as a geometric SVG mark on navy background
- OG image placeholder: `public/og-default.png` (1200×630, brand colors + name + tagline text as placeholder)
- `src/styles/brand.css`: Tailwind v4 `@theme` block with all color tokens; imported in `src/app/globals.css`
- `developer/phase-1-foundation/brand-guidelines.md`: brand reference document — exact hex values + usage rules, font names + weights, logo usage rules (min size, clear space, do/don't), spacing scale

**Out of scope:**
- Font loading in Next.js (Prompt 004 — root layout)
- Applying brand to any page or component (Prompts 004 onward)
- SVG logo or monogram files — final logo is being designed; use CSS text treatment until Prompt 003b
- Dark mode toggle / system preference detection (later phase)

## End Deliverable
- `src/styles/brand.css` — Tailwind v4 `@theme` block with complete color token system; imported in `globals.css`
- `src/components/LogoText.tsx` — CSS text logo component ("Ankur Nema") with light/dark variants
- `public/favicon.ico` and `public/icon.svg` — AN monogram mark
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

**Brand context:** Ankur Nema is a DevOps Director and consultant. The brand personality is: Authoritative, Warm, Grounded, Modern, Calm. "Calm" is the dominant visual attribute — soothing, professional, no visual noise. Target audience: mid-career Indian engineers (3–8 years) and early-stage startups. The aesthetic is refined and confident, not startup-flashy.

---

Step 1 — Color system:

Create `src/styles/brand.css` using Tailwind v4's `@theme {}` block with these exact tokens — do not change hex values:

```css
@theme {
  /* Light mode */
  --color-brand-navy:     #1E3A5F;  /* Primary — CTAs, headings, nav, hero bg */
  --color-brand-slate:    #4A5568;  /* Secondary — body text, borders, metadata */
  --color-brand-amber:    #D4A017;  /* Accent — highlights only; never bg behind white text */
  --color-brand-canvas:   #F7F8FA;  /* Page background */
  --color-brand-surface:  #FFFFFF;  /* Cards, inputs, modals */
  --color-brand-charcoal: #1A202C;  /* Primary body text */
  /* Dark mode */
  --color-brand-navy-dark:     #3B82F6;
  --color-brand-slate-dark:    #94A3B8;
  --color-brand-amber-dark:    #FBBF24;
  --color-brand-canvas-dark:   #111827;
  --color-brand-surface-dark:  #1F2937;
  --color-brand-charcoal-dark: #F9FAFB;
}
```

Import this file in `src/app/globals.css` with `@import "../styles/brand.css"` placed AFTER the Tailwind import.

Step 2 — Typography:

The brand typefaces are locked:
- **Headings:** Inter, weight 600 (SemiBold)
- **Body:** DM Sans, weight 400 (Regular)

Do NOT add `next/font` loading here — that goes in the root layout (Prompt 004). Document both choices with their weights and usage contexts in `brand-guidelines.md`.

Step 3 — CSS text logo:

The final logo is being created by professional designers. Until it is ready, use a CSS text treatment.

Create `src/components/LogoText.tsx`:
- Renders "Ankur Nema" as a styled `<span>` using brand CSS tokens
- Accepts a `variant` prop: `"light"` (default) uses navy (`#1E3A5F`) text; `"dark"` uses sky-blue (`#3B82F6`) text
- Apply Tailwind classes: `font-semibold tracking-tight` — clean wordmark feel
- Add this comment at the top of the file: `// CSS text logo — replace with SVG <Image> via Prompt 003b when logo files are delivered`
- Do NOT create `public/logo.svg` or `public/logo-dark.svg` — those files do not exist yet

Step 4 — Favicon / icon mark:

Create `public/icon.svg` — a geometric "AN" monogram mark:
- Square viewbox (512×512)
- Navy background rectangle (`#1E3A5F`)
- "AN" letterforms in white — clean sans-serif rendering; Inter SemiBold style
- This mark is independent of the final logo and is suitable as a permanent favicon

Generate `public/favicon.ico` from `public/icon.svg` at 32×32 and 16×16 embedded sizes. A static ICO file is preferred over a build-time dependency — avoid adding a new npm package solely for this step if a static file suffices.

Step 5 — OG image placeholder:

Create `public/og-default.png` at 1200×630:
- Background: `#1E3A5F` (brand-navy)
- Primary text: "Ankur Nema" — large, white, Inter SemiBold style
- Secondary text: "DevOps Consulting · Mentoring · Career Guidance" — smaller, `#D4A017` (brand-amber)
- A clean static placeholder PNG is acceptable — no programmatic generation required in this prompt

Step 6 — Brand guidelines doc:

Write `developer/phase-1-foundation/brand-guidelines.md` covering:
- Color palette: exact hex values (from Step 1), Tailwind CSS token names, and when to use each color
- Approved pairings: hero (navy bg + white text + amber accent), body/blog (canvas bg + charcoal text), primary CTA (navy bg + white text), secondary CTA (white bg + navy text + 2px navy border)
- Colors to avoid: pure black `#000000`, any red or orange, teal/cyan, neon or high-saturation variants
- Typography: Inter SemiBold 600 for headings, DM Sans Regular 400 for body — include recommended sizes (h1/h2/h3, body, caption)
- Logo: note that CSS text logo (`LogoText.tsx`) is the current treatment; final SVG logo is pending from designers; update this doc when Prompt 003b is executed
- Favicon: AN monogram on navy background — describe the 512×512 SVG and ICO sizes
- OG image spec: 1200×630, navy background, white heading, amber subheading

Step 7 — Verify:

Run `npm run build` — confirm no CSS errors. Confirm `src/styles/brand.css` is imported and Tailwind resolves at least one custom token (e.g., `text-brand-navy` should compile without error). If the build fails due to CSS import order with Tailwind v4, ensure the `@import "../styles/brand.css"` line appears AFTER `@import "tailwindcss"` in `globals.css`.

Step 8 — Update CHANGELOG:

Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
