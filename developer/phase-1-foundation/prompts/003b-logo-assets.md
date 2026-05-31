# Prompt 003b — Logo Asset Integration

> **When to execute:** Run this prompt only after the final logo SVG files from the professional designer have been placed in `public/`. This prompt replaces the CSS text logo created in Prompt 003 with the actual brand assets.
>
> **Precondition check:** Before running any steps, verify that both of these files exist:
> - `public/logo.svg` (for use on light backgrounds)
> - `public/logo-dark.svg` (for use on dark/navy backgrounds)
>
> If either file is missing, stop immediately. Do not proceed until both files are present.

## Read First
- `developer/phase-1-foundation/brand-guidelines.md` — color tokens, logo usage rules (created by Prompt 003)
- `src/components/LogoText.tsx` — the CSS text placeholder being replaced
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `CLAUDE.md` — owner profile and cross-repo rules

## Scope
**In scope:**
- Verify logo SVG files are present in `public/`
- Update `src/components/LogoText.tsx` to use `<Image>` loading the actual SVGs instead of CSS text
- Update `public/icon.svg` with the actual monogram from the designer (if delivered separately)
- Regenerate `public/favicon.ico` from updated `icon.svg` (if icon changed)
- Regenerate `public/og-default.png` if the logo can be embedded into it cleanly
- Update `developer/phase-1-foundation/brand-guidelines.md` — add final logo minimum sizes, clear space rules, and file inventory
- Run `npm run build` — confirm no regressions
- Update `developer/phase-1-foundation/CHANGELOG.md`

**Out of scope:**
- Changing brand colors or typography (locked in Prompt 003)
- Applying the logo to any specific page (already handled in Prompts 004+)
- Creating new page routes or components beyond the logo component

## End Deliverable
- `src/components/LogoText.tsx` updated to use `<Image src="/logo.svg">` (light) and `<Image src="/logo-dark.svg">` (dark) via the `variant` prop
- CSS text fallback removed
- `public/icon.svg` updated (if designer delivered a monogram)
- `public/favicon.ico` regenerated (if icon changed)
- `public/og-default.png` optionally updated with actual logo
- `developer/phase-1-foundation/brand-guidelines.md` updated with final logo specs
- `npm run build` passes
- `developer/phase-1-foundation/CHANGELOG.md` updated

## Prompt

You are executing Prompt 003b of Phase 1 Foundation for ankurnema.in.

**Precondition:** Begin by checking that `public/logo.svg` and `public/logo-dark.svg` exist. If either is missing, output a clear error message and stop: "Prompt 003b requires both `public/logo.svg` and `public/logo-dark.svg` to be present. Add the designer-delivered files to `public/` and re-run this prompt."

Read these files before writing any code:
1. `developer/phase-1-foundation/brand-guidelines.md`
2. `src/components/LogoText.tsx`
3. `CLAUDE.md`

---

Step 1 — Verify SVG files:

Check both logo SVGs open and render valid SVG XML. Confirm they are not placeholder or empty files. Note the intrinsic dimensions (width/height attributes or viewBox) — you will need these for the Next.js `<Image>` component.

Step 2 — Update LogoText component:

Update `src/components/LogoText.tsx` to replace the CSS text treatment with Next.js `<Image>`:

```tsx
import Image from 'next/image'

type LogoTextProps = {
  variant?: 'light' | 'dark'
  className?: string
}

export function LogoText({ variant = 'light', className }: LogoTextProps) {
  return (
    <Image
      src={variant === 'dark' ? '/logo-dark.svg' : '/logo.svg'}
      alt="Ankur Nema"
      width={/* intrinsic width from SVG */}
      height={/* intrinsic height from SVG */}
      priority
      className={className}
    />
  )
}
```

Remove the CSS text rendering and the placeholder comment. Preserve the `variant` and `className` props so all existing call sites continue to work without changes.

Step 3 — Update favicon (if designer delivered monogram):

If the designer provided a standalone monogram file (separate from the wordmark):
- Replace `public/icon.svg` with the designer's monogram
- Regenerate `public/favicon.ico` at 32×32 and 16×16

If no standalone monogram was delivered, leave `public/icon.svg` and `public/favicon.ico` as-is (the geometric "AN" mark from Prompt 003 is suitable as a permanent favicon).

Step 4 — Update OG image (optional):

If the logo SVG can be embedded cleanly into the OG image at the specified dimensions (1200×630), regenerate `public/og-default.png` to include the actual logo. Keep the navy background (`#1E3A5F`) and the layout from Prompt 003. Skip this step if the logo at OG scale does not render crisply.

Step 5 — Update brand guidelines:

Add a "Final Logo" section to `developer/phase-1-foundation/brand-guidelines.md`:
- File inventory: `public/logo.svg` (light), `public/logo-dark.svg` (dark)
- Minimum display size (if designer specified one, otherwise default to 120px width minimum)
- Clear space rule (if specified by designer, otherwise use the logo's own height as minimum clear space)
- When to use each variant: `logo.svg` on white/canvas backgrounds; `logo-dark.svg` on navy/dark backgrounds
- Note that favicon uses a separate monogram mark (describe which file)

Step 6 — Verify:

Run `npm run build` — confirm no TypeScript errors in the updated `LogoText.tsx` and no broken imports. Check that all pages that use `<LogoText>` still compile correctly.

Step 7 — Update CHANGELOG:

Add entry to `developer/phase-1-foundation/CHANGELOG.md`: "Replaced CSS text logo with final designer SVG assets."
