# RELEASE CHECKLIST — PORTFOLIO V2 (BEYOND THE INTERFACE)

**Project:** Portfolio V2 — Beyond The Interface  
**Owner:** Tarun R. (AI & Systems Developer)  
**Branch:** `feat/portfolio-v2`  
**Target URL:** `https://portfoliotrb.vercel.app/`  
**Audited Date:** 2026-11-18  

---

## 1. Locked React Bits Components Audit (18 / 18)

| Component Name | File Location | Integrated Phase | Status | Purpose / Role |
|:---|:---|:---|:---|:---|
| **TechText** | `src/components/reactbits/TechText.tsx` | Phase 02 | ✅ PASS | Hero technical subtitle stream with character scramble |
| **LiquidChrome** | `src/components/reactbits/LiquidChrome.tsx` | Phase 02 | ✅ PASS | WebGL liquid chrome simulation on Hero badge |
| **RotatingText** | `src/components/reactbits/RotatingText.tsx` | Phase 02 | ✅ PASS | Dynamic rotating engineering domain title |
| **MetallicPaint** | `src/components/reactbits/MetallicPaint.tsx` | Phase 02 | ✅ PASS | Specular metallic visual treatment for headline text |
| **Noise** | `src/components/reactbits/Noise.tsx` | Phase 02 | ✅ PASS | Subtle full-screen filmic grain texture overlay |
| **GooeyNav** | `src/components/reactbits/GooeyNav.tsx` | Phase 03 | ✅ PASS | Top header navigation links with SVG goo filter |
| **SocialDock** | `src/components/reactbits/SocialDock.tsx` | Phase 03 | ✅ PASS | Floating bottom dock with spring physics & tooltip |
| **Magnet** | `src/components/reactbits/Magnet.tsx` | Phase 03 | ✅ PASS | Magnetic cursor attraction on buttons & interactive triggers |
| **ScrollProgress** | `src/components/reactbits/ScrollProgress.tsx` | Phase 03 | ✅ PASS | Top viewport scroll indicator with monochrome styling |
| **SplashCursor** | `src/components/reactbits/SplashCursor.tsx` | Phase 03 | ✅ PASS | Interactive WebGL fluid particle trail on desktop hover |
| **Lanyard** | `src/components/reactbits/Lanyard.tsx` | Phase 04 | ✅ PASS | Interactive 3D Rapier/Three.js hanging developer badge |
| **CardSpotlight** | `src/components/reactbits/CardSpotlight.tsx` | Phase 04 | ✅ PASS | Radial cursor spotlight effect on editorial bio cards |
| **FlexCarousel** | `src/components/reactbits/FlexCarousel.tsx` | Phase 05 | ✅ PASS | Interactive horizontal expanding project showcase |
| **ScrollStack** | `src/components/reactbits/ScrollStack.tsx` | Phase 06 | ✅ PASS | Sticky progressive stacked cards for engineering case studies |
| **MagicBento** | `src/components/reactbits/MagicBento.tsx` | Phase 07 | ✅ PASS | 6-card interactive grid with cursor glow for tech categories |
| **LogoLoop** | `src/components/reactbits/LogoLoop.tsx` | Phase 07 | ✅ PASS | Infinite double-buffered marquee of engineering tools |
| **AnimatedList** | `src/components/reactbits/AnimatedList.tsx` | Phase 07 | ✅ PASS | Filterable staggered list of verified milestones |
| **CountUp** | `src/components/reactbits/CountUp.tsx` | Phase 07 | ✅ PASS | Viewport-triggered numerical metric counters with SR fallback |

---

## 2. Technical Projects & Architectural Dossiers (11 Records)

