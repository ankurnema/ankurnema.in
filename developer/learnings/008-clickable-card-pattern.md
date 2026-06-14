# 008 — Clickable Card Pattern
**Date:** 2026-06-14
**Prompt:** 008-services-consulting-page.md (and post-prompt UI refinements)

## Learning 1 — Whole-card navigation via `<Link>` + Tailwind `group`

### What Happened
After building the `/services/consulting` page, the Consulting Hour card on the services overview
needed to navigate to the sub-page. The first attempt used a plain text "Learn more →" link
placed inside the card. This looked weak and didn't signal that the whole card was interactive.

### Why
A card that only has a text link inside it sends mixed affordance signals — the border and hover
lift suggest the whole surface is clickable, but only a small text target actually is.

### Takeaway
Make the entire card the link. Wrap the card in `<Link href="...">` with `group` and apply
`group-hover:` on children (heading color, border strength) for progressive feedback:

```tsx
// ✅ Correct pattern
<Link
  href="/services/consulting"
  className="group block border border-brand-slate/10 rounded-2xl p-6
             hover:border-brand-navy/30 hover:shadow-sm transition-all duration-200"
>
  <h3 className="... group-hover:text-brand-amber transition-colors">
    Consulting Hour
  </h3>
  {/* rest of card content */}
</Link>

// ❌ Avoid — weak affordance, small click target
<div className="... rounded-2xl p-6">
  {/* content */}
  <a href="/services/consulting">Learn more →</a>
</div>
```

---

## Learning 2 — Optional `href` prop on shared card components

### What Happened
The `ServiceCard` component was used for both linked cards (with a destination page) and
potentially non-linked cards. Hard-coding a link inside the component would break non-linked
uses; removing the link would force wrapper hacks at the call site.

### Why
Card components frequently need to work in both linked and non-linked contexts depending on
whether the destination page exists yet.

### Takeaway
Add an optional `href` prop. When present, render the card as a `<Link>`; otherwise render
as a `<div>`. Share all styling via a constant so the two branches stay in sync:

```tsx
const cardClass = 'group ... hover:border-brand-amber/30 transition-all flex flex-col'

if (href) {
  return <Link href={href} className={cardClass}>{inner}</Link>
}
return <div className={cardClass}>{inner}</div>
```

This pattern lets you wire up `href` values in the data layer and the card upgrades itself
automatically — no component changes needed as new pages are built.

---

## Learning 3 — Create stub pages before wiring hrefs

### What Happened
Adding `href` props to ServiceCard data before the destination pages exist causes dead links
(Next.js renders them as normal `<a>` tags pointing to routes that return 404).

### Why
The sub-pages for Mentoring, Career Guidance, Resume Review, and LinkedIn Review were planned
for prompts 009–011b but the hrefs were added earlier when improving the services page UX.

### Takeaway
Always create a minimal stub page (`page.tsx` with metadata + hero) for any route you link to,
even if the full content comes in a later prompt. A stub that returns 200 is better than a link
that 404s. The later execute-prompt will replace the stub with full content.
