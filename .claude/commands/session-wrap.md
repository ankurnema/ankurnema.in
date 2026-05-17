---
description: End-of-session cleanup — counts tool calls from the latest session, updates docs/ai-efficiency-report.md, refreshes memory if phase state changed
model: haiku
allowed-tools: Read Write Edit Bash(ls *) Bash(find *) Bash(python3 *) Bash(date *) Bash(wc *)
---

Run end-of-session cleanup: efficiency report + memory update.

---

## Latest session files (sub-repo context)

!`ls -lt ~/.claude/projects/-Users-ankurnema-ankur-consulting-repo-ankurnema-in/*.jsonl 2>/dev/null | head -5 || echo "No session files found at sub-repo path"`

## Latest session files (parent workspace fallback)

!`ls -lt ~/.claude/projects/-Users-ankurnema-ankur-consulting/*.jsonl 2>/dev/null | head -3`

## Current efficiency report (last 35 lines)

!`tail -35 /Users/ankurnema/ankur-consulting/repo/ankurnema.in/docs/ai-efficiency-report.md`

## Current project-state memory

!`cat ~/.claude/projects/-Users-ankurnema-ankur-consulting-repo-ankurnema-in/memory/project-state.md 2>/dev/null || echo "No sub-repo memory found — check parent workspace memory"`

---

## Instructions

### Step 1 — Identify the latest session file

From the file listings above, pick the most recent `.jsonl` file. Prefer the sub-repo path; fall back to parent workspace path.

Get the file size in MB from the `ls -lt` output.

### Step 2 — Count tool calls

Run this script, substituting the full path to the session file:

```bash
python3 -c "
import json
f = '<path-to-session>.jsonl'
data = [json.loads(l) for l in open(f) if l.strip()]
counts = {}
for entry in data:
    for block in entry.get('message', {}).get('content', []):
        if isinstance(block, dict) and block.get('type') == 'tool_use':
            name = block.get('name', '?')
            counts[name] = counts.get(name, 0) + 1
print(counts)
"
```

Derive:
- **Reads** = `Read` count
- **Edits** = `Edit` count
- **Writes** = `Write` count
- **Bash** = `Bash` count
- **Edit/Read ratio** = Edits ÷ Reads, formatted as `X.XX` (show `—` if Reads = 0)

### Step 3 — Determine what was delivered

From the session context (what was built/changed), write a short 5–10 word description.
Example: "Added 9 dev workflow skills to .claude/commands"

### Step 4 — Append row to efficiency report

Read the current efficiency report to find:
- The active phase table (look for the most recent phase section)
- The next session number (count existing S0N rows in that table, add 1, zero-pad to 2 digits → S01, S02, ... S15, etc.)

Get today's date: `date +%Y-%m-%d`

Append this row to the active phase's session table:
```
| S<NN> | <X.XX> MB | <reads> | <edits> | <writes> | <bash> | <edit/read> | <delivered> |
```

Update at the top of the file:
- **Last updated:** today's date
- **Sessions logged:** increment by 1

### Step 5 — Refresh memory if phase state changed

Compare the phase state in the CHANGELOG.md of the active phase against what's in project-state.md memory.

If any prompts moved to Done this session that aren't reflected in memory:
- Read `~/.claude/projects/-Users-ankurnema-ankur-consulting-repo-ankurnema-in/memory/project-state.md`
- Move those items from **Pending** to **Done**
- Update **Last updated** date

If no changes, skip this step.

### Step 6 — Report

Output one summary block:
```
Session: S<NN> | <size> MB | <reads>r <edits>e <writes>w <bash>b | Edit/Read: <ratio>
Delivered: <description>
Efficiency report: updated (docs/ai-efficiency-report.md)
Memory: <updated with X items / no changes needed>
```
