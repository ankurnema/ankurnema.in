# Learnings — ankurnema.in

> Things we discovered while actually building this project that weren't in the plan.
> Written for everyone — including people new to web development.

---

## What This Folder Is

When you build a real project, things don't always go exactly as planned. A package version turns
out to be incompatible. A tool gets renamed. A config format changes. You find a shortcut or a
gotcha that would have saved you an hour if you'd known it upfront.

This folder captures those discoveries. Every learning file is tied to a specific prompt so you
can trace it back to the exact work where it came from.

**Who should read this:**
- You (the developer) — before starting a new prompt, scan for relevant learnings
- AI coding agents — read the relevant file before executing a prompt in the same area
- Anyone studying this repo as a case study — this is where the "real" lessons live

---

## File Naming

```
NNN-short-description.md
```

`NNN` matches the prompt number it came from.

Examples:
- `001-scaffold-nextjs.md` — learnings from executing Prompt 001 (scaffolding)
- `018-cicd-workflows.md` — learnings from executing Prompt 018 (CI/CD)

---

## How to Add a Learning

After executing a prompt, if you discovered something surprising, add it here.

A good learning answers one of these:
- "What broke and why?"
- "What did we have to change from the original plan?"
- "What would have saved us time if we'd known it upfront?"
- "What assumption turned out to be wrong?"

**Do NOT add:**
- Things that went exactly as planned (those belong in CHANGELOG)
- Opinions or preferences
- Duplicate content that's already in an ADR

---

## Index

| File | Prompt | Summary |
|------|--------|---------|
| [001-scaffold-nextjs.md](001-scaffold-nextjs.md) | Prompt 001 | ESLint version incompatibility, `next lint` removal, flat config changes |
| [002-testing-infrastructure.md](002-testing-infrastructure.md) | Prompt 002 | Playwright `passWithNoTests` not typed in v1.59.1; Next.js type-checks all `*.ts` files; CLI flag naming is kebab-case |
| [003b-logo-assets.md](003b-logo-assets.md) | Prompt 003b | Designer delivers logo files in subfolder; dark SVG had export padding on all four viewBox sides — must trim both axes, not just vertical |
| [004-responsive-layout.md](004-responsive-layout.md) | Layout fixes (post-004/003b) | SVG viewBox trimming; CSS-only dark mode logo swap; Tailwind breakpoints vs real device widths; missing md: logo step; tablet touch target sizing; max-w centering vs edge-pinned layout |
| [005-coming-soon-homepage.md](005-coming-soon-homepage.md) | Prompt 005 | Playwright strict mode + `getByText`; Vitest `include` required to exclude `e2e/`; `matchMedia` mock for next-themes; `min-h-dvh` vs `100vh` on iOS Safari; `flex-1` vs `min-h-[Nvh]`; `landscape:` custom variant |
| [018-cicd-workflows.md](018-cicd-workflows.md) | Prompt 018 | `react-hooks/set-state-in-effect` flags the next-themes `mounted` guard in CI — replace with `useSyncExternalStore` |
| [006-about-page.md](006-about-page.md) | Prompt 006 | Dev server must be running before `npm run test:e2e`; `getByText` needs `{ exact: true }` when number strings also appear in body copy; `lucide-react` missing brand icons — use inline SVGs; SVG canvas whitespace shrinks logos — crop `viewBox` using `getBBox()`; wide-ratio logos letterbox in fixed-height containers — increase `maxWidth`; justified text hurts web readability — always use left-align |
| [007a-services-page-redesign.md](007a-services-page-redesign.md) | Prompt 007a | `LucideIcon` type incompatible with inline SVG components — use `React.ComponentType<{className?; strokeWidth?}>` when mixing Lucide icons and custom SVGs in the same prop |
| [008-clickable-card-pattern.md](008-clickable-card-pattern.md) | Prompt 008 | Whole-card navigation via `<Link>` + Tailwind `group`; optional `href` prop pattern for shared card components; create stub pages before wiring hrefs |
| [009-strict-mode-heading-exact.md](009-strict-mode-heading-exact.md) | Prompt 009 | `getByRole('heading', { name: 'X' })` matches substring headings — use `{ exact: true }` when the page heading word appears inside tier/section heading names |
| [011b-placeholder-means-no-pricing.md](011b-placeholder-means-no-pricing.md) | Prompt 011b | "Placeholder" in Phase 1 service prompts means no pricing/booking — not minimal content; also documents the `CheckCircle2` inclusion-list card as a third reusable section pattern |
