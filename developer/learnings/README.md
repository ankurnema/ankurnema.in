# Learnings — ankurnema.in

> Things we discovered while actually building this project that weren't in the plan.
> Written for everyone — including people new to web development.

---

## What This Folder Is

When you build a real project, things don't always go exactly as planned. A package version turns
out to be incompatible. A tool gets renamed. A config format changes. You find a shortcut or a
gotcha that would have saved you an hour if you'd known it upfront.

This folder captures those discoveries. Every learning file is tied to a specific prompt so you
can trace it back to the exact work where it came from.

**Who should read this:**
- You (the developer) — before starting a new prompt, scan for relevant learnings
- AI coding agents — read the relevant file before executing a prompt in the same area
- Anyone studying this repo as a case study — this is where the "real" lessons live

---

## File Naming

```
NNN-short-description.md
```

`NNN` matches the prompt number it came from.

Examples:
- `001-scaffold-nextjs.md` — learnings from executing Prompt 001 (scaffolding)
- `018-cicd-workflows.md` — learnings from executing Prompt 018 (CI/CD)

---

## How to Add a Learning

After executing a prompt, if you discovered something surprising, add it here.

A good learning answers one of these:
- "What broke and why?"
- "What did we have to change from the original plan?"
- "What would have saved us time if we'd known it upfront?"
- "What assumption turned out to be wrong?"

**Do NOT add:**
- Things that went exactly as planned (those belong in CHANGELOG)
- Opinions or preferences
- Duplicate content that's already in an ADR

---

## Index

| File | Prompt | Summary |
|------|--------|---------|
| [001-scaffold-nextjs.md](001-scaffold-nextjs.md) | Prompt 001 | ESLint version incompatibility, `next lint` removal, flat config changes |
