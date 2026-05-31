# 003b — Logo Asset Integration

**Date:** 2026-05-17
**Prompt:** 003b-logo-assets.md

## Learning 1 — Designer delivers logo files in a subfolder with different naming than the prompt assumed

### What Happened

The prompt expected two files directly in `public/`:
- `public/logo.svg` (light wordmark)
- `public/logo-dark.svg` (dark wordmark)

The designer actually delivered four files in `public/logo/`:
- `public/logo/logo-light.svg`
- `public/logo/logo-dark.svg`
- `public/logo/monogram-light.svg`
- `public/logo/monogram-dark.svg`

The precondition check in the prompt would have reported missing files and stopped execution if followed literally.

### Why

Designers typically organize deliverables into a folder and use descriptive filenames (`logo-light.svg` / `logo-dark.svg`). The prompt assumed a flat layout matching the Next.js `<Image src="/logo.svg">` pattern. There was no agreement in advance on the delivery structure.

### Takeaway

When writing future prompts that depend on designer file delivery, specify the folder structure and naming convention explicitly in the brief. Also: the precondition check in execute-prompt should be read as "verify the files exist somewhere in `public/`" not as a literal path check — adapt paths to match what was actually delivered, then document the deviation.

For the component, serve the files from their delivered location (`/logo/logo-light.svg`) rather than moving them to match the prompt's assumed paths — this avoids unnecessary file moves and keeps the designer's folder structure intact.

## Learning 2 — Dark logo SVG had export padding on all four sides, not just vertical

### What Happened

Initial integration used conditional `<Image>` rendering with different `width`/`height` per variant (544×236 for dark, 480×144 for light). After trimming the vertical padding (viewBox y-start), the logo still appeared wider in dark mode and caused the header toggle button to shift position on theme switch.

Tracing the path coordinates revealed the dark SVG also had ~32px of horizontal padding on both left and right. The actual content bounds were x=32.34 to x=511.76 (width=479.42) — identical to the light logo.

### Why

The design tool exported the dark variant with clearance on every side. Only vertical padding was caught initially; horizontal padding was found only after a second comparison of rendered sizes.

### Takeaway

When fixing SVG viewBox padding, always check **both axes**, not just the axis that appears broken first. The fix was to trim viewBox to exact content bounds on all four sides:

```
viewBox="32.34 45.87 479.42 144.19"
         ^x    ^y    ^width  ^height
```

Both logos ended up with the same content width (479.42) and height (144.19) — so a single `width={480} height={144}` works for both Image elements. The CSS-only dark mode swap (see `004-responsive-layout.md` Learning 2) made the separate conditional rendering unnecessary.

→ See [004-responsive-layout.md](004-responsive-layout.md) for the full viewBox trimming and CSS swap patterns.
