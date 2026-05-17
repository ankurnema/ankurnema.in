# Prompt 007 — Services Page (Placeholder)

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/brand-guidelines.md` — brand tokens and styling conventions
- `developer/phase-1-foundation/README.md` — services route list

## Scope
**In scope:**
- `src/app/services/page.tsx` — placeholder Services overview page:
  - Page heading: "Services"
  - Brief placeholder listing active service types: Resume Review, LinkedIn Review, Career Guidance, Mentoring, Consulting Hour
  - Note: DevOps Business Consulting listed as "Coming Soon"
  - Placeholder copy: "Full service details coming soon."
  - Exported `metadata` with correct `title` ("Services | Ankur Nema") and `description`
  - NOT linked from navigation
- Playwright E2E smoke test: `e2e/services.spec.ts` — navigates to `/services`, asserts page title and heading

**Out of scope:**
- Real service descriptions, pricing, or booking embeds (v0.3)
- Links to service sub-pages from this page (they are also hidden)

## End Deliverable
- `src/app/services/page.tsx` present; `/services` returns HTTP 200
- `e2e/services.spec.ts` passes
- `npm run build` passes
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Prompt

You are executing Prompt 007 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/brand-guidelines.md`

**Task:** Create a placeholder `/services` overview page.

Step 1 — page.tsx:
Create `src/app/services/page.tsx`. Include:
- Page heading: "Services"
- Five active service names listed (no links): Resume Review, LinkedIn Review, Career Guidance, Mentoring, Consulting Hour
- One additional item listed as coming soon: DevOps Business Consulting (Coming Soon)
- Placeholder body: "Detailed service pages launching soon."
- Export metadata:
  ```ts
  export const metadata: Metadata = {
    title: 'Services',
    description: 'Mentoring, career guidance, resume review, and consulting by Ankur Nema.',
  }
  ```

Step 2 — E2E smoke test:
Create `e2e/services.spec.ts`:
```ts
import { test, expect } from '@playwright/test'

test('/services page renders', async ({ page }) => {
  await page.goto('/services')
  await expect(page).toHaveTitle(/Services/)
  await expect(page.getByRole('heading', { name: 'Services' })).toBeVisible()
})
```

Step 3 — Verify: Run `npm run test:e2e`. Run `npm run build`. Fix any errors.

Step 4 — Update CHANGELOG: Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
