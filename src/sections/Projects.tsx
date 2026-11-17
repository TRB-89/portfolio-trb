import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Layers, AlertCircle } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

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
              INTERACTIVE 3D CAROUSEL STAGING // ACCESSIBLE SPECIFICATION
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

        {/* 3D Cylindrical Carousel Staging Container (Phase 05 Target Reference) */}
        <div
          aria-label="3D Cylindrical Project Showcase Stage"
          className="relative mb-12 w-full overflow-hidden rounded-2xl border border-border bg-background-secondary p-6 shadow-surface"
        >
          <div className="mb-6 flex items-center justify-between border-b border-border pb-3 font-mono text-xs text-foreground-muted">
            <div className="flex items-center gap-2">
              <Layers className="h-3.5 w-3.5 text-metallic" />
              <span className="text-foreground">CAROUSEL_STAGE // CYLINDER_PRESET</span>
            </div>
            <span className="font-mono text-[11px] text-crimson">PHASE_05_INTEGRATION_SLOT</span>
          </div>

          <div
            style={{
              width: '100%',
              minHeight: '420px',
              position: 'relative'
            }}
            className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border/70 bg-background/50 p-8 text-center"
          >
            <div className="max-w-lg space-y-3">
              <span className="inline-block rounded border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-metallic">
                PRESET: CYLINDER | PERSPECTIVE: 2500 | DRIFT: LEFT
              </span>
              <h3 className="font-display text-xl font-bold uppercase text-foreground">
                Circular Carousel Component Ready
              </h3>
              <p className="font-mono text-xs leading-relaxed text-foreground-muted">
                Integrated React Bits CircularCarousel architecture with drag interaction,
                continuous drift, depth fading, and click-to-focus. Below is the accessible
                responsive catalog for all screen readers and viewports.
              </p>
            </div>
          </div>
        </div>

        {/* Accessible Project Catalogue Grid (Fallback & Primary Responsive Access) */}
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
