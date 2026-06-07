# Prompt 006 — About Page (Full)

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation, Tailwind v4 and Next.js 16 breaking changes
- `developer/phase-1-foundation/brand-guidelines.md` — brand tokens and color pairings
- `src/app/layout.tsx` — root layout (header/footer shared, `main` wraps children)

> All page content is embedded directly in this prompt.
> No external repo reads required — fully executable from WebStorm with only `ankurnema.in` in the workspace.

---

## Scope

**In scope:**
- `src/app/about/page.tsx` — full About page, 7 sections, all content hardcoded, static server component
- `e2e/about.spec.ts` — 4 Playwright smoke tests
- `developer/phase-1-foundation/CHANGELOG.md` — add entry
- `AI-REFERENCE.md` — add two new file entries
- `AI-SUMMARY.md` — add to Recent Completions

**Out of scope:**
- Navigation links to `/about` from the header (page is accessible but not linked until a later prompt)

---

## Privacy Rules — Enforce Before Writing Any Copy

| Never write | Use instead |
|---|---|
| SAP / SAP Labs / SAP SuccessFactors | "a globally scaled enterprise software organization" or "a Fortune 500 engineering org" |
| "1,000+ developers at SAP" | "an engineering organization of 1,000+ developers" |
| "Director at SAP" | "DevOps Director at a globally scaled enterprise software organization" |
| SAP internal certification names | Omit or use "internal AI and strategy certification" |

Safe to name without restriction: Convergys, NetCracker, Symantec, Broadcom, Amdocs, Scaler.

---

## Architecture Decisions

- Pure server component — no `'use client'` directive
- All content hardcoded in this file — no CMS, no external imports
- No new shared components — single-file page implementation
- Semantic HTML: `<dl>/<dt>/<dd>` for stats, `<figure>/<blockquote>/<figcaption>` for testimonials, `<article>` for career acts
- Internal CTA links use `import Link from 'next/link'`
- External YouTube links use `<a target="_blank" rel="noopener noreferrer">`

---

## Step 1 — Create `src/app/about/page.tsx`

### Metadata

```ts
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'DevOps Director, consultant, and mentor with 17+ years building at scale. Meet Ankur Nema.',
  openGraph: {
    title: 'About Ankur Nema',
    description: 'DevOps Director, consultant, and mentor with 17+ years building at scale.',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
}
```

### Page structure

The default export is `AboutPage`. Outer wrapper: `<div className="flex flex-col">` containing 7 `<section>` elements in order. Sections alternate between `bg-brand-canvas` and `bg-brand-surface` backgrounds for visual rhythm, with the hero and CTA footer both using `bg-brand-navy`.

---

### Section 1 — Hero

```tsx
<section className="bg-brand-navy dark:bg-brand-surface-dark px-6 py-16 sm:py-24">
  <div className="max-w-4xl mx-auto">
    <p className="text-brand-amber dark:text-brand-amber-dark text-sm font-semibold tracking-widest uppercase mb-4 font-sans">
      DevOps Director · Consultant · Mentor
    </p>
    <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-white mb-6 leading-tight">
      DevOps Leader. Engineering Mentor.{' '}
      <br className="hidden sm:block" />
      17+ Years of Building Things That Scale.
    </h1>
    <div className="text-white/80 text-base sm:text-lg font-sans max-w-3xl mb-8 space-y-4 leading-relaxed">
      <p>
        I have spent 17+ years inside some of India&apos;s most complex software
        engineering environments — from telecom platforms to cybersecurity to
        enterprise cloud. Along the way I have led DevOps transformations that cut
        provisioning time from weeks to hours, improved developer productivity by
        25%, and turned around stalled deployments in 15 days. Today, as a DevOps
        Director at a globally scaled engineering organization, I lead platform teams
        building the internal tooling and infrastructure that 1,000+ developers
        depend on every day.
      </p>
      <p>
        Outside my corporate role, I advise startups on DevOps foundations and mentor
        engineers who are ready to grow — both technically and in their careers. I
        have worked with 150+ mentees across India and bring the same specificity and
        outcome-focus to every engagement.
      </p>
    </div>
    <Link
      href="/services"
      className="inline-block bg-brand-amber dark:bg-brand-amber-dark text-brand-navy font-semibold px-6 py-3 font-sans transition-opacity hover:opacity-90"
    >
      Work with me →
    </Link>
  </div>
</section>
```

