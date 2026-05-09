# ADR-004: Playwright CLI for Browser Testing in AI-Assisted Development

| Field | Value |
|-------|-------|
| **Status** | Accepted |
| **Date** | May 2026 |
| **Decided by** | Ankur Nema |
| **Related** | [ADR-003](003-nextjs-mcp-server.md) — Next.js MCP server (complementary tool) |

---

## Context

ADR-003 covers how Claude Code connects to the running Next.js dev server to read errors,
routes, and logs. That covers the **server side** of development.

There is a second gap: **the browser side**. After a change is made, someone (or something)
needs to open a real browser, navigate to the page, interact with it, and confirm it looks and
works correctly. Without this, the agent is coding blind — it can write code and fix server
errors, but cannot verify what the user actually sees.

Options exist for giving an AI coding agent control of a real browser. This ADR documents
which one was chosen for ankurnema.in and why.

> **Glossary for freshers:**
> - **Browser automation:** Writing instructions that tell a browser what to do — open this
>   URL, click this button, take a screenshot. Used for testing and verification.
> - **Playwright:** A browser automation library from Microsoft. Industry standard for
>   end-to-end testing. Works with Chromium, Firefox, and WebKit.
> - **CLI (Command Line Interface):** A tool you use by typing commands in a terminal rather
>   than clicking in a graphical app.
> - **Token:** The unit of text an AI model reads and writes. Agents have a limit per session.
>   Tools that are "token-efficient" use fewer tokens to do the same job.
> - **MCP:** Model Context Protocol — an open standard for connecting AI agents to tools.
>   See ADR-003 for a full explanation.

---

## Options Considered

### Option 1 — No browser testing during development

Let the developer manually open the browser and report results to the agent.

| | Detail |
|--|--------|
| Good | No setup required |
| Bad | Every UI change requires a manual context switch: code → browser → back to chat |
| Bad | Agent cannot close the verification loop — it fixes a bug but cannot confirm the fix worked |
| Bad | Visual regressions go unnoticed until the developer happens to look |
| Bad | Slows down development significantly — especially for iterative UI work |
| Verdict | Rejected |

---

### Option 2 — Regular Playwright (code-based test scripts)

Write standard Playwright test files (`.spec.ts`) that run via `npx playwright test`.

| | Detail |
|--|--------|
| Good | Industry standard — widely documented, large community |
| Good | Tests are committed to the repo and run in CI/CD |
| Good | Covers regression testing permanently |
| Bad | Agent must write test code, run it, parse the output — several round-trips |
| Bad | Not designed for interactive, real-time agent use — better for batch CI testing |
| Bad | High setup overhead for ad-hoc "just check if this page looks right" verification |
| Neutral | This is the right tool for CI/CD regression tests — not the right tool for agent-assisted spot-checks during development |
| Verdict | Rejected as the primary agent tool — may be added separately for CI/CD regression tests later |

---

### Option 3 — Playwright MCP (via next-devtools-mcp)

`next-devtools-mcp` (ADR-003) includes a built-in integration with the Playwright MCP server
from Microsoft. This exposes browser control as MCP tools the agent can call.

| | Detail |
|--|--------|
| Good | Already partially available via `next-devtools-mcp` (no extra setup) |
| Good | Rich tool schema — the agent gets structured data back from the browser |
| Neutral | Designed for persistent state and deep introspection use cases |
| Bad | Verbose tool schemas send more data to the agent than needed for simple checks |
| Bad | Higher token usage — can consume context budget on straightforward verifications |
| Bad | MCP-native tools require more setup for CLI-style workflows |
| Verdict | Rejected as the primary browser tool — useful as a fallback for complex introspection |

---

### Option 4 — Playwright CLI (`@playwright/cli`) — Chosen

A command-line interface for Playwright browser automation, built by Microsoft specifically for
AI coding agents. Instead of an MCP protocol layer, it exposes browser control as simple,
composable terminal commands.

