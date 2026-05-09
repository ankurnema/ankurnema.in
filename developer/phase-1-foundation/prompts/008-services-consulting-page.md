# Prompt 008 — Services: Consulting Page (Placeholder)

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/brand-guidelines.md` — brand tokens

## Scope
**In scope:**
- `src/app/services/consulting/page.tsx` — placeholder Consulting page
- Playwright E2E smoke test: `e2e/services-consulting.spec.ts`

**Out of scope:**
- Real service descriptions, pricing, or booking embeds (v0.3)

## End Deliverable
- `src/app/services/consulting/page.tsx` present; `/services/consulting` returns HTTP 200
- E2E smoke test passes
- `npm run build` passes
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Prompt

You are executing Prompt 008 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/brand-guidelines.md`

**Task:** Create a placeholder `/services/consulting` page.

Step 1 — page.tsx:
Create `src/app/services/consulting/page.tsx`. Include:
- Page heading: "DevOps Consulting"
- Placeholder body: "DevOps consulting service details coming soon. Expert guidance on CI/CD, platform engineering, and developer productivity."
- Export metadata:
  ```ts
  export const metadata: Metadata = {
    title: 'DevOps Consulting',
    description: 'Expert DevOps consulting by Ankur Nema — CI/CD, platform engineering, developer productivity.',
  }
  ```

Step 2 — E2E smoke test:
Create `e2e/services-consulting.spec.ts`:
```ts
import { test, expect } from '@playwright/test'

test('/services/consulting page renders', async ({ page }) => {
  await page.goto('/services/consulting')
  await expect(page).toHaveTitle(/DevOps Consulting/)
  await expect(page.getByRole('heading', { name: 'DevOps Consulting' })).toBeVisible()
})
```

Step 3 — Verify: Run `npm run test:e2e`. Run `npm run build`.

Step 4 — Update CHANGELOG: Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
