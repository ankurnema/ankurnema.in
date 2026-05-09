# Prompt 004 — Root Layout

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/brand-guidelines.md` — brand colors, fonts, logo usage (created in Prompt 003)
- `developer/adr/007-app-router.md` — App Router layout conventions
- `src/styles/brand.css` — brand tokens to use in the layout

## Scope
**In scope:**
- `src/app/layout.tsx` — root layout with:
  - Google Font loading via `next/font/google` (fonts chosen in Prompt 003)
  - `<html>` and `<body>` with font class applied
  - Minimal header: logo/wordmark (links to `/`), no nav links to other routes (all hidden until v0.2)
  - Minimal footer: copyright line `© YYYY Ankur Nema`, minimal text links (e.g., LinkedIn, GitHub) — no links to hidden site routes
  - Exported `metadata` object using Next.js Metadata API: `title`, `description`, `openGraph`, `twitter` fields
  - Import `src/app/globals.css`
- `src/app/globals.css` — confirm brand CSS and Tailwind imports are present (do not duplicate — just verify)
- Vitest unit test: `src/__tests__/layout.test.tsx` — renders the layout and asserts the footer copyright text is present

**Out of scope:**
- Navigation links to any page other than `/` (hidden routes link to nothing in the nav — per AI-CONTEXT.md)
- Dark mode toggle
- Mobile navigation menu (v0.2)
- Analytics scripts (v0.4)

## End Deliverable
- `src/app/layout.tsx` present with header, footer, font loading, and metadata export
- `src/__tests__/layout.test.tsx` — Vitest test passes
- `npm run build` passes
- `npm run test` passes
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Prompt

You are executing Prompt 004 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/brand-guidelines.md` (brand colors, fonts, logo)
3. `developer/adr/007-app-router.md`
4. `src/styles/brand.css` (brand tokens)

**Task:** Create the root layout for ankurnema.in.

Step 1 — Font loading:
In `src/app/layout.tsx`, import the Google Font(s) documented in `brand-guidelines.md` using `next/font/google`. Apply the font `className` to `<html>` or `<body>`.

Step 2 — Metadata:
Export a `metadata` object (Next.js Metadata API):
```ts
export const metadata: Metadata = {
  title: { default: 'Ankur Nema', template: '%s | Ankur Nema' },
  description: 'DevOps Consulting · Mentoring · Career Guidance',
  openGraph: { ... },
  twitter: { ... },
}
```

Step 3 — Header:
Minimal header with:
- Logo/wordmark from `public/logo.svg` using `next/image`, linking to `/`
- NO navigation links to any other route (all routes are hidden until v0.2)
- Responsive: full-width, appropriate padding

Step 4 — Footer:
Minimal footer with:
- Copyright: `© {new Date().getFullYear()} Ankur Nema`
- 2–3 external links only: LinkedIn (`https://linkedin.com/in/ankurnema`), GitHub (`https://github.com/ankurnema`)
- NO links to internal routes

Step 5 — Globals CSS:
Open `src/app/globals.css` and confirm it contains `@import "tailwindcss"` and `@import "../styles/brand.css"`. Do not duplicate — add only what is missing.

Step 6 — Vitest test:
Create `src/__tests__/layout.test.tsx`. Render the layout with a dummy child and assert the footer copyright text `Ankur Nema` is present in the document.

Step 7 — Verify: Run `npm run build` and `npm run test`. Fix any errors.

Step 8 — Update CHANGELOG: Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
