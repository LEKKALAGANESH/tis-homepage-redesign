# Frontend Architecture

## 1. Architectural goal

The architecture should keep the homepage visually rich without turning the application into a monolithic component.

The supplied technical reference recommends separating reusable UI, layout, sections, animation drivers, hooks, data, and styles.

## 2. Logical architecture

```
Application
│
├── Layout
│   ├── Header / Navigation
│   ├── Mobile Navigation
│   └── Footer
│
├── Page Sections
│   ├── Hero
│   ├── About
│   ├── Programs / Academics
│   ├── Testimonials / Proof
│   └── CTA
│
├── UI Primitives
│   ├── Buttons
│   ├── Cards
│   └── Badges
│
├── Animation Layer
│   ├── Scroll Reveal
│   ├── Cursor
│   ├── Theme Transition
│   └── Scroll Progress
│
├── Hooks
│   ├── Scroll behavior
│   └── Pointer behavior
│
└── Data / Content
    ├── Navigation
    ├── Statistics
    └── Section content
```

This is a conceptual architecture derived from the assignment's recommended breakdown. The exact repository implementation must be checked before treating individual paths as factual.

## 3. Component boundaries

### UI components
UI components should remain small and reusable. A button should not know which homepage section uses it.

### Layout components
Layout components own global positioning and navigation concerns.

### Section components
Section components own section-specific composition. They should avoid absorbing unrelated global behavior.

### Animation components
Animation behavior should be isolated where doing so improves reuse and makes motion logic testable.

### Hooks
Hooks should encapsulate browser behavior such as pointer position or scroll progress rather than duplicating event-listener logic across sections.

## 4. Data separation

Static content should be separated from presentation when practical.

Benefits:
- easier copy changes;
- reduced JSX noise;
- reusable rendering components;
- simpler review;
- easier future CMS migration.

## 5. State strategy

Use the smallest state scope that solves the problem.

Examples:
- navigation open/closed state belongs near navigation;
- theme preference belongs at the appropriate global/theme boundary;
- hover state can remain local;
- static school copy does not need React state.

Do not introduce global state merely because a state-management library exists.

## 6. Rendering strategy

The homepage is primarily a presentation experience. Rendering should therefore favor:
- deterministic content;
- stable component boundaries;
- minimal client-side work;
- progressive enhancement for interaction.

The exact SSR/CSR strategy must be documented after confirming the actual framework and implementation.

## 7. Dependency strategy

Every dependency should have a clear purpose. Before submission:
- remove unused packages;
- verify versions;
- avoid duplicate libraries for the same concern;
- prefer platform/browser capabilities when a dependency provides no meaningful value.

## 8. Architectural risks

### Monolithic page component
Risk: difficult testing and change isolation.

### Animation coupled to content
Risk: every copy/layout change can break motion.

### Excessive global state
Risk: unnecessary re-renders and harder reasoning.

### Uncontrolled event listeners
Risk: performance regressions and memory leaks.

### Visual-only semantics
Risk: inaccessible or fragile interaction.

## 9. Architectural quality bar

A reviewer should be able to trace:

```
User interaction
→ component
→ state/hook
→ visual response
```

without searching through unrelated parts of the application.

## Resolved gap (requirements review)

All page code used to live in `components/SiteShell.js` (~200 lines). It is now split as the technical reference asks:

- `components/sections/` — Hero, About, Academics, Life, Testimonials, Admissions
- `components/layout/` — Header, Footer, MobileNav
- `components/animation/` — Reveal, ScrollProgress, CustomCursor, ThemeToggle
- `hooks/` — e.g. `useScrollProgress`, `useMousePosition`
- `data/` — nav, stats, programs, life, testimonials

This affects the Code Architecture & Quality criterion (30%).
