# Prompt 012 — Blog Index Page (Placeholder)

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/brand-guidelines.md` — brand tokens
- `developer/adr/001-tech-stack.md` — MDX blog format decision

## Scope
**In scope:**
- `src/app/blog/page.tsx` — placeholder Blog index page
- Playwright E2E smoke test: `e2e/blog.spec.ts` — this is one of the three required ADR-005 smoke tests

**Out of scope:**
- Real blog posts (v0.2)
- MDX rendering, RSS feed, category filtering (v0.2)
- Blog post fetching from `src/content/blog/` (v0.2)

## End Deliverable
- `src/app/blog/page.tsx` present; `/blog` returns HTTP 200
- `e2e/blog.spec.ts` Playwright smoke test passes (one of three required smoke tests per ADR-005)
- `npm run build` passes
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Prompt

You are executing Prompt 012 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/brand-guidelines.md`
3. `developer/adr/001-tech-stack.md` (MDX blog context)

**Task:** Create a placeholder `/blog` index page. This is also where the second required ADR-005 E2E smoke test lands.

Step 1 — page.tsx:
Create `src/app/blog/page.tsx`. Include:
- Page heading: "Blog"
- Placeholder body: "Articles on DevOps, platform engineering, developer productivity, and career growth — coming soon."
- Export metadata:
  ```ts
  export const metadata: Metadata = {
    title: 'Blog',
    description: 'Articles on DevOps, platform engineering, developer productivity, and career growth by Ankur Nema.',
  }
  ```

Step 2 — E2E smoke test (required by ADR-005):
Create `e2e/blog.spec.ts`:
```ts
import { test, expect } from '@playwright/test'

test('/blog page renders', async ({ page }) => {
  await page.goto('/blog')
  await expect(page).toHaveTitle(/Blog/)
  await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible()
})
```

Step 3 — Verify: Run `npm run test:e2e`. Run `npm run build`.

Step 4 — Update CHANGELOG: Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
