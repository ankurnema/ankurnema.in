# PROMPT_TEMPLATE.md — ankurnema.in

> Phase-specific prompt templates for the website project.
> Copy, fill `[PLACEHOLDERS]`, use directly.
> **Start here:** Use "Phase Management" templates to set up a phase before any feature templates.

---

## Phase Management

Use these templates to set up and manage phases. Always start a phase with the "Start a New Phase" template before using any feature templates below.

### Start a New Phase
```
Read developer/PHASE_WORKFLOW.md to understand the convention.
Read CLAUDE.md and AI-REFERENCE.md.

Create phase [N]: [PHASE NAME] (maps to milestone [VERSION])
Branch: feature/phase-[N]-[short-name] — show me the git command to create it.

Create the following structure:
- developer/phase-[N]-[short-name]/README.md
  - Objective: [OBJECTIVE]
  - Deliverables: [LIST]
  - Success criteria: [HOW TO KNOW IT IS DONE]
  - Out of scope: [EXPLICIT EXCLUSIONS]
- developer/phase-[N]-[short-name]/AI-CONTEXT.md (key files for this phase)
- developer/phase-[N]-[short-name]/CHANGELOG.md (header only, no entries yet)
- developer/phase-[N]-[short-name]/prompts/README.md (empty index table)

Do NOT write any prompt files yet. Stop after the structure is created.
Update AI-REFERENCE.md to add the new phase folder entry.
```

### Add Prompts to a Phase
```
Read developer/phase-[N]-[short-name]/README.md and developer/PHASE_WORKFLOW.md.

Plan all prompts needed for this phase. For each deliverable, create one prompt file.
Each prompt file must follow the format in PHASE_WORKFLOW.md:
- Read First section (exact files Claude needs to read)
- Scope (in scope / out of scope)
- End Deliverable (exact description of the output)
- Prompt (the text to paste into Claude)

Deliverables to break into prompts:
[LIST DELIVERABLES FROM PHASE README]

Create:
- developer/phase-[N]-[short-name]/prompts/001-[short-name].md
- developer/phase-[N]-[short-name]/prompts/002-[short-name].md
- ... (one per deliverable)

Update developer/phase-[N]-[short-name]/prompts/README.md with the index table (all status: Pending).
```

### Update Phase Changelog
```
Read developer/phase-[N]-[short-name]/CHANGELOG.md and prompts/README.md.

Prompt [NNN] — [description] is now complete.

Add a dated entry to CHANGELOG.md:
- What was done: [SUMMARY]
- Files created: [LIST]
- Files modified: [LIST]
- Decisions made: [LIST, OR "none"]

Update developer/phase-[N]-[short-name]/prompts/README.md to mark prompt [NNN]
as Done with today's date (2026-[MM]-[DD]).
```

### Complete a Phase
```
Read developer/phase-[N]-[short-name]/README.md (success criteria) and AI-SUMMARY.md.

Phase [N] — [NAME] is complete. Do the following in order:

1. Write a phase summary to docs/phases/phase-[N]-[short-name]-completion.md
   Include: what was built, key decisions, lessons, what comes next
2. Update AI-SUMMARY.md:
   - Mark milestone [VERSION] as ✅ Complete in "Project Phases" table (in CLAUDE.md)
   - Add to Recent Completions: [YYYY-MM-DD] Phase [N] complete — [one line summary]
3. Update AI-REFERENCE.md with all new files/folders created during this phase
4. Update CLAUDE.md "Project Phases" table: change [VERSION] status to ✅ Complete

Then show me the gh pr create command to open the PR from feature/phase-[N]-[short-name] to main.
```

---

## Pinned Dependency Versions (as of May 2026)

Use these exact versions when scaffolding. Verify with `npm show <pkg> version` before running.

| Package | Version | Notes |
|---------|---------|-------|
| `next` | 16.2.6 | Framework |
| `react` | 19.2.6 | Peer dep |
| `react-dom` | 19.2.6 | Peer dep |
| `typescript` | 6.0.3 | devDep |
| `tailwindcss` | 4.3.0 | v4 — CSS-first config, no tailwind.config.js |
| `@tailwindcss/postcss` | 4.3.0 | v4 PostCSS plugin — replaces `tailwindcss` in postcss.config |
| `postcss` | 8.5.14 | devDep |
| `@types/react` | 19.2.14 | devDep |
| `@types/node` | 25.6.2 | devDep |
| `eslint` | 10.3.0 | devDep — uses flat config (eslint.config.mjs) |
| `eslint-config-next` | 16.2.6 | devDep — must match next version |
| `prettier` | 3.8.3 | devDep |
| `@next/mdx` | 16.2.6 | MDX support — must match next version |
| `@mdx-js/loader` | 3.1.1 | MDX webpack loader |
| `@mdx-js/react` | 3.1.1 | MDX React provider |
| `@types/mdx` | 2.0.13 | devDep |
| `sharp` | 0.34.5 | Image optimization (required for next/image in prod) |

**Breaking-change notes:**
- **Tailwind v4:** No `tailwind.config.js`. Configure via `@import "tailwindcss"` in your global CSS. PostCSS plugin is `@tailwindcss/postcss`, not `tailwindcss`. Drop `autoprefixer` — it's built in.
- **ESLint 10:** Config file is `eslint.config.mjs` (flat config), not `.eslintrc.json`.
- **Next.js 16:** Config file is `next.config.ts` (TypeScript), not `next.config.js`.

