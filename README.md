# Pawan — Portfolio (Next.js)

A single-page portfolio for **Pawan**, a full-stack developer building durable digital products. Built with Next.js 16 App Router + React 19 + TypeScript — migrated from the zero-dependency static site in `C:\Projects\portfolio-new`, same design, split into components.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)

> **Static original:** the framework-free version (plain `index.html` + `styles.css` + `script.js`) was the source of this port. This folder is its component-based Next.js version — same design language, same locked dark-mode palette.

---

## Highlights

- **Component-split App Router app** — server components for static sections, `'use client'` only where interactivity needs it (work gallery, nav, toggle, videos, form, reveals)
- **Top-performing work gallery** (`Work.tsx`) — reference-matched trio of tall rounded cards (Lumen / Field / Relay + Atlas / Bloom / Northwind data) under a `Featured` eyebrow and `Top-performing / work gallery` title; gradient scrim + stat (eye/spark/bookmark icons) + title + blurb overlay, glass arrows + pill dots. **Desktop (>900px) is a static 3-col grid** — no nested scroller, no snap, no scroll handler, so vertical page scroll passes straight through; `<=900px` it becomes a swipe strip with arrows/dots. Work images carry explicit `width/height` + `async` decode (`eager` first three, `lazy` rest)
- **Animated day/night switch** (`ThemeToggle.tsx`) — follows the system preference until the visitor chooses, persists to `localStorage` (`pawan-portfolio-theme`), replays knob pop + burst ring on every flip, dispatches `pawan-theme-change`; pre-paint inline script in `layout.tsx` sets `data-theme` before hydration (no theme flash)
- **Theme-aware P-bolt logo** (`SiteHeader.tsx`) — inline SVG wordmark with both arch variants, swapped via the same `[data-theme="dark"]` CSS as the static site
- **SVG navigation dock** (`NavDock.tsx`) — five 15px / 1.8px `currentColor` icons, hover preview + `--indicator-x` indicator sync, `IntersectionObserver` active-section tracking
- **Theme-aware hero video** (`HeroVideo.tsx`) — light + dark layers crossfade via `.is-active`; only the visible layer plays; watches both the `pawan-theme-change` event and a `data-theme` `MutationObserver`. Both layers **pause when the hero scrolls off-screen** (`IntersectionObserver` on `.hero-visual`) and when the tab hides (`visibilitychange`), so video decode never competes with gallery scroll compositing
- **Reveal-on-scroll** (`Reveal.tsx`) — polymorphic wrapper that renders the semantic element itself (`as="div"`, `as="li"`, `as="article"`); one-shot `IntersectionObserver` adds `.is-visible`. **Work gallery cards are NOT wrapped in `Reveal`** — plain `<li>` elements, so no transform animations compete with scrolling
- **Split contact layout** (`Contact.tsx`) — section is a single vertical stack (header block → body) instead of a 2-column grid. `.contact-body` is a two-card grid: a `.contact-panel` availability card (lime status dot, three direct channels — email / GitHub / `tel:` — with label-value-note rows, "replies within one working day" foot) beside the form "ticket"
- **Segmented project-type chips** (`ContactForm.tsx`) — the old `<select>` is replaced by a `<fieldset>` + `<legend>` of native radio chips (`.contact-type-row`, pill radius, white fill when selected), so arrow-key selection and form semantics work. Fields are explicitly `.contact-field-half` / `.contact-field-full`; submit button + live status message share a `.contact-actions` row
- **Validated contact form** (`ContactForm.tsx`) — same rules as static `script.js`, per-field `aria-invalid` / `aria-describedby`, `mailto:` fallback preserved
- **Hero dark-mode text — LOCKED 2026-10-02 (user-approved, do not retune without asking):** `.hero-copy #a9a8bc`, `h1 #b3b1c6 @400`, `h1 em #8a97dd @400`, `.hero-intro #a3a2b5 @400`, eyebrow/foot `#d6d7e6`; no backdrop panel, light `.55/.28/.08` scrim. Lives in `app/globals.css` (ported verbatim from static `styles.css`).

## Getting started

```bash
cd C:\Projects\portfolio-new
npm install
npm run dev
```

Then open <http://localhost:3000>.

### Scripts

| Script | What it does |
|--------|--------------|
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build — TypeScript check + static prerender of `/` |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (`eslint-config-next`) |

