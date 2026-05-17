# Prompt 010 — Services: Career Guidance Page (Placeholder)

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/brand-guidelines.md` — brand tokens

## Scope
**In scope:**
- `src/app/services/career/page.tsx` — placeholder Career Guidance page
- Playwright E2E smoke test: `e2e/services-career.spec.ts`

**Out of scope:**
- Real service descriptions or booking embeds (v0.3)

## End Deliverable
- `src/app/services/career/page.tsx` present; `/services/career` returns HTTP 200
- E2E smoke test passes
- `npm run build` passes
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Service Context (for when real page is built in v0.3)

Two offerings only:
1. Career Strategy Session — 60 min 1:1, role transition + growth roadmap — ₹4,000
2. Career Audit Package — 3×60 min sessions + written roadmap — ₹12,000

No Interview Prep or Salary Negotiation coaching at this stage.

## Prompt

You are executing Prompt 010 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/brand-guidelines.md`

**Task:** Create a placeholder `/services/career` page.

Step 1 — page.tsx:
Create `src/app/services/career/page.tsx`. Include:
- Page heading: "Career Guidance"
- Placeholder body: "Career guidance service details coming soon. Strategic 1:1 sessions for engineers navigating role transitions, promotions, and long-term growth."
- Export metadata:
  ```ts
  export const metadata: Metadata = {
    title: 'Career Guidance',
    description: 'Career guidance by Ankur Nema — strategic advice for engineers navigating growth and transitions in tech.',
  }
  ```

Step 2 — E2E smoke test:
Create `e2e/services-career.spec.ts`:
```ts
import { test, expect } from '@playwright/test'

test('/services/career page renders', async ({ page }) => {
  await page.goto('/services/career')
  await expect(page).toHaveTitle(/Career Guidance/)
  await expect(page.getByRole('heading', { name: 'Career Guidance' })).toBeVisible()
})
```

Step 3 — Verify: Run `npm run test:e2e`. Run `npm run build`.

Step 4 — Update CHANGELOG: Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
