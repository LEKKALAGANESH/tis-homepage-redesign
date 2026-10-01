# Accessibility Specification

## 1. Goal

Accessibility is part of the assessment's animation/UX and code-quality expectations. The interface should remain usable without relying on pointer-only behavior or visual effects.

## 2. Semantic structure

Use meaningful landmarks:

```html
<header>
<main>
<section>
<footer>
```

Use heading levels to communicate document structure rather than visual size alone.

## 3. Keyboard access

All actionable controls should be reachable with a keyboard.

Verify:
- logical tab order;
- visible focus;
- activation using keyboard controls;
- no keyboard traps.

## 4. Pointer behavior

A custom cursor is an enhancement, not a requirement for operating the interface.

If implemented:
- disable it on coarse/touch pointers;
- preserve native interaction semantics;
- never hide required interaction affordances.

## 5. Contrast

Text and interactive controls should maintain readable contrast against their surfaces.

The assessment explicitly calls for accessible contrast ratios.

## 6. Motion

Non-essential animation should respect reduced-motion preferences.

The content and functional state must remain available when animation is reduced or disabled.

## 7. Interactive state

Do not communicate state exclusively through:
- color;
- cursor shape;
- animation.

Use text, icons with appropriate accessible names, or semantic attributes where needed.

## 8. Images

For every image, decide whether it is:
- meaningful content and needs alternative text, or
- decorative and should not add unnecessary screen-reader noise.

## 9. Forms and controls

If forms or interactive inputs exist in the final implementation:
- labels must be associated correctly;
- errors must be understandable;
- focus should move predictably;
- controls should have appropriate names.

## 10. Verification checklist

- [ ] Keyboard-only pass completed.
- [ ] Focus visibility reviewed.
- [ ] Semantic landmarks reviewed.
- [ ] Heading hierarchy reviewed.
- [ ] Contrast reviewed.
- [ ] Reduced-motion reviewed.
- [ ] Touch interaction reviewed.
