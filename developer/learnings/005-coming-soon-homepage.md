# 005 — Coming Soon Homepage

**Date:** 2026-05-17
**Prompt:** 005-coming-soon-homepage.md

---

## Learning 1 — Playwright strict mode: `getByText` fails when text appears in multiple elements

### What Happened
`page.getByText('Ankur Nema')` threw a strict mode violation because the text appears in three places: the header `<LogoText>`, the page `<h1>`, and the footer copyright. Playwright strict mode requires a locator to resolve to exactly one element.

### Why
Playwright's `getByText` matches any element containing that substring. A layout with the same name in a logo, heading, and footer will always produce multiple matches.

### Takeaway
When writing E2E tests for text that also appears in nav/header/footer, use role-scoped locators:
```ts
// Wrong — matches 3 elements
page.getByText('Ankur Nema')

// Correct — matches exactly one <h1>
page.getByRole('heading', { name: 'Ankur Nema' })
```

---

## Learning 2 — Vitest picks up `e2e/` Playwright files unless `include` is set

### What Happened
Running `npm run test` failed with "Playwright Test did not expect test() to be called here" because Vitest discovered `e2e/homepage.spec.ts` and tried to execute it as a Vitest test.

### Why
Vitest's default `include` glob picks up all `*.{test,spec}.*` files in the project, including `e2e/`. The Playwright `test()` function is incompatible with Vitest's runner.

### Takeaway
Always set `include` explicitly in `vitest.config.ts` to scope Vitest to `src/` only:
```ts
test: {
  include: ['src/**/*.{test,spec}.{ts,tsx}'],
}
```

---

## Learning 3 — `window.matchMedia` is not available in jsdom — required by next-themes

### What Happened
After adding `<Providers>` (next-themes `ThemeProvider`) to the root layout, the existing `layout.test.tsx` failed with `TypeError: window.matchMedia is not a function`.

### Why
next-themes calls `window.matchMedia('(prefers-color-scheme: dark)')` during mount to detect system preference. jsdom does not implement `matchMedia`.

### Takeaway
Add a `matchMedia` mock to `src/test/setup.ts` whenever next-themes (or any package that reads system colour scheme) is rendered in Vitest:
```ts
import { vi } from 'vitest'
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
```

---

## Learning 4 — `min-h-screen` (100vh) causes footer overflow on iOS Safari in landscape

### What Happened
Footer was pushed off-screen on mobile landscape. `min-h-screen` = `100vh` on iOS Safari is computed against the "largest viewport" (toolbar hidden), which is taller than the actual visible area when the browser toolbar is showing.

### Why
iOS Safari has three viewport measurements: small (toolbar visible), large (toolbar hidden), dynamic. `100vh` = large viewport. In landscape with toolbar showing, `100vh > actual visible height`.

### Takeaway
Use `min-h-dvh` instead of `min-h-screen` for full-height layouts on mobile:
```tsx
// Wrong — overestimates height on iOS Safari landscape
<body className="min-h-screen flex flex-col">

// Correct — tracks actual visible viewport dynamically
<body className="min-h-dvh flex flex-col">
```
`dvh` is supported in Chrome 108+, Safari 15.4+, Firefox 101+.

---

## Learning 5 — `min-h-[Nvh]` on page sections causes overflow in landscape; use `flex-1` instead

### What Happened
`<section className="min-h-[70vh]">` enforced a height floor of 70% of viewport. On iPhone SE landscape (375px height), that's 263px. Combined with `py-20` padding (160px), the section was 423px — larger than the entire viewport — pushing the footer off-screen.

### Why
`min-h-[Nvh]` creates an absolute height floor that doesn't account for the available space after header/footer are subtracted.

### Takeaway
For full-height page sections, use `flex-1` instead of a viewport-relative min-height. `flex-1` fills exactly the available space left by header and footer without overflowing:
```tsx
// Wrong — viewport floor that ignores header/footer height
<section className="min-h-[70vh]">

// Correct — fills remaining space in flex column layout
<main className="flex-1 flex flex-col">
  <section className="flex-1 flex flex-col items-center justify-center">
```

---

## Learning 6 — Landscape mode needs a custom Tailwind variant for compact overrides

### What Happened
iPhone SE landscape (667×375) still showed a clipped footer even after the `min-h-dvh` fix, because the content itself (h1 at `text-5xl` + margins + padding) exceeded the 255px available between header and footer.

### Why
Tailwind has no built-in `landscape:` variant. Standard breakpoints (`sm:`, `md:`) are width-based, not orientation-based.

### Takeaway
Add a custom `landscape:` variant in `brand.css` for orientation-specific overrides:
```css
@custom-variant landscape (@media (orientation: landscape));
```
Then apply compact sizes on short-viewport landscape screens:
```tsx
<section className="py-12 landscape:py-3">
<h1 className="text-5xl landscape:text-3xl mb-4 landscape:mb-1">
```
The rule of thumb: available height in landscape = viewport height − header height − footer height. Budget content to fit within that.
