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

**Task:** Create the `/services/resume-review` page with real service content (no pricing).

Step 1 — page.tsx:
Create `src/app/services/resume-review/page.tsx`. Include:
- Page heading: "Resume Review"
- A short intro paragraph: "A personalised, end-to-end resume review built around your
  specific career goals — not a generic checklist. Every engagement includes a 1:1 session
  and a written action plan so you leave with a resume you're confident submitting."
- A "How it works" section describing the process as steps:
  1. You submit your resume and a full career timeline.
  2. Ankur reviews everything in detail.
  3. A 1:1 session covers findings, suggested changes, and enhancement guidelines.
  4. You receive a written report with prioritised action items.
  5. You submit your updated resume.
  6. Email follow-up to confirm the changes land correctly.
- A "Review tiers" section with four options (names, turnaround, inclusions — no prices):
  1. **Quick Review** — 48-hour turnaround. Written feedback, guided enhancement steps, and
     one 30-minute 1:1 session.
  2. **Deep Review** — 3–4 day turnaround. In-depth analysis, guided enhancement steps, one
     60-minute 1:1 session, and one free follow-up session.
  3. **Full Makeover** — 1-week turnaround. In-depth analysis, a 30-minute initial session,
     and two follow-up sessions (30–60 minutes each).
  4. **JD-Based Review** *(add-on)* — 24-hour turnaround. Tailored suggestions for a specific
     job description, delivered by email. Available only for Deep Review or Full Makeover customers.
- A closing line: "Pricing and booking details coming soon — get in touch to express interest."
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
