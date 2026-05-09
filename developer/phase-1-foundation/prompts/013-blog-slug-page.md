# Prompt 013 — Blog Post Dynamic Route (Placeholder)

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/brand-guidelines.md` — brand tokens
- `developer/adr/007-app-router.md` — dynamic routes in App Router

## Scope
**In scope:**
- `src/app/blog/[slug]/page.tsx` — dynamic blog post placeholder:
  - Displays the slug from `params` as the post title
  - Placeholder body: "This post is not yet published."
  - Returns a 404 via `notFound()` for any slug (since no real posts exist yet) OR renders a generic placeholder — choose the approach that best prepares for real MDX posts in v0.2
  - Exported `metadata` using `generateMetadata` function
- Playwright E2E smoke test: `e2e/blog-slug.spec.ts` — navigates to `/blog/test-post`, asserts the page does not crash (404 page or placeholder renders cleanly)

**Out of scope:**
- Real MDX rendering (v0.2)
- `generateStaticParams` with real post slugs (v0.2)

## End Deliverable
- `src/app/blog/[slug]/page.tsx` present; `/blog/[any-slug]` either returns HTTP 200 with placeholder OR 404 with a branded not-found page
- E2E smoke test passes
- `npm run build` passes
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Prompt

You are executing Prompt 013 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/brand-guidelines.md`
3. `developer/adr/007-app-router.md`

**Task:** Create the dynamic `/blog/[slug]` route placeholder.

Step 1 — Design decision:
Choose one of two approaches and document the choice in CHANGELOG:
- **Option A (recommended):** Return `notFound()` for all slugs now; add `src/app/not-found.tsx` with a branded 404 page. This cleanly signals "no posts yet" and sets up the 404 pattern for v0.2.
- **Option B:** Render a generic "Post not found — coming soon" placeholder for all slugs (returns 200).

If choosing Option A, create `src/app/not-found.tsx` as a branded 404 page.

Step 2 — page.tsx:
Create `src/app/blog/[slug]/page.tsx`:
```ts
export async function generateMetadata({ params }: { params: { slug: string } }) {
  return { title: params.slug }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  notFound() // Option A, or render placeholder for Option B
}
```

Step 3 — E2E smoke test:
Create `e2e/blog-slug.spec.ts`:
```ts
import { test, expect } from '@playwright/test'

test('/blog/[slug] does not crash', async ({ page }) => {
  const response = await page.goto('/blog/test-post')
  // Accepts 200 (placeholder) or 404 (not-found page) — both are valid
  expect([200, 404]).toContain(response?.status())
})
```

Step 4 — Verify: Run `npm run test:e2e`. Run `npm run build`.

Step 5 — Update CHANGELOG: Add entry including which option was chosen and why.
