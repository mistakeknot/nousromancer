# Nousromancer Vision

**Status:** root canon spine for `nousrmncr-lr8.6`. This is a directional vision, not a promise that every capability belongs in the current public demo.

## North star

Nousromancer should become the calm operator cockpit for Hermes-mediated, Sylveste-grade agent work.

An operator should be able to open the dashboard and quickly answer:

1. What is alive?
2. What changed recently?
3. What may be waiting for human judgment?
4. Why might it matter now?
5. What can I answer or inspect next?

The surface should make multi-agent work easier to resume after interruptions, easier to audit across tools, and easier to steer without pretending that the dashboard is the underlying system of record.

## Near-term vision

The near-term product remains a truthful public Hermes dashboard:

- noir/black-ledger theme for serious operator use;
- mission-control plugin surfaces for sessions and workstreams;
- Now Bar and row-level orientation cues;
- source-aware traces across Hermes, Discord, and workstream records where available;
- conservative `Possibly waiting` hints backed by visible evidence;
- clear empty, stale, and fresh states.

This stage is valuable even before authoritative attention state exists. It improves pickup, reduces session blindness, and gives operators a better way to inspect Hermes activity.

## Attention-state future

The stronger future version depends on upstream Hermes fields such as:

- `attention_state`;
- `attention_reason`;
- `response_target`;
- `attention_evidence`;
- explicit source freshness and confidence metadata.

When those fields exist and are sanitized, Nousromancer can move from staged attention to evidence-backed attention. At that point it may present stronger claims such as a session needing input, a response target being available, or a specific reason for waiting.

Until then, the dashboard must remain conservative. It can orient; it cannot authoritatively triage.

## Sylveste-grade future

In the longer arc, Nousromancer should help Hermes act as a metaharness for Sylveste-grade workflows:

- preserving pickup context across fragmented surfaces;
- showing operator-relevant seams between agents, Beads, reviews, and runtime sessions;
- making handoff and reintegration state legible;
- exposing where evidence exists and where it is missing;
- preparing actions without silently executing governance or routing decisions.

This does not make Nousromancer Sylveste. It makes Nousromancer a disciplined Hermes-facing window into work that may eventually be grounded in Sylveste, Interverse, Ockham, Clavain, Beads, or other substrate layers.

## Success shape

Nousromancer succeeds when:

- operators trust what it says because it is careful about what it does not know;
- public users can understand the dashboard without learning the whole private ecosystem first;
- project-local agents know exactly where the layer boundaries are;
- Hermes data contracts improve because the UI makes missing fields obvious;
- Sylveste-grade workflows become easier to inspect, resume, and steer;
- the system refuses to gain authority by accident.

## Long-term restraint

The tempting failure mode is dashboard sprawl: every useful hint becomes a status, every status becomes authority, and every authority claim leaks into canon.

The long-term vision rejects that. Nousromancer should stay narrow, durable, and legible: an operator metaharness that makes live work visible while leaving durable truth with the layers designed to own it.