# Building ankurnema.in with AI: The Honest Numbers

> **Last updated:** 2026-05-09
> **Sessions logged:** 12
> **Current phase:** Phase v0.1 — Foundation (In Progress)
> **Pro plan:** Claude Pro — $20/month flat

---

I'm building my personal consulting site with Claude Code as the primary developer. Not as a gimmick — because I genuinely want to understand what AI-assisted development looks like when you measure it properly, not just vibe-check it.

This document tracks that. Real session data, real token estimates, real cost breakdown. When this repo becomes a blog post, this file is the source of truth.

---

## What I'm Actually Measuring

Three things matter here:

**Edit-to-Read ratio** — how many file edits the AI produces for every file it reads. If this number is above 1.0, the AI is spending more time building than exploring. Below 0.5 means it's lost, reading files to understand context it should already have. The reference system (CLAUDE.md, AI-REFERENCE.md, etc.) exists specifically to push this number up.

**Read/(Edit+Bash) ratio** — for every productive action, how many reads does it take? Lower is better. Industry baseline without structured context files: ~1.5–2.0. Meaning the AI reads 2 files for every line it writes. With a good reference system, this should drop below 0.5.

**Subscription value ratio** — what would this session have cost at Sonnet 4.6 API rates vs. what I actually pay on Pro? This tells me whether I'm extracting value from the subscription or wasting it on exploratory back-and-forth.

---

## How the Numbers Are Calculated

**Tokens:** Session transcript files (`.jsonl` in `~/.claude/projects/`) used as proxy.
- 1 byte of transcript ≈ 0.25 tokens
- Split assumed 70% input / 30% output (accurate for code-heavy sessions)

**API equivalent cost (Sonnet 4.6):**
- Input: $3.00 per million tokens
- Output: $15.00 per million tokens

**Pro subscription cost per session:**
- $20/month ÷ sessions that month
- If 10 sessions in a month → $2.00 per session opportunity cost

**Subscription value ratio:**
- API equivalent cost ÷ Pro monthly fee
- Below 1.0x = subscription not paying for itself yet (expected early on)
- Above 1.0x = you're extracting more value than you're paying for
- Above 5.0x = the reference system is working

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

| Metric | Value |
|--------|-------|
| Total transcript | 2.73 MB |
| Estimated tokens | ~716,000 |
| API equivalent (Sonnet 4.6) | ~$4.72 |
| Pro plan monthly | $20.00 |
| Subscription value ratio | **0.24x** |
| Edit-to-Read ratio | **1.20** |
| Read/(Edit+Bash) ratio | **0.57** |
| User corrections (estimated) | Low — planning sessions, few wrong-turns |

### Honest Read on These Numbers

A 0.19x subscription value ratio looks bad. It isn't — it's expected.

Pre-development planning sessions are read-heavy by nature. The AI is absorbing context (reading ADR templates, checking conventions, understanding the workspace) more than it's writing code. Planning has a low token-to-value output ratio. That's fine. You're paying for decisions and structure, not tokens.

The edit-to-read of 1.16 is healthy for this phase. The big ADR session (S04) hit 2.21 — that's what a well-structured coding session looks like. That number will be the benchmark when actual component work starts.

The real test is Phase v0.1. When Next.js gets scaffolded and components get built, the subscription value ratio should jump to 1.5x–3x, and edit-to-read should consistently stay above 1.5.

---

## Phase v0.1 — Foundation

> Status: In Progress

### Session Metrics

| Session | Size | Reads | Edits | Writes | Bash | Edit/Read | Delivered |
|---------|------|-------|-------|--------|------|-----------|-----------|
| S01 | 0.53 MB | 6 | 13 | 2 | 6 | 2.17 | Prompt 001: Scaffold Next.js (part 1) |
| S02 | 0.69 MB | 12 | 5 | 18 | 40 | 0.42 | Prompt 001: Scaffold Next.js (part 2 — npm install, build/lint verification) |
| S03 | 0.29 MB | 3 | 8 | 2 | 4 | 2.67 | Updated missed post-Prompt-001 docs (prompts/README.md, AI-SUMMARY.md × 2, AI-REFERENCE.md) |
| **Total** | **1.51 MB** | **21** | **26** | **22** | **50** | **1.24** | — |

