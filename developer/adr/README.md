# Architecture Decision Records (ADRs)

Welcome! This folder documents every major technical decision made while building ankurnema.in —
what was chosen, what was rejected, and most importantly **why**.

---

## What is an ADR?

Imagine you join a project six months after it started and wonder:
> "Why are we using Next.js instead of WordPress? Who decided this and why?"

An ADR (Architecture Decision Record) is the answer to that question — written down at the time
the decision was made, so future you (or anyone reading this repo) never has to guess.

Think of it as a **decision diary for the codebase**.

---

## Why do we write ADRs?

- **Memory fades.** Decisions that seemed obvious at the time become mysterious six months later.
- **Teams change.** New contributors shouldn't have to reverse-engineer decisions from git history.
- **Learning resource.** This repo is open-source so others can learn — the *why* behind choices is
  more valuable than just the *what*.
- **Forces clear thinking.** Writing down a decision forces you to articulate the tradeoffs, which
  often reveals whether the decision is actually good.

---

## How to read an ADR

Each ADR follows this structure:

| Section | What it means |
|---------|---------------|
| **Title** | One-line summary of the decision |
| **Status** | `Accepted` = in use, `Superseded` = replaced by a newer ADR, `Proposed` = under discussion |
| **Context** | The situation and problem that forced a decision |
| **Options Considered** | Alternatives that were evaluated |
| **Decision** | What was chosen |
| **Reasons** | Why this option won |
| **Consequences** | What this decision means going forward — benefits and tradeoffs |
| **Review Trigger** | When this decision should be revisited |

You don't need to read them in order. Jump to whichever is relevant to what you're exploring.

---

## ADR Index

| # | Title | Status | Date |
|---|-------|--------|------|
| [ADR-001](001-tech-stack.md) | Tech stack — Next.js 16, TypeScript, Tailwind CSS, MDX | Accepted | May 2026 |
| [ADR-002](002-vercel-hosting.md) | Hosting — Vercel free tier for initial phase | Accepted | May 2026 |
| [ADR-003](003-nextjs-mcp-server.md) | Next.js MCP server for AI-assisted development | Accepted | May 2026 |
| [ADR-004](004-playwright-cli-browser-testing.md) | Playwright CLI for browser testing in AI-assisted development | Accepted | May 2026 |
| [ADR-005](005-testing-strategy.md) | Testing strategy — Vitest, Playwright, axe-playwright, Lighthouse CI | Accepted | May 2026 |
| [ADR-006](006-open-source-case-study.md) | Open-source repo as AI-assisted development case study | Accepted | May 2026 |
| [ADR-007](007-app-router.md) | Next.js App Router over Pages Router | Accepted | May 2026 |
| [ADR-008](008-google-font-loading.md) | Google font loading strategy — next/font/google | Accepted | May 2026 |
| [ADR-009](009-dark-mode.md) | Dark mode implementation — next-themes + Tailwind v4 | Accepted | May 2026 |
| [ADR-010](010-real-token-efficiency-measurement.md) | AI efficiency measurement — real usage tokens, not byte proxy | Accepted | May 2026 |

---

## How to add a new ADR

1. Create a new file: `NNN-short-description.md` (next number in sequence)
2. Copy the structure from any existing ADR
3. Fill in all sections — especially "Options Considered" and "Reasons"
4. Add a row to the index table above
5. Update `AI-REFERENCE.md` and `AI-SUMMARY.md` (mandatory after every unit of work)

---

*These ADRs are part of the open-source case study for ankurnema.in.
They document how a real project is built with AI-assisted development.*
