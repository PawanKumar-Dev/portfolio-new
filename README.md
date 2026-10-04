# Pawan — Portfolio (Next.js)

A single-page portfolio for **Pawan**, a full-stack developer building durable digital products. Built with Next.js 16 App Router + React 19 + TypeScript — migrated from the zero-dependency static site in `C:\Projects\portfolio-new`, same design, split into components.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)

> **Static original:** the framework-free version (plain `index.html` + `styles.css` + `script.js`) was the source of this port. This folder is its component-based Next.js version — same design language, same locked dark-mode palette.

---

## Highlights

- **Component-split App Router app** — server components for static sections, `'use client'` only where interactivity needs it (work carousel, nav, toggle, videos, form, reveals)
- **Interactive selected-work carousel** (`Work.tsx`) — a light "living room" scene (dotted wall, decorative top bar, and a desk / chair / plant band lifted from the reference) holding six auto-drifting portrait cards (title + author above a soft-faded photo, gradient orb bottom-left) and a violet-tiled "Selected work" label. Hover / focus / tap expands a card into a feathered panorama with scattered POI labels — project title + author centred on a triangle marker — and a coral `+` action button. Drift pauses on hover, focus and while expanded; on touch the first tap opens the card and the second follows the link
- **Animated day/night switch** (`ThemeToggle.tsx`) — follows the system preference until the visitor chooses, persists to `localStorage` (`pawan-portfolio-theme`), replays knob pop + burst ring on every flip, dispatches `pawan-theme-change`; pre-paint inline script in `layout.tsx` sets `data-theme` before hydration (no theme flash)
- **Theme-aware P-bolt logo** (`SiteHeader.tsx`) — inline SVG wordmark with both arch variants, swapped via the same `[data-theme="dark"]` CSS as the static site
- **SVG navigation dock** (`NavDock.tsx`) — five 15px / 1.8px `currentColor` icons, hover preview + `--indicator-x` indicator sync, `IntersectionObserver` active-section tracking
- **Theme-aware hero video** (`HeroVideo.tsx`) — light + lazy dark layers crossfade via `.is-active`; only the visible layer plays; watches both the `pawan-theme-change` event and a `data-theme` `MutationObserver`
- **Reveal-on-scroll** (`Reveal.tsx`) — polymorphic wrapper (`as="div"` for work cards, `as="article"` for journal) that renders the semantic element itself so `.journal-list` selectors keep working
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
│   ├── Work.tsx          # Client: 01 Selected work — drifting card scene, expand state on hover/focus/tap
│   ├── Skills.tsx        # Server: 02 Capabilities (5 rows)
│   ├── Journal.tsx       # Server: 03 Notes (3 entries via Reveal as="article")
│   ├── Contact.tsx       # Server: 04 Contact section shell; embeds <ContactForm/>
│   ├── ContactForm.tsx   # Client: validation mirroring static script.js
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
| 01 | Selected work | `Work.tsx` | Drifting six-card room scene (dotted wall + desk/chair/plant band); hover/focus/tap expands a card into a labelled panorama with a CTA |
| 02 | Capabilities | `Skills.tsx` | Statement + 5 capability rows |
| 03 | Notes from the work | `Journal.tsx` | 3 journal entries |
| 04 | Contact | `Contact.tsx` + `ContactForm.tsx` | Copy + validated form + `mailto:` fallback |

## Component model

- **Server by default** (`SiteHeader`, `Hero`, `Skills`, `Journal`, `Contact`, `SiteFooter`) — static markup, zero JS shipped.
- **`'use client'` islands** — `Work` (open-drawer state), `NavDock` (hover/active tracking), `ThemeToggle` (`aria-pressed`, persist, animation replay), `HeroVideo` (crossfade sync), `ContactForm` (validation state), `Reveal` (`IntersectionObserver` + `prefers-reduced-motion`).
- **Theme flow** — `layout.tsx` pre-paint script reads `localStorage 'pawan-portfolio-theme'` → `documentElement[data-theme]`; `ThemeToggle` writes it back and dispatches `pawan-theme-change`; `HeroVideo` listens to the event *and* a `data-theme` `MutationObserver` as a belt-and-braces fallback.

## Notes

- **Theme**: `pawan-portfolio-theme` in `localStorage`; pre-paint inline script in `layout.tsx` sets `data-theme` before hydration (no flash). `ThemeToggle` dispatches `pawan-theme-change`; `HeroVideo` also watches `data-theme` via `MutationObserver`. Same key and behaviour as the static site, so a visitor's choice carries across both versions.
- **Hero dark-mode text — LOCKED 2026-10-02 (user-approved, do not retune without asking):** `.hero-copy #a9a8bc`, `h1 #b3b1c6 @400`, `h1 em #8a97dd @400`, `.hero-intro #a3a2b5 @400`, eyebrow/foot `#d6d7e6`; no backdrop panel (text-shadow only), light `.55/.28/.08` scrim. Lives in `app/globals.css` — keep in sync with the static `styles.css` + `tests/dark-contrast.test.js` values if either side changes.
- **Assets**: anything under `public/` is served from `/` — videos/posters live at `/assets/*` (e.g. `/assets/hero-portfolio-dark.mp4`), matching the static site's `assets/*` paths. Root copies (`/favicon.ico`, `/logo.svg`, `/favicon.png`, `/apple-touch-icon.png`) satisfy the Metadata icons; the full set also sits under `/assets/`.
- **Favicon**: `app/favicon.ico` is the canonical icon — Next.js serves the App Router file convention ahead of `public/favicon.ico`, so keep the two byte-identical (both are the brand P-bolt; the create-next-app default must never be restored).
- **Selected work**: `Work.tsx` holds the open-slab index (`useState`, default 0 = Lumen), the six slab projects (title/kind/photo/badge icon + tint), and hover / focus / tap-to-open handlers. All styling lives in the `SELECTED WORK — expanding-slab accordion` block at the end of `app/globals.css`: bottom-aligned pills with staggered narrow heights, the open slab filling the row and extending ~4% of the deck past the band top and bottom, a shared white badge (bottom-centred when shut, bottom-left when open) plus bold title / lighter category beside it, ~0.62s ease-out sizing with a ~0.2s delayed caption fade. `<=900px` the row becomes a horizontal scroll-snapping strip of equal tiles (`public/work/` photos).
- **Fonts**: loaded via the Google Fonts `@import` at the top of `app/globals.css` (Manrope + DM Mono), same as the static site — no `next/font` migration yet.
- **Reveal**: renders the semantic element itself (`as="div"` for work cards, `as="article"` for journal) so `.journal-list` selectors keep working.
- **Contact form** — front-end validation only; success flow is local (`mailto:hello@pawan.dev` fallback preserved).

## Accessibility

Same posture as the static site: semantic landmarks with labelled regions, `aria-pressed` on the theme toggle, `:focus-visible` outlines, form errors via `role="alert"` / `aria-live="polite"`, and full `prefers-reduced-motion` support (reveals, hero videos, and moon/star idle animations all stand down). The selected-work accordion also opens a slab on keyboard focus, so every case study is reachable without a pointer.

## Author

**Pawan** — full-stack developer, Delhi + remote
hello@pawan.dev · [github.com/PawanKumar-Dev](https://github.com/PawanKumar-Dev)

© 2026 Pawan. Built with care, no templates.

