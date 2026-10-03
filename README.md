# Tula's International School — Homepage Redesign

A premium, responsive single-page redesign of the Tula's International School homepage, built from the supplied assessment and engineering documentation.

## ✨ What is implemented
- Premium editorial school-brand visual system
- Responsive navigation with mobile menu
- Hero → story → academics → campus life → testimonials → admissions flow
- **Scroll-triggered reveals** using `IntersectionObserver`
- **Custom cursor** for fine-pointer devices only
- **Animated light/dark theme switcher** with local persistence
- **Scroll progress indicator**
- Reduced-motion support
- Semantic landmarks and keyboard-friendly controls
- Responsive targets for mobile, tablet, and desktop

## 🛠 Stack
- Next.js 14 App Router
- React 18
- CSS with design tokens and responsive media queries
- Lucide React icons
- No backend, CMS, database, or authentication

## 🚀 Local setup
```bash
npm install
npm run dev
```
Open http://localhost:3000.

Production build:
```bash
npm run build
npm start
```

## 📁 Structure
```text
app/
  layout.js
  page.js
  globals.css
components/
  SiteShell.js
docs/
  PRD.md
  REQUIREMENTS.md
  ARCHITECTURE.md
  DESIGN.md
  ANIMATION.md
  TASKS.md
  PROCESS.md
  AGENTS.md
  TESTING.md
  ACCESSIBILITY.md
  PERFORMANCE.md
  DECISIONS.md
  ASSIGNMENT.md
  DELIVERY.md
```

## 🎯 Assessment alignment
The supplied technical reference weights Code Architecture & Quality (30%), Animation & UX Quality (30%), Creativity & Visual Polish (20%), and Documentation & Setup (20%). The implementation deliberately addresses all four standout interaction options so the project is not dependent on a single bonus feature.

## 🧭 Content source
The assessment requires retaining TIS brand identity and core copy. The implementation uses documented TIS positioning and source-backed details while avoiding unsupported claims.

## 🎨 Brand identity retained
- School name, "Modern Gurukul" positioning, and core copy from tis.edu.in
- Real facts: founded 2012, Dehradun campus, CBSE classes IV–XII, contact number
- Admissions, contact, FAQ, and careers links point to the official site

## 🔗 Links
- Live demo: https://tis-homepage-redesign.vercel.app/
- Repository: https://github.com/LEKKALAGANESH/tis-homepage-redesign
- TIS: https://tis.edu.in/
- Admissions: https://tis.edu.in/admission-procedure/

## ⚠️ Verification note
The GitHub repository is the implementation source of truth. Build/deployment checkboxes in `docs/DELIVERY.md` should only be marked after the corresponding verification is actually performed.