# Prompt 006 — About Page (Placeholder)

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/brand-guidelines.md` — brand tokens and styling conventions
- `src/app/layout.tsx` — root layout (header/footer shared)

## Scope
**In scope:**
- `src/app/about/page.tsx` — placeholder About page:
  - Page heading: "About"
  - Brief placeholder body: "Coming soon — learn about Ankur Nema's background and experience."
  - Consistent brand styling (typography, colors, spacing)
  - Exported `metadata` with correct `title` ("About | Ankur Nema") and `description`
  - NOT linked from navigation (hidden until v0.2)
- Playwright E2E smoke test: `e2e/about.spec.ts` — navigates to `/about`, asserts page title contains "About" and returns HTTP 200

**Out of scope:**
- Real content (v0.2 / v0.3)
- Navigation links to this page from the header

## End Deliverable
- `src/app/about/page.tsx` present; `/about` returns HTTP 200 at `localhost:3000`
- `e2e/about.spec.ts` Playwright smoke test passes
- `npm run build` passes
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Prompt

You are executing Prompt 006 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/brand-guidelines.md`

**Task:** Create a placeholder `/about` page.

Step 1 — page.tsx:
Create `src/app/about/page.tsx`. Include:
- A page heading: "About"
- Placeholder body text: "Coming soon — learn about Ankur Nema's background, career journey, and consulting philosophy."
- Export metadata:
  ```ts
  export const metadata: Metadata = {
    title: 'About',
    description: 'Learn about Ankur Nema — DevOps Director, consultant, and mentor.',
  }
  ```
- Style consistently with the brand (match the visual language of the root layout)

Step 2 — E2E smoke test:
Create `e2e/about.spec.ts`:
```ts
import { test, expect } from '@playwright/test'

test('/about page renders', async ({ page }) => {
  await page.goto('/about')
  await expect(page).toHaveTitle(/About/)
  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible()
})
```

Step 3 — Verify: Start dev server, run `npm run test:e2e`. Run `npm run build`. Fix any errors.

Step 4 — Update CHANGELOG: Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
