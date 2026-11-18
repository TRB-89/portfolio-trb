import React, { Suspense, lazy, useRef, useState, useEffect, useCallback } from 'react';
import { isWebGLAvailable } from '../../utils/webgl';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Project } from '../../types';
import { Sparkles, RefreshCw, Github, ExternalLink, X, Compass } from 'lucide-react';
import type { FlexCarouselItem, FlexCarouselRef } from '../reactbits/FlexCarousel';

const LazyFlexCarousel = lazy(() => import('../reactbits/FlexCarousel'));

interface FlexCarouselStageProps {
  projects: Project[];
  activeProjectId?: string;
  onSelectProject?: (projectId: string) => void;
  className?: string;
}

export const FlexCarouselStage: React.FC<FlexCarouselStageProps> = ({
  projects,
  activeProjectId,
  onSelectProject,
  className = ''
}) => {
  const prefersReducedMotion = useReducedMotion();
  const hasWebGL = isWebGLAvailable();
  const carouselRef = useRef<FlexCarouselRef>(null);

  const [activeIndex, setActiveIndex] = useState(() => {
    if (!activeProjectId) return 0;
    const found = projects.findIndex((p) => p.id === activeProjectId);
    return found >= 0 ? found : 0;
  });

  const [isFocused, setIsFocused] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);

  // Sync active project if prop changes
  useEffect(() => {
    if (activeProjectId) {
      const idx = projects.findIndex((p) => p.id === activeProjectId);
      if (idx >= 0 && idx !== activeIndex && !isFocused) {
        setActiveIndex(idx);
      }
    }
  }, [activeProjectId, projects, activeIndex, isFocused]);

  const activeProject = projects[activeIndex] || projects[0];
  const focusedProject = projects[focusedIndex] || activeProject;

  const handleCloseFocus = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.closeFocus();
    }
    setIsFocused(false);
  }, []);

  // Listen for Escape key on window to dismiss focus
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFocused) {
        e.preventDefault();
        handleCloseFocus();
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isFocused, handleCloseFocus]);

  const carouselItems: FlexCarouselItem[] = projects.map((p) => ({
    src: p.coverImage,
    alt: `${p.name} system schematic`,
    title: p.name,
    subtitle: p.domain
  }));

  // Status badge styling helper
  const renderStatusBadge = (status: Project['status'], size: 'sm' | 'xs' = 'xs') => {
    const textClass = size === 'sm' ? 'text-xs' : 'text-[10px]';
    switch (status) {
      case 'completed':
        return (
          <span
            className={`rounded border border-border bg-background px-2 py-0.5 font-mono uppercase text-foreground ${textClass}`}
          >
            PRODUCTION
          </span>
        );
      case 'research':
        return (
          <span
            className={`rounded border border-crimson/60 bg-crimson/10 px-2 py-0.5 font-mono uppercase text-foreground ${textClass}`}
          >
            RESEARCH
          </span>
        );
      case 'experimental':
        return (
          <span
            className={`rounded border border-metallic/60 bg-background px-2 py-0.5 font-mono uppercase text-metallic ${textClass}`}
          >
            EXPERIMENTAL
          </span>
        );
      case 'planned':
        return (
          <span
            className={`rounded border border-border bg-background-secondary px-2 py-0.5 font-mono uppercase text-foreground-muted ${textClass}`}
          >
            PLANNED
          </span>
        );
      case 'in-progress':
        return (
          <span
            className={`rounded border border-border bg-background px-2 py-0.5 font-mono uppercase text-foreground-secondary ${textClass}`}
          >
            IN_PROGRESS
          </span>
        );
      default:
        return (
          <span
            className={`rounded border border-border bg-background px-2 py-0.5 font-mono uppercase text-foreground-muted ${textClass}`}
          >
            {status}
          </span>
        );
    }
  };

  if (!hasWebGL || prefersReducedMotion) {
    // Accessible Static Horizontal Gallery
    return (
      <div
        className={`flex w-full flex-col gap-6 rounded-2xl border border-border bg-background-secondary p-6 font-mono text-xs text-foreground-muted ${className}`}
        aria-label="Flex Carousel Static Overview"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-metallic">MODE: ACCESSIBLE_STATIC_GALLERY</span>
            <span className="text-border">//</span>
            <span className="text-foreground-secondary">ALL {projects.length} INITIATIVES</span>
          </div>
          <span className="text-[11px] text-foreground-muted">REDUCED_MOTION / WEBGL_FALLBACK</span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-xl border border-border/80 bg-background p-4 transition-colors hover:border-metallic/60"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-crimson">0{idx + 1} //</span>
                  {renderStatusBadge(project.status, 'xs')}
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-foreground">
                    {project.name}
                  </h4>
                  <p className="mt-0.5 font-mono text-[11px] text-metallic">{project.domain}</p>
                </div>
                <p className="font-body text-xs leading-relaxed text-foreground-muted">
                  {project.shortDescription}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-[11px]">
                <div className="flex items-center gap-3">
                  {project.repositoryUrl && (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target flex items-center gap-1 text-foreground-secondary hover:text-foreground"
                      aria-label={`${project.name} GitHub Repository`}
                    >
                      <Github className="h-3 w-3" />
                      <span>Repo</span>
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target flex items-center gap-1 text-metallic hover:text-foreground"
                      aria-label={`${project.name} Live Demonstration`}
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
                <span className="text-[10px] text-foreground-muted">
                  {project.status === 'planned' ? 'ROADMAP' : 'VERIFIED'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      aria-label="Flex Carousel Interactive Project Showcase"
      className={`relative w-full space-y-6 ${className}`}
    >
      {/* Immersive 3D OGL Ribbon Stage */}
      <div
        className="relative h-[520px] w-full overflow-hidden rounded-2xl border border-border bg-background-secondary shadow-surface sm:h-[580px] lg:h-[620px]"
        aria-label="Interactive 3D OGL Flex Carousel Reel"
      >
        <Suspense
          fallback={
            <div className="flex h-full w-full items-center justify-center font-mono text-xs text-foreground-muted">
              <RefreshCw className="mr-2 h-4 w-4 animate-spin text-metallic" />
              <span>INITIALIZING OGL WAVE RIBBON...</span>
            </div>
          }
        >
          <LazyFlexCarousel
            ref={carouselRef}
            items={carouselItems}
            preset="liquid"
            intro="rise"
            cardHeight={0.52}
            gap={14}
            squeeze={0.16}
            focusOnClick={true}
            captions={false}
            fit="landscape"
            radius={8}
            lensWidth={0.76}
            lensHeight={1.16}
            tilt={60}
            roundness={1}
            bend={0.34}
            reach={0.38}
            curl="twist"
            dispersion={0.45}
            liquid={0}
            followCursor={false}
            autoplay={false}
            interval={4}
            captureWheel={true}
            onChange={(index) => {
              setActiveIndex(index);
              if (projects[index] && onSelectProject) {
                onSelectProject(projects[index].id);
              }
            }}
            onSelect={(index) => {
              if (projects[index] && onSelectProject) {
                onSelectProject(projects[index].id);
              }
            }}
            onFocusChange={(focused, index) => {
              setIsFocused(focused);
              setFocusedIndex(index);
              if (projects[index] && onSelectProject) {
                onSelectProject(projects[index].id);
              }
            }}
            className="h-full w-full"
          />
        </Suspense>

        {/* Ambient Top Index Pill */}
        <div className="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3 py-1 font-mono text-[10px] text-foreground-secondary backdrop-blur-md">
          <Compass className="h-3 w-3 text-metallic" />
          <span>
            RIBBON // 0{activeIndex + 1} OF {String(projects.length).padStart(2, '0')}
          </span>
        </div>

        {/* Floating Focus Badge / Dismiss Shortcut Indicator */}
        {isFocused && (
          <div className="absolute right-4 top-4 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={handleCloseFocus}
              className="cursor-target flex items-center gap-1.5 rounded-full border border-metallic/80 bg-background/90 px-3.5 py-1.5 font-mono text-xs text-foreground shadow-lg backdrop-blur-md transition-colors hover:border-metallic hover:bg-background-surface focus-visible:outline-2 focus-visible:outline-metallic"
              aria-label="Close project focus"
            >
              <X className="h-3.5 w-3.5 text-metallic" />
              <span>Back to Reel</span>
              <kbd className="py-0.2 hidden rounded border border-border bg-background-surface px-1.5 font-mono text-[9px] uppercase text-foreground-muted sm:inline-block">
                ESC
              </kbd>
            </button>
          </div>
        )}
      </div>

      {/* Minimal Project Information Beneath Carousel */}
      <div className="rounded-xl border border-border bg-background-secondary p-5 shadow-surface sm:p-6">
        {isFocused ? (
          /* Focused Presentation: Title, Concise Description, Valid Action Links, Intuitive Close */
          <div
            className="animate-in fade-in space-y-4 duration-300"
            role="region"
            aria-label="Focused project details"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-crimson">
                  0{focusedIndex + 1} //
                </span>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                  {focusedProject.name}
                </h3>
                <span className="hidden font-mono text-xs text-foreground-muted sm:inline-block">
                  //
                </span>
                <span className="hidden font-mono text-xs uppercase text-metallic sm:inline-block">
                  {focusedProject.domain}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {renderStatusBadge(focusedProject.status, 'sm')}
                <span className="font-mono text-xs tabular-nums text-foreground-muted">
                  0{focusedIndex + 1} / {String(projects.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            <p className="font-body text-sm leading-relaxed text-foreground-secondary sm:text-base">
              {focusedProject.shortDescription}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 font-mono text-xs">
              <div className="flex flex-wrap items-center gap-3">
                {focusedProject.repositoryUrl && (
                  <a
                    href={focusedProject.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-target flex items-center gap-2 rounded border border-border bg-background px-3.5 py-1.5 text-foreground transition-colors hover:border-metallic hover:text-metallic focus-visible:outline-2 focus-visible:outline-metallic"
                    aria-label={`${focusedProject.name} GitHub Repository`}
                  >
                    <Github className="h-4 w-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {focusedProject.liveDemoUrl && (
                  <a
                    href={focusedProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-target flex items-center gap-2 rounded border border-metallic/60 bg-background-surface px-3.5 py-1.5 text-metallic transition-colors hover:border-metallic hover:text-foreground focus-visible:outline-2 focus-visible:outline-metallic"
                    aria-label={`${focusedProject.name} Live Demonstration`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demonstration</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={handleCloseFocus}
                className="cursor-target flex items-center gap-1.5 text-foreground-muted transition-colors hover:text-foreground"
              >
                <span>Press ESC or click Back to Reel to return</span>
              </button>
            </div>
          </div>
        ) : (
          /* Default Ribbon Navigation: Active Name, Engineering Category, Index Counter, Interaction Instructions */
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="font-bold text-crimson">0{activeIndex + 1} //</span>
                <span className="uppercase tracking-wider text-metallic">
                  {activeProject.domain}
                </span>
                <span className="text-border">•</span>
                {renderStatusBadge(activeProject.status, 'xs')}
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                {activeProject.name}
              </h3>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6 md:justify-end">
              {/* Interaction instructions */}
              <div className="flex items-center gap-2 font-mono text-xs text-foreground-muted">
                <Sparkles className="h-3.5 w-3.5 text-metallic" />
                <span>DRAG TO EXPLORE // CLICK TO FOCUS</span>
              </div>

              {/* Total Index Counter */}
              <div className="flex items-center gap-2 rounded border border-border bg-background px-3 py-1 font-mono text-xs">
                <span className="font-semibold tabular-nums text-foreground">
                  0{activeIndex + 1}
                </span>
                <span className="text-foreground-muted">/</span>
                <span className="tabular-nums text-foreground-muted">
                  {String(projects.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlexCarouselStage;
