# Frontend Engineering Audit: Apel Manis redesign and dependency upgrade

**Perspective**: Frontend Engineer
**Date**: 2026-10-31
**Plan**: `~/.claude/plans/saya-mau-upgrade-semua-pure-galaxy.md`
**Branch**: `feat/redesign` (uncommitted)

## Plan Summary
NextUI, next-themes, typed.js, react-fast-marquee and framer-motion are removed. Every page and shared component is rewritten on Tailwind v4 with native `<dialog>` and `<details>`, and all motion moves to CSS scroll-driven animations. Next 16, React 19, react-leaflet 5 and ESLint 10 flat config are now in use.

## Files Reviewed
| File | Frontend Role | Risk |
|------|--------------|------|
| `app/providers.tsx` | Locale store (`useSyncExternalStore` over localStorage) | Medium |
| `components/preview-facilities.tsx` | Pinned horizontal gallery + focus handling | Medium |
| `components/lightbox.tsx` | Shared `<dialog>` lightbox | Low |
| `components/navbar.tsx`, `locale-switch.tsx`, `footer.tsx` | Chrome | Low |
| `components/map-radius.tsx` | Leaflet map, client-only | Low |
| `app/page.tsx`, `facilities`, `faq`, `contact`, `error`, `not-found` | Pages | Low |
| `styles/globals.css` | Tokens and motion utilities | Medium |

## Verdict: APPROVE WITH CHANGES

## Critical Issues (Must Fix)
All four were found while checking the pages in the browser, and all four are now fixed.

| # | Issue | File(s) | Why It Breaks | Code Fix |
|---|-------|---------|---------------|----------|
| 1 | Keyboard focus scrolled the pinned gallery sideways | `styles/globals.css`, `components/preview-facilities.tsx` | `overflow: hidden` can still be scrolled by script, so focusing an off-screen photo set `scrollLeft` to about 3500 px and broke the layout | Sticky wrapper uses `overflow: clip`, and an `onFocus` handler scrolls the page to the scroll position that centres the photo |
| 2 | Gallery track never moved | `styles/globals.css` | The flex item shrank to the viewport width, so `calc(-100% + 100cqw)` came out as 0 | `flex-shrink: 0` on the track in pinned mode |
| 3 | Map drawn over the sticky header | `components/map-radius.tsx` | Leaflet panes use z-index 400–1000 | `isolate` on the map container |
| 4 | Focus ring invisible on dark surfaces | `styles/globals.css` | A skin ring on leaf has a contrast of 2.02:1 | Paper-coloured ring inside `.bg-leaf` and `dialog` |

## Recommendations
| # | Issue | File(s) | Why | Fix |
|---|-------|---------|-----|-----|
| 1 | Locale exists only on the client | `app/providers.tsx`, all pages | The server always renders Indonesian, so English visitors see Indonesian text before hydration swaps it. Every page has to be `"use client"`. | Keep the locale in a cookie, wire `i18n.ts` into the next-intl plugin, and turn the pages back into server components |
| 2 | Tour video autoplays on every visit | `components/preview-facilities.tsx` | About 875 KB downloads even if nobody scrolls to the gallery | Start playback from an IntersectionObserver and drop `autoPlay` |
| 3 | FAQ `open` prop overrides what the user toggled | `app/faq/page.tsx` | When `searchQuery` changes from empty to non-empty, React rewrites `open` on the first item | Use `open` only for the first render (a `defaultOpen`-style key), or let `<details>` own its own state |
| 4 | Nav landmark label hardcoded as "Utama" | `components/navbar.tsx` | English screen-reader users hear an Indonesian landmark name | Add a translated key such as `nav.main` |
| 5 | Facilities SEO copy claims features the data does not list | `app/facilities/layout.tsx` | The metadata mentions "keamanan 24 jam", AC and a shared kitchen. The facility list has none of these, and the FAQ says AC costs extra. | The owner should confirm the copy, then align it with `contents/facilities.ts` |

## Nice-to-Haves
| # | Suggestion | Rationale |
|---|------------|-----------|
| 1 | Replace `t.raw("facts") as {...}[]` with typed messages (`next-intl` `AppConfig` augmentation) | The cast is unchecked, and a missing key fails silently |
| 2 | Memoise `[...place.coords]` in `map-radius.tsx` | A new array on every render makes Leaflet call `setLatLng` on locale change. The cost is negligible today. |

## Render Path Analysis
- **Locale change**: `useSyncExternalStore` notifies, `Providers` re-renders, and the whole tree re-renders under the new `NextIntlClientProvider` messages. This is rare and user-initiated, so it is acceptable.
- **Lightbox open/next/prev**: the state is local to the gallery owner (`PreviewFacilities` or `FacilitiesPage`), so only that list (10 or 18 items) and the dialog re-render. `Lightbox` keeps the last photo through `setState` during render, not in an effect, which avoids a cascading render.
- **Mobile menu toggle**: the state is local to `Navbar`, and only the header re-renders.
- **Scrolling**: no React work. Every scroll-linked effect (pinned gallery, reveals, header fill, parallax) is a CSS animation timeline. The only JS on scroll paths is the focus handler, which runs on focus events.

## Type Safety Assessment
`strict` is on. `nearbyPlaces` uses `as const satisfies`, so categories and modes stay typed for `t()` calls. The gaps are the `t.raw` cast and the untyped translation keys (`captions.${n}` is a template string). TypeScript is pinned to 6.0.3 because `typescript-eslint` refuses TS 7.0.

## Verdict Details
- Component Architecture: PASS. The duplicate lightbox was merged into `components/lightbox.tsx`, and contact data has one source (`siteConfig.contact`).
- State Management: PASS. The locale is an external store, with no setState in effects.
- Type Safety: CONCERNS (minor). See the `t.raw` cast and the untyped keys.
- Rendering Performance: PASS. Motion runs in CSS and adds no JS on scroll.
- Bundle Impact: PASS. Eleven runtime packages were removed, and Leaflet is still loaded through `next/dynamic` with `ssr: false`.
