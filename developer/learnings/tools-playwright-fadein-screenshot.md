# Learning — Playwright: FadeInSection hides below-fold content in full-page screenshots

## What happened

`browser_take_screenshot` with `fullPage: true` produced large blank white sections where `<FadeInSection>` components were used. The sections existed in the DOM but were invisible (`opacity: 0`, `translateY` offset) because `IntersectionObserver` never fires for elements below the viewport when taking a full-page screenshot.

## Why it happens

`FadeInSection` (framer-motion `whileInView`) starts elements hidden and animates them in when they enter the viewport. A full-page screenshot renders all DOM nodes but does not scroll the page or trigger viewport intersection events, so below-fold elements stay in their initial hidden state.

## Fix

Instead of a single full-page screenshot:
1. `window.scrollTo(0, N)` (or `window.scrollBy`) to bring the section into view
2. Wait briefly for the IntersectionObserver to fire and the animation to complete
3. Take a **viewport** screenshot (`fullPage: false`)

```ts
await page.evaluate(() => window.scrollTo(0, 800))
// small wait for framer-motion transition (or use page.waitForTimeout)
await page.screenshot({ path: 'section.png' })  // viewport only
```

## Also discovered

`element.scrollIntoView()` inside `page.evaluate()` can trigger navigation if the element is inside or near a `<Link>`. Prefer `window.scrollTo(0, offset)` for scroll positioning during testing — it's safer and more predictable.

## Rule to carry forward

When verifying FadeInSection content with Playwright: scroll first, viewport screenshot second. Never use `fullPage: true` on pages that use scroll-triggered animations.
