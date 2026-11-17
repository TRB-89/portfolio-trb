# PORTFOLIO V2 — BEYOND THE INTERFACE
## Master Implementation Plan

**Project Owner:** Tarun R.  
**Identity:** AI & Systems Developer  
**Institution:** Computer Science and Business Systems, Rajalakshmi Institute of Technology  
**Development Branch:** `feat/portfolio-v2`  
**Production Deployment Target:** https://portfoliotrb.vercel.app/  

---

### Executive Architectural Overview

This document outlines the nine-stage engineering roadmap migrating Tarun R.'s portfolio from a single-file legacy document into a modular, production-grade React + TypeScript application with 18 locked React Bits interactive components, WebGL/OGL hardware acceleration, and an Opium / Industrial Minimalist monochrome design language.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       PORTFOLIO V2 ARCHITECTURE                             │
│                                                                             │
│  [React 19] ─── [Strict TypeScript] ─── [Vite] ─── [Tailwind Design Tokens] │
│                                                                             │
│  ┌──────────────────────────── 8 SECTIONS ────────────────────────────────┐ │
│  │ 01 Hero (TechText / LiquidChrome / RotatingText)                       │ │
│  │ 02 About (Lanyard 3D / ScrollReveal)                                   │ │
│  │ 03 Selected Work (Flex Carousel Expanding Panels / Fallback Catalogue) │ │
│  │ 04 Case Studies (ScrollStack / Parallax & Vortex Deep Dives)           │ │
│  │ 05 Technical Arsenal (LogoLoop / MagicBento)                           │ │
│  │ 06 Achievements (CountUp / AnimatedList)                               │ │
│  │ 07 Currently Building (Active Repos / AGARAM / Decision Intelligence)  │ │
│  │ 08 Contact (Direct Mailto Protocol / No Placeholders)                  │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│  [Global Shell: TargetCursor | Magnet | GradualBlur | Noise | MetallicPaint] │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### Phase Roadmap

#### Phase 01: Foundation and Architecture (COMPLETED & VERIFIED)
- **Objective:** Establish the clean, scalable foundation for the entire v2 application.
- **Milestones:**
  1. Git repository verification, clean safety isolation on `feat/portfolio-v2`, preserving legacy portfolio in git history.
  2. Setup React 19, TypeScript in strict mode, Vite 6, Tailwind CSS with centralized design tokens (`#050505` monochrome with restrained `#790C18` crimson), ESLint 9, Prettier, and Playwright.
  3. Author strongly typed data architectures: `profile.ts`, `projects.ts` (all 11 initiatives with honest disclosures), `skills.ts`, and `achievements.ts`.
  4. Create structural layout containers for all 8 website sections in designated semantic order:
     - 01 — Identity / Hero
     - 02 — About Me
     - 03 — Selected Work
     - 04 — Engineering Case Studies
     - 05 — Technical Arsenal
     - 06 — Achievements and Milestones
     - 07 — Currently Building
     - 08 — Contact
  5. Inspect and repair contact form: replace fake submit alerts with transparent mailto dispatch and copy-to-clipboard functionality.
  6. Establish SEO foundation: meta tags, canonical URL, Open Graph, Twitter cards, fallback crawlable headings.
  7. Formulate `IMPLEMENTATION_PLAN.md`, `COMPONENT_MANIFEST.md`, and `ASSET_REQUIREMENTS.md`.
  8. Verify zero TypeScript errors, clean linting, successful production build, and pass Playwright baseline tests.

#### Phase 02: Visual Identity, Hero & Cinematic Shell (COMPLETED & VERIFIED)
- **Objective:** Implement the industrial typography, atmospheric hero environment, and global film grain.
- **Components:**
  1. `TechText` (Hero interactive name wordmark with letter-by-letter dashed vector paths).
  2. `LiquidChrome` (Atmospheric metallic shader background running via WebGL).
  3. `RotatingText` (Dynamic display of rotating professional identities).
  17. `Noise` (Cinematic film grain overlay across viewport).
  18. `MetallicPaint` (Liquid chrome shader applied to TRB wordmark in Hero header).
