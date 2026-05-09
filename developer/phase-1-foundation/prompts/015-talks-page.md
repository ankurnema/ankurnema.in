# Prompt 015 — Talks Page (Placeholder)

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/brand-guidelines.md` — brand tokens

## Scope
**In scope:**
- `src/app/talks/page.tsx` — placeholder Talks page
- Playwright E2E smoke test: `e2e/talks.spec.ts`

**Out of scope:**
- Real talk listings, videos, or slide embeds (later phase)

## End Deliverable
- `src/app/talks/page.tsx` present; `/talks` returns HTTP 200
- E2E smoke test passes
- `npm run build` passes
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Prompt

You are executing Prompt 015 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/brand-guidelines.md`

**Task:** Create a placeholder `/talks` page.

Step 1 — page.tsx:
Create `src/app/talks/page.tsx`. Include:
- Page heading: "Talks"
- Placeholder body: "Conference talks, webinars, and community sessions — coming soon."
- Export metadata:
  ```ts
  export const metadata: Metadata = {
    title: 'Talks',
    description: 'Conference talks and community sessions by Ankur Nema on DevOps and developer productivity.',
  }
  ```

Step 2 — E2E smoke test:
Create `e2e/talks.spec.ts`:
```ts
import { test, expect } from '@playwright/test'

test('/talks page renders', async ({ page }) => {
  await page.goto('/talks')
  await expect(page).toHaveTitle(/Talks/)
  await expect(page.getByRole('heading', { name: 'Talks' })).toBeVisible()
})
```

Step 3 — Verify: Run `npm run test:e2e`. Run `npm run build`.

Step 4 — Update CHANGELOG: Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
