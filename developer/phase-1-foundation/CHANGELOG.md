# CHANGELOG — Phase 1: Foundation

## [2026-05-09] Prompt 001 — Scaffold Next.js

- Verified all 17 package versions against pinned table in PROMPT_TEMPLATE.md; all matched except ESLint (see below)
- Version drift found: ESLint 10.3.0 → downgraded to 9.39.4 (ESLint 10 incompatible with eslint-plugin-react bundled by eslint-config-next@16.2.6; that plugin only supports eslint ^9.7)
- Updated PROMPT_TEMPLATE.md: corrected ESLint version to 9.39.4 and added explanatory note
- Behaviour change found: `next lint` removed from Next.js 16 CLI; lint script now calls `eslint src/` directly
- ESLint config updated from FlatCompat pattern to native flat config (eslint-config-next 16 exports flat config arrays directly, no @eslint/eslintrc needed)
- Created: `package.json` with exact pinned versions (no CLI wizard)
- Ran: `npm install`
- Created: `next.config.ts`, `tsconfig.json`, `.nvmrc`, `.prettierrc`
- Created: `eslint.config.mjs` (ESLint 9 flat config, native eslint-config-next)
- Created: `postcss.config.mjs` (Tailwind v4, @tailwindcss/postcss, no autoprefixer)
- Created: `src/app/globals.css` (Tailwind v4 CSS-first, `@import "tailwindcss"`)
- Created: `src/app/layout.tsx`, `src/app/page.tsx` (minimal stubs for build)
- Created: `.mcp.json` at repo root (next-devtools-mcp per ADR-003)
- Next.js build auto-updated `tsconfig.json`: `jsx` → `react-jsx`, added `.next/dev/types/**/*.ts` to include
- Verified: `npm run lint` exits 0
- Verified: `npm run build` produces clean build (static `/` and `/_not-found`)
- Verified: `npm run dev` starts Turbopack dev server on port 3000, `GET / 200`
