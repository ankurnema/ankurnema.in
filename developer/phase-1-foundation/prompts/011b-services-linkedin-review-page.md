# Prompt 011b — Services: LinkedIn Review Page (Placeholder)

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/brand-guidelines.md` — brand tokens

## Scope
**In scope:**
- `src/app/services/linkedin-review/page.tsx` — placeholder LinkedIn Review page
- Playwright E2E smoke test: `e2e/services-linkedin-review.spec.ts`

**Out of scope:**
- Real service descriptions, pricing, or submission forms (v0.3)

## End Deliverable
- `src/app/services/linkedin-review/page.tsx` present; `/services/linkedin-review` returns HTTP 200
- E2E smoke test passes
- `npm run build` passes
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Service Context (for when real page is built in v0.3)

Single offering: LinkedIn Profile Review — ₹3,499

Process: candidate submits LinkedIn profile URL + context (role/goals) → Ankur audits all sections → 1×60-min session covering findings + enhancements → written action plan delivered → email follow-up.

This is a standalone service, separate from Resume Review. Candidates can book it independently or alongside Resume Review.

## Prompt

You are executing Prompt 011b of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/brand-guidelines.md`

**Task:** Create a placeholder `/services/linkedin-review` page.

Step 1 — page.tsx:
Create `src/app/services/linkedin-review/page.tsx`. Include:
- Page heading: "LinkedIn Review"
- Placeholder body: "LinkedIn profile review service details coming soon. Full profile audit with guided enhancements and a 1:1 session — so your profile works as hard as you do."
- Export metadata:
  ```ts
  export const metadata: Metadata = {
    title: 'LinkedIn Review',
    description: 'LinkedIn profile review by Ankur Nema — full audit, guided enhancements, and a 1:1 session to make your profile stand out.',
  }
  ```

Step 2 — E2E smoke test:
Create `e2e/services-linkedin-review.spec.ts`:
```ts
import { test, expect } from '@playwright/test'

test('/services/linkedin-review page renders', async ({ page }) => {
  await page.goto('/services/linkedin-review')
  await expect(page).toHaveTitle(/LinkedIn Review/)
  await expect(page.getByRole('heading', { name: 'LinkedIn Review' })).toBeVisible()
})
```

Step 3 — Verify: Run `npm run test:e2e`. Run `npm run build`.

Step 4 — Update CHANGELOG: Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
