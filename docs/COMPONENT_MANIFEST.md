# REACT BITS COMPONENT COMPATIBILITY MANIFEST
## Portfolio V2 — Beyond The Interface

**Reference Catalog:** [React Bits (reactbits.dev)](https://reactbits.dev/)  
**Source Repository:** [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits)  
**Registry API Endpoint:** `https://reactbits.dev/r/{name}.json`  
**Standard Variant Format:** TypeScript + Tailwind (`-TS-TW`)  

---

### Master Component Matrix (18 Locked Components)

| ID | Component Name | Registry Identifier | Target Section | Primary Engine | Dependencies | Phase | Status |
|---|---|---|---|---|---|---|---|
| 01 | **Tech Text** | `TechText-TS-TW` | Hero (01) | SVG / Canvas Vector Paths | None (React) | Phase 02 | **INTEGRATED** |
| 02 | **Liquid Chrome** | `LiquidChrome-TS-TW` | Hero (01) | WebGL Shader | None (React WebGL) | Phase 02 | **INTEGRATED** |
| 03 | **Rotating Text** | `RotatingText-TS-TW` | Hero (01) | Framer Motion (Motion) | `motion@^12` | Phase 02 | **INTEGRATED** |
| 04 | **Staggered Menu** | `StaggeredMenu-TS-TW` | Navigation | GSAP Timeline | `gsap@^3` | Phase 03 | **INTEGRATED** |
| 05 | **Dock** | `Dock-TS-TW` | Navigation / Shell | React DOM Springs | `react-dom@^19` | Phase 03 | **INTEGRATED** |
| 06 | **Lanyard** | `Lanyard-TS-TW` | About (02) | Three.js / Verlet Physics | `three@^0.174` | Phase 04 | **INTEGRATED** |
| 07 | **Scroll Reveal** | `ScrollReveal-TS-TW` | About (02) | GSAP ScrollTrigger | `gsap@^3` | Phase 04 | **INTEGRATED** |
| 08 | **Flex Carousel** | `FlexCarousel-TS-TW` | Selected Work (03) | Fluid Row / OGL Shader | `ogl@^1.0.11` | Phase 05 | **INTEGRATED** |
| 09 | **Scroll Stack** | `ScrollStack-TS-TW` | Case Studies (04) | CSS Sticky / Dimming | None (React) | Phase 06 | **INTEGRATED** |
| 10 | **Logo Loop** | `LogoLoop-TS-TW` | Technical Arsenal (05) | CSS Marquee Animation | None (React) | Phase 07 | SCHEDULED |
| 11 | **Magic Bento** | `MagicBento-TS-TW` | Technical Arsenal (05) | Pointer Spotlight / Tilt | Lucide / Internal SVGs | Phase 07 | SCHEDULED |
| 12 | **Animated List** | `AnimatedList-TS-TW` | Achievements (06) | CSS Spring / Selection | Lucide / Internal SVGs | Phase 07 | SCHEDULED |
| 13 | **Count Up** | `CountUp-TS-TW` | Achievements (06) | Motion Value Springs | `motion@^12` | Phase 07 | SCHEDULED |
| 14 | **Target Cursor** | `TargetCursor-TS-TW` | Global Shell | Pointer Events / Reticle | `react-dom@^19` | Phase 03 | **INTEGRATED** |
| 15 | **Magnet** | `Magnet-TS-TW` | Global Shell / CTAs | Spring Easing | None (React) | Phase 03 | **INTEGRATED** |
| 16 | **Gradual Blur** | `GradualBlur-TS-TW` | Global Shell | Backdrop Filter Mask | None (React) | Phase 03 | **INTEGRATED** |
| 17 | **Noise** | `Noise-TS-TW` | Global Shell | Canvas / SVG Grain | None (React) | Phase 02 | **INTEGRATED** |
| 18 | **Metallic Paint** | `MetallicPaint-TS-TW` | Hero / TRB Branding | WebGL Fluid Shader | None (React WebGL) | Phase 02 | **INTEGRATED** |

**Integration Progress:** 14 of 18 components integrated (77.8% locked component coverage). All 14 active components verified via automated Playwright testing.

---

### Detailed Component Specifications

#### 1. Tech Text
- **Official Name:** TechText
- **Source URL:** https://reactbits.dev/text-animations/tech-text
- **Registry:** `https://reactbits.dev/r/TechText-TS-TW.json`
- **Installation Method:** `npx shadcn@latest add @react-bits/TechText-TS-TW` or direct component placement.
- **Required Dependencies:** None (pure React + SVG paths).
- **Supported Props:**
  - `text?: string` (Primary wordmark, e.g. "TARUN R.")
  - `fontWeight?: number` (Default: 600)
  - `fontSize?: number` (Default: 150)
  - `letterSpacing?: number` (-0.05)
  - `color?: string`, `accentColor?: string`
  - `align?: 'left' | 'center' | 'right'`
  - `reach?: number` (200)
  - `softness?: number` (0.7)
  - `dashLength?: number` (4), `dashGap?: number` (2)
  - `strokeWidth?: number` (1.5)
  - `lineStyle?: 'dashed' | 'solid'`
  - `reveal?: 'area' | 'letter' | 'off'`
  - `specks?: number` (15)
  - `selection?: boolean`, `labels?: boolean`, `draggable?: boolean`, `sweep?: boolean`
  - `bounce?: number` (0.4), `speed?: number` (1), `clickKick?: boolean`
  - `intro?: 'none' | 'type' | 'assemble' | 'metrics'`, `introDuration?: number` (2)
  - `guides?: boolean` (false)
  - `className?: string`, `style?: CSSProperties`
- **Intended Section:** Hero (01)
- **Performance Considerations:** Calculates letter vector outlines on mount. Memoizes glyph geometries to avoid main-thread jank.
- **Mobile Fallback:** Render crisp typographic SVG / standard display heading without drag physics when `useTouchDevice()` is true.
- **Integration Status:** Integrated in `Hero.tsx` with mandatory configuration props in Phase 02.

---

#### 2. Liquid Chrome
- **Official Name:** LiquidChrome
- **Source URL:** https://reactbits.dev/backgrounds/liquid-chrome
- **Registry:** `https://reactbits.dev/r/LiquidChrome-TS-TW.json`
- **Installation Method:** Registry fetch or direct component integration.
- **Required Dependencies:** None (standalone WebGL context shader).
- **Supported Props:**
  - `color?: string | number[]` (Monochrome tint)
  - `speed?: number`, `amplitude?: number`, `frequencyX?: number`, `frequencyY?: number`
  - `detail?: number`, `thickness?: number`, `depth?: number`, `roughness?: number`, `exposure?: number`
  - `interactive?: boolean`, `rippleStrength?: number`, `rippleSize?: number`, `tilt?: number`
  - `intro?: boolean`, `lightMode?: boolean`, `maxDevicePixelRatio?: number`
- **Intended Section:** Hero (01) background.
- **Performance Considerations:** Custom fragment shader. Cap device pixel ratio (`maxDevicePixelRatio={1.5}`) to conserve battery on high-DPI screens. Suspend rendering when offscreen via `IntersectionObserver`.
- **Mobile Fallback:** Disable active pointer interaction; fallback to static metallic CSS gradient if WebGL context is lost or unsupported.
- **Integration Status:** WebGL capability utility active; fully integrated in `Hero.tsx` background in Phase 02.

---

#### 3. Rotating Text
- **Official Name:** RotatingText
- **Source URL:** https://reactbits.dev/text-animations/rotating-text
- **Registry:** `https://reactbits.dev/r/RotatingText-TS-TW.json`
- **Installation Method:** `npx shadcn@latest add @react-bits/RotatingText-TS-TW`
- **Required Dependencies:** `motion@^12.23.12`
- **Supported Props:**
  - `texts: string[]` (`["AI & Systems Developer", "Computational Engineering Enthusiast", ...]`)
  - `transition?: Transition`, `effect?: 'slide' | 'flip' | 'blur' | 'scale' | 'drop'`
  - `direction?: 'up' | 'down'`, `highlight?: boolean`, `highlightColor?: string`
  - `rotationInterval?: number`, `staggerDuration?: number`, `loop?: boolean`, `auto?: boolean`
  - `splitBy?: string`, `pauseOnHover?: boolean`
- **Intended Section:** Hero (01) role rotation.
- **Performance Considerations:** Lightweight spring layout animation. Clean unmount on tab blur.
- **Mobile Fallback:** Respect `prefers-reduced-motion` by freezing or using immediate crossfade.
- **Integration Status:** Fully integrated into `Hero.tsx` in Phase 02 with flip transitions across 5 professional titles.

---

#### 4. Staggered Menu
- **Official Name:** StaggeredMenu
- **Source URL:** https://reactbits.dev/components/staggered-menu
- **Registry:** `https://reactbits.dev/r/StaggeredMenu-TS-TW.json`
- **Installation Method:** Registry import.
- **Required Dependencies:** `gsap@^3.13.0`
- **Supported Props:**
  - `position?: 'left' | 'right'`, `colors?: string[]`, `items?: StaggeredMenuItem[]`
  - `socialItems?: StaggeredMenuSocialItem[]`, `displaySocials?: boolean`
  - `displayItemNumbering?: boolean`, `accentColor?: string`, `isFixed: boolean`
  - `onMenuOpen?: () => void`, `onMenuClose?: () => void`
- **Intended Section:** Navigation header overlay.
- **Performance Considerations:** GPU-accelerated GSAP transforms (`transform: translate3d`). Clean timeline kill on unmount.
- **Mobile Fallback:** Standard responsive sliding overlay drawer.
- **Integration Status:** Fully integrated into `Navigation.tsx` in Phase 03 with GSAP slide-in layers, 8 semantic section items, Escape key handling, scroll locking, and smooth closing.

---

#### 5. Dock
- **Official Name:** Dock
- **Source URL:** https://reactbits.dev/components/dock
- **Registry:** `https://reactbits.dev/r/Dock-TS-TW.json`
- **Installation Method:** Registry import.
- **Required Dependencies:** `react-dom@^19.0.0`
- **Supported Props:**
  - `items?: DockItem[]`, `className?: string`, `spring?: SpringConfig`
  - `magnification?: number`, `distance?: number`, `panelHeight?: number`
- **Intended Section:** Global Quick-Action Dock (Screen bottom).
- **Performance Considerations:** Calculates pointer proximity using requestAnimationFrame. Suppresses listener when cursor is far from dock.
- **Mobile Fallback:** Uniform-sized icon dock without hover magnification.
- **Integration Status:** Fully integrated into `SocialDock.tsx` in Phase 03 with pure monochrome metallic theme, magnification physics, tooltips, and automatic hiding when Staggered Menu is open.

---

#### 6. Lanyard
- **Official Name:** Lanyard
- **Source URL:** https://reactbits.dev/components/lanyard
- **Registry:** `https://reactbits.dev/r/Lanyard-TS-TW.json`
- **Installation Method:** Registry import with Three.js.
- **Required Dependencies:** `three@^0.174.0` / `@react-three/fiber`
- **Supported Props:**
  - `frontImage?: string`, `backImage?: string`, `imageFit?: ImageFit`, `cardColor?: string`
  - `strapLength?: number`, `strapImage?: string`, `strapColor?: string`, `metal?: Metal`
  - `gravity?: number`, `damping?: number`, `elasticity?: number`, `breeze?: number`
- **Intended Section:** About Me (02).
- **Performance Considerations:** Continuous Verlet integration and canvas rendering. Must pause simulation when offscreen.
- **Mobile Fallback:** Static high-contrast ID card preview if WebGL or device performance is limited or reduced motion is requested.
- **Integration Status:** Fully integrated in `src/components/reactbits/Lanyard.tsx` and wrapped in `src/components/shared/LanyardBadge.tsx` during Phase 04. Employs Verlet rope physics with Three.js, custom high-resolution Tarun R. front/back badge textures (`badge-front.png`, `badge-back.png`), silver metallic hardware, dynamic lazy-loading with Suspense, and accessible static card fallback on `prefers-reduced-motion` or unsupported WebGL.

---

#### 7. Scroll Reveal
- **Official Name:** ScrollReveal
- **Source URL:** https://reactbits.dev/text-animations/scroll-reveal
- **Registry:** `https://reactbits.dev/r/ScrollReveal-TS-TW.json`
- **Installation Method:** Registry import.
- **Required Dependencies:** `gsap@^3.13.0` (ScrollTrigger plugin).
- **Supported Props:**
  - `children: ReactNode`, `enableBlur?: boolean`, `baseOpacity?: number`, `blurStrength?: number`
  - `stagger?: number`, `splitBy?: RevealSplit`, `highlightColor?: string`
- **Intended Section:** About Me (02) biographical text.
- **Performance Considerations:** Word unblurring via CSS opacity and filter blur.
- **Mobile Fallback:** Immediate opacity reveal without continuous scrub blur.
- **Integration Status:** Fully integrated in `src/components/reactbits/ScrollReveal.tsx` and active in `src/sections/About.tsx` during Phase 04. Employs GSAP ScrollTrigger word unmasking with progressive opacity and metallic silver highlight, respecting `prefers-reduced-motion` automatically.

---

#### 8. Flex Carousel (REPLACES CIRCULAR CAROUSEL)
- **Official Name:** FlexCarousel
- **Source URL:** https://reactbits.dev/components/flex-carousel
- **Registry:** `https://reactbits.dev/r/FlexCarousel-TS-TW.json`
- **Installation Method:** `npx shadcn@latest add @react-bits/FlexCarousel-TS-TW` or direct component placement.
- **Required Dependencies:** `ogl@^1.0.11`
- **Supported Props:**
  - `items?: FlexCarouselItem[]` (`src`, `alt`, `title`, `subtitle`)
  - `preset?: 'liquid' | 'ribbon' | 'vortex' | 'arch'`
  - `intro?: 'rise' | 'bloom' | 'spin' | 'deal' | 'none'`
  - `cardHeight?: number`
  - `gap?: number`
  - `radius?: number`
  - `fit?: 'natural' | 'portrait' | 'square' | 'landscape'`
  - `squeeze?: number`
  - `focusOnClick?: boolean`
  - `autoplay?: boolean`
  - `interval?: number`
  - `captions?: boolean`
  - `captureWheel?: boolean`
  - `onChange?: (index: number, item: FlexCarouselItem) => void`
  - `onSelect?: (index: number, item: FlexCarouselItem) => void`
  - `className?: string`, `style?: CSSProperties`
- **Showcase Architecture:**
  - Horizontal expanding project panels (`flex-[3.5]` active vs `flex-[0.8]` collapsed).
  - Smooth expansion and collapse transitions (`duration-500 ease-industrial`).
  - Active panel displays full project cover artwork, title, engineering domain, detailed descriptions, technical stack tags, and repository/live demo links.
  - Collapsed neighboring panels present clean vertical headings and expand on hover, click, or keyboard focus.
  - Pure black background (`#050505`), monochrome typography, restrained `#262626` borders, subtle transitions.
  - Zero cylinder, perspective, rotation, depth-fade, or circular carousel geometry.
- **Keyboard Accessibility:** Fully focusable with Tab, expandable via Enter, Space, and Arrow keys.
- **Mobile Fallback:** Touch-friendly vertical stack / accordion expansion with automatic swipe handling.
- **Reduced Motion:** Eliminates transition delays when `prefers-reduced-motion` is detected.
- **Integration Status:** Fully integrated in `src/components/reactbits/FlexCarousel.tsx`, wrapped with dynamic lazy loading in `src/components/shared/FlexCarouselStage.tsx`, and orchestrated in `src/sections/Projects.tsx` during Phase 05. Features 8 prioritized engineering initiatives (`PARALLAX`, `VORTEX`, `VESPER`, `ØMEN`, `AURA`, `GFG 2.0 REDLINE`, `AGARAM`, `ONE PLANET`) with responsive horizontal expanding panels (`lg:flex-[4]` vs `lg:flex-[0.7]`), dual mode Dossier / 3D OGL Reel switcher, accessible roving keyboard navigation, verified engineering highlights, and static accessible presentation for reduced motion.

---

#### 9. Scroll Stack
- **Official Name:** ScrollStack
- **Source URL:** https://reactbits.dev/components/scroll-stack
- **Registry:** `https://reactbits.dev/r/ScrollStack-TS-TW.json`
- **Installation Method:** Direct verified TypeScript placement under `src/components/reactbits/ScrollStack.tsx`.
- **Required Dependencies:** Pure React (no external animation libraries required).
- **Supported Props:**
  - `children?: ReactNode`
  - `className?: string`
  - `itemDistance?: number` (Default: 100, Configured: 80)
  - `itemStackDistance?: number` (Default: 24, Configured: 20)
  - `stackPosition?: number | string` (Default: '15%', Configured: '12%')
  - `itemScale?: number` (Default: 0.05, Configured: 0.03)
  - `baseScale?: number` (Default: 0.8, Configured: 0.88)
  - `dimAmount?: number` (Default: 0.2, Configured: 0.15)
  - `blurAmount?: number` (Default: 0, Configured: 0 — zero text blur)
  - `tiltAmount?: number` (Default: 0, Configured: 0 — no perspective tilt)
  - `rotationAmount?: number` (Default: 0, Configured: 0 — no typography rotation)
  - `holdDistance?: number` (Default: 200, Configured: 180)
  - `smoothScroll?: boolean` (Default: true, Configured: false — zero scroll hijacking)
  - `snap?: boolean` (Default: false)
  - `useWindowScroll?: boolean` (Default: false, Configured: true — native window scroll integration)
  - `onStackComplete?: () => void`
- **Intended Section:** Engineering Case Studies (04).
- **Performance Considerations:** Passive scroll observer with CSS sticky positioning. `smoothScroll={false}` ensures zero wheel interception or scroll hijacking. Offscreen animation suppression via `cancelAnimationFrame` and `ResizeObserver`.
- **Mobile Fallback:** Clean responsive vertical sequential cards on mobile viewports (`window.innerWidth < 1024` or coarse pointer) and on reduced-motion preference (`prefers-reduced-motion: reduce`).
- **Integration Status:** Fully integrated in `src/components/reactbits/ScrollStack.tsx` and orchestrated in `src/sections/CaseStudies.tsx` during Phase 06. Features all 4 flagship case studies (`PARALLAX`, `VORTEX`, `ØMEN`, and `VESPER`) with complete problem-solution friction dossiers, accessible SVG/HTML architecture pipeline stages, engineering tradeoff decisions, verified results vs limitations, quick index selector tabs, and 30 automated tests in `tests/case-studies-scrollstack.spec.ts`.

---

#### 10. Logo Loop
- **Official Name:** LogoLoop
- **Source URL:** https://reactbits.dev/components/logo-loop
- **Registry:** `https://reactbits.dev/r/LogoLoop-TS-TW.json`
- **Installation Method:** Registry import.
- **Required Dependencies:** Pure React + CSS animations.
- **Supported Props:**
  - `logos: LogoItem[]`, `speed?: number`, `direction?: 'left' | 'right'`, `gap?: number`
  - `pauseOnHover?: boolean`, `fadeOut?: boolean`, `fadeOutColor?: string`
- **Intended Section:** Technical Arsenal (05).
- **Performance Considerations:** Continuous CSS `@keyframes` translate with `will-change: transform`.
- **Mobile Fallback:** Native horizontal scrollable strip.
- **Integration Status:** Toolchain tags staged in `TechStack.tsx`; infinite marquee in Phase 07.

---

#### 11. Magic Bento
- **Official Name:** MagicBento
- **Source URL:** https://reactbits.dev/components/magic-bento
- **Registry:** `https://reactbits.dev/r/MagicBento-TS-TW.json`
- **Installation Method:** Registry import.
- **Required Dependencies:** Lucide React (substituting HugeIcons to avoid redundant icon sets).
- **Supported Props:**
  - `items?: MagicBentoItem[]`, `columns?: number`, `gap?: number`, `glowColor?: string`
  - `enableBorderGlow?: boolean`, `enableSpotlight?: boolean`, `enableTilt?: boolean`
- **Intended Section:** Technical Arsenal (05).
- **Performance Considerations:** Radial cursor gradient calculation.
- **Mobile Fallback:** Static borders without pointer spotlight.
- **Integration Status:** Categorized bento cells live in `TechStack.tsx`; interactive spotlight in Phase 07.

---

#### 12. Animated List
- **Official Name:** AnimatedList
- **Source URL:** https://reactbits.dev/components/animated-list
- **Registry:** `https://reactbits.dev/r/AnimatedList-TS-TW.json`
- **Installation Method:** Registry import.
- **Required Dependencies:** Pure React / CSS transitions.
- **Supported Props:**
  - `items?: AnimatedListItem[]`, `onItemSelect?: (item: any, idx: number) => void`
  - `selectOnHover?: boolean`, `enableArrowNavigation?: boolean`, `accentColor?: string`
- **Intended Section:** Achievements and Milestones (06).
- **Performance Considerations:** Staggered spring transitions on enter.
- **Mobile Fallback:** Native vertical list.
- **Integration Status:** Milestone items structured in `Achievements.tsx`; arrow navigation in Phase 07.

---

#### 13. Count Up
- **Official Name:** CountUp
- **Source URL:** https://reactbits.dev/text-animations/count-up
- **Registry:** `https://reactbits.dev/r/CountUp-TS-TW.json`
- **Installation Method:** Registry import.
- **Required Dependencies:** `motion@^12.23.12`
- **Supported Props:**
  - `to: number`, `from?: number`, `duration?: number`, `delay?: number`
  - `prefix?: string`, `suffix?: string`, `separator?: string`, `trigger?: 'view' | 'load'`
- **Intended Section:** Achievements and Milestones (06).
- **Performance Considerations:** Motion animate value hook; triggers only on viewport intersection.
- **Mobile Fallback:** Static numeric display when reduced motion is preferred.
- **Integration Status:** Metric data model configured in `Achievements.tsx`; animated counter in Phase 07.

---

#### 14. Target Cursor
- **Official Name:** TargetCursor
- **Source URL:** https://reactbits.dev/components/target-cursor
- **Registry:** `https://reactbits.dev/r/TargetCursor-TS-TW.json`
- **Installation Method:** Registry import.
- **Required Dependencies:** `react-dom@^19.0.0`
- **Supported Props:**
  - `targetSelector?: string`, `cursorColor?: string`, `size?: number`, `cornerSize?: number`
  - `spinDuration?: number`, `hoverDuration?: number`, `hideDefaultCursor?: boolean`
- **Intended Section:** Global Application Shell.
- **Performance Considerations:** Pointermove listeners with transform translates. Must be entirely disabled on touch devices.
- **Mobile Fallback:** Completely disabled via `useTouchDevice()`.
- **Integration Status:** Fully integrated in `App.tsx` in Phase 03 with spring reticle, target lock-on, difference mix-blend-mode, and touch/reduced-motion disabling.

---

#### 15. Magnet
- **Official Name:** Magnet
- **Source URL:** https://reactbits.dev/components/magnet
- **Registry:** `https://reactbits.dev/r/Magnet-TS-TW.json`
- **Installation Method:** Registry import.
- **Required Dependencies:** Pure React.
- **Supported Props:**
  - `children: ReactNode`, `padding?: number`, `disabled?: boolean`, `magnetStrength?: number`
- **Intended Section:** Interactive Buttons & Navigation Anchors.
- **Performance Considerations:** Spring physics easing back to zero.
- **Mobile Fallback:** Disabled on touch screens.
- **Integration Status:** Fully integrated in Phase 03 wrapping Hero primary action CTAs and Contact form submit button with restrained physical parameters (`magnetStrength={2}`, `maxOffset={12}`).

---

#### 16. Gradual Blur
- **Official Name:** GradualBlur
- **Source URL:** https://reactbits.dev/components/gradual-blur
- **Registry:** `https://reactbits.dev/r/GradualBlur-TS-TW.json`
- **Installation Method:** Registry import.
- **Required Dependencies:** Pure React.
- **Supported Props:**
  - `position?: 'top' | 'bottom' | 'both'`, `strength?: number`, `layers?: number`, `opacity?: number`
- **Intended Section:** Sticky header edges and showcase boundaries.
- **Performance Considerations:** Layered CSS backdrop-filter masks.
- **Mobile Fallback:** Single lightweight blur overlay to prevent GPU memory pressure.
- **Integration Status:** Fully integrated in `App.tsx` in Phase 03 at the top boundary with `pointer-events-none`, 6 gradient blur layers, and subtle opacity feathering.

---

#### 17. Noise
- **Official Name:** Noise
- **Source URL:** https://reactbits.dev/backgrounds/noise
- **Registry:** `https://reactbits.dev/r/Noise-TS-TW.json`
- **Installation Method:** Registry import.
- **Required Dependencies:** Pure React.
- **Supported Props:**
  - `patternSize?: number`, `patternAlpha?: number`, `patternRefreshInterval?: number`, `opacity?: number`, `fixed?: boolean`, `zIndex?: number`
- **Intended Section:** Viewport background texture overlay.
- **Performance Considerations:** Static SVG/canvas grain. Configured with low opacity (`0.03`) and `pointer-events-none`.
- **Mobile Fallback:** Lightweight grain pattern.
- **Integration Status:** Fully integrated into `App.tsx` global shell in Phase 02.

---

#### 18. Metallic Paint
- **Official Name:** MetallicPaint
- **Source URL:** https://reactbits.dev/components/metallic-paint
- **Registry:** `https://reactbits.dev/r/MetallicPaint-TS-TW.json`
- **Installation Method:** Registry import.
- **Required Dependencies:** WebGL Shader.
- **Supported Props:**
  - `imageSrc?: string`, `text?: string`, `fontFamily?: string`, `fontWeight?: number | string`, `color?: string`, `backgroundColor?: string`, `density?: number`, `speed?: number`, `angle?: number`
- **Intended Section:** Hero / TRB Brand Wordmark.
- **Performance Considerations:** Fragment shader rendering on designated logo canvas.
- **Mobile Fallback:** High-contrast crisp monochrome SVG vector mark.
- **Integration Status:** Fully integrated in `Hero.tsx` technical metadata bar in Phase 02.