## Project structure

```
portfolio-new/
├── app/
│   ├── layout.tsx        # <html lang="en"> + theme pre-paint script, Metadata (title/desc/icons)
│   ├── favicon.ico       # Canonical favicon — App Router file convention outranks /public/favicon.ico
│   ├── page.tsx          # Composes header, sections, footer in <main id="main-content">
│   └── globals.css       # All styling — base palette ported from static styles.css + section blocks
├── components/
│   ├── SiteHeader.tsx    # Server: wordmark logo SVG + <NavDock/> slot + .header-tools
│   ├── NavDock.tsx       # Client: 5 SVG nav items, hover preview, active-section tracking
│   ├── ThemeToggle.tsx   # Client: day/night switch + localStorage persist + pawan-theme-change event
│   │                     # (+ exported getTheme()/applyTheme() helpers)
│   ├── Hero.tsx          # Server: hero copy + actions + foot; embeds <HeroVideo/>
│   ├── HeroVideo.tsx     # Client: light/dark <video> crossfade + play-only-visible + gesture retry
│   ├── Work.tsx          # Client: 01 Selected work — top-performing gallery (desktop grid, mobile swipe strip)
│   ├── Skills.tsx        # Server: 02 Capabilities (5 rows)
│   ├── Journal.tsx       # Server: 03 Blog (3 entries via Reveal as="article")
│   ├── Contact.tsx       # Server: 04 Contact — header block + [status/channel panel | form]
│   ├── ContactForm.tsx   # Client: validation mirroring static script.js + project-type radio chips
│   ├── SiteFooter.tsx    # Server: dynamic-year footer
│   └── Reveal.tsx        # Client: polymorphic reveal wrapper (as="div"|"article"|"a", optional delay)
├── public/
│   ├── favicon.ico / logo.svg / favicon.png / apple-touch-icon.png  # Metadata icons
│   ├── work/             # Selected-work card photos (lumen/field/relay/atlas/bloom/north) + room.jpg band
│   └── assets/           # Hero MP4s + PNG/WebP posters, logo.jpg/.png/.svg, favicons, nav-reference.mp4
├── package.json          # next 16.3.8, react 19.2.8, typescript 5, eslint 9 (+ @types)
├── tsconfig.json         # Strict TS, bundler resolution, @/* alias
├── eslint.config.mjs     # eslint-config-next flat config
└── next.config.ts        # Default Next config
```

## Sections

| # | Section | Component(s) | Notes |
|---|---------|--------------|-------|
| — | Hero | `Hero.tsx` + `HeroVideo.tsx` | Copy, CTAs, dual light/dark video, foot |
| 01 | Selected work | `Work.tsx` | Static 3-card gallery grid on desktop (6-card swipe strip ≤900px) with stat/title/blurb overlays |
| 02 | Capabilities | `Skills.tsx` | Statement + 5 capability rows |
| 03 | From the blog | `Journal.tsx` | 3 posts |
| 04 | Contact | `Contact.tsx` + `ContactForm.tsx` | Split layout: availability/channel card + form ticket with project-type chips, `mailto:` fallback |

## Component model

- **Server by default** (`SiteHeader`, `Hero`, `Skills`, `Journal`, `Contact`, `SiteFooter`) — static markup, zero JS shipped.
- **`'use client'` islands** — `Work` (mobile carousel paging state only), `NavDock` (hover/active tracking), `ThemeToggle` (`aria-pressed`, persist, animation replay), `HeroVideo` (crossfade sync + off-screen pause), `ContactForm` (validation state), `Reveal` (`IntersectionObserver` + `prefers-reduced-motion`).
- **Theme flow** — `layout.tsx` pre-paint script reads `localStorage 'pawan-portfolio-theme'` → `documentElement[data-theme]`; `ThemeToggle` writes it back and dispatches `pawan-theme-change`; `HeroVideo` listens to the event *and* a `data-theme` `MutationObserver` as a belt-and-braces fallback.

## Notes

