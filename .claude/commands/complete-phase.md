---
description: Close out a completed phase — verifies all prompts done, writes docs/phases/ summary, updates AI-SUMMARY.md and CLAUDE.md milestone status
model: sonnet
allowed-tools: Read Write Edit Bash(ls *) Bash(find *) Bash(date *) Bash(grep *)
---

Complete and close out a development phase.

**Arguments:** $ARGUMENTS (optional: `<phase-name>`)

## Current phases

!`ls /Users/ankurnema/ankur-consulting/repo/ankurnema.in/developer/`

---

## Instructions

### Step 1 — Identify the phase and gather notes

If $ARGUMENTS contains a phase name, use it. Otherwise use AskUserQuestion to collect:
1. **Phase** — which phase folder to close? (e.g. `phase-1-foundation`)
2. **Final notes** — anything notable for the completion summary? (metrics, challenges, surprises, key decisions made during the phase)

### Step 2 — Verify completeness (STOP if incomplete)

Read `developer/<phase>/prompts/README.md`.

Check every row: are all prompts ✅ Done? If any row shows ⏳ Pending or 🚧 In Progress, **STOP** here. Report which prompts are incomplete. Do not proceed until all prompts are done.

Read `developer/<phase>/README.md`. Confirm each Deliverable checkbox maps to an executed prompt.

### Step 3 — Write phase completion summary

Get today's date: `date +%Y-%m-%d`

Create `/Users/ankurnema/ankur-consulting/repo/ankurnema.in/docs/phases/<phase-name>-completion.md`:

```markdown
# Phase <N> — <Name> Completion Summary

**Completed:** YYYY-MM-DD
**Branch:** feature/phase-<N>-<short-name>
**Milestone:** v<X.Y>

## What Was Built
<2–4 sentence summary of all deliverables and their purpose>

## Prompts Executed

| # | Prompt | Completed |
|---|--------|-----------|
<one row per prompt from prompts/README.md, with NNN, filename (no path), and Done date>

## Metrics
- Prompts executed: <count>
- (Check CHANGELOG.md for file counts if needed)

## Key Decisions
<any non-obvious architectural or scope choices made during this phase, or "None">

## Learnings
<list of files in developer/learnings/ with NNN matching this phase's range, or "None">

## What's Next
<next phase name and milestone version>
```

### Step 4 — Update AI-SUMMARY.md

Read `/Users/ankurnema/ankur-consulting/repo/ankurnema.in/AI-SUMMARY.md`.
Prepend to the Recent Completions section:
```
- [YYYY-MM-DD] Phase <N> complete: <milestone> — <one-sentence summary of what the phase delivered>
```

If there is a "Current Status" or phase status section, update it to reflect the phase is complete and the next phase is upcoming.

### Step 5 — Update CLAUDE.md

Read `/Users/ankurnema/ankur-consulting/repo/ankurnema.in/CLAUDE.md`.
Find the Project Phases table. Update the completed phase row's status column to `✅ Complete`.

### Step 6 — Confirm and next steps

Report:
- Phase <N> closed. Completion summary at `docs/phases/<phase-name>-completion.md`
- AI-SUMMARY.md updated
- CLAUDE.md phase table updated
- Next steps: `git push origin feature/phase-<N>-<short-name>` then open PR to `main`; after merge, run `/design-phase` to start the next phase
