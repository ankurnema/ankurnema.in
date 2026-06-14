# Prompt 010 — Services: Career Guidance Page (Placeholder)

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/brand-guidelines.md` — brand tokens

## Scope
**In scope:**
- `src/app/services/career/page.tsx` — placeholder Career Guidance page
- Playwright E2E smoke test: `e2e/services-career.spec.ts`

**Out of scope:**
- Real service descriptions or booking embeds (v0.3)

## End Deliverable
- `src/app/services/career/page.tsx` present; `/services/career` returns HTTP 200
- E2E smoke test passes
- `npm run build` passes
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Service Context (for when real page is built in v0.3)

Two offerings only:
1. Career Strategy Session — 60 min 1:1, role transition + growth roadmap — ₹4,000
2. Career Audit Package — 3×60 min sessions + written roadmap — ₹12,000

No Interview Prep or Salary Negotiation coaching at this stage.

## Prompt

You are executing Prompt 010 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/brand-guidelines.md`

**Task:** Create the `/services/career` page with real service content (no pricing).

Step 1 — page.tsx:
Create `src/app/services/career/page.tsx`. Include:
- Page heading: "Career Guidance"
- A short intro paragraph: "Strategic 1:1 guidance for engineers at inflection points —
  whether you're eyeing a promotion, switching roles, moving into a new domain, or simply
  unsure what your next step should look like."
- A "Offerings" section with two options (names and inclusions, no prices):
  1. **Career Strategy Session** — A focused 60-minute 1:1 to map your current situation,
     clarify your goals, and walk away with a concrete next-step plan. Ideal for engineers
     who need a clear direction without a long commitment.
  2. **Career Audit Package** — Three 60-minute sessions spread over a few weeks, plus a
     written career roadmap delivered at the end. Covers your current role, growth gaps,
     skill positioning, and a prioritised action plan for the next 6–12 months.
- A "Who this is for" section: engineers with 2–10 years of experience navigating promotions,
  lateral moves, role transitions (IC to management or vice versa), or figuring out their
  next domain.
- A closing line: "Pricing and booking details coming soon — get in touch to express interest."
- Export metadata:
  ```ts
  export const metadata: Metadata = {
    title: 'Career Guidance',
    description: 'Career guidance by Ankur Nema — strategic advice for engineers navigating growth and transitions in tech.',
  }
  ```

Step 2 — E2E smoke test:
Create `e2e/services-career.spec.ts`:
```ts
import { test, expect } from '@playwright/test'

test('/services/career page renders', async ({ page }) => {
  await page.goto('/services/career')
  await expect(page).toHaveTitle(/Career Guidance/)
  await expect(page.getByRole('heading', { name: 'Career Guidance' })).toBeVisible()
})
```

Step 3 — Verify: Run `npm run test:e2e`. Run `npm run build`.

Step 4 — Update CHANGELOG: Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
