# Architecture Decision Records

This document records decisions and their rationale. It is intentionally explicit about whether a choice comes from the assessment or from engineering judgment.

## ADR-001 — Modular component architecture

**Status:** Accepted

**Context:** The reference explicitly recommends separating UI primitives, layout, sections, animation, hooks, data, and styles.

**Decision:** Keep page composition modular rather than creating one large homepage component.

**Rationale:** This improves maintainability, reviewability, reuse, and change isolation.

**Trade-off:** More files and abstractions than a single-page component.

## ADR-002 — Treat motion as a separate concern

**Status:** Accepted

**Context:** Animation is worth 30% of the assessment and includes specific interaction requirements.

**Decision:** Keep animation behavior conceptually separate from business/content composition.

**Rationale:** Motion can evolve without rewriting content components.

**Trade-off:** Additional coordination between components and motion utilities.

## ADR-003 — Mobile is a first-class target

**Status:** Accepted

**Context:** The assessment explicitly requires testing at 375px, 768px, and 1280px+.

**Decision:** Design and verify responsive behavior as part of implementation rather than as a final patch.

**Rationale:** Prevents desktop assumptions from leaking into mobile behavior.

## ADR-004 — Do not treat visual effects as functional dependencies

**Status:** Accepted

**Context:** Features such as custom cursors are optional enhancement mechanisms.

**Decision:** Core navigation and CTAs must remain functional without custom pointer effects.

**Rationale:** Better accessibility, touch compatibility, and resilience.

## ADR-005 — Evidence before claims

**Status:** Accepted

**Context:** Documentation can easily drift from implementation.

**Decision:** Mark implementation-specific statements as verified only after checking repository code or test evidence.

**Rationale:** Prevents README/documentation from becoming an inaccurate specification.

## ADR-006 — Optimize only where there is a reason

**Status:** Accepted

**Context:** The project has a short assessment timeline.

**Decision:** Prefer simple, understandable optimization patterns and verify performance before introducing complex abstractions.

**Rationale:** Avoids over-engineering while protecting interaction quality.
