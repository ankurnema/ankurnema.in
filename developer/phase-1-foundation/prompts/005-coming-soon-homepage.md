# Prompt 005 — Coming Soon Homepage

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation; note that `/` is the ONLY publicly visible route
- `developer/phase-1-foundation/brand-guidelines.md` — brand colors, fonts, logo
- `developer/adr/007-app-router.md` — App Router page conventions
- `src/app/layout.tsx` — root layout this page renders inside

## Scope
**In scope:**
- `src/app/page.tsx` — Coming Soon home page:
  - Logo/brand mark (large, centered or left-aligned)
  - Full name: "Ankur Nema"
  - Role/tagline: "Director – DevOps & Developer Productivity | Consultant"
  - "Coming Soon" message or brief teaser (1–2 sentences about what's launching)
  - Optional: email capture or social links (LinkedIn, GitHub)
  - Exported `metadata` object with `title`, `description`, OG fields, `openGraph.images` pointing to `/og-default.png`
  - Mobile-first responsive design using brand tokens
- Playwright E2E smoke test: `e2e/homepage.spec.ts` — navigates to `/`, asserts page title contains "Ankur Nema" and tagline text is visible
- Other routes must NOT be linked from this page

**Out of scope:**
- Full homepage with hero, services teaser, blog teaser (Prompt 017)
- Navigation links to any other route
- Email subscription backend / form handling

## End Deliverable
- `src/app/page.tsx` — Coming Soon page renders at `localhost:3000`
- `e2e/homepage.spec.ts` — Playwright E2E smoke test passes (`npm run test:e2e`)
- OG metadata present (title, description, og:image)
- `npm run build` passes
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Prompt

You are executing Prompt 005 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/brand-guidelines.md`
3. `src/app/layout.tsx` (root layout context)

**Task:** Build the Coming Soon home page at `/`.

Step 1 — page.tsx:
Create `src/app/page.tsx`. Design a clean, branded Coming Soon page:
- Large logo mark or wordmark
- Name "Ankur Nema" as the headline
- Tagline or role description
- 1–2 sentences of teaser copy (e.g., "Mentoring, career guidance, and expert consulting by Ankur Nema — launching soon.")
- Social links: LinkedIn and GitHub icons/text links
- Use Tailwind classes that reference your brand tokens (`text-primary-*`, `bg-neutral-*`, etc.)
- Mobile-first: works well on 375px width; center-aligned on desktop

Export a `metadata` object:
```ts
export const metadata: Metadata = {
  title: 'Ankur Nema — Coming Soon',
  description: 'Mentoring, career guidance, and expert consulting by Ankur Nema — launching soon.',
  openGraph: {
    title: 'Ankur Nema — Coming Soon',
    description: '...',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
}
```

Step 2 — E2E smoke test:
Create `e2e/homepage.spec.ts`:
```ts
import { test, expect } from '@playwright/test'

test('homepage renders', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Ankur Nema/)
  await expect(page.getByText('Ankur Nema')).toBeVisible()
})
```

Step 3 — Verify:
Start `npm run dev` in background, then run `npm run test:e2e`. Fix any failures.
Run `npm run build`.

Step 4 — Update CHANGELOG: Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
