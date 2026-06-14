# Prompt 008 — Services: Consulting Hour Page (Placeholder)

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/brand-guidelines.md` — brand tokens

## Scope
**In scope:**
- `src/app/services/consulting/page.tsx` — placeholder Consulting Hour page
- Playwright E2E smoke test: `e2e/services-consulting.spec.ts`

**Out of scope:**
- Real service descriptions, pricing, or booking embeds (v0.3)

## End Deliverable
- `src/app/services/consulting/page.tsx` present; `/services/consulting` returns HTTP 200
- E2E smoke test passes
- `npm run build` passes
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Service Context (for when real page is built in v0.3)

Consulting Hour is a structured 1:1 session where the user picks topic(s), shares background and desired outcomes, and Ankur prepares the session agenda. User confirms the agenda before the session happens.

Topics include: DevOps, Cloud/Kubernetes, CI/CD, Platform Engineering, Developer Productivity, AI tools and workflows, AI for daily work.

Price: ₹4,000 per session (60 min).

This is NOT DevOps business/startup consulting — that is a future offering (requires SAP approval).

## Prompt

You are executing Prompt 008 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/brand-guidelines.md`

**Task:** Create the `/services/consulting` page with real service content (no pricing).

Step 1 — page.tsx:
Create `src/app/services/consulting/page.tsx`. Include:
- Page heading: "Consulting Hour"
- A short intro paragraph: "Expert 1:1 advisory sessions where you set the agenda. Bring your
  challenge, your team's pain point, or the topic you've been meaning to deep-dive — Ankur
  prepares a structured session so the hour is focused and actionable."
- A "Topics covered" section listing: DevOps & Platform Engineering, Cloud & Kubernetes,
  CI/CD and Build Systems, Developer Productivity, AI Tools and Workflows, AI for Daily Work.
- A "How it works" section with these steps:
  1. You pick a topic and share your background and desired outcome.
  2. Ankur prepares the session agenda and shares it with you.
  3. You confirm the agenda — the session only proceeds once you're aligned.
  4. 60-minute focused session.
- A closing line: "Booking details coming soon — get in touch to express interest."
- Export metadata:
  ```ts
  export const metadata: Metadata = {
    title: 'Consulting Hour',
    description: 'Expert 1:1 consulting sessions by Ankur Nema on DevOps, Cloud, AI productivity, and more.',
  }
  ```

Step 2 — E2E smoke test:
Create `e2e/services-consulting.spec.ts`:
```ts
import { test, expect } from '@playwright/test'

test('/services/consulting page renders', async ({ page }) => {
  await page.goto('/services/consulting')
  await expect(page).toHaveTitle(/Consulting Hour/)
  await expect(page.getByRole('heading', { name: 'Consulting Hour' })).toBeVisible()
})
```

Step 3 — Verify: Run `npm run test:e2e`. Run `npm run build`.

Step 4 — Update CHANGELOG: Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
