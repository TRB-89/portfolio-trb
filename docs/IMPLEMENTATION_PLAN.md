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

#### Phase 05: Interactive Flex Carousel Project Showcase (COMPLETED & VERIFIED)
- **Objective:** Deploy the primary interactive horizontal expanding panel showcase and 3D ribbon reel for Tarun's software systems.
- **Component:**
  8. `FlexCarousel` (Interactive horizontal expanding panels with smooth fluid collapse/expand mechanics, dual-mode Dossier / 3D OGL ribbon reel).
- **Milestones:**
  - Integrated official React Bits `FlexCarousel.tsx` (TypeScript + Tailwind, OGL engine) and encapsulated with dynamic lazy-loading in `src/components/shared/FlexCarouselStage.tsx`.
  - Re-architected `src/sections/Projects.tsx` with a dual-mode stage (`Dossier` expanding horizontal panels vs `3D Reel` curved ribbon), quick index jump buttons (`01` through `08`), and active initiative counters.
  - Prioritized all 8 required engineering initiatives in strict sequence:
    1. `PARALLAX` — Cross-sensor SAR surface change analysis (NASA Space Apps 2026 participant codebase).
    2. `VORTEX` — GPU-accelerated mathematical optimization and CSR sparse solver.
    3. `VESPER` — Systems engineering architecture undergoing internal documentation verification.
    4. `ØMEN` — Cybersecurity intelligence, attack graphs, and neural anomaly scoring.
    5. `AURA — Mental Wellness` — Conversational AI journaling platform with encrypted local audio pipelines.
    6. `GFG 2.0 REDLINE` — AI-assisted career comeback intelligence for women returning to tech.
    7. `AGARAM` — Multilingual programming education platform (explicitly labeled `PLANNED` / design staging).
    8. `ONE PLANET` — Civic sustainability intelligence and municipal issue tracking.
  - Full engineering dossier rendered per active project:
    - Domain badge, project index (`01`–`08`), and authentic status badge (`RESEARCH`, `EXPERIMENTAL`, `COMPLETED`, `PLANNED`, `IN_PROGRESS`).
    - Schematic preview container with authentic label (`[SYSTEM_SCHEMATIC_V2 // HARDWARE_VERIFIED]`, `[ROADMAP_SPECIFICATION // PLANNED_STAGE]`, or `[STAGED_ARCHITECTURE // UNDER_VALIDATION]`).
    - Two-column problem friction (`01 // PROBLEM FRICTION`) and engineered solution (`02 // ENGINEERED SOLUTION`).
    - Verified engineering highlights list detailing genuine technical achievements.
    - Technology stack pills and verified repository and deployment actions.
  - Interactive horizontal panel expansion on desktop (`lg:flex-[4]` active vs `lg:flex-[0.7]` collapsed) with industrial spring easing (`duration-500 ease-industrial`).
  - Mobile responsive adaptation: transforms smoothly into an accessible vertical stacked accordion without hover traps.
  - Keyboard accessibility: full Tab roving focus, Enter/Space expansion, and Left/Right/Up/Down arrow key navigation.
  - Reduced motion: static presentation without layout transitions when `prefers-reduced-motion` is active.
  - Preserved secondary complete project catalogue with domain filter tabs (`All Initiatives`, `Geospatial`, `High-Performance`, `Cybersecurity`, `Conversational`, `Sustainability`).
  - Automated testing: 20 test cases across Chromium & Mobile Chrome in `tests/projects-showcase.spec.ts`. Master suite expanded to 92 automated tests with 100% pass rate (88 passed, 4 desktop-only skipped on mobile).
  - Visual QA verification: captured and visually inspected desktop expanded dossier (`10-desktop-flex-carousel-expanded.png`), neighbor panel collapse (`11-desktop-flex-carousel-neighbor.png`), mobile stacked accordion (`12-mobile-flex-carousel-stacked.png`), and 3D OGL Reel (`13-desktop-flex-carousel-3d-reel.png`).

#### Phase 06: Engineering Case Studies & ScrollStack (COMPLETED & VERIFIED)
- **Objective:** Deep-dive into technical architectures, tradeoffs, and system boundaries for flagship initiatives using official React Bits `ScrollStack`.
- **Component:**
  9. `ScrollStack` (Cards pin and stack naturally as you scroll on desktop with controlled scale and dimming; clean sequential presentation on mobile and reduced-motion).
