import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  LayoutGrid,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { projectsData, showcaseProjects } from '../data/projects';
import { Project } from '../types';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { FlexCarouselStage } from '../components/shared/FlexCarouselStage';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeProjectId, setActiveProjectId] = useState<string>(
    showcaseProjects[0]?.id || 'parallax'
  );
  const [showcaseMode, setShowcaseMode] = useState<'panels' | '3d'>('panels');
  const prefersReducedMotion = useReducedMotion();

  // Domains available for filtering secondary catalogue
  const domains = [
    'all',
    'Geospatial Intelligence',
    'High-Performance Computing',
    'Cybersecurity & Neural Threat Detection',
    'Conversational AI',
    'Sustainability & Civic Tech'
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'all') return true;
    return project.domain.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  const activeProject =
    showcaseProjects.find((p) => p.id === activeProjectId) || showcaseProjects[0];
  const activeIndex = showcaseProjects.findIndex((p) => p.id === activeProject.id);

  // Status badge styling helper
  const renderStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return (
          <span className="rounded border border-border bg-background px-2 py-0.5 font-mono text-[10px] uppercase text-foreground">
            PRODUCTION
          </span>
        );
      case 'research':
        return (
          <span className="rounded border border-crimson/60 bg-crimson/10 px-2 py-0.5 font-mono text-[10px] uppercase text-foreground">
            RESEARCH
          </span>
        );
      case 'experimental':
        return (
          <span className="rounded border border-metallic/60 bg-background px-2 py-0.5 font-mono text-[10px] uppercase text-metallic">
            EXPERIMENTAL
          </span>
        );
      case 'planned':
        return (
          <span className="rounded border border-border bg-background-secondary px-2 py-0.5 font-mono text-[10px] uppercase text-foreground-muted">
            PLANNED
          </span>
        );
      case 'in-progress':
        return (
          <span className="rounded border border-border bg-background px-2 py-0.5 font-mono text-[10px] uppercase text-foreground-secondary">
            IN_PROGRESS
          </span>
        );
      default:
        return (
          <span className="rounded border border-border bg-background px-2 py-0.5 font-mono text-[10px] uppercase text-foreground-muted">
            {status}
          </span>
        );
    }
  };

  return (
    <section
      id="projects"
      aria-label="Selected Work"
      className="bg-industrial-grid scroll-mt-16 border-b border-border bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-metallic">
              <FolderGit2 className="h-3.5 w-3.5" />
              <span>03 // SELECTED WORK</span>
            </div>
            <h2 className="font-display text-display-lg font-bold uppercase tracking-tight text-foreground">
              Engineered Deployments &amp; Systems
            </h2>
            <p className="font-mono text-xs text-foreground-muted">
              INTERACTIVE FLEX CAROUSEL SHOWCASE // 8 PRIORITIZED ENGINEERING INITIATIVES
            </p>
          </div>

          {/* Secondary Catalogue Filters */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Project domain filters">
            {domains.map((domain) => (
              <button
                key={domain}
                type="button"
                onClick={() => setSelectedFilter(domain)}
                className={`cursor-target rounded border px-3 py-1.5 font-mono text-xs transition-all ${
                  selectedFilter === domain
                    ? 'border-metallic bg-background-surface font-semibold text-foreground'
                    : 'border-border bg-background-secondary text-foreground-muted hover:border-border/80 hover:text-foreground'
                }`}
              >
                {domain === 'all' ? 'All Initiatives' : domain.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Primary Interactive Flex Carousel Showcase Stage */}
        <div
          aria-label="Flex Carousel Interactive Project Showcase"
          className="relative mb-16 w-full overflow-hidden rounded-2xl border border-border bg-background-secondary p-4 shadow-surface sm:p-6"
        >
          {/* Showcase Stage Toolbar */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-foreground">
              <LayoutGrid className="h-4 w-4 text-metallic" />
              <span className="font-semibold tracking-wider">FLEX_CAROUSEL_STAGE</span>
              <span className="text-foreground-muted">//</span>
              <span className="text-foreground-secondary">
                {showcaseMode === 'panels' ? 'EXPANDING_PANELS' : '3D_OGL_REEL'}
              </span>
              <span className="hidden rounded border border-border bg-background px-2 py-0.5 text-[10px] sm:inline-block">
                0{activeIndex + 1} / 0{showcaseProjects.length}
              </span>
            </div>

            {/* Quick Index Pills */}
            <div
              className="hidden items-center gap-1.5 md:flex"
              role="tablist"
              aria-label="Project quick selector"
            >
              {showcaseProjects.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveProjectId(p.id)}
                  className={`cursor-target rounded border px-2 py-0.5 text-[10px] transition-colors ${
                    p.id === activeProjectId
                      ? 'border-metallic bg-background font-semibold text-foreground'
                      : 'border-border/60 bg-background-surface text-foreground-muted hover:text-foreground'
                  }`}
                  aria-selected={p.id === activeProjectId}
                  role="tab"
                >
                  0{idx + 1}
                </button>
              ))}
            </div>

            {/* Mode Switcher & Status Tag */}
            <div className="flex items-center gap-3">
              <div className="inline-flex rounded-lg border border-border bg-background p-0.5">
                <button
                  type="button"
                  onClick={() => setShowcaseMode('panels')}
                  className={`cursor-target flex items-center gap-1 rounded px-2.5 py-1 text-[11px] transition-colors ${
                    showcaseMode === 'panels'
                      ? 'bg-background-surface font-semibold text-foreground shadow-sm'
                      : 'text-foreground-muted hover:text-foreground'
                  }`}
                  aria-pressed={showcaseMode === 'panels'}
                >
                  <Layers className="h-3 w-3 text-metallic" />
                  <span>Dossier</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowcaseMode('3d')}
                  className={`cursor-target flex items-center gap-1 rounded px-2.5 py-1 text-[11px] transition-colors ${
                    showcaseMode === '3d'
                      ? 'bg-background-surface font-semibold text-foreground shadow-sm'
                      : 'text-foreground-muted hover:text-foreground'
                  }`}
                  aria-pressed={showcaseMode === '3d'}
                >
                  <Sparkles className="h-3 w-3 text-metallic" />
                  <span>3D Reel</span>
                </button>
              </div>

              <span className="hidden font-mono text-[11px] text-crimson sm:inline-block">
                PHASE_05_SHOWCASE
              </span>
            </div>
          </div>

          {/* Mode 2: 3D OGL Flex Carousel Reel */}
          {showcaseMode === '3d' && (
            <div className="mb-6">
              <FlexCarouselStage
                projects={showcaseProjects}
                activeProjectId={activeProjectId}
                onSelectProject={(id) => setActiveProjectId(id)}
              />
            </div>
          )}

          {/* Mode 1 & Primary Showcase: Horizontal (Desktop) / Vertical (Mobile) Expanding Panels */}
          <div
            className="flex min-h-[580px] w-full flex-col gap-3 lg:flex-row"
            role="region"
            aria-label="Interactive Expanding Project Panels"
          >
            {showcaseProjects.map((project, idx) => {
              const isActive = project.id === activeProjectId;
              const projectIndex = `0${idx + 1}`;

              return (
                <div
                  key={project.id}
                  onClick={() => setActiveProjectId(project.id)}
                  onMouseEnter={() => {
                    // Smooth hover selection on desktop horizontal flex layout only
                    if (
                      !prefersReducedMotion &&
                      window.innerWidth >= 1024 &&
                      window.matchMedia('(pointer: fine)').matches
                    ) {
                      setActiveProjectId(project.id);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveProjectId(project.id);
                    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                      e.preventDefault();
                      const next = (idx + 1) % showcaseProjects.length;
                      setActiveProjectId(showcaseProjects[next].id);
                      const panelElements = document.querySelectorAll<HTMLElement>(
                        'div[aria-label="Interactive Expanding Project Panels"] > div[role="button"]'
                      );
                      panelElements[next]?.focus();
                    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                      e.preventDefault();
                      const prev = (idx - 1 + showcaseProjects.length) % showcaseProjects.length;
                      setActiveProjectId(showcaseProjects[prev].id);
                      const panelElements = document.querySelectorAll<HTMLElement>(
                        'div[aria-label="Interactive Expanding Project Panels"] > div[role="button"]'
                      );
                      panelElements[prev]?.focus();
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  data-testid={`flex-panel-${project.id}`}
                  aria-expanded={isActive}
                  aria-label={`${project.name} - ${project.domain}`}
                  className={`cursor-target group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-border bg-background-surface focus-visible:outline-2 focus-visible:outline-metallic ${
                    prefersReducedMotion
                      ? 'transition-none'
                      : 'transition-all duration-500 ease-industrial'
                  } ${
                    isActive
                      ? 'border-metallic/80 bg-background-surface p-6 ring-1 ring-metallic/20 lg:flex-[4]'
                      : 'p-4 hover:border-border/90 hover:bg-background-secondary lg:flex-[0.7] lg:p-4'
                  }`}
                >
                  {/* Active Expanded Project Panel Dossier */}
                  {isActive ? (
                    <div className="flex h-full flex-col justify-between space-y-6">
                      <div className="space-y-5">
                        {/* Domain, Index & Status Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-3 font-mono text-xs">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-crimson">{projectIndex} //</span>
                            <span className="uppercase tracking-wider text-metallic">
                              {project.domain}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            {renderStatusBadge(project.status)}
                            <span className="rounded border border-border bg-background px-2 py-0.5 text-[10px] uppercase text-foreground-muted">
                              VERIFIED_{project.verificationStatus.toUpperCase()}
                            </span>
                          </div>
                        </div>

                        {/* Title & Tagline */}
                        <div>
                          <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                            {project.name}
                          </h3>
                          <p className="mt-1 font-mono text-xs text-metallic sm:text-sm">
                            {project.tagline}
                          </p>
                        </div>

                        {/* Cover Schematic Graphic with Technical Overlay */}
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-background">
                          <img
                            src={project.coverImage}
                            alt={`${project.name} system schematic`}
                            className="h-full w-full object-cover opacity-95 transition-opacity group-hover:opacity-100"
                            loading="lazy"
                            width={600}
                            height={360}
                          />
                          <div className="pointer-events-none absolute bottom-2 left-2 flex items-center gap-1.5 rounded border border-border/80 bg-background/90 px-2.5 py-1 font-mono text-[10px] text-foreground-secondary backdrop-blur-md">
                            <Cpu className="h-3 w-3 text-metallic" />
                            <span>
                              {project.status === 'planned'
                                ? 'ROADMAP_SPECIFICATION // PLANNED_STAGE'
                                : project.id === 'vesper'
                                  ? 'STAGED_ARCHITECTURE // UNDER_VALIDATION'
                                  : 'SYSTEM_SCHEMATIC_V2 // HARDWARE_VERIFIED'}
                            </span>
                          </div>
                        </div>

                        {/* Concise Problem Statement & Core Solution */}
                        <div className="grid grid-cols-1 gap-4 rounded-lg border border-border/80 bg-background/50 p-4 font-mono text-xs sm:grid-cols-2">
                          <div className="space-y-1.5">
                            <span className="flex items-center gap-1 font-semibold uppercase text-crimson">
                              <span>01 // Problem Friction</span>
                            </span>
                            <p className="font-body text-xs leading-relaxed text-foreground-secondary">
                              {project.problemStatement || project.shortDescription}
                            </p>
                          </div>
                          <div className="space-y-1.5 border-t border-border/60 pt-3 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                            <span className="flex items-center gap-1 font-semibold uppercase text-metallic">
                              <span>02 // Engineered Solution</span>
                            </span>
                            <p className="font-body text-xs leading-relaxed text-foreground-secondary">
                              {project.coreSolution || project.detailedDescription}
                            </p>
                          </div>
                        </div>

                        {/* Verified Engineering Achievements / Benchmarks */}
                        {((project.verifiedAchievements &&
                          project.verifiedAchievements.length > 0) ||
                          (project.technicalHighlights &&
                            project.technicalHighlights.length > 0)) && (
                          <div className="space-y-2">
                            <h4 className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-metallic">
                              <ShieldCheck className="h-3.5 w-3.5 text-metallic" />
                              <span>Verified Engineering Highlights</span>
                            </h4>
                            <ul className="grid grid-cols-1 gap-2 font-mono text-xs sm:grid-cols-2">
                              {(
                                project.verifiedAchievements ||
                                project.technicalHighlights.slice(0, 3)
                              ).map((highlight, hIdx) => (
                                <li
                                  key={hIdx}
                                  className="flex items-start gap-2 rounded border border-border/60 bg-background px-3 py-2 text-foreground-secondary"
                                >
                                  <span className="font-bold text-crimson">•</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Safety Notice if applicable */}
                        {project.safetyNotice && (
                          <div className="flex items-start gap-2 rounded border border-border/80 bg-background p-3 font-mono text-[11px] text-foreground-muted">
                            <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-crimson" />
                            <span>{project.safetyNotice}</span>
                          </div>
                        )}

                        {/* Technology Stack Tags */}
                        <div className="space-y-1.5">
                          <span className="block font-mono text-[11px] uppercase text-foreground-muted">
                            Technology Stack:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded border border-border/70 bg-background px-2.5 py-1 font-mono text-[10px] text-foreground-secondary"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action Links Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/80 pt-4 font-mono text-xs">
                        <div className="flex items-center gap-4">
                          {project.repositoryUrl && (
                            <a
                              href={project.repositoryUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="cursor-target flex items-center gap-1.5 rounded border border-border bg-background px-3 py-1.5 text-foreground transition-colors hover:border-metallic hover:text-metallic"
                              aria-label={`${project.name} GitHub Repository`}
                            >
                              <Github className="h-4 w-4" />
                              <span>View Repository</span>
                            </a>
                          )}
                          {project.liveDemoUrl && (
                            <a
                              href={project.liveDemoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="cursor-target flex items-center gap-1.5 rounded border border-metallic/60 bg-background-surface px-3 py-1.5 text-metallic transition-colors hover:border-metallic hover:text-foreground"
                              aria-label={`${project.name} Live Demonstration`}
                            >
                              <ExternalLink className="h-4 w-4" />
                              <span>Live Demonstration</span>
                            </a>
                          )}
                        </div>

                        <span className="text-[10px] uppercase text-foreground-muted">
                          CLEARANCE: LEVEL_01 // VERIFIED
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Collapsed Neighbor Panel View */
                    <div className="flex h-full flex-col items-start justify-between">
                      {/* Top Index & Status */}
                      <div className="flex w-full items-center justify-between border-b border-border/50 pb-2 font-mono text-[10px] text-foreground-muted">
                        <span className="font-bold text-crimson">{projectIndex}</span>
                        <span className="uppercase">{project.status}</span>
                      </div>

                      {/* Rotated Vertical Typography on Desktop */}
                      <div className="my-auto w-full py-4 lg:py-0">
                        <h4 className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-metallic lg:rotate-180 lg:[writing-mode:vertical-rl]">
                          {project.name}
                        </h4>
                        <p className="mt-1 font-mono text-[11px] text-foreground-muted lg:hidden">
                          {project.domain}
                        </p>
                      </div>

                      {/* Bottom Expand Prompt */}
                      <div className="flex w-full items-center justify-between border-t border-border/50 pt-2 font-mono text-[10px] text-foreground-muted">
                        <span className="lg:hidden">
                          {project.technologies.slice(0, 2).join(' · ')}
                        </span>
                        <span className="flex items-center gap-1 group-hover:text-foreground">
                          Expand <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Complete Project Catalogue Grid (Accessible Secondary Navigation) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-3 font-mono text-xs">
            <span className="text-foreground">ALL_PROJECT_ARCHIVES // EXPANDED_CATALOGUE</span>
            <span className="text-foreground-muted">
              TOTAL: {filteredProjects.length} INITIATIVES
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project: Project) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between rounded-xl border border-border bg-background-surface p-6 transition-all hover:border-metallic/80"
              >
                <div className="space-y-4">
                  {/* Domain & Status Tag */}
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="uppercase tracking-wider text-metallic">{project.domain}</span>
                    {renderStatusBadge(project.status)}
                  </div>

                  {/* Project Title & Tagline */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-metallic">
                      {project.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-foreground-secondary">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-body text-xs leading-relaxed text-foreground-muted">
                    {project.shortDescription}
                  </p>

                  {/* Safety / Verification Notice if applicable */}
                  {project.safetyNotice && (
                    <div className="flex items-start gap-2 rounded border border-border/80 bg-background p-2.5 font-mono text-[11px] text-foreground-muted">
                      <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-crimson" />
                      <span>{project.safetyNotice}</span>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-border/60 bg-background px-2 py-0.5 font-mono text-[10px] text-foreground-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="mt-6 flex items-center justify-between border-t border-border pt-6 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    {project.repositoryUrl && (
                      <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-target flex items-center gap-1.5 text-foreground-secondary transition-colors hover:text-foreground"
                        aria-label={`${project.name} GitHub Repository`}
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>Repo</span>
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-target flex items-center gap-1.5 text-metallic transition-colors hover:text-foreground"
                        aria-label={`${project.name} Live Demo`}
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>

                  <span className="text-[10px] text-foreground-muted">
                    VERIFIED: {project.verificationStatus.toUpperCase()}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
