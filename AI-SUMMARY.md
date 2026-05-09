# AI-SUMMARY.md — ankurnema.in

> **Purpose:** Build status and decision log for the website repo.
> **Last updated:** May 2026

---

## Current Status

| Item | Status |
|------|--------|
| Current phase | Phase 1 — Foundation (in progress) |
| Next.js scaffold | ✅ Done (Prompt 001, 2026-05-09) |
| Pages | ⏳ Not done |
| Blog | ⏳ Not done |
| CI/CD | ⏳ Not done |
| Vercel deployment | ⏳ Not done |
| Domain connected | ⏳ Not done |
| ADRs written | ✅ ADR-001, ADR-002 done in `developer/adr/` |

---

## Recent Completions

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

---

## Open Items

- [ ] Set up GitHub Actions CI/CD
- [ ] Connect to Vercel
- [ ] Write README.md as proper case study intro
- [ ] Create first blog post MDX file
