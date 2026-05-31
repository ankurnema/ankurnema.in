---
description: Enhance or fix existing feature code — interview-style, reads current state, applies targeted changes, updates CHANGELOG if inside an active phase
model: sonnet
allowed-tools: Read Write Edit Bash(ls *) Bash(find *) Bash(date *)
---

Enhance or fix existing feature code in the codebase.

**Arguments:** $ARGUMENTS

---

## Instructions

### Step 1 — Gather details upfront

Use AskUserQuestion to collect:
1. **File(s) to change** — which file path(s)? (e.g. `src/components/Header.tsx`, `src/app/about/page.tsx`)
2. **What to change** — describe the enhancement or fix in detail; be specific about expected behaviour after the change
3. **Phase context** — is this inside the current active phase? (yes / no / unsure)
4. **Success test** — what should be true after this change? (e.g. "nav shows active state on current page", "form validates email format on blur")

### Step 2 — Read the current code

Read each file listed in Step 1.
Read any closely related files needed for context (shared types, parent layout, sibling components).
Do NOT read the whole codebase — only what's needed to understand the change.

### Step 3 — Apply the changes

Make only the targeted edits described in Step 1. Do not:
- Refactor surrounding code that works
- Add features beyond what was requested
- Change files not mentioned unless strictly required by the change

### Step 4 — Update CHANGELOG (only if inside an active phase)

If the user said "yes" to phase context in Step 1:
- Find the active phase: `ls /Users/ankurnema/ankur-consulting/repo/ankurnema.in/developer/`
- Get today's date: `date +%Y-%m-%d`
- Append to `developer/<phase>/CHANGELOG.md`:
```markdown
## [YYYY-MM-DD] Enhancement — <short description>
- Files modified: `<path>`, `<path>`
- What changed: <description>
```

If NOT inside a phase: warn the user this change is not tracked in prompts/README.md, but proceed with the edit.

### Step 5 — Confirm

Report: what was changed, which files, whether CHANGELOG was updated and in which phase.
