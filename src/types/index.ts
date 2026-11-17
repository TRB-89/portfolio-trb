export type ProjectStatus =
  'active' | 'in-progress' | 'experimental' | 'planned' | 'completed' | 'research';

export type VerificationStatus = 'verified' | 'pending' | 'planned';

export interface Project {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  detailedDescription: string;
  domain: string;
  technologies: string[];
  status: ProjectStatus;
  coverImage: string;
  screenshots: string[];
  repositoryUrl?: string;
  liveDemoUrl?: string;
  competitionAssociation?: string;
  technicalHighlights: string[];
  problemStatement?: string;
  coreSolution?: string;
  verifiedAchievements?: string[];
  verificationStatus: VerificationStatus;
  isFeatured: boolean;
  benchmarkNotes?: string;
  safetyNotice?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'foundational' | 'competent' | 'experimental';
    note?: string;
  }[];
  projectSlug?: string;
  projectName?: string;
  tagline?: string;
  colSpan?: number;
  rowSpan?: number;
}

export interface Profile {
  name: string;
  preferredName: string;
  role: string;
  titles: string[];
  tagline: string;
  bio: string[];
  education: {
    degree: string;
    institution: string;
    department: string;
    status: string;
  };
  contact: {
    email: string;
    github: string;
    linkedin?: string;
    resumeUrl?: string;
  };
  location: string;
  status: string;
  principles: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  category: 'hackathon' | 'engineering' | 'academic' | 'certification';
  description: string;
  verificationStatus: VerificationStatus;
  link?: string;
}

export interface TechnicalMetric {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  verified: boolean;
}

export interface ArchitectureStep {
  step: string;
  label: string;
  description: string;
  status: 'implemented' | 'planned' | 'experimental' | 'pending';
}

export interface CaseStudyDecision {
  decision: string;
  tradeoff: string;
  rationale: string;
}

export interface CaseStudy {
  id: string;
  projectId: string;
  number: string;
  title: string;
  subtitle: string;
  domain: string;
  summary: string;
  problemStatement: string;
  solution: string;
  architectureDescription: string;
  architecturePipeline: ArchitectureStep[];
  technologies: string[];
  engineeringChallenges: string[];
  implementationDecisions: CaseStudyDecision[];
  verifiedResults: string[];
  limitations: string[];
  status: ProjectStatus;
  verificationStatus: VerificationStatus;
  repositoryUrl?: string;
  liveDemoUrl?: string;
  supportingEvidence?: string;
  competitionAssociation?: string;
  isPendingDocumentation?: boolean;
}
