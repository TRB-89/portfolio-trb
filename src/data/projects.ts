import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'parallax',
    name: 'PARALLAX',
    slug: 'parallax',
    tagline: 'Cross-sensor investigation of flood-related surface changes.',
    shortDescription:
      'Cross-sensor geospatial investigation pipeline combining NISAR SAR imagery and NASA OPERA surface-water data to track surface water dynamics.',
    detailedDescription:
      'PARALLAX is an experimental geospatial intelligence system developed for the NASA Space Apps Challenge 2026. It performs automated cross-sensor data alignment, analyzing SAR backscatter variance alongside optical and surface-water products to identify hydrological changes during high-impact flooding events.',
    domain: 'Geospatial Intelligence',
    technologies: ['Python', 'FastAPI', 'Rasterio', 'MapLibre GL', 'React', 'NASA Earthdata'],
    status: 'research',
    coverImage: '/images/projects/parallax-cover.svg',
    screenshots: [],
    repositoryUrl: 'https://github.com/aadeshmax/PARALLAX',
    competitionAssociation: 'NASA Space Apps Challenge 2026',
    technicalHighlights: [
      'Multi-sensor raster ingestion and coregistration with Rasterio and GDAL',
      'Surface-water anomaly detection via SAR amplitude thresholding',
      'Interactive raster tile visualization using MapLibre GL with GPU canvas rendering',
      'FastAPI processing backend orchestrating async tile queries'
    ],
    verificationStatus: 'verified',
    isFeatured: true,
    safetyNotice:
      'Research prototype developed for NASA Space Apps 2026. Does not claim operational flood forecasting capability or verified competition placements.'
  },
  {
    id: 'vortex',
    name: 'VORTEX',
    slug: 'vortex',
    tagline: 'GPU-accelerated mathematical optimization and sparse solver.',
    shortDescription:
      'High-performance solver exploring sparse matrix computation, parallel numerical kernels, and hybrid CPU-GPU execution pipelines.',
    detailedDescription:
      'VORTEX explores the boundary of high-throughput scientific computing. Built with modern C++ and CUDA, it focuses on memory-bandwidth-bound linear algebra operations, implementing compressed sparse row (CSR) algorithms and parallel reduction routines to accelerate non-linear optimization problems.',
    domain: 'High-Performance Computing',
    technologies: ['C++', 'CUDA', 'CMake', 'Sparse Matrices', 'Linear Algebra'],
    status: 'experimental',
    coverImage: '/images/projects/vortex-cover.svg',
    screenshots: [],
    repositoryUrl: 'https://github.com/TRB-89/V-RTEX',
    technicalHighlights: [
      'Custom CUDA kernels tailored for Compressed Sparse Row (CSR) matrix-vector operations',
      'Asynchronous memory transfers utilizing CUDA streams to overlap compute and transfer',
      'Hybrid host-device fallback heuristics for small-dimension matrices',
      'Automated CMake build harness targeting NVIDIA compute architectures'
    ],
    verificationStatus: 'verified',
    isFeatured: true,
    benchmarkNotes:
      'Experimental results confirm CPU validation suite completion, functional CUDA execution, sparse matrix memory footprint reduction, and SpMV throughput gains over naïve implementations. Specific scalar performance values are intentionally withheld pending independent laboratory benchmarking.'
  },
  {
    id: 'vesper',
    name: 'VESPER',
    slug: 'vesper',
    tagline: 'Technical architecture pending documentation verification.',
    shortDescription:
      'Research and engineering project currently undergoing internal documentation and source verification.',
    detailedDescription:
      'Technical architecture, system domain, execution stack, and performance metrics are actively maintained in staging and will be published following official peer review and artifact verification.',
    domain: 'Systems Engineering',
    technologies: ['C++', 'Systems Architecture'],
    status: 'in-progress',
    coverImage: '/images/projects/vesper-cover.svg',
    screenshots: [],
    technicalHighlights: [
      'Specifications and technical disclosures are retained pending repository verification'
    ],
    verificationStatus: 'pending',
    isFeatured: false,
    safetyNotice:
      'Architecture specifications, capabilities, and performance metrics are withheld until source repository and documentation validation is complete.'
  },
  {
    id: 'omen',
    name: 'ØMEN',
    slug: 'omen',
    tagline: 'Intelligent threat detection and attack graph modeling.',
    shortDescription:
      'Cybersecurity platform exploring neural anomaly detection, automated attack path simulation, and real-time SOC graph visualization.',
    detailedDescription:
      'ØMEN evaluates system telemetry against multi-stage adversarial techniques. By modeling corporate infrastructure as directed acyclic dependency graphs, it simulates potential lateral movement vectors and triggers automated mitigation workflows based on neural anomaly scoring.',
    domain: 'Cybersecurity & Neural Threat Detection',
    technologies: ['Python', 'PyTorch', 'NetworkX', 'React', 'FastAPI', 'SOC Telemetry'],
    status: 'active',
    coverImage: '/images/projects/omen-cover.svg',
    screenshots: [],
    repositoryUrl: 'https://github.com/TRB-89/-MEN',
    technicalHighlights: [
      'Topological attack graph construction mapping vulnerabilities to MITRE ATT&CK techniques',
      'Autoencoder-based network flow anomaly scoring',
      'Real-time dynamic SOC security visualization built with React and Canvas',
      'Deterministic lateral movement threat simulation'
    ],
    verificationStatus: 'verified',
    isFeatured: true
  },
  {
    id: 'aura-wellness',
    name: 'AURA — Mental Wellness',
    slug: 'aura-wellness',
    tagline: 'Empathetic conversational AI for mindful journaling and reflection.',
    shortDescription:
      'AI-powered conversational mental wellness platform featuring voice interaction, reflective journaling, and intelligent session summaries.',
    detailedDescription:
      'A digital reflection companion designed to foster regular mental wellness habits. AURA combines guided conversational interactions, sentiment tracking over time, and automated retrospective summaries to help individuals organize and reflect on daily thoughts.',
    domain: 'Conversational AI',
    technologies: ['React', 'TypeScript', 'Web Audio API', 'Tailwind CSS', 'LLM API'],
    status: 'completed',
    coverImage: '/images/projects/aura-wellness-cover.svg',
    screenshots: [],
    liveDemoUrl: 'https://aura-umber-eight-10.vercel.app/',
    technicalHighlights: [
      'Low-latency bidirectional audio capture and speech recognition pipeline',
      'Emotion-aware conversational prompting with strict therapeutic guardrails',
      'Client-side encrypted local journaling session storage',
      'Dynamic session insight extraction and mood tracking graphs'
    ],
    verificationStatus: 'verified',
    isFeatured: true,
    safetyNotice:
      'AURA is an educational self-reflection and lifestyle tool. It is not a clinical medical device, does not provide medical advice or diagnosis, and is not a replacement for professional psychological care.'
  },
  {
    id: 'aura-desktop',
    name: 'AURA — Desktop Assistant',
    slug: 'aura-desktop',
    tagline: 'System-level conversational automation and desktop overlays.',
    shortDescription:
      'Native Windows desktop assistant exploring contextual OS interactions, voice triggers, and system automation workflows.',
    detailedDescription:
      'A dedicated native Windows application designed for frictionless workflow orchestration. Operates via an unobtrusive transparent HUD overlay, allowing users to invoke developer scripts, query local files, and trigger custom automation sequences via conversational voice prompts.',
    domain: 'Desktop Automation & Systems Intelligence',
    technologies: ['Electron', 'React', 'TypeScript', 'Node.js', 'Win32 APIs'],
    status: 'experimental',
    coverImage: '/images/projects/aura-desktop-cover.svg',
    screenshots: [],
    technicalHighlights: [
      'Electron multi-process architecture with secure IPC channels and hardware acceleration',
      'Global keyboard shortcuts and transparent click-through HUD overlay',
      'Local system command execution with strict permission sandboxing',
      'Context-aware active window inspection for developer automation'
    ],
    verificationStatus: 'verified',
    isFeatured: false,
    safetyNotice:
      'Independent desktop automation project distinct from the AURA Mental Wellness web platform.'
  },
  {
    id: 'gfg-redline',
    name: 'GFG 2.0 REDLINE',
    slug: 'gfg-redline',
    tagline: 'AI-assisted career comeback intelligence for women returning to tech.',
    shortDescription:
      'Career intelligence platform empowering women returning to the workforce with personalized pathways, skill gap analysis, and mentor matching.',
    detailedDescription:
      'Engineered to dismantle friction for professionals re-entering the technical industry. REDLINE analyzes user background and historical experience against modern market requirements, generating targeted upskilling roadmaps and pairing users with industry mentors.',
    domain: 'Career Intelligence & Social Impact',
    technologies: ['React', 'TypeScript', 'Supabase', 'Gemini API', 'PostgreSQL'],
    status: 'completed',
    coverImage: '/images/projects/gfg-redline-cover.svg',
    screenshots: [],
    technicalHighlights: [
      'Dynamic resume parsing and skill gap extraction powered by structured Gemini schemas',
      'Relational database architecture built on Supabase with Row Level Security (RLS)',
      'Algorithmic mentor-mentee matching based on domain affinity and career trajectory',
      'Interactive skill path progression tree with checkpoint evaluations'
    ],
    verificationStatus: 'verified',
    isFeatured: true
  },
  {
    id: 'one-planet',
    name: 'ONE PLANET',
    slug: 'one-planet',
    tagline: 'SDG-focused civic technology and decentralized community action.',
    shortDescription:
      'Civic platform supporting urban ecological issue reporting, automated classification, volunteer coordination, and regional sustainability analytics.',
    detailedDescription:
      'A civic technology initiative aligned with the United Nations Sustainable Development Goals. It allows communities to report local environmental concerns (waste accumulation, water scarcity, energy inefficiency) and connects them with verified volunteer initiatives and municipal tracking dashboards.',
    domain: 'Sustainability & Civic Tech',
    technologies: ['React', 'TypeScript', 'MapLibre GL', 'Supabase', 'Tailwind CSS'],
    status: 'completed',
    coverImage: '/images/projects/one-planet-cover.svg',
    screenshots: [],
    liveDemoUrl: 'https://one-planet-nine.vercel.app/',
    technicalHighlights: [
      'Geospatial incident tagging with precise GPS coordinates and photo uploads',
      'Community voting and verification mechanism to filter civic reports',
      'Regional environmental impact dashboard aggregating volunteer contributions',
      'Real-time status tracking from submission through municipal resolution'
    ],
    verificationStatus: 'verified',
    isFeatured: true
  },
  {
    id: 'nox',
    name: 'NØX',
    slug: 'nox',
    tagline: 'Experimental neural network architectures for intrusion detection.',
    shortDescription:
      'Machine learning intrusion detection framework evaluating multilayer perceptrons (MLP) and autoencoders on flow datasets.',
    detailedDescription:
      'NØX is a machine learning benchmark exploring network intrusion detection. It investigates how unsupervised autoencoders perform at detecting zero-day anomalies compared to supervised deep neural networks when trained on high-dimensional packet flow statistics.',
    domain: 'Machine Learning & Cybersecurity',
    technologies: ['Python', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
    status: 'research',
    coverImage: '/images/projects/nox-cover.svg',
    screenshots: [],
    technicalHighlights: [
      'Comparative benchmarking of deep MLPs vs. symmetric autoencoders on NSL-KDD / CIC-IDS',
      'Dimensionality reduction via reconstruction error loss thresholds',
      'Feature correlation pruning pipeline preserving discriminatory packet headers',
      'Rigorous stratified cross-validation isolating synthetic overfitting'
    ],
    verificationStatus: 'verified',
    isFeatured: false
  },
  {
    id: 'resurrection',
    name: 'RESURRECTION',
    slug: 'resurrection',
    tagline: 'Research-oriented decision intelligence and outcome modeling.',
    shortDescription:
      'Decision intelligence research project exploring probabilistic outcome modeling and simulated strategy optimization.',
    detailedDescription:
      'An exploratory research initiative investigating how multi-agent simulations and probabilistic decision frameworks can predict downstream ramifications of complex, multi-variable decisions in competitive environments.',
    domain: 'Decision Intelligence',
    technologies: ['Python', 'Simulation Frameworks', 'Statistical Modeling'],
    status: 'research',
    coverImage: '/images/projects/resurrection-cover.svg',
    screenshots: [],
    technicalHighlights: [
      'Monte Carlo simulation harness for stochastic multi-factor state transitions',
      'Utility function optimization balancing high-risk and conservative payoffs',
      'Modular agent behavior modeling engine for adversarial environments'
    ],
    verificationStatus: 'verified',
    isFeatured: false
  },
  {
    id: 'agaram',
    name: 'AGARAM',
    slug: 'agaram',
    tagline: 'Code in any language. Learn in your own.',
    shortDescription:
      'AI-powered multilingual programming education platform designed for regional-language learners.',
    detailedDescription:
      'AGARAM addresses the linguistic divide in computer science education. Designed to explain programming constructs, compile-time errors, and algorithmic logic in native Indian languages (such as Tamil), making core systems thinking intuitive and accessible.',
    domain: 'Education Technology',
    technologies: ['React', 'Next.js', 'FastAPI', 'Multilingual LLMs', 'WebAssembly'],
    status: 'planned',
    coverImage: '/images/projects/agaram-cover.svg',
    screenshots: [],
    technicalHighlights: [
      'Multilingual abstract syntax tree (AST) explanation generator (Planned)',
      'Localized interactive code execution sandbox (Planned)',
      'Regional phonetic voice tutor explaining runtime errors (Planned)'
    ],
    verificationStatus: 'planned',
    isFeatured: false,
    safetyNotice:
      'Architectural roadmap and planned development phase. Prototype implementation currently in design staging.'
  }
];
