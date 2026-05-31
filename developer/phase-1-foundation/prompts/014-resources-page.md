# Prompt 014 — Resources Page (Placeholder)

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/brand-guidelines.md` — brand tokens

## Scope
**In scope:**
- `src/app/resources/page.tsx` — placeholder Resources page
- Playwright E2E smoke test: `e2e/resources.spec.ts`

**Out of scope:**
- Real resource listings, downloads, or course content (v1.0)

## End Deliverable
- `src/app/resources/page.tsx` present; `/resources` returns HTTP 200
- E2E smoke test passes
- `npm run build` passes
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Prompt

You are executing Prompt 014 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/brand-guidelines.md`

**Task:** Create a placeholder `/resources` page.

Step 1 — page.tsx:
Create `src/app/resources/page.tsx`. Include:
- Page heading: "Resources"
- Placeholder body: "Templates, guides, and tools for DevOps engineers and engineering managers — coming soon."
- Export metadata:
  ```ts
  export const metadata: Metadata = {
    title: 'Resources',
    description: 'Free templates, guides, and tools for DevOps engineers by Ankur Nema.',
  }
  ```

Step 2 — E2E smoke test:
Create `e2e/resources.spec.ts`:
```ts
import { test, expect } from '@playwright/test'

test('/resources page renders', async ({ page }) => {
  await page.goto('/resources')
  await expect(page).toHaveTitle(/Resources/)
  await expect(page.getByRole('heading', { name: 'Resources' })).toBeVisible()
})
```

Step 3 — Verify: Run `npm run test:e2e`. Run `npm run build`.

Step 4 — Update CHANGELOG: Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
