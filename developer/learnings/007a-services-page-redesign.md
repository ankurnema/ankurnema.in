# 007a — Services Page Visual Redesign

**Date:** 2026-06-14
**Prompt:** 007a-services-page-redesign.md

## Learning 1 — `LucideIcon` type is incompatible with inline SVG components

### What Happened
The plan typed icon props as `LucideIcon` (from `lucide-react`). The build failed with:

```
Type error: Type 'ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>'
is not assignable to type 'IconComponent'.
  Type 'ReactNode' is not assignable to type 'ReactElement<...>'.
    Type 'undefined' is not assignable to type 'ReactElement<...>'.
```

The services page mixes Lucide icons with an inline SVG function (`LinkedInIcon`) for the LinkedIn card — because `lucide-react` doesn't ship brand icons (per learning 006). But `LucideIcon` is a `ForwardRefExoticComponent` whose return type is `ReactNode` (which includes `undefined`), while our first attempt typed `IconComponent` as returning `ReactElement` (stricter). The mismatch caused a TS error on the `PersonaChip` render call.

### Why
`ReactElement` is stricter than `ReactNode`. Lucide's `ForwardRefExoticComponent` is typed to return `ReactNode`, which TypeScript can't narrow to `ReactElement`. Additionally, a custom SVG `function` component without `forwardRef` returns `JSX.Element` (= `ReactElement`) — so the two icon sources are typed differently.

### Takeaway
When a component prop accepts **both** Lucide icons and inline SVG components, use:

```ts
type IconComponent = React.ComponentType<{ className?: string; strokeWidth?: number }>
```

`ComponentType<P>` resolves to `ComponentClass<P> | FunctionComponent<P>`, and `FunctionComponent` returns `ReactNode` — compatible with Lucide's export. It also accepts a plain function component. This pattern is established in `src/components/services/ServiceCard.tsx`, `PersonaChip.tsx`, and `ProcessStep.tsx` and should be the default for any new component that needs to accept either icon source.

**Do not use `LucideIcon` as the prop type when the component might receive an inline SVG.** Reserve `LucideIcon` for components that are guaranteed to only use lucide-react icons (e.g. `StatCard`, which lives in `components/about/` and is only called with Lucide imports).