- **Milestones:**
  - Responsive sizing using CSS clamp and canvas adaptation to preserve interaction across mobile and desktop.
  - Capability detection (`isWebGLAvailable()`) to disable WebGL shader on unsupported or low-power hardware.
  - Semantic `<h1>` accessible to screen readers, crawlers, and automated tests.
  - Global `Noise` film grain with `pointer-events-none` ensuring zero layout shifting or click interference.

#### Phase 03: Navigation and Global Interactions (COMPLETED & VERIFIED)
- **Objective:** Deploy global technical micro-interactions, animated full navigation overlay, accessible bottom dock, and responsive interactive feedback.
- **Components:**
  4. `StaggeredMenu` (Animated full navigation menu with GSAP staggered transitions, 8 semantic sections, Escape key dismiss, body scroll lock, and off-screen unmount).
  5. `Dock` (Bottom quick-access dock with magnification physics, pure black metallic theme, responsive sizing, and automatic hiding when StaggeredMenu is open).
  14. `TargetCursor` (Custom reticle cursor snapping to `.cursor-target` elements with spring kinematics and difference mix-blend; disabled on touch and reduced-motion devices).
  15. `Magnet` (Restrained magnetic physics pulling buttons and CTAs to pointer with `magnetStrength={2}` and `maxOffset={12}`).
  16. `GradualBlur` (Cinematic progressive edge blurs for top header boundary with `pointer-events-none`).
- **Milestones:**
  - Integrated 5 official React Bits TypeScript + Tailwind implementations from React Bits registry without invented properties.
  - Fine pointer & touch detection: `TargetCursor` automatically disabled on coarse pointer / touch devices (`useTouchDevice()` / `matchMedia('(hover: hover) and (pointer: fine)')`).
  - Reduced-motion accessibility checks: bypassed GSAP and spring physics for users requesting reduced motion.
  - Multi-tier layer and z-index coordination: zero pointer-events traps, zero interference between menu, dock, noise grain, and content.
  - Bundle size investigation: total JS gzipped is ~209 kB with vendor, motion/GSAP, and index code splitting.
  - Automated testing: 54/54 passing Playwright tests covering all 18 specified navigation and interaction behaviors on Desktop Chromium and Mobile Chrome.
  - Visual QA verification: captured and visually inspected desktop/mobile open and closed states in `tests/qa-screenshots/`.

#### Phase 04: About and Lanyard Identity (COMPLETED & VERIFIED)
- **Objective:** Present the personal engineering narrative, intellectual framework, and interactive 3D personal badge.
- **Components:**
  6. `Lanyard` (Interactive 3D swinging badge with Three.js Verlet rope physics simulation, metal silver clip, ribbon strap, and high-resolution monochromatic ID badge textures).
  7. `ScrollReveal` (Editorial lead statement progressive unmasking with subtle blur, opacity, and metallic silver highlight via GSAP ScrollTrigger).
- **Milestones:**
  - Designed custom monochromatic high-resolution badge textures (800×1125 px) for front and back (`public/images/profile/badge-front.png` and `badge-back.png`) detailing Tarun R., CSBS at RIT Chennai, cryptographic seals, and core competencies.
  - Implemented dynamic code-splitting via `React.lazy` and `Suspense`, isolating Three.js and Verlet rope simulation into an independent chunk (`Lanyard-*.js`, 26.39 kB / 10.74 kB gzip).
  - Built an accessible static fallback card rendered on devices requesting `prefers-reduced-motion: reduce` or lacking WebGL support, providing high-contrast credential cards with clearance metadata.
  - Re-architected `src/sections/About.tsx` into a responsive two-column editorial layout: Left column with ScrollReveal lead statement, authentic narrative, and 4 Operating Principles; Right column with authenticated Academic Trajectory card and 3D Identity Lanyard.
  - Automated testing: 18 comprehensive tests in `tests/about-lanyard.spec.ts` covering editorial copy, ScrollReveal integration, authentic credentials, 3D Canvas initialization, two-column and stacked responsive layouts, and reduced-motion fallback. Total test suite expanded to 72 automated Playwright tests with 100% pass rate.
  - Visual QA verification: captured and visually inspected desktop 3D badge (`07-desktop-about-lanyard.png`), mobile stacked layout (`08-mobile-about-lanyard.png`), and reduced-motion accessible fallback (`09-desktop-about-fallback.png`).

