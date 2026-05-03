# PROMPT_TEMPLATE.md — ankurnema.in

> Phase-specific prompt templates for the website project.
> Copy, fill `[PLACEHOLDERS]`, use directly.

---

## Phase: Foundation Setup

### Scaffold the Project
```
Read CLAUDE.md and AI-REFERENCE.md in this repo first.

Scaffold the Next.js 15 project with:
- TypeScript, Tailwind CSS, App Router, src/ directory, MDX support
- ESLint + Prettier configured
- .nvmrc set to current Node LTS
- Folder structure matching the planned architecture in AI-REFERENCE.md
- Placeholder page.tsx for each route in the plan
- A basic layout.tsx with header and footer

After scaffolding, update AI-REFERENCE.md with actual files created
and update AI-SUMMARY.md to mark scaffold as complete.
```

### Set Up CI/CD
```
Read CLAUDE.md and AI-REFERENCE.md.

Create GitHub Actions workflows:
1. ci.yml — runs on every PR: install deps, lint, type-check, build
2. deploy.yml — runs on merge to main: deploy to Vercel

Use Node version from .nvmrc.
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
