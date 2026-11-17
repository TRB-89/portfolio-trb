import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  LayoutGrid,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { Project } from '../types';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeProjectId, setActiveProjectId] = useState<string>(projectsData[0]?.id || 'parallax');
  const prefersReducedMotion = useReducedMotion();

  // Domains available for filtering
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

  const featuredProjects = projectsData.filter(
    (p) => p.isFeatured || ['parallax', 'vortex', 'omen', 'aura-wellness'].includes(p.id)
  );

  return (
    <section
      id="projects"
      aria-label="Selected Work"
      className="bg-industrial-grid border-b border-border bg-background px-4 py-20 sm:px-6 lg:px-8"
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
              INTERACTIVE FLEX CAROUSEL SHOWCASE // HORIZONTAL EXPANDING PANELS
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Project domain filters">
            {domains.map((domain) => (
              <button
                key={domain}
                type="button"
                onClick={() => setSelectedFilter(domain)}
                className={`rounded border px-3 py-1.5 font-mono text-xs transition-all ${
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

        {/* Interactive Flex Carousel Showcase Stage */}
        <div
          aria-label="Flex Carousel Interactive Project Showcase"
          className="relative mb-12 w-full overflow-hidden rounded-2xl border border-border bg-background-secondary p-4 shadow-surface sm:p-6"
        >
          <div className="mb-4 flex items-center justify-between border-b border-border pb-3 font-mono text-xs text-foreground-muted">
            <div className="flex items-center gap-2">
              <LayoutGrid className="h-3.5 w-3.5 text-metallic" />
              <span className="text-foreground">FLEX_CAROUSEL_STAGE // EXPANDING_PANELS</span>
            </div>
            <span className="font-mono text-[11px] text-crimson">PHASE_05_SHOWCASE</span>
          </div>

          {/* Horizontal Expanding Flex Carousel Panels */}
          <div
            className="flex min-h-[520px] w-full flex-col gap-3 lg:flex-row"
            role="region"
            aria-label="Interactive Expanding Project Panels"
          >
            {featuredProjects.map((project) => {
              const isActive = project.id === activeProjectId;

              return (
                <div
                  key={project.id}
                  onClick={() => setActiveProjectId(project.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveProjectId(project.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isActive}
                  aria-label={`${project.name} - ${project.domain}`}
                  className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-border bg-background-surface focus-visible:outline-2 focus-visible:outline-metallic ${
                    prefersReducedMotion
                      ? 'transition-none'
                      : 'transition-all duration-500 ease-industrial'
                  } ${
                    isActive
                      ? 'border-metallic/80 bg-background-surface p-6 ring-1 ring-metallic/20 lg:flex-[3.5]'
                      : 'p-4 hover:border-border/90 hover:bg-background-secondary lg:flex-[0.8] lg:p-4'
                  }`}
                >
                  {/* Active Panel View */}
                  {isActive ? (
                    <div className="animate-in fade-in flex h-full flex-col justify-between space-y-4 duration-300">
                      <div className="space-y-4">
                        {/* Domain & Status Header */}
                        <div className="flex items-center justify-between border-b border-border/80 pb-3 font-mono text-xs">
                          <span className="uppercase tracking-wider text-metallic">
                            {project.domain}
                          </span>
                          <span
                            className={`rounded border px-2 py-0.5 font-mono text-[10px] uppercase ${
                              project.status === 'completed'
                                ? 'border-emerald-800/60 bg-emerald-950/20 text-emerald-400'
                                : project.status === 'research' || project.status === 'experimental'
                                  ? 'border-crimson/50 bg-crimson/10 text-foreground'
                                  : 'border-border bg-background text-foreground-muted'
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <div>
                          <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                            {project.name}
                          </h3>
                          <p className="mt-1 font-mono text-xs text-metallic">{project.tagline}</p>
                        </div>

                        {/* Project Cover Graphic */}
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-background">
                          <img
                            src={project.coverImage}
                            alt={`${project.name} cover schematic`}
                            className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                            loading="lazy"
                          />
                        </div>

                        {/* Description */}
                        <p className="font-body text-xs leading-relaxed text-foreground-secondary sm:text-sm">
                          {project.detailedDescription}
                        </p>

                        {/* Safety Notice if present */}
                        {project.safetyNotice && (
                          <div className="flex items-start gap-2 rounded border border-border/80 bg-background p-3 font-mono text-[11px] text-foreground-muted">
                            <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-crimson" />
                            <span>{project.safetyNotice}</span>
                          </div>
                        )}

                        {/* Technology Stack Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
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

                      {/* Action Links Bar */}
                      <div className="flex items-center justify-between border-t border-border/80 pt-4 font-mono text-xs">
                        <div className="flex items-center gap-4">
                          {project.repositoryUrl && (
                            <a
                              href={project.repositoryUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1.5 text-foreground-secondary transition-colors hover:text-foreground"
                              aria-label={`${project.name} GitHub Repository`}
                            >
                              <Github className="h-4 w-4" />
                              <span>Repository</span>
                            </a>
                          )}
                          {project.liveDemoUrl && (
                            <a
                              href={project.liveDemoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1.5 text-metallic transition-colors hover:text-foreground"
                              aria-label={`${project.name} Live Demo`}
                            >
                              <ExternalLink className="h-4 w-4" />
                              <span>Live Deployment</span>
                            </a>
                          )}
                        </div>

                        <span className="text-[10px] uppercase text-foreground-muted">
                          STATUS: {project.verificationStatus}
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Collapsed Neighbor Panel View */
                    <div className="flex h-full flex-col items-start justify-between">
                      <div className="flex w-full items-center justify-between border-b border-border/50 pb-2 font-mono text-[10px] text-foreground-muted">
                        <span>PANEL</span>
                        <span className="uppercase">{project.status}</span>
                      </div>

                      <div className="my-auto w-full py-4 lg:py-0">
                        <h4 className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-metallic lg:rotate-180 lg:[writing-mode:vertical-rl]">
                          {project.name}
                        </h4>
                        <p className="mt-1 font-mono text-[11px] text-foreground-muted lg:hidden">
                          {project.domain}
                        </p>
                      </div>

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
                  <span
                    className={`rounded border px-2 py-0.5 text-[10px] uppercase ${
                      project.status === 'completed'
                        ? 'border-emerald-800/60 bg-emerald-950/20 text-emerald-400'
                        : project.status === 'research' || project.status === 'experimental'
                          ? 'border-crimson/50 bg-crimson/10 text-foreground'
                          : 'border-border bg-background text-foreground-muted'
                    }`}
                  >
                    {project.status}
                  </span>
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
                      className="flex items-center gap-1.5 text-foreground-secondary transition-colors hover:text-foreground"
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
                      className="flex items-center gap-1.5 text-metallic transition-colors hover:text-foreground"
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
    </section>
  );
};
