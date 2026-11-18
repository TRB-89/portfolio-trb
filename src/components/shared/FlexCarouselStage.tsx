import React, { Suspense, lazy } from 'react';
import { isWebGLAvailable } from '../../utils/webgl';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Project } from '../../types';
import { Sparkles, RefreshCw } from 'lucide-react';
import type { FlexCarouselItem } from '../reactbits/FlexCarousel';

const LazyFlexCarousel = lazy(() => import('../reactbits/FlexCarousel'));

interface FlexCarouselStageProps {
  projects: Project[];
  activeProjectId: string;
  onSelectProject: (projectId: string) => void;
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

  const activeIndex = Math.max(
    0,
    projects.findIndex((p) => p.id === activeProjectId)
  );

  const carouselItems: FlexCarouselItem[] = projects.map((p) => ({
    src: p.coverImage,
    alt: p.name,
    title: p.name,
    subtitle: p.domain
  }));

  if (!hasWebGL || prefersReducedMotion) {
    // Accessible Static Fallback Reel
    return (
      <div
        className={`flex w-full flex-col items-center justify-center rounded-xl border border-border bg-background p-6 font-mono text-xs text-foreground-muted ${className}`}
        aria-label="Flex Carousel Static Overview"
      >
        <span className="text-metallic">MODE: ACCESSIBLE_STATIC_REEL</span>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {projects.map((project, idx) => (
            <button
              key={project.id}
              type="button"
              onClick={() => onSelectProject(project.id)}
              className={`cursor-target rounded border px-3 py-1 text-[11px] transition-colors ${
                project.id === activeProjectId
                  ? 'border-metallic bg-background-surface font-semibold text-foreground'
                  : 'border-border bg-background-secondary text-foreground-muted hover:text-foreground'
              }`}
            >
              0{idx + 1} // {project.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative h-[360px] w-full overflow-hidden rounded-xl border border-border bg-background sm:h-[420px] ${className}`}
      aria-label="Interactive 3D OGL Flex Carousel Reel"
    >
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center font-mono text-xs text-foreground-muted">
            <RefreshCw className="mr-2 h-4 w-4 animate-spin text-metallic" />
            <span>INITIALIZING OGL SHADER REEL...</span>
          </div>
        }
      >
        <LazyFlexCarousel
          items={carouselItems}
          preset="ribbon"
          cardHeight={0.68}
          gap={24}
          radius={12}
          fit="landscape"
          focusOnClick={true}
          captions={true}
          captureWheel={false}
          onSelect={(index) => {
            if (projects[index]) {
              onSelectProject(projects[index].id);
            }
          }}
          onChange={(index) => {
            if (projects[index]) {
              onSelectProject(projects[index].id);
            }
          }}
          className="h-full w-full"
        />

        {/* Interaction Guidance Pill */}
        <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-border/80 bg-background/90 px-3 py-1 font-mono text-[10px] text-foreground-secondary shadow-sm backdrop-blur-md">
          <Sparkles className="h-3 w-3 text-metallic" />
          <span>
            DRAG / CLICK REEL // ACTIVE: 0{activeIndex + 1} {projects[activeIndex]?.name}
          </span>
        </div>
      </Suspense>
    </div>
  );
};

export default FlexCarouselStage;
