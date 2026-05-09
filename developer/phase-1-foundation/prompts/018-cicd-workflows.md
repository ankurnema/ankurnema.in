# Prompt 018 — CI/CD Workflows

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/README.md` — deliverables 7 and 8, Success Criteria section
- `developer/adr/002-vercel-hosting.md` — Vercel deployment approach
- `developer/adr/005-testing-strategy.md` — CI steps required (lint, type-check, build, vitest, playwright, lighthouse)
- `.nvmrc` — Node version to use in CI

## Scope
**In scope:**
- `.github/workflows/ci.yml` — triggered on every PR to `main`:
  - Steps: checkout, setup-node (version from `.nvmrc`), `npm ci`, lint, type-check (`tsc --noEmit`), `next build` (production — NOT Turbopack), Vitest, Playwright, Lighthouse CI
  - Lighthouse CI step: start Next.js server, run `lhci autorun`, fail if performance < 80
- `.github/workflows/deploy.yml` — triggered on push to `main` (after merge):
  - Steps: checkout, deploy to Vercel using `vercel` CLI with `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` secrets

**Out of scope:**
- Branch protection rules (done manually in GitHub Settings)
- Vercel project creation (documented in INSTRUCTIONS.md)
- Preview deployments (Vercel handles automatically)

## End Deliverable
- `.github/workflows/ci.yml` — syntactically valid YAML; all steps correctly sequenced
- `.github/workflows/deploy.yml` — syntactically valid YAML; uses correct Vercel CLI commands
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Prompt

You are executing Prompt 018 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/README.md` (Success Criteria section)
3. `developer/adr/002-vercel-hosting.md`
4. `developer/adr/005-testing-strategy.md`
5. `.nvmrc` (Node version)
6. `lighthouserc.json` (Lighthouse CI config)

**Task:** Create the GitHub Actions CI/CD workflows.

Step 1 — `.github/workflows/ci.yml`:
Create the CI workflow that runs on every PR targeting `main`. It must include these jobs/steps in order:
1. Checkout (`actions/checkout@v4`)
2. Read Node version from `.nvmrc` (`actions/setup-node@v4` with `node-version-file: '.nvmrc'`)
3. `npm ci` (clean install)
4. Lint: `npm run lint`
5. Type check: `npx tsc --noEmit`
6. Build: `npm run build` (production build — Turbopack is dev-only)
7. Unit tests: `npm run test -- --run` (single run, no watch)
8. E2E tests: start Next.js server in background (`npm run start &`), wait for it, then run `npm run test:e2e`
9. Lighthouse CI: run `npx lhci autorun` using `lighthouserc.json`

Step 2 — `.github/workflows/deploy.yml`:
Create the deploy workflow that triggers on `push` to `main`:
1. Checkout
2. Setup Node from `.nvmrc`
3. `npm ci`
4. Deploy to Vercel:
   ```yaml
   - run: npx vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
     env:
       VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
       VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
   ```

Step 3 — Validate YAML syntax: Run `npx js-yaml .github/workflows/ci.yml` and `npx js-yaml .github/workflows/deploy.yml` to confirm no syntax errors.

Step 4 — Update CHANGELOG: Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
