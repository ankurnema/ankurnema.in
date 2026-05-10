# Learnings — Prompt 002: Testing Infrastructure

> Discoveries made while setting up Vitest, Playwright, and Lighthouse CI.
> Each section explains what happened, why it happened, and what to do about it.

---

## Learning 1: Playwright's `passWithNoTests` Config Option Is Not in the TypeScript Types for v1.59.1

### What Happened

The config option `passWithNoTests: true` was added to `playwright.config.ts` to make
`npm run test:e2e` exit 0 when the `e2e/` directory has no test files. Running `npm run build`
failed with this TypeScript error:

```
./playwright.config.ts:6:3
Type error: No overload matches this call.
  Object literal may only specify known properties, and 'passWithNoTests' does not exist
  in type 'Config<...>'
```

### Why It Happened

> **Glossary for freshers:**
> - **TypeScript type definitions:** Descriptions of what properties a value can have.
>   When you write `defineConfig({ passWithNoTests: true })`, TypeScript checks that
>   `passWithNoTests` is a known property of the config object.
> - **CLI flag vs config option:** The same feature can be exposed both as a config-file
>   option AND as a command-line flag. They're independent — one being missing doesn't
>   mean both are missing.

Playwright 1.59.1's TypeScript type declarations (the `.d.ts` files that ship with the package)
don't include `passWithNoTests` as a property of `FullConfig`. This means TypeScript rejects it
even though the runtime might accept it.

The CLI flag equivalent, `--pass-with-no-tests`, is present and documented in `npx playwright test --help`.
It's the same feature, just accessed from the command line instead of the config file.

Additionally, because Next.js 16 type-checks ALL `*.ts` files in the project (not just files in
`src/`), the type error in `playwright.config.ts` surfaced during `npm run build` — not just
when running Playwright itself.

### What We Did

1. Removed `passWithNoTests: true` from `playwright.config.ts`
2. Added `--pass-with-no-tests` to the `test:e2e` npm script in `package.json`:
   ```json
   "test:e2e": "playwright test --pass-with-no-tests"
   ```

### The Rule to Remember

**If a Playwright config option is rejected as an unknown property by TypeScript, use the equivalent
CLI flag in the npm script instead.**

Check available flags with:
```bash
npx playwright test --help | grep -i "pass\|no-test"
```

---

## Learning 2: Next.js 16 Type-Checks All `*.ts` Files — Including Test Config Files

### What Happened

`npm run build` failed with a TypeScript error from `playwright.config.ts`. This was unexpected
because `playwright.config.ts` has nothing to do with the Next.js application itself — it's a
test tool config file.

### Why It Happened

> **Glossary for freshers:**
> - **TypeScript type check:** TypeScript reads your code and verifies that types are used
>   correctly. If a function expects a `string` and you pass a `number`, it will flag that.
> - **`include` in tsconfig.json:** Tells TypeScript which files to include in the type check.
>   `"**/*.ts"` means "every TypeScript file in the project, at any depth."

The project's `tsconfig.json` has:
```json
"include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ...]
```

`**/*.ts` is a glob that matches every `.ts` file in the project, including:
- `playwright.config.ts` at the root
- `vitest.config.ts` at the root
- Any future config files

Next.js runs `tsc --noEmit` as part of `npm run build` using this same config. So any type error
in any `*.ts` file — including tool configs — will fail the build.

This is not a bug in Next.js. It's the expected behaviour of `"include": ["**/*.ts"]`. The
question is whether to narrow it (exclude config files) or keep config files type-safe.

### What We Did

Kept config files type-safe — which is the correct approach. This means:
- Don't use Playwright config options that aren't in the TypeScript type definitions
- Don't use Vitest config options that aren't typed
- Use CLI flags as the workaround when a feature is missing from types

We did NOT change `tsconfig.json` to exclude these files — that would silently hide future
type errors in config files, which can cause subtle runtime misconfigurations.

### The Rule to Remember

**All `*.ts` files in the project root are type-checked by `npm run build`. Keep config files
type-safe — don't add properties that TypeScript flags as unknown.**

When a tool's config option is rejected, check if the CLI equivalent exists:
```bash
npx <tool> --help
```

---

## Learning 3: Playwright CLI `--pass-with-no-tests` Uses Kebab-Case, Not camelCase

### What Happened

When looking up how to fix the "no tests found" exit-code-1 issue, we tried
`--passWithNoTests` (camelCase), which is a common Node.js CLI convention. This returned:

```
error: unknown option '--passWithNoTests'
```

### Why It Happened

> **Glossary for freshers:**
> - **camelCase:** Writing compound words by capitalising each word after the first
>   (`passWithNoTests`). Common in JavaScript variable names.
> - **kebab-case:** Writing compound words with hyphens (`--pass-with-no-tests`).
>   Common in Unix/Linux CLI tools.

Playwright follows the Unix CLI convention of kebab-case for all flags. The config file
uses camelCase (`passWithNoTests`), but the CLI flag uses kebab-case (`--pass-with-no-tests`).
Both reference the same feature — different naming conventions for different contexts.

### The Rule to Remember

**Playwright CLI flags are kebab-case. If a camelCase flag is rejected, convert to kebab-case.**

camelCase config → kebab-case CLI:
- `passWithNoTests` → `--pass-with-no-tests`
- `forbidOnly` → `--forbid-only`
- `fullyParallel` → `--fully-parallel`
