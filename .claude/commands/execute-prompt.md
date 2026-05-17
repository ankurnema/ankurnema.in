---
description: Execute a numbered prompt from a phase, then automatically update all 5 phase docs (CHANGELOG, prompts/README, AI-REFERENCE, AI-SUMMARY, learnings)
model: sonnet
allowed-tools: Read Write Edit Bash(ls *) Bash(find *) Bash(date *) Bash(git *)
---

Execute a prompt file from a phase and run all mandatory post-execution doc updates.

**Arguments:** $ARGUMENTS (optional: `<phase-name> <NNN>`)

## Available phases

!`ls /Users/ankurnema/ankur-consulting/repo/ankurnema.in/developer/`

---

## Instructions

### Step 1 — Gather execution details

If $ARGUMENTS contains `<phase-name> <NNN>`, extract them. Otherwise use AskUserQuestion to collect:
1. **Phase** — which phase folder? (e.g. `phase-1-foundation`)
2. **Prompt number** — NNN (e.g. `003`)
3. **Learnings** — did anything break, surprise you, or deviate from the plan during this execution? (type `none` to skip the learnings file)

### Step 2 — Read the prompt file

Find the file:
```
find /Users/ankurnema/ankur-consulting/repo/ankurnema.in/developer/<phase>/prompts/ -name "<NNN>-*.md"
```
Read it fully. Extract:
- Exact filename (e.g. `003-branding.md`)
- The `## Read First` section — read every file listed there before proceeding
- The `## Prompt` section — this is the task to execute

### Step 3 — Mark In Progress

Before starting work, update the row in `developer/<phase>/prompts/README.md`:
- Change `⏳ Pending` to `🚧 In Progress` for this prompt's row

### Step 4 — Execute the task

Execute every instruction in the `## Prompt` section exactly as if the user had typed them directly. Do all the work: create files, edit code, run commands, write tests. Follow all conventions in CLAUDE.md. Do not skip steps or defer work.

### Step 5 — Post-execution doc updates

Get today's date: `date +%Y-%m-%d`

Run all five updates in order:

**a) CHANGELOG.md** — append to `developer/<phase>/CHANGELOG.md`:
```markdown
## [YYYY-MM-DD] Prompt <NNN> — <Prompt Name>
- <1–3 line summary of what was done>
- Files created: `<path>`, `<path>`
- Files modified: `<path>`, `<path>`
- Decisions made: <any non-obvious choice made, or "none">
```

**b) prompts/README.md** — update this prompt's row: change `🚧 In Progress` to `✅ Done [YYYY-MM-DD]`

**c) AI-REFERENCE.md** — read `/Users/ankurnema/ankur-consulting/repo/ankurnema.in/AI-REFERENCE.md`. For every file/folder created, moved, or deleted in Step 4: add, update, or remove the corresponding row. Do not touch rows for files that didn't change.

**d) AI-SUMMARY.md** — read `/Users/ankurnema/ankur-consulting/repo/ankurnema.in/AI-SUMMARY.md`. Prepend one line to the Recent Completions section:
```
- [YYYY-MM-DD] Prompt <NNN>: <one-sentence description of what was built>
```

**e) Learnings file** (only if learnings were noted in Step 1 — skip if "none"):
- Create `developer/learnings/<NNN>-<short-name>.md`:
```markdown
# <NNN> — <Short Name>
**Date:** YYYY-MM-DD
**Prompt:** <NNN>-<filename>

## What Happened
<description of what was surprising, broke, or deviated from the plan>

## Why
<root cause or explanation>

## Takeaway
<what to do differently next time>
```
- Read `developer/learnings/README.md` and add a one-line row for this learning

### Step 6 — Confirm

Report:
- What was built (2–3 sentences)
- The 5 docs updated (or 4 if no learnings)
- Suggested next action: either the next prompt number or `/complete-phase <phase>` if this was the last one
