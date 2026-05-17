# Prompts — Phase 1: Foundation

| # | File | Description | Status |
|---|------|-------------|--------|
| 001 | [001-scaffold-nextjs.md](001-scaffold-nextjs.md) | Scaffold Next.js 16 with TypeScript, Tailwind v4, MDX, ESLint 10, Prettier + `.mcp.json` | ✅ Done [2026-05-09] |
| 002 | [002-testing-infrastructure.md](002-testing-infrastructure.md) | Vitest + React Testing Library + Playwright + Lighthouse CI | ✅ Done [2026-05-10] |
| 003 | [003-branding.md](003-branding.md) | Color system, CSS text logo, favicon (AN monogram), OG image, brand guidelines doc | ✅ Done [2026-05-17] |
| 003b | [003b-logo-assets.md](003b-logo-assets.md) | **Run when logo SVGs are ready** — swap CSS text logo for designer SVGs, update favicon + OG image | ⏳ Pending (blocked on logo delivery) |
| 004 | [004-root-layout.md](004-root-layout.md) | Root `layout.tsx` — header, footer, fonts, metadata | ⏳ Pending |
| 005 | [005-coming-soon-homepage.md](005-coming-soon-homepage.md) | Coming Soon page at `/` with OG metadata + E2E smoke test | ⏳ Pending |
| 006 | [006-about-page.md](006-about-page.md) | `/about` placeholder + E2E smoke test | ⏳ Pending |
| 007 | [007-services-page.md](007-services-page.md) | `/services` overview placeholder + E2E smoke test | ⏳ Pending |
| 008 | [008-services-consulting-page.md](008-services-consulting-page.md) | `/services/consulting` placeholder + E2E smoke test | ⏳ Pending |
| 009 | [009-services-mentoring-page.md](009-services-mentoring-page.md) | `/services/mentoring` placeholder + E2E smoke test | ⏳ Pending |
| 010 | [010-services-career-page.md](010-services-career-page.md) | `/services/career` placeholder + E2E smoke test | ⏳ Pending |
| 011 | [011-services-resume-review-page.md](011-services-resume-review-page.md) | `/services/resume-review` placeholder + E2E smoke test | ⏳ Pending |
| 012 | [012-blog-page.md](012-blog-page.md) | `/blog` placeholder + E2E smoke test (ADR-005 required test #2) | ⏳ Pending |
| 013 | [013-blog-slug-page.md](013-blog-slug-page.md) | `/blog/[slug]` dynamic route placeholder + E2E smoke test | ⏳ Pending |
| 014 | [014-resources-page.md](014-resources-page.md) | `/resources` placeholder + E2E smoke test | ⏳ Pending |
| 015 | [015-talks-page.md](015-talks-page.md) | `/talks` placeholder + E2E smoke test | ⏳ Pending |
| 016 | [016-contact-page.md](016-contact-page.md) | `/contact` placeholder + E2E smoke test (ADR-005 required test #3); all 3 required smoke tests verified | ⏳ Pending |
| 017 | [017-final-homepage.md](017-final-homepage.md) | Full homepage design (Hero, Services teaser, About teaser, Blog teaser, Contact CTA) | ⏳ Pending |
| 018 | [018-cicd-workflows.md](018-cicd-workflows.md) | `.github/workflows/ci.yml` + `deploy.yml` | ⏳ Pending |
| 019 | [019-docs-and-instructions.md](019-docs-and-instructions.md) | `INSTRUCTIONS.md` + ADR audit + AI-REFERENCE/AI-SUMMARY/CLAUDE.md updates | ⏳ Pending |

**Execution order:** Run prompts sequentially 001 → 019. Each prompt depends on prior prompts being complete. Update this table after each execution.
**003b** is an out-of-band prompt — execute it at any point after receiving the final logo files from the designer; it does not block 004 onward.

---

## Status Legend

| Symbol | Meaning |
|--------|---------|
| ✅ Done [YYYY-MM-DD] | Prompt executed and verified |
| ⏳ Pending | Not yet started |
| 🚧 In Progress | Currently being executed |
