# 009 — Playwright Strict Mode: Heading Exact Match When Tier Names Contain the Page Heading
**Date:** 2026-06-14
**Prompt:** 009-services-mentoring-page

## Learning 1 — `getByRole('heading', { name: 'X' })` matches substring headings, causing strict mode violations

### What Happened
The prompt specified:
```ts
await expect(page.getByRole('heading', { name: 'Mentoring' })).toBeVisible()
```
The page has an `<h1>Mentoring</h1>` plus two `<h3>` tier cards: "Monthly Mentoring" and "Quarterly Mentoring". Playwright's `name` filter uses substring matching by default — so all three headings matched, triggering a strict mode error (3 elements found).

### Why
Playwright's `getByRole` `name` option matches any heading whose accessible name *contains* the given string, not just an exact match. When a page has sub-section headings that contain the main page heading as a word, the locator is ambiguous.

### Takeaway
When a page heading word appears inside other heading text (e.g. "Mentoring" inside "Monthly Mentoring"), always use `{ exact: true }`:
```ts
// Correct — only matches the h1 with exactly "Mentoring" as its text
await expect(page.getByRole('heading', { name: 'Mentoring', exact: true })).toBeVisible()

// Wrong — also matches "Monthly Mentoring", "Quarterly Mentoring"
await expect(page.getByRole('heading', { name: 'Mentoring' })).toBeVisible()
```
Apply `{ exact: true }` proactively whenever the page heading word is common enough to appear in child section titles.
