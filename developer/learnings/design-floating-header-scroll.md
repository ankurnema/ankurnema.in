# Learning: Scroll-Triggered Floating Header — sticky top-0, not top-4

**Prompt:** Design pass (header/footer redesign, 2026-06-15)

---

## What broke

The header was supposed to appear full-width docked at the top of the page, then
transition to a floating pill after the user scrolled. But the first implementation
placed `sticky top-4` on the outer `<header>` element, which made the header
always float — even on page load before any scrolling happened.

## Why it broke

`sticky top-4` means the element sticks `1rem` from the top of the viewport at all
times. That offset creates the gap that makes it look "floating" — regardless of
scroll position. There is no native CSS way to say "use top-0 until scrolled, then
use top-4."

## The fix

Keep the outer `<header>` at `sticky top-0` (no gap) and use JavaScript `scrollY`
state to toggle CSS classes on an **inner** wrapper div:

```tsx
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 4)
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}, [])
```

Then on the inner div:

```tsx
<div className={[
  'transition-all duration-300 backdrop-blur-md ...',
  scrolled
    ? 'mx-4 md:mx-6 lg:mx-10 mt-4 px-4 py-3 rounded-2xl border shadow-lg bg-brand-surface/90'
    : 'px-6 py-4 bg-brand-surface/80 border-transparent',
].join(' ')}>
```

At scroll 0: inner div is full-width, no margin, no border radius — indistinguishable from docked.
After scrolling: inner div gets horizontal margin, top margin, and rounded corners — looks floating.
`transition-all duration-300` animates between the two states smoothly.

## What would have saved time

Think in terms of **outer = positioning, inner = visual shape**. The outer sticky element
controls viewport attachment; the inner element controls what the header looks like.
Never put a top offset on the outer element if the initial state should be flush with
the top.
