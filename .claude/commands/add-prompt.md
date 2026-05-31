---
description: Add a new numbered prompt file to a phase — asks for all details upfront, creates the file, updates prompts/README.md
model: haiku
allowed-tools: Read Write Edit Bash(ls *) Bash(find *)
---

Add a new prompt file to an existing phase.

**Arguments:** $ARGUMENTS

## Current phases

!`ls /Users/ankurnema/ankur-consulting/repo/ankurnema.in/developer/`

---

## Instructions

### Step 1 — Gather all details

Use AskUserQuestion to collect everything needed before creating any files:
1. **Phase** — which phase folder? (e.g. `phase-1-foundation`). If provided in $ARGUMENTS, skip.
2. **Short name** — kebab-case descriptor for the prompt (e.g. `add-contact-form`)
3. **Deliverable** — what exists when this prompt is done? (1–2 sentences)
4. **Read first** — list of files Claude should read before executing this prompt (file paths + why each matters)
5. **Scope: in** — explicit list of what this prompt covers
6. **Scope: out** — explicit exclusions (what belongs in a later prompt)
7. **Prompt text** — the exact instructions, or type `draft` to have Claude write one from the above info

### Step 2 — Find next prompt number

List the prompts directory:
```
ls /Users/ankurnema/ankur-consulting/repo/ankurnema.in/developer/<phase>/prompts/
```
Find the highest NNN in existing filenames (ignore README.md). Next number = highest + 1, zero-padded to 3 digits.

### Step 3 — Create the prompt file

Create `/Users/ankurnema/ankur-consulting/repo/ankurnema.in/developer/<phase>/prompts/<NNN>-<short-name>.md` with this exact format:

```markdown
# Prompt <NNN> — <Short Name Title Case>

## Read First
- `<file>` — <why>

## Scope
**In scope:** <explicit list>
**Out of scope:** <explicit exclusions>

## End Deliverable
<1–2 sentences describing exactly what exists when this prompt is done>

## Prompt
<prompt text>
```

If the user said `draft` for prompt text, write a clear, actionable prompt based on the deliverable, scope, and read-first context.

### Step 4 — Update prompts/README.md

Read `/Users/ankurnema/ankur-consulting/repo/ankurnema.in/developer/<phase>/prompts/README.md`.

Add a new row at the end of the table (before the notes/legend section):
```
| <NNN> | [<NNN>-<short-name>.md](<NNN>-<short-name>.md) | <one-line description> | ⏳ Pending |
```

### Step 5 — Confirm

Report: prompt file path created, row added to README.md, next step: run `/execute-prompt <phase> <NNN>` to execute it.
