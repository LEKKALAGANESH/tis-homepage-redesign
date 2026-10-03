# Performance Engineering

## 1. Objective

The assessment expects smooth animation performance and specifically calls for approximately 60 FPS interaction quality.

Performance work should focus on real user-visible cost rather than premature optimization.

## 2. Animation performance

Prefer compositor-friendly properties such as:
- transform;
- opacity.

Avoid unnecessary continuous layout changes.

For pointer-following interactions, the reference recommends transform-based movement or spring-based motion to avoid layout thrashing.

## 3. Event handling

Scroll and pointer events can execute frequently.

Engineering rules:
- avoid expensive synchronous work;
- avoid repeated DOM queries;
- clean up listeners;
- keep state updates intentional;
- use browser/framework primitives that reduce unnecessary work.

## 4. Rendering

Reduce unnecessary React renders by:
- keeping state local where possible;
- avoiding broad context updates;
- memoizing only when evidence justifies it;
- keeping components focused.

Do not optimize by adding memoization everywhere.

## 5. Assets

Review:
- image dimensions;
- image format;
- responsive sizing;
- lazy loading where appropriate;
- unnecessary duplicate assets.

## 6. Bundle hygiene

Before delivery:
- remove unused packages;
- remove dead imports;
- avoid duplicate icon/animation libraries;
- confirm production build output.

## 7. Perceived performance

The page should become useful quickly.

Avoid:
- long blocking entrance sequences;
- animations that hide content;
- oversized assets;
- unnecessary client-side computation.

## 8. Performance verification

Review:
- initial load;
- runtime scrolling;
- pointer interactions;
- mobile behavior;
- animation smoothness;
- layout stability;
- console errors.

Performance should be measured or observed rather than claimed without evidence.

## Known gap (requirements review)

`InteractiveLayer` stores the cursor position in React state, so every mouse move re-renders it (cursor, progress bar, and theme button). The reference asks for no unnecessary re-renders. Fix: update the cursor element directly through a ref (or a spring) instead of state.
