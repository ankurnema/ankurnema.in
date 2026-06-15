# Learning 004a — `react-hooks/set-state-in-effect` in Navigation Components

**Prompt:** 004a — Header & Footer Redesign  
**Symptom:** `npm run lint` failed with `Avoid calling setState() directly within an effect`

---

## What Broke

The `Header.tsx` component had a `useEffect` to close the Services dropdown and the mobile
overlay menu whenever the route changed:

```ts
useEffect(() => {
  setDropdownOpen(false)
  setMobileOpen(false)
}, [pathname])
```

ESLint's `react-hooks/set-state-in-effect` rule flags this. The rule's position is that
calling `setState` synchronously inside an effect body causes cascading renders and should
be avoided (per https://react.dev/learn/you-might-not-need-an-effect).

## What We Changed

Removed the `useEffect` entirely. Every nav `<Link>` and service dropdown link already had
an `onClick` handler that closed the relevant menu. The `useEffect` was a redundant safety
net, not the primary close mechanism.

```diff
- // Close dropdown on route change
- useEffect(() => {
-   setDropdownOpen(false)
-   setMobileOpen(false)
- }, [pathname])
```

## The Rule

For any interactive overlay (dropdown, mobile menu, modal, sheet): close it via the `onClick`
on the triggering element, **not** via a `useEffect` watching `pathname`. The `onClick` pattern:
- Has no cascading-render risk
- Passes the lint rule
- Works even when the menu is dismissed before navigation completes

If you genuinely need to reset state on navigation (e.g. a back-button scenario with no
`onClick` available), the correct approach is the `useSyncExternalStore` subscription
pattern — the same one used by `ThemeToggle` for mounting detection — rather than a plain
`useEffect` calling `setState`.

Note: This is the same linting rule that was encountered in Prompt 018 for `ThemeToggle`'s
mounted guard (see `developer/learnings/018-cicd-workflows.md`).