---

### Section 2 — Impact Stats

```tsx
<section className="bg-brand-canvas dark:bg-brand-canvas-dark px-6 py-12 sm:py-16">
  <div className="max-w-4xl mx-auto">
    <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
      <div>
        <dt className="text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark">
          17+
        </dt>
        <dd className="text-sm text-brand-slate dark:text-brand-slate-dark font-sans mt-1">
          Years in Engineering
        </dd>
      </div>
      <div>
        <dt className="text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark">
          150+
        </dt>
        <dd className="text-sm text-brand-slate dark:text-brand-slate-dark font-sans mt-1">
          Engineers Mentored
        </dd>
      </div>
      <div>
        <dt className="text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark">
          1,000+
        </dt>
        <dd className="text-sm text-brand-slate dark:text-brand-slate-dark font-sans mt-1">
          Developers in Current Org
        </dd>
      </div>
      <div>
        <dt className="text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark">
          25%
        </dt>
        <dd className="text-sm text-brand-slate dark:text-brand-slate-dark font-sans mt-1">
          Developer Productivity Gain
        </dd>
      </div>
      <div>
        <dt className="text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark">
          15 days
        </dt>
        <dd className="text-sm text-brand-slate dark:text-brand-slate-dark font-sans mt-1">
          To Unblock a 5-Month Stall
          <span className="block text-xs mt-0.5 text-brand-slate/70 dark:text-brand-slate-dark/70">
            stalled for 5 months
          </span>
        </dd>
      </div>
    </dl>
  </div>
</section>
```

---

### Section 3 — Career Arc

```tsx
<section className="bg-brand-surface dark:bg-brand-surface-dark px-6 py-12 sm:py-16">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-4">
      The Journey
    </h2>
    <p className="text-brand-slate dark:text-brand-slate-dark text-base font-sans mb-10 leading-relaxed">
      From writing telecom automation scripts in 2008 to leading the platform
      engineering team that 1,000+ developers depend on — seventeen years of
      building things that had to work, and helping the people who build them grow.
    </p>
    <div className="space-y-8">
      <article>
        <h3 className="text-xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-2">
          Deep Roots{' '}
          <span className="font-normal text-base text-brand-slate dark:text-brand-slate-dark">
            (2008–2012)
          </span>
        </h3>
        <p className="text-brand-charcoal dark:text-brand-charcoal-dark/80 text-base font-sans leading-relaxed">
          Four years in telecom OSS/BSS at Convergys and NetCracker. Not glamorous
          work, but foundational: learned what it means to maintain systems that
          cannot go down, for customers who cannot wait. The habits formed here —
          over-communication, fault isolation discipline, respect for production —
          never left.
        </p>
      </article>
      <article>
        <h3 className="text-xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-2">
          Technical Mastery{' '}
          <span className="font-normal text-base text-brand-slate dark:text-brand-slate-dark">
            (2012–2020)
          </span>
        </h3>
        <p className="text-brand-charcoal dark:text-brand-charcoal-dark/80 text-base font-sans leading-relaxed">
          Seven years at Symantec, then a year at Broadcom after the acquisition.
          Went from writing features to designing systems, from implementing to
          influencing architecture. Cybersecurity software has no tolerance for
          sloppiness — a wrong decision at the wrong layer costs millions in breach
          exposure. That context sharpened the instinct for reliability by orders of
          magnitude.
        </p>
      </article>
      <article>
        <h3 className="text-xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-2">
          Leadership and Scale{' '}
          <span className="font-normal text-base text-brand-slate dark:text-brand-slate-dark">
            (2020–present)
          </span>
        </h3>
        <p className="text-brand-charcoal dark:text-brand-charcoal-dark/80 text-base font-sans leading-relaxed">
          The shift from expert to leader. At Amdocs, took on people management for
          the first time and discovered that developing engineers is the
          highest-leverage thing a technical leader can do. Today, as a DevOps
          Director at a globally scaled enterprise software organization, I am
          responsible for the internal platforms and developer productivity tooling
          that an entire engineering organization depends on. The scale changed; the
          instinct did not.
        </p>
      </article>
    </div>
  </div>
</section>
```

