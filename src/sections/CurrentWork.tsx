import React from 'react';
import { Hammer, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projects';

export const CurrentWork: React.FC = () => {
  const activeProjects = projectsData.filter((p) =>
    ['agaram', 'vortex', 'resurrection'].includes(p.id)
  );

  return (
    <section
      id="current-work"
      aria-label="Currently Building"
      className="bg-industrial-grid border-b border-border bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-metallic">
            <Hammer className="h-3.5 w-3.5" />
            <span>07 // ACTIVE LAB WORK &amp; SYSTEM ROADMAPS</span>
          </div>
          <h2 className="font-display text-display-lg font-bold uppercase tracking-tight text-foreground">
            Currently Building
          </h2>
          <p className="font-mono text-xs text-foreground-muted">
            IN-PROGRESS REPOSITORIES // PLANNED ARCHITECTURES // RESEARCH PIPELINES
          </p>
        </div>

        {/* Current Initiatives Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {activeProjects.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between space-y-6 rounded-xl border border-border bg-background-surface p-6 transition-all hover:border-metallic/80"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border/70 pb-3 font-mono text-xs">
                  <span className="flex items-center gap-1.5 uppercase text-metallic">
                    <Clock className="h-3.5 w-3.5 text-crimson" />
                    <span>STATUS: {item.status.toUpperCase()}</span>
                  </span>
                  <span className="text-[10px] text-foreground-muted">
                    {item.verificationStatus.toUpperCase()}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{item.name}</h3>
                  <p className="mt-1 font-mono text-xs text-metallic">{item.tagline}</p>
                </div>

                <p className="font-body text-xs leading-relaxed text-foreground-secondary">
                  {item.shortDescription}
                </p>

                {item.safetyNotice && (
                  <div className="rounded border border-border/80 bg-background p-3 font-mono text-[11px] text-foreground-muted">
                    {item.safetyNotice}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between border-t border-border pt-4 font-mono text-xs">
                <span className="text-[11px] text-foreground-muted">{item.domain}</span>
                {item.repositoryUrl ? (
                  <a
                    href={item.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-foreground transition-colors hover:text-metallic"
                  >
                    <span>View Repository</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="flex items-center gap-1 text-foreground-muted">
                    <Sparkles className="h-3 w-3 text-metallic" />
                    <span>In Architecture</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
