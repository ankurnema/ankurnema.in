# 018 — CI/CD Workflows
**Date:** 2026-05-31
**Prompt:** 018-cicd-workflows.md

## Learning 1 — `react-hooks/set-state-in-effect` flags the `mounted` guard pattern

### What Happened
CI lint step failed with:
```
src/components/ThemeToggle.tsx:51:5  error  react-hooks/set-state-in-effect
Avoid calling setState() directly within an effect
```
The component used the standard next-themes mounting guard:
```tsx
const [mounted, setMounted] = useState(false)
useEffect(() => {
  setMounted(true)
}, [])
```

### Why
`eslint-config-next` includes the `react-hooks/set-state-in-effect` rule, which flags any `setState` call directly inside an effect body. The rule passes locally when the IDE doesn't enforce it, but blocks CI.

### Takeaway
Replace the `useEffect` + `useState(false)` mounting guard with `useSyncExternalStore`. It is the React 18+ idiomatic solution for SSR/client divergence — no effect, no setState, no lint violation:

```tsx
import { useSyncExternalStore } from 'react'

const mounted = () => true
const unmounted = () => false
const noop = () => () => {}

// Inside component:
const isMounted = useSyncExternalStore(noop, mounted, unmounted)
// Returns false on server (SSR/hydration), true on client after hydration
```

The three `useSyncExternalStore` arguments: (1) subscribe — noop since there's no store; (2) getSnapshot — always `true` on client; (3) getServerSnapshot — always `false` on server.
