# 004 — Responsive Layout & Device Sizing

**Date:** 2026-05-17
**Prompt:** Post-execution fixes to layout.tsx (Prompt 004) and LogoText.tsx (Prompt 003b), discovered during visual review across device sizes.

---

## Learning 1 — SVG viewBox export artifacts cause logo size mismatch between dark and light mode

### What Happened

After integrating the designer SVGs, toggling between dark and light mode caused the logo to visibly shift in size and position. The light logo rendered narrower; the dark logo rendered wider even with the same CSS height class.

Tracing the SVG coordinates revealed that `logo-dark.svg` had extra whitespace baked into its viewBox on **all four sides**:
- **Vertical:** viewBox height was 235.93, but content spanned only y=45.87 to y=190.06 (height = 144.19)
- **Horizontal:** viewBox width was 544.13, but content spanned only x=32.34 to x=511.76 (width = 479.42)

The content inside both SVGs is physically identical in size (479.42 × 144.19). The dark SVG simply had ~32px of empty space on every side — a common Illustrator/Figma export artifact.

### Why

Design tools sometimes add clearance or artboard padding when exporting. The exported viewBox includes that padding rather than being trimmed to the artwork bounds.

### Takeaway

When a logo looks smaller or shifts on mode toggle, trace the SVG viewBox coordinates against the actual path/polygon coordinates before adjusting CSS. If the content is offset inside the viewBox, fix the viewBox rather than compensating with CSS hacks:

```
<!-- Before: content floats inside a padded viewBox -->
viewBox="0 0 544.13 235.93"

<!-- After: viewBox trimmed to exact content bounds -->
viewBox="32.34 45.87 479.42 144.19"
```

When trimming:
- **x, y** = coordinates of the topmost-leftmost content point
- **width, height** = span of content (rightmost x − leftmost x, bottom y − top y)

Always update the `<Image>` `width`/`height` props to match the trimmed viewBox dimensions so Next.js uses the correct aspect ratio for CLS prevention.

---

## Learning 2 — CSS-only dark mode logo swap: no JS, no flicker

### What Happened

The `LogoText` component initially had a `variant` prop for callers to manually pass `"light"` or `"dark"`. This meant every call site had to detect dark mode, which requires a client component and causes hydration flicker.

### Why

next-themes already applies the `.dark` class on `<html>`. Tailwind's `dark:` utilities react to that class instantly on first render.

### Takeaway

Render both logo variants simultaneously and hide the inactive one with CSS. No JS detection, no flicker, no `useTheme` call in the logo component:

```tsx
export function LogoText({ className }: { className?: string }) {
  return (
    <>
      <Image src="/logo/logo-light.svg" ... className={`dark:hidden ${className ?? ''}`} />
      <Image src="/logo/logo-dark.svg"  ... className={`hidden dark:block ${className ?? ''}`} />
    </>
  )
}
```

This works because Next.js preloads both images (`priority` on both), and the CSS swap happens synchronously with the theme class — no layout shift, no loading delay.

---

## Learning 3 — Tailwind breakpoints vs real device viewport widths

### What Happened

Multiple rounds of fixes were needed because it wasn't clear which Tailwind breakpoint each device fell into. Fixes aimed at "tablets" kept missing specific devices.

### Reference: devices mapped to Tailwind breakpoints

| Device | Portrait width | Tailwind tier |
|--------|---------------|---------------|
| iPhone SE | 375px | *(mobile — below sm)* |
| iPhone 14 Pro | 393px | *(mobile)* |
| iPad Mini (6th gen) | 744px | *(mobile — below md!)* |
| iPad Air (5th gen) | 820px | `md:` (768px+) |
| iPad Pro 11" | 834px | `md:` |
| Surface Pro 7 | 912px | `md:` |
| iPad Pro 12.9" portrait | 1024px | `lg:` (1024px+) |
| Standard desktop | 1280px+ | `xl:` |

