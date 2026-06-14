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

**Task:** Create the `/services` overview page with real service descriptions (no pricing).

Step 1 — page.tsx:
Create `src/app/services/page.tsx`. The page should have a heading "Services" followed by
service cards or sections. Use a card/grid layout consistent with the brand. Each card shows
the service name and a 1–2 sentence description. No links, no prices, no booking CTAs.

Render services in this exact order:

**Primary services (4 cards, equal visual weight):**

1. **Mentoring** — 1-on-1 mentoring covering DevOps and Platform Engineering career roadmaps,
   personal finance management, hands-on tool deep-dives, and navigating corporate growth.
   Available as one-time or ongoing engagements.

2. **Career Guidance** — Strategic 1:1 sessions for engineers navigating role transitions,
   promotions, and long-term career growth. Choose a single strategy session or a multi-session
   audit package with a written roadmap.

3. **Resume Review** — Personalised resume review with in-depth analysis, guided enhancement
   steps, 1:1 sessions, and a written action plan — for engineers targeting top tech roles.

4. **LinkedIn Review** — Full LinkedIn profile audit covering every section, with guided
   enhancements and a 1:1 session so your profile works as hard as you do.

**Secondary service (visually de-emphasised — slightly lighter or smaller, after the four primaries):**

5. **Consulting Hour** — Expert 1:1 advisory sessions on DevOps, Cloud, CI/CD, Platform
   Engineering, and AI workflows. You define the topic; Ankur prepares the agenda.

Export metadata:
```ts
export const metadata: Metadata = {
  title: 'Services',
  description: 'Mentoring, career guidance, resume review, LinkedIn review, and consulting by Ankur Nema.',
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
