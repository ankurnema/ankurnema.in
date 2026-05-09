# AI-REFERENCE.md — ankurnema.in

> **Purpose:** File and folder map for this repo. Updated after every structural change.
> **Last updated:** May 2026 — Phase 1 planning structure added

---

## Current State
Next.js project not yet scaffolded. Only repo scaffolding files exist.
Once scaffolded, this file will be updated with the full component and page map.

---

## Existing Files

| Path | Type | Description |
|------|------|-------------|
| `CLAUDE.md` | AI config | Website rules, tech stack, phase tracking, conventions |
| `AI-REFERENCE.md` | AI config | This file |
| `AI-SUMMARY.md` | AI config | Website build status and completions |
| `PROMPT_TEMPLATE.md` | AI config | Phase-based prompt templates |
| `README.md` | Docs | Case study overview for public visitors |
| `LICENSE` | Legal | Open source license |
| `.gitignore` | Config | Node modules, Next.js build, env files excluded |
| `developer/README.md` | Docs | Developer documentation index — setup, deployment, CI/CD, troubleshooting |
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
| `developer/phase-1-foundation/README.md` | Phase doc | Phase 1 objective, deliverables, success criteria, out-of-scope for milestone v0.1 |
| `developer/phase-1-foundation/AI-CONTEXT.md` | AI config | Reading order, key files table, ADR references, phase-specific conventions |
| `developer/phase-1-foundation/CHANGELOG.md` | Phase log | Dated execution log; one entry added after each prompt is completed |
| `developer/phase-1-foundation/prompts/README.md` | Phase doc | Prompt index table + status legend; updated as prompts are written and executed |
| `developer/learnings/README.md` | Docs | Learnings folder index — what it is, how to add entries, file naming convention |
| `developer/learnings/001-scaffold-nextjs.md` | Learnings | Prompt 001 discoveries: ESLint version compat, `next lint` removal, flat config, tsconfig auto-patch, npm audit false positives |
| `docs/ai-efficiency-report.md` | Report | AI session efficiency tracker — token metrics, subscription value ratio, per-phase session log |

---

## Planned Structure (Post-Scaffold)

> Update this section to "Actual Structure" once Next.js is initialized.

| Path | Type | Description |
|------|------|-------------|
| `src/app/page.tsx` | Page | Home — hero, tagline, services overview, social proof |
| `src/app/about/page.tsx` | Page | About — story, credentials, mission |
| `src/app/services/page.tsx` | Page | Services overview |
| `src/app/services/consulting/page.tsx` | Page | DevOps consulting detail |
| `src/app/services/mentoring/page.tsx` | Page | Mentoring programs |
| `src/app/services/career/page.tsx` | Page | Career guidance |
| `src/app/services/resume-review/page.tsx` | Page | Resume review service |
| `src/app/blog/page.tsx` | Page | Blog index |
| `src/app/blog/[slug]/page.tsx` | Page | Individual blog post |
| `src/app/resources/page.tsx` | Page | Free templates and guides |
| `src/app/talks/page.tsx` | Page | Speaking engagements |
| `src/app/contact/page.tsx` | Page | Contact + booking embed |
| `src/content/blog/` | Content | Published MDX blog posts |
| `src/components/` | Components | Shared UI components |
| `src/lib/` | Utilities | Helpers, MDX processing, config |
| `developer/adr/` | Docs | Architecture Decision Records (ADR-001 through ADR-007 already written) |
| `docs/phases/` | Docs | Phase completion summaries |
| `.github/workflows/ci.yml` | CI/CD | Lint + build check on PRs |
| `.github/workflows/deploy.yml` | CI/CD | Deploy to Vercel on merge to main |
| `public/` | Assets | Static assets, OG images |
| `next.config.ts` | Config | Next.js configuration |
| `tailwind.config.ts` | Config | Tailwind configuration |
| `tsconfig.json` | Config | TypeScript configuration |
