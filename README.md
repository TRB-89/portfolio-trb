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
- **Muted Text:** `#707070`
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
- **Phase 06 — Engineering Case Studies & ScrollStack:** `UPCOMING`
- **Phase 07 — Technical Arsenal & Milestones:** `UPCOMING`
- **Phase 08 — Currently Building & Contact Refinement:** `UPCOMING`
- **Phase 09 — Final Audit & Production Hardening:** `UPCOMING`

Detailed implementation plans and component specifications are documented in:
- [IMPLEMENTATION_PLAN.md](docs/IMPLEMENTATION_PLAN.md)
- [COMPONENT_MANIFEST.md](docs/COMPONENT_MANIFEST.md)
- [ASSET_REQUIREMENTS.md](docs/ASSET_REQUIREMENTS.md)