- **Milestones:**
  - Integrated official React Bits `ScrollStack.tsx` (`ScrollStack` and `ScrollStackItem`) with pure React dependency footprint.
  - Authored strongly-typed `src/data/caseStudies.ts` with comprehensive schemas (`CaseStudy`, `ArchitectureStep`, `CaseStudyDecision`) supporting independent content management without touching presentation code.
  - Deep dive 1: **PARALLAX** (Geospatial SAR processing, Rasterio, NumPy, NASA Earthdata authentication, NASA OPERA DSWE cross-sensor comparison, 7-stage processing pipeline separating implemented vs planned stages, honest disclosures with zero fabricated flood routing claims).
  - Deep dive 2: **VORTEX** (GPU optimization solver, Compressed Sparse Row (CSR) storage format, parallel CUDA warp-reduction intrinsics `__shfl_down_sync`, automated CPU fallback, memory bandwidth saturation, microbenchmark SpMV speedups with clear end-to-end PCIe overhead caveats).
  - Deep dive 3: **ØMEN** (Topological attack graph parser, Directed Acyclic Graph (DAG) reachability algorithms, multi-hop breach simulation, neural anomaly scoring heuristics, SOC analyst dashboard, no false enterprise-grade claims).
  - Deep dive 4: **VESPER** (Systems engineering architecture preserved with understated documentation-pending status, formal interface modeling, and strict benchmark withholding policy).
  - Configured `ScrollStack` with `useWindowScroll={true}`, `smoothScroll={false}` (zero scroll hijacking), `itemScale={0.03}`, `dimAmount={0.15}`, `blurAmount={0}` (100% crisp typography), `tiltAmount={0}`, and `rotationAmount={0}`.
  - Mobile & Reduced-Motion Fallback: automatically switches to a clean vertical sequential presentation on mobile devices and when `prefers-reduced-motion` is active.
  - Quick index selector tabs (`PARALLAX`, `VORTEX`, `ØMEN`, `VESPER`) allowing rapid random-access jumping between case study dossiers.
  - Automated testing: 30 dedicated automated tests in `tests/case-studies-scrollstack.spec.ts`. Master suite expanded to 122 automated Playwright tests with 100% pass rate (116 passed, 6 device-specific skips).
  - Visual QA verification: captured and visually inspected desktop case study intro (`14-desktop-case-studies-intro.png`), PARALLAX case study (`15-desktop-case-study-parallax.png`), VORTEX case study (`16-desktop-case-study-vortex.png`), ScrollStack transition state (`17-desktop-scrollstack-transition.png`), final stacked card (`18-desktop-case-study-final-card.png`), mobile sequential presentation (`19-mobile-case-studies-sequential.png`), and reduced-motion fallback (`20-desktop-case-studies-reduced-motion.png`).

#### Phase 07: Technical Arsenal, Engineering Expertise & Achievements (COMPLETED & VERIFIED)
- **Objective:** Showcase technical capabilities and verified track record using the final four locked React Bits components.
- **Components (All 18 of 18 Locked Components Now Integrated - 100%):**
  10. `LogoLoop` (Infinite looping marquee of toolchains, languages, and systems primitives).
  11. `MagicBento` (Interactive asymmetric bento grid showcasing 6 engineering disciplines with pointer light, metallic border illumination, and subtle 3D tilt).
  12. `AnimatedList` (Interactive spring-driven milestone track record with roving keyboard navigation and hover selection).
  13. `CountUp` (Smooth viewport-triggered numeric counter with screen-reader `<span className="sr-only">` accessibility for verified technical metrics).
