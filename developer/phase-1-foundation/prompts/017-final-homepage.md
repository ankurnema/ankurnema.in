# Prompt 017 — Final Homepage Design

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/brand-guidelines.md` — full brand system
- `developer/phase-1-foundation/README.md` — site architecture and planned routes
- `developer/adr/007-app-router.md` — App Router page conventions
- `src/app/layout.tsx` — root layout (header/footer context)
- `src/app/services/page.tsx` — services exist as placeholder targets for CTA links
- `src/app/contact/page.tsx` — contact page exists as CTA target

## Scope
**In scope:**
Replace the Coming Soon `src/app/page.tsx` with a full Phase 1 homepage design. Required sections:
1. **Hero** — name "Ankur Nema", role/title, tagline, two CTA buttons: "View Services" (→ `/services`) and "Get in Touch" (→ `/contact`)
2. **Services teaser** — 3–4 service cards (Consulting, Mentoring, Career Guidance, Resume Review); each card shows service name + 1-line description; no links (routes hidden from nav but direct URL works)
3. **About teaser** — 2–3 sentences about Ankur + a "Learn more" text link to `/about`
4. **Blog teaser** — heading "Latest Articles" + placeholder ("First article coming soon") — no real posts yet
5. **Contact CTA** — "Ready to work together?" section with a link/button to `/contact`

Design requirements:
- Mobile-first, fully responsive (375px → 1280px+)
- Uses brand color tokens and typography from `brand-guidelines.md`
- Clean, professional — not flashy; appropriate for a senior technical consultant
- Update E2E smoke test in `e2e/homepage.spec.ts` to assert the new hero content

**Out of scope:**
- Real blog post fetching (v0.2)
- Navigation menu with all route links (v0.2)
- Animations or scroll effects (later phase)
- Zoho Bookings embed (v0.3)

## End Deliverable
- `src/app/page.tsx` — full homepage with all 5 required sections
- `e2e/homepage.spec.ts` updated to assert hero heading "Ankur Nema" and CTA buttons
- Mobile-responsive (verify at 375px and 1280px widths)
- `npm run build` passes
- `npm run test:e2e` passes (all smoke tests including updated homepage test)
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Prompt

You are executing Prompt 017 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/brand-guidelines.md`
3. `src/app/layout.tsx` (root layout — header/footer already handled here)
4. `developer/phase-1-foundation/README.md` (site architecture)

**Task:** Replace the Coming Soon page with the full Phase 1 homepage.

Step 1 — Replace `src/app/page.tsx` with the full homepage. Build all 5 sections in order:

**Hero section:**
- Large heading: "Ankur Nema"
- Subheading: "Director – DevOps & Developer Productivity | Consultant & Mentor"
- Tagline: 1 punchy sentence about the value proposition
- Two CTA buttons: "View Services" links to `/services`, "Get in Touch" links to `/contact`
- Full-width, vertically centered, uses brand primary color as background or accent

**Services teaser section:**
- Section heading: "What I Do"
- 4 cards: Consulting, Mentoring, Career Guidance, Resume Review
- Each card: service name (h3), 1-line description, brand accent border or icon
- Responsive: 1 column mobile, 2 columns tablet, 4 columns desktop

**About teaser section:**
- Section heading: "About"
- 2–3 sentences: Ankur's background, role, consulting mission
- "Learn more about me →" link to `/about`

**Blog teaser section:**
- Section heading: "Latest Articles"
- Placeholder: "First article coming soon — stay tuned."
- "View all articles →" text link to `/blog`

**Contact CTA section:**
- Full-width band with brand primary or accent background
- Heading: "Ready to work together?"
- CTA button: "Get in Touch" links to `/contact`

Step 2 — Update metadata:
```ts
export const metadata: Metadata = {
  title: 'Ankur Nema — DevOps Consulting & Mentoring',
  description: 'DevOps consulting, technical mentoring, and career guidance by Ankur Nema.',
  openGraph: { images: [{ url: '/og-default.png', width: 1200, height: 630 }] },
}
```

Step 3 — Update E2E test:
Update `e2e/homepage.spec.ts` to assert the hero heading "Ankur Nema" is visible and one CTA button is present.

Step 4 — Responsive check:
Use `next-devtools-mcp` or Playwright's viewport config to verify the page at 375px width. Fix any layout breaks.

Step 5 — Verify: Run `npm run build`. Run `npm run test:e2e`.

Step 6 — Update CHANGELOG: Add entry to `developer/phase-1-foundation/CHANGELOG.md`.
