# CLAUDE.md — Nousromancer

Claude Code should treat this file as execution guidance only. Project doctrine lives in `AGENTS.md`, root canon, and `docs/`.

## First reads

Before editing, read:

1. `AGENTS.md` — repo-local operating boundaries.
2. `MISSION.md`, `PHILOSOPHY.md`, `VISION.md` — root canon.
3. `docs/canon/doc-structure.md` — where doctrine and operational notes belong.
4. For UI/data work, `docs/functionality-data-contract.md` and `docs/architecture.md`.

## Working lane

- Work in `/home/mk/projects/nousromancer` on `zklw`.
- Verify `git rev-parse --show-toplevel` is `/home/mk/projects/nousromancer` before edits.
- Use repo-local Beads. Check `bd context`, inspect the current bead, and claim before implementation.
- Keep commits small and tied to a Bead ID when possible.

## Project boundary shorthand

Nousromancer is the Hermes-facing operator metaharness for Sylveste-grade work. It presents and stages operator action over Hermes dashboard/runtime data. It is not Sylveste, not Beads, not a governance layer, not a routing authority, and not the durable system of record.

Use verbs like `show`, `surface`, `orient`, `hint`, `prepare`, and `represent`. Avoid copy or code that implies Nousromancer can `govern`, `authorize`, `decide`, `certify`, or globally prioritize work unless an upstream contract explicitly grants that authority.

## Implementation cautions

- Prefer public dashboard SDK helpers such as `SDK.api.getStatus()` and `SDK.api.getSessions()` over ad hoc endpoint fetches.
- Preserve standard Hermes dashboard layout; do not add a public sidebar/cockpit shell unless a new design bead explicitly changes that direction.
- Treat `attention_state`, `attention_reason`, `response_target`, and `attention_evidence` as upstream evidence when present; otherwise keep fallback hints hedged.
- Never label a session `needs input`, `blocked on you`, or `highest priority` from local heuristics alone.
- Sanitize public copy: no raw private snowflakes, channel IDs, credential-bearing URLs, or non-public workstream names.
- Row-level DOM polish must rely on stable row/session hooks; suppress affordances when row identity is absent or stale.

## Verification

Docs-only changes:

```bash
git diff --check
```

Code/plugin changes:

```bash
node --check plugins/nousromancer-mission-control/dashboard/dist/index.js
node --test tests/*.mjs
bash -n scripts/install.sh
git diff --check
```

If a narrower test is more relevant, run it first, then broaden when the change touches shared plugin behavior.

## Closeout

Before handing back:

1. Verify repo status and intended diff.
2. Add a Beads note or close the Bead with concise evidence.
3. Push tracker state with `bd dolt push`.
4. Commit and push source/docs changes unless explicitly told to leave them local.
