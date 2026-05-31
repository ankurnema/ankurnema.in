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

## Service Context (for when real page is built in v0.3)

Process: candidate submits resume + full career timeline → Ankur reviews → 1:1 session with findings + suggestions + guidelines → written report + action items → candidate submits updated resume → email follow-up + optional free follow-up session.

Four tiers:
1. Quick Review — Written feedback + guided enhancement steps + 1×30-min session — 48 hrs — ₹1,499
2. Deep Review — In-depth analysis + guided enhancement steps + 1×60-min session + 1 free follow-up — 3–4 days — ₹2,999
3. Full Makeover — In-depth analysis + 1×30-min initial session + 2 follow-up sessions (30–60 min each) — 1 week — ₹5,999
4. JD-Based Review (add-on) — Suggestions per specific JD, email delivery — 24 hrs — ₹499
   - Available ONLY to existing Deep Review or Full Makeover customers

## Prompt

You are executing Prompt 011 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/brand-guidelines.md`

**Task:** Create a placeholder `/services/resume-review` page.

Step 1 — page.tsx:
Create `src/app/services/resume-review/page.tsx`. Include:
- Page heading: "Resume Review"
- Placeholder body: "Resume review service details coming soon. Personalised 1:1 resume review with guided enhancement steps and a written action plan — for engineers targeting top tech roles."
- Export metadata:
  ```ts
  export const metadata: Metadata = {
    title: 'Resume Review',
    description: 'Personalised resume review by Ankur Nema — guided enhancement steps and 1:1 sessions for engineers targeting top tech roles.',
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
