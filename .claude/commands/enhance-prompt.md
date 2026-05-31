---
description: Edit an existing unexecuted prompt file — asks what to change, reads the file, makes targeted edits without touching prompts/README.md status
model: haiku
allowed-tools: Read Edit Bash(ls *) Bash(find *)
---

Edit an existing prompt file that has not yet been executed.

**Arguments:** $ARGUMENTS (optional: `<phase-name> <NNN>`)

## Current phases

!`ls /Users/ankurnema/ankur-consulting/repo/ankurnema.in/developer/`

---

## Instructions

### Step 1 — Gather details

Use AskUserQuestion to collect:
1. **Phase** — which phase folder? (e.g. `phase-1-foundation`). Skip if in $ARGUMENTS.
2. **Prompt number** — NNN (e.g. `005`). Skip if in $ARGUMENTS.
3. **What to change** — free text description of the change needed
4. **Change type** — scope change / wording improvement / add detail / restructure / other

### Step 2 — Read the prompt file

Find the file:
```
find /Users/ankurnema/ankur-consulting/repo/ankurnema.in/developer/<phase>/prompts/ -name "<NNN>-*.md"
```
Read the full file.

### Step 3 — Apply the edit

Edit only the section(s) that need changing. Do NOT rewrite sections that are still accurate.
Do NOT change the NNN number in the filename or the `# Prompt NNN` heading.
Do NOT update prompts/README.md — the status stays ⏳ Pending.

### Step 4 — Confirm

Report: which section was changed and a one-line summary of the change made.
