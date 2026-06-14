# Prompt 009 — Services: Mentoring Page (Placeholder)

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/brand-guidelines.md` — brand tokens

## Scope
**In scope:**
- `src/app/services/mentoring/page.tsx` — placeholder Mentoring page
- Playwright E2E smoke test: `e2e/services-mentoring.spec.ts`

**Out of scope:**
- Real service descriptions, Scaler mention, or booking embeds (v0.3)

## End Deliverable
- `src/app/services/mentoring/page.tsx` present; `/services/mentoring` returns HTTP 200
- E2E smoke test passes
- `npm run build` passes
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Service Context (for when real page is built in v0.3)

Mentoring is available as one-time or ongoing. Topics:
- DevOps & Platform Engineering career roadmap
- Personal Finance Management
- Learning a specific DevOps tool (hands-on)
- Navigating corporate/office setup — personal brand, office issues, career visibility

Tiers:
- One-time Session: 60 min, any topic — ₹3,000
- Monthly Mentoring: 2 sessions/month + async WhatsApp support — ₹7,000–₹9,000/month
- Quarterly Mentoring: 6 sessions + progress tracking — ₹20,000–₹24,000

No group cohort.

## Prompt

You are executing Prompt 009 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/brand-guidelines.md`

**Task:** Create the `/services/mentoring` page with real service content (no pricing).

Step 1 — page.tsx:
Create `src/app/services/mentoring/page.tsx`. Include:
- Page heading: "Mentoring"
- A short intro paragraph: "1-on-1 mentoring tailored to where you are in your career.
  Available as a one-time session or an ongoing engagement — so you get the depth and
  continuity that matches your goals."
- A "What we can work on" section listing these four topic areas with a short description each:
  1. **DevOps & Platform Engineering Career Roadmap** — Navigating your growth from engineer
     to senior, staff, or into leadership. Build a clear plan for where you're headed and how
     to get there.
  2. **Personal Finance Management** — Budgeting, investing basics, and making your income
     work harder — especially relevant for early-to-mid career engineers in India.
  3. **Hands-on Tool Deep-Dive** — Learn a specific DevOps tool end-to-end with guided
     practice: Kubernetes, Terraform, Helm, ArgoCD, GitHub Actions, and more.
  4. **Navigating Corporate Growth** — Building your personal brand inside an organisation,
     handling office dynamics, increasing your visibility, and positioning for the next step.
- A "Engagement options" section with three tiers (names and inclusions, no prices):
  - **One-time Session** — 60-minute session on any topic. Ideal for a focused deep-dive or a
    specific question you need answered.
  - **Monthly Mentoring** — 2 sessions per month plus async WhatsApp support between sessions.
    For ongoing accountability and guidance.
  - **Quarterly Mentoring** — 6 sessions with structured progress tracking across the quarter.
    For engineers committed to a defined goal over three months.
- A closing line: "Pricing and booking details coming soon — get in touch to express interest."
- Export metadata:
  ```ts
  export const metadata: Metadata = {
    title: 'Mentoring',
    description: '1-on-1 mentoring by Ankur Nema — DevOps careers, personal finance, and navigating corporate growth.',
  }
  ```

Step 2 — E2E smoke test:
Create `e2e/services-mentoring.spec.ts`:
```ts
import { test, expect } from '@playwright/test'

test('/services/mentoring page renders', async ({ page }) => {
  await page.goto('/services/mentoring')
  await expect(page).toHaveTitle(/Mentoring/)
  await expect(page.getByRole('heading', { name: 'Mentoring' })).toBeVisible()
})
```

Step 3 — Verify: Run `npm run test:e2e`. Run `npm run build`.

Step 4 — Update CHANGELOG: Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
