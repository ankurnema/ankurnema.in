# AI-REFERENCE.md — ankurnema.in

> **Purpose:** File and folder map for this repo. Updated after every structural change.
> **Last updated:** 2026-05-17 — Prompt 003b Logo Asset Integration: LogoText.tsx now uses Next.js Image with designer SVGs; icon.svg updated to designer monogram; favicon.ico regenerated

---

## Current State
Next.js 16 scaffold, testing infrastructure, and brand system complete (Prompts 001–003, 2026-05-09/10/17). Core config files, minimal `src/app/` stubs, brand tokens, CSS text logo, favicon, OG placeholder, `.mcp.json`, Vitest, Playwright, and Lighthouse CI configured. Full route stubs and CI/CD pending (Prompts 004–019).

---

## Existing Files

| Path | Type | Description |
|------|------|-------------|
| `CLAUDE.md` | AI config | Website rules, tech stack, phase tracking, conventions |
| `AI-REFERENCE.md` | AI config | This file |
| `.claude/commands/update-memory.md` | AI skill | `/update-memory` — updates ankurnema.in sub-repo memory (IDE/WebStorm context) |
| `.claude/commands/add-prompt.md` | AI skill | `/add-prompt` — interview-style: create a numbered prompt file in a phase, update prompts/README.md |
| `.claude/commands/enhance-prompt.md` | AI skill | `/enhance-prompt` — edit an unexecuted prompt file in a phase |
| `.claude/commands/add-blog-post.md` | AI skill | `/add-blog-post` — interview-style: create a draft MDX blog post stub with correct frontmatter |
| `.claude/commands/design-phase.md` | AI skill | `/design-phase` — interview-style: scaffold a new phase folder (README, AI-CONTEXT, CHANGELOG, prompts), create git branch |
| `.claude/commands/execute-prompt.md` | AI skill | `/execute-prompt` — execute a prompt file from a phase, then auto-update all 5 post-execution docs |
| `.claude/commands/add-feature.md` | AI skill | `/add-feature` — interview-style: create a prompt file for a new feature within the current phase |
| `.claude/commands/enhance-feature.md` | AI skill | `/enhance-feature` — interview-style: enhance or fix existing feature code, update CHANGELOG if in a phase |
| `.claude/commands/complete-phase.md` | AI skill | `/complete-phase` — close out a phase: verify completion, write docs/phases/ summary, update AI-SUMMARY.md + CLAUDE.md |
| `.claude/commands/session-wrap.md` | AI skill | `/session-wrap` — end-of-session: update efficiency report and memory in one command |
| `AI-SUMMARY.md` | AI config | Website build status and completions |
| `PROMPT_TEMPLATE.md` | AI config | Phase-based prompt templates |
| `README.md` | Docs | Case study overview for public visitors |
| `LICENSE` | Legal | Open source license |
| `.gitignore` | Config | Node modules, Next.js build, env files excluded |
| `developer/README.md` | Docs | Developer documentation index — setup, deployment, CI/CD, troubleshooting |
| `developer/claude-skills.md` | Docs | Claude Code skills reference — all 9 custom `/skill-name` commands, usage guide, session flow, skill format |
| `developer/ai-memory-system.md` | Docs | Public guide — AI memory system: what it is, benefits, memory types, how to replicate |
| `developer/PHASE_WORKFLOW.md` | AI config | Phase-based workflow guideline — folder structure, prompt format, Git convention, lifecycle |
| `developer/adr/` | Docs | Architecture Decision Records directory |
| `developer/adr/README.md` | Docs | ADR intro in plain English + index of all ADRs |
| `developer/adr/001-tech-stack.md` | ADR | ADR-001: Next.js 15 + TypeScript + Tailwind CSS + MDX — tech stack decision |
| `developer/adr/002-vercel-hosting.md` | ADR | ADR-002: Vercel free tier hosting for Phase 1 — alternatives, reasons, review triggers |
| `developer/adr/003-nextjs-mcp-server.md` | ADR | ADR-003: Next.js MCP server (`next-devtools-mcp`) for AI-assisted development workflow |
| `developer/adr/004-playwright-cli-browser-testing.md` | ADR | ADR-004: Playwright CLI (`@playwright/cli`) for browser testing during AI-assisted development |
| `developer/adr/005-testing-strategy.md` | ADR | ADR-005: Full testing strategy — Vitest, React Testing Library, Playwright, axe-playwright, Lighthouse CI |
| `developer/adr/006-open-source-case-study.md` | ADR | ADR-006: Open-source repo as AI-assisted development case study — rationale, conventions, what stays private |
| `developer/adr/007-app-router.md` | ADR | ADR-007: Next.js App Router over Pages Router — layout model, RSC, Server Actions, conventions |
| `developer/adr/008-google-font-loading.md` | ADR | ADR-008: Google Font loading via next/font/google — variable option, Tailwind v4 @theme mapping, Vitest mock convention |
| `developer/adr/009-dark-mode.md` | ADR | ADR-009: Dark mode strategy — next-themes + Tailwind v4 `@custom-variant dark`; system default, localStorage persistence, toggle component pattern |
| `developer/phase-1-foundation/README.md` | Phase doc | Phase 1 objective, deliverables, success criteria, out-of-scope for milestone v0.1 |
| `developer/phase-1-foundation/AI-CONTEXT.md` | AI config | Reading order, key files table, ADR references, phase-specific conventions |
| `developer/phase-1-foundation/CHANGELOG.md` | Phase log | Dated execution log; one entry added after each prompt is completed |
| `developer/phase-1-foundation/prompts/README.md` | Phase doc | Prompt index table + status legend; updated as prompts are written and executed |
| `developer/learnings/README.md` | Docs | Learnings folder index — what it is, how to add entries, file naming convention |
| `developer/learnings/001-scaffold-nextjs.md` | Learnings | Prompt 001 discoveries: ESLint version compat, `next lint` removal, flat config, tsconfig auto-patch, npm audit false positives |
| `developer/learnings/002-testing-infrastructure.md` | Learnings | Prompt 002 discoveries: Playwright `passWithNoTests` not in TypeScript types for v1.59.1; Next.js type-checks all `*.ts` files; CLI flags are kebab-case |
| `docs/ai-efficiency-report.md` | Report | AI session efficiency tracker — token metrics, subscription value ratio, per-phase session log |
| `vitest.config.ts` | Config | Vitest — jsdom env, globals, setupFiles → `src/test/setup.ts`, coverage targeting src/ |
| `playwright.config.ts` | Config | Playwright E2E — chromium project, baseURL localhost:3000, screenshot on failure, passWithNoTests |
| `lighthouserc.json` | Config | Lighthouse CI — performance ≥ 0.8 blocks PR; accessibility/best-practices/SEO warn at ≥ 0.9 |
| `src/test/setup.ts` | Config | Vitest global setup — imports `@testing-library/jest-dom` extended matchers |
| `src/__tests__/smoke.test.ts` | Test | Smoke test — confirms Vitest runner works; template for future unit tests |
| `package.json` | Config | npm manifest — Next.js 16, React 19, TypeScript 6, Tailwind v4, MDX, sharp; scripts: dev (Turbopack), build, lint, start, test, test:watch, test:coverage, test:e2e |
| `package-lock.json` | Config | npm lock file |
| `next.config.ts` | Config | Next.js 16 config (TypeScript) — MDX support, pageExtensions |
| `tsconfig.json` | Config | TypeScript strict mode, `@/*` path alias → `./src/*`, react-jsx |
| `.nvmrc` | Config | Node 22 |
| `.prettierrc` | Config | Prettier 3.8 — singleQuote, semi, tabWidth 2, trailingComma es5 |
| `eslint.config.mjs` | Config | ESLint 9 flat config — native eslint-config-next array (no FlatCompat) |
| `postcss.config.mjs` | Config | PostCSS — @tailwindcss/postcss (Tailwind v4, no autoprefixer) |
| `.mcp.json` | Config | MCP server config — next-devtools-mcp per ADR-003 |
| `src/styles/brand.css` | Style | Tailwind v4 `@theme` block — 12 brand color tokens (navy `#00305a`, blue accent `#009ee3`; updated 2026-05-17 to match delivered logo); `@custom-variant dark`; imported in `globals.css` |
| `src/app/globals.css` | Style | Tailwind v4 CSS-first entry — imports tailwindcss + brand.css |
| `src/app/layout.tsx` | App | Root layout — Inter + DM Sans fonts, metadata (title template, OG, Twitter), header with LogoText + ThemeToggle, footer (copyright + social links), Providers wrapper, full `dark:` utility variants |
| `src/__tests__/layout.test.tsx` | Test | Vitest unit test for RootLayout — mocks next/font/google, asserts footer copyright text |
| `src/app/page.tsx` | App | Home — Coming Soon page with OG metadata (`title.absolute`), branded hero section, light + dark mode variants, LinkedIn/GitHub links |
| `src/components/Providers.tsx` | Component | `'use client'` ThemeProvider wrapper — next-themes, `attribute="class"`, `defaultTheme="system"`, `enableSystem` |
| `src/components/ThemeToggle.tsx` | Component | `'use client'` dark/light mode toggle — `mounted` guard, `resolvedTheme`, sun/moon inline SVG icons |
| `e2e/homepage.spec.ts` | Test | Playwright E2E smoke test — asserts page title `/Ankur Nema/` and heading "Ankur Nema" visible |
| `src/components/LogoText.tsx` | Component | Logo component — Next.js `<Image>` with `variant` prop (`light`/`dark`) and optional `className`; renders `logo-light.svg` or `logo-dark.svg` from `public/logo/` |
| `public/logo/logo-dark.svg` | Asset | Full logo (monogram + "Ankur Nema") — dark background variant; "ANKUR" white, "NEMA" `#009ee3` |
| `public/logo/logo-light.svg` | Asset | Full logo — light background variant; "ANKUR" `#00305a`, "NEMA" `#009ee3` |
| `public/logo/monogram-dark.svg` | Asset | AN monogram mark — dark background variant; gradient `#009ee3` → white |
| `public/logo/monogram-light.svg` | Asset | AN monogram mark — light background variant; gradient `#009ee3` → `#00305a` |
| `public/icon.svg` | Asset | Designer AN monogram — transparent background, gradient `#009ee3` → `#00305a`, viewBox 157.12×144.19; used as favicon source |
| `public/favicon.ico` | Asset | ICO favicon — PNG-in-ICO at 32×32 and 16×16; generated from `icon.svg` via `scripts/generate-favicon.mjs` |
| `public/og-default.png` | Asset | Default OG image — 1200×630, navy background, white heading, amber tagline |
| `developer/phase-1-foundation/brand-guidelines.md` | Phase doc | Brand reference — color palette (12 hex values + token names), typography scale, logo/favicon/OG specs |
| `scripts/generate-favicon.mjs` | Script | One-shot ICO generator — uses `sharp` (existing dep); run manually when `icon.svg` changes |
| `scripts/generate-og.mjs` | Script | One-shot OG PNG generator — uses `sharp` (existing dep); run manually when OG content changes |

