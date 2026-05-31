# Prompt 002 — Testing Infrastructure

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/README.md` — deliverable 6 in detail
- `developer/adr/005-testing-strategy.md` — layered testing decision: Vitest + Playwright + Lighthouse CI; Phase 1 rollout scope
- `PROMPT_TEMPLATE.md` — Pinned Dependency Versions table (for testing package versions)

## Scope
**In scope:**
- Install and configure Vitest + `@testing-library/react` + `@testing-library/jest-dom` for unit/component tests
- Create `vitest.config.ts` with jsdom environment, global setup, and coverage config
- Install and configure `@playwright/test`; create `playwright.config.ts`
- Create `lighthouserc.json` (or `lighthouserc.js`) configured to fail CI if performance score < 80
- Add npm scripts to `package.json`: `"test": "vitest"`, `"test:e2e": "playwright test"`, `"test:coverage": "vitest run --coverage"`
- Write one sample Vitest smoke test (e.g., `src/__tests__/smoke.test.ts`) that asserts `true === true` — confirms the test runner works before real tests exist
- NOTE: E2E smoke tests for specific pages are written in Prompts 005 (homepage), 012 (/blog), and 016 (/contact) when those pages are built

**Out of scope:**
- React Testing Library component tests (ADR-005 Phase 2)
- axe-playwright accessibility tests (ADR-005 Phase 2)
- Visual snapshot tests (ADR-005 Phase 3)
- Cross-browser Playwright configuration (ADR-005 Phase 3)
- The actual E2E tests — those are written per-page in later prompts

## End Deliverable
- `vitest.config.ts` present; `npm run test` runs and passes (at least the sample smoke test)
- `playwright.config.ts` present; `npm run test:e2e` runs without errors (0 tests is acceptable at this stage)
- `lighthouserc.json` present with `performance >= 80` assertion
- `developer/phase-1-foundation/CHANGELOG.md` updated with this prompt's execution entry

## Prompt

You are executing Prompt 002 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/adr/005-testing-strategy.md`
3. `PROMPT_TEMPLATE.md` (Pinned Dependency Versions — check for vitest, playwright, @testing-library versions)

**Task:** Set up the testing infrastructure for ankurnema.in so that every subsequent prompt can include tests.

Step 1 — Install Vitest + React Testing Library:
- Install `vitest`, `@vitest/coverage-v8`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, `@vitejs/plugin-react` (or equivalent for Next.js)
- Create `vitest.config.ts`: set environment to `jsdom`, include global setup importing `@testing-library/jest-dom`, configure coverage to target `src/`
- Ensure Vitest does not conflict with Next.js's own TypeScript config

Step 2 — Install Playwright:
- Install `@playwright/test` and run `npx playwright install` (chromium at minimum)
- Create `playwright.config.ts`: base URL `http://localhost:3000`, chromium project, screenshot on failure
- The E2E test folder can be `e2e/` or `tests/` — be explicit in the config

Step 3 — Lighthouse CI:
- Install `@lhci/cli` as a dev dependency
- Create `lighthouserc.json` at repo root: collect from `http://localhost:3000`, assert `categories:performance >= 0.8`, upload to `temporary-public-storage`

Step 4 — npm scripts:
Add to `package.json`:
```
"test": "vitest",
"test:watch": "vitest --watch",
"test:coverage": "vitest run --coverage",
"test:e2e": "playwright test"
```

Step 5 — Sample smoke test:
Create `src/__tests__/smoke.test.ts` with one trivial passing test to confirm the runner is working.

Step 6 — Verify: Run `npm run test` (should pass). Run `npm run test:e2e` (should run with 0 tests, exit 0).

Step 7 — Update CHANGELOG: Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
