---
description: Create a prompt file for a new feature — interview-style, gathers feature details, creates the numbered prompt in the right phase, updates prompts/README.md
model: sonnet
allowed-tools: Read Write Edit Bash(ls *) Bash(find *)
---

Create a prompt file for a new feature within an active phase.

**Arguments:** $ARGUMENTS

## Active phases

!`ls /Users/ankurnema/ankur-consulting/repo/ankurnema.in/developer/`

---

## Instructions

### Step 1 — Gather feature details upfront

Use AskUserQuestion to collect:
1. **Feature name** — what is it? (e.g. "Contact Form", "Blog Tag Filter", "Services Grid")
2. **Type** — page / component / API route / utility / config / other
3. **Path** — where does it live in the repo? (e.g. `src/app/contact/page.tsx`, `src/components/TagFilter.tsx`)
4. **Phase** — which phase folder does this belong to? (e.g. `phase-1-foundation`)
5. **Acceptance criteria** — what should be true when it's done? (bullet list of observable outcomes)
6. **Reuse** — any existing components, hooks, utilities, or config patterns to leverage?

### Step 2 — Read existing code for context

Read the file at the specified path if it already exists.
Read `CLAUDE.md` for component naming, coding conventions, and testing requirements.
If there are closely related existing components in `src/components/`, scan them briefly.

### Step 3 — Find next prompt number

```
ls /Users/ankurnema/ankur-consulting/repo/ankurnema.in/developer/<phase>/prompts/
```
Find the highest NNN in existing filenames (ignore README.md). Next = highest + 1, zero-padded to 3 digits.

### Step 4 — Create the prompt file

Convert feature name to kebab-case for the filename (e.g. "Contact Form" → `contact-form`).

Create `/Users/ankurnema/ankur-consulting/repo/ankurnema.in/developer/<phase>/prompts/<NNN>-<feature-slug>.md`:

```markdown
# Prompt <NNN> — <Feature Name>

## Read First
- `CLAUDE.md` — component conventions, naming rules, testing requirements
- `<relevant existing file or nearby component>` — <why it matters>

## Scope
**In scope:** <explicit list of what this prompt builds>
**Out of scope:** <explicit exclusions — what belongs in a later prompt>

## End Deliverable
<Feature name> exists at `<path>`. <Acceptance criteria restated as a completion state.> Tests pass.

## Prompt
Build <feature name> at `<path>`.

<Detailed, actionable instructions derived from the feature type, acceptance criteria, and any reuse opportunities. Be specific about layout, data, behavior, and tests.>

Follow all conventions in CLAUDE.md.
```

### Step 5 — Update prompts/README.md

Read `developer/<phase>/prompts/README.md`. Add row at end of the table:
```
| <NNN> | [<NNN>-<slug>.md](<NNN>-<slug>.md) | <Feature Name> — <one-line description> | ⏳ Pending |
```

### Step 6 — Confirm

Report: prompt file created at `developer/<phase>/prompts/<NNN>-<slug>.md`, row added to README.md.
Offer: "Run `/execute-prompt <phase> <NNN>` to build it now."
