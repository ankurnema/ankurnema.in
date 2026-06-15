# Learning: Equal-Height Cards in CSS Grid — Two Layers of h-full

**Prompt:** Design pass (card symmetry, 2026-06-15)

---

## What broke

Cards inside a CSS grid were different heights even though CSS grid's default
`align-items: stretch` should make all cells in a row the same height. Visually,
some cards were taller than others in the same row.

## Why it broke

The grid cells were the same height — but the card components didn't fill their
cells. Each card was sized by its content, not by its container.

The stacking is:
```
CSS grid cell     ← correct height (all cells in a row are equal)
  └── FadeInSection (motion.div)   ← was NOT filling the cell
        └── Card component root div  ← was NOT filling the FadeInSection
```

`FadeInSection` uses framer-motion's `motion.div`. Without explicit sizing, a `div`
shrinks to wrap its content. So even though the grid cell was full height, the
`motion.div` inside it was only as tall as the card content — and the card inside
that was only as tall as its own content.

## The fix: h-full on both layers

Two changes are always required:

**1. FadeInSection wrapper** — add `className="h-full"`:

```tsx
<FadeInSection key={item.name} delay={i * 0.08} className="h-full">
  <Card {...item} />
</FadeInSection>
```

**2. Card component root element** — add `h-full` and `flex flex-col`:

```tsx
// e.g. ServiceCard.tsx
<div className="h-full flex flex-col bg-brand-surface ...">
```

`h-full` makes the card fill FadeInSection. `flex flex-col` lets you push footer
content (tags, buttons, links) to the bottom with `mt-auto` or `flex-1` on the
middle section.

## CSS columns (masonry) vs CSS grid

`columns-1 sm:columns-2 lg:columns-3` is a **masonry layout** — it intentionally
produces variable heights. There is no `h-full` fix for it; that's what it's for.

Use `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` when you want equal heights
per row (testimonials, feature cards, service cards).

Use `columns-N` only when you want a true Pinterest-style masonry where short
cards stack underneath tall ones without gaps.

The testimonials section in this project used `columns` — switching to `grid`
immediately fixed the unequal card sizes.

## Rule of thumb

Whenever a card lives inside a CSS grid and should match its siblings' height:
1. `className="h-full"` on every `FadeInSection` (motion.div) wrapping a card
2. `h-full flex flex-col` on every card's root element
3. `flex-1` on the card's body text to push the footer to the bottom

All three together produce consistent, symmetric card groups.
