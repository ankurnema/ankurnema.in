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

**Task:** Create the `/services/linkedin-review` page with real service content (no pricing).

Step 1 — page.tsx:
Create `src/app/services/linkedin-review/page.tsx`. Include:
- Page heading: "LinkedIn Review"
- A short intro paragraph: "A full audit of your LinkedIn profile — every section, not just
  the headline. You'll leave with a clear action plan and a 1:1 session to make sure your
  profile accurately represents your experience and attracts the right opportunities."
- A "What's included" section listing:
  - Section-by-section audit: headline, about, experience, skills, recommendations, featured,
    and activity.
  - Guided enhancement suggestions for each section.
  - One 60-minute 1:1 session covering findings and changes.
  - Written action plan delivered after the session.
  - Email follow-up once changes are live.
- A "How it works" section as steps:
  1. You share your LinkedIn profile URL and a short note on your role, goals, and target
     audience (recruiters, peers, clients, etc.).
  2. Ankur audits every section of your profile.
  3. A 60-minute 1:1 session walks through the findings and enhancements together.
  4. You receive a written action plan to implement the changes.
  5. Email follow-up once your updated profile is live.
- A note: "This is a standalone service — you can book it independently or alongside a
  Resume Review."
- A closing line: "Pricing and booking details coming soon — get in touch to express interest."
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