---

### Section 4 — Skills & Expertise

```tsx
<section className="bg-brand-canvas dark:bg-brand-canvas-dark px-6 py-12 sm:py-16">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-10">
      Skills &amp; Expertise
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark pb-2 mb-4 border-b border-brand-slate/20 dark:border-brand-slate-dark/20">
          Platform &amp; DevOps
        </h3>
        <ul className="space-y-2">
          <li className="text-sm text-brand-charcoal dark:text-brand-charcoal-dark/80 font-sans">
            CI/CD at Scale (Jenkins, ArgoCD, GitHub Actions)
          </li>
          <li className="text-sm text-brand-charcoal dark:text-brand-charcoal-dark/80 font-sans">
            Infrastructure as Code (Terraform, Ansible)
          </li>
          <li className="text-sm text-brand-charcoal dark:text-brand-charcoal-dark/80 font-sans">
            Kubernetes (multi-cluster, enterprise)
          </li>
          <li className="text-sm text-brand-charcoal dark:text-brand-charcoal-dark/80 font-sans">
            GitOps and Release Engineering
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark pb-2 mb-4 border-b border-brand-slate/20 dark:border-brand-slate-dark/20">
          Observability &amp; AI
        </h3>
        <ul className="space-y-2">
          <li className="text-sm text-brand-charcoal dark:text-brand-charcoal-dark/80 font-sans">
            Distributed Observability (OpenTelemetry, Elastic APM)
          </li>
          <li className="text-sm text-brand-charcoal dark:text-brand-charcoal-dark/80 font-sans">
            SLI/SLO Design and DORA Metrics
          </li>
          <li className="text-sm text-brand-charcoal dark:text-brand-charcoal-dark/80 font-sans">
            AI-Powered Developer Tooling (RAG, LLM integration)
          </li>
          <li className="text-sm text-brand-charcoal dark:text-brand-charcoal-dark/80 font-sans">
            Go CLI Development
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark pb-2 mb-4 border-b border-brand-slate/20 dark:border-brand-slate-dark/20">
          Leadership &amp; Developer Experience
        </h3>
        <ul className="space-y-2">
          <li className="text-sm text-brand-charcoal dark:text-brand-charcoal-dark/80 font-sans">
            Internal Developer Platform Design
          </li>
          <li className="text-sm text-brand-charcoal dark:text-brand-charcoal-dark/80 font-sans">
            Developer Experience (DX) Measurement
          </li>
          <li className="text-sm text-brand-charcoal dark:text-brand-charcoal-dark/80 font-sans">
            Engineering Productivity at Scale (1,000+ developers)
          </li>
          <li className="text-sm text-brand-charcoal dark:text-brand-charcoal-dark/80 font-sans">
            IC-to-Lead Career Development
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

---

### Section 5 — Testimonials

```tsx
<section className="bg-brand-surface dark:bg-brand-surface-dark px-6 py-12 sm:py-16">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-10">
      What People Say
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <figure className="bg-brand-canvas dark:bg-brand-canvas-dark p-6">
        <blockquote className="text-brand-charcoal dark:text-brand-charcoal-dark/80 text-base font-sans leading-relaxed mb-4">
          <p>
            &ldquo;Ankur is a hardworking, dedicated technological leader who is
            well known for his great &lsquo;can-do&rsquo; approach. This dedication
            and positive approach unites the team around him, creates consensus, and
            leads to great achievements.&rdquo;
          </p>
        </blockquote>
        <figcaption>
          <p className="text-brand-navy dark:text-brand-charcoal-dark font-semibold font-sans text-sm">
            Yaniv Bigger
          </p>
          <p className="text-brand-slate dark:text-brand-slate-dark text-xs font-sans mt-0.5">
            GM / VP Engineering, Amdocs
          </p>
        </figcaption>
      </figure>
      <figure className="bg-brand-canvas dark:bg-brand-canvas-dark p-6">
        <blockquote className="text-brand-charcoal dark:text-brand-charcoal-dark/80 text-base font-sans leading-relaxed mb-4">
          <p>
            &ldquo;Most professionals are usually either individual star performers,
            while others are those who help fellow team members along the way.
            Ankur, is both!&rdquo;
          </p>
        </blockquote>
        <figcaption>
          <p className="text-brand-navy dark:text-brand-charcoal-dark font-semibold font-sans text-sm">
            Syed Anwaarullah
          </p>
          <p className="text-brand-slate dark:text-brand-slate-dark text-xs font-sans mt-0.5">
            IoT Engineer — mentee at Convergys, 2010
          </p>
        </figcaption>
      </figure>
      <figure className="bg-brand-canvas dark:bg-brand-canvas-dark p-6">
        <blockquote className="text-brand-charcoal dark:text-brand-charcoal-dark/80 text-base font-sans leading-relaxed mb-4">
          <p>
            &ldquo;He is a hardworking, dedicated, and outstanding technical mentor
            with a rich experience. He is innovative, organized as well as
            helpful.&rdquo;
          </p>
        </blockquote>
        <figcaption>
          <p className="text-brand-navy dark:text-brand-charcoal-dark font-semibold font-sans text-sm">
            Shyamendra Singh
          </p>
          <p className="text-brand-slate dark:text-brand-slate-dark text-xs font-sans mt-0.5">
            Engineering Manager, Amdocs — direct manager
          </p>
        </figcaption>
      </figure>
      <figure className="bg-brand-canvas dark:bg-brand-canvas-dark p-6">
        <blockquote className="text-brand-charcoal dark:text-brand-charcoal-dark/80 text-base font-sans leading-relaxed mb-4">
          <p>
            &ldquo;His methodical approach to solving critical situations and at the
            same time keeping the team&apos;s morale high is something to learn from
            him.&rdquo;
          </p>
        </blockquote>
        <figcaption>
          <p className="text-brand-navy dark:text-brand-charcoal-dark font-semibold font-sans text-sm">
            Parag Shah
          </p>
          <p className="text-brand-slate dark:text-brand-slate-dark text-xs font-sans mt-0.5">
            Senior Software Engineer, Broadcom
          </p>
        </figcaption>
      </figure>
    </div>
  </div>
