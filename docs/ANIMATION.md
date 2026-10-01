# Motion & Interaction Specification

## 1. Motion objective

Animation exists to improve orientation, hierarchy, feedback, and perceived quality.

The assessment requires micro-interactions and smooth scrolling behavior and recommends at least two standout interaction features.

## 2. Motion principles

### Principle 1 — Purpose
Every animation should answer a question:
- What appeared?
- What changed?
- What can I interact with?
- Where did the content go?

### Principle 2 — Restraint
Avoid animation that delays access to content or creates visual fatigue.

### Principle 3 — Consistency
Related components should use related timing, easing, and movement patterns.

### Principle 4 — Performance
Prefer compositor-friendly properties such as transform and opacity where appropriate.

## 3. Scroll-triggered reveals

The assessment recommends entrance durations between 0.3 and 0.6 seconds.

Recommended behavior:
- trigger when content enters the viewport;
- use modest translation/fade;
- stagger related elements;
- avoid repeatedly replaying animations unnecessarily.

The reference specifically suggests viewport-aware motion such as Framer Motion's `whileInView` with `viewport={{ once: true }}`, or GSAP ScrollTrigger.

## 4. Custom cursor

If implemented:
- use only on pointer-capable devices;
- hide or disable on touch/coarse pointers;
- react subtly to interactive elements;
- use transform-based movement;
- avoid causing layout changes.

## 5. Theme transitions

If a theme switcher is implemented:
- transition color/surface changes consistently;
- preserve readable contrast;
- persist the user's preference if appropriate;
- avoid flashing an incorrect theme during initial render.

## 6. Scroll progress

If implemented:
- represent document progress;
- remain visually unobtrusive;
- avoid becoming a distracting second navigation system;
- calculate progress safely when the document has little/no scrollable height.

## 7. Reduced motion

The implementation should respect users who request reduced motion.

When reduced motion is active:
- remove non-essential movement;
- reduce transition duration;
- preserve content visibility;
- preserve functional feedback.

## 8. Animation failure modes

Avoid:
- excessive parallax;
- long entrance delays;
- layout-changing animations;
- animation on every small text node;
- scroll handlers that cause expensive synchronous work;
- pointer effects that run on mobile;
- motion that prevents keyboard users from understanding state.

## 9. Verification

Motion should be tested on:
- mobile;
- tablet;
- desktop;
- lower-powered devices where available;
- reduced-motion settings;
- keyboard navigation;
- touch input.
