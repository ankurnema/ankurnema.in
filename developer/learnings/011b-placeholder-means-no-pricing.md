# 011b — "Placeholder" Means No Pricing, Not Minimal Content

**Date:** 2026-06-14
**Prompt:** 011b-services-linkedin-review-page.md

---

## Learning 1 — "Placeholder" in Phase 1 prompts means no pricing, not minimal content

### What Happened

The prompt file is titled "Services: LinkedIn Review Page (Placeholder)" and the End Deliverable section mentions "placeholder". A reasonable reading would be: build a stub — hero + coming-soon text — similar to what was already there.

But the actual `## Prompt` section asks for full service content: an intro paragraph, a "What's included" section with 5 items, a "How it works" section with 5 steps, a standalone-service note, and a closing line. The only thing missing was pricing/booking forms.

### Why

"Placeholder" in Phase 1 is a v0.3 placeholder — meaning "no pricing or submission forms yet". It does not mean "no copy or sections". The Phase 1 goal is a fully-readable, navigable site. The v0.3 goal adds transactional elements (Zoho Bookings embeds, pricing tables).

### Takeaway

For any Phase 1 service-page prompt: always read the full `## Prompt` section, not just the title or End Deliverable. The title "Placeholder" signals that v0.3 is not included — it does not signal that content should be minimal. When in doubt, default to full copy + sections, zero pricing.

---

## Learning 2 — "What's included" card list is a distinct reusable pattern

### What Happened

The resume-review page has two section types: numbered step cards (How it works) and tier cards (Review options). The LinkedIn Review page needed a third type: a simple inclusion list — things you get, not steps to follow.

The pattern used: `CheckCircle2` icon (amber, strokeWidth 1.5) + paragraph text in a `bg-brand-surface` card. Same border/radius/padding as the step cards, but no number circle, no heading inside the card — just icon + text.

### Why

A scope/inclusion list reads differently from a process. Steps imply ordering and causality; inclusions are parallel and unordered. Using the same numbered-step card would have implied a sequence that doesn't exist.

### Takeaway

Three card patterns now exist for service pages:

| Pattern | Use when | Key element |
|---------|----------|-------------|
| Numbered step cards | Ordered process (How it works) | Amber number circle + LucideIcon + h3 + p |
| Tier cards | Distinct service options with turnaround/badge | Icon tile + name + turnaround label + description |
| Inclusion cards | Unordered list of what's included | `CheckCircle2` icon + single `<p>` |

All three use `bg-brand-surface` (or `bg-brand-canvas` for alternating sections), same border/radius/padding skeleton. Only the interior structure differs.
