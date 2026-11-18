import React from 'react';
import { Compass, Clock, ArrowRight, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';
import { projectsData } from '../data/projects';

export const CurrentWork: React.FC = () => {
  // Automatically exclude initiatives not confirmed as ongoing, experimental or planned
  const roadmapProjects = projectsData.filter(
    (p) =>
      ['agaram', 'resurrection', 'vesper'].includes(p.id) &&
      ['planned', 'research', 'experimental', 'in-progress'].includes(p.status)
  );

  return (
    <section
      id="current-work"
      aria-label="Development Roadmap"
      className="bg-industrial-grid border-b border-border bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-metallic">
            <Compass className="h-3.5 w-3.5" />
            <span>07 // DEVELOPMENT ROADMAP</span>
          </div>
          <h2 className="font-display text-display-lg font-bold uppercase tracking-tight text-foreground">
            NEVER STATIC.
          </h2>
          <p className="max-w-3xl font-body text-sm leading-relaxed text-foreground-muted sm:text-base">
            Exploring new ideas, developing experimental systems and expanding the boundaries of my
            engineering experience.
          </p>
        </div>

        {/* Roadmap Initiatives Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {roadmapProjects.map((item) => {
            const isPlanned = item.status === 'planned';
            const isResearch = item.status === 'research';
            const isPendingVerification = item.verificationStatus === 'pending';

            return (
              <div
                key={item.id}
                data-roadmap-id={item.id}
                className="flex flex-col justify-between space-y-6 rounded-xl border border-border bg-background-surface p-6 transition-all hover:border-metallic/80"
              >
                <div className="space-y-4">
                  {/* Status Banner */}
                  <div className="flex items-center justify-between border-b border-border/70 pb-3 font-mono text-xs">
                    <span className="flex items-center gap-1.5 uppercase text-metallic">
                      <Clock className="h-3.5 w-3.5 text-crimson" />
                      <span>
                        STATUS:{' '}
                        {isPendingVerification ? 'PENDING DISCLOSURE' : item.status.toUpperCase()}
                      </span>
                    </span>
                    <span className="rounded border border-border/80 bg-background px-2 py-0.5 text-[10px] uppercase text-foreground-muted">
                      {item.verificationStatus.toUpperCase()}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
                      {item.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-metallic">{item.tagline}</p>
                  </div>

                  {/* Description */}
                  <p className="font-body text-xs leading-relaxed text-foreground-secondary">
                    {item.shortDescription}
                  </p>

                  {/* Specific Planned Directions / Technical Focus */}
                  {item.id === 'agaram' && (
                    <div className="space-y-2 rounded border border-border/80 bg-background/80 p-3 font-mono text-[11px]">
                      <span className="flex items-center gap-1.5 font-semibold text-foreground">
                        <BookOpen className="h-3 w-3 text-metallic" />
                        <span>PLANNED TECHNICAL DIRECTION:</span>
                      </span>
                      <ul className="space-y-1 text-foreground-muted">
                        <li>• Regional-language coding education</li>
                        <li>• AI-assisted learning &amp; feedback</li>
                        <li>• Multilingual programming explanations</li>
                        <li>• Interactive in-browser coding playground</li>
                      </ul>
                      <p className="text-crimson-light border-t border-border/50 pt-1.5 text-[10px]">
                        * Architecture roadmap stage. Features are not presented as deployed
                        software.
                      </p>
                    </div>
                  )}

                  {item.id === 'resurrection' && (
                    <div className="space-y-2 rounded border border-border/80 bg-background/80 p-3 font-mono text-[11px]">
                      <span className="flex items-center gap-1.5 font-semibold text-foreground">
                        <Sparkles className="h-3 w-3 text-metallic" />
                        <span>VERIFIED RESEARCH SCOPE:</span>
                      </span>
                      <ul className="space-y-1 text-foreground-muted">
                        <li>• Probabilistic outcome modeling</li>
                        <li>• Multi-variable decision optimization</li>
                        <li>• Stochastic simulation state transitions</li>
                      </ul>
                      <p className="border-t border-border/50 pt-1.5 text-[10px] text-foreground-muted">
                        * Exploratory research codebase. No unverified publication claims.
                      </p>
                    </div>
                  )}

                  {item.id === 'vesper' && (
                    <div className="space-y-2 rounded border border-border/80 bg-background/80 p-3 font-mono text-[11px]">
                      <span className="flex items-center gap-1.5 font-semibold text-foreground">
                        <ShieldAlert className="h-3 w-3 text-metallic" />
                        <span>DOCUMENTATION STATUS:</span>
                      </span>
                      <p className="text-[10px] leading-relaxed text-foreground-muted">
                        Technical documentation, domain classification, and benchmarks remain
                        pending internal verification before public disclosure.
                      </p>
                    </div>
                  )}

                  {item.safetyNotice && item.id !== 'vesper' && (
                    <div className="rounded border border-border/80 bg-background p-3 font-mono text-[11px] text-foreground-muted">
                      {item.safetyNotice}
                    </div>
                  )}
                </div>

                {/* Footer Link / Info */}
                <div className="flex items-center justify-between border-t border-border pt-4 font-mono text-xs">
                  <span className="text-[11px] text-foreground-muted">{item.domain}</span>
                  {item.repositoryUrl ? (
                    <a
                      href={item.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-foreground transition-colors hover:text-metallic"
                    >
                      <span>Repository</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px] text-foreground-muted">
                      {isPlanned
                        ? 'Roadmap Stage'
                        : isResearch
                          ? 'Internal Research'
                          : 'Staged Validation'}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CurrentWork;
