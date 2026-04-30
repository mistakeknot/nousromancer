# Nousromancer Philosophy

**Status:** root canon spine for `nousrmncr-lr8.6`. These principles are intended to constrain design and implementation before the dashboard grows into stronger upstream integrations.

## Core thesis

Operator interfaces for serious agent work should be calm, evidential, and bounded.

Nousromancer exists because Hermes already contains live operational traces, but raw traces are not enough. Operators need a surface that tells them what is alive, what is fresh, what may be waiting, and what can be answered next — without pretending that inference is provenance or that presentation is authority.

## Principles

### 1. Layer discipline

Nousromancer represents Hermes state. It does not become the substrate it displays.

The proper verbs are usually **show**, **project**, **represent**, **orient**, **hint**, and **prepare**. Use **govern**, **own**, **authorize**, **route**, or **decide** only when explicitly describing what Nousromancer must not do, or when a future upstream contract grants that authority.

Sylveste may own deeper canon, provenance, governance, and durable work semantics. Hermes may expose runtime/session state. Nousromancer sits on the Hermes side as a metaharness: it makes the operator surface usable without collapsing the layers.

### 2. Evidence before attention

Attention claims must be evidence-backed.

The V1 dashboard can truthfully show:

- runtime health;
- session recency;
- source/mirror orientation;
- available message excerpts and workstream metadata;
- conservative `Possibly waiting` hints.

The V1 dashboard must not present heuristic inferences as authoritative attention state. Claims like `needs input`, `blocked on you`, or `highest priority` require explicit upstream fields and evidence.

### 3. Anti-interpolation

Do not fill missing coordination data with vibes.

If Hermes does not expose a field, Nousromancer should not invent it. If a message looks like a question but the upstream system has not declared that it requires human input, the UI can show the message and its context; it should not silently upgrade that observation into a blocking state.

### 4. Light-failure over false confidence

Absent, stale, and fresh data should feel different.

- **Absent:** show an empty/unknown state and explain what source is missing.
- **Stale:** show age, last refresh, and reduced confidence.
- **Fresh:** show the live value and its source.

When confidence is low, design should dim, hedge, or suppress. The operator should be able to tell whether they are seeing a current signal, an old signal, or no signal at all.

### 5. Quiet control surface

Nousromancer should reduce operator friction without turning every moment into an alert.

The aesthetic is black-ledger restraint: precise typography, dense but legible rows, serious clothing/gear cues, and operational calm. The interface should be sharp enough for real work and quiet enough to leave judgment with the operator.

### 6. Promotion gates

A useful dashboard affordance does not automatically become doctrine.

Promote a behavior into stronger canon only when it has:

1. a stable upstream data contract;
2. clear ownership by the correct layer;
3. evidence that the operator actually benefits;
4. bounded failure behavior;
5. no hidden claim to Sylveste authority.

Until those gates are met, keep features staged, hedged, and reversible.

## Anti-goals

Nousromancer should not:

- become the canonical store for Sylveste events, artifacts, consent, or approvals;
- rank human-needed work without explicit upstream evidence;
- turn session UI heuristics into durable governance;
- hide stale/absent data behind confident copy;
- bury operators in alerts for every inferred concern;
- make public docs unreadable to people who do not already know the Sylveste stack.

## Design tension

The central tension is intentional:

> Nousromancer should feel powerful enough to operate Sylveste-grade work, while remaining humble enough to admit that it is only the Hermes-facing surface.

That tension is not a bug. It is the boundary that keeps the project useful.