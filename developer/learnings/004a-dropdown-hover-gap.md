# Learning 004a-b — Dropdown hover gap: attach handlers to wrapper, not the button

## What broke

The Services dropdown was closing before the user could move the cursor into it.
`onMouseEnter` / `onMouseLeave` were placed on the `<button>` itself. The dropdown panel sits `mt-1` (4px) below the button; as soon as the cursor left the button edge, `onMouseLeave` fired and the panel disappeared — before the cursor could cross the gap.

## What we changed

1. **Move hover handlers to the wrapper `<div>`** that contains both the button and the panel. The gap between them is now inside the hover zone, so moving from button → gap → panel never triggers a leave event.

2. **Add a 200ms `setTimeout` grace period** before actually closing, via a `closeTimerRef`:
   ```tsx
   const openDropdown = useCallback(() => {
     if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
     setDropdownOpen(true)
   }, [])

   const scheduleClose = useCallback(() => {
     closeTimerRef.current = setTimeout(() => setDropdownOpen(false), 200)
   }, [])

   // On wrapper div:
   // onMouseEnter={openDropdown}
   // onMouseLeave={scheduleClose}
   ```
   If the cursor re-enters within 200ms (e.g. the user moves fast into the panel), `clearTimeout` cancels the pending close. This is the standard "hover bridge" pattern for dropdowns.

3. **Guard `relatedTarget` against null** — when the cursor leaves the browser window entirely, `e.relatedTarget` is null; calling `Node.contains(null)` throws. Add `related &&` before the contains check.

## Rule to carry forward

Any dropdown that has a visual gap between trigger and panel needs wrapper-level hover handlers (not per-element) plus a short close delay. The gap looks like only a few pixels but is enough to consistently trigger `mouseleave` on fast cursor movements on real hardware.