- **Milestones:**
  - Integrated official React Bits `MagicBento.tsx`, `LogoLoop.tsx`, `AnimatedList.tsx`, and `CountUp.tsx` into `src/components/reactbits/`.
  - Replaced external `@hugeicons` demo dependencies with `lucide-react` icons already installed in the codebase, preventing bundle bloat.
  - Redesigned `src/sections/TechStack.tsx` (Section 05 // TECHNICAL ARSENAL) featuring `MagicBento` across 6 engineering domains (`Computational Engineering`, `Geospatial Intelligence`, `Artificial Intelligence`, `Cybersecurity`, `Full-Stack Development`, `Design & Product Development`) with verified competence markers (`[EXP]`, `[COM]`, `[FOU]`) and deep links to flagship initiatives.
  - Integrated `LogoLoop` continuous marquee beneath Magic Bento with 18 developer toolchain glyphs, edge fading masks, pause on hover, and accessible static fallback for reduced motion.
  - Redesigned `src/sections/Achievements.tsx` (Section 06 // ENGINEERING MILESTONES) featuring `CountUp` with 4 factual verified metrics (11 Technical Systems, 6 Core Domains, 2 Active Deployments, 95%+ Sparse Memory Savings) and `AnimatedList` rendering 6 authentic milestone records.
  - Automated testing: 28 dedicated automated tests in `tests/techstack-achievements.spec.ts`. Full master test suite expanded to 150 automated Playwright tests with 100% pass rate (142 passed, 8 device-specific skips, 0 failures).
  - Visual QA verification: captured and visually inspected desktop technical arsenal overview (`21-desktop-technical-arsenal.png`), Magic Bento spotlight close-up (`22-desktop-magic-bento-spotlight.png`), LogoLoop marquee (`23-desktop-logoloop-marquee.png`), Achievements CountUp metrics (`24-desktop-achievements-countup.png`), AnimatedList selection ring (`25-desktop-animated-list-selection.png`), mobile technical arsenal (`26-mobile-technical-arsenal.png`), mobile achievements section (`27-mobile-achievements-section.png`), and reduced-motion static fallback (`28-desktop-phase07-reduced-motion.png`).

#### Phase 08: Final Integration, Professional Refinement, Accessibility, and Performance Optimization (COMPLETED & VERIFIED)
- **Objective:** Harmonize all modules into a production-ready engineering portfolio, audit WCAG 2.2 AA accessibility, reconcile empirical benchmark claims, optimize code splitting and chunking, and achieve elite Web Vitals.
- **Milestones:**
  - Professional Identity Refinement: Realigned `profile.ts`, `Hero.tsx`, `About.tsx` with honest undergraduate standing (B.Tech in CSBS at Rajalakshmi Institute of Technology, In Progress, 2024 — Present).
  - Currently Building Section (Section 07 // DEVELOPMENT ROADMAP): Redesigned as a forward-looking technical roadmap (`NEVER STATIC.`) featuring AGARAM (Planned / Architecture Phase), RESURRECTION (Research / Exploration), and VESPER (Architecture documented, hardware benchmarks withheld).
  - Contact Section (Section 08 // OPEN FOR COLLABORATION): Redesigned (`LET'S BUILD WHAT'S NEXT.`) featuring functional mailto client launch, interactive email copy-to-clipboard with toast feedback, and verified GitHub links (zero fake backend submissions).
  - Editorial Colophon & Footer: Minimal oversized editorial footer with static metallic `TRB.` brand mark, `ENGINEERED WITH INTENTION.` headline, smooth back-to-top interaction, and generous bottom padding (`pb-32 sm:pb-36`) clearing the floating SocialDock.
  - Empirical Claim & Benchmark Reconciliation: Authored `docs/EVIDENCE_REGISTER.md` cataloguing EV-01 to EV-13. Reconciled VORTEX memory claims (withheld unverified generic 95%+ CountUp counter, replaced with 4 verified Architecture Dossiers; documented theoretical 85-90% CSR savings for >0.95 sparsity matrices with host-to-device PCIe latency caveats).
  - SEO & Structured Data: Added complete OpenGraph, Twitter card tags, canonical URL, and Schema.org `Person` JSON-LD to `index.html`. Created `public/robots.txt` and `public/sitemap.xml`.
  - Bundle & Chunk Optimization: Enhanced `vite.config.ts` manualChunks with dedicated `r3f` and `icons` chunks. Reduced monolithic `index-*.js` chunk from 665 kB down to 417 kB (zero Rollup chunk size warnings).
  - Production Preview & Lifecycle Validation: Verified zero runtime console errors on production preview. Audited cleanup routines in all WebGL and canvas modules (LiquidChrome, MetallicPaint, Lanyard, ScrollStack, Noise).
  - Lighthouse Production Audit: Captured actual verified Lighthouse scores: Best Practices (100), SEO (100), Accessibility (90), Desktop FCP (0.6s), Desktop LCP (0.6s), CLS (0.002).
  - Automated Regression Testing: 16 dedicated tests in `tests/phase08-refinement.spec.ts`. Master regression suite expanded to 166 automated Playwright tests with 100% pass rate (158 passed, 8 device-specific skips, 0 failures).
  - Visual QA Verification: Captured and visually inspected 12 desktop, mobile, section, and reduced-motion screenshots (`29-` to `40-`) stored in artifact directory.

#### Phase 09: Final Staging, Pre-Flight Verification & Release Preparation
- **Objective:** Final end-to-end verification and staging preparation on branch `feat/portfolio-v2` prior to production promotion.
- **Milestones:**
  - Verify zero regression against master branch.
  - Maintain branch safety: zero unapproved pushes to origin or remote production.
  - Deliver comprehensive handover report with full evidence documentation.
