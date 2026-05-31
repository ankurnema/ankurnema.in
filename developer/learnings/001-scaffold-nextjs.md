# Learnings — Prompt 001: Scaffold Next.js

> Discoveries made while scaffolding the Next.js 16 project.
> Each section explains what happened, why it happened, and what to do about it.

---

## Learning 1: ESLint 10 Does Not Work with Next.js 16

### What Happened

The pinned dependency table said to use ESLint 10.3.0. When we ran `npm run lint`, it crashed
with this error:

```
TypeError: Error while loading rule 'react/display-name': contextOrFilename.getFilename is not a function
```

### Why It Happened

> **Glossary for freshers:**
> - **ESLint:** A tool that reads your code and flags problems — wrong patterns, possible bugs,
>   style issues. Think of it as a spell-checker for code.
> - **eslint-plugin-react:** A set of ESLint rules specific to React (the library Next.js uses).
> - **Peer dependency:** A package that your package needs to exist alongside, but doesn't
>   install itself. Like "this plugin requires ESLint to already be installed."

`eslint-config-next` (Next.js's official ESLint config) bundles its own copy of `eslint-plugin-react`
inside its `node_modules/`. The bundled version is `7.37.5`, and its peer dependency requirement is:

```
"eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7"
```

Notice: it stops at `^9.7`. ESLint **10** is not in that list. ESLint 10 changed an internal API
(`context.getFilename()` was removed), and `eslint-plugin-react` 7.37.5 still calls it.

### What We Did

Downgraded ESLint to **9.39.4** (the latest ESLint 9 release). ESLint 9 is still fully supported
and actively maintained — it's not "old", just one major version behind.

Updated `PROMPT_TEMPLATE.md` to pin `eslint` at `9.39.4` instead of `10.3.0`, with a note explaining why.

### The Rule to Remember

**When using `eslint-config-next`, always use ESLint 9.x — not 10.x.**

Check the bundled `eslint-plugin-react` peer deps before upgrading ESLint:
```bash
cat node_modules/eslint-config-next/node_modules/eslint-plugin-react/package.json | grep '"eslint"'
```

---

## Learning 2: `next lint` Was Removed from the Next.js 16 CLI

### What Happened

The original plan was to add a `"lint": "next lint"` script to `package.json`. When we ran it,
Next.js returned:

```
Invalid project directory provided, no such directory: .../lint
```

It was treating `lint` as a directory path, not a subcommand — because `lint` is no longer a
valid Next.js CLI command.

### Why It Happened

> **Glossary for freshers:**
> - **CLI command:** A command you type in the terminal. `npm run lint` runs the `lint` entry
>   in your `package.json` scripts.
> - **Subcommand:** A verb after the main command. In `next build`, `build` is the subcommand.

Next.js 16 removed the `next lint` subcommand from its CLI. To confirm, run:

```bash
npx next --help
```

You'll see: `build`, `dev`, `start`, `info`, etc. — no `lint`.

In previous Next.js versions, `next lint` was a convenience wrapper that ran ESLint with
Next.js-specific configuration. In Next.js 16, the expectation is that you run ESLint directly.

### What We Did

Changed the `lint` script in `package.json` from:
```json
"lint": "next lint"
```
to:
```json
"lint": "eslint src/"
```

This runs ESLint directly on the `src/` folder. It uses `eslint.config.mjs` for configuration
(which includes all the Next.js rules via `eslint-config-next`), so you don't lose any rules.

### The Rule to Remember

**In Next.js 16+, lint script is `eslint src/` — not `next lint`.**

---

## Learning 3: `eslint-config-next` Now Exports Native Flat Config

### What Happened

Our original `eslint.config.mjs` used `FlatCompat` from `@eslint/eslintrc`:

```js
import { FlatCompat } from '@eslint/eslintrc'
const compat = new FlatCompat({ baseDirectory: __dirname })
const eslintConfig = [...compat.extends('next/core-web-vitals', 'next/typescript')]
```

This failed immediately because `@eslint/eslintrc` wasn't installed.

### Why It Happened

> **Glossary for freshers:**
> - **Flat config:** The new ESLint configuration format (ESLint v9+). Uses `eslint.config.mjs`
>   instead of `.eslintrc.json`. More flexible, more explicit.
> - **FlatCompat:** A compatibility bridge that lets old-style configs work in the new flat
>   config format. Needed when using plugins that haven't been updated yet.
> - **Native flat config:** A plugin that was updated to export configs in the new format
>   directly — no bridge needed.

The `FlatCompat` approach was correct for ESLint 9 when `eslint-config-next` was still using
the old format. But `eslint-config-next@16` now exports flat config arrays natively. You can
import them directly without any compatibility bridge.

The type signature shows this clearly:
```typescript
// eslint-config-next/dist/core-web-vitals.d.ts
declare const config: Linter.Config[];
export = config;
```

It IS a `Linter.Config[]` — the flat config format. No bridge needed.

### What We Did

Rewrote `eslint.config.mjs` to import the configs directly using `createRequire`
(needed because these are CommonJS exports inside an ES module file):

```js
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

const nextConfig = require('eslint-config-next/core-web-vitals')
const nextTypescript = require('eslint-config-next/typescript')

const eslintConfig = [...nextConfig, ...nextTypescript]

export default eslintConfig
```

### The Rule to Remember

**`eslint-config-next@16` exports native flat config — no `FlatCompat` or `@eslint/eslintrc` needed.**

Use `createRequire` in your `.mjs` file to import CommonJS flat config exports.

---

## Learning 4: `next build` Auto-Patches `tsconfig.json`

### What Happened

After `npm run build` completed successfully, `tsconfig.json` was different from what we wrote.
Next.js modified it automatically.

### What Changed

Two things were updated by Next.js:

**1. `jsx` setting changed:**
```json
// before
"jsx": "preserve"

// after (Next.js patched it)
"jsx": "react-jsx"
```

**2. New entry added to `include`:**
```json
// before
"include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"]

// after (Next.js added this)
"include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", ".next/dev/types/**/*.ts"]
```

### Why It Happened

> **Glossary for freshers:**
> - **tsconfig.json:** Configuration file for TypeScript. Tells the TypeScript compiler how to
>   check your code.
> - **jsx setting:** Tells TypeScript how to handle JSX (the HTML-like syntax in React components).
>   `react-jsx` means "use the modern React JSX transform" — you don't need to import React at
>   the top of every file.

Next.js's build step calls TypeScript and notices when `tsconfig.json` needs mandatory corrections
for Next.js to work properly. It patches the file automatically and tells you what it changed:

```
The following mandatory changes were made to your tsconfig.json:
    - jsx was set to react-jsx (next.js uses the React automatic runtime)
```

This is expected and correct behaviour. The patched `tsconfig.json` is better than what we wrote.

### The Rule to Remember

**Let Next.js patch `tsconfig.json` — don't fight it. Commit the patched version.**

If you see "mandatory changes were made to your tsconfig.json" in build output, that's normal.

---

## Learning 5: `npm audit` False Positives from Next.js Internal Dependencies

### What Happened

After `npm install`, we got:

```
2 moderate severity vulnerabilities
To address all issues (including breaking changes), run: npm audit fix --force
```

The suggestion looked alarming. But following it would have **downgraded Next.js to version 9.3.3** —
which is 7 years old and completely wrong.

### Why It Happened

> **Glossary for freshers:**
> - **npm audit:** A command that checks your installed packages for known security problems.
> - **Vulnerability:** A known security weakness in a package.
> - **Transitive dependency:** A dependency of a dependency. Your project doesn't install it
>   directly — a package you use installs it.

Next.js 16 bundles its own internal copy of `postcss` (an older version) deep inside its own
`node_modules`. That internal copy has a known XSS vulnerability. But:

1. It's an **internal** copy used only by Next.js's own build pipeline — not by your code
2. Your project's own `postcss` (installed at the top level) is version 8.5.14 — safe
3. The "fix" (`npm audit fix --force`) works by downgrading `next` itself to 9.3.3, which is nonsensical

This is a known limitation of how `npm audit` works — it can't distinguish between a vulnerability
in a package you use directly vs. one buried deep inside a framework's internals.

### What We Did

Nothing. We ignored these two vulnerabilities. They are in Next.js's internals, not in anything
our code touches. The only real fix would be a patch release from the Next.js team.

### The Rule to Remember

**Never run `npm audit fix --force` without reading what it will do.**
`--force` allows breaking changes. Always run `npm audit` first to read the report, then decide.

If a vulnerability is in `next/node_modules/postcss`, it's an internal Next.js concern — not yours.
