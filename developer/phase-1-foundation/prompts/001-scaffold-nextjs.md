# Prompt 001 — Scaffold Next.js

## Read First
- `developer/phase-1-foundation/AI-CONTEXT.md` — phase orientation and phase-specific conventions
- `developer/phase-1-foundation/README.md` — deliverables 1 and 2 in detail
- `PROMPT_TEMPLATE.md` — Pinned Dependency Versions table
- `developer/adr/001-tech-stack.md` — technology choices rationale
- `developer/adr/003-nextjs-mcp-server.md` — `.mcp.json` specification
- `developer/adr/007-app-router.md` — App Router over Pages Router decision

## Scope
**In scope:**
- Run `npm show <pkg> version` for every package in the Pinned Dependency Versions table to verify pinned versions are still current; update the table in `PROMPT_TEMPLATE.md` if any version has drifted
- Initialize the Next.js 16 project in the repo root (or `src/` as appropriate per ADR-007) with exact pinned versions
- Configure Tailwind v4: CSS-first setup, `@tailwindcss/postcss` plugin, NO `tailwind.config.js`
- Configure ESLint 10 flat config via `eslint.config.mjs` (NOT `.eslintrc.json`)
- Configure Prettier 3.8 with `.prettierrc`
- Add `.nvmrc` with Node 22
- Create `next.config.ts` (TypeScript, not `.js`)
- Create `tsconfig.json` with strict mode and `src/` path aliases
- Create `.mcp.json` at repo root configuring `next-devtools-mcp` (per ADR-003)
- Add npm scripts: `dev` (Turbopack), `build` (no Turbopack), `lint`, `start`
- Add `.gitignore` appropriate for Next.js

**Out of scope:**
- Any pages, routes, or components (Prompt 002 onward)
- Testing libraries (Prompt 002)
- GitHub Actions workflows (Prompt 018)
- Branding/styling content (Prompt 003)

## End Deliverable
- `package.json` with all dependencies at pinned versions (verified with `npm show`)
- `next.config.ts`, `tsconfig.json`, `.nvmrc`, `.prettierrc`, `eslint.config.mjs` all present
- Tailwind v4 configured via CSS import and `@tailwindcss/postcss` — no `tailwind.config.js`
- `.mcp.json` at repo root with `next-devtools-mcp` configuration
- `npm run dev` starts the dev server without errors (Turbopack)
- `npm run build` produces a clean build
- `npm run lint` runs without errors
- `developer/phase-1-foundation/CHANGELOG.md` updated with this prompt's execution entry

## Prompt

You are executing Prompt 001 of Phase 1 Foundation for ankurnema.in.

Read these files before writing any code:
1. `developer/phase-1-foundation/AI-CONTEXT.md`
2. `developer/phase-1-foundation/README.md`
3. `PROMPT_TEMPLATE.md` (Pinned Dependency Versions table)
4. `developer/adr/001-tech-stack.md`
5. `developer/adr/003-nextjs-mcp-server.md`
6. `developer/adr/007-app-router.md`

**Task:** Scaffold the Next.js 16 project for ankurnema.in.

Step 1 — Version verification: Run `npm show <pkg> version` for every package in the Pinned Dependency Versions table in `PROMPT_TEMPLATE.md`. If any package has a newer version than pinned, update the table in `PROMPT_TEMPLATE.md` before installing. Document any version changes in CHANGELOG.

Step 2 — Scaffold: Initialize the Next.js 16 project using the (verified/updated) pinned versions. Use the `src/` directory layout and App Router. Enable TypeScript 6. Do NOT use the Next.js CLI wizard — install packages explicitly so versions are exact.

Step 3 — Configuration files: Create all required config files:
- `next.config.ts` — TypeScript config, MDX support via `@next/mdx`
- `tsconfig.json` — strict mode, `src/` path alias (`@/*` → `./src/*`)
- `.nvmrc` — Node 22
- `eslint.config.mjs` — ESLint 10 flat config using `eslint-config-next`
- `.prettierrc` — Prettier 3.8 config (singleQuote, semi, tabWidth 2)
- Tailwind v4 CSS import in `src/app/globals.css` with `@import "tailwindcss"` and `@tailwindcss/postcss` in `postcss.config.js` (or `postcss.config.mjs`) — NO `tailwind.config.js`
- `.mcp.json` at repo root — `next-devtools-mcp` configuration per ADR-003

Step 4 — Verify: Run `npm run dev`, `npm run build`, `npm run lint` and confirm all pass. Fix any errors before proceeding.

Step 5 — Update CHANGELOG: Add an entry to `developer/phase-1-foundation/CHANGELOG.md` for today's date, listing what was created/modified and any version drift discovered.
