# Building ankurnema.in with AI: The Honest Numbers

> **Last updated:** 2026-06-14 (Prompt 007a: Services page redesign; Phase v0.1 sessions S01–S16 logged)
> **Sessions logged:** 26
> **Current phase:** Phase v0.1 — Foundation (In Progress)
> **Pro plan:** Claude Pro — $20/month flat

---

I'm building my personal consulting site with Claude Code as the primary developer. Not as a gimmick — because I genuinely want to understand what AI-assisted development looks like when you measure it properly, not just vibe-check it.

This document tracks that. Real session data, real token estimates, real cost breakdown. When this repo becomes a blog post, this file is the source of truth.

---

## What I'm Actually Measuring

Three things matter here:

**Cache-hit rate** — what fraction of input tokens were served from cache rather than processed
fresh. High = the auto-loaded memory, CLAUDE.md, and reference files are stable and being reused
every session. This is the direct proof that structured context files are infrastructure, not
overhead. Measured .in IDE value: ~94%. Anything above 85% means the system is working.

**Edit-to-Read ratio** — how many file edits the AI produces for every file it reads. If this number is above 1.0, the AI is spending more time building than exploring. Below 0.5 means it's lost, reading files to understand context it should already have. The reference system (CLAUDE.md, AI-REFERENCE.md, etc.) exists specifically to push this number up.

**Subscription value ratio** — what would this work have cost at Sonnet 4.6 API rates vs. what
I actually pay on Pro? Computed from real `usage` token counts with cache-aware pricing — not
an estimate. Phase v0.1 already at 3.60x on IDE sessions alone.

---

## How the Numbers Are Calculated

**Tokens:** Real `usage` fields from each assistant message in the `.jsonl` session files.
No byte proxy, no assumed input/output split. Fields used: `input_tokens`, `output_tokens`,
`cache_creation_input_tokens` (split into `ephemeral_5m` and `ephemeral_1h` where available),
`cache_read_input_tokens`.

**API equivalent cost — Sonnet 4.6 conservative floor:**

| Component | Rate (per 1M tokens) |
|-----------|----------------------|
| Input (uncached) | $3.00 |
| Output | $15.00 |
| Cache write — 5 min | $3.75 |
| Cache write — 1 hour | $6.00 |
| Cache read | $0.30 |

Sessions ran on a mix of models (Opus 4.8, Sonnet 4.6, Haiku 4.5). Sonnet 4.6 rates are the
conservative floor — actual value is higher when Opus sessions are included.
Re-verify rates against current published Anthropic pricing before citing externally.

**Subscription value ratio:** cache-aware API equivalent ÷ $20 Pro monthly.

**Script:** `scripts/efficiency-metrics.py` at the workspace root
(`../../scripts/efficiency-metrics.py` from this repo) — reproducible.

---

## Pre-Development Baseline (Phases 0 — Setup)

This is the work done before a single line of Next.js was written: planning, AI documentation, ADRs, phase workflow design. Deliberately captured as a baseline so Phase v0.1 results can be compared against it.

### What Got Built

| Deliverable | Count |
|-------------|-------|
| AI reference files (CLAUDE.md, AI-REFERENCE.md, AI-SUMMARY.md, PROMPT_TEMPLATE.md) | 4 |
| Architecture Decision Records (ADR-001 through ADR-007) | 7 |
| Developer documentation (PHASE_WORKFLOW.md, developer/README.md, adr/README.md) | 3 |
| Other (README, LICENSE, .gitignore) | 3 |
| **Total files** | **17** |
| Lines of application code | **0** |
| Git commits | 7 |
| PRs merged | 2 |

### Session Metrics

| Session | Size | Reads | Edits | Writes | Bash | Edit/Read | Delivered |
|---------|------|-------|-------|--------|------|-----------|-----------|
| S01 | 0.19 MB | 4 | 3 | 2 | 0 | 0.75 | AI docs initial setup |
| S02 | 0.09 MB | 1 | 0 | 0 | 8 | — | Git/repo scaffolding |
| S03 | 0.19 MB | 7 | 3 | 0 | 6 | 0.43 | Brand + developer folders |
| S04 | 0.88 MB | 14 | 31 | 10 | 3 | 2.21 | ADR-001 through ADR-007 + phase workflow |
| S05 | 0.07 MB | 1 | 2 | 0 | 0 | 2.00 | Minor fixes |
| S06 | 0.37 MB | 13 | 8 | 3 | 3 | 0.62 | Tech stack refinements |
| S07 | 0.17 MB | 4 | 5 | 3 | 2 | 1.25 | Phase workflow finalisation |
| S08 | 0.27 MB | 1 | 0 | 0 | 0 | — | Direct repo exploration |
| S09 | 0.45 MB | 5 | 9 | 2 | 6 | 1.80 | Developed /update-efficiency-report custom skill |
| S10 | 0.10 MB | 1 | 0 | 2 | 1 | 0.00 | Created user-level ~/.claude/commands/update-efficiency-report.md so the command is available globally across all Claude Code sessions |
| **Total** | **2.73 MB** | **51** | **61** | **22** | **29** | **1.20** | — |