| ID | Project Name | Domain | Primary Stack | Architecture Status | Public Link |
|:---|:---|:---|:---|:---|:---|
| **P-01** | **PARALLAX** | Geospatial Intelligence | Python, GDAL, Sentinel-1 SAR, MapLibre | Case Study Dossier + Showcase | Verified Repo |
| **P-02** | **VORTEX** | High-Performance GPU Computing | CUDA, C++20, CMake, Warp Primitives | Case Study Dossier + Showcase | Verified Repo |
| **P-03** | **VESPER** | Distributed Systems Architecture | Go, Raft, gRPC, Zero-Copy Ring Buffers | Case Study Dossier + Showcase | Verified Repo |
| **P-04** | **ØMEN** | Cybersecurity Threat Modeling | Python, NetworkX, FastAPI, Graph Traversals | Case Study Dossier + Showcase | Verified Repo |
| **P-05** | **AURA** | Conversational Health AI | TypeScript, Next.js, OpenAI API, Tailwind | Live Production Deployment | [aura-mind.vercel.app](https://aura-mind.vercel.app/) |
| **P-06** | **GFG REDLINE** | Career Architecture Platform | React, TypeScript, FastAPI, Node.js | Prototype Codebase | Verified Profile |
| **P-07** | **ONE PLANET** | Civic Engagement & Action | Next.js, PostgreSQL, Tailwind, Mapbox | Live Production Deployment | [one-planet-nine.vercel.app](https://one-planet-nine.vercel.app/) |
| **P-08** | **AGARAM** | Multilingual Coding Education | Python, WebAssembly, AST Parsers | Planned / Early Architecture | Roadmap Item |
| **P-09** | **RESURRECTION** | Automated Legacy Code Migration | Rust, Tree-sitter, LLVM AST Tools | Research / Exploratory | Roadmap Item |
| **P-10** | **NEXUS** | Autonomous Agent Mesh | Python, LangChain, Event Streams | Showcase Item | Verified Profile |
| **P-11** | **CHRONOS** | Distributed Time-Series Engine | Go, LSM Trees, Memory-Mapped I/O | Showcase Item | Verified Profile |

---

## 3. Accessibility & Usability (WCAG 2.2 AA Compliance)

- [x] **Semantic Landmarks:** `<header>`, `<main id="main-content">`, `<section>`, `<footer role="contentinfo">`, `<nav>`.
- [x] **Skip Navigation Link:** `#main-content` target link positioned off-screen and visible on focus.
- [x] **Contrast Ratio:** White (`#F2F2F2`) and silver (`#C0C0C0`) on deep black (`#050505` and `#0A0A0A`) exceeds 7:1 for normal text and 4.5:1 for subtext.
- [x] **Reduced Motion Support:** `@media (prefers-reduced-motion: reduce)` respected across all animations (SplashCursor disabled, 3D Lanyard displays static fallback card, CountUp immediately shows final value, ScrollStack presents sequential static flow).
- [x] **Screen Reader Fallbacks:** `.sr-only` content provided for canvas badges, rotating text status, CountUp numerical values, and graphical case study steps.
- [x] **Keyboard Interactivity:** All carousel panels, bento cards, milestone filters, and modal toggles support Tab, Enter, and Space navigation with visible focus rings.

---

## 4. Performance & Bundle Optimization

- [x] **Route-Independent Section Chunking:** Heavy below-the-fold sections (`About`, `Projects`, `CaseStudies`, `TechStack`, `Achievements`, `CurrentWork`, `Contact`) lazy-loaded via `React.lazy` and `Suspense`.
- [x] **Vendor Code Splitting:** `vite.config.ts` manualChunks partitions Three.js, Motion, and general vendor libraries.
- [x] **Shader & WebGL Lifecycle:** WebGL contexts destroy geometries, textures, and requestAnimationFrame loops cleanly on unmount or off-screen visibility loss.
- [x] **Asset Optimization:** SVG icons and WebP/optimized raster assets prevent unnecessary layout shifts (CLS < 0.05).

---

## 5. SEO, Structured Data & Metadata

- [x] **Title Tag:** Conforms to `TARUN R. — AI & Systems Developer | Beyond The Interface`.
- [x] **Meta Description:** Factual statement highlighting AI & Systems Developer identity and Rajalakshmi Institute of Technology undergraduate standing.
- [x] **Canonical Link:** Explicitly points to `https://portfoliotrb.vercel.app/`.
- [x] **Open Graph & Twitter Cards:** Full metadata present including `summary_large_image` card.
- [x] **Structured Data (JSON-LD):** Schema.org `Person` record declaring affiliation with Rajalakshmi Institute of Technology, Chennai, and GitHub link.
- [x] **Robots & Sitemap:** `public/robots.txt` and `public/sitemap.xml` properly configured.

---

## 6. Safety & Deployment Protocol

- [x] **Active Branch:** `feat/portfolio-v2` (main branch remains protected and untouched).
- [x] **Remote Status:** Zero unapproved pushes to origin or production branches.
- [x] **Production Integrity:** Local verification only; production deployment deferred until explicit user authorization.