**Key insight:** iPad Mini (744px) sits just below the `md:` breakpoint. It only receives `sm:` styles. If you target "all tablets" at `md:`, iPad Mini is missed.

### Takeaway

Think in device clusters when writing breakpoints:

```
sm: (640px)  → larger phones (iPhone Plus/Max landscape)
md: (768px)  → iPad Air, iPad Pro 11", Surface Pro 7
lg: (1024px) → iPad Pro 12.9" portrait, small desktop
xl: (1280px) → standard desktop
```

If iPad Mini must match other tablets, use `sm:` for those shared styles (since sm: covers 640px+ which includes 744px). Never rely on `md:` to catch "all tablets".

---

## Learning 4 — Logo needs an explicit md: height step; skipping it leaves tablets on mobile size

### What Happened

Logo was set as `h-8 w-auto sm:h-10 lg:h-12`. All devices in the 768–1023px range (iPad Air, iPad Pro 11", Surface Pro 7) received `sm:h-10` (40px) — the same as phones — because there was no `md:` step. Only iPad Pro 12.9" (1024px = lg:) got the larger size.

### Why

When writing breakpoints, it's easy to skip the middle tier when thinking "mobile → desktop". The sm: → lg: jump silently leaves the entire tablet range uncovered.

### Takeaway

Always include an explicit `md:` step for any sizing that should scale across the tablet range:

```tsx
// Wrong — 768-1023px tablets get sm: (phone) size
<LogoText className="h-8 sm:h-10 lg:h-12" />

// Correct — tablets get their own size
<LogoText className="h-8 sm:h-10 md:h-12" />
```

---

## Learning 5 — Touch targets and icon sizes for tablets require a larger jump than a single step

### What Happened

Setting `md:w-6 md:h-6` (24px icon) with `md:p-2.5` (10px padding) gave a 44px tap target — technically meeting the Apple HIG minimum — but still felt small on a large 10-11" tablet screen when viewed alongside a 48px logo.

The icon needed to scale proportionally to the logo: `md:w-7 md:h-7` (28px) with `md:p-3` (12px padding) = 52px total tap target.

### Why

The 44px minimum is a floor for accessibility, not a design target. On a tablet where the logo is 48px tall, a 44px button feels visually undersized because the eye compares it to the logo height, not to absolute pixel size.

### Takeaway

Size interactive elements relative to the largest nearby element, not just against the accessibility minimum. A simple rule: **tap target height ≥ logo height at the same breakpoint**.

```
Mobile:  logo h-8  (32px)  → icon w-5 (20px), p-2    = 36px button
Tablet:  logo h-12 (48px)  → icon w-7 (28px), p-3    = 52px button
Desktop: logo h-12 (48px)  → same as tablet (already proportional)
```

Also maintain a placeholder `<div>` of the same dimensions for the hydration gap (`!mounted` state in next-themes) to prevent layout shift before the client mounts.

---

## Learning 6 — `max-w-*` centering vs edge-pinned layout for header/footer

### What Happened

The initial header and footer used `max-w-5xl mx-auto` on the inner container. On wide screens, this created a centered content block — the logo appeared near the center of the screen rather than pinned to the left edge, and the toggle appeared near center-right rather than the far right.

### Why

`max-w-5xl` caps the container at 1024px and `mx-auto` centers it. On a 1440px screen, that leaves 208px of empty space on each side before the logo starts — which looks like the content is floating in the middle.

### Takeaway

For a full-bleed header/footer where elements should hug the screen edges (logo far-left, actions far-right), remove the inner `max-w-*` container and apply responsive horizontal padding directly to the outer element:

```tsx
// Wrong — content is centered in a fixed-width box
<header className="w-full px-6">
  <div className="flex items-center justify-between max-w-5xl mx-auto">

// Correct — content spans full width with responsive edge margins
<header className="w-full px-6 md:px-8 lg:px-12 xl:px-16">
  <div className="flex items-center justify-between">
```

Use `max-w-*` centering for **page content** (articles, forms), not for structural elements that should extend edge to edge.
