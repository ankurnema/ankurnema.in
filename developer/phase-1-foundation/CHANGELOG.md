# CHANGELOG — Phase 1: Foundation

## [2026-06-14] Prompt 011b — Services: LinkedIn Review Page

- Expanded `/services/linkedin-review` from stub to full page: hero with prompt-specified intro, "What's included" section (5 items with CheckCircle2 cards in 2-col grid), "How it works" section (5 numbered + icon step cards), mailto CTA with standalone-service note
- E2E smoke test passes across all 5 browser configs; `npm run build` clean
- Files created: `e2e/services-linkedin-review.spec.ts`
- Files modified: `src/app/services/linkedin-review/page.tsx` (replaced stub with full content)
- Decisions made: `{ exact: true }` on Playwright heading locator per learning 009; "What's included" uses CheckCircle2 icon list cards; "How it works" reuses numbered-circle + icon card pattern from resume-review

## [2026-06-14] Prompt 011 — Services: Resume Review Page

- Expanded `/services/resume-review` from stub to full page: hero with prompt-specified intro, 6-step "How it works" process section (numbered + icon cards in 2-col grid), 4-tier "Review tiers" section (Quick/Deep/Full Makeover/JD-Based add-on), mailto CTA
- E2E smoke test passes across all 5 browser configs; `npm run build` clean
- Files created: `e2e/services-resume-review.spec.ts`
- Files modified: `src/app/services/resume-review/page.tsx` (replaced stub with full content)
- Decisions made: JD-Based Review rendered with amber dashed border + "Add-on" badge to distinguish it visually; `{ exact: true }` on Playwright heading locator per learning 009 (tier headings contain "Review")

## [2026-06-14] Prompt 010 — Services: Career Guidance Page

- Expanded `/services/career` from stub to full page: hero with real intro, two offering cards (Career Strategy Session + Career Audit Package), "Who this is for" section with persona chips, mailto CTA
- E2E smoke test passes; `npm run build` clean
- Files created: `e2e/services-career.spec.ts`
- Files modified: `src/app/services/career/page.tsx`
- Decisions made: Used `Compass` icon for Career Strategy Session, `Map` icon for Career Audit Package; `{ exact: true }` on Playwright heading locator per learning 009

## [2026-06-14] Prompt 009 — Services: Mentoring Page

- Created `/services/mentoring` with real service content: hero, 4-topic "What we can work on" grid (2-col, icons + descriptions), 3-tier "Engagement options" section (1-3 col), closing CTA with mailto link
- Created `e2e/services-mentoring.spec.ts` — 50/50 E2E pass across all configured browsers; `npm run build` clean
- Files created: `e2e/services-mentoring.spec.ts`
- Files modified: `src/app/services/mentoring/page.tsx` (replaced placeholder stub with full content)
- Decisions made: used `{ exact: true }` on heading locator because "Monthly Mentoring" / "Quarterly Mentoring" h3s also match `{ name: 'Mentoring' }` in Playwright strict mode

## [2026-06-14] Prompt 008 — Services: Consulting Hour Page

- Created `/services/consulting` with real service content: hero, 6-topic grid, 4-step "How it works" (reuses `ProcessStep`), closing CTA with mailto link
- Created `e2e/services-consulting.spec.ts` — 5/5 E2E pass across all configured browsers; `npm run build` clean
- Files created: `src/app/services/consulting/page.tsx`, `e2e/services-consulting.spec.ts`
- Decisions made: none — page follows established services page patterns; `ProcessStep` reused as-is

## [2026-06-14] Prompt 007a — Services Page Visual Redesign

- Redesigned `/services` to match About page visual bar: 7 sections (hero, persona band, service cards with icons, process strip, credibility stats, Consulting Hour soft strip, CTA)
- Created 3 new components: `ServiceCard` (amber icon tile + Check-icon highlights), `PersonaChip` (5 audience pills), `ProcessStep` (numbered amber circle + icon)
- Reused `FadeInSection` (with stagger delays) and `StatCard` from `src/components/about/`
- Stats: 18+ years, 100+ mentored, Director (DevOps & Developer Productivity)
- LinkedIn service card uses inline SVG (brand icon absent from lucide-react)
- Updated `e2e/services.spec.ts` — added heading and persona text assertions; 5/5 pass; `npm run build` clean
- Files created: `src/components/services/ServiceCard.tsx`, `PersonaChip.tsx`, `ProcessStep.tsx`, `developer/phase-1-foundation/prompts/007a-services-page-redesign.md`
- Files modified: `src/app/services/page.tsx`, `e2e/services.spec.ts`
- Decisions made: used `React.ComponentType<{className?; strokeWidth?}>` instead of `LucideIcon` to allow inline SVG alongside Lucide icons

