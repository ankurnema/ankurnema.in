# ADR-010: Measure AI Efficiency from Real Usage Tokens, Not Transcript Bytes

**Status:** Accepted  
**Date:** 2026-05-31

## Context

The AI efficiency report (`docs/ai-efficiency-report.md`) originally estimated token counts
using `transcript_bytes × 0.25` with an assumed 70/30 input/output split. This was fragile:

- A single outlier session (S34, 21 MB transcript due to iterative PDF rendering) inflated
  the headline subscription value ratio from ~2x to ~3.89x — creating a caveat that undercut
  the credibility of the entire report.
- The byte proxy ignored prompt caching entirely. Claude Code `.jsonl` files contain real
  `usage` fields per assistant message: `input_tokens`, `output_tokens`,
  `cache_creation_input_tokens`, and `cache_read_input_tokens`.
- Cache read tokens bill at $0.30/M vs $3.00/M for uncached input — a 10× difference. A
  methodology that ignores this systematically under-counts the true API value extracted.
- The method gave no way to measure whether the reference system (CLAUDE.md, memory files,
  AI-REFERENCE.md) was actually working as context infrastructure.

## Decision

Replace the byte-proxy methodology with real `usage` token counts and cache-aware pricing:

1. **Source:** real `usage` fields from `.jsonl` assistant messages. No byte proxy.
2. **Pricing:** Sonnet 4.6 standard-tier conservative floor — $3/M uncached input, $15/M
   output, $3.75/M 5-min cache write, $6/M 1-hr cache write, $0.30/M cache read.
3. **New metric:** cache-hit rate (cache read tokens ÷ total input-side tokens) as the
   primary proof that the context-file infrastructure is working.
4. **Per-session rows:** stay as activity log (transcript MB + tool counts) — no per-session
   token reconstruction. Aggregate numbers come from the canonical script.
5. **Canonical script:** `scripts/efficiency-metrics.py` at the workspace root — takes a
   project dir glob and optional date filters, prints cache-hit rate, Sonnet-equiv cost, and
   subscription value ratio.

## Consequences

**Positive:**
- S34 outlier is neutralized — transcript bytes no longer drive cost estimates.
- Cache-hit rate (~93%) is the direct evidence for the core consulting thesis: structured
  context files compound across every session.
- Numbers are reproducible and defensible for public case study use.
- Combined practice-wide value ratio: **12.82x** (vs 3.89x byte-proxy) — more accurate and
  higher because it correctly accounts for 160M+ cache-read tokens at $0.30/M.

**Trade-off:**
- Per-session cost is no longer calculated at row level (only aggregate and monthly totals).
  This is acceptable — the per-row "Transcript MB" column serves as an activity indicator.

**Maintenance:**
- Re-verify Sonnet 4.6 pricing before citing externally — rates are a known-good baseline
  that should be checked against current Anthropic published rates.
- Script path: `scripts/efficiency-metrics.py` (workspace root), `../../scripts/` from this
  repo.
