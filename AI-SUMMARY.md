# AI-SUMMARY.md — ankurnema.in

> **Purpose:** Build status and decision log for the website repo.
> **Last updated:** May 2026

---

## Current Status

| Item | Status |
|------|--------|
| Current phase | Phase 1 — Foundation (in progress) |
| Next.js scaffold | ✅ Done (Prompt 001, 2026-05-09) |
| Testing infrastructure | ✅ Done (Prompt 002, 2026-05-10) |
| Branding | ✅ Done (Prompt 003, 2026-05-17) |
| Root layout | ✅ Done (Prompt 004, 2026-05-17) |
| Pages | ⏳ Not done |
| Blog | ⏳ Not done |
| CI/CD | ⏳ Not done |
| Vercel deployment | ⏳ Not done |
| Domain connected | ⏳ Not done |
| ADRs written | ✅ ADR-001, ADR-002 done in `developer/adr/` |

---

## Recent Completions

- [2026-06-15] 3D design pass: scroll-triggered floating pill header (docked at top, `rounded-2xl mx-4 mt-4` pill after scroll, transition-all 300ms); `btn-3d-primary` CSS utility (inset top highlight + ambient glow, soft not brick); home page simplified to logo+Coming Soon+About Me button, no header/footer via ClientShell; footer social text links removed (icons only); PersonaChip 3D shadow; all card components upgraded with resting shadows + `hover:-translate-y-{1.5|2}` lifts + `h-full flex flex-col`; testimonials switched from CSS columns to grid for equal-height rows
- [2026-06-14] ProcessFlow component created; all 4 service process sections (services overview, consulting, resume-review, linkedin-review) migrated from inline card grids to dual-layout ProcessFlow (horizontal stepper ≤4 steps on desktop, vertical timeline otherwise); dropdown hover fixed with 200ms grace timer; lint + build clean
- [2026-06-14] Prompt 004a: Header & footer redesigned — sticky-glass nav with Services dropdown (5 links + "View all"), "Book a call" CTA, mobile hamburger overlay; rich 4-column footer; `src/lib/nav.ts` central config; lint + build clean
- [2026-06-14] Prompt 011b: /services/linkedin-review page built with What's included, How it works, and CTA sections; 5/5 E2E pass across all browsers, build clean
- [2026-06-14] Prompt 011: /services/resume-review page built with 6-step process section and 4-tier review cards (Quick/Deep/Full Makeover/JD-Based add-on); 5/5 E2E pass, build clean
- [2026-06-14] Prompt 010: /services/career page built with Career Strategy Session + Career Audit Package offerings, target audience section, and mailto CTA; E2E smoke test passes, build clean
- [2026-06-14] Prompt 009: /services/mentoring page built with full content — hero, 4-topic grid, 3-tier engagement options, mailto CTA; 50/50 E2E pass, build clean
- [2026-06-14] Prompt 008: /services/consulting page created — hero, 6-topic grid, 4-step process (reuses ProcessStep), mailto closing; 5/5 E2E pass, build clean
- [2026-06-14] Prompt 007a: /services page redesigned — 7 sections with lucide icons, persona band, process steps, 3 credibility stat cards; 3 new components (ServiceCard, PersonaChip, ProcessStep); 5/5 E2E pass, build clean
- [2026-06-14] Prompt 007: /services overview page built with real content — 4 primary service cards, Consulting Hour (soft), DevOps Business Consulting (coming soon), mailto CTA; 5/5 E2E pass, build clean
- [2026-06-07] Homepage: LinkedIn/GitHub text links replaced with lucide-react icon buttons; About me link added to /about
- [2026-06-07] About page enhancements: company logos (6) in band, 4-act timeline (SAP named), hero CTAs removed (dead links), narrative text-base, 35/35 E2E pass
- [2026-06-07] Portrait integrated: AI headshot converted to 73 KB JPEG, metadata-stripped, swapped into About page hero; 35/35 E2E pass
- [2026-06-07] About page redesign: 10 sections, 9 new components, framer-motion + lucide-react added, full content from brand/about_me/ (12 files), 35/35 E2E tests pass — visual rebuild from text-only to "Confident Operator" design
- [2026-06-07] Prompt 006: Full About page — 7 sections, 4 E2E tests (25/25 across 5 device profiles), all content hardcoded, employer anonymised
- [2026-05-31] Reworked `docs/ai-efficiency-report.md` to real `usage` token counts + cache-aware pricing; added cache-hit rate metric (93.5% IDE); wrote ADR-010; updated `/update-efficiency-report` command; Phase v0.1 value ratio: 3.60x (was 0.48x byte-proxy)
- [2026-05-31] Prompt 018: CI/CD workflows created — `ci.yml` (lint → type-check → build → Vitest → Playwright → Lighthouse CI on PR) and `deploy.yml` (Vercel production deploy on merge to main)
- [2026-05-31] Prompt 005b: GA4 integration complete — `@next/third-parties` installed, `<GoogleAnalytics gaId={G-9T66WBV59N}>` wired into root layout with conditional guard, `.env.example` created
- [2026-05-18] Added prompt 005b (GA4 integration); moved prompt 018 (CI/CD) before page prompts; updated prompts/README.md execution order so coming soon page deploys to production via PR merge
- [2026-05-17] Prompt 003b: Replaced CSS text logo placeholder with designer SVG wordmark and monogram; updated favicon from designer AN monogram
- [2026-05-17] Prompt 005: Coming Soon homepage with full light/dark mode — system-preference toggle, next-themes 0.4.6, Tailwind v4 `@custom-variant dark`, ADR-009, Playwright E2E smoke test
- [2026-05-17] Prompt 004: Root layout built — Inter + DM Sans fonts loaded, full metadata (OG/Twitter), minimal header + footer, Vitest test passes, ADR-008 written
- [2026-05-17] Brand system complete — 12-token color palette in brand.css, LogoText component, AN monogram favicon, 1200×630 OG placeholder, brand-guidelines.md (Prompt 003)
- [2026-05-17] Created `developer/claude-skills.md` — full skills reference and usage guide
- [2026-05-17] Added 9 Claude Code skills to `.claude/commands/`: execute-prompt, design-phase, add-prompt, enhance-prompt, add-feature, enhance-feature, add-blog-post, complete-phase, session-wrap — full developer workflow automation
- [2026-05-17] Updated Prompt 003-branding to use locked brand colors/fonts from brand guidelines; replaced SVG logo with CSS text `LogoText` component; added Prompt 003b for logo swap when designer files arrive
- [2026-05-10] Set up testing infrastructure — Vitest 4.1.5 + Playwright 1.59.1 + Lighthouse CI; `npm run test` passes, `npm run test:e2e` exits 0 (Prompt 002)
- [2026-05-09] Scaffolded Next.js 16 with TypeScript, Tailwind v4, ESLint 9, Prettier, MDX, .mcp.json — dev/build/lint all verified (Prompt 001)
- [2026-05-09] Created `docs/ai-efficiency-report.md` — pre-development baseline with 8 sessions, 2.18 MB transcripts, edit-to-read 1.16, subscription value ratio 0.19x; added session-update rules to CLAUDE.md
- [2026-05-09] Created phase workflow guideline (`developer/PHASE_WORKFLOW.md`), updated CLAUDE.md (Phase Workflow section), PROMPT_TEMPLATE.md (phase management templates), developer/README.md, AI-REFERENCE.md
- [2026-05-03] Created ADR-007: App Router over Pages Router (`developer/adr/007-app-router.md`)
- [2026-05-03] Created ADR-006: Open-source case study (`developer/adr/006-open-source-case-study.md`)
- [2026-05-03] Created ADR-005: Testing strategy (`developer/adr/005-testing-strategy.md`)
- [2026-05-03] Created ADR-004: Playwright CLI for browser testing (`developer/adr/004-playwright-cli-browser-testing.md`)
- [2026-05-03] Created ADR-003: Next.js MCP server for AI-assisted development (`developer/adr/003-nextjs-mcp-server.md`)
- [2026-05-03] Created `developer/adr/` with README and ADR-001 (tech stack), ADR-002 (Vercel hosting)
- [2026-05] Repo created on GitHub (public)
- [2026-05] CLAUDE.md, AI-REFERENCE.md, AI-SUMMARY.md, PROMPT_TEMPLATE.md initialized
- [2026-05] Site architecture and planned structure documented in AI-REFERENCE.md

---

## Key Decisions

| Date | Decision | ADR |
|------|----------|-----|
| May 2026 | Next.js 15 + TypeScript + Tailwind + MDX | `developer/adr/001-tech-stack.md` ✅ |
| May 2026 | Vercel for hosting (free tier) | `developer/adr/002-vercel-hosting.md` ✅ |
| May 2026 | Next.js MCP server for AI dev workflow | `developer/adr/003-nextjs-mcp-server.md` ✅ |
| May 2026 | Playwright CLI for browser testing | `developer/adr/004-playwright-cli-browser-testing.md` ✅ |
| May 2026 | Testing strategy (Vitest + Playwright + axe + Lighthouse) | `developer/adr/005-testing-strategy.md` ✅ |
| May 2026 | Open-source repo as AI-assisted dev case study | `developer/adr/006-open-source-case-study.md` ✅ |
| May 2026 | App Router over Pages Router | `developer/adr/007-app-router.md` ✅ |
| May 2026 | Google Font loading via next/font/google (variable option) | `developer/adr/008-google-font-loading.md` ✅ |

---

## Open Items

- [ ] Set up GitHub Actions CI/CD
- [ ] Connect to Vercel
- [ ] Write README.md as proper case study intro
- [ ] Create first blog post MDX file
