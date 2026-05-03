# AI-REFERENCE.md — ankurnema.in

> **Purpose:** File and folder map for this repo. Updated after every structural change.
> **Last updated:** May 2026 — pre-scaffold (Next.js not yet initialized)

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
| `docs/adr/` | Docs | Architecture Decision Records |
| `docs/phases/` | Docs | Phase completion summaries |
| `.github/workflows/ci.yml` | CI/CD | Lint + build check on PRs |
| `.github/workflows/deploy.yml` | CI/CD | Deploy to Vercel on merge to main |
| `public/` | Assets | Static assets, OG images |
| `next.config.ts` | Config | Next.js configuration |
| `tailwind.config.ts` | Config | Tailwind configuration |
| `tsconfig.json` | Config | TypeScript configuration |