---

## Planned Structure (Post-Scaffold)

> Scaffold exists. Routes listed below are still stubs or not yet created — will be built out by Prompts 002–017.

| Path | Type | Description |
|------|------|-------------|
| `src/app/page.tsx` | Page | Home — hero, tagline, services overview, social proof |
| `src/app/about/page.tsx` | Page | About — story, credentials, mission |
| `src/app/services/page.tsx` | Page | Services overview |
| `src/app/services/consulting/page.tsx` | Page | Consulting Hour — 1:1 expert sessions page |
| `src/app/services/mentoring/page.tsx` | Page | Mentoring programs |
| `src/app/services/career/page.tsx` | Page | Career guidance |
| `src/app/services/resume-review/page.tsx` | Page | Resume review service |
| `src/app/blog/page.tsx` | Page | Blog index |
| `src/app/blog/[slug]/page.tsx` | Page | Individual blog post |
| `src/app/resources/page.tsx` | Page | Free templates and guides |
| `src/app/talks/page.tsx` | Page | Speaking engagements |
| `src/app/contact/page.tsx` | Page | Contact + booking embed |
| `src/content/blog/` | Content | Published MDX blog posts |
| `src/components/` | Components | Shared UI components (created; LogoText.tsx present) |
| `src/lib/` | Utilities | Helpers, MDX processing, config |
| `developer/adr/` | Docs | Architecture Decision Records (ADR-001 through ADR-007 already written) |
| `docs/phases/` | Docs | Phase completion summaries |
| `.github/workflows/ci.yml` | CI/CD | Lint + build check on PRs |
| `.github/workflows/deploy.yml` | CI/CD | Deploy to Vercel on merge to main |
| `public/` | Assets | Static assets — icon.svg, favicon.ico, og-default.png (created in Prompt 003) |
| `next.config.ts` | Config | Next.js configuration |
| `tailwind.config.ts` | Config | Tailwind configuration |
| `tsconfig.json` | Config | TypeScript configuration |
