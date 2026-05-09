# Prompt 009 — Services: Mentoring Page (Placeholder)

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/brand-guidelines.md` — brand tokens

## Scope
**In scope:**
- `src/app/services/mentoring/page.tsx` — placeholder Mentoring page
- Playwright E2E smoke test: `e2e/services-mentoring.spec.ts`

**Out of scope:**
- Real service descriptions, Scaler mention, or booking embeds (v0.3)

## End Deliverable
- `src/app/services/mentoring/page.tsx` present; `/services/mentoring` returns HTTP 200
- E2E smoke test passes
- `npm run build` passes
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Prompt

You are executing Prompt 009 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/brand-guidelines.md`

**Task:** Create a placeholder `/services/mentoring` page.

Step 1 — page.tsx:
Create `src/app/services/mentoring/page.tsx`. Include:
- Page heading: "Mentoring"
- Placeholder body: "1-on-1 mentoring service details coming soon. Guidance for engineers looking to grow in DevOps, platform engineering, and technical leadership."
- Export metadata:
  ```ts
  export const metadata: Metadata = {
    title: 'Mentoring',
    description: '1-on-1 technical mentoring by Ankur Nema for engineers growing in DevOps and platform engineering.',
  }
  ```

Step 2 — E2E smoke test:
Create `e2e/services-mentoring.spec.ts`:
```ts
import { test, expect } from '@playwright/test'

test('/services/mentoring page renders', async ({ page }) => {
  await page.goto('/services/mentoring')
  await expect(page).toHaveTitle(/Mentoring/)
  await expect(page.getByRole('heading', { name: 'Mentoring' })).toBeVisible()
})
```

Step 3 — Verify: Run `npm run test:e2e`. Run `npm run build`.

Step 4 — Update CHANGELOG: Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
