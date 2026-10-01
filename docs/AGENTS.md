# Engineering Agent / Role Model

This document defines a role-based workflow for maintaining the project. These are engineering responsibilities, not claims that autonomous agents are currently running in the repository.

## 1. Product Analyst

Responsibilities:
- translate the assessment into requirements;
- identify scope;
- define acceptance criteria;
- prevent unnecessary feature creep.

Outputs:
- PRD;
- requirements;
- acceptance criteria.

## 2. UX / UI Designer

Responsibilities:
- establish information hierarchy;
- define responsive behavior;
- define component states;
- protect brand continuity;
- ensure CTAs remain understandable.

Outputs:
- design specification;
- interaction rules;
- responsive rules.

## 3. Frontend Architect

Responsibilities:
- define component boundaries;
- control state ownership;
- manage dependency choices;
- prevent monolithic components;
- protect maintainability.

Outputs:
- architecture documentation;
- decision records.

## 4. Frontend Engineer

Responsibilities:
- implement components;
- integrate content;
- implement responsive behavior;
- implement interactions;
- keep code readable and reusable.

Outputs:
- production code.

## 5. Motion Engineer

Responsibilities:
- implement scroll reveals;
- implement selected standout features;
- ensure timing consistency;
- avoid layout thrashing;
- support reduced motion.

Outputs:
- animation layer;
- motion verification.

## 6. Accessibility Engineer

Responsibilities:
- semantic structure;
- keyboard navigation;
- focus visibility;
- contrast;
- accessible names;
- reduced-motion behavior.

Outputs:
- accessibility checklist;
- findings and fixes.

## 7. Performance Engineer

Responsibilities:
- inspect animation cost;
- reduce unnecessary renders;
- review assets;
- identify expensive browser work;
- verify runtime behavior.

Outputs:
- performance findings;
- optimization actions.

## 8. QA Engineer

Responsibilities:
- test functional behavior;
- test responsive breakpoints;
- test interaction states;
- check console/build failures;
- verify final acceptance criteria.

Outputs:
- test matrix;
- release findings.

## 9. Technical Reviewer

Responsibilities:
- challenge architectural assumptions;
- verify claims against code;
- identify undocumented trade-offs;
- prepare the implementation for technical discussion.

The candidate should be able to explain:
- component hierarchy;
- state logic;
- custom hooks;
- animation decisions;
- responsive strategy;
- accessibility decisions.

## 10. Role handoff

Recommended order:

```
Product Analyst
→ UX Designer
→ Architect
→ Frontend Engineer
→ Motion Engineer
→ Accessibility / Performance
→ QA
→ Technical Reviewer
```

The same person can perform all roles in a small project; the value is in separating the concerns during review.
