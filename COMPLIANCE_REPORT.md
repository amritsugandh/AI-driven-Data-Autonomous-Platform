# FlowPilot AI Compliance Report

## Requirement Checklist

### Project
- [x] React, Vite, TypeScript, Tailwind CSS project created.
- [x] Strict TypeScript configured with absolute `@/*` imports.
- [x] ESLint and Prettier configured.
- [x] Modular folders for assets, components, constants, hooks, utils, types, and styles.

### Layout
- [x] Navbar.
- [x] Hero section.
- [x] Trusted companies.
- [x] AI workflow.
- [x] Desktop bento features grid.
- [x] Mobile accordion.
- [x] Pricing.
- [x] Testimonials.
- [x] FAQ.
- [x] CTA.
- [x] Footer.

### Features
- [x] Dynamic pricing engine uses a pricing matrix and regional currency config.
- [x] Monthly and annual billing supported.
- [x] Annual billing applies a 20% discount automatically.
- [x] Currency switch supports INR, USD, and EUR.
- [x] Pricing state is localized to the pricing component.
- [x] Desktop bento and mobile accordion share the same active feature state.
- [x] Active feature state is preserved across responsive layout changes.

### Animations
- [x] CSS transitions use 150-200ms timing for hover/focus interactions.
- [x] Initial hero motion uses the Web Animations API under 500ms.
- [x] GPU-friendly `translate3d` and `will-change` used on animated surfaces.
- [x] Reduced-motion preference respected.
- [x] No Framer Motion, GSAP, Anime.js, Radix, or Shadcn animation dependency.

### SEO
- [x] Semantic `header`, `nav`, `main`, `section`, `article`, and `footer`.
- [x] Meta title and description.
- [x] Open Graph tags.
- [x] Twitter card tags.
- [x] JSON-LD.
- [x] Canonical URL.
- [x] `robots.txt`.
- [x] `sitemap.xml`.

### Accessibility
- [x] Keyboard-accessible buttons, links, selects, and accordions.
- [x] ARIA labels and expanded states where needed.
- [x] Visible focus states.
- [x] Semantic heading hierarchy.
- [x] Alt handling for decorative SVG icons.

### Performance
- [x] Production build succeeds.
- [x] Static sections memoized.
- [x] Pricing calculations memoized.
- [x] No external UI/icon/animation libraries.
- [x] Local SVG assets and supplied demo video used.

### Design System
- [x] Heading font: JetBrains Mono.
- [x] Body font: Inter.
- [x] Palette extracted from `colorPallet.pdf` and used as CSS variables:
  - Arctic Powder `#F1F6F4`
  - Mystic Mint `#D9E8E2`
  - Forsythia `#FFC801`
  - Nocturnal Expedition `#114C5A`
  - Deep Saffron `#FF9932`
  - Oceanic Noir `#172B36`
- [x] All supplied SVGs copied into `src/assets/svg`.
- [x] All supplied SVGs are integrated through UI sections or the footer asset strip.

### Verification
- [x] `npm run build` passes.
- [x] `npm run lint` passes.
- [x] Local dev server responds with HTTP 200 at `http://127.0.0.1:5173`.
- [ ] In-app browser screenshot verification could not be completed because the browser runtime failed before attaching in this session.
- [ ] Lighthouse was not run because no local browser executable was available to the shell.

## Implementation Plan Applied

1. Create Vite React TypeScript project foundation with Tailwind, ESLint, Prettier, absolute imports, SEO files, and strict compiler settings.
2. Extract supplied color palette from the embedded PDF image and codify it as CSS custom properties.
3. Copy all supplied SVGs into the source asset tree and route them through a typed asset registry.
4. Implement page sections as memoized React components with semantic landmarks.
5. Implement pricing as localized state with `useMemo`, `useCallback`, configuration objects, and matrix-derived values.
6. Implement features as a shared-state desktop bento plus mobile accordion.
7. Add CSS transitions, WAAPI hero entrance motion, reduced-motion support, responsive grids, and overflow-safe constraints.
8. Run build, lint, server-response checks, and document residual verification limitations.