</section>
```

---

### Section 6 — Talks & Sessions

```tsx
<section className="bg-brand-canvas dark:bg-brand-canvas-dark px-6 py-12 sm:py-16">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-2">
      Talks &amp; Sessions
    </h2>
    <p className="text-brand-slate dark:text-brand-slate-dark text-base font-sans mb-10">
      I share what I know publicly. Here are recordings from recent sessions.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="bg-brand-surface dark:bg-brand-surface-dark p-6">
        <h3 className="text-lg font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-2">
          Monitoring &amp; Observability
        </h3>
        <p className="text-brand-charcoal dark:text-brand-charcoal-dark/80 text-sm font-sans mb-4 leading-relaxed">
          Public training session delivered for Amdocs — a practical introduction
          to monitoring and observability practices.
        </p>
        <a
          href="https://www.youtube.com/watch?v=_9KhWrfFyR4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-amber dark:text-brand-amber-dark font-semibold text-sm font-sans transition-opacity hover:opacity-80"
        >
          Watch on YouTube →
        </a>
      </div>
      <div className="bg-brand-surface dark:bg-brand-surface-dark p-6">
        <h3 className="text-lg font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-2">
          Building CLIs with Go
        </h3>
        <p className="text-brand-charcoal dark:text-brand-charcoal-dark/80 text-sm font-sans mb-4 leading-relaxed">
          A hands-on session on CLI development using Golang — from basics to a
          working tool.
        </p>
        <a
          href="https://www.youtube.com/watch?v=A1N0iwjZ7JE"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-amber dark:text-brand-amber-dark font-semibold text-sm font-sans transition-opacity hover:opacity-80"
        >
          Watch on YouTube →
        </a>
      </div>
    </div>
  </div>
