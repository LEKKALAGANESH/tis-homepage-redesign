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

## ADR-007 — Set theme and JS flag before first paint

**Status:** Accepted

**Context:** Reading the saved theme in a React effect caused a light flash for dark-mode users, and reveal content was hidden even when JS failed.

**Decision:** A small inline script in `app/layout.js` adds `html.js` and sets `data-theme` (saved choice, else system preference) before paint. CSS hides `.reveal` only under `.js`.

**Rationale:** No theme flash, and content stays visible without JS. The script is a static string — no user input reaches it.

## ADR-008 — Animate through refs, not React state

**Status:** Accepted

**Context:** Cursor and scroll progress update on every pointer/scroll event.

**Decision:** Both write `transform` directly to their DOM node via a ref (scroll is throttled to one update per animation frame).

**Rationale:** Avoids a React render per event and keeps animation on the compositor.

## ADR-009 — Fonts through next/font

**Status:** Accepted

**Context:** A Google Fonts `@import` in CSS blocks rendering.

**Decision:** Load DM Sans and Playfair Display with `next/font/google`, exposed as `--font-body` and `--font-display`.

**Rationale:** Self-hosted at build time, no render-blocking request, no layout shift.

## ADR-010 — Upgrade to Next 16 / React 19 for security

**Status:** Accepted

**Context:** `npm audit` flagged every Next.js release below 16.3 (critical) and a bundled PostCSS (high). Most advisories target features this site does not use, but the brief requires a clean audit.

**Decision:** Upgrade to Next 16.3.8, React 19.3 and lucide-react 1.51. Add security headers and disable `X-Powered-By` in `next.config.mjs`.

**Rationale:** 0 known vulnerabilities. Verified by a clean production build and a full browser pass (cursor, theme, reveals, progress bar, mobile menu, 0 console errors/CSP violations).
