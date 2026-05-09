# Prompt 011 — Services: Resume Review Page (Placeholder)

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/brand-guidelines.md` — brand tokens

## Scope
**In scope:**
- `src/app/services/resume-review/page.tsx` — placeholder Resume Review page
- Playwright E2E smoke test: `e2e/services-resume-review.spec.ts`

**Out of scope:**
- Real service descriptions, pricing, or submission forms (v0.3)

## End Deliverable
- `src/app/services/resume-review/page.tsx` present; `/services/resume-review` returns HTTP 200
- E2E smoke test passes
- `npm run build` passes
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Prompt

You are executing Prompt 011 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/brand-guidelines.md`

**Task:** Create a placeholder `/services/resume-review` page.

Step 1 — page.tsx:
Create `src/app/services/resume-review/page.tsx`. Include:
- Page heading: "Resume Review"
- Placeholder body: "Resume review service details coming soon. Professional review and feedback for engineers applying to top tech companies."
- Export metadata:
  ```ts
  export const metadata: Metadata = {
    title: 'Resume Review',
    description: 'Professional resume review by Ankur Nema for engineers targeting top tech companies.',
  }
  ```

Step 2 — E2E smoke test:
Create `e2e/services-resume-review.spec.ts`:
```ts
import { test, expect } from '@playwright/test'

test('/services/resume-review page renders', async ({ page }) => {
  await page.goto('/services/resume-review')
  await expect(page).toHaveTitle(/Resume Review/)
  await expect(page.getByRole('heading', { name: 'Resume Review' })).toBeVisible()
})
```

Step 3 — Verify: Run `npm run test:e2e`. Run `npm run build`.

Step 4 — Update CHANGELOG: Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
