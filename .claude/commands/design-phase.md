---
description: Scaffold a new development phase — interview-style, gathers phase details, creates folder structure with README/AI-CONTEXT/CHANGELOG/prompts, creates git branch
model: sonnet
allowed-tools: Read Write Edit Bash(ls *) Bash(mkdir *) Bash(git *) Bash(grep *)
---

Design and scaffold a new development phase from scratch.

**Arguments:** $ARGUMENTS

## Existing phase folders

!`ls /Users/ankurnema/ankur-consulting/repo/ankurnema.in/developer/`

## Project Phases table (current status)

!`grep -A 15 "Project Phases" /Users/ankurnema/ankur-consulting/repo/ankurnema.in/CLAUDE.md | head -15`

---

## Instructions

### Step 1 — Gather all phase details upfront

Use AskUserQuestion to collect:
1. **Phase number** — integer (e.g. `2`)
2. **Short name** — kebab-case (e.g. `content-engine`)
3. **Milestone version** — matches CLAUDE.md phases table (e.g. `v0.2`)
4. **Objective** — 1–2 sentences: what this phase achieves and why it matters
5. **Deliverables** — bullet list of concrete outputs (be specific: file paths, pages, features)
6. **Success criteria** — how do you know the phase is done? (observable outcomes)
7. **Out of scope** — explicit exclusions — what belongs in a later phase
8. **Key files** — list of files Claude should read at the start of this phase (existing components, config, docs)

### Step 2 — Derive names and paths

- Folder name: `phase-<N>-<short-name>` (e.g. `phase-2-content-engine`)
- Branch name: `feature/phase-<N>-<short-name>`
- Base path: `/Users/ankurnema/ankur-consulting/repo/ankurnema.in/developer/phase-<N>-<short-name>/`

### Step 3 — Create the four phase files

**`README.md`** at `developer/phase-<N>-<short-name>/README.md`:

```markdown
# Phase <N> — <Name> (<vX.Y>)

## Objective
<objective>

## Branch
`feature/phase-<N>-<short-name>`

## Deliverables
<deliverables as - [ ] checkboxes>

## Success Criteria
<success criteria as bullet list>

## Out of Scope
<exclusions as bullet list>
```

**`AI-CONTEXT.md`** at `developer/phase-<N>-<short-name>/AI-CONTEXT.md`:

```markdown
# AI Context — Phase <N>: <Name>

## Reading Order
Read these files first, in this order:
1. `developer/phase-<N>-<short-name>/README.md` — phase scope
2. `CLAUDE.md` — project conventions
<additional entries from key-files answer>

## Key Files for This Phase
| File | Why |
|------|-----|
<rows derived from key-files answer>

## Reuse — Existing Utilities
- (none identified yet — add as phase progresses)

## Do Not Read
- `developer/adr/` — not needed for this phase
<add other folders that are irrelevant for this phase>

## Phase-Specific Conventions
- (none yet — add if phase introduces conventions beyond CLAUDE.md)
```

**`CHANGELOG.md`** at `developer/phase-<N>-<short-name>/CHANGELOG.md`:

```markdown
# CHANGELOG — Phase <N>: <Short Name>

<!-- Add an entry after each prompt execution -->
<!-- Format:
## [YYYY-MM-DD] Prompt NNN — Description
- What was done
- Files created: path/to/file
- Files modified: path/to/file
- Decisions made: any non-obvious choices
-->
```

**`prompts/README.md`** at `developer/phase-<N>-<short-name>/prompts/README.md`:

```markdown
# Prompts — Phase <N>: <Name>

| # | File | Description | Status |
|---|------|-------------|--------|

**Execution order:** Run prompts sequentially. Each prompt depends on prior prompts being complete. Update this table after each execution.

---

## Status Legend

| Symbol | Meaning |
|--------|---------|
| ✅ Done [YYYY-MM-DD] | Prompt executed and verified |
| ⏳ Pending | Not yet started |
| 🚧 In Progress | Currently being executed |
```

### Step 4 — Create the git branch

Run: `git -C /Users/ankurnema/ankur-consulting/repo/ankurnema.in checkout -b feature/phase-<N>-<short-name>`

If the branch already exists, report it and skip branch creation.

### Step 5 — Update AI-REFERENCE.md

Read `/Users/ankurnema/ankur-consulting/repo/ankurnema.in/AI-REFERENCE.md`.
Add an entry for the new phase folder in the `developer/` section listing the four files created.

### Step 6 — Confirm

Report:
- Folder structure created at `developer/phase-<N>-<short-name>/`
- Four files written: README.md, AI-CONTEXT.md, CHANGELOG.md, prompts/README.md
- Git branch status
- Next step: use `/add-prompt phase-<N>-<short-name>` to add the first prompt
