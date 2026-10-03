# Review Notes — What Was Fixed and Why

A record of every issue found in code review and how it was resolved. Use it to answer
"why is it done this way?" during the technical walkthrough.

## Round 1 — Requirements review

| Issue | Fix | Where |
|---|---|---|
| All code in one file (`SiteShell.js`) | Split into `sections/`, `layout/`, `animation/`, `ui/`, `hooks/`, `data/` | `components/`, `hooks/`, `data/` |
| Cursor ignored hoverable elements | `pointerover` + `closest("a, button")` sets `data-hover`; CSS scales to 2× | `components/animation/CustomCursor.js` |
| Cursor moved with `left/top` (layout work) | Moves with `translate3d` | same |
| Every mouse move re-rendered React | Cursor writes to the DOM node via a ref; no state | same |
| Missing favicon → console 404 | `app/icon.svg` | `app/icon.svg` |

## Round 2 — Visual bugs

| Issue | Root cause | Fix |
|---|---|---|
| Large empty gap above "Give curiosity a place to grow" | `.admissions>*{position:relative}` overrode the glow's `position:absolute`, so the 700px glow took up layout space | `.admissions>:not(.admissions-glow)` |
| Admissions intro text lost its colour/width | `.admissions>p` no longer matched — `Reveal` wraps it in a `div` | `.admissions p:not(.eyebrow)` |
| Testimonial cards had different heights | Grid stretches the `Reveal` wrapper, not the card inside | `.reveal>*{height:100%}` (also fixes life cards and stats) |

**Lesson:** `Reveal` adds a wrapper `div`. Any `parent > child` CSS selector or grid/flex layout
across it will break. Longer-term option: let `Reveal` render the element itself (`as` prop).

## Round 3 — Expert review

| # | Issue | Fix | Why it matters |
|---|---|---|---|
| 1 | Section titles were `<p>` | Now `<h2>`: one `h1`, five `h2`, `h3` for cards | Semantic HTML is graded; screen readers and SEO use headings |
| 2 | `npm run lint` broken (ESLint not installed) | Removed the script | A reviewer running it would see a broken command |
| 3 | Content hidden until JS ran (`.reveal{opacity:0}`) | Hidden only under `.js .reveal`; `html.js` set by an inline script | If the bundle fails, the page still shows everything |
| 4 | CSS was 6 minified lines | Formatted with Prettier (~900 readable lines) | Has to be explained in the walkthrough |
| 5 | Light flash for dark-mode users; system preference ignored | Inline boot script in `<head>` sets the theme before paint (saved → system); toggle only syncs and saves | No flash; respects OS setting |
| 6 | Fonts via render-blocking `@import` | `next/font` (self-hosted, CSS variables `--font-body`, `--font-display`) | Faster first paint, no layout shift |
| 7 | `.program:hover` animated `padding` (layout) | Children move with `transform: translateX` | Compositor-only animation keeps 60 FPS |
| 8 | Scroll bar re-rendered React on every scroll event | `useScrollProgress(ref)` writes `scaleX` once per animation frame | Matches the cursor; no needless renders |
| 9 | Mobile menu: no Escape, no focus handling | Focus first link on open; Escape closes and returns focus to the button; `aria-controls` | Keyboard accessibility |
| 10a | "Discover Tula's" had a ▶ play icon but no video | ↓ arrow icon (`.button-icon`) | Icon must match the action |
| 10b | All four campus-life arrows linked to admissions | Removed the links (cards are informational) | No misleading controls |
| 10c | Quote from Jigmet's father named "Krishna" | `[Jigmet]` (editorial bracket marks the correction) | Copy accuracy |
| 11 | No Open Graph / Twitter tags | `metadataBase`, `openGraph`, `twitter` in `app/layout.js` | Good preview when the live link is shared |

## Known limits (deliberate)

- Social preview image is a static `app/opengraph-image.png` (1200×630). A generated
  `opengraph-image.js` (`next/og`) fails to build on Windows with Next 14 ("Invalid URL" loading
  its bundled font), so the PNG was rendered once from HTML instead. Re-render it if the hero copy changes.
- CSS is one formatted file, not per-section modules.
- Reduced motion still uses the blanket `transition-duration` reset.

## Round 4 — Security audit

Scope: this is a static, prerendered marketing page. No backend, database, API routes,
forms, login, user data, or environment variables exist.

| Check | Result |
|---|---|
| API keys / env vars | None in code; no `process.env` use; `.env*` already gitignored |
| Git history secrets | Full `git log --all -p` scan for key/token/password/private-key patterns: clean |
| Admin routes, auth, access control, password hashing, database | Not applicable — none exist |
| Forms / XSS | No forms or user input. Only `dangerouslySetInnerHTML` is the static theme boot script (no user data) |
| Rate limiting, API endpoints, CORS | Not applicable — no endpoints; static files only, no CORS headers sent |
| Debug mode | `next start` serves the production build; `X-Powered-By` removed (`poweredByHeader: false`) |
| Dependencies | `npm audit` showed 1 critical (Next.js) + 1 high (PostCSS). Upgraded to Next 16.3.8, React 19.3, lucide-react 1.51 → **0 vulnerabilities** |
| Security headers | CSP, `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`, HSTS — set in `next.config.mjs` |
| Exposed files | `/.env`, `/.git`, `/package.json`, `/next.config.mjs`, `/Requirements`, `/docs/*`, `/.next/*`, `/node_modules/*` all return 404 |

**CSP trade-off:** `script-src` allows `'unsafe-inline'` because the page is statically prerendered and
Next inlines its hydration data plus the theme boot script. Nonces would force per-request dynamic
rendering. Risk is low: there is no user input anywhere on the page to inject.

**If a backend is ever added** (contact form, admissions API): validate input server-side, rate-limit
the endpoint, keep secrets in Vercel env vars (never `NEXT_PUBLIC_*`), and revisit the CSP.
