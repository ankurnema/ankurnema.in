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
