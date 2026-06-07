# ADR-011: Animation and Icon Libraries

**Status:** Accepted  
**Date:** 2026-06-07  
**Context:** About page redesign — adding motion and iconography to the site for the first time

---

## Context

The About page redesign required two new capabilities not present in the base stack:

1. **Scroll-triggered animations** — fade-in/slide-up effects as sections enter the viewport
2. **Icons** — small, consistent icons for stat cards, skill groups, and UI accents

The site had no existing animation library or icon system.

---

## Decision

### Animation: Framer Motion

Install `framer-motion@12.x`.

**Rationale:**
- `whileInView` + `viewport={{ once: true }}` is the simplest correct pattern for scroll-triggered one-shot animations — no intersection observer boilerplate
- `useReducedMotion()` hook makes `prefers-reduced-motion` compliance a one-liner
- Tree-shakes well; only the `motion` primitive and `useReducedMotion` are imported
- Industry standard for Next.js/React projects; well-maintained with React 19 support

**Alternatives considered:**
- **Motion One (`@motionone/dom`)** — lower-level, no React integration, more boilerplate for this use case
- **GSAP** — overkill for simple scroll-triggered fade-ins; requires license for commercial use beyond basic features
- **CSS-only `@keyframes`** — works but no viewport detection without manual IntersectionObserver; `prefers-reduced-motion` requires extra media query handling

**Constraint respected:** All `motion.*` components are in `'use client'` components under `src/components/about/`. The `about/page.tsx` page itself remains a server component — it only imports the client wrappers.

### Icons: Lucide React

Install `lucide-react@1.x`.

**Rationale:**
- Tree-shakeable: each icon is ~1 KB; only icons actually imported are bundled
- Consistent 24×24 stroke-based design language; `strokeWidth` prop for fine-tuning
- TypeScript-first: `LucideIcon` type enables passing icons as props cleanly
- Large icon set (1,000+) covering all DevOps/tech concepts needed

**Alternatives considered:**
- **Heroicons (`@heroicons/react`)** — smaller set (~300 icons); missing some technical icons needed (e.g. `BrainCircuit`, `GitBranch` variants)
- **React Icons** — aggregates multiple sets; larger bundle risk; inconsistent design across sets

---

## Implementation Pattern

```tsx
// Client component wrapping motion primitive
'use client'
import { motion, useReducedMotion } from 'framer-motion'

export function FadeInSection({ children, delay = 0 }) {
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
```

```tsx
// Icon usage in a server-compatible component
import type { LucideIcon } from 'lucide-react'
import { Clock } from 'lucide-react'

<Clock className="w-5 h-5 text-brand-amber" strokeWidth={1.5} />
```

---

## Consequences

**Positive:**
- Smooth, professional scroll-triggered animations with zero JS when motion is reduced
- Consistent icon system usable across all future pages without additional setup
- Clean boundary: animation logic stays in client components; pages stay server-rendered

**Negative:**
- `framer-motion` adds ~50 KB gzipped to the client bundle (only on pages that import it)
- Both libraries add npm dependencies to maintain

**Review triggers:**
- If Framer Motion releases a breaking API change for `whileInView` / `useReducedMotion`
- If a lighter native CSS solution covers the use cases adequately
