---
description: Update the ankurnema.in sub-repo memory with changes from this session — phase state, tech discoveries, or new feedback. Creates memory files if missing.
model: haiku
allowed-tools: Read Write Edit Bash(ls *) Bash(cat *) Bash(mkdir *)
---

Update (or initialize) the memory files at
`~/.claude/projects/-Users-ankurnema-ankur-consulting-repo-ankurnema-in/memory/`.

**What changed this session:** $ARGUMENTS

---

## Memory directory status

!`ls -1 ~/.claude/projects/-Users-ankurnema-ankur-consulting-repo-ankurnema-in/memory/`

---

## Current memory content (if files exist)

### MEMORY.md
!`cat ~/.claude/projects/-Users-ankurnema-ankur-consulting-repo-ankurnema-in/memory/MEMORY.md`

### project-state.md
!`cat ~/.claude/projects/-Users-ankurnema-ankur-consulting-repo-ankurnema-in/memory/project-state.md`

### tech-stack.md
!`cat ~/.claude/projects/-Users-ankurnema-ankur-consulting-repo-ankurnema-in/memory/tech-stack.md`

### user-profile.md
!`cat ~/.claude/projects/-Users-ankurnema-ankur-consulting-repo-ankurnema-in/memory/user-profile.md`

### Recent AI-SUMMARY.md completions (last 20 lines)
!`tail -20 /Users/ankurnema/ankur-consulting/repo/ankurnema.in/AI-SUMMARY.md`

---

## Instructions

### Step 0 — Initialize missing files

Check the `ls` output in "Memory directory status" above.

If the `memory/` directory itself is missing (ls returned an error), create it first:
```
~/.claude/projects/-Users-ankurnema-ankur-consulting-repo-ankurnema-in/memory/
```

For each file listed below that is **absent** from the ls output, create it now using
the exact template provided. Do not skip this step — absent files mean memory was never
initialized for this context.

**`MEMORY.md` template** (create if missing):
```
# MEMORY.md — ankurnema.in sub-repo context

> This memory is loaded when Claude Code's working directory root is ankurnema.in
> (WebStorm/IntelliJ with sub-repo as project root, or CLI from sub-repo path).

## User
- [User profile](user-profile.md) — Ankur Nema: role, experience, style, public-repo constraints

## Project
- [Project state](project-state.md) — Phase v0.1 Foundation: website done/pending/blocked items

## Reference
- [Tech stack](tech-stack.md) — Next.js 16, Tailwind v4, breaking changes to remember

## Feedback
- [No private repo refs in public](feedback_no_private_repo_in_public.md) — Never name private repos/workspaces in any file inside this repo
- [Skill inline commands cannot use pipes](feedback_skill_inline_commands.md) — Pipe operators always block ! inline shell commands regardless of permissions
```

**`user-profile.md` template** (create if missing):
```
---
name: User profile — Ankur Nema
description: Who Ankur is, role, experience level, communication style, and public-repo constraints. Load every session.
type: user
---
**Name:** Ankur Nema
**Role:** Director – DevOps & Developer Productivity, SAP Labs India
**Experience level:** Senior (Director-level, 15+ yrs inferred). Skip basics, no hand-holding.
**Style:** Direct, metrics-oriented, concise. No trailing summaries — user reads the diff.

**Building:** Personal website + tech blog + consulting services hub (ankurnema.in is the public face)

**Key accounts:**
- GitHub: github.com/ankurnema
- Domain: ankurnema.in (Hostinger DNS → Vercel)

**Hard constraints (public repo context):**
- Never name private repos, parent workspace, or business systems in any file in this repo
- Use "parent workspace" or "other projects" — never actual repo names
- Day-job examples must be anonymized — no company/team specifics
- No SAP ecosystem consulting content
```

