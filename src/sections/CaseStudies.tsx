import React from 'react';
import { BookOpen, Cpu, Globe2, ShieldAlert } from 'lucide-react';
import { projectsData } from '../data/projects';

export const CaseStudies: React.FC = () => {
  const caseStudies = projectsData.filter((p) => ['parallax', 'vortex', 'omen'].includes(p.id));

  return (
    <section
      id="case-studies"
      aria-label="Engineering Case Studies"
      className="border-b border-border bg-background-secondary px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-metallic">
            <BookOpen className="h-3.5 w-3.5" />
            <span>04 // IN-DEPTH TECHNICAL DISSECTIONS</span>
          </div>
          <h2 className="font-display text-display-lg font-bold uppercase tracking-tight text-foreground">
            Engineering Case Studies
          </h2>
          <p className="font-mono text-xs text-foreground-muted">
            ARCHITECTURE BREAKDOWN // KERNEL OPTIMIZATIONS // SCROLL STACK STAGING
          </p>
        </div>

        {/* Case Studies Container (Target for ScrollStack integration in Phase 6) */}
        <div className="space-y-12">
          {caseStudies.map((study, idx) => (
            <article
              key={study.id}
              className="rounded-2xl border border-border bg-background-surface p-6 shadow-surface sm:p-8 lg:p-10"
            >
              <div className="flex flex-col justify-between gap-4 border-b border-border pb-6 lg:flex-row lg:items-center">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="font-bold text-crimson">CASE_0{idx + 1}</span>
                    <span className="text-border">|</span>
                    <span className="uppercase text-metallic">{study.domain}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {study.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {study.id === 'vortex' && <Cpu className="h-5 w-5 text-metallic" />}
                  {study.id === 'parallax' && <Globe2 className="h-5 w-5 text-metallic" />}
                  {study.id === 'omen' && <ShieldAlert className="h-5 w-5 text-metallic" />}
                  <span className="font-mono text-xs uppercase text-foreground-muted">
                    STATUS: {study.status}
                  </span>
                </div>
              </div>

              {/* Technical Breakdown Body */}
              <div className="grid grid-cols-1 gap-8 pt-8 lg:grid-cols-12">
                <div className="space-y-4 font-body text-sm leading-relaxed text-foreground-secondary lg:col-span-7">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                    System Problem &amp; Architecture
                  </h4>
                  <p>{study.detailedDescription}</p>

                  {study.benchmarkNotes && (
                    <div className="mt-4 space-y-1 rounded border border-border bg-background p-4 font-mono text-xs text-foreground-muted">
                      <span className="block font-semibold text-metallic">[BENCHMARK_REPORT]</span>
                      <p>{study.benchmarkNotes}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-4 lg:col-span-5">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                    Engineering Implementations
                  </h4>
                  <ul className="space-y-2.5 font-mono text-xs">
                    {study.technicalHighlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2.5 rounded border border-border/70 bg-background p-3 text-foreground-secondary"
                      >
                        <span className="font-bold text-crimson">›</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-border bg-background-secondary px-2.5 py-1 font-mono text-[10px] text-foreground-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
