# Implementation Task Plan

## Priority model

- **P0** — required for a functional submission
- **P1** — required for assessment quality
- **P2** — polish and hardening
- **P3** — optional future improvement

## Phase 1 — Discovery

- [ ] P0 Confirm assignment requirements.
- [ ] P0 Identify source homepage content and brand constraints.
- [ ] P0 Confirm actual repository framework and build tooling.
- [ ] P1 Record final technology decisions.
- [ ] P1 Define page section inventory.

## Phase 2 — Foundation

- [ ] P0 Establish application entry point.
- [ ] P0 Establish global styles/theme.
- [ ] P0 Establish responsive container/grid primitives.
- [ ] P1 Establish reusable buttons/cards/badges.
- [ ] P1 Establish layout components.

## Phase 3 — Homepage

- [ ] P0 Implement navigation.
- [ ] P0 Implement hero.
- [ ] P0 Implement core information sections.
- [ ] P0 Implement CTA.
- [ ] P0 Implement footer.
- [ ] P1 Verify brand copy/assets.

## Phase 4 — Motion

- [ ] P0 Implement at least two assessment standout features.
- [ ] P1 Add section reveal behavior.
- [ ] P1 Add interaction feedback.
- [ ] P1 Verify animation timing.
- [ ] P1 Verify reduced-motion behavior.

## Phase 5 — Responsive engineering

- [ ] P0 Test 375px.
- [ ] P0 Test 768px.
- [ ] P0 Test 1280px+.
- [ ] P1 Fix overflow and clipping.
- [ ] P1 Verify navigation and CTAs on touch devices.

## Phase 6 — Accessibility

- [ ] P0 Verify semantic landmarks.
- [ ] P0 Verify keyboard access.
- [ ] P0 Verify focus visibility.
- [ ] P1 Verify color contrast.
- [ ] P1 Verify labels and accessible names.
- [ ] P1 Verify reduced motion.

## Phase 7 — Quality

- [ ] P0 Run production build.
- [ ] P0 Remove debug logs.
- [ ] P0 Remove unused dependencies.
- [ ] P1 Check runtime console.
- [ ] P1 Check broken links/assets.
- [ ] P1 Review component boundaries.

## Phase 8 — Delivery

- [ ] P0 Verify public repository.
- [ ] P0 Verify deployment.
- [ ] P0 Update README.
- [ ] P1 Complete documentation folder.
- [ ] P1 Perform final assessment traceability review.

## Phase 9 — Gaps found in requirements review

- [x] P0 Add live URL to README: https://tis-homepage-redesign.vercel.app/
- [x] P1 Add live demo link and "Brand identity retained" section to README.
- [x] P1 Split `components/SiteShell.js` (~200 lines) into `sections/`, `layout/`, `animation/`, `hooks/`, `data/`. Affects the 30% code grade.
- [x] P1 Make the custom cursor grow/change on `a` and `button` hover.
- [x] P1 Move the cursor with `transform: translate3d()` instead of `left/top`.
- [x] P1 Stop re-rendering the interactive layer on every mouse move.
- [x] P0 Run `npm run build` and confirm it is clean.
- [x] P0 Test at 375px, 768px, and 1280px+.
- [ ] P0 Submit the Google Form.

## Phase 10 — Expert review fixes (see REVIEW-NOTES.md)

- [x] P0 Section titles use `<h2>`.
- [x] P0 Remove broken `lint` script.
- [x] P0 Content visible without JS.
- [x] P1 Format CSS.
- [x] P1 No dark-mode flash; respect system theme.
- [x] P1 Load fonts with `next/font`.
- [x] P1 Program hover uses `transform`.
- [x] P1 Scroll progress without React re-renders.
- [x] P1 Mobile menu: Escape and focus handling.
- [x] P2 Fix misleading play icon, campus-life links, and testimonial name.
- [x] P2 Open Graph and Twitter metadata.
