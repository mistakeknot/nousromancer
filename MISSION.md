# Nousromancer Mission

**Status:** root canon spine for `nousrmncr-lr8.6`. The direct Sylveste naming and boundary posture are accepted; wording may still tighten as product and upstream Hermes contracts mature.

## Mission

Nousromancer exists to make Hermes Agent a usable operator metaharness for Sylveste-grade agent work: a live Hermes-side surface that helps an operator return after interruptions, see which sessions, agents, tasks, and workflows may need human judgment, understand why they matter now, and choose where to inspect or answer — without collapsing Sylveste's deeper canon into Hermes.

Short form:

> **Nousromancer is the Hermes-facing operator metaharness for Sylveste-grade work, not Sylveste itself.**

For readers outside the Sylveste ecosystem, "Sylveste-grade" means long-lived, multi-agent work where context, provenance, handoff quality, and judgment loops matter more than a single chat transcript.

## What Nousromancer is

Nousromancer is:

- a public Hermes dashboard theme and plugin stack;
- an operator cockpit for reading Hermes runtime state;
- a projection and control surface over sessions, workstreams, and agent activity;
- a design laboratory for staged attention, black-ledger operator UX, and source-aware traces;
- a bridge that can represent Sylveste-grade workflows through Hermes without claiming to own them.

## What Nousromancer is not

Nousromancer is not:

- Sylveste;
- the Sylveste system of record;
- a governance layer for Sylveste artifacts;
- an executable routing authority for agent work;
- the owner of durable provenance, consent, policy, or review state;
- a replacement for Beads, Interverse, Clavain, Ockham, or any future Sylveste substrate component.

When a feature would make Nousromancer the source of truth for durable coordination, policy, governance, or routing decisions, the default answer is **no** until the relevant upstream layer exposes an explicit contract.

## Product promise

The public V1 product wedge is interruption recovery for Hermes operators. When an operator returns from Discord, CLI, cron, browser work, or a parallel agent lane, Nousromancer should make the next safe move easier to choose without claiming to be the routing authority.

The public V1 promise is staged attention:

1. show runtime health, recency, freshness, and source orientation truthfully;
2. surface conservative "possibly waiting" hints where the evidence supports them;
3. stage safe `Inspect →` or `Respond →` affordances only when the target is explicit and dashboard-local;
4. make the next operator move easier to decide;
5. refuse to overclaim authoritative attention state before Hermes exposes explicit upstream fields.

Current copy may say a session is `Possibly waiting` when it is genuinely derived from available Hermes data. It must not claim `needs input`, `blocked on you`, `highest priority`, or equivalent authoritative triage unless Hermes provides explicit, sanitized upstream evidence such as `attention_state`, `attention_reason`, `response_target`, and `attention_evidence`.

## Refusal and suppression rule

Nousromancer should suppress, hedge, or refuse any display claim that is not backed by an upstream contract.

If state is absent, stale, ambiguous, or inferred only heuristically, the UI should say that plainly or stay quiet. A quiet unknown is better than a confident fiction.

This applies especially to:

- human-input requirements;
- agent blocking status;
- priority/ranking claims;
- routing recommendations;
- governance or approval state;
- durable artifact ownership.

## Source alignment

This mission follows the reviewed metaharness doctrine in:

- `docs/reviews/2026-04-29-metaharness-doctrine-synthesis.md`
- `docs/reviews/2026-04-30-metaharness-doctrine-oracle-browser.md`

Those reviews are not a substitute for canon, but they record the convergence behind this boundary: name Sylveste directly, keep Nousromancer readable to outsiders, and preserve strict layer discipline.
