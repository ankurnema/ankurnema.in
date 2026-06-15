# Prompt 004a — Header & Footer Redesign

**Phase:** 1 — Foundation  
**Extends:** Prompt 004 (root layout)  
**Status:** ✅ Done [2026-06-14]

---

## Goal

The site grew from a "coming soon" page to a full consulting hub (Home, About, Services +
5 sub-pages) but header and footer never kept up. Visitor had no way to navigate between
pages. Goal: professional, attractive, fully-navigable chrome.

**Design direction (user-approved):**
1. Header: sticky-glass + nav + Services dropdown + "Book a call" CTA
2. Footer: rich multi-column (brand · Explore · Services · Connect) + bottom bar
3. Services in nav: dropdown listing all 5 + "View all services →"
4. Mobile: hamburger → full-screen overlay menu

---

## Files Created

- `src/lib/nav.ts` — typed nav config (navLinks, serviceLinks, socialLinks, siteEmail, cta, repoUrl)
- `src/components/Header.tsx` — `'use client'` sticky-glass header with dropdown + mobile menu
- `src/components/Footer.tsx` — server component 4-column footer

## Files Modified

- `src/app/layout.tsx` — replaced inline header/footer with `<Header />` + `<Footer />`

---

## Key Decisions

- All nav content in `src/lib/nav.ts` (repo rule: no hardcoded nav in components)
- CTA `href` = `mailto:ankur@ankurnema.in` (matches existing convention; swap to Cal.com booking in v0.3)
- `repoUrl` in footer supports the open-source case-study angle
- `useEffect` for closing menus on route change removed (lint rule `react-hooks/set-state-in-effect`); rely on `onClick` handlers on all nav links instead — see learning 004a

---

## Verification

- Playwright screenshots: desktop light/dark, Services dropdown open, mobile menu open — all pass
- `npm run lint` — clean
- `npm run build` — clean (10/10 static routes)