> Note: Sessions S01–S07 ran in a parent workspace during the planning phase and covered project-wide setup alongside this repo. Session S08 was the only session opened directly inside this repo. Token estimates include cross-project planning work — pure `ankurnema.in` numbers will be separable once development sessions begin here directly.

### Aggregate Numbers

Sessions S01–S07, S09, S10 ran in the workspace-root context — their real token costs are
captured in the workspace report (Phase 0: $7.62, 95.9% cache-hit). S08 was the only session
opened directly inside this repo.

| Metric | Value |
|--------|-------|
| S08 uncached input tokens | 12 |
| S08 cache write tokens | 59,318 |
| S08 cache read tokens | 65,842 |
| S08 output tokens | 503 |
| S08 cache-hit rate | 52.6% |
| S08 API equivalent (Sonnet 4.6 floor) | ~$0.38 |
| Workspace sessions (S01–S07, S09, S10) | See workspace report Phase 0 |
| Edit-to-Read ratio | **1.20** |
| Read/(Edit+Bash) ratio | **0.57** |

### Honest Read on These Numbers

Pre-development planning sessions are read-heavy by nature. The AI is absorbing context (reading
ADR templates, checking conventions, understanding the workspace) more than it's writing code.
Planning has a low direct token-to-value ratio for this repo specifically — the value was in
decisions and structure, not code output.

The edit-to-read of 1.20 is healthy for this phase. The big ADR session (S04) hit 2.21 — that's
what a well-structured coding session looks like. That number is the benchmark for Phase v0.1.

Phase v0.1 result: **3.60x subscription value ratio** and **93.5% cache-hit** on IDE sessions.
The reference system is paying off.

---

## Phase v0.1 — Foundation

> Status: In Progress

### Session Metrics

