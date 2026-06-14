# Prompt 007a — Services Page Visual Redesign

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation
- `developer/phase-1-foundation/brand-guidelines.md` — brand tokens and styling conventions
- `developer/learnings/006-about-page.md` — Playwright strict mode, Lucide brand icons gotcha
- `src/components/about/FadeInSection.tsx` — delay prop confirmed; wraps sections
- `src/components/about/StatCard.tsx` — props: icon, value, label, sublabel

## Scope
**In scope:**
- Redesign `src/app/services/page.tsx` with full visual treatment matching the About page bar
- New components: `src/components/services/ServiceCard.tsx`, `PersonaChip.tsx`, `ProcessStep.tsx`
- Update `e2e/services.spec.ts` — add headings and persona text assertions
- No pricing, no links to sub-pages (008–011b not yet built)

**Out of scope:**
- Image assets / photography
- Sub-page links (add when 008–011b are built)
- Navigation changes

## New Page Sections

1. **Hero** — navy + dot grid; "Work with Ankur" eyebrow; H1 "Services"; updated subtext mentioning "engineers at every stage"
2. **Persona band** — canvas bg; 5 chips (Students, Young professionals, Mid-career engineers, Engineering managers, Senior leaders) each with a lucide icon
3. **Core Services** — 4 ServiceCards in 2×2 grid; each has amber icon tile, heading, body, Check-icon highlights; FadeInSection stagger (delay i×0.08)
4. **How we'll work together** — 4 ProcessSteps (Reach out, Discovery call, Personalised plan, Iterate together); surface bg; FadeInSection stagger
5. **Credibility stats** — 3 StatCards reused from About: "18+" (since 2008), "100+" mentored, "Director" DevOps; canvas bg
6. **Consulting Hour** — slim de-emphasised strip (unchanged from 007 except icon added)
7. **CTA** — navy rounded card; reworded to acknowledge all audiences

## New Components

### ServiceCard
Props: `icon: React.ComponentType<{className?: string; strokeWidth?: number}>`, `name`, `description`, `highlights[]`
- Amber icon tile top-left (w-10 h-10 bg-brand-amber/10 rounded-xl)
- Heading, body, checklist with `<Check>` lucide icons
- Hover: amber border + -translate-y-0.5

### PersonaChip
Props: `icon` (same type as above), `label`
- Rounded pill: border + bg-brand-surface
- Icon left, label right

### ProcessStep
Props: `step` (number), `icon`, `title`, `description`
- Amber-bg circle with icon; amber step number badge top-right
- Center-aligned label + description

## Icon Mapping

| Usage | Icon |
|-------|------|
| Mentoring service | `Lightbulb` |
| Career Guidance | `TrendingUp` |
| Resume Review | `FileText` |
| LinkedIn Review | inline SVG (brand icon) |
| Consulting Hour | `Clock` |
| Stat 1 | `TrendingUp` |
| Stat 2 | `Users` |
| Stat 3 | `Award` |
| Persona: Students | `GraduationCap` |
| Persona: Young professionals | `Rocket` |
| Persona: Mid-career | `Code` |
| Persona: Managers | `Users` |
| Persona: Senior leaders | `Compass` |
| Process step 1 | `Mail` |
| Process step 2 | `MessageCircle` |
| Process step 3 | `ClipboardList` |
| Process step 4 | `Repeat` |

## Stats Values (confirmed)

- 18+ / "Years in engineering" / sublabel "Since August 2008"
- 100+ / "Engineers mentored"
- Director / "DevOps & Developer Productivity" / sublabel "Current role"

## End Deliverable
- `src/app/services/page.tsx` redesigned with 7 sections
- 3 new components in `src/components/services/`
- `e2e/services.spec.ts` updated (3 assertions)
- `npm run build` passes
- `npm run test:e2e services.spec.ts` — 5/5 pass
- 5 post-execution docs updated (CHANGELOG, prompts/README, AI-REFERENCE, AI-SUMMARY, learnings if needed)
