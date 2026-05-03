# Nousromancer Roadmap

Status: canonical project-docs spine for `nousrmncr-lr8.8`. This roadmap sequences work; Beads remains the live task source of truth.

## Current state

Nousromancer has moved past the original hackathon-polish lane. The durable current shape is:

- root mission/philosophy/vision canon exists;
- public theme/plugin install path works;
- Now Bar and Sessions-row affordances consume Hermes dashboard data;
- explicit attention contract fields are preferred when present;
- fallback attention hints remain hedged;
- functionality lane `nousrmncr-t0q` is closed;
- typography/design/doctrine lane `nousrmncr-lr8` remains open for future product/design increments.

## Roadmap principles

1. **Truth before drama.** Do not make stronger attention claims than the data supports.
2. **Layer discipline.** Keep durable truth, governance, provenance, and routing authority in upstream layers.
3. **Public-safe by default.** Public dashboard copy should not expose private project handles, raw Discord snowflakes, or credential-bearing paths.
4. **Operator usefulness over cockpit sprawl.** Prefer small surfaces that make pickup easier.
5. **Promotion by evidence.** Promote UI hints into canon only after contracts, ownership, failure behavior, and operator value are clear.

## Phase 0 — Hackathon recovery and public baseline

Status: effectively complete / archival.

Delivered:

- standard-layout noir theme;
- public plugin install path;
- Now Bar baseline;
- clean README/SUBMISSION copy;
- screenshot-friendly calm ops surface.

Remaining archival work, if useful:

- `nousrmncr-vjp.6` final submission/media bundle.

This should not outrank current product work unless the user explicitly wants public packaging.

## Phase 1 — Root canon and docs spine

Status: in progress via `nousrmncr-lr8.8`.

Delivered before this pass:

- `MISSION.md`
- `PHILOSOPHY.md`
- `VISION.md`
- `AGENTS.md`
- design philosophy and operator pain-point docs
- functionality data contract

Current completion targets:

- `CLAUDE.md`
- `docs/architecture.md`
- `docs/roadmap.md`
- `docs/cujs/operator-reorientation.md`
- `docs/canon/doc-structure.md`
- optional `docs/glossary.md`

Done when agents can orient in the repo without reconstructing doctrine from chat history.

## Phase 2 — Operator reorientation

Goal: make it easy to resume Hermes-mediated work after interruptions.

Candidate work:

- improve latest-session/workstream summaries;
- make source and freshness signals more legible;
- preserve clear empty/stale/fresh states;
- document and test dashboard-local response targets;
- add CUJ-backed UI review for interruption recovery.

Acceptance should be based on the operator journey in `docs/cujs/operator-reorientation.md`, not on visual novelty.

## Phase 3 — Evidence-backed attention

Goal: consume explicit upstream attention fields more fully while keeping Nousromancer bounded.

Candidate work:

- strengthen rendering of `attention_state`, `attention_reason`, `attention_evidence`, and safe `response_target.path`;
- improve redaction/sanitization for public UI;
- add fixtures for absent, stale, unsafe, and conflicting evidence;
- clarify when Now Bar hints should suppress themselves.

Non-goal: global cross-agent priority ranking. That requires upstream authority and evidence.

## Phase 4 — Operator action staging

Goal: stage useful operator actions without making Nousromancer an autonomous dispatcher.

Candidate work:

- dashboard-local `Respond →` / `Inspect →` affordances only from safe explicit targets;
- handoff/pickup preparation surfaces;
- optional private-operation bridges where Hermes or Sylveste owns the actual action semantics.

Rules:

- no hidden shell/agent dispatch from public dashboard buttons;
- no governance/approval semantics without upstream contracts;
- no direct ownership of Beads or Sylveste state.

## Phase 5 — Substrate bridge, if warranted

Goal: let Nousromancer represent richer Sylveste-grade workflows once substrate contracts exist.

Possible upstream dependencies:

- Hermes attention contract maturity;
- Beads/workstream context surfaces;
- Ockham or future routing/governance signals;
- Interverse/Sylveste provenance/review contracts;
- explicit redaction and publication boundaries.

This phase should be design-reviewed before implementation. If a feature would make Nousromancer the system of record, stop and move the contract upstream.

## What not to prioritize by default

- More hackathon packaging unless explicitly requested.
- Sidebar/cockpit expansion that collides with other dashboard plugins.
- Strong priority/routing copy based on heuristics.
- Broad DOM surgery without stable hooks.
- Public exposure of private workstream or Discord metadata.
