# ADR-009: Dark Mode Strategy — next-themes + Tailwind v4 Class-Based Dark Mode

| Field | Value |
|-------|-------|
| **Status** | Accepted |
| **Date** | May 2026 |
| **Decided by** | Ankur Nema |
| **Related** | [ADR-001](001-tech-stack.md) — Tech stack · [ADR-007](007-app-router.md) — App Router · [ADR-008](008-google-font-loading.md) — Font loading |

---

## Context

The site needs to support light and dark colour modes:

1. **Default to system preference** — respect the visitor's OS `prefers-color-scheme` setting on first load
2. **User toggle** — allow visitors to override the system preference; that override must persist across page reloads
3. **No flash** — dark-mode visitors on a light-mode server render must not see a white flash before the correct theme applies
4. **Tailwind integration** — colour tokens are already defined in Tailwind v4 via `@theme` CSS custom properties in `src/styles/brand.css`; the dark variants (e.g. `brand-canvas-dark`) must activate cleanly via utility classes

The site uses Next.js 16 App Router with React Server Components. Any theme state that reacts to user input must live in a Client Component.

---

## Options Considered

### Option 1 — CSS `prefers-color-scheme` media query only

Use `@media (prefers-color-scheme: dark)` to remap CSS variables. No JavaScript, no library.

| | Detail |
|--|--------|
| Good | Zero JS, works without hydration |
| Good | No library dependency |
| Bad | **Cannot persist a user override.** The toggle would reset on every page load because there is nowhere to store the preference without JS |
| Bad | Tailwind v4 `dark:` prefix utilities need a class-based selector to work; media-query-only dark mode requires CSS-only overrides, duplicating work |
| Verdict | Rejected — user-toggle requirement cannot be met |

---

### Option 2 — Custom script + Context API

Inline a `<script>` in `<head>` that reads `localStorage` and sets `document.documentElement.classList` before hydration. Manage theme state via React Context + `useState`.

| | Detail |
|--|--------|
| Good | No extra runtime dependency |
| Good | Full control |
| Bad | Must manually handle: flash prevention, localStorage read/write, system change listener, SSR/hydration mismatch suppression, toggle component — all boilerplate |
| Bad | Easy to introduce bugs (e.g. missing `suppressHydrationWarning`, missing `matchMedia` listener) |
| Verdict | Rejected — solves a solved problem; maintenance cost outweighs control benefit |

---

### Option 3 — `next-themes` library (Chosen)

`next-themes` is the de-facto dark mode library for Next.js. It handles: flash prevention via inline script injection, `localStorage` read/write, system preference detection via `matchMedia`, and a React hook (`useTheme`) for reading and setting the active theme.

| | Detail |
|--|--------|
| Good | Handles flash prevention automatically (inline script in `<head>`) |
| Good | `defaultTheme="system"` — follows OS preference by default |
| Good | `enableSystem` — watches for OS preference changes in real time |
| Good | `attribute="class"` — applies `.dark` to `<html>`, compatible with Tailwind v4 class-based dark mode |
| Good | `useTheme` hook gives `resolvedTheme` (never `'system'`) — safe to use for icon logic |
| Good | Tiny: 3 packages added to the dependency tree |
| Neutral | Requires a `'use client'` Provider wrapper in root layout (standard App Router pattern) |
| Neutral | Toggle component must use a `mounted` guard to avoid hydration mismatch when rendering theme-dependent icons |
| Verdict | Accepted |

---

## Decision

**Use `next-themes@0.4.6` with Tailwind v4 class-based dark mode.**

### Tailwind v4 dark mode activation

Tailwind v4 does not use a `darkMode: 'class'` config key (that is v3 syntax). Instead, register the dark mode variant in CSS:

```css
/* src/styles/brand.css */
@custom-variant dark (&:where(.dark, .dark *));
```

This registers the `dark:` prefix for all Tailwind utility classes. When next-themes adds `.dark` to `<html>`, every `dark:` utility activates.

### Token strategy

The existing `-dark` suffixed tokens (`brand-canvas-dark`, `brand-navy-dark`, etc.) are used via explicit `dark:` prefixes:

```tsx
// Example: page background adapts to theme
<section className="bg-brand-canvas dark:bg-brand-canvas-dark">
```

This makes both modes explicit and readable without remapping the base CSS variables.

### Flash prevention

`next-themes` injects an inline `<script>` before React hydration that reads `localStorage` (or `prefers-color-scheme`) and applies the correct class to `<html>` synchronously. `suppressHydrationWarning` on `<html>` prevents React from warning about the class attribute mismatch.

### Provider pattern

A `'use client'` `Providers` component wraps the layout body content, allowing the `ThemeProvider` to run in the browser while the root layout itself remains a Server Component.

### Toggle component

The `ThemeToggle` component:
- Uses `resolvedTheme` (not `theme`) — never `'system'`, always `'light'` or `'dark'`
- Renders a placeholder `<div>` of identical dimensions before mount to prevent layout shift
- Uses inline heroicons-style SVG for sun and moon icons — no icon library required

---

## Consequences

**Benefits:**
- System preference respected on first visit with no flash
- User toggle persists across reloads (localStorage)
- All future pages and components get dark mode for free via `dark:` utilities
- Zero boilerplate: next-themes owns the flash-prevention, storage, and media-query listening

**Tradeoffs:**
- `next-themes` adds 3 packages to the dependency tree (acceptable — all tiny)
- Every theme-dependent interactive component must handle the `mounted` guard
- Toggle renders a 36×36px invisible placeholder before hydration (imperceptible in practice)

**Conventions that follow from this decision:**
- All components that read `useTheme` must include the `mounted` pattern
- `dark:` utilities reference `-dark` suffixed brand tokens (e.g. `dark:bg-brand-canvas-dark`)
- `suppressHydrationWarning` is only on `<html>` — not propagated to children

---

## Review Trigger

Revisit if:
- `next-themes` adds a breaking change incompatible with a future Next.js major version
- A hard requirement for CSS-only theming (e.g. a no-JS audience) emerges
