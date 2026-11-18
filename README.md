# PORTFOLIO V2 — BEYOND THE INTERFACE

Personal engineering portfolio of **Tarun R.**, AI & Systems Developer.

- **Developer:** Tarun R.
- **GitHub:** [https://github.com/TRB-89](https://github.com/TRB-89)
- **Repository:** [https://github.com/TRB-89/portfolio-trb](https://github.com/TRB-89/portfolio-trb)
- **Production Site:** [https://portfoliotrb.vercel.app/](https://portfoliotrb.vercel.app/)
- **Education:** B.Tech in Computer Science and Business Systems, Rajalakshmi Institute of Technology
- **Branch:** `feat/portfolio-v2`

---

## Technology Stack

- **Framework:** React 19, TypeScript (Strict Mode)
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS with centralized monochrome & industrial design tokens
- **Motion & 3D:** GSAP, Motion, Three.js, React Three Fiber
- **Component Engine:** React Bits (18-component manifest)
- **Icons:** Lucide React
- **Quality & Testing:** ESLint 9, Prettier, Playwright

---

## Design System & Tokens

Dominant black and industrial monochrome palette with restrained crimson accents:

- **Primary Background:** `#050505`
- **Secondary Background:** `#0A0A0A`
- **Elevated Surface:** `#141414`
- **Primary Text:** `#F2F2F2`
- **Secondary Text:** `#A0A0A0`
- **Muted Text:** `#8A8A8A` (WCAG 2.2 AA compliant — 5.47:1 contrast ratio against `#0A0A0A`)
- **Metallic Accent:** `#C0C0C0`
- **Borders:** `#262626`
- **Restrained Crimson:** `#790C18`

### Typography

- **Display Headings:** Space Grotesk
- **Body Text:** Inter
- **Technical Labels:** JetBrains Mono

---

## Project Structure

```text
portfolio-trb/
├── public/
│   ├── images/
│   │   ├── projects/
│   │   ├── profile/
│   │   └── achievements/
│   ├── models/
│   ├── resume/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── reactbits/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx
│   │   │   ├── SocialDock.tsx
│   │   │   └── Footer.tsx
│   │   └── shared/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── TechStack.tsx
│   │   ├── Achievements.tsx
│   │   ├── CurrentWork.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── achievements.ts
│   ├── hooks/
│   ├── types/
│   ├── styles/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── docs/
│   ├── IMPLEMENTATION_PLAN.md
│   ├── COMPONENT_MANIFEST.md
│   ├── EVIDENCE_REGISTER.md
│   ├── RELEASE_CHECKLIST.md
│   └── ASSET_REQUIREMENTS.md
├── tests/
├── index.html
├── package.json
├── vite.config.ts
├── README.md
└── .gitignore
```

---

## Available Scripts

```bash
# Start local development server
npm run dev

# Strict TypeScript type check
npm run typecheck

# Lint codebase with ESLint
npm run lint

# Format code with Prettier
npm run format

# Production build
npm run build

# Run Playwright end-to-end tests
npm test
```

---

## Development Phases & Progress

- **Phase 01 — Foundation and Architecture:** `COMPLETED` (React 19, Strict TypeScript, Vite, Tailwind tokens, 8 semantic sections, typed data, Playwright foundation).
- **Phase 02 — Visual Identity & Hero:** `COMPLETED` (TechText, LiquidChrome, RotatingText, MetallicPaint, Noise).
- **Phase 03 — Navigation & Global Interactions:** `COMPLETED` (StaggeredMenu, Dock, TargetCursor, Magnet, GradualBlur — 54 passing tests, 10/18 components active).
- **Phase 04 — About & 3D Lanyard Identity:** `COMPLETED` (Lanyard 3D physics badge with Verlet simulation, ScrollReveal editorial narrative, accessible static card fallback, 72 passing tests, 12/18 components active).
- **Phase 05 — Interactive Flex Carousel Project Showcase:** `COMPLETED` (FlexCarousel horizontal expanding showcase, 3D OGL ribbon reel, 8 prioritized initiatives, complete engineering dossiers, roving keyboard navigation, 92 passing tests, 13/18 components active).
- **Phase 06 — Engineering Case Studies & ScrollStack:** `COMPLETED` (ScrollStack card pinning with perspective scale & dimming, 4 flagship dossiers: PARALLAX, VORTEX, ØMEN, VESPER, architecture pipelines, mobile sequential presentation, 122 passing tests, 14/18 components active).
- **Phase 07 — Technical Arsenal & Milestones:** `COMPLETED` (MagicBento 6-domain asymmetric grid with pointer spotlight & border glow, LogoLoop continuous developer toolchain marquee, CountUp verified numerical benchmarks, AnimatedList spring-driven milestone track record, 150 passing tests, 18/18 locked components active — 100% manifest integration).
- **Phase 08 — Final Integration, Professional Refinement & Performance Optimization:** `COMPLETED` (Editorial Roadmap & Contact redesign, minimal oversized Colophon footer with static TRB watermark, empirical benchmark reconciliation, Evidence Register & Release Checklist, OpenGraph/Twitter/JSON-LD SEO, chunk splitting reducing index.js to 417 kB, 100/100 Best Practices & SEO, 166 passing Playwright tests).
- **Phase 09 — Final Regression, Release Preparation & Vercel Preview Deployment:** `COMPLETED` (AURA URL resolution to `https://aura-umber-eight-10.vercel.app/`, Contact UI asset disclosure cleanup, Accessibility hardening to 96/100 Desktop & Mobile, 100/100 Best Practices & SEO, 166 Playwright tests passed with 158 passed and 8 skips, 15 Visual QA artifacts captured, Deployment Guide, Rollback Plan, Release Candidate ready).

Detailed implementation plans and operational runbooks are documented in:
- [DEPLOYMENT_GUIDE.md](docs/DEPLOYMENT_GUIDE.md)
- [ROLLBACK_PLAN.md](docs/ROLLBACK_PLAN.md)
- [IMPLEMENTATION_PLAN.md](docs/IMPLEMENTATION_PLAN.md)
- [COMPONENT_MANIFEST.md](docs/COMPONENT_MANIFEST.md)
- [EVIDENCE_REGISTER.md](docs/EVIDENCE_REGISTER.md)
- [RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md)
- [ASSET_REQUIREMENTS.md](docs/ASSET_REQUIREMENTS.md)
