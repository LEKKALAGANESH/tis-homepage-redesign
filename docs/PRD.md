# Product Requirements Document — TIS Homepage Redesign

## 1. Product overview

TULAS International School (TIS) requires a modern homepage experience that preserves its existing brand identity and core copy while improving visual hierarchy, interaction quality, responsiveness, and conversion-oriented presentation.

The assessment specifies a single-page, fully responsive landing page with micro-interactions and smooth scroll animations.

## 2. Problem statement

The redesign challenge is not simply to restyle a page. The product must communicate a school brand quickly, guide visitors through relevant information, and provide clear calls to action while remaining performant and usable across device sizes.

The implementation must therefore balance four concerns:

1. **Information clarity** — visitors should understand the school's value proposition and offerings.
2. **Visual quality** — the interface should feel modern and premium.
3. **Interaction quality** — motion should support hierarchy rather than distract.
4. **Engineering quality** — the implementation should be modular, responsive, accessible, and maintainable.

## 3. Objective

Transform the existing TIS homepage into an animated, high-converting, modern web experience while retaining its core brand identity and copy.

## 4. Target experience

The expected product is a single-page landing page that:

- works across mobile, tablet, and desktop;
- uses clear visual hierarchy;
- contains purposeful calls to action;
- uses micro-interactions and smooth scroll behavior;
- preserves the school's brand identity;
- uses semantic page structure;
- avoids unnecessary visual or runtime complexity.

## 5. Primary audience

The homepage is a public-facing school website experience. The practical audience includes prospective families, students, and other visitors evaluating the school.

The assessment does not prescribe detailed personas, so persona-specific claims beyond this should be validated rather than assumed.

## 6. Core user journey

Recommended information flow:

1. Arrive at homepage.
2. Understand the school proposition from the hero.
3. Explore school information and academic/program content.
4. Consume supporting proof and credibility content.
5. Reach a clear conversion-oriented CTA.
6. Use navigation/footer links to continue to relevant information.

## 7. Scope

### In scope

- Homepage redesign
- Responsive layout
- Modular React/Next.js-style component architecture
- Modern visual hierarchy
- Micro-interactions
- Smooth scroll animations
- At least two standout interaction features from the assessment options
- Semantic HTML
- Accessibility-aware interaction
- Performance-conscious animation
- Repository documentation
- Production/deployment readiness

### Out of scope

- Backend services
- CMS
- Authentication
- Database
- New business workflows
- Unrelated pages unless explicitly required by the implementation
- Features not supported by the assessment or approved project scope

## 8. Standout feature candidates

The assessment specifies four options and requires at least two to be fully functional:

- Custom cursor
- Scroll-triggered reveals
- Animated dark/light theme switcher
- Scroll progress bar

The selected implementation must be recorded in the final project documentation after verification.

## 9. Success criteria

The project is successful when:

- the homepage builds successfully;
- the page is responsive at the required target sizes;
- at least two standout features are functional;
- semantic page structure is maintained;
- animation does not materially impede navigation;
- there are no known unused dependencies, dead code, or forgotten debug logs;
- the repository contains clear setup and technical documentation;
- the public deployment is working when submitted.

## 10. Assessment alignment

The reference assigns:

- 30% — Code Architecture & Quality
- 30% — Animation & UX Quality
- 20% — Creativity & Visual Polish
- 20% — Documentation & Setup

These weights should guide prioritization: correctness and engineering quality are not secondary to visual polish.

## 11. Constraints

The supplied guide gives a 3–4 day target duration. It also explicitly warns that AI-assisted code must remain understood and optimized by the candidate and that the candidate should be able to explain component hierarchy, custom hooks, and state logic during review.

## 12. Open verification items

The following should be verified against the actual repository before final submission:

- exact framework/version;
- exact styling solution;
- exact animation library;
- exact standout features implemented;
- deployment URL;
- final responsive test evidence;
- final build status.
