# AI-CONTEXT.md — Phase 1: Foundation

> Token-efficient guide for AI agents working on this phase.
> Read what's listed, skip what's not.

---

## Reading Order

Read these files in sequence before writing any code:

1. `developer/phase-1-foundation/README.md` — phase objective, deliverables, success criteria
2. `CLAUDE.md` — repo-wide rules, coding conventions, commit format
3. `PROMPT_TEMPLATE.md` — **Pinned Dependency Versions table** (exact versions to install; verify each with `npm show <pkg> version`)
4. `developer/PHASE_WORKFLOW.md` — phase lifecycle, prompt format, changelog convention
5. `developer/adr/001-tech-stack.md` through `developer/adr/007-app-router.md` — in numeric order
6. `AI-REFERENCE.md` — Planned Structure section (routes and folder layout)

---

## Key Files

| File | Why it matters for Phase 1 |
|------|---------------------------|
| `developer/adr/001-tech-stack.md` | Dictates exact stack: Next.js 16, TypeScript 6, Tailwind v4, MDX |
| `developer/adr/002-vercel-hosting.md` | CI/CD deploy target; drives `deploy.yml` workflow shape and required secrets |
| `developer/adr/003-nextjs-mcp-server.md` | Mandates `.mcp.json` with `next-devtools-mcp` at repo root |
| `developer/adr/004-playwright-cli-browser-testing.md` | Local dev verification tool only — not wired into CI; complements Playwright E2E |
| `developer/adr/005-testing-strategy.md` | Phase 1 rollout: Vitest configured, 3 Playwright smoke tests, Lighthouse CI in GitHub Actions |
| `developer/adr/006-open-source-case-study.md` | Requires `CONTRIBUTING.md` + structured PR/issue templates in `.github/` |
| `developer/adr/007-app-router.md` | All pages under `app/`; default Server Components; `use client` only when browser APIs needed; no Pages Router |
| `PROMPT_TEMPLATE.md` | Pinned Dependency Versions table — exact package versions; verify before install |

---

## Reuse

None. This is a greenfield phase — no existing `src/` code to reuse or extend.

---

## Do Not Read

- `developer/phase-2*/`, `developer/phase-3*/`, `developer/phase-4*/`, `developer/phase-5*/` — these folders do not exist yet
- `src/content/blog/` — no blog posts exist yet

---

## Phase-Specific Conventions

**Dependency versions:**
- Every version in `PROMPT_TEMPLATE.md` Pinned table must be verified with `npm show <pkg> version` before install
- If a version has drifted, update the table in `PROMPT_TEMPLATE.md` before proceeding

**Routing and navigation:**
- Coming Soon home (`/`) is the only publicly-linked route in this phase
- All other routes (`/about`, `/services/*`, `/blog`, etc.) must return HTTP 200 via placeholder `page.tsx` but must NOT be linked from the header or nav
- No nav links to other routes until v0.2

**Tailwind v4 (breaking change):**
- No `tailwind.config.js` — configure via `@import "tailwindcss"` in global CSS
- PostCSS plugin is `@tailwindcss/postcss`, not `tailwindcss`
- Drop `autoprefixer` — it is built into v4

**ESLint 10 (breaking change):**
- Config file is `eslint.config.mjs` (flat config)
- Not `.eslintrc.json` — that format is ESLint 8/9

**Next.js 16 (breaking change):**
- Config file is `next.config.ts` (TypeScript)
- Not `next.config.js`

**Build vs dev:**
- CI always uses `next build` — never Turbopack in CI
- Turbopack is dev-only: `next dev --turbopack` in the `dev` npm script

**New architectural choices:**
- Any new technology decision or implementation pattern chosen during scaffolding (e.g., env var naming scheme, OG image generation approach, font loading strategy) must have an ADR written in `developer/adr/` (ADR-008 onward) before that choice is implemented
- Reference the new ADR in this file after writing it
