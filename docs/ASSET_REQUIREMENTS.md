# REQUIRED AUTHENTIC ASSET SPECIFICATIONS
## Portfolio V2 — Beyond The Interface

This document specifies the required authentic assets and external profiles needed from Tarun R. to complete subsequent phases.

> **CRITICAL DIRECTIVE:** In accordance with the portfolio design principles, placeholder stock photography, AI-generated headshots, and unverified mockups are strictly prohibited. Unavailable assets must remain cleanly hidden or gracefully fallback to industrial vector schematics until authentic source files are provided by the project owner.

---

### Asset Checklist & Specification

| Asset Category | Target Path / Destination | Specification Requirements | Current Staging Status | Required For |
|---|---|---|---|---|
| **Profile Portrait** | `public/images/profile/tarun-portrait.webp` | High-contrast, monochrome or editorial lighting portrait. Ratio 1:1 or 4:5, minimum 1200x1200px. | Missing. Fallback: Monogram monogram/vector mark. | Phase 04 (About / Lanyard) |
| **Lanyard 3D Textures** | `public/models/lanyard/` | 1. Front badge card texture (`card-front.png`)<br>2. Back badge card texture (`card-back.png`)<br>3. Nylon weave strap normal/displacement map | Missing. Fallback: Procedural Three.js canvas text texture. | Phase 04 (Lanyard Badge) |
| **Project Cover Artwork** | `public/images/projects/{slug}-cover.png` | 16:9 ratio screenshots or custom industrial schematics for each of the 11 projects (PARALLAX, VORTEX, ØMEN, etc.). | Staged with clean monochrome SVG vector schematics. | Phase 05 (Carousel) |
| **Application Screenshots** | `public/images/projects/{slug}/` | High-resolution UI captures of real running software (AURA, ONE PLANET, GFG REDLINE, PARALLAX MapLibre). | Missing. Stock photos strictly prohibited; industrial vector schematics and live URLs active. | Phase 06 (Case Studies) |
| **Architecture Diagrams** | `public/images/diagrams/` | High-resolution SVG/PNG diagrams depicting: VORTEX CUDA memory stream, PARALLAX SAR coregistration pipeline, ØMEN attack DAG. | Staged with semantic SVG/HTML responsive architecture pipelines in `CaseStudies.tsx`. | Phase 06 (Case Studies) |
| **Hackathon Certificates** | `public/images/achievements/` | Verified NASA Space Apps Challenge 2026 participation certificate and academic milestone documents. | Staged and verified with authentic repository codebases (PARALLAX, VORTEX) and production deployments. | Phase 07 (Milestones) |
| **Updated Resume PDF** | `public/resume/Tarun_R_Resume.pdf` | Official compiled PDF resume. Minimum 1 page, authentic contact and education details matching CSBS RIT. | Missing. Download button is hidden per rule 13. | Phase 08 (Contact/Footer) |
| **LinkedIn Profile URL** | `src/data/profile.ts` | Authentic public LinkedIn profile URL (replacing the legacy `https://www.linkedin.com/feed/` feed placeholder). | Missing. Link is omitted from UI per rule 13. | Phase 03 & 08 |
| **VESPER Source Disclosures** | `src/data/projects.ts` | Verification of repository link, system domain, architecture, and technology stack. | Pending verification. Currently marked as pending. | Phase 05 & 06 |
| **Remaining Repository Links** | `src/data/projects.ts` | Verified GitHub repository URLs for NØX and RESURRECTION. | Staged as research projects without unverified URLs. | Phase 05 |

---

### Procedure for Submitting Assets

When providing authentic assets:
1. Place profile portraits into `public/images/profile/`.
2. Place verified resume PDF into `public/resume/Tarun_R_Resume.pdf`.
3. Provide the verified LinkedIn URL to update `src/data/profile.ts` (`profileData.contact.linkedin`).
4. Place real project screenshots into `public/images/projects/<project-slug>/`.
