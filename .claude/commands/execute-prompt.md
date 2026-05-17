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

### Step 2 — Read learnings (always — before touching any code)

Read the learnings index to load all known pitfalls before writing a single line:

```
Read developer/learnings/README.md
```

Then read every learning file listed in the index. These are the real lessons from past executions — misread them and you will repeat the same mistakes.

Key things to extract from learnings:
- Package version conflicts or incompatibilities
- Config file format changes (e.g. flat config, TypeScript config)
- Test setup requirements (e.g. jsdom mocks, `include` patterns)
- CSS/layout gotchas (e.g. `dvh` vs `vh`, `flex-1` vs `min-h-[Nvh]`)
- Playwright locator rules (e.g. strict mode, role-scoped selectors)
- Any "always do X instead of Y" rules

Hold these in context throughout the entire execution — they override assumptions from generic knowledge.

### Step 3 — Read the prompt file

Find the file:
```
find /Users/ankurnema/ankur-consulting/repo/ankurnema.in/developer/<phase>/prompts/ -name "<NNN>-*.md"
```
Read it fully. Extract:
- Exact filename (e.g. `003-branding.md`)
- The `## Read First` section — read every file listed there before proceeding
- The `## Prompt` section — this is the task to execute

### Step 4 — Mark In Progress

Before starting work, update the row in `developer/<phase>/prompts/README.md`:
- Change `⏳ Pending` to `🚧 In Progress` for this prompt's row

### Step 5 — Execute the task

Execute every instruction in the `## Prompt` section exactly as if the user had typed them directly. Do all the work: create files, edit code, run commands, write tests. Follow all conventions in CLAUDE.md. Apply every relevant learning from Step 2 proactively — do not wait for errors to occur.

### Step 6 — Post-execution doc updates

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

**c) AI-REFERENCE.md** — read `/Users/ankurnema/ankur-consulting/repo/ankurnema.in/AI-REFERENCE.md`. For every file/folder created, moved, or deleted in Step 5: add, update, or remove the corresponding row. Do not touch rows for files that didn't change.

**d) AI-SUMMARY.md** — read `/Users/ankurnema/ankur-consulting/repo/ankurnema.in/AI-SUMMARY.md`. Prepend one line to the Recent Completions section:
```
- [YYYY-MM-DD] Prompt <NNN>: <one-sentence description of what was built>
```

**e) Learnings file** — self-assess execution and write a learnings file if any of the following occurred:
- Something failed before it was fixed (a test, a build, a command)
- A plan step had to be changed or skipped
- A package version, API, or config format was different from what was expected
- A workaround was needed that wasn't in the original prompt
- Something in the learnings index from Step 2 turned out to be inaccurate or incomplete

If none of the above apply (execution was exactly as planned), skip this step.

To write the learning:
- Create `developer/learnings/<NNN>-<short-name>.md`:
```markdown
# <NNN> — <Short Name>
**Date:** YYYY-MM-DD
**Prompt:** <NNN>-<filename>

## Learning N — <title>

### What Happened
<description of what broke or deviated>

### Why
<root cause>

### Takeaway
<what to apply next time, with a concrete code example if relevant>
```
- Read `developer/learnings/README.md` and add a one-line row for this learning

### Step 7 — Confirm

Report:
- What was built (2–3 sentences)
- Which learnings from Step 2 were actively applied (list them)
- The 5 docs updated (or 4 if no learnings)
- Suggested next action: either the next prompt number or `/complete-phase <phase>` if this was the last one
