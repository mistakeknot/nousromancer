# Nousromancer Architecture

Status: canonical project-docs spine for `nousrmncr-lr8.8`. This document describes current architecture and layer ownership; it does not grant Nousromancer new routing, governance, or provenance authority.

## System role

Nousromancer is a Hermes dashboard theme/plugin stack. It runs on the Hermes dashboard surface and makes live Hermes state easier for an operator to read.

It is intentionally a presentation and staging layer:

- Hermes exposes runtime, session, dashboard, and API state.
- Nousromancer presents that state, adds conservative orientation, and prepares operator-visible actions.
- Beads tracks project work and issue state.
- Sylveste / Interverse / Ockham / Clavain / future substrate layers may own durable provenance, governance, routing, review, policy, or coordination semantics.

If a behavior needs durable truth, consent, approval, routing authority, or artifact ownership, it belongs upstream of Nousromancer unless an explicit upstream contract says otherwise.

## Repository layout

```text
theme/nousromancer.yaml
plugins/nousromancer-mission-control/
  dashboard/manifest.json
  dashboard/dist/index.js
  dashboard/dist/style.css
scripts/install.sh
tests/*.mjs
docs/
```

Root doctrine lives in `MISSION.md`, `PHILOSOPHY.md`, and `VISION.md`. Agent workflow lives in `AGENTS.md` and `CLAUDE.md`. Detailed doc placement is defined in `docs/canon/doc-structure.md`.

## Theme layer

`theme/nousromancer.yaml` defines the dashboard visual system: dark/noir operator palette, readable sans content, mono metadata, restrained components, and standard layout compatibility.

The theme should keep Hermes usable with other dashboard plugins. It should not assume ownership of global navigation, sidebars, or plugin slots outside the standard dashboard contract.

## Plugin layer

`plugins/nousromancer-mission-control/dashboard/manifest.json` declares the public dashboard plugin.

The plugin currently injects into dashboard slots such as:

- `pre-main` — persistent Now Bar / mission-control strip.
- `header-left` — crest/identity touchpoints.
- `header-right` — restrained status/readout affordances.

The no-build plugin implementation lives in:

- `plugins/nousromancer-mission-control/dashboard/dist/index.js`
- `plugins/nousromancer-mission-control/dashboard/dist/style.css`

Because this is public dashboard code, it must avoid leaking private handles and must degrade cleanly when expected Hermes data is absent, stale, or malformed.

## Data sources

The plugin should prefer the dashboard SDK, especially:

- `SDK.api.getStatus()` for gateway/runtime health.
- `SDK.api.getSessions(limit, offset)` for session list records.
- `SDK.api.getSessionMessages(id)` only when a focused detail fetch is justified.
- `SDK.api.searchSessions(q)` for search-context flows.

Current attention fields are documented in `docs/functionality-data-contract.md`:

- `attention_state`
- `attention_reason`
- `response_target`
- `attention_evidence`

Explicit upstream attention evidence outranks local heuristics. Heuristics remain fallback-only and should use hedged copy such as `Possibly waiting`.

## UI surfaces

### Now Bar

The Now Bar is the primary persistent orientation surface. It may show:

- gateway live/offline/error state;
- active session counts;
- freshness/last update;
- latest session source/context;
- explicit attention contract signals when present;
- conservative fallback hints when evidence is weak;
- safe dashboard-local CTAs such as Sessions, Logs, Respond, or Inspect.

It must not claim global priority or definitive human-input need without upstream evidence.

### Sessions row polish

Sessions row enhancements are intentionally quiet. They can add source/attention metadata and bounded row-level affordances when stable row identity and explicit safe targets exist.

If the row cannot be identified reliably, the plugin should suppress row-level affordances instead of matching by brittle title text.

## Failure behavior

- Absent data: show unknown/empty state or suppress the claim.
- Stale data: show age/freshness and reduce confidence.
- Fresh data: show value and source.
- Unsafe data: suppress or sanitize.
- API errors: surface runtime/API state without implying work priority.

A quiet unknown is better than a confident fiction.

## Testing seams

Relevant tests live under `tests/` as `.mjs` files. The important seams are:

- Now Bar status/source/freshness rendering.
- Explicit attention contract consumption.
- Heuristic fallback behavior and hedged copy.
- Sessions row identity, stale-label cleanup, and row-action suppression.
- Public-safety redaction and dashboard-local target validation.

Use narrow tests first, then `node --test tests/*.mjs` when shared behavior changes.
