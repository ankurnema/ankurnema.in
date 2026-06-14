# Prompts — Phase 1: Foundation

| # | File | Description | Status |
|---|------|-------------|--------|
| 001 | [001-scaffold-nextjs.md](001-scaffold-nextjs.md) | Scaffold Next.js 16 with TypeScript, Tailwind v4, MDX, ESLint 10, Prettier + `.mcp.json` | ✅ Done [2026-05-09] |
| 002 | [002-testing-infrastructure.md](002-testing-infrastructure.md) | Vitest + React Testing Library + Playwright + Lighthouse CI | ✅ Done [2026-05-10] |
| 003 | [003-branding.md](003-branding.md) | Color system, CSS text logo, favicon (AN monogram), OG image, brand guidelines doc | ✅ Done [2026-05-17] |
| 003b | [003b-logo-assets.md](003b-logo-assets.md) | **Run when logo SVGs are ready** — swap CSS text logo for designer SVGs, update favicon + OG image | ✅ Done [2026-05-17] |
| 004 | [004-root-layout.md](004-root-layout.md) | Root `layout.tsx` — header, footer, fonts, metadata | ✅ Done [2026-05-17] |
| 005 | [005-coming-soon-homepage.md](005-coming-soon-homepage.md) | Coming Soon page at `/` with OG metadata + E2E smoke test | ✅ Done [2026-05-17] |
| 005b | [005b-ga4-integration.md](005b-ga4-integration.md) | **Run after creating GA4 property** — Install `@next/third-parties`, wire `<GoogleAnalytics>` into `layout.tsx` | ✅ Done [2026-05-31] |
| 018 | [018-cicd-workflows.md](018-cicd-workflows.md) | **Run after step 005b + GitHub secrets set** — `.github/workflows/ci.yml` + `deploy.yml`; then raise PR → merge → site live | ✅ Done [2026-05-31] |
| 006 | [006-about-page.md](006-about-page.md) | `/about` placeholder + E2E smoke test | ✅ Done [2026-06-07] |
| 007 | [007-services-page.md](007-services-page.md) | `/services` overview placeholder + E2E smoke test | ✅ Done [2026-06-14] |
| 007a | [007a-services-page-redesign.md](007a-services-page-redesign.md) | `/services` visual redesign — icons, personas, process, stats, FadeInSection animations | ✅ Done [2026-06-14] |
| 008 | [008-services-consulting-page.md](008-services-consulting-page.md) | `/services/consulting` placeholder + E2E smoke test | ⏳ Pending |
| 009 | [009-services-mentoring-page.md](009-services-mentoring-page.md) | `/services/mentoring` placeholder + E2E smoke test | ⏳ Pending |
| 010 | [010-services-career-page.md](010-services-career-page.md) | `/services/career` placeholder + E2E smoke test | ⏳ Pending |
| 011 | [011-services-resume-review-page.md](011-services-resume-review-page.md) | `/services/resume-review` placeholder + E2E smoke test | ⏳ Pending |
| 011b | [011b-services-linkedin-review-page.md](011b-services-linkedin-review-page.md) | `/services/linkedin-review` placeholder + E2E smoke test | ⏳ Pending |
| 012 | [012-blog-page.md](012-blog-page.md) | `/blog` placeholder + E2E smoke test (ADR-005 required test #2) | ⏳ Pending |
| 013 | [013-blog-slug-page.md](013-blog-slug-page.md) | `/blog/[slug]` dynamic route placeholder + E2E smoke test | ⏳ Pending |
| 014 | [014-resources-page.md](014-resources-page.md) | `/resources` placeholder + E2E smoke test | ⏳ Pending |
| 015 | [015-talks-page.md](015-talks-page.md) | `/talks` placeholder + E2E smoke test | ⏳ Pending |
| 016 | [016-contact-page.md](016-contact-page.md) | `/contact` placeholder + E2E smoke test (ADR-005 required test #3); all 3 required smoke tests verified | ⏳ Pending |
| 017 | [017-final-homepage.md](017-final-homepage.md) | Full homepage design (Hero, Services teaser, About teaser, Blog teaser, Contact CTA) | ⏳ Pending |
| 019 | [019-docs-and-instructions.md](019-docs-and-instructions.md) | `INSTRUCTIONS.md` + ADR audit + AI-REFERENCE/AI-SUMMARY/CLAUDE.md updates | ⏳ Pending |

**Execution order:** Run prompts sequentially: 001 → 005 → 005b → 018 → 006 → 007 → 008 → 009 → 010 → 011 → 011b → 012 → 013 → 014 → 015 → 016 → 017 → 019.
Prompts **005b** and **018** are moved before the page prompts so CI/CD is active from the first PR.
After 018 is complete: push `feature/phase-1-foundation` → raise PR to `main` → merge → `deploy.yml` fires → Coming Soon page deploys to production `ankurnema.in`.
Update this table after each execution.

**003b** is an out-of-band prompt — execute it at any point after receiving the final logo files from the designer; it does not block 004 onward.
**005b** is an out-of-band prompt — execute it after creating a GA4 property and saving the Measurement ID. Run it before 018 so analytics is in place for the initial production deploy.
**018** is moved before 006 — set up CI/CD once, then all subsequent page prompts run with GitHub Actions already active.

---

## Status Legend

| Symbol | Meaning |
|--------|---------|
| ✅ Done [YYYY-MM-DD] | Prompt executed and verified |
| ⏳ Pending | Not yet started |
| 🚧 In Progress | Currently being executed |
