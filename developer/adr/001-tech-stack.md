# ADR-001: Tech Stack — Next.js 16, TypeScript, Tailwind CSS, MDX

| Field | Value |
|-------|-------|
| **Status** | Accepted |
| **Date** | May 2026 |
| **Decided by** | Ankur Nema |

---

## Context

ankurnema.in needs to be a personal website that does three things:

1. **Portfolio** — show who Ankur is, what he's done, what services he offers
2. **Blog** — publish technical and career articles (SEO matters — Google needs to find them)
3. **Case study** — the repo itself is open-source so others can learn how a real project is planned
   and built using AI-assisted development

The stack needed to:
- Be fast to load (affects SEO rankings and visitor experience)
- Support server-side rendering (SSR) for SEO — pages should be readable by Google without
  running JavaScript
- Support a blog written in Markdown (easy to write, hard to mess up formatting)
- Allow fully custom interactive pages when needed (booking forms, service pages, etc.)
- Use a stack that is relevant in the real industry — since this is also a learning resource

> **Glossary for freshers:**
> - **SSR (Server-Side Rendering):** The page is built on the server before being sent to your browser.
>   Google can read it easily, and it loads fast.
> - **SSG (Static Site Generation):** Pages are pre-built at deploy time. Even faster than SSR.
> - **MDX:** Markdown + React components. Write blog posts like a Word doc, but embed React widgets
>   when you need them.
> - **App Router:** The new way to structure pages in Next.js 16. More powerful than the old way.

---

## Options Considered

### Option 1 — WordPress

The most popular website platform in the world. Powers ~40% of all websites.

| | Detail |
|--|--------|
| Good | Easy to manage without coding, thousands of themes and plugins |
| Bad | Needs frequent security updates, plugin conflicts are common, PHP-based |
| Bad | This repo is meant to be a code-first case study — WordPress is not code |
| Bad | Performance is inconsistent without heavy optimization |
| Verdict | Rejected |

---

### Option 2 — Hugo (Static Site Generator)

Hugo is a very fast static site generator written in Go. Popular for blogs and documentation sites.

| | Detail |
|--|--------|
| Good | Extremely fast builds, simple to set up, free hosting on GitHub Pages |
| Good | Pure static output — nothing to hack, very secure |
| Bad | Templates are written in Go's templating language — hard to customize for React developers |
| Bad | No React support — can't add interactive components to blog posts without workarounds |
| Bad | Less relevant to what the industry currently uses for product development |
| Verdict | Rejected — good for pure static blogs, not ideal for this use case |

---

### Option 3 — Astro

Astro is a modern static site builder that lets you mix different frameworks (React, Vue, Svelte).

| | Detail |
|--|--------|
| Good | Excellent performance scores by default |
| Good | Supports React components ("islands") where needed |
| Good | Great for content-heavy sites |
| Bad | Smaller community and ecosystem than Next.js |
| Bad | Less relevant in the job market compared to Next.js |
| Bad | Some Next.js-specific features (like App Router patterns) wouldn't apply here |
| Verdict | Rejected — strong alternative, but Next.js is the better learning investment |

---

### Option 4 — Next.js 16 + TypeScript + Tailwind CSS + MDX (Chosen)

Next.js is the most popular React framework. It's used by companies like Netflix, GitHub, Twitch,
and thousands of startups.

| | Detail |
|--|--------|
| Good | Created by Vercel — first-class support for all Next.js features |
| Good | App Router: modern patterns with Server Components, streaming, layouts |
| Good | Both SSR and SSG supported — best of both worlds |
| Good | MDX: blog posts in Markdown, but can embed React components when needed |
| Good | TypeScript: catches bugs before you run the code |
| Good | Tailwind CSS: styling as utility classes — fast to write, consistent results |
| Good | The most relevant stack in the industry — genuine learning value |
| Good | Huge ecosystem and community — answers to every question are easy to find |
| Neutral | More complex initial setup than Hugo/Astro |
| Verdict | Accepted |

---

## Decision

**Next.js 16 (App Router) + TypeScript + Tailwind CSS + MDX**

Each layer has a specific role:

| Layer | Choice | What it does |
|-------|--------|-------------|
| Framework | Next.js 16 (App Router) | Handles routing, SSR, SSG, API routes, image optimization |
| Language | TypeScript | Adds types to JavaScript — catches bugs before runtime |
| Styling | Tailwind CSS | Utility-first CSS — write styles as class names on elements |
| Blog format | MDX | Markdown files for blog posts, with React component support |
| Analytics | Google Analytics 4 | Track visitors, page views, traffic sources |

---

## Reasons

**Next.js 16 with App Router:**
The App Router (introduced in Next.js 13, stable in 15) is the modern way to build Next.js apps.
It uses React Server Components — components that render on the server, ship less JavaScript to
the browser, and load faster. It's what new Next.js projects should use.

**TypeScript:**
TypeScript prevents an entire category of bugs (wrong data types, undefined properties, missing
arguments) before you even run the code. It also makes the code easier to read because you can
see what type of data each function expects. The industry standard for production Next.js projects.

**Tailwind CSS:**
Instead of writing a separate CSS file, you add utility classes directly to your HTML elements
(`className="text-lg font-bold text-blue-600"`). Fast to write, easy to keep consistent, and the
output CSS file only includes styles you actually used (small file size).

**MDX:**
Blog posts are written in plain Markdown (readable, portable, version-controlled), but MDX allows
embedding React components when a post needs something interactive — a chart, a callout box, a
code playground. Write like a journalist, enhance like an engineer.

---

## Consequences

**Benefits:**
- Full control over every part of the site — no plugin constraints
- SEO-optimized by default (SSR + metadata APIs in Next.js 16)
- Blog posts are plain `.mdx` files in the repo — no database, no CMS login needed
- CI/CD pipeline deploys automatically on git push (no FTP, no manual upload)
- The stack is modern and relevant — this repo is a genuine learning resource for others

**Tradeoffs:**
- Requires Node.js and npm knowledge to set up locally
- Initial scaffolding takes more effort than a WordPress install
- TypeScript has a learning curve for developers new to typed languages
- Must keep `next`, `react`, and key packages updated as they release new versions

**Not affected:**
- Hosting choice is a separate decision — see [ADR-002](002-vercel-hosting.md)
- Domain management is unchanged — ankurnema.in stays on Hostinger

---

## Review Trigger

This decision is stable. Revisit only if:
- Next.js becomes unmaintained or loses significant industry adoption (very unlikely)
- A specific feature requirement arises that Next.js fundamentally cannot support
