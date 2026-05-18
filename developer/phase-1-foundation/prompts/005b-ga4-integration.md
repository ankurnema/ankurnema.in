# Prompt 005b — GA4 Integration

> **When to execute:** Run this prompt only after you have created a Google Analytics 4
> property and have your Measurement ID (format: `G-XXXXXXXXXX`). If you do not have it yet,
> create the GA4 property first: analytics.google.com → Admin → Create Property → Web stream.

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `src/app/layout.tsx` — root layout where GoogleAnalytics component will be added
- `package.json` — to confirm current dependencies

## Scope

**In scope:**
- Install `@next/third-parties` npm package
- Add `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` to `.env.local` (placeholder — human replaces with real Measurement ID)
- Add `NEXT_PUBLIC_GA_ID=` (empty) to `.env.example` with a comment explaining the source
- Import and render `<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />` in `src/app/layout.tsx`
  with a conditional guard so it silently skips when the env var is absent (CI builds without `.env.local`)
- Confirm `npm run build` passes
- Update `developer/phase-1-foundation/CHANGELOG.md`

**Out of scope:**
- Creating the GA4 property or Measurement ID (done manually before this prompt)
- GA4 custom events or conversion tracking (Phase v0.4)
- Google Tag Manager

## End Deliverable
- `package.json` includes `@next/third-parties`
- `.env.local` has `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` (replace placeholder with real ID after prompt)
- `.env.example` has `NEXT_PUBLIC_GA_ID=` with a source comment
- `src/app/layout.tsx` renders `<GoogleAnalytics>` conditionally (only when env var is set)
- `npm run build` passes with no errors
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Prompt

You are executing Prompt 005b of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `src/app/layout.tsx`
3. `package.json`

**Precondition:** The real GA4 Measurement ID will be filled in by the human after this
prompt completes. Use `G-XXXXXXXXXX` as the placeholder in `.env.local`.

**Task:** Integrate Google Analytics 4 into ankurnema.in using Next.js's official `@next/third-parties` package.

**Step 1 — Install package:**
```bash
npm install @next/third-parties
```
Verify the package appears in `package.json` dependencies after install.

**Step 2 — Environment variables:**

Create or update `.env.local` at the repo root. Add:
```
# Google Analytics 4 — replace G-XXXXXXXXXX with your Measurement ID from GA4 dashboard
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Create or update `.env.example` at the repo root. Add:
```
# Google Analytics 4 Measurement ID — get from analytics.google.com → Admin → Data Streams
NEXT_PUBLIC_GA_ID=
```

**Step 3 — Update root layout:**

Open `src/app/layout.tsx`. Add the import at the top of the file:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'
```

Inside the returned JSX, add the component as the last child inside `<body>`, after `{children}`:
```tsx
{process.env.NEXT_PUBLIC_GA_ID && (
  <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
)}
```

The conditional `{process.env.NEXT_PUBLIC_GA_ID && ...}` ensures the component is silently
skipped when the env var is absent (CI builds, development without `.env.local`). Do not
modify any existing layout structure — only add the import and the component.

**Step 4 — Verify build:**
Run `npm run build`. Must pass with no TypeScript or build errors.

**Step 5 — Update CHANGELOG:**
Add an entry to `developer/phase-1-foundation/CHANGELOG.md`:
```
Installed @next/third-parties; added GoogleAnalytics component to root layout with conditional guard; added NEXT_PUBLIC_GA_ID to .env.local and .env.example.
```