#### Phase 05: Interactive Flex Carousel Project Showcase (UPDATED)
- **Objective:** Deploy the primary interactive horizontal expanding panel showcase for Tarun's software systems.
- **Component:**
  8. `FlexCarousel` (Interactive horizontal expanding panels with smooth fluid collapse/expand mechanics).
- **Milestones:**
  - Horizontal expanding project panels where clicking or hovering an initiative expands it into a visually dominant layout (`flex-[3.5]`) while smoothly collapsing neighboring panels (`flex-[0.8]`).
  - Active project panel displays:
    - High-contrast project cover schematic / artwork.
    - Active project title, domain, and status badges.
    - Full technical description and highlights.
    - Technology stack tags.
    - Verified repository and live demo links.
  - Collapsed neighboring panels present rotated vertical identity labels and expand smoothly upon user interaction.
  - Pure black background (`#050505`), monochrome typography, restrained `#262626` borders, and subtle easing (`ease-industrial`).
  - Zero circular carousel, cylinder, perspective, rotation, or depth-fade dependencies.
  - Complete keyboard accessibility (Tab focus, Enter/Space/Arrow key selection).
  - Touch-friendly mobile layout (vertical accordion cards on mobile viewports).
  - Reduced-motion support via `useReducedMotion()`.

#### Phase 06: Engineering Case Studies
- **Objective:** Deep-dive into technical architectures for flagship initiatives.
- **Components:**
  9. `ScrollStack` (Cards pin and stack neatly as you scroll, settling into a dimmed deck).
- **Milestones:**
  - Deep dive 1: PARALLAX (Geospatial SAR processing, Rasterio, NASA Earthdata pipelines).
  - Deep dive 2: VORTEX (GPU optimization solver, CUDA CSR kernels, memory bandwidth analysis).
  - Deep dive 3: ØMEN (Intelligent threat detection, DAG attack simulation graphs).

#### Phase 07: Technical Expertise and Achievements
- **Objective:** Showcase technical capabilities and verified track record.
- **Components:**
  10. `LogoLoop` (Infinite looping marquee of toolchains and languages).
  11. `MagicBento` (Interactive bento grid showcasing engineering disciplines with pointer light).
  12. `AnimatedList` (Springing milestone entries with keyboard navigation).
  13. `CountUp` (Smooth number transition for verified metrics).
- **Milestones:**
  - Verified milestones with real links (NASA Space Apps 2026, RIT academic standing, VORTEX benchmarks).
  - Strict honesty: zero unverified benchmark inflation or placeholder stats.

#### Phase 08: Final Integration, Accessibility, and SEO
- **Objective:** Harmonize all modules, audit WCAG 2.2 AA accessibility, and optimize web vitals.
- **Milestones:**
  - Lighthouse audit targeting >95 across Performance, Accessibility, Best Practices, and SEO.
  - Zero layout shift (CLS < 0.05), First Contentful Paint < 1.0s.
  - Screen reader navigation audit with NVDA / VoiceOver.

#### Phase 09: Testing and Deployment
- **Objective:** Complete end-to-end regression validation and prepare production release.
- **Milestones:**
  - Full Playwright test suite covering desktop, tablet, and mobile browsers.
  - Clean build without warnings.
  - Verify deployment preview on Vercel under isolated preview branch before main merge.