## [2026-06-14] Prompt 007 — Services Overview Page

- Created `/services` overview page with real service content (no pricing): hero, primary services grid (4 cards: Mentoring, Career Guidance, Resume Review, LinkedIn Review), secondary Consulting Hour card (de-emphasised, "available on request"), DevOps Business Consulting (coming soon, dashed/grayed), and mailto CTA
- Created Playwright E2E smoke test; 5/5 pass across all configured browsers; `npm run build` clean — `/services` renders as static route
- Files created: `src/app/services/page.tsx`, `e2e/services.spec.ts`
- Decisions made: services page inlines all content (no sub-components) to keep it self-contained; FadeInSection not used (it lives in `components/about/`, not a shared component yet)

## [2026-06-07] Homepage — LinkedIn/GitHub Icons + About Page Link

- Replaced LinkedIn and GitHub text links with lucide-react `<Linkedin>` and `<Github>` icon buttons (w-5 h-5 in w-10 h-10 rounded-full containers)
- Added `About me →` text link to `/about` using `next/link`; visual separator `|` between social icons and internal link
- Kept `aria-label` on icon-only social links for accessibility
- Files modified: `src/app/page.tsx`

## [2026-06-07] About Page Enhancements — Logos, 4-Act Timeline, CTA Cleanup

- Added 6 company logos to `public/about/companies/` (convergys, netcracker, symantec, broadcom, amdocs, sap)
- Redesigned `CompaniesBand.tsx` — logos + company names in card grid replacing text-only strip; SAP now named
- Split timeline Act 3 into Act 3 (Amdocs, 2020–2022) + Act 4 (SAP, 2022–present); SAP named in timeline
- Removed dead hero CTAs ("Work with me" / "See services" → /services not yet built); bottom CTA now uses `mailto:`
- Increased timeline narrative from `text-sm` → `text-base` for readability
- Updated prompt 006 with post-execution notes: CTA disabled state, SAP exception, 4-act rule
- Files created: `public/about/companies/` (6 files)
- Files modified: `src/components/about/CompaniesBand.tsx`, `src/components/about/TimelineAct.tsx`, `src/app/about/page.tsx`, `developer/phase-1-foundation/prompts/006-about-page.md`
- Build clean, 35/35 E2E pass

## [2026-06-07] Portrait Integration

- Converted `brand/about_me/ankur-photo.png` (6.8 MB RGBA PNG, 2060×2048) → `public/about/portrait.jpg` (73 KB JPEG, 800×800, quality 90, mozjpeg)
- Metadata verified clean before and after: no EXIF, no AI generation markers, no GPS, no creator tags
- Replaced `<PortraitPlaceholder />` in `src/app/about/page.tsx` with `<Image>` from `next/image`; `priority` prop set for LCP; `object-cover object-top` for correct face framing
- Removed `PortraitPlaceholder` import; removed unused component reference
- Files created: `public/about/portrait.jpg`
- Files modified: `src/app/about/page.tsx`
- Verified: build clean, 35/35 E2E pass, desktop + mobile visual check

## [2026-06-07] About Page Redesign — Full Visual Rebuild

- Installed `framer-motion@12.40.0` + `lucide-react@1.17.0` (ADR-011)
- Created 9 reusable client/server components in `src/components/about/`: FadeInSection, PortraitPlaceholder, CompaniesBand, StatCard, TimelineAct, StoryCard, ProjectCard, SkillGroup, TestimonialCard
- Rewrote `src/app/about/page.tsx` — 10 sections, full content from `brand/about_me/` (12 content files), all content as typed arrays in page file
- New sections added: Companies Band, The Story (with pull quote + credentials strip), Featured Projects (3 projects), expanded Testimonials (6 quotes, masonry grid), redesigned CTA (rounded card with dot-grid)
- Visual design: asymmetric hero, AN monogram portrait placeholder, gradient-text stats, alternating timeline, before→after story cards, icon-driven skill groups, initials-avatar testimonials
- Added `@keyframes fade-in-up` to `src/styles/brand.css`; wrote `developer/adr/011-animation-and-icons.md`
- E2E tests: 4 → 6 tests; 35/35 pass across 5 device profiles
- Files created: `src/components/about/` (9 files), `developer/adr/011-animation-and-icons.md`
- Files modified: `src/app/about/page.tsx`, `e2e/about.spec.ts`, `src/styles/brand.css`, `package.json`
- Decisions made: page remains static server component; motion in client wrapper components only; all content stays inline in page.tsx (no separate data files); portrait placeholder swappable in one edit

## [2026-06-07] Prompt 006 — Full About Page