- **Theme**: `pawan-portfolio-theme` in `localStorage`; pre-paint inline script in `layout.tsx` sets `data-theme` before hydration (no flash). `ThemeToggle` dispatches `pawan-theme-change`; `HeroVideo` also watches `data-theme` via `MutationObserver`. Same key and behaviour as the static site, so a visitor's choice carries across both versions.
- **Hero dark-mode text — LOCKED 2026-10-02 (user-approved, do not retune without asking):** `.hero-copy #a9a8bc`, `h1 #b3b1c6 @400`, `h1 em #8a97dd @400`, `.hero-intro #a3a2b5 @400`, eyebrow/foot `#d6d7e6`; no backdrop panel (text-shadow only), light `.55/.28/.08` scrim. Lives in `app/globals.css` — keep in sync with the static `styles.css` + `tests/dark-contrast.test.js` values if either side changes.
- **Assets**: anything under `public/` is served from `/` — videos/posters live at `/assets/*` (e.g. `/assets/hero-portfolio-dark.mp4`), matching the static site's `assets/*` paths. Root copies (`/favicon.ico`, `/logo.svg`, `/favicon.png`, `/apple-touch-icon.png`) satisfy the Metadata icons; the full set also sits under `/assets/`.
- **Favicon**: `app/favicon.ico` is the canonical icon — Next.js serves the App Router file convention ahead of `public/favicon.ico`, so keep the two byte-identical (both are the brand P-bolt; the create-next-app default must never be restored).
- **Selected work**: `Work.tsx` renders the gallery (3 visible cards on desktop grid, all 6 swipeable on mobile). Carousel state (`isNarrow` via `matchMedia("(max-width: 900px)")`, rAF-throttled `onScroll`, cached card step) only activates on mobile. All styling lives in the `SELECTED WORK — gallery` block in `app/globals.css`: tall (400–540px) rounded cards, absolute-fill media + gradient scrim + bottom overlay, single cheap `box-shadow`, no `backdrop-filter`, no `content-visibility` experiments. Desktop intentionally has no nested scroller — a nested `overflow-x:auto` + `scroll-snap` strip inside the vertical page causes scroll-chaining stalls ("hangs") on desktop Chrome/Windows.
- **Scroll-jank guardrails (do not regress)**: keep hero videos paused off-screen (`HeroVideo.tsx`); keep work cards outside `Reveal`; never put `getComputedStyle`/`offsetWidth` inside a scroll handler — cache on resize; never add a desktop nested scroller or `scroll-snap-type: mandatory` back to `.work-viewport`.
- **Fonts**: loaded via the Google Fonts `@import` at the top of `app/globals.css` (Manrope + DM Mono), same as the static site — no `next/font` migration yet.
- **Reveal**: renders the semantic element itself (`as="div"`, `as="li"`, `as="article"`) so grid/flex child selectors keep working. Work gallery cards intentionally skip `Reveal` (plain `<li>`) to keep large image layers off the compositor during scroll.
- **Contact form** — front-end validation only; success flow is local (`mailto:hello@pawan.dev` fallback preserved). Project type is a radio-chip `<fieldset>`, **not** a `<select>`; the `mailto:` action still posts `name` / `email` / `project-type` / `message`, so the chip values must stay short/slug-like.
- **Contact section always dark** — `.contact{color-scheme:dark}` forces dark controls in both themes; it is not theme-switchable, so all new contact CSS uses explicit white-alpha values rather than palette vars for surfaces/borders.
- **Never append CSS with PowerShell `Add-Content` / shell heredocs** — it corrupts UTF-8 (em dashes became `U+FFFD`, which is how a whole-page styling failure was introduced). Use the editor tool. If it happens: repair the bytes, verify brace balance (`{` count == `}` count), then `rm -rf .next` and restart the dev server — a corrupted chunk makes the dev server serve stale CSS for the *entire* page.
- **Local logs**: `dev.log` (dev-server output) is git-ignored — never commit it.

## Accessibility

Same posture as the static site: semantic landmarks with labelled regions, `aria-pressed` on the theme toggle, `:focus-visible` outlines, form errors via `role="alert"` / `aria-live="polite"`, and full `prefers-reduced-motion` support (reveals, hero videos, and moon/star idle animations all stand down). The work gallery viewport is a labelled region with keyboard focus only on mobile (where the swipe strip exists); desktop cards are plain links, reachable by Tab without a pointer.

## Author

**Pawan** — full-stack developer, Delhi + remote
hello@pawan.dev · [github.com/PawanKumar-Dev](https://github.com/PawanKumar-Dev)

© 2026 Pawan. Built with care, no templates.