---

## Phase: Foundation Setup

### Scaffold the Project
```
Read CLAUDE.md and AI-REFERENCE.md in this repo first.
Also read the "Pinned Dependency Versions" table in this file for exact package versions.

Scaffold the Next.js 16 project with:
- TypeScript 6, Tailwind CSS 4, App Router, src/ directory, MDX support
- .nvmrc set to Node 22 (current LTS)
- next.config.ts (TypeScript config — not next.config.js)
- Turbopack for dev: add `--turbopack` to the dev script in package.json
- Tailwind v4 setup: `@import "tailwindcss"` in globals.css, PostCSS plugin is @tailwindcss/postcss — no tailwind.config.js, no autoprefixer
- ESLint 10 flat config: eslint.config.mjs (not .eslintrc.json), configured with eslint-config-next
- Prettier with a .prettierrc
- Root layout.tsx must export a `metadata` object using the Next.js Metadata API
- Folder structure matching the planned architecture in AI-REFERENCE.md
- Placeholder page.tsx for each route in the plan
- A basic layout.tsx with shared header and footer

After scaffolding, update AI-REFERENCE.md with actual files created
and update AI-SUMMARY.md to mark scaffold as complete.
```

### Set Up CI/CD
```
Read CLAUDE.md and AI-REFERENCE.md.

Create GitHub Actions workflows:
1. ci.yml — runs on every PR: install deps, lint, type-check, build (use `next build`, not Turbopack for CI)
2. deploy.yml — runs on merge to main: deploy to Vercel

Use Node version from .nvmrc (Node 22+). Use `npm ci` for deterministic installs.
After creating, update AI-SUMMARY.md and AI-REFERENCE.md.
```

### Write an ADR
```
Read docs/adr/ to see existing ADRs and numbering.

Write ADR-[NNN] for this decision:
- Decision: [WHAT WAS DECIDED]
- Context: [WHY THIS DECISION NEEDED TO BE MADE]
- Alternatives considered: [LIST]
- Chosen option: [CHOICE]
- Consequences: [TRADE-OFFS]

Save to docs/adr/[NNN]-[short-title].md
Update AI-SUMMARY.md Key Decisions table with ADR reference.
```

---

## Phase: Feature Development

### Build a New Page
```
Read CLAUDE.md (conventions section) and AI-REFERENCE.md (site architecture).
Current phase: [PHASE]

Build the [PAGE NAME] page at src/app/[PATH]/page.tsx.
Requirements:
- [REQUIREMENT 1]
- [REQUIREMENT 2]

Follow the coding conventions in CLAUDE.md.
After building, update AI-REFERENCE.md and AI-SUMMARY.md.
```

### Build a New Component
```
Read CLAUDE.md (conventions) and src/components/ existing components.

Create a new component: [COMPONENT NAME]
Purpose: [WHAT IT DOES]
Used on: [WHICH PAGES]
Props: [LIST PROPS]

Place in src/components/[ComponentName].tsx.
Update AI-REFERENCE.md after.
```

### Embed Zoho Bookings
```
Read CLAUDE.md and src/app/contact/page.tsx (or services pages).

Embed the Zoho Bookings widget for service: [SERVICE NAME]
Booking URL: [ZOHO BOOKINGS URL]
Place it on: [PAGE PATH]

Ensure it is mobile responsive and matches Tailwind styling.
Update AI-SUMMARY.md after.
```

---

## Phase: Blog Content

### Create a New Blog Post
```
Read CLAUDE.md (blog conventions) and src/content/blog/ for existing post format.

Create a new blog post:
- Title: [TITLE]
- Category: [DevOps | Career | AI | Culture | Story]
- Target keyword: [SEO KEYWORD]
- Outline: [PASTE OUTLINE OR DESCRIBE]

Save as src/content/blog/[kebab-case-title].mdx with proper frontmatter.
Also add to ankurnema-brand/content/content-calendar.md as Published.
Update AI-SUMMARY.md after.
```

### SEO Audit a Post
```
Read src/content/blog/[FILENAME].mdx

Review for:
- Title tag (under 60 chars, keyword-first)
- Meta description (under 155 chars, includes keyword)
- H2/H3 structure (does it match search intent?)
- Internal links (links to services or other posts?)
- Image alt text
- Reading time estimate

Suggest specific improvements. Do not rewrite the whole post.
```

---

## Phase: Review & Deploy

### Pre-Deploy Checklist
```
Read CLAUDE.md, AI-SUMMARY.md, and AI-REFERENCE.md.

Run through this checklist for the [FEATURE/VERSION]:
1. All pages load without errors (check build output)
2. Mobile responsive (check key pages)
3. All links work (no broken internal links)
4. Meta tags present on all pages
5. GA4 script present
6. Zoho Forms / Bookings embeds functional
7. .env.example updated with any new env vars
8. AI-REFERENCE.md up to date
9. AI-SUMMARY.md phase status updated

Report: pass/fail for each item.
```

### Phase Completion Summary
```
Read AI-SUMMARY.md and the current phase milestone in CLAUDE.md.

Phase [NAME] is now complete. Write a phase summary and save to:
docs/phases/[phase-name]-completion.md

Include: what was built, key decisions made, lessons learned, what's next.
Then update AI-SUMMARY.md current phase and AI-REFERENCE.md if new files added.
```