### Aggregate Numbers

| Metric | Value |
|--------|-------|
| Total transcript | 1.51 MB |
| Estimated tokens | ~396,000 |
| API equivalent (Sonnet 4.6) | ~$2.61 |
| Pro plan monthly | $20.00 |
| Subscription value ratio | **0.13x** |
| Edit-to-Read ratio | **1.24** |
| Read/(Edit+Bash) ratio | **0.28** |

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

| Month | Sessions | Transcript | API Equiv. | Pro Cost | Value Ratio |
|-------|----------|------------|------------|----------|-------------|
| May 2026 | 13 | 4.24 MB | ~$7.34 | $20 | 0.37x |
| _Next month_ | — | — | — | $20 | — |

---

## What I'm Watching For

Three signals that tell me the reference system is working as coding scales up:

1. **Edit-to-Read climbing above 1.5** — means Claude is navigating the codebase from the reference files, not from exploratory reads
2. **Subscription value ratio crossing 1.0x** — means I'm extracting more than I'm paying. Phase v0.1 should get there
3. **Zero-correction sessions** — sessions where I type the prompt and don't intervene. These happen when CLAUDE.md conventions are specific enough that no clarification is needed

---

## How to Update This File

**After every AI session**, add a row to the relevant phase table:

```
| S0N | X.XX MB | R | E | W | B | E/R ratio | What was delivered |
```

To get the numbers:
1. Find the session file: `ls ~/.claude/projects/-Users-ankurnema-IdeaProjects-ankurnema-in/`
2. Check file size: `wc -c <file>.jsonl` → divide by 1,048,576 for MB
3. Count tool calls: `python3 -c "import json; ..."`  (see methodology note below)
4. Update the Running Totals row at the bottom of the phase table
5. Recalculate subscription value ratio if a new month started

**Full parse script** (run from terminal):

```bash
python3 -c "
import json, os, glob

project_dir = os.path.expanduser('~/.claude/projects/-Users-ankurnema-IdeaProjects-ankurnema-in/')
for f in sorted(glob.glob(project_dir + '*.jsonl')):
    data = [json.loads(l) for l in open(f) if l.strip()]
    counts = {}
    for entry in data:
        for block in entry.get('message', {}).get('content', []):
            if isinstance(block, dict) and block.get('type') == 'tool_use':
                name = block.get('name', '?')
                counts[name] = counts.get(name, 0) + 1
    size_mb = os.path.getsize(f) / 1_048_576
    print(f'{os.path.basename(f)[:8]}  {size_mb:.2f}MB  {counts}')
"
```

**Subscription value calculation:**

```python
transcript_bytes = <total bytes this month>
tokens = transcript_bytes * 0.25
api_cost = (tokens * 0.70 / 1_000_000 * 3) + (tokens * 0.30 / 1_000_000 * 15)
value_ratio = api_cost / 20  # Pro plan monthly
print(f"API equiv: ${api_cost:.2f} | Value ratio: {value_ratio:.2f}x")
```

---

## The Point of All This

The consulting pitch embedded in this data: **structured AI context files are infrastructure, not documentation overhead.** The 4 hours spent on CLAUDE.md and the AI reference system will pay back across every session for the lifetime of this project.

By the time this site ships, this document becomes the evidence base for that claim. A blog post that doesn't just say "AI is productive" but shows what productive actually looks like — session by session, token by token, ratio by ratio.

That's a more interesting post than another "I built X with ChatGPT in a weekend" story.

---

*Methodology: Claude Code session transcripts parsed from `~/.claude/projects/`. Token estimates use 0.25 tokens/byte. API rates: Sonnet 4.6 at $3/M input, $15/M output. Pro plan at $20/month. All numbers are estimates — actual token usage varies by context compression and caching.*