- Created 7-section static About page with all content hardcoded (Hero, Impact Stats, Career Arc, Skills & Expertise, Testimonials, Talks & Sessions, CTA Footer)
- Files created: `src/app/about/page.tsx`, `e2e/about.spec.ts`
- Files modified: `developer/phase-1-foundation/CHANGELOG.md`, `AI-REFERENCE.md`, `AI-SUMMARY.md`, `developer/phase-1-foundation/prompts/README.md`
- Decisions made: content hardcoded (no CMS, static server component), no new shared components, employer never named (replaced with "globally scaled enterprise software organization"), `getByText('17+', { exact: true })` used in E2E to avoid strict mode violation with hero paragraph

## [2026-05-31] Post-018 fix — Remove deploy.yml (Vercel GitHub App conflict)

- Deleted `.github/workflows/deploy.yml` — Vercel GitHub App was already connected to the repo via dashboard import, so deploy.yml was causing a double production deploy on every push to `main` (GitHub App deploys immediately; deploy.yml would deploy again after CI)
- Deployment flow is now: `ci.yml` passes on PR → branch protection gates merge → Vercel GitHub App auto-deploys on merge to `main`
- `NEXT_PUBLIC_GA_ID` must be set in Vercel dashboard (Project Settings → Environment Variables → Production) so GA is embedded in production builds — `.env.local` only covers local dev
- Files deleted: `.github/workflows/deploy.yml`
- Decisions made: Vercel GitHub App + GitHub branch protection replaces deploy.yml; this is the native Vercel pattern described in ADR-002

## [2026-05-31] Prompt 018 — CI/CD Workflows

- Created `.github/workflows/ci.yml` — triggered on PRs to `main`; steps: checkout, setup-node (from `.nvmrc`), npm ci, lint, type-check, build, unit tests, Playwright browser install, start server, wait-on, E2E tests, Lighthouse CI
- Created `.github/workflows/deploy.yml` — triggered on push to `main`; steps: checkout, setup-node, npm ci, `npx vercel --prod` with `VERCEL_TOKEN`/`VERCEL_ORG_ID`/`VERCEL_PROJECT_ID` secrets
- YAML syntax validated with `npx js-yaml` — both files parse cleanly
- Files created: `.github/workflows/ci.yml`, `.github/workflows/deploy.yml`
- Files modified: none
- Decisions made: `npx wait-on http://localhost:3000` used to gate E2E and Lighthouse steps on server readiness; `npx playwright install --with-deps` installs all browsers configured in playwright.config.ts (chromium, firefox, webkit); CI build does not pass `NEXT_PUBLIC_GA_ID` — conditional guard in layout.tsx means GA is silently absent in CI builds, which is correct

## [2026-05-31] Prompt 005b — GA4 Integration

- Installed `@next/third-parties` (official Next.js GA4 integration package)
- Added `NEXT_PUBLIC_GA_ID=G-9T66WBV59N` to `.env.local`
- Created `.env.example` with empty `NEXT_PUBLIC_GA_ID=` placeholder and instructional comment
- Updated `src/app/layout.tsx` — added `GoogleAnalytics` import from `@next/third-parties/google`; renders `<GoogleAnalytics gaId={...}>` as last child of `<body>` with conditional guard (silently skipped when env var absent)
- Files created: `.env.example`
- Files modified: `src/app/layout.tsx`, `.env.local`, `package.json`
- Decisions made: placed `<GoogleAnalytics>` outside `<Providers>` (no client context needed — `@next/third-parties` is a Server Component); conditional guard `{process.env.NEXT_PUBLIC_GA_ID && (...)}` ensures analytics is a no-op in test/preview environments without the env var

## [2026-05-17] Prompt 003b — Logo Asset Integration

- Replaced CSS text logo in `src/components/LogoText.tsx` with Next.js `<Image>` components using designer SVGs; added `className` prop
- Updated `public/icon.svg` with designer's AN monogram (monogram-light); regenerated `public/favicon.ico` via `node scripts/generate-favicon.mjs`
- Updated `developer/phase-1-foundation/brand-guidelines.md` — Final Logo section with file inventory, minimum size, clear space rules, variant usage guide
- Files modified: `src/components/LogoText.tsx`, `public/icon.svg`, `public/favicon.ico`, `developer/phase-1-foundation/brand-guidelines.md`
- Decisions made: logo files delivered in `public/logo/` subfolder with `logo-light.svg` / `logo-dark.svg` naming (not `public/logo.svg` / `public/logo-dark.svg` as planned); paths adapted accordingly. OG image not updated (skip condition met — SVG-in-sharp embedding is non-trivial).

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
