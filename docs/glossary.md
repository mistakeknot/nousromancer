# Nousromancer Glossary

Status: canonical project-docs spine for `nousrmncr-lr8.8`. This glossary keeps public-facing and agent-facing terms legible without making Nousromancer the owner of the whole ecosystem.

## Nousromancer

The Hermes-facing operator metaharness: a dashboard theme/plugin stack that presents Hermes runtime/session state, adds conservative orientation, and stages operator-visible action.

Nousromancer is not the system of record for Sylveste, Beads, governance, provenance, routing, consent, or artifact ownership.

## Hermes Agent

The runtime/dashboard/gateway substrate that exposes session, gateway, and dashboard data. Nousromancer consumes Hermes dashboard APIs and plugin slots.

## Hermes dashboard

The web dashboard surface where themes and plugins render. Nousromancer should preserve dashboard compatibility and avoid assuming control of global navigation or unrelated plugin surfaces.

## Theme

The visual skin defined by `theme/nousromancer.yaml`: palette, typography, layout restraint, component styling, and standard-dashboard presentation.

## Plugin

The dashboard extension under `plugins/nousromancer-mission-control/`. It adds the Now Bar, header touches, and Sessions-row polish using the public plugin SDK and DOM hooks.

## Now Bar

The persistent mission-control strip injected into the dashboard. It shows runtime health, freshness, latest source/session context, explicit attention evidence when present, hedged fallback hints when appropriate, and safe dashboard-local CTAs.

## Sessions row polish

Quiet enhancements to Hermes Sessions rows: source metadata, explicit attention context, and bounded `Respond →` / `Inspect →` affordances when stable row identity and safe upstream targets exist.

## Staged attention

A conservative product promise: Nousromancer can show evidence, freshness, and hedged hints that something may deserve attention. It does not claim definitive global priority or human-input need without upstream fields.

## Explicit attention contract

Upstream Hermes session fields such as `attention_state`, `attention_reason`, `response_target`, and `attention_evidence`. When present and safe, these fields can support stronger UI hints than local heuristics.

## Possibly waiting

A hedged fallback label for weak evidence. It means the UI has a bounded reason to suspect operator attention may be useful, not that the session is definitely blocked or highest priority.

## Sylveste-grade work

Long-lived, multi-agent work where context, provenance, handoff quality, review, and human judgment matter more than a single chat transcript. Nousromancer may represent this kind of work through Hermes, but it does not become Sylveste.

## Sylveste

The broader substrate/canon direction for durable agent-work semantics. In Nousromancer docs, Sylveste is named directly but kept separate from the Hermes-facing dashboard layer.

## Interverse

The agent/plugin layer in the broader ecosystem. Do not use `Interverse` as a shorthand for every project or for Sylveste as a whole.

## Beads

The repo-local issue tracker and work-state source of truth. Nousromancer does not replace Beads; agents use Beads to track Nousromancer work.

## Ockham

A governor/dispatch-policy direction in the broader ecosystem. Nousromancer should not imply Ockham-style routing or policy authority unless upstream contracts expose bounded evidence.

## Clavain

Engineering/plugin/review infrastructure in the broader ecosystem. Nousromancer can be informed by Clavain outputs but does not own Clavain state.

## Operator metaharness

A surface that helps the human operator read, resume, inspect, and stage work across live agent/runtime state. The term implies orientation and control-surface discipline, not durable authority.

## System of record

The authoritative durable store for a kind of truth. Nousromancer is not the system of record for sessions, work, approvals, provenance, governance, routing, or artifacts; it presents selected Hermes-facing state.
