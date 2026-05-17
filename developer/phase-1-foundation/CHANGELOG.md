# CHANGELOG — Phase 1: Foundation

## [2026-05-17] Bug fix — Landscape compact layout (iPhone SE)

- Added: `src/styles/brand.css` — `@custom-variant landscape (@media (orientation: landscape))` custom Tailwind v4 variant
- Modified: `src/app/page.tsx` — applied `landscape:` compact overrides: `landscape:py-3` (section), `landscape:text-3xl landscape:mb-1` (h1), `landscape:mb-2` (badge + tagline), `landscape:mb-3 landscape:text-sm` (description); footer now visible without scroll on iPhone SE landscape (375×667)
- Verified: `npm run build` clean; `npm run test:e2e` 5/5 pass

## [2026-05-17] Bug fix — Landscape mode footer visibility

- Fixed: `src/app/layout.tsx` — `min-h-screen` → `min-h-dvh` on body (uses dynamic viewport height unit; `100vh` on iOS Safari over-counts toolbar height, `dvh` tracks the actual visible area); added `flex flex-col` to `<main>` so child `flex-1` works correctly
- Fixed: `src/app/page.tsx` — removed `min-h-[70vh]` (was forcing a height floor that overflowed in landscape); replaced with `flex-1` on section so it fills available main space naturally; reduced padding `py-20 sm:py-32` → `py-12 sm:py-20`
- Verified: `npm run test:e2e` — 5/5 pass across all device profiles; footer visible without scroll in landscape mode

## [2026-05-17] Bug fixes — Sticky Footer + Multi-Device Testing

- Fixed: `src/app/layout.tsx` — added `min-h-screen flex flex-col` to `<body>` and `flex-1` to `<main>`; footer now pins to bottom on short-content pages
- Modified: `playwright.config.ts` — replaced single `chromium` project with 5 device projects: Desktop Chrome, Desktop Firefox, Mobile Chrome (Pixel 5), Mobile Safari (iPhone 14), Tablet (iPad Pro)
- Installed: Playwright Firefox and WebKit browsers locally (`npx playwright install firefox webkit`)
- Verified: `npm run test:e2e` — 5/5 tests pass across all device profiles

## [2026-05-17] Prompt 005 — Coming Soon Homepage (Light + Dark Mode)

- Created: `developer/adr/009-dark-mode.md` — ADR documenting next-themes + Tailwind v4 class-based dark mode strategy
- Modified: `src/styles/brand.css` — added `@custom-variant dark (&:where(.dark, .dark *))` for Tailwind v4 `dark:` prefix support
- Created: `src/components/Providers.tsx` — `'use client'` ThemeProvider wrapper; `defaultTheme="system"`, `attribute="class"`, `enableSystem`
- Created: `src/components/ThemeToggle.tsx` — `'use client'` sun/moon toggle; `mounted` guard prevents hydration mismatch; uses `resolvedTheme` from next-themes; inline heroicons-style SVGs
- Modified: `src/app/layout.tsx` — added `suppressHydrationWarning` to `<html>`; updated body/header/footer with `dark:` utility variants; added `<Providers>` wrapper and `<ThemeToggle>` in header
- Created: `src/app/page.tsx` — Coming Soon page: metadata with `title.absolute`, branded hero section with `dark:` variants, LinkedIn/GitHub links
- Created: `e2e/homepage.spec.ts` — Playwright E2E smoke test: asserts title `/Ankur Nema/` and `getByRole('heading', { name: 'Ankur Nema' })` visible
- Verified: `npm run build` passes clean; `npm run test:e2e` 1/1 passed
- Modified: `vitest.config.ts` — added `include: ['src/**/*.{test,spec}.{ts,tsx}']` to prevent Vitest from picking up `e2e/` Playwright files
- Modified: `src/test/setup.ts` — added `window.matchMedia` mock (next-themes calls it in jsdom; not available by default)
- Decisions: used `title.absolute` to prevent root layout template double-append; used `getByRole('heading')` in E2E (not `getByText`) because "Ankur Nema" appears in 3 elements (header logo, h1, footer); ADR-009 written before code per AI-CONTEXT.md rule

## [2026-05-17] Prompt 004 — Root Layout

- Created: `developer/adr/008-google-font-loading.md` — ADR documenting next/font/google strategy (variable option, Tailwind v4 integration, Vitest mock convention)
- Modified: `src/styles/brand.css` — added `--font-sans` and `--font-heading` to `@theme {}` block, mapped to next/font CSS custom properties
- Modified: `src/app/layout.tsx` — full root layout: Inter + DM Sans font loading, metadata export (title template, description, openGraph, twitter, metadataBase), minimal header (LogoText linked to `/`), minimal footer (copyright + LinkedIn/GitHub)
- Created: `src/__tests__/layout.test.tsx` — Vitest test; mocks next/font/google; renders layout with dummy child; asserts `© YYYY Ankur Nema` in footer
- Verified: `npm run build` passes (clean, no warnings); `npm run test -- --run` 2/2 passed
- Decisions: LogoText used in header (not next/image) — public/logo.svg does not exist yet (pending Prompt 003b); metadataBase set to `https://ankurnema.in` to resolve OG/Twitter image URLs