| | Detail |
|--|--------|
| Good | Built explicitly for coding agents — designed around token efficiency |
| Good | Does not force full page DOM or data into the agent context — lower token cost |
| Good | Simple terminal commands: `playwright-cli open [url]`, `playwright-cli click [element]` |
| Good | Sessions persist in memory by default — agent can navigate across multiple steps |
| Good | Screenshot, PDF, video, trace capture built in |
| Good | Network request mocking for testing different API states |
| Good | Works alongside `next-devtools-mcp` — both can be active simultaneously |
| Neutral | CLI-based rather than MCP-native — a deliberate tradeoff for efficiency |
| Verdict | Accepted |

---

## Decision

**Use `@playwright/cli` for browser verification during AI-assisted development.**

Setup (done once on a developer machine):

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

No changes to `package.json` or the project repo are required. This is a developer machine
tool, not a project dependency.

---

## Reasons

**Designed for the exact use case.**
`playwright-cli` was built by Microsoft specifically for coding agents operating in terminal
environments. Regular Playwright and Playwright MCP were designed for different primary
use cases (CI testing and complex agentic loops respectively). Using the right tool for the
right job means less friction and fewer workarounds.

**Token efficiency matters in practice.**
During a development session, every tool call consumes part of the agent's context budget.
A verbose MCP schema that returns full page state for every interaction adds up quickly.
`playwright-cli` is intentionally concise — it gives the agent what it needs, not everything
it could possibly have.

**Closes the verification loop without developer involvement.**
The workflow becomes: agent writes code → fixes server errors via next-devtools-mcp →
opens browser via playwright-cli → takes a screenshot to confirm → continues. The developer
can review at milestones rather than after every small change.

**Complements ADR-003, not duplicates it.**
`next-devtools-mcp` handles the server side (errors, routes, logs). `playwright-cli` handles
the browser side (rendered UI, interactions, visual state). Together they give the agent a
complete view of the running application.

---

## What This Enables in Practice

| Scenario | Agent action |
|----------|-------------|
| "Does the homepage look right?" | `playwright-cli open https://localhost:3000` + screenshot |
| "Check the mobile layout" | Open with mobile viewport, screenshot |
| "Does the contact form submit?" | `playwright-cli click [submit-button]`, observe response |
| "Is the blog post rendering correctly?" | Navigate to `/blog/[slug]`, screenshot |
| "Does the nav link work?" | `playwright-cli click [nav-link]`, verify URL changed |
| "What does this look like on Safari?" | Open with WebKit engine |

---

## Consequences

**Benefits:**
- Agent can verify UI changes without developer manually checking every step
- Screenshots can be included in the chat for the developer to review at milestones
- Network mocking lets the agent test edge cases (API errors, empty states) without a real backend
- Session persistence means multi-step user journey testing in one conversation turn

**Tradeoffs:**
- Developer machine install required — not automatic like `.mcp.json` for new contributors
- Not a replacement for committed Playwright test suites in CI/CD (that's a separate decision)
- Requires Chromium/Firefox/WebKit browser binaries to be installed (`playwright-cli install --skills`)

**What this does NOT cover:**
- Automated regression testing on every PR — that requires regular Playwright tests in GitHub Actions (future decision)
- Load testing or performance benchmarking
- Accessibility auditing (a separate tool like `axe` is better suited)

---

## Relationship to Other ADRs

| ADR | Tool | Covers |
|-----|------|--------|
| ADR-003 | `next-devtools-mcp` | Server: errors, routes, logs, Server Actions |
| ADR-004 (this) | `playwright-cli` | Browser: rendered UI, interactions, screenshots |

Both tools run simultaneously during development. They do not overlap.

---

## Review Trigger

Revisit this decision if:
- Microsoft deprecates or stops maintaining `@playwright/cli`
- A significantly better token-efficient browser automation tool emerges
- The project adds a dedicated QA workflow — at that point, full Playwright test suites in CI/CD become the priority
