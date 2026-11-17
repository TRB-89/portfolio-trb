import { Achievement, TechnicalMetric } from '../types';

export const achievementsData: Achievement[] = [
  {
    id: 'nasa-space-apps-2026',
    title: 'NASA Space Apps Challenge 2026 Participant',
    organization: 'NASA Space Apps Challenge',
    date: '2026',
    category: 'hackathon',
    description:
      'Engineered PARALLAX — a cross-sensor geospatial pipeline utilizing NISAR synthetic aperture radar (SAR) data and NASA OPERA surface-water datasets for flood surface-water change analysis.',
    verificationStatus: 'verified',
    link: 'https://github.com/aadeshmax/PARALLAX'
  },
  {
    id: 'rit-csbs-undergraduate',
    title: 'B.Tech in Computer Science and Business Systems',
    organization: 'Rajalakshmi Institute of Technology',
    date: '2024 — Present',
    category: 'academic',
    description:
      'Undergraduate coursework combining core computational theory, algorithms, systems programming, and business systems integration.',
    verificationStatus: 'verified'
  },
  {
    id: 'vortex-cuda-benchmark',
    title: 'High-Performance GPU Optimization Initiative',
    organization: 'Independent Systems Lab',
    date: '2026',
    category: 'engineering',
    description:
      'Author of VORTEX, an experimental GPU mathematical optimization solver testing parallel sparse linear algebra kernels and CPU-GPU memory streams.',
    verificationStatus: 'verified',
    link: 'https://github.com/TRB-89/V-RTEX'
  },
  {
    id: 'sdg-one-planet-deployment',
    title: 'ONE PLANET Civic Platform Live Release',
    organization: 'Civic Technology Initiative',
    date: '2025',
    category: 'engineering',
    description:
      'Designed, built, and deployed an SDG-focused civic engagement platform supporting local municipal anomaly reporting and volunteer coordination.',
    verificationStatus: 'verified',
    link: 'https://one-planet-nine.vercel.app/'
  }
];

export const technicalMetricsData: TechnicalMetric[] = [
  {
    id: 'projects-catalogued',
    value: 11,
    suffix: '',
    label: 'Technical Systems',
    description: 'Documented engineering repositories across systems, AI, and civic domains',
    verified: true
  },
  {
    id: 'engineering-domains',
    value: 6,
    suffix: '',
    label: 'Core Domains',
    description: 'AI, HPC, Geospatial, Cybersecurity, Full-Stack, and Product Design',
    verified: true
  },
  {
    id: 'reactbits-components',
    value: 18,
    suffix: '',
    label: 'Component Primitives',
    description: 'Modular interactive components integrated into the architectural foundation',
    verified: true
  },
  {
    id: 'performance-budget',
    value: 60,
    suffix: 'fps',
    label: 'Framerate Target',
    description: 'Smooth hardware-accelerated rendering across desktop and mobile viewports',
    verified: true
  }
];
