import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  ArrowUpRight,
  ShieldCheck,
  AlertTriangle,
  Layers,
  ArrowRight,
  Cpu,
  Globe2,
  ShieldAlert,
  Binary
} from 'lucide-react';
import ScrollStack, { ScrollStackItem } from '../components/reactbits/ScrollStack';
import { caseStudiesData } from '../data/caseStudies';
import { CaseStudy, ArchitectureStep } from '../types';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const CaseStudies: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(caseStudiesData[0].id);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || !window.matchMedia('(pointer: fine)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderStatusBadge = (status: CaseStudy['status'], isPending?: boolean) => {
    if (isPending) {
      return (
        <span className="inline-flex items-center gap-1 rounded border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-foreground-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground-muted" />
          DOCS_PENDING
        </span>
      );
    }
    switch (status) {
      case 'research':
        return (
          <span className="inline-flex items-center gap-1 rounded border border-crimson/50 bg-crimson/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-crimson">
            <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
            RESEARCH
          </span>
        );
      case 'experimental':
        return (
          <span className="inline-flex items-center gap-1 rounded border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-metallic">
            <span className="h-1.5 w-1.5 rounded-full bg-metallic" />
            EXPERIMENTAL
          </span>
        );
      case 'active':
        return (
          <span className="inline-flex items-center gap-1 rounded border border-crimson/40 bg-crimson/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-foreground">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-crimson" />
            ACTIVE
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center gap-1 rounded border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-foreground-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground-muted" />
            IN_PROGRESS
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-foreground-muted">
            {status}
          </span>
        );
    }
  };

  const renderArchitectureFlow = (pipeline: ArchitectureStep[], isPending?: boolean) => {
    if (isPending) {
      return (
        <div className="rounded-xl border border-dashed border-border bg-background p-6 font-mono text-xs text-foreground-muted">
          <div className="flex items-center gap-2 text-metallic">
            <AlertTriangle className="h-4 w-4 text-crimson" />
            <span className="font-semibold uppercase">
              [ARCHITECTURE_SPECIFICATION // PENDING_VALIDATION]
            </span>
          </div>
          <p className="mt-2 text-foreground-secondary">
            Formal state diagrams, concurrency models, and hardware interface specifications are
            withheld pending source repository documentation and benchmark audit.
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-3" role="region" aria-label="System Processing Pipeline">
        <div className="sr-only">
          Processing pipeline stages:{' '}
          {pipeline.map((p) => `${p.step}: ${p.label} (${p.status})`).join(' -> ')}
        </div>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {pipeline.map((stage, sIdx) => {
            const isImplemented = stage.status === 'implemented';
            const isExperimental = stage.status === 'experimental';

            return (
              <div
                key={stage.step}
                className={`relative flex flex-col justify-between rounded-lg border p-3 font-mono text-xs transition-colors ${
                  isImplemented
                    ? 'border-border/90 bg-background/90 text-foreground'
                    : isExperimental
                      ? 'border-crimson/40 bg-crimson/5 text-foreground-secondary'
                      : 'border-border/60 bg-background-surface/40 text-foreground-muted'
                }`}
              >
                <div className="flex items-center justify-between gap-1 border-b border-border/50 pb-1.5 text-[10px]">
                  <span className="font-bold text-crimson">{stage.step}</span>
                  <span
                    className={`py-0.2 rounded px-1.5 text-[9px] uppercase ${
                      isImplemented
                        ? 'bg-border/60 text-metallic'
                        : isExperimental
                          ? 'bg-crimson/20 text-crimson'
                          : 'bg-border/30 text-foreground-muted'
                    }`}
                  >
                    {stage.status}
                  </span>
                </div>
                <div className="my-2">
                  <p className="text-[11px] font-semibold leading-snug text-foreground">
                    {stage.label}
                  </p>
                  <p className="mt-1 line-clamp-3 text-[10px] leading-normal text-foreground-muted">
                    {stage.description}
                  </p>
                </div>
                {sIdx < pipeline.length - 1 && (
                  <div className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-border xl:block">
                    <ArrowRight className="h-3 w-3 text-border" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderCaseStudyCard = (study: CaseStudy) => {
    return (
      <article
        key={study.id}
        data-testid={`case-study-card-${study.projectId}`}
        className="flex flex-col justify-between space-y-8 rounded-2xl border border-border bg-background-surface p-6 shadow-2xl sm:p-8 lg:p-10"
      >
        {/* Header Bar */}
        <div className="space-y-4 border-b border-border/80 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-crimson">CASE_{study.number} //</span>
              <span className="uppercase tracking-wider text-metallic">{study.domain}</span>
            </div>
            <div className="flex items-center gap-2">
              {renderStatusBadge(study.status, study.isPendingDocumentation)}
              <span className="rounded border border-border bg-background px-2 py-0.5 text-[10px] uppercase text-foreground-muted">
                VERIFIED_{study.verificationStatus.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                  {study.title}
                </h3>
                {study.projectId === 'parallax' && <Globe2 className="h-6 w-6 text-metallic" />}
                {study.projectId === 'vortex' && <Cpu className="h-6 w-6 text-metallic" />}
                {study.projectId === 'omen' && <ShieldAlert className="h-6 w-6 text-metallic" />}
                {study.projectId === 'vesper' && (
                  <Binary className="h-6 w-6 text-foreground-muted" />
                )}
              </div>
              <p className="mt-1 font-mono text-xs text-foreground-secondary">{study.subtitle}</p>
            </div>

            {study.competitionAssociation && (
              <div className="inline-flex items-center gap-1.5 rounded border border-crimson/30 bg-crimson/10 px-3 py-1 font-mono text-[11px] text-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-crimson" />
                <span>{study.competitionAssociation}</span>
              </div>
            )}
          </div>

          <p className="font-body text-sm leading-relaxed text-foreground-secondary sm:text-base">
            {study.summary}
          </p>
        </div>

        {/* Problem vs Engineered Solution Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-3 rounded-xl border border-border/80 bg-background/70 p-5">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-crimson">
              <span>01 //</span>
              <span className="uppercase tracking-wider">Problem Friction</span>
            </div>
            <p className="font-body text-xs leading-relaxed text-foreground-secondary sm:text-sm">
              {study.problemStatement}
            </p>
          </div>

          <div className="space-y-3 rounded-xl border border-border/80 bg-background/70 p-5">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-metallic">
              <span>02 //</span>
              <span className="uppercase tracking-wider">Engineered Solution</span>
            </div>
            <p className="font-body text-xs leading-relaxed text-foreground-secondary sm:text-sm">
              {study.solution}
            </p>
          </div>
        </div>

        {/* System Architecture Pipeline */}
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-border/60 pb-2 font-mono text-xs">
            <span className="font-bold text-foreground">SYSTEM ARCHITECTURE PIPELINE</span>
            <span className="text-[10px] text-foreground-muted">
              {study.architectureDescription}
            </span>
          </div>
          {renderArchitectureFlow(study.architecturePipeline, study.isPendingDocumentation)}
        </div>

        {/* Implementation Decisions & Engineering Challenges Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Engineering Challenges */}
          <div className="space-y-3 lg:col-span-5">
            <h4 className="border-b border-border/60 pb-2 font-mono text-xs font-semibold uppercase tracking-wider text-metallic">
              Core Engineering Challenges
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              {study.engineeringChallenges.map((challenge, cIdx) => (
                <li
                  key={cIdx}
                  className="flex items-start gap-2 rounded border border-border/60 bg-background/50 p-2.5 text-foreground-secondary"
                >
                  <span className="font-bold text-crimson">›</span>
                  <span className="text-[11px] leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Architectural Decisions */}
          <div className="space-y-3 lg:col-span-7">
            <h4 className="border-b border-border/60 pb-2 font-mono text-xs font-semibold uppercase tracking-wider text-metallic">
              Architectural Tradeoffs &amp; Decisions
            </h4>
            <div className="space-y-2.5">
              {study.implementationDecisions.map((dec, dIdx) => (
                <div
                  key={dIdx}
                  className="space-y-1.5 rounded border border-border/70 bg-background/60 p-3 font-mono text-xs"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-foreground">{dec.decision}</span>
                    <span className="rounded bg-border/40 px-1.5 py-0.5 text-[9px] text-metallic">
                      DECISION
                    </span>
                  </div>
                  <div className="text-[11px] text-foreground-muted">
                    <span className="text-crimson">Tradeoff: </span>
                    {dec.tradeoff}
                  </div>
                  <div className="text-[11px] text-foreground-secondary">
                    <span className="text-metallic">Rationale: </span>
                    {dec.rationale}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Verified Results vs Limitations */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Verified Results */}
          <div className="space-y-3 rounded-xl border border-border/80 bg-background/50 p-5">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-metallic">
              <ShieldCheck className="h-4 w-4 text-metallic" />
              <span>VERIFIED RESULTS &amp; BENCHMARKS</span>
            </div>
            <ul className="space-y-2 font-mono text-xs">
              {study.verifiedResults.map((result, rIdx) => (
                <li key={rIdx} className="flex items-start gap-2 text-foreground-secondary">
                  <span className="text-metallic">✓</span>
                  <span className="text-[11px] leading-relaxed">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Documented Limitations */}
          <div className="space-y-3 rounded-xl border border-crimson/20 bg-crimson/5 p-5">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-crimson">
              <AlertTriangle className="h-4 w-4 text-crimson" />
              <span>DOCUMENTED LIMITATIONS &amp; BOUNDARIES</span>
            </div>
            <ul className="space-y-2 font-mono text-xs">
              {study.limitations.map((limit, lIdx) => (
                <li key={lIdx} className="flex items-start gap-2 text-foreground-secondary">
                  <span className="text-crimson">!</span>
                  <span className="text-[11px] leading-relaxed">{limit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer: Tech Stack & Actions */}
        <div className="flex flex-col justify-between gap-4 border-t border-border/80 pt-6 lg:flex-row lg:items-center">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="mr-1 font-mono text-[10px] uppercase text-foreground-muted">
              TECH_STACK:
            </span>
            {study.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] text-foreground-secondary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {study.repositoryUrl && (
              <a
                href={study.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 font-mono text-xs font-semibold text-foreground transition-colors hover:border-metallic hover:bg-background-secondary"
              >
                <span>View Repository</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-metallic" />
              </a>
            )}
            {study.liveDemoUrl && (
              <a
                href={study.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target inline-flex items-center gap-1.5 rounded-lg border border-metallic/60 bg-metallic/10 px-3 py-1.5 font-mono text-xs font-semibold text-foreground transition-colors hover:bg-metallic/20"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-metallic" />
              </a>
            )}
            <a
              href="#projects"
              className="cursor-target inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-3 py-1.5 font-mono text-xs text-foreground-muted transition-colors hover:text-foreground"
            >
              <Layers className="h-3.5 w-3.5" />
              <span>Selected Work</span>
            </a>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section
      id="case-studies"
      aria-label="Engineering Case Studies"
      className="relative border-b border-border bg-background-secondary px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-metallic">
            <BookOpen className="h-3.5 w-3.5 text-crimson" />
            <span>04 // ENGINEERING CASE STUDIES</span>
          </div>

          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <h2 className="font-display text-display-lg font-bold uppercase tracking-tight text-foreground">
                BEYOND THE CODE.
              </h2>
              <p className="mt-2 max-w-3xl font-body text-sm leading-relaxed text-foreground-secondary sm:text-base">
                A closer look at the architecture, engineering decisions, challenges and experiments
                behind selected systems.
              </p>
            </div>

            {/* Quick Index Selector Tabs */}
            <div
              className="flex items-center gap-1 rounded-lg border border-border bg-background p-1 font-mono text-xs"
              role="tablist"
              aria-label="Case Study Direct Selection"
            >
              {caseStudiesData.map((study) => (
                <button
                  key={study.id}
                  role="tab"
                  aria-selected={activeTab === study.id}
                  onClick={() => {
                    setActiveTab(study.id);
                    const el = document.getElementById(study.id);
                    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className={`cursor-target rounded px-2.5 py-1 text-[11px] transition-colors ${
                    activeTab === study.id
                      ? 'bg-background-surface font-semibold text-foreground shadow-sm'
                      : 'text-foreground-muted hover:text-foreground'
                  }`}
                >
                  {study.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Primary Case Studies Presentation */}
        {prefersReducedMotion || isMobile ? (
          /* Accessible Sequential Presentation for Mobile & Reduced Motion */
          <div className="space-y-10" data-testid="case-studies-sequential">
            {caseStudiesData.map((study) => (
              <div key={study.id} id={study.id}>
                {renderCaseStudyCard(study)}
              </div>
            ))}
          </div>
        ) : (
          /* Official React Bits ScrollStack Presentation for Fine-Pointer Desktop */
          <div data-testid="case-studies-scrollstack" className="w-full">
            <ScrollStack
              useWindowScroll={true}
              smoothScroll={false}
              itemDistance={80}
              itemStackDistance={20}
              stackPosition="12%"
              itemScale={0.03}
              baseScale={0.88}
              dimAmount={0.15}
              blurAmount={0}
              tiltAmount={0}
              rotationAmount={0}
              holdDistance={180}
              className="w-full"
            >
              {caseStudiesData.map((study) => (
                <ScrollStackItem
                  key={study.id}
                  itemClassName="!h-auto min-h-[580px] !bg-background-surface !text-foreground !border !border-border/90 !rounded-2xl !p-6 sm:!p-8 lg:!p-10 !shadow-2xl"
                >
                  <div id={study.id}>{renderCaseStudyCard(study)}</div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        )}
      </div>
    </section>
  );
};