</section>
```

---

### Section 7 — CTA Footer

```tsx
<section className="bg-brand-navy dark:bg-brand-surface-dark px-6 py-16 sm:py-20">
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-white mb-8">
      Ready to move faster?
    </h2>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href="/services"
        className="inline-block bg-brand-amber dark:bg-brand-amber-dark text-brand-navy font-semibold px-8 py-3 font-sans transition-opacity hover:opacity-90"
      >
        Work with me →
      </Link>
      <Link
        href="/services"
        className="inline-block border-2 border-white text-white font-semibold px-8 py-3 font-sans transition-colors hover:bg-white/10"
      >
        See services →
      </Link>
    </div>
  </div>
</section>
```

---

## Step 2 — Create `e2e/about.spec.ts`

```ts
import { test, expect } from '@playwright/test'

test.describe('/about page', () => {
  test('page title contains About', async ({ page }) => {
    await page.goto('/about')
    await expect(page).toHaveTitle(/About/)
  })

  test('hero heading is visible', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('impact stats section visible', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByText('17+')).toBeVisible()
    await expect(page.getByText('Years in Engineering')).toBeVisible()
  })

  test('testimonial name visible', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByText('Yaniv Bigger')).toBeVisible()
  })
})
```

---

## Step 3 — Verify

```bash
npm run build
# fix any TypeScript or ESLint errors before proceeding

npm run dev
# in a second terminal:
npm run test:e2e
# all 4 about.spec.ts tests must pass
```

---

## Step 4 — Update Post-Execution Docs

**CHANGELOG** — prepend a new `## [YYYY-MM-DD] Prompt 006 — Full About Page` entry listing:
- Files created: `src/app/about/page.tsx`, `e2e/about.spec.ts`
- Files modified: `developer/phase-1-foundation/CHANGELOG.md`, `AI-REFERENCE.md`, `AI-SUMMARY.md`
- Decisions: content hardcoded (static site), no new shared components, semantic HTML throughout, employer never named

**AI-REFERENCE.md** — add two rows after the `src/app/page.tsx` row:
- `src/app/about/page.tsx` — About — 7-section full page: Hero, Impact Stats, Career Arc, Skills, Testimonials, Talks, CTA Footer; static server component, all content hardcoded
- `e2e/about.spec.ts` — 4 Playwright tests: title, H1, stats, testimonial name

**AI-SUMMARY.md** — add to Recent Completions:
`[YYYY-MM-DD] Prompt 006: Full About page — 7 sections, 4 E2E tests, prompt spec updated from placeholder to full implementation`

---

## End Deliverable

- `src/app/about/page.tsx` — full 7-section About page, responsive, dark mode throughout
- `e2e/about.spec.ts` — 4 tests pass (`npm run test:e2e`)
- `npm run build` passes clean
- `CHANGELOG.md`, `AI-REFERENCE.md`, `AI-SUMMARY.md` updated

---

## Post-Execution Notes (added 2026-06-07)

### CTA buttons disabled
The "Work with me" and "See services" CTA buttons in the hero section and bottom CTA section
have been **intentionally removed** — they link to `/services` and `/contact` which are not
yet built. Re-enable these CTAs when the following prompts are complete:
- Services page (prompt 007) → re-enable "See services" in hero and bottom CTA
- Contact page (prompt 016) → re-enable "Work with me" / "Book a session" in bottom CTA

### SAP naming exception
SAP **can** be named on the About page timeline only (LinkedIn already shows this publicly).
The rule "never name SAP in any file in this repo" applies to all other pages, blog posts,
and service descriptions. The About page career timeline (`timelineActs` array in `page.tsx`) is the sole exception.

### Timeline is 4 acts (not 3)
Act 3 = Amdocs alone (2020–2022), Act 4 = SAP (2022–present). Do not merge them.