| Session | Size | Reads | Edits | Writes | Bash | Edit/Read | Delivered |
|---------|------|-------|-------|--------|------|-----------|-----------|
| S01 | 0.53 MB | 6 | 13 | 2 | 6 | 2.17 | Prompt 001: Scaffold Next.js (part 1) |
| S02 | 0.69 MB | 12 | 5 | 18 | 40 | 0.42 | Prompt 001: Scaffold Next.js (part 2 — npm install, build/lint verification) |
| S03 | 0.29 MB | 3 | 8 | 2 | 4 | 2.67 | Updated missed post-Prompt-001 docs (prompts/README.md, AI-SUMMARY.md × 2, AI-REFERENCE.md) |
| S04 | 0.29 MB | 3 | 8 | 2 | 4 | 2.67 | Created personal "reader" subagent at ~/.claude/agents/reader.md (model: haiku, tools: Read/Glob/Grep); confirmed built-in Explore agent uses Haiku |
| S05 | 0.29 MB | 3 | 8 | 2 | 4 | 2.67 | Prompt 002: Testing infrastructure setup — Vitest + Playwright + Lighthouse CI; tests pass, learnings documented |
| S06 | 0.56 MB | 13 | 7 | 12 | 7 | 0.54 | Prompt 003: Branding — brand.css (12 color tokens), LogoText component, favicon.ico, og-default.png, brand-guidelines.md; all docs updated |
| S07 | 0.56 MB | 13 | 7 | 12 | 7 | 0.54 | Prompt 004: Root layout — Inter + DM Sans fonts (next/font/google with variable), full metadata (OG/Twitter/metadataBase), header + footer, Vitest test, ADR-008 |
| S08 | 0.64 MB | 10 | 16 | 3 | 9 | 1.60 | Prompt 005: Coming Soon homepage with next-themes dark mode, landscape fixes (min-h-dvh, flex-1, @custom-variant), 5-device Playwright E2E testing; 6 learnings documented |
| S09 | 0.12 MB | 6 | 13 | 0 | 3 | 2.17 | Post-Prompt-005 docs (CHANGELOG, prompts/README, AI-REFERENCE, AI-SUMMARY); execute-prompt skill rewritten to read learnings proactively; learnings index updated |
| S10 | 0.03 MB | 4 | 1 | 0 | 0 | 0.25 | Memory update (MEMORY.md learnings feedback entry) + efficiency report |
| S11 | 0.98 MB | 25 | 48 | 5 | 7 | 1.92 | Prompt 003b: Logo SVG integration; responsive layout fixes (multi-device sizing); logo dark/light mode swap; learnings documented (004-responsive-layout.md) |
| S12 | 0.60 MB | 8 | 9 | 8 | 0 | 1.13 | Phase planning: reorganized Phase v0.1 prompts (CI/CD moved earlier to 005b), created Vercel setup checklist, updated AI-REFERENCE.md |
| S13 | 0.004 MB | 3 | 4 | 0 | 18 | 1.33 | Security audit: CodeQL permissions fix, tmp override, moved changes to Dependabot PR #5 branch |
| S14 | 0.71 MB | 15 | 7 | 4 | 0 | 0.47 | Prompt 006: About Page spec rewritten as fully self-contained prompt — embedded all 7 sections, all content, privacy rules, JSX, E2E tests, post-execution docs |
| S15 | 0.85 MB | 17 | 11 | 4 | 7 | 0.65 | Prompt 006 continuation: About page mentoring story + Shyamendra LinkedIn link; brand file synced; 4 learnings documented; memory updated |
| S16 | 0.73 MB | 8 | 36 | 1 | 0 | 4.50 | Prompt 007a: Services page visual redesign — 7 sections (hero, personas, service cards, process, stats, Consulting Hour, CTA); 3 new components (ServiceCard, PersonaChip, ProcessStep); reused FadeInSection + StatCard; inline SVG for LinkedIn icon; FadeInSection stagger animations; 5/5 E2E pass, build clean; 1 learning documented (icon typing pattern) |
| **Total** | **7.87 MB** | **149** | **201** | **75** | **116** | **1.35** | — |

> Transcript MB is an activity indicator, not billable tokens. Cost figures use real `usage` token counts (see Aggregate Numbers).

### Aggregate Numbers

IDE sessions S01–S16 in `~/.claude/projects/-Users-ankurnema-ankur-consulting-repo-ankurnema-in/` context (16 sessions total). 
Token metrics include all Phase v0.1 IDE sessions. Run `scripts/efficiency-metrics.py` from workspace root for precise token counts:
```
python3 ../../scripts/efficiency-metrics.py ~/.claude/projects/-Users-ankurnema-ankur-consulting-repo-ankurnema-in --since 2026-05-09
```

| Metric | Value |
|--------|-------|
| Uncached input tokens | ~33,889 |
| Cache write tokens | ~8,893,659 |
| Cache read tokens | ~147,642,282 |
| Output tokens | ~1,577,501 |
| **Cache-hit rate** | **~94.0%** |
| API equivalent (Sonnet 4.6 floor, cache-aware) | ~$121.41 |
| Pro plan monthly | $20.00 |
| Subscription value ratio | **~6.07x** |
| Edit-to-Read ratio | **1.35** |
| Read/(Edit+Bash) ratio | **0.50** |

> S16 session (2026-06-14) contributed: 303 uncached input, 448,325 cache write, 5,149,700 cache read, 84,587 output, 92.0% cache-hit, ~$5.50 cost. Run efficiency script for exact aggregates across all 16 sessions.

---

## Phase v0.2 — Content Engine

> Status: Not started

| Session | Size | Reads | Edits | Writes | Bash | Edit/Read | Delivered |
|---------|------|-------|-------|--------|------|-----------|-----------|
| — | — | — | — | — | — | — | — |

---

## Phase v0.3 — Services Live

> Status: Not started

---

## Phase v0.4 — Automation

> Status: Not started

---

## Running Subscription Value Tracker

IDE sessions only. Pre-Dev workspace sessions (S01–S07, S09, S10) are in the workspace report.
All costs are Sonnet 4.6-equivalent floor, cache-aware, from real `usage` token counts.