## [2026-05-17] Prompt 003 — Branding

- Created: `src/styles/brand.css` — Tailwind v4 `@theme` block, 12 locked color tokens (6 light, 6 dark)
- Modified: `src/app/globals.css` — added `@import "../styles/brand.css"` after `@import "tailwindcss"`
- Created: `src/components/LogoText.tsx` — CSS text logo, variant prop (light/dark), Server Component; placeholder until Prompt 003b
- Created: `public/icon.svg` — AN monogram, 512×512, navy bg, white letterforms
- Created: `public/favicon.ico` — PNG-in-ICO (32×32, 16×16); generated via `scripts/generate-favicon.mjs`
- Created: `public/og-default.png` — 1200×630 placeholder, navy bg, white heading, amber tagline; generated via `scripts/generate-og.mjs`
- Created: `developer/phase-1-foundation/brand-guidelines.md` — color palette, approved pairings, colors to avoid, typography scale, logo/favicon/OG specs
- Created: `scripts/generate-favicon.mjs`, `scripts/generate-og.mjs` — one-shot asset generators using `sharp` (existing production dependency)
- Typography: Inter SemiBold 600 (headings), DM Sans Regular 400 (body) documented; font loading deferred to Prompt 004
- Verified: `npm run build` passes; `npm run test -- --run` 1/1 passed

## [2026-05-10] Prompt 002 — Testing Infrastructure

- Verified latest package versions with `npm show` before installing
- Installed devDependencies: `vitest@4.1.5`, `@vitest/coverage-v8@4.1.5`, `jsdom@29.1.1`,
  `@testing-library/react@16.3.2`, `@testing-library/jest-dom@6.9.1`,
  `@vitejs/plugin-react@6.0.1`, `@playwright/test@1.59.1`, `@lhci/cli@0.15.1`
- Ran: `npx playwright install chromium` (Chrome for Testing 147.0.7727.15, headless shell, FFmpeg)
- Created: `vitest.config.ts` (jsdom env, globals, setupFiles, coverage targeting src/)
- Created: `src/test/setup.ts` (imports @testing-library/jest-dom)
- Created: `src/__tests__/smoke.test.ts` (trivial passing test)
- Created: `src/test/` directory
- Created: `src/__tests__/` directory
- Created: `e2e/` directory (empty — E2E tests added per page in Prompts 005, 012, 016)
- Created: `playwright.config.ts` (chromium, passWithNoTests, baseURL localhost:3000, screenshot on failure)
- Created: `lighthouserc.json` (performance >= 0.8 error gate; accessibility/best-practices/SEO warn)
- Modified: `package.json` (added test, test:watch, test:coverage, test:e2e scripts + 8 devDeps)
- Behaviour note: Playwright 1.59.1 `passWithNoTests` option is not in the TypeScript type definitions for this version; fix is the `--pass-with-no-tests` CLI flag in the test:e2e script. Also: Next.js type-checks all `*.ts` files including playwright.config.ts — keeping config free of untyped options avoids build failures
- Verified: `npm run test -- --run` → 1/1 passed
- Verified: `npm run test:e2e` → exits 0 (0 test files)

## [2026-05-09] Prompt 001 — Scaffold Next.js

- Verified all 17 package versions against pinned table in PROMPT_TEMPLATE.md; all matched except ESLint (see below)
- Version drift found: ESLint 10.3.0 → downgraded to 9.39.4 (ESLint 10 incompatible with eslint-plugin-react bundled by eslint-config-next@16.2.6; that plugin only supports eslint ^9.7)
- Updated PROMPT_TEMPLATE.md: corrected ESLint version to 9.39.4 and added explanatory note
- Behaviour change found: `next lint` removed from Next.js 16 CLI; lint script now calls `eslint src/` directly
- ESLint config updated from FlatCompat pattern to native flat config (eslint-config-next 16 exports flat config arrays directly, no @eslint/eslintrc needed)
- Created: `package.json` with exact pinned versions (no CLI wizard)
- Ran: `npm install`
- Created: `next.config.ts`, `tsconfig.json`, `.nvmrc`, `.prettierrc`
- Created: `eslint.config.mjs` (ESLint 9 flat config, native eslint-config-next)
- Created: `postcss.config.mjs` (Tailwind v4, @tailwindcss/postcss, no autoprefixer)
- Created: `src/app/globals.css` (Tailwind v4 CSS-first, `@import "tailwindcss"`)
- Created: `src/app/layout.tsx`, `src/app/page.tsx` (minimal stubs for build)
- Created: `.mcp.json` at repo root (next-devtools-mcp per ADR-003)
- Next.js build auto-updated `tsconfig.json`: `jsx` → `react-jsx`, added `.next/dev/types/**/*.ts` to include
- Verified: `npm run lint` exits 0
- Verified: `npm run build` produces clean build (static `/` and `/_not-found`)
- Verified: `npm run dev` starts Turbopack dev server on port 3000, `GET / 200`
