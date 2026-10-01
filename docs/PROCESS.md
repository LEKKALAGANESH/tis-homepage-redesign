# Engineering Process

## 1. Operating model

The project follows:

```
Discover
  ↓
Define
  ↓
Design
  ↓
Implement
  ↓
Integrate
  ↓
Verify
  ↓
Polish
  ↓
Document
  ↓
Release
```

The important principle is that visual polish happens after a reliable structural foundation exists, not instead of one.

## 2. Discovery

Before coding:
- read the assessment;
- identify mandatory versus optional requirements;
- inspect the source website/content;
- inspect repository tooling;
- identify responsive and accessibility constraints.

## 3. Definition

Convert the assessment into:
- product requirements;
- implementation tasks;
- acceptance criteria;
- verification checks.

## 4. Design

Establish:
- information architecture;
- visual hierarchy;
- responsive behavior;
- interaction states;
- motion principles.

## 5. Implementation

Build from stable foundations:
1. page shell;
2. layout;
3. content sections;
4. reusable primitives;
5. interaction layer;
6. animation layer;
7. responsive refinement.

## 6. Verification loop

For every meaningful change:

```
Implement
→ Run
→ Inspect
→ Compare
→ Fix
→ Re-run
```

Do not rely on source code inspection alone for visual requirements.

## 7. Quality gates

### Gate A — Build
The production build must succeed.

### Gate B — Runtime
No known runtime errors or avoidable console warnings.

### Gate C — Responsive
Required viewport sizes must work.

### Gate D — Accessibility
Keyboard, semantics, focus, contrast, and motion behavior must be reviewed.

### Gate E — Motion
Standout features must be functional and not interfere with navigation.

### Gate F — Documentation
README and project documentation must explain the implementation.

## 8. Change management

For significant architectural choices:
- record the problem;
- record alternatives;
- record the decision;
- record trade-offs;
- record consequences.

See [DECISIONS.md](./DECISIONS.md).

## 9. Final review

The final review should map every assessment criterion to evidence:

```
Requirement
→ implementation
→ verification
→ documentation
```

A feature should not be considered complete because it was coded; it should be considered complete when it was coded and verified.
