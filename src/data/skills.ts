import { SkillCategory } from '../types';

export const skillCategoriesData: SkillCategory[] = [
  {
    id: 'ai-systems',
    title: 'Artificial Intelligence',
    description:
      'Integration of modern neural architectures, conversational frameworks, and applied machine learning models into operational software.',
    skills: [
      {
        name: 'Generative AI Integration',
        level: 'competent',
        note: 'Structured JSON schemas and prompt orchestration'
      },
      {
        name: 'Conversational AI',
        level: 'competent',
        note: 'Context management, safety guardrails, and speech synthesis'
      },
      {
        name: 'AI Assistants',
        level: 'competent',
        note: 'Tool-calling and task-oriented workflow automations'
      },
      {
        name: 'Machine Learning Fundamentals',
        level: 'competent',
        note: 'Clustering, classification, and regression modeling'
      },
      {
        name: 'Neural Network Experimentation',
        level: 'experimental',
        note: 'MLP and Autoencoders for anomaly detection'
      }
    ]
  },
  {
    id: 'computational-engineering',
    title: 'Computational Engineering',
    description:
      'Low-level systems programming, hardware-aware parallel execution, and numerical optimization algorithms.',
    skills: [
      {
        name: 'CUDA',
        level: 'experimental',
        note: 'Custom kernel authoring, thread block layout, and memory coalescing'
      },
      {
        name: 'C++',
        level: 'competent',
        note: 'Modern C++17/20, RAII, memory management, and STL algorithms'
      },
      {
        name: 'GPU Computing',
        level: 'experimental',
        note: 'Host-to-device asynchronous streams and bandwidth optimization'
      },
      {
        name: 'Parallel Computation',
        level: 'competent',
        note: 'Multi-threaded algorithmic routines and CPU parallelization'
      },
      {
        name: 'Sparse Matrix Operations',
        level: 'experimental',
        note: 'Compressed Sparse Row (CSR) algorithms and SpMV'
      },
      {
        name: 'Mathematical Optimization',
        level: 'foundational',
        note: 'Numerical minimization and objective state tracking'
      }
    ]
  },
  {
    id: 'geospatial-intelligence',
    title: 'Geospatial Intelligence',
    description:
      'Multi-spectral and synthetic aperture radar (SAR) raster processing coupled with high-performance WebGL map layers.',
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
        name: 'Geospatial Visualization',
        level: 'competent',
        note: 'Dynamic vector tile styling and coordinate reprojection'
      },
      {
        name: 'MapLibre GL',
        level: 'competent',
        note: 'GPU-accelerated client-side raster and vector rendering'
      },
      {
        name: 'Python Scientific Stack',
        level: 'competent',
        note: 'NumPy, SciPy, and Pandas data structures'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description:
      'Intrusion detection models, MITRE ATT&CK mapping, adversarial graph analysis, and defensive simulation.',
    skills: [
      {
        name: 'Intrusion Detection',
        level: 'competent',
        note: 'Statistical flow analysis and anomaly scoring'
      },
      {
        name: 'Threat Intelligence',
        level: 'foundational',
        note: 'IOC telemetry correlation and threat modeling'
      },
      {
        name: 'Attack Graph Visualization',
        level: 'experimental',
        note: 'Directed acyclic dependency graphs of lateral movement'
      },
      {
        name: 'Neural Threat Detection',
        level: 'experimental',
        note: 'Unsupervised reconstruction loss for zero-day signals'
      }
    ]
  },
  {
    id: 'full-stack-development',
    title: 'Full-Stack Development',
    description:
      'Architecting resilient, type-safe client applications, asynchronous backend APIs, and distributed data layers.',
    skills: [
      {
        name: 'React',
        level: 'competent',
        note: 'Component composition, state management, and custom hooks'
      },
      {
        name: 'TypeScript',
        level: 'competent',
        note: 'Strict typing, generics, and compile-time contract enforcement'
      },
      {
        name: 'JavaScript (ESNext)',
        level: 'competent',
        note: 'Asynchronous event loops, DOM, and Web APIs'
      },
      {
        name: 'Python',
        level: 'competent',
        note: 'Data pipelines, scientific computing, and system utilities'
      },
      {
        name: 'FastAPI',
        level: 'competent',
        note: 'Asynchronous REST APIs with Pydantic validation'
      },
      {
        name: 'Electron',
        level: 'competent',
        note: 'Desktop native application packaging and IPC protocols'
      },
      {
        name: 'Supabase & PostgreSQL',
        level: 'competent',
        note: 'Relational schemas, RLS policies, and query indexing'
      },
      {
        name: 'REST APIs',
        level: 'competent',
        note: 'Stateless protocol design, auth headers, and endpoint versioning'
      }
    ]
  },
  {
    id: 'design-product',
    title: 'Design & Product Development',
    description:
      'Crafting cohesive visual languages, typography hierarchies, vector identity assets, and interactive software interfaces.',
    skills: [
      {
        name: 'Figma',
        level: 'competent',
        note: 'Component libraries, design tokens, wireframing, and interactive prototypes'
      },
      {
        name: 'Adobe Illustrator',
        level: 'competent',
        note: 'Vector brand marks, iconography, and technical illustration'
      },
      {
        name: 'UI/UX Design',
        level: 'competent',
        note: 'Information architecture, responsive layouts, and user flows'
      },
      {
        name: 'Interactive Interfaces',
        level: 'competent',
        note: 'Micro-interactions, state feedback, and motion transitions'
      },
      {
        name: 'Git & GitHub',
        level: 'competent',
        note: 'Branching workflows, version control discipline, and CI checks'
      },
      {
        name: 'Vercel Deployment',
        level: 'competent',
        note: 'Edge routing, serverless build environments, and web vitals'
      }
    ]
  }
];
