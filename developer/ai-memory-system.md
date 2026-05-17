# AI Memory System — Persistent Context Across Sessions

> **Case study note:** This document explains a pattern used throughout this project.
> The goal is to make the AI workflow fully reproducible so you can apply it to your own projects.

---

## What Is AI Memory?

Claude Code has a file-based memory system. Files placed in a specific directory are
automatically loaded into every session — before you type a single message.

**Memory location (per project):**
```
~/.claude/projects/<encoded-project-path>/memory/
```

The encoded path matches your project root. For example, a project at
`/Users/you/my-site` → `~/.claude/projects/-Users-you-my-site/memory/`.

Every file in that directory is read at session start. `MEMORY.md` is the index — it lists
all other files and what each one is for.

---

## Why It Matters

### Before memory: cold start every session
```
You:  Let's continue building the blog page.
AI:   Sure! What framework are you using? What's the current state of the project?
You:  [pastes 200 lines of context]
AI:   Got it. What styling approach are you using?
```

### After memory: warm start
```
You:  Let's continue building the blog page.
AI:   Picking up from Phase v0.1 — blog scaffolding is still pending. You're on
      Next.js 16 with MDX. Want to start with the index route or the [slug] route?
```

### Specific benefits

| Benefit | What it means in practice |
|---------|--------------------------|
| **No cold starts** | AI knows your stack, phase, and behavioral rules from message one |
| **Consistent behavior** | Corrections stick across sessions — say it once, it persists |
| **Faster sessions** | Less re-orientation, more building |
| **Transparent** | Memory files are plain text — you can read exactly what the AI knows |
| **Version-controlled** | You decide what goes in git (memory files live outside the repo) |

---

## How It Works

```mermaid
graph LR
    A[Session starts] --> B[Claude reads MEMORY.md]
    B --> C[Loads linked memory files]
    C --> D[Full context available immediately]
    D --> E[Work happens]
    E --> F[Run /update-memory]
    F --> G[Only changed files updated]
    G --> H[Next session starts with fresh context]
```

**Key behaviors:**
- Memory is loaded before your first message — no setup required each session
- The `/update-memory` skill updates only the files that changed — it does not rewrite everything
- Memory is **isolated per project root**: opening the same codebase from a different directory
  creates separate memory (useful for multi-repo workspaces and IDE setups)
- Memory files outside the repo are never accidentally committed

---

## Memory File Types

| Type | What to store | Structure |
|------|--------------|-----------|
| `user` | Who you are — role, experience level, communication style, constraints | Plain facts |
| `project` | Active phase, what's done, what's pending, what's blocked | Fact + **Why:** + **How to apply:** |
| `reference` | Locked decisions, tool URLs, version-specific breaking changes | Tables or bullet lists |
| `feedback` | Behavioral rules from past corrections ("never do X", "always do Y") | Rule + **Why:** + **How to apply:** |

**What NOT to store:** code patterns, file paths, git history, content already in `CLAUDE.md`,
or anything ephemeral to the current session.

---

## Memory Files in This Project

| File | Type | Purpose |
|------|------|---------|
| `MEMORY.md` | index | Entry point — always loaded first; links to all other files |
| `user-profile.md` | user | Developer identity, experience level, style, public-repo constraints |
| `tech-stack.md` | reference | Next.js 16, Tailwind v4, locked decisions, breaking changes |
| `project-state.md` | project | Phase v0.1 status — done, pending, and blocked items |
| `feedback_no_private_repo_in_public.md` | feedback | Rule: never name private repos in public files |
| `feedback_skill_inline_commands.md` | feedback | Rule: skill `!` commands cannot contain pipe operators |

These files live at:
```
~/.claude/projects/-Users-<you>-<path-to-repo>/memory/
```

They are outside the repo and never committed — they are personal to your machine.

---

## How to Replicate This in Your Project

### 1. Find your project's memory path

```bash
# Encode your project path: replace / with - (except leading /)
# /Users/you/my-project → -Users-you-my-project
ls ~/.claude/projects/
```

Look for the directory that matches your project path.

### 2. Create the memory directory

```bash
mkdir -p ~/.claude/projects/<encoded-path>/memory
```

### 3. Create `MEMORY.md` (the index)

```markdown
# MEMORY.md

## User
- [User profile](user-profile.md) — one-line hook

## Project
- [Project state](project-state.md) — one-line hook

## Reference
- [Tech stack](tech-stack.md) — one-line hook

## Feedback
- [feedback rule name](feedback_topic.md) — one-line hook
```

Keep it under 200 lines — this file is always loaded in full.

### 4. Create individual memory files

Each file uses this frontmatter:

```markdown
---
name: Short descriptive name
description: One-line summary used to decide relevance in future sessions
type: user | project | reference | feedback
---

Content here.
```

For `feedback` and `project` types, add a **Why:** and **How to apply:** line after the
main content. This lets the AI reason about edge cases rather than blindly following rules.

### 5. Add an `/update-memory` skill

Copy `.claude/commands/update-memory.md` from this repo as a starting point. Customize:
- The memory path to match your project
- The `!cat` commands to read your specific memory files
- The change→file mapping in the instructions

### 6. Run it

```
/update-memory <what changed this session>
```

Or with no arguments — it reads your project's summary file and syncs stale facts.

---

## The `/update-memory` Skill — How It Works

The skill at `.claude/commands/update-memory.md` does the following on each run:

1. **Checks** which memory files exist (via `ls`)
2. **Creates** any missing files from built-in templates (safe to run on a fresh clone)
3. **Reads** the current content of each existing file
4. **Reads** recent project completions from `AI-SUMMARY.md`
5. **Updates** only the files whose content has changed — no rewrites of accurate facts
6. **Creates** a new `feedback_<topic>.md` if behavioral guidance was given this session

This design means the skill is idempotent: running it on a project with no memory
initializes everything; running it on a populated memory updates only what changed.

---

## Further Reading

- `.claude/commands/update-memory.md` — the skill implementation
- `CLAUDE.md` — project rules and phase workflow
- `docs/ai-efficiency-report.md` — tracking AI session efficiency across phases
