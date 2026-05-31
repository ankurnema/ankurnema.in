# Claude Code Skills — ankurnema.in

Custom slash commands that automate the repetitive, multi-step operations in this repo's
[phase-based development workflow](PHASE_WORKFLOW.md).

Skills live in `.claude/commands/` and are available whenever Claude Code's working
directory is this repo (IDE project root or CLI from `repo/ankurnema.in/`).

---

## How Skills Work

**Invoke:** type `/skill-name` (with optional arguments) in the Claude Code prompt.

**Interaction model:** All interview-style skills ask every question upfront in a single
`AskUserQuestion` block before touching any files — one round trip, then execution.

**Argument shortcut:** Skills that accept arguments (e.g. `/execute-prompt phase-1-foundation 003`)
skip the questions for values already provided.

---

## Skill Reference

### Phase Lifecycle

#### `/design-phase`
Scaffold a new development phase from scratch.

**What it does:**
1. Asks: phase number, short name, milestone version, objective, deliverables, success
   criteria, out-of-scope items, key files for Claude to read
2. Creates `developer/phase-N-name/` with four files: `README.md`, `AI-CONTEXT.md`,
   `CHANGELOG.md`, `prompts/README.md` — all pre-filled from your answers
3. Creates the git branch `feature/phase-N-name`
4. Updates `AI-REFERENCE.md`

**Use when:** starting a new milestone phase.

**Next step after:** `/add-prompt <phase>` to populate the prompts.

---

#### `/execute-prompt [phase-name] [NNN]`
Execute a numbered prompt file, then auto-update all mandatory post-execution docs.

**What it does:**
1. Asks: phase, prompt number, any learnings (or confirms from args)
2. Reads the prompt's `## Read First` files, then executes its `## Prompt` section
3. Runs all five post-execution updates:
   - `CHANGELOG.md` — dated entry for what was built
   - `prompts/README.md` — marks prompt ✅ Done
   - `AI-REFERENCE.md` — rows for new/deleted/moved files
   - `AI-SUMMARY.md` — prepends a Recent Completions line
   - `developer/learnings/NNN-*.md` — creates a learnings file if you noted surprises

**Use when:** executing any prompt in the current phase.

**Example:**
```
/execute-prompt phase-1-foundation 003
/execute-prompt phase-2-content-engine 001
```

---

#### `/complete-phase [phase-name]`
Close out a completed phase.

**What it does:**
1. Verifies all prompts are ✅ Done — stops and lists blockers if not
2. Writes `docs/phases/<phase-name>-completion.md` (summary, prompt list, metrics)
3. Updates `AI-SUMMARY.md` milestone status
4. Updates `CLAUDE.md` Project Phases table to ✅ Complete
5. Reminds you to push and open a PR

**Use when:** all prompts in a phase are done and you're ready to merge.

---

### Prompt Management

#### `/add-prompt [phase-name]`
Add a new numbered prompt file to a phase.

**What it does:**
1. Asks: phase, short name, deliverable, read-first files, scope in/out, prompt text
   (or `draft` to have Claude write it from your answers)
2. Determines the next NNN number automatically
3. Creates `developer/<phase>/prompts/NNN-short-name.md`
4. Adds a ⏳ Pending row to `prompts/README.md`

**Use when:** adding a new deliverable to an existing phase.

---

#### `/enhance-prompt [phase-name] [NNN]`
Edit an unexecuted prompt file.

**What it does:**
1. Asks: phase, prompt number (if not in args), what to change, change type
2. Reads the file and makes only the targeted edit
3. Does NOT change the prompt's status in `prompts/README.md`

**Use when:** a pending prompt needs a scope tweak, wording fix, or added detail.

---

### Feature Work

#### `/add-feature`
Create a prompt file for a new feature within the current phase.

**What it does:**
1. Asks: feature name, type (page/component/API route/utility), file path, phase,
   acceptance criteria, reuse opportunities
2. Reads relevant existing files for context
3. Creates a fully-formed prompt file in `developer/<phase>/prompts/`
4. Adds ⏳ Pending row to `prompts/README.md`

**Use when:** you know what you want to build and need it tracked as a phase prompt.

---

#### `/enhance-feature`
Enhance or fix existing feature code directly.

**What it does:**
1. Asks: file(s) to change, what to change, whether inside an active phase, success test
2. Reads the current code and makes only the targeted edit(s)
3. Appends to `CHANGELOG.md` if the change is inside an active phase

**Use when:** making a direct code change rather than going through a prompt file.

---

### Content

#### `/add-blog-post`
Create a new MDX blog post stub.

**What it does:**
1. Asks: title, category, target audience, SEO description, tags
2. Derives slug from the title
3. Creates `src/content/blog/<slug>.mdx` with full frontmatter and section stubs
4. Sets `draft: true` — post stays out of the public blog index until changed

**Use when:** starting a new blog post.

**Categories:** `devops` / `career` / `mentoring` / `ai-tools` / `general`

---

### Session Hygiene

#### `/session-wrap`
End-of-session cleanup in one command.

**What it does:**
1. Finds the latest session `.jsonl` file
2. Counts tool calls (Read, Edit, Write, Bash) and session size
3. Appends a new row to `docs/ai-efficiency-report.md`
4. Updates `project-state.md` in memory if any phase items completed this session

**Use when:** finishing a working session.

**No questions asked** — runs immediately.

---

#### `/update-memory [what changed]`
Update the sub-repo memory files.

**What it does:** Syncs `~/.claude/projects/-Users-ankurnema-ankur-consulting-repo-ankurnema-in/memory/`
with any phase, tech, or feedback changes from this session.

**Use when:** finishing a session where phase state, tech facts, or behavioral rules changed.

---

## Typical Session Flow

```
Start session
  └─ Claude auto-loads memory (phase state, tech stack, user profile)

Executing a prompt
  └─ /execute-prompt phase-1-foundation 003

Adding a new deliverable mid-phase
  └─ /add-feature                    ← creates the prompt file
  └─ /execute-prompt <phase> <NNN>   ← builds it

Starting a new phase (after merging previous)
  └─ /complete-phase phase-1-foundation   ← close previous
  └─ /design-phase                        ← scaffold next

End of session
  └─ /session-wrap    ← efficiency report + memory
```

---

## Skill File Format

Each skill is a Markdown file in `.claude/commands/`. The frontmatter controls model
and tool permissions:

```markdown
---
description: <shown in /help and skill picker>
model: haiku | sonnet | opus
allowed-tools: Read Write Edit Bash(ls *) Bash(find *) ...
---

Instructions for Claude...

!`shell command to preload context`
```

**Model selection used in this repo:**
- `haiku` — file creation from templates, doc updates (fast, cheap)
- `sonnet` — code execution, multi-file coordination, phase design

---

## Adding or Modifying Skills

All skills live in `.claude/commands/`. To add one:

1. Create `<skill-name>.md` following the format above
2. Add a row to `AI-REFERENCE.md` (`.claude/commands/` section)
3. Add an entry to this file's Skill Reference

To test: invoke the skill with `/skill-name` and verify the files it touches match
what the instructions describe.
