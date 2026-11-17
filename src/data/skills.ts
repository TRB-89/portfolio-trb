import { SkillCategory } from '../types';

export const skillCategoriesData: SkillCategory[] = [
  {
    id: 'computational-engineering',
    title: 'Computational Engineering',
    tagline: 'GPU Sparse Linear Solvers & CUDA',
    projectName: 'VORTEX',
    projectSlug: 'vortex',
    description:
      'Low-level systems programming, hardware-aware parallel execution, and numerical optimization algorithms.',
    colSpan: 2,
    skills: [
      {
        name: 'CUDA C++',
        level: 'experimental',
        note: 'Custom kernel authoring, thread block layout, and memory coalescing'
      },
      {
        name: 'Modern C++ (17/20)',
        level: 'competent',
        note: 'RAII patterns, memory layouts, and zero-overhead abstractions'
      },
      {
        name: 'GPU Asynchronous Computing',
        level: 'experimental',
        note: 'Host-to-device asynchronous streams and bandwidth optimization'
      },
      {
        name: 'Sparse Matrix Linear Algebra',
        level: 'experimental',
        note: 'Compressed Sparse Row (CSR) algorithms and SpMV'
      },
      {
        name: 'Numerical Optimization',
        level: 'foundational',
        note: 'Minimization algorithms and convergence state tracking'
      }
    ]
  },
  {
    id: 'geospatial-intelligence',
    title: 'Geospatial Intelligence',
    tagline: 'NISAR SAR & Surface Water Analysis',
    projectName: 'PARALLAX',
    projectSlug: 'parallax',
    description:
      'Multi-spectral and synthetic aperture radar (SAR) raster processing coupled with high-performance WebGL map layers.',
    colSpan: 1,
    skills: [
      {
        name: 'SAR Data Processing',
        level: 'experimental',
        note: 'NISAR backscatter analysis and water mask thresholding'
      },
      {
        name: 'Rasterio & GDAL',
        level: 'competent',
        note: 'Multi-band GeoTIFF ingestion, windowing, and spatial transforms'
      },
      {
        name: 'MapLibre GL & WebGL',
        level: 'competent',
        note: 'Client-side hardware accelerated vector and raster rendering'
      },
      {
        name: 'Python Scientific Stack',
        level: 'competent',
        note: 'NumPy, SciPy, and Pandas vector operations'
      }
    ]
  },
  {
    id: 'ai-systems',
    title: 'Artificial Intelligence',
    tagline: 'Conversational Systems & Guardrails',
    projectName: 'AURA',
    projectSlug: 'aura',
    description:
      'Integration of neural architectures, conversational frameworks, and applied machine learning models into operational software.',
    colSpan: 1,
    skills: [
      {
        name: 'Generative AI Integration',
        level: 'competent',
        note: 'Structured JSON schemas and prompt orchestration'
      },
      {
        name: 'Conversational Health Architecture',
        level: 'competent',
        note: 'Context management, safety guardrails, and speech synthesis'
      },
      {
        name: 'Tool-Calling AI Assistants',
        level: 'competent',
        note: 'Deterministic tool-calling and task-oriented workflow automations'
      },
      {
        name: 'Neural Network Experimentation',
        level: 'experimental',
        note: 'Reconstruction loss autoencoders and anomaly scoring'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    tagline: 'Intrusion Detection & Threat Graphing',
    projectName: 'ØMEN',
    projectSlug: 'omen',
    description:
      'Intrusion detection models, MITRE ATT&CK mapping, adversarial graph analysis, and defensive simulation.',
    colSpan: 2,
    skills: [
      {
        name: 'Intrusion Detection Pipelines',
        level: 'competent',
        note: 'Network telemetry flow analysis and anomaly thresholding'
      },
      {
        name: 'Threat Modeling & ATT&CK',
        level: 'foundational',
        note: 'Adversarial tactic mapping and IOC correlation'
      },
      {
        name: 'Attack Graph Visualization',
        level: 'experimental',
        note: 'Directed acyclic dependency graphs of lateral traversal'
      },
      {
        name: 'Neural Anomaly Detection',
        level: 'experimental',
        note: 'Unsupervised reconstruction loss for anomalous traffic detection'
      }
    ]
  },
  {
    id: 'full-stack-development',
    title: 'Full-Stack Development',
    tagline: 'Type-Safe Distributed Web Systems',
    projectName: 'GFG REDLINE',
    projectSlug: 'gfg-redline',
    description:
      'Architecting resilient, type-safe client applications, asynchronous backend APIs, and distributed data layers.',
    colSpan: 2,
    skills: [
      {
        name: 'React 19 & Next.js Ecosystem',
        level: 'competent',
        note: 'Functional components, hooks, concurrent features, and suspense'
      },
      {
        name: 'TypeScript Strict Mode',
        level: 'competent',
        note: 'Strict typing, generics, compile-time contract enforcement'
      },
      {
        name: 'FastAPI (Python)',
        level: 'competent',
        note: 'Asynchronous REST APIs with strict Pydantic validation'
      },
      {
        name: 'Supabase & PostgreSQL',
        level: 'competent',
        note: 'Relational schemas, Row Level Security, and indexed queries'
      },
      {
        name: 'Electron Desktop Apps',
        level: 'competent',
        note: 'Desktop native packaging and IPC communication channels'
      }
    ]
  },
  {
    id: 'design-product',
    title: 'Design & Product Development',
    tagline: 'Design Systems & Edge Architecture',
    projectName: 'ONE PLANET',
    projectSlug: 'one-planet',
    description:
      'Crafting cohesive visual languages, typography hierarchies, vector identity assets, and production web interfaces.',
    colSpan: 1,
    skills: [
      {
        name: 'Figma Design Systems',
        level: 'competent',
        note: 'Tokens, auto-layout, wireframes, and interactive micro-interactions'
      },
      {
        name: 'UI/UX Information Architecture',
        level: 'competent',
        note: 'Human-centered workflows, accessibility, and responsive typography'
      },
      {
        name: 'Git Version Control Disciplines',
        level: 'competent',
        note: 'Branching strategies, atomic commits, and repository hygiene'
      },
      {
        name: 'Vercel Edge Deployment',
        level: 'competent',
        note: 'Preview environments, production edge hosting, and web performance'
      }
    ]
  }
];
