import React from 'react';
import { Award, CheckCircle2, TrendingUp, ExternalLink, Sparkles } from 'lucide-react';
import { achievementsData, technicalMetricsData } from '../data/achievements';
import { CountUp } from '../components/reactbits/CountUp';
import { AnimatedList, AnimatedListItem } from '../components/reactbits/AnimatedList';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const Achievements: React.FC = () => {
  const isReducedMotion = useReducedMotion();

  // Prepare items for AnimatedList
  const milestoneItems: AnimatedListItem[] = achievementsData.map((milestone) => ({
    id: milestone.id,
    title: milestone.title,
    description: milestone.description,
    meta: milestone.date
  }));

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
            <span>06 // ENGINEERING MILESTONES</span>
          </div>
          <h2 className="font-display text-display-lg font-bold uppercase tracking-tight text-foreground">
            PROGRESS IN NUMBERS.
          </h2>
          <p className="max-w-3xl font-body text-sm leading-relaxed text-foreground-muted sm:text-base">
            Engineering experiments, project milestones, collaborative initiatives and competitive
            problem-solving.
          </p>
        </div>

        {/* Technical Verified Metrics Grid: Official React Bits Count Up */}
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technicalMetricsData.map((metric) => (
            <div
              key={metric.id}
              className="group relative flex flex-col justify-between space-y-3 rounded-xl border border-border bg-background-surface p-6 transition-all hover:border-metallic/70"
            >
              <div className="flex items-center justify-between font-mono text-[11px] text-foreground-muted">
                <span className="uppercase tracking-wider">{metric.label}</span>
                <CheckCircle2 className="h-3.5 w-3.5 text-metallic" />
              </div>

              <div className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {isReducedMotion ? (
                  <span>
                    {metric.prefix ?? ''}
                    {metric.value}
                    {metric.suffix ?? ''}
                  </span>
                ) : (
                  <CountUp
                    to={metric.value}
                    from={0}
                    duration={1.6}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    className="font-display text-3xl font-bold text-foreground sm:text-4xl"
                  />
                )}
              </div>

              <p className="font-mono text-[11px] leading-relaxed text-foreground-muted">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Milestone List: Official React Bits Animated List */}
        <div className="space-y-4">
          <div className="mb-4 flex items-center justify-between border-b border-border/80 pb-3 font-mono text-xs text-metallic">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="font-semibold uppercase tracking-wider">
                Chronological Track Record
              </span>
            </div>
            <span className="text-[11px] text-foreground-muted">
              INTERACTIVE_LIST // KEYBOARD_NAV_READY
            </span>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-background-surface/40 p-2 sm:p-4">
            <AnimatedList
              items={milestoneItems}
              initialSelectedIndex={0}
              selectOnHover={true}
              enableArrowNavigation={true}
              animation={isReducedMotion ? 'none' : 'fade'}
              stagger={40}
              theme="dark"
              accentColor="#C0C0C0"
              width="100%"
              displayScrollbar={true}
              className="w-full"
              renderItem={(_item, index, isSelected) => {
                const milestone = achievementsData[index];
                if (!milestone) return null;

                return (
                  <div
                    key={milestone.id}
                    className={`flex w-full flex-col justify-between gap-3 p-3 transition-colors sm:flex-row sm:items-center ${
                      isSelected ? 'text-foreground' : 'text-foreground-secondary'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                        <span className="font-bold text-crimson">[{milestone.date}]</span>
                        <span className="text-metallic">{milestone.organization}</span>
                        <span className="py-0.2 rounded border border-border/80 bg-background px-1.5 text-[9px] uppercase tracking-wider text-foreground-muted">
                          {milestone.category}
                        </span>
                      </div>

                      <h4 className="font-display text-base font-bold text-foreground sm:text-lg">
                        {milestone.title}
                      </h4>

                      <p className="max-w-3xl font-body text-xs leading-relaxed text-foreground-muted">
                        {milestone.description}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-3 font-mono text-xs">
                      {milestone.link && (
                        <a
                          href={milestone.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 text-foreground-secondary transition-colors hover:text-metallic"
                          aria-label={`View evidence for ${milestone.title}`}
                        >
                          <span>Evidence</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                      <span className="inline-flex items-center gap-1 rounded border border-border bg-background px-2 py-0.5 text-[10px] uppercase text-metallic">
                        <Sparkles className="h-2.5 w-2.5 text-crimson" />
                        <span>{milestone.verificationStatus}</span>
                      </span>
                    </div>
                  </div>
                );
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
