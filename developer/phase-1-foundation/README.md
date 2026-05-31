# Phase 1: Foundation

**Milestone:** v0.1  
**Branch:** `feature/phase-1-foundation`  
**Status:** Planning

---

## Objective

Scaffold the Next.js 16 project per ADR-001 through ADR-007, install Phase-1 testing infrastructure per ADR-005, set up GitHub Actions CI/CD with Vercel deploy, and ship the first live deployment of ankurnema.in — a Coming Soon home page sitting on top of placeholder routes for the full planned site architecture.

---

## Deliverables

- [ ] **1. Next.js 16 scaffold**
  TypeScript 6, Tailwind v4 (CSS-first, `@tailwindcss/postcss`, no `tailwind.config.js`), MDX, App Router, `src/` directory, Turbopack dev, `.nvmrc` Node 22, `next.config.ts` (TypeScript), ESLint 10 flat config (`eslint.config.mjs`), Prettier 3.8 with `.prettierrc`.
  Versions sourced from the "Pinned Dependency Versions" table in `PROMPT_TEMPLATE.md`, but each verified with `npm show <pkg> version` before install — update the table if any have drifted.

- [ ] **2. `.mcp.json` at repo root**
  Configures `next-devtools-mcp` per ADR-003.

- [ ] **3. Placeholder `page.tsx` for every planned route**
  Routes from AI-REFERENCE.md (Planned Structure section):
  - `/` — Home
  - `/about`
  - `/services`
  - `/services/consulting`
  - `/services/mentoring`
  - `/services/career`
  - `/services/resume-review`
  - `/blog`
  - `/blog/[slug]`
  - `/resources`
  - `/talks`
  - `/contact`

- [ ] **4. Coming Soon home page at `/`**
  Brand mark, tagline, Metadata API export, OG image stub. All other routes accessible via direct URL but **NOT linked from the nav** (kept hidden until v0.2).

- [ ] **5. Root `layout.tsx`**
  Shared minimal header + footer, exported metadata object using the Next.js Metadata API, font loading.

- [ ] **6. Testing infrastructure (ADR-005 Phase 1 rollout)**
  - Vitest + React Testing Library installed and configured (`npm run test`)
  - Playwright installed and configured (`npm run test:e2e`)
  - 3 smoke E2E tests: homepage renders, /blog renders, /contact renders
  - Lighthouse CI in GitHub Actions, fail PR if performance score < 80

- [ ] **7. `.github/workflows/ci.yml`**
  Runs on every PR: `npm ci`, lint, type-check, `next build` (NOT Turbopack — Turbopack is dev-only), Vitest, Playwright, Lighthouse CI. Node version from `.nvmrc`.

- [ ] **8. `.github/workflows/deploy.yml`**
  Runs on merge to main: deploy to Vercel.

- [ ] **9. `INSTRUCTIONS.md` at repo root**
  Lists every manual step the human must perform during this phase. At minimum:
  - Create Vercel project linked to this repo
  - Add GitHub Secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`
  - Add CNAME at Hostinger DNS → `cname.vercel-dns.com`
  - Verify HTTPS provisioning
  - Anything else discovered during execution

- [ ] **10. All ADR-001 through ADR-007 referenced in `developer/phase-1-foundation/AI-CONTEXT.md` and visibly reflected in the code**
  If any new architectural choice arises during scaffolding (env var naming, Coming Soon implementation pattern, etc.), write ADR-008+ in `developer/adr/` and reference it here.

- [ ] **11. First live deployment**
  `https://ankurnema.in` resolves over HTTPS to the Coming Soon page.

---

## Success Criteria

- `npm run dev`, `npm run build`, `npm run lint`, `npm run test`, `npm run test:e2e` all pass locally.
- A draft PR triggers `ci.yml` and the workflow runs green end-to-end including Lighthouse CI.
- `https://ankurnema.in` serves the Coming Soon page over HTTPS with valid SSL.
- All planned routes return HTTP 200 (placeholders are acceptable).
- ADR-001 through ADR-007 are listed in `AI-CONTEXT.md` and visibly reflected in the code.
- `AI-REFERENCE.md`, `AI-SUMMARY.md`, `CLAUDE.md` "Project Phases" table row for v0.1, and `docs/ai-efficiency-report.md` all updated.
- Phase 1 PR opened from `feature/phase-1-foundation` → `main`.

---

## Out of Scope

- Real blog posts (v0.2)
- Real service detail content (v0.3)
- Zoho Bookings / Forms embeds (v0.3)
- Lead-capture forms, newsletter (v0.3 / v0.4)
- GA4 / analytics wiring (v0.4)
- React Testing Library component tests, axe-playwright, visual snapshots (ADR-005 Phase 2 / Phase 3)
- Course pages, resources content, community (v1.0)
- Public navigation linking to placeholder routes (kept hidden until v0.2)