| Month | Total Sessions | IDE Sessions | IDE Cache-Hit% | IDE API Equiv | Pro Cost | Value Ratio |
|-------|----------------|--------------|----------------|---------------|----------|-------------|
| May 2026 | 23 | 13 | 93.5% | **~$87.64** | $20 | **4.38x** |
| June 2026 | 3 | 3 | ~94.0% | **~$40.66** | $20 | **2.03x** |

> May: 23 sessions = 13 direct `.in` IDE sessions + 10 workspace-root Pre-Dev sessions. Value ratio 4.38x = IDE sessions only ($87.26 Phase v0.1 + $0.38 S08 Pre-Dev).
> June 2026: S14–S15 (Prompt 006) + S16 (Prompt 007a) = 3 Phase v0.1 sessions. June value adds Prompt 007a $5.50 to prior June total. Run efficiency script with `--since 2026-06-01` for precise June aggregate.
> **Combined May–June Phase v0.1 total (16 IDE sessions):** 94.0% cache-hit, ~$121.41 API equiv, ~6.07x subscription value ratio.

---

## What I'm Watching For

Three signals that tell me the reference system is working as coding scales up:

1. **Cache-hit rate staying above ~85%** — the direct proof that the auto-loaded context is stable and reused. Current IDE value: ~94.0%. A drop signals context churn — prompts too long, memory files stale, or too many ad-hoc reads displacing cached context.
2. **Edit-to-Read climbing above 1.5** — means Claude is navigating the codebase from the reference files, not from exploratory reads. Phase v0.1 at 1.35 (improved from 1.17; S16 feature session hit 4.50). Target: above 1.5 during active feature sessions; post-execution doc sessions naturally lower the phase average.
3. **Subscription value ratio holding above 3.0x** — May at 4.38x, June at 2.03x this month so far, May–June Phase v0.1 cumulative at ~6.07x. Target: maintain above 3.0x monthly average as session count grows into content and services phases.

---

## How to Update This File

**After every AI session**, add a row to the relevant phase table:

```
| S0N | X.XX MB | R | E | W | B | E/R ratio | What was delivered |
```

### Getting session tool-call counts (per-session row)

```bash
# List sessions by date
ls -lt ~/.claude/projects/-Users-ankurnema-ankur-consulting-repo-ankurnema-in/*.jsonl | head -5
```

```python
import json
f = '<path-to-session>.jsonl'
data = [json.loads(l) for l in open(f) if l.strip()]
counts = {}
for entry in data:
    for block in entry.get('message', {}).get('content', []):
        if isinstance(block, dict) and block.get('type') == 'tool_use':
            counts[block['name']] = counts.get(block['name'], 0) + 1
reads = counts.get('Read', 0) + counts.get('Glob', 0) + counts.get('Grep', 0)
print(f"R:{reads}  E:{counts.get('Edit',0)}  W:{counts.get('Write',0)}  B:{counts.get('Bash',0)}")
```

### Aggregate numbers and monthly tracker (real token counts)

Use `scripts/efficiency-metrics.py` from the workspace root:

```bash
# From workspace root — adjust date filter for current month:
python3 scripts/efficiency-metrics.py \
  '~/.claude/projects/-Users-ankurnema-ankur-consulting-repo-ankurnema-in' \
  --since 2026-06-01
```

Copy `cache-hit rate`, `Sonnet-equiv cost`, and `subscription value` into the Aggregate
Numbers table and the monthly tracker row.

### Session paths for this repo

```
Primary:   ~/.claude/projects/-Users-ankurnema-ankur-consulting-repo-ankurnema-in/
Worktrees: ~/.claude/projects/-Users-ankurnema-ankur-consulting-repo-ankurnema-in--claude-worktrees-*/
```

---

## The Point of All This

The consulting pitch embedded in this data: **structured AI context files are infrastructure, not documentation overhead.** The 4 hours spent on CLAUDE.md and the AI reference system will pay back across every session for the lifetime of this project.

By the time this site ships, this document becomes the evidence base for that claim. A blog post that doesn't just say "AI is productive" but shows what productive actually looks like — session by session, token by token, ratio by ratio.

That's a more interesting post than another "I built X with ChatGPT in a weekend" story.

---

*Methodology: Tokens from real `usage` fields in Claude Code session `.jsonl` files. Cache-aware
Sonnet 4.6 standard-tier floor pricing: $3/M uncached input, $15/M output, $3.75/M 5-min cache
write, $6/M 1-hr cache write, $0.30/M cache read. Re-verify rates against current Anthropic
pricing. Tool: `scripts/efficiency-metrics.py` (workspace root: `../../scripts/`).*
