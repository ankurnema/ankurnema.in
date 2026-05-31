---
description: Create a new MDX blog post stub with correct frontmatter — asks for title, category, audience, description, tags
model: haiku
allowed-tools: Write Bash(ls *)
---

Create a new MDX blog post stub in `src/content/blog/`.

**Arguments:** $ARGUMENTS

---

## Instructions

### Step 1 — Gather post details

Use AskUserQuestion to collect everything upfront:
1. **Title** — the post title (will be slugified for the filename)
2. **Category** — one of: `devops` / `career` / `mentoring` / `ai-tools` / `general`
3. **Target audience** — who is this written for? (e.g. "mid-level engineers moving into DevOps")
4. **Description** — one-line SEO description (appears in meta tags and blog index)
5. **Tags** — comma-separated list (e.g. `kubernetes, ci-cd, platform-engineering`)

### Step 2 — Derive the slug

Convert the title to a kebab-case slug:
- Lowercase all characters
- Replace spaces with hyphens
- Remove special characters except hyphens
- Example: "How I Moved to DevOps" → `how-i-moved-to-devops`

### Step 3 — Get today's date

Use today's date in YYYY-MM-DD format.

### Step 4 — Create the MDX file

Create `/Users/ankurnema/ankur-consulting/repo/ankurnema.in/src/content/blog/<slug>.mdx`:

```mdx
---
title: "<title>"
date: <YYYY-MM-DD>
category: <category>
description: "<description>"
tags: [<tag1>, <tag2>]
audience: "<target audience>"
draft: true
---

## Introduction

<!-- Write your introduction here -->

## <Main Section>

<!-- Main content -->

## Conclusion

<!-- Wrap up and call to action -->
```

Parse the tags string into an array (split on commas, trim whitespace).

### Step 5 — Confirm

Report: file created at `src/content/blog/<slug>.mdx`, slug used, and a reminder that `draft: true` keeps this post out of the public blog index until changed.
