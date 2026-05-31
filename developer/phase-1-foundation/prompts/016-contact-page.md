# Prompt 016 — Contact Page (Placeholder)

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/brand-guidelines.md` — brand tokens
- `developer/adr/005-testing-strategy.md` — the 3 required smoke tests are: homepage, /blog, /contact

## Scope
**In scope:**
- `src/app/contact/page.tsx` — placeholder Contact page
- Playwright E2E smoke test: `e2e/contact.spec.ts` — this is the third required ADR-005 smoke test
- After this prompt, verify all 3 required smoke tests run green: `e2e/homepage.spec.ts`, `e2e/blog.spec.ts`, `e2e/contact.spec.ts`

**Out of scope:**
- Real contact form or Zoho Forms embed (v0.3)
- Email form handling or backend

## End Deliverable
- `src/app/contact/page.tsx` present; `/contact` returns HTTP 200
- `e2e/contact.spec.ts` passes (third required ADR-005 smoke test)
- All three required smoke tests (homepage + blog + contact) verified green together
- `npm run build` passes
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Prompt

You are executing Prompt 016 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/brand-guidelines.md`
3. `developer/adr/005-testing-strategy.md` (smoke test requirements)

**Task:** Create a placeholder `/contact` page and confirm all 3 required smoke tests are green.

Step 1 — page.tsx:
Create `src/app/contact/page.tsx`. Include:
- Page heading: "Contact"
- Placeholder body: "Get in touch — contact form and booking links coming soon."
- Email address: `ankur@ankurnema.in`
- Export metadata:
  ```ts
  export const metadata: Metadata = {
    title: 'Contact',
    description: 'Get in touch with Ankur Nema — consulting inquiries, mentoring, and speaking engagements.',
  }
  ```

Step 2 — E2E smoke test (required by ADR-005):
Create `e2e/contact.spec.ts`:
```ts
import { test, expect } from '@playwright/test'

test('/contact page renders', async ({ page }) => {
  await page.goto('/contact')
  await expect(page).toHaveTitle(/Contact/)
  await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible()
})
```

Step 3 — Verify all 3 required smoke tests:
Run `npm run test:e2e`. Confirm `homepage.spec.ts`, `blog.spec.ts`, and `contact.spec.ts` all pass. These are the three required E2E smoke tests per ADR-005 Phase 1.

Step 4 — Run `npm run build`.

Step 5 — Update CHANGELOG: Add entry noting that all 3 required smoke tests now pass.
