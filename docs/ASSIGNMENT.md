# Assignment Traceability

## 1. Objective traceability

**Source requirement:** Transform the existing TIS homepage into an animated, high-converting, modern web experience while retaining core brand identity and copy.

**Project response:** Modern single-page homepage redesign with responsive layout, conversion-focused hierarchy, and motion-oriented UX.

**Evidence:** Product and design documentation; implementation and deployment must be verified separately.

## 2. Target output

**Source requirement:** Single-page, fully responsive landing page with micro-interactions and smooth scroll animations.

**Traceability:**
- Product scope → [PRD.md](./PRD.md)
- UX behavior → [DESIGN.md](./DESIGN.md)
- Motion behavior → [ANIMATION.md](./ANIMATION.md)
- Verification → [TESTING.md](./TESTING.md)

## 3. Technical architecture

The source recommends:
- Next.js 14+ App Router or React 18+ with Vite;
- Tailwind CSS or CSS;
- Framer Motion or GSAP;
- Lucide React or React Icons.

These are recommendations, not proof of what this repository uses. The final implementation must be checked and documented accurately.

## 4. Standout features

The source defines four candidates:
1. Custom cursor
2. Scroll-triggered reveals
3. Animated dark/light theme switcher
4. Scroll progress bar

At least two must be fully functional before submission.

The final selected features should be recorded only after repository verification.

## 5. Evaluation weights

| Criterion | Weight |
|---|---:|
| Code Architecture & Quality | 30% |
| Animation & UX Quality | 30% |
| Creativity & Visual Polish | 20% |
| Documentation & Setup | 20% |

These weights are reflected in the documentation structure and task priorities.

## 6. Submission checklist traceability

| Assessment item | Documentation |
|---|---|
| Production build | TESTING.md |
| Two standout features | REQUIREMENTS.md / ANIMATION.md |
| 375px / 768px / 1280px+ | TESTING.md |
| No unused dependencies/dead code/debug logs | TESTING.md / PERFORMANCE.md |
| Public deployment | DELIVERY.md |
| README | Repository README |
| Technical walkthrough readiness | AGENTS.md / ARCHITECTURE.md |

## 7. AI-use note

The supplied reference permits AI tools for assistance but warns against unoptimized/copied code and requires the candidate to be able to explain component hierarchy, custom hooks, and state logic.

Therefore, project documentation should describe actual engineering decisions rather than generated claims.