**`tech-stack.md` template** (create if missing):
```
---
name: Tech stack — ankurnema.in locked decisions and breaking-change reminders
description: All technology choices for the website. Do not re-debate. Includes version-specific gotchas.
type: reference
---
**Website (ankurnema.in):**
- Framework: Next.js 16, App Router, TypeScript 6
- Styling: Tailwind CSS v4 (CSS-first — no tailwind.config.js)
- Blog: MDX
- Testing: Vitest 4.1.5 (unit) + Playwright 1.59.1 (E2E) + Lighthouse CI
- Hosting: Vercel free tier | Analytics: Google Analytics 4 (planned)

**Breaking changes to remember:**
- Tailwind v4: PostCSS plugin = @tailwindcss/postcss (not tailwindcss), drop autoprefixer, use @import "tailwindcss" in CSS
- ESLint 9: flat config (eslint.config.mjs), not .eslintrc.json
- Next.js 16: config is next.config.ts (TypeScript)
- Turbopack: dev-only (next dev --turbopack); CI always uses next build

**Do not re-debate:** Framework, styling, hosting, blog format are final.
```

**`project-state.md` template** (create if missing):
```
---
name: Project state — ankurnema.in current phase and website blockers
description: Active phase, what is done, what is pending, what is blocked for the website. Update when status changes.
type: project
---
**Last updated:** [today's date]

**Phase:** v0.1 — Foundation (in progress)

**Done:**
- Next.js 16 scaffold (TypeScript, Tailwind v4, ESLint 9, Prettier, MDX, .mcp.json)
- Testing infra (Vitest 4.1.5 + Playwright 1.59.1 + Lighthouse CI)
- ADRs 001–007 in developer/adr/
- Phase workflow system (developer/PHASE_WORKFLOW.md)
- AI efficiency report + /update-efficiency-report skill

**Pending (Phase 1):**
- All page content (routes are stubs)
- Blog scaffolding
- GitHub Actions CI/CD
- Vercel deployment + domain connection
- README as case study intro

**Why / How to apply:** Use this instead of reading AI-SUMMARY.md at session start. Update when phase items move from Pending → Done or Blocked → Pending.
```

**`feedback_no_private_repo_in_public.md` template** (create if missing):
```
---
name: No private repo references in ankurnema.in
description: Never mention private repo names, parent workspace names, or business systems in any file inside this repo
type: feedback
---
Never reference private repository names, the parent workspace name, or any
business-specific system names in any file inside ankurnema.in. This repo is public.

**Why:** A note in docs/ai-efficiency-report.md once mentioned a private repo by name,
leaking the existence and name of private business infrastructure.

**How to apply:** Use generic language — "parent workspace", "other projects",
"cross-project work" — never actual repo or workspace names.
```

---

### Step 1 — Identify which files need updating

Using `$ARGUMENTS` (if provided) and the session context above, map changes to files:
- Phase advanced, page route built, CI/CD added, item done or unblocked → `project-state.md`
- New technology added, version bumped, breaking change discovered → `tech-stack.md`
- New behavioral guidance ("don't do X", "always do Y") → create a new `feedback_<topic>.md`
- User preference or constraint changed → `user-profile.md`

### Step 2 — Update only the files that need it

For each file:
- Update the **Last updated** date to today if the file has one
- Add, modify, or remove the specific facts that changed
- Do NOT rewrite sections that are still accurate
- Keep entries concise — memory files should be scannable, not exhaustive

### Step 3 — If creating a new feedback file

- Filename: `feedback_<topic>.md` (e.g. `feedback_no_mdx_images.md`)
- Frontmatter: `name`, `description`, `type: feedback`
- Body: state the rule, then `**Why:**` and `**How to apply:**` lines
- Add a one-line entry to `MEMORY.md` under `## Feedback`

### Step 4 — If no arguments were given

- Review the AI-SUMMARY.md recent completions shown above
- Compare against current memory files
- Update any memory file whose content is stale or missing new facts

### Step 5 — Constraints

- Do not update `MEMORY.md` index unless a new file was created or a file was deleted
- Do not touch `AI-SUMMARY.md`, `AI-REFERENCE.md`, or any repo files — this skill only
  writes to the `memory/` directory
- Only update website-relevant facts (phase, pages, routes, blog, CI/CD, tech stack)
- Do not add business data (pricing, client info, GST, Zoho) — those belong in the
  parent workspace memory, not here
