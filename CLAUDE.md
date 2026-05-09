# CLAUDE.md — ankurnema.in

## What This Repo Is

Personal website and open-source case study for Ankur Nema.
**URL:** https://ankurnema.in  
**Repo:** https://github.com/ankurnema/ankurnema.in (PUBLIC)  
**Purpose:** Portfolio site + consulting services hub + technical blog + live demonstration of AI-assisted development

### The Case Study Angle
This repo is intentionally open-source so others can learn how to:
- Use AI for project planning and phase-wise development
- Structure a Next.js personal site as a professional portfolio
- Write ADRs (Architecture Decision Records) for decision transparency
- Set up CI/CD for a personal site using GitHub Actions + Vercel

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Blog | MDX (Markdown + React components) |
| Hosting | Vercel (free tier) |
| Analytics | Google Analytics 4 |
| Domain | ankurnema.in (Hostinger DNS → Vercel) |

---

## Project Phases & Current Phase

| Phase | Milestone | Status |
|-------|-----------|--------|
| v0.1 — Foundation | Site live, all pages, blog scaffolded | ⏳ Not started |
| v0.2 — Content Engine | Blog live, SEO, RSS feed | ⏳ Not started |
| v0.3 — Services Live | Booking embeds, service pages, lead capture | ⏳ Not started |
| v0.4 — Automation | Newsletter, analytics, performance | ⏳ Not started |
| v1.0 — Scale | Course page, resources, community | ⏳ Not started |

**Current phase:** Pre-development — scaffolding not yet done

---

## Site Architecture (Planned)

```
src/
├── app/
│   ├── page.tsx              ← Home / Hero
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx          ← Services overview
│   │   ├── consulting/
│   │   ├── mentoring/
│   │   ├── career/
│   │   └── resume-review/
│   ├── blog/
│   │   ├── page.tsx          ← Blog index
│   │   └── [slug]/page.tsx   ← Individual post
│   ├── resources/page.tsx
│   ├── talks/page.tsx
│   └── contact/page.tsx
├── components/
├── content/
│   └── blog/                 ← MDX blog posts
└── lib/
docs/
├── adr/                      ← Architecture Decision Records
└── phases/                   ← Phase completion summaries
.github/
└── workflows/
    ├── ci.yml                ← lint + build on PR
    └── deploy.yml            ← deploy to Vercel on merge to main
```

---

## Coding Conventions

- **Components:** PascalCase, one component per file
- **Pages:** `page.tsx` inside app directory folders
- **Blog posts:** kebab-case MDX filenames, frontmatter required (title, date, category, description)
- **Commits:** Conventional Commits format (`feat:`, `fix:`, `docs:`, `chore:`)
- **Branches:** `feature/`, `fix/`, `content/`, `docs/` prefixes
- **No hardcoded content** — all services data, navigation, and metadata in config files
- **Diagrams:** Always use Mermaid syntax (`\`\`\`mermaid`) for all diagrams in documentation and ADR files — no ASCII art diagrams

---

## Phase Workflow

All feature development happens inside a named phase. No code changes without a phase.

**Rules:**
- Create the phase folder (`developer/phase-N-name/`) before writing any code
- Start every phase with planning: write `README.md`, `AI-CONTEXT.md`, and all `prompts/` files first
- Each prompt = one discrete deliverable; execute one at a time
- Update `CHANGELOG.md` after each prompt execution
- One phase = one feature branch (`feature/phase-N-name`) = one PR
- Phases map to the "Project Phases" milestones table above

**Full guide:** `developer/PHASE_WORKFLOW.md` — read this before starting any phase

---

## ADR Convention

Architecture Decision Records live in `docs/adr/`.
Naming: `NNN-short-description.md`
Each ADR has: Title, Status, Context, Decision, Consequences.
Write an ADR for every significant technology or architectural choice.

---

## What NOT to Put in This Repo

- Pricing details (rates, packages, discounts) — keep in a private repo
- Client data (names, contact info, engagement notes) — keep in a private repo
- Blog drafts (unpublished posts) — keep in a private repo until published
- Business/legal documents (contracts, invoices, GST filings) — keep in a private repo

---

## Mandatory: After Each Unit of Work

After completing any unit of work (feature, file change, milestone, key decision):

1. **AI-REFERENCE.md** — update if any files or folders were added, moved, or deleted
2. **AI-SUMMARY.md** — add an entry under "Recent Completions": `- [YYYY-MM-DD] <what was done>`; update phase status when a milestone is reached
3. **docs/adr/** — write an ADR for every significant technology or architectural decision

---

## Mandatory: After Each AI Session

After every AI session (regardless of whether a full unit of work was completed):

Update `docs/ai-efficiency-report.md` with a new row in the current phase table:

```
| S0N | X.XX MB | <reads> | <edits> | <writes> | <bash> | <edit/read> | What was delivered |
```

**To get the session file size:**
```bash
ls -lh ~/.claude/projects/-Users-ankurnema-IdeaProjects-ankurnema-in/
```

**To count tool calls (run in terminal):**
```bash
python3 -c "
import json, os
f = '<path-to-session>.jsonl'
data = [json.loads(l) for l in open(f) if l.strip()]
counts = {}
for entry in data:
    for block in entry.get('message', {}).get('content', []):
        if isinstance(block, dict) and block.get('type') == 'tool_use':
            name = block.get('name', '?')
            counts[name] = counts.get(name, 0) + 1
print(counts)
"
```

**Rules:**
- Edit/Read ratio = Edits ÷ Reads (skip if Reads = 0)
- If a new calendar month started, recalculate the subscription value ratio row in the Running Subscription Value Tracker table
- If the session advanced a phase milestone, also update the phase status in the phase table header
