# Prompt 019 — Docs, Instructions & ADR Audit

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/README.md` — deliverables 9 and 10; Success Criteria (all items must be checked)
- `developer/adr/001-tech-stack.md` through `developer/adr/007-app-router.md` — verify each is reflected in code
- `developer/phase-1-foundation/CHANGELOG.md` — review all decisions made during Prompts 001–018

## Scope
**In scope:**
- `INSTRUCTIONS.md` at repo root — all manual human steps to complete Phase 1 deployment
- ADR audit: verify each of ADR-001..007 is visibly reflected in the scaffolded code; for any new architectural choices made during Prompts 001–018 (font choice, color system approach, logo placeholder approach, Coming Soon vs. full homepage pattern, `not-found.tsx` choice, etc.), write ADR-008+ in `developer/adr/`
- Update `developer/phase-1-foundation/AI-CONTEXT.md` with any new ADRs
- Update `AI-REFERENCE.md` — add all new files and folders created in Phase 1
- Update `AI-SUMMARY.md` — add to "Recent Completions" and update v0.1 milestone status
- Update `CLAUDE.md` "Project Phases" table — mark v0.1 as ✅ Complete (only after live deployment; otherwise mark as 🔄 In Progress)
- Final `CHANGELOG.md` entry for this prompt
- Write `docs/phases/phase-1-foundation-completion.md` (phase summary per PHASE_WORKFLOW.md Phase Completion Checklist)

**Out of scope:**
- `docs/ai-efficiency-report.md` update — human responsibility per CLAUDE.md instructions

## End Deliverable
- `INSTRUCTIONS.md` exists at repo root with complete manual steps
- All ADR-001..007 verified reflected in code; ADR-008+ written for any new choices
- `AI-CONTEXT.md` updated with new ADRs
- `AI-REFERENCE.md` updated with all Phase 1 files/folders
- `AI-SUMMARY.md` updated
- `CLAUDE.md` phase table updated
- `docs/phases/phase-1-foundation-completion.md` written
- Final `CHANGELOG.md` entry present
- All Phase Completion Checklist items in `PHASE_WORKFLOW.md` checked off

## Prompt

You are executing Prompt 019 (final prompt) of Phase 1 Foundation for ankurnema.in.

Read these files before writing anything:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/README.md` (Success Criteria — check every item)
3. `developer/adr/001-tech-stack.md` through `developer/adr/007-app-router.md`
4. `developer/phase-1-foundation/CHANGELOG.md` (review all decisions from Prompts 001–018)
5. `PHASE_WORKFLOW.md` (Phase Completion Checklist)

**Task:** Complete Phase 1 documentation, audit all ADRs, and update all tracking files.

Step 1 — Write `INSTRUCTIONS.md` at repo root:
Document every manual step the developer must perform to complete Phase 1 deployment:
- [ ] Create a Vercel account if not already done
- [ ] Create a new Vercel project linked to this GitHub repo
- [ ] Add GitHub repository secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` (explain where to find each)
- [ ] Set up Vercel project domain: add `ankurnema.in` as custom domain in Vercel
- [ ] Add CNAME record at Hostinger DNS: `ankurnema.in` → `cname.vercel-dns.com` (or the ANAME/A record Vercel requires for apex domains)
- [ ] Wait for HTTPS certificate provisioning (auto-managed by Vercel)
- [ ] Verify `https://ankurnema.in` resolves over HTTPS
- [ ] Enable Vercel Analytics (optional, if used)
- [ ] Any other steps discovered during Prompts 001–018

Step 2 — ADR audit:
For each ADR-001 through ADR-007, write one bullet confirming where in the code it is reflected:
- ADR-001 (tech stack): Next.js 16, TypeScript, Tailwind, MDX in `package.json`
- ADR-002 (Vercel): `.github/workflows/deploy.yml` uses `vercel` CLI
- ADR-003 (MCP): `.mcp.json` at repo root
- ADR-004 (Playwright CLI): `developer/phase-1-foundation/INSTRUCTIONS.md` or `INSTRUCTIONS.md` notes global install
- ADR-005 (testing strategy): `vitest.config.ts`, `playwright.config.ts`, `lighthouserc.json`, 3 smoke tests
- ADR-006 (open-source case study): `developer/` folder structure, ADRs, prompts, CHANGELOG
- ADR-007 (App Router): `src/app/` directory, `layout.tsx`, all `page.tsx` files

For any new architectural decisions made during this phase (font choice, brand color system approach, etc.), write one new ADR per decision in `developer/adr/` starting at ADR-008.

Step 3 — Update `developer/phase-1-foundation/AI-CONTEXT.md`:
Add any new ADRs to the Reading Order and Key Files sections.

Step 4 — Update `AI-REFERENCE.md`:
Add entries for all files and folders created during Phase 1. Remove any stale "planned" entries that now exist.

Step 5 — Update `AI-SUMMARY.md`:
- Add to "Recent Completions": `- [YYYY-MM-DD] Phase 1 Foundation complete — Next.js 16 scaffolded, all placeholder routes, Coming Soon and final homepage, CI/CD, testing infrastructure`
- Update v0.1 milestone status (🔄 In Progress until live deployment, then ✅ Complete)

Step 6 — Update `CLAUDE.md` "Project Phases" table:
Change v0.1 status from ⏳ Not started to 🔄 In Progress (or ✅ Complete if already deployed).

Step 7 — Write `docs/phases/phase-1-foundation-completion.md`:
Following PHASE_WORKFLOW.md format: summary of what was delivered, key decisions made, files created, what's next (Phase 2).

Step 8 — Final CHANGELOG entry: Record this prompt's completion in `developer/phase-1-foundation/CHANGELOG.md`.

Step 9 — Run the full Phase Completion Checklist from `PHASE_WORKFLOW.md` and confirm every item is checked.
