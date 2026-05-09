# ADR-003: Next.js MCP Server for AI-Assisted Development

| Field | Value |
|-------|-------|
| **Status** | Accepted |
| **Date** | May 2026 |
| **Decided by** | Ankur Nema |

---

## Context

ankurnema.in is built using AI-assisted development — Claude Code is the primary coding agent.
A core purpose of this open-source repo is to demonstrate how to build a real project with AI
tooling, so the development workflow itself is part of the case study.

During development, an AI coding agent is most useful when it has live, accurate context about
the running application — not just static file contents. Without this, the agent has to:
- Rely on you copy-pasting error messages into the chat
- Guess the project's route structure from reading files
- Ask you to describe what's happening on screen

Next.js 16 introduced a built-in MCP endpoint at `/_next/mcp` in the development server. The
`next-devtools-mcp` package connects an MCP-compatible coding agent (like Claude Code) directly
to this endpoint, giving it real-time access to the running application.

> **Glossary for freshers:**
> - **MCP (Model Context Protocol):** An open standard created by Anthropic that lets AI agents
>   connect to tools and data sources in a consistent way. Think of it as a USB standard —
>   any MCP-compatible agent can plug into any MCP-compatible tool.
> - **Coding agent:** An AI assistant that can read, write, and reason about code — like
>   Claude Code, which was used to build this project.
> - **Dev server:** The local server that runs when you type `npm run dev`. It watches your
>   files and rebuilds when you save changes.

---

## Options Considered

### Option 1 — No MCP integration (manual workflow)

Continue working without the Next.js MCP server — the agent reads files and the developer
copy-pastes errors and context into the chat manually.

| | Detail |
|--|--------|
| Good | No setup required |
| Bad | Agent works from static file snapshots, not live application state |
| Bad | Errors must be manually copied from terminal or browser to the chat |
| Bad | Agent cannot verify that a fix actually resolved the error — must ask the developer |
| Bad | Agent guesses route structure from reading files — can miss dynamic routes, middleware |
| Verdict | Rejected — removes the biggest advantage of AI-assisted development |

---

### Option 2 — Generic browser automation (e.g. Playwright MCP alone)

Use Playwright MCP (Microsoft's browser testing MCP) to let the agent open and inspect pages.

| | Detail |
|--|--------|
| Good | Agent can see rendered pages and take screenshots |
| Good | Useful for visual testing |
| Bad | Playwright sees the browser — it cannot see build errors, server logs, or route metadata |
| Bad | Does not give access to Next.js internals (Server Actions, rendering mode, etc.) |
| Neutral | `next-devtools-mcp` actually integrates Playwright as an add-on anyway |
| Verdict | Rejected as a standalone — useful as a complement, not a replacement |

---

### Option 3 — next-devtools-mcp (Chosen)

The official Next.js MCP package from Vercel. Connects to the built-in `/_next/mcp` endpoint
in the Next.js 16 dev server.

| | Detail |
|--|--------|
| Good | Official — maintained by the Vercel/Next.js team |
| Good | Zero application code changes — configured in `.mcp.json` only |
| Good | Only active during development (`next dev`) — zero production impact |
| Good | Requires Next.js 16+ — already met |
| Good | Auto-discovers running Next.js instances on any port |
| Good | Playwright MCP integration is built-in for browser verification |
| Neutral | Requires an MCP-compatible coding agent (Claude Code is MCP-compatible) |
| Verdict | Accepted |

---

## Decision

**Use `next-devtools-mcp` via a `.mcp.json` file at the repo root.**

Configuration added when the Next.js project is scaffolded:

```json
{
  "mcpServers": {
    "next-devtools": {
      "command": "npx",
      "args": ["-y", "next-devtools-mcp@latest"]
    }
  }
}
```

That's the entire setup. No code changes, no dependencies added to `package.json`.

---

## Reasons

**Real-time error access removes the biggest friction in AI-assisted development.**
When Claude Code can call `get_errors` directly against the running dev server, it sees the
exact error — stack trace, file, line number — without the developer having to copy-paste anything.
It can then make a fix and verify the error is gone, all in one loop.

**Route and metadata awareness produces more accurate code suggestions.**
`get_routes` returns the actual filesystem-derived route tree, including dynamic segments and
router type (App Router vs Pages Router). This means Claude Code knows the real project shape,
not an inferred guess from reading files.

**Zero production footprint.**
The MCP endpoint is only available during `next dev`. It is not compiled into the production
build, does not affect page load times, and is not exposed on the live site.

**Fits the case study narrative.**
This repo documents AI-assisted development. Using the Next.js MCP server is a concrete,
reproducible example of that — anyone forking this repo gets the same workflow for free.

**Trivial setup, easy to remove.**
A single `.mcp.json` file. No lock-in, no installed dependency, no code to maintain.
If `next-devtools-mcp` ever breaks or is abandoned, delete the file.

---

## What This Enables in Practice

| Task | Without MCP | With MCP |
|------|-------------|----------|
| Fix a build error | Copy error → paste into chat → agent fixes → you run dev to verify | Agent calls `get_errors` → fixes → calls `get_errors` again to verify |
| Add a new route | Agent reads `src/app/` to guess structure | Agent calls `get_routes` for ground-truth route tree |
| Debug a Server Action | Describe the action manually | Agent calls `get_server_action_by_id` to locate it |
| Check console logs | Copy from browser DevTools | Agent calls `get_logs` |
| Ask a Next.js question | Agent uses training data (may be outdated) | Agent queries the live Next.js knowledge base |
| Upgrade Next.js | Manual migration guide reading | Agent uses built-in migration codemods via MCP |

---

## Consequences

**Benefits:**
- Faster development loops — errors caught, fixed, and verified without leaving the chat
- More accurate code generation — agent knows real project state, not static snapshots
- Reproducible AI workflow — anyone reading this repo can replicate the exact setup
- Browser testing via Playwright MCP available as an opt-in add-on

**Tradeoffs:**
- Requires an MCP-compatible coding agent to benefit (standard human development workflow
  is unchanged — `npm run dev` works exactly the same without an agent connected)
- `next-devtools-mcp` runs via `npx` — needs internet access on first use to download the package

**Files added to the repo:**
- `.mcp.json` at repo root — added during Next.js scaffolding phase

---

## Review Trigger

This decision is low-risk. Revisit only if:
- `next-devtools-mcp` is deprecated or abandoned by Vercel
- A better alternative emerges in the MCP ecosystem
- The team moves away from Claude Code as the primary coding agent
