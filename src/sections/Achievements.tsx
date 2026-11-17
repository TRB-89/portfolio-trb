import React from 'react';
import { Award, CheckCircle2, TrendingUp, ExternalLink } from 'lucide-react';
import { achievementsData, technicalMetricsData } from '../data/achievements';

export const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      aria-label="Achievements and Milestones"
      className="border-b border-border bg-background-secondary px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-metallic">
            <Award className="h-3.5 w-3.5" />
            <span>06 // VERIFIED BENCHMARKS &amp; RECOGNITION</span>
          </div>
          <h2 className="font-display text-display-lg font-bold uppercase tracking-tight text-foreground">
            Milestones &amp; Evidence
          </h2>
          <p className="font-mono text-xs text-foreground-muted">
            COUNT UP METRICS // ANIMATED LIST PREPARATION // EMPIRICAL VALIDATION
          </p>
        </div>

        {/* Technical Verified Metrics Grid (Staging for CountUp in Phase 7) */}
        <div className="mb-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {technicalMetricsData.map((metric) => (
            <div
              key={metric.id}
              className="space-y-2 rounded-xl border border-border bg-background-surface p-6"
            >
              <div className="flex items-center justify-between font-mono text-[11px] text-foreground-muted">
                <span className="uppercase">{metric.label}</span>
                <CheckCircle2 className="h-3.5 w-3.5 text-metallic" />
              </div>

              <div className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                {metric.prefix}
                {metric.value}
                {metric.suffix}
              </div>

              <p className="font-mono text-[11px] leading-tight text-foreground-muted">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Milestone List (Staging for AnimatedList in Phase 7) */}
        <div className="space-y-4">
          <h3 className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-metallic">
            <TrendingUp className="h-4 w-4" />
            <span>Chronological Track Record</span>
          </h3>

          <div className="space-y-3">
            {achievementsData.map((milestone) => (
              <div
                key={milestone.id}
                className="flex flex-col justify-between gap-4 rounded-xl border border-border bg-background-surface p-5 transition-all hover:border-metallic/80 sm:flex-row sm:items-center"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-mono text-xs text-metallic">
                    <span className="font-bold text-crimson">[{milestone.date}]</span>
                    <span>{milestone.organization}</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-foreground sm:text-lg">
                    {milestone.title}
                  </h4>
                  <p className="max-w-3xl font-body text-xs leading-relaxed text-foreground-muted">
                    {milestone.description}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-4 font-mono text-xs">
                  {milestone.link && (
                    <a
                      href={milestone.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-foreground-secondary transition-colors hover:text-foreground"
                    >
                      <span>Evidence</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  <span className="rounded border border-border bg-background px-2 py-0.5 text-[10px] uppercase text-metallic">
                    {milestone.verificationStatus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
