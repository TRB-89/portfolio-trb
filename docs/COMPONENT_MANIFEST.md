# REACT BITS COMPONENT COMPATIBILITY MANIFEST
## Portfolio V2 — Beyond The Interface

**Reference Catalog:** [React Bits (reactbits.dev)](https://reactbits.dev/)  
**Source Repository:** [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits)  
**Registry API Endpoint:** `https://reactbits.dev/r/{name}.json`  
**Standard Variant Format:** TypeScript + Tailwind (`-TS-TW`)  

---

### Master Component Matrix

| ID | Component Name | Registry Identifier | Target Section | Primary Engine | Dependencies | Phase |
|---|---|---|---|---|---|---|
| 01 | **Tech Text** | `TechText-TS-TW` | Hero (01) | SVG / Canvas Vector Paths | None (React) | Phase 02 |
| 02 | **Liquid Chrome** | `LiquidChrome-TS-TW` | Hero (01) | WebGL Shader | None (React WebGL) | Phase 02 |
| 03 | **Rotating Text** | `RotatingText-TS-TW` | Hero (01) | Framer Motion (Motion) | `motion@^12` | Phase 02 |
| 04 | **Staggered Menu** | `StaggeredMenu-TS-TW` | Navigation | GSAP Timeline | `gsap@^3` | Phase 03 |
| 05 | **Dock** | `Dock-TS-TW` | Navigation / Shell | React DOM Springs | `react-dom@^19` | Phase 03 |
| 06 | **Lanyard** | `Lanyard-TS-TW` | About (02) | Three.js / Verlet Physics | `three@^0.174` | Phase 04 |
| 07 | **Scroll Reveal** | `ScrollReveal-TS-TW` | About (02) | GSAP ScrollTrigger | `gsap@^3` | Phase 04 |
| 08 | **Circular Carousel** | `CircularCarousel-TS-TW` | Selected Work (03) | CSS 3D Transforms / Drag | None (React) | Phase 05 |
| 09 | **Scroll Stack** | `ScrollStack-TS-TW` | Case Studies (04) | CSS Sticky / Dimming | None (React) | Phase 06 |
| 10 | **Logo Loop** | `LogoLoop-TS-TW` | Technical Arsenal (05) | CSS Marquee Animation | None (React) | Phase 07 |
| 11 | **Magic Bento** | `MagicBento-TS-TW` | Technical Arsenal (05) | Pointer Spotlight / Tilt | Lucide / Internal SVGs | Phase 07 |
| 12 | **Animated List** | `AnimatedList-TS-TW` | Achievements (06) | CSS Spring / Selection | Lucide / Internal SVGs | Phase 07 |
| 13 | **Count Up** | `CountUp-TS-TW` | Achievements (06) | Motion Value Springs | `motion@^12` | Phase 07 |
| 14 | **Target Cursor** | `TargetCursor-TS-TW` | Global Shell | Pointer Events / Reticle | `react-dom@^19` | Phase 03 |
| 15 | **Magnet** | `Magnet-TS-TW` | Global Shell / CTAs | Spring Easing | None (React) | Phase 03 |
| 16 | **Gradual Blur** | `GradualBlur-TS-TW` | Global Shell | Backdrop Filter Mask | None (React) | Phase 03 |
| 17 | **Noise** | `Noise-TS-TW` | Global Shell | Canvas / SVG Grain | None (React) | Phase 03 |
| 18 | **Metallic Paint** | `MetallicPaint-TS-TW` | Branding / Logo | WebGL Fluid Shader | None (React WebGL) | Phase 03 |

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
- **Performance Considerations:** Calculates letter vector outlines on mount. Offload calculation or memoize glyph geometries to avoid main-thread jank.
- **Mobile Fallback:** Render clean crisp typographic SVG / standard display heading without drag physics when `useTouchDevice()` is true.
- **Integration Status:** Architecture staged in `Hero.tsx`; component file to be imported in Phase 02.

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
- **Performance Considerations:** Uses custom fragment shader. Cap device pixel ratio (`maxDevicePixelRatio={1.5}`) to save battery on high-DPI retina screens. Pause rendering when out of viewport via `IntersectionObserver`.
- **Mobile Fallback:** Disable active pointer interaction; fallback to static metallic CSS gradient if WebGL context is lost or unsupported.
- **Integration Status:** WebGL capability utility created; component slated for Phase 02.

---

#### 3. Rotating Text
- **Official Name:** RotatingText
- **Source URL:** https://reactbits.dev/text-animations/rotating-text
- **Registry:** `https://reactbits.dev/r/RotatingText-TS-TW.json`
- **Installation Method:** `npx shadcn@latest add @react-bits/RotatingText-TS-TW`
- **Required Dependencies:** `motion@^12.23.12`
- **Supported Props:**
  - `texts: string[]` (e.g. `["AI & Systems Developer", "Computational Engineering Enthusiast", ...]`)
  - `transition?: Transition`, `effect?: 'slide' | 'flip' | 'blur' | 'scale' | 'drop'`
  - `direction?: 'up' | 'down'`, `highlight?: boolean`, `highlightColor?: string`
  - `rotationInterval?: number`, `staggerDuration?: number`, `loop?: boolean`, `auto?: boolean`
  - `splitBy?: string`, `pauseOnHover?: boolean`
- **Intended Section:** Hero (01) role rotation.
- **Performance Considerations:** Lightweight spring layout animation. Clean unmount on tab blur.
- **Mobile Fallback:** Respect `prefers-reduced-motion` by freezing or using immediate crossfade.
- **Integration Status:** Staged in `Hero.tsx`; ready for Phase 02.

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
- **Integration Status:** Mobile drawer staged in `Navigation.tsx`; GSAP timeline component scheduled for Phase 03.

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
- **Performance Considerations:** Calculates pointer proximity using requestAnimationFrame. Suppress listener when cursor is far from dock.
- **Mobile Fallback:** Uniform-sized icon dock without hover magnification.
- **Integration Status:** `SocialDock.tsx` built with accessible links; magnification spring scheduled for Phase 03.

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
- **Mobile Fallback:** Static high-contrast ID card preview if WebGL or device performance is limited.
- **Integration Status:** Visual staging container prepared in `About.tsx`; R3F implementation in Phase 04.

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
- **Performance Considerations:** SplitText / Word unblurring via CSS opacity and filter blur.
- **Mobile Fallback:** Immediate opacity reveal without continuous scrub blur.
- **Integration Status:** Staged in `About.tsx`; GSAP ScrollTrigger wiring in Phase 04.

---

#### 8. Circular Carousel
- **Official Name:** CircularCarousel
- **Source URL:** https://reactbits.dev/components/circular-carousel
- **Registry:** `https://reactbits.dev/r/CircularCarousel-TS-TW.json`
- **Installation Method:** Registry import.
- **Required Dependencies:** Pure React + CSS 3D Transforms.
- **Supported Props (Strict Section 7 Match):**
  - `items?: CircularCarouselItem[]`
  - `preset?: 'cylinder'`
  - `intro?: 'rise'`
  - `cardWidth?: 220`, `aspectRatio?: 1`, `gap?: 25`, `curve?: 1`, `tilt?: -5`
  - `perspective?: 2500`, `autoplay?: 'drift'`, `speed?: 14`, `interval?: 3`, `direction?: 'left'`
  - `draggable?: true`, `momentum?: 0.6`, `snap?: true`, `pauseOnHover?: true`, `focusOnClick?: true`
  - `parallax?: 0.3`, `stretch?: 0.5`, `fadeColor?: '#000000'`, `depthFade?: 0.55`, `innerShade?: 0.6`, `cornerRadius?: 12`
- **Intended Section:** Selected Work (03).
- **Performance Considerations:** Uses 3D transform matrices with hardware acceleration (`translate3d`, `rotateY`). Low CPU overhead.
- **Mobile Fallback:** Accessible responsive grid below carousel; touch-swipe gestures enabled.
- **Integration Status:** Staging container and accessible fallback catalog live in `Projects.tsx`; full cylinder component in Phase 05.

---

#### 9. Scroll Stack
- **Official Name:** ScrollStack
- **Source URL:** https://reactbits.dev/components/scroll-stack
- **Registry:** `https://reactbits.dev/r/ScrollStack-TS-TW.json`
- **Installation Method:** Registry import.
- **Required Dependencies:** Pure React.
- **Supported Props:**
  - `children?: ReactNode`, `itemDistance?: number`, `itemStackDistance?: number`
  - `stackPosition?: number | string`, `itemScale?: number`, `dimAmount?: number`, `blurAmount?: number`
- **Intended Section:** Engineering Case Studies (04).
- **Performance Considerations:** Passive scroll observer with CSS sticky positioning. Zero scroll hijacking.
- **Mobile Fallback:** Standard vertical card stack.
- **Integration Status:** Container and card models ready in `CaseStudies.tsx`; stack pinning in Phase 06.

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
- **Performance Considerations:** Framer motion animate value hook; triggers only on viewport intersection.
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
- **Performance Considerations:** Uses direct mousemove listeners with transform translates. Must be entirely disabled on touch devices.
- **Mobile Fallback:** Completely disabled via `useTouchDevice()`.
- **Integration Status:** Touch detection hook ready; cursor element scheduled for Phase 03.

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
- **Integration Status:** Scheduled for Phase 03.

---

#### 16. Gradual Blur
- **Official Name:** GradualBlur
- **Source URL:** https://reactbits.dev/components/gradual-blur
- **Registry:** `https://reactbits.dev/r/GradualBlur-TS-TW.json`
- **Installation Method:** Registry import.
- **Required Dependencies:** Pure React.
- **Supported Props:**
  - `position?: 'top' | 'bottom' | 'both'`, `strength?: number`, `layers?: number`, `opacity?: number`
- **Intended Section:** Sticky header edges and carousel boundaries.
- **Performance Considerations:** Uses layered CSS backdrop-filter masks.
- **Mobile Fallback:** Single lightweight blur overlay to prevent GPU memory pressure.
- **Integration Status:** Scheduled for Phase 03.

---

#### 17. Noise
- **Official Name:** Noise
- **Source URL:** https://reactbits.dev/backgrounds/noise
- **Registry:** `https://reactbits.dev/r/Noise-TS-TW.json`
- **Installation Method:** Registry import.
- **Required Dependencies:** Pure React.
- **Supported Props:**
  - `patternSize?: number`, `patternAlpha?: number`, `patternRefreshInterval?: number`
- **Intended Section:** Viewport background texture overlay.
- **Performance Considerations:** Static SVG noise or periodic canvas refresh. Prefer static SVG to conserve CPU/battery.
- **Mobile Fallback:** Static lightweight CSS pattern.
- **Integration Status:** CSS noise simulation active in `globals.css`; component scheduled for Phase 03.

---

#### 18. Metallic Paint
- **Official Name:** MetallicPaint
- **Source URL:** https://reactbits.dev/components/metallic-paint
- **Registry:** `https://reactbits.dev/r/MetallicPaint-TS-TW.json`
- **Installation Method:** Registry import.
- **Required Dependencies:** WebGL Shader.
- **Supported Props:**
  - `imageSrc?: string`, `text?: string`, `density?: number`, `speed?: number`, `angle?: number`
- **Intended Section:** TRB Brand Wordmark.
- **Performance Considerations:** Fragment shader rendering on designated logo canvas.
- **Mobile Fallback:** High-contrast crisp monochrome SVG vector mark.
- **Integration Status:** Scheduled for Phase 03.
