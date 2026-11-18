import React, { Suspense, lazy, useState } from 'react';
import { isWebGLAvailable } from '../../utils/webgl';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Project } from '../../types';
import { Sparkles, RefreshCw, Eye, Layers } from 'lucide-react';
import { type FlexCarouselItem } from '../reactbits/FlexCarousel';

const LazyFlexCarousel = lazy(() => import('../reactbits/FlexCarousel'));

const CURATED_REEL_ITEMS: FlexCarouselItem[] = [
  { src: '/images/one.jpg', alt: 'A chrome sculpture', title: 'Iridescence' },
  { src: '/images/two.jpg', alt: 'A figure on a white set', title: 'White Room' },
  {
    src: '/images/three.jpg',
    alt: 'A clay bust in profile',
    title: 'Clay Study',
    subtitle: 'Studio 04'
  }
];

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
  const [dataSource, setDataSource] = useState<'gallery' | 'projects'>('gallery');

  const activeIndex = Math.max(
    0,
    projects.findIndex((p) => p.id === activeProjectId)
  );

  const projectItems: FlexCarouselItem[] = projects.map((p) => ({
    src: p.coverImage,
    alt: p.name,
    title: p.name,
    subtitle: p.domain
  }));

  const activeItems = dataSource === 'gallery' ? CURATED_REEL_ITEMS : projectItems;

  if (!hasWebGL || prefersReducedMotion) {
    // Accessible Static Fallback Reel
    return (
      <div
        className={`flex w-full flex-col items-center justify-center rounded-xl border border-border bg-background p-6 font-mono text-xs text-foreground-muted ${className}`}
        aria-label="Flex Carousel Static Overview"
      >
        <div className="flex items-center gap-2">
          <span className="text-metallic">MODE: ACCESSIBLE_STATIC_REEL</span>
          <span className="text-border">//</span>
          <span className="text-foreground-secondary">
            {dataSource === 'gallery' ? 'CURATED_GALLERY' : 'INITIATIVES'}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {dataSource === 'gallery'
            ? CURATED_REEL_ITEMS.map((item, idx) => (
                <div
                  key={item.src}
                  className="rounded border border-border bg-background-surface px-3 py-1 text-[11px] text-foreground"
                >
                  0{idx + 1} // {item.title} {item.subtitle ? `(${item.subtitle})` : ''}
                </div>
              ))
            : projects.map((project, idx) => (
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
      style={{ width: '100%', height: '560px', position: 'relative' }}
      className={`relative w-full overflow-hidden rounded-xl border border-border bg-background ${className}`}
      aria-label="Interactive 3D OGL Flex Carousel Reel"
    >
      {/* Source Selector Toolbar */}
      <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full border border-border/80 bg-background/80 px-2 py-1 font-mono text-[10px] backdrop-blur-md">
        <button
          type="button"
          onClick={() => setDataSource('gallery')}
          className={`cursor-target flex items-center gap-1 rounded-full px-2.5 py-0.5 transition-colors ${
            dataSource === 'gallery'
              ? 'border border-metallic/60 bg-background-surface font-semibold text-foreground'
              : 'text-foreground-muted hover:text-foreground'
          }`}
          aria-pressed={dataSource === 'gallery'}
        >
          <Eye className="h-3 w-3 text-metallic" />
          <span>Curated Reel (3)</span>
        </button>
        <button
          type="button"
          onClick={() => setDataSource('projects')}
          className={`cursor-target flex items-center gap-1 rounded-full px-2.5 py-0.5 transition-colors ${
            dataSource === 'projects'
              ? 'border border-metallic/60 bg-background-surface font-semibold text-foreground'
              : 'text-foreground-muted hover:text-foreground'
          }`}
          aria-pressed={dataSource === 'projects'}
        >
          <Layers className="h-3 w-3 text-metallic" />
          <span>Initiatives (8)</span>
        </button>
      </div>

      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center font-mono text-xs text-foreground-muted">
            <RefreshCw className="mr-2 h-4 w-4 animate-spin text-metallic" />
            <span>INITIALIZING LIQUID OGL REEL...</span>
          </div>
        }
      >
        <LazyFlexCarousel
          items={activeItems}
          preset="liquid"
          intro="rise"
          cardHeight={0.5}
          gap={12}
          squeeze={0.2}
          focusOnClick
          captions
          fit="natural"
          radius={0}
          lensWidth={0.74}
          lensHeight={1.18}
          tilt={62}
          roundness={1}
          bend={0.34}
          reach={0.38}
          curl="twist"
          dispersion={0.45}
          liquid={0}
          followCursor={false}
          autoplay={false}
          interval={4}
          captureWheel
          onSelect={(index) => {
            if (dataSource === 'projects' && projects[index]) {
              onSelectProject(projects[index].id);
            }
          }}
          onChange={(index) => {
            if (dataSource === 'projects' && projects[index]) {
              onSelectProject(projects[index].id);
            }
          }}
          className="h-full w-full"
        />

        {/* Interaction Guidance Pill */}
        <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-border/80 bg-background/90 px-3 py-1 font-mono text-[10px] text-foreground-secondary shadow-sm backdrop-blur-md">
          <Sparkles className="h-3 w-3 text-metallic" />
          <span>
            {dataSource === 'gallery'
              ? 'DRAG / SCROLL LIQUID REEL // CLICK TO EXPAND'
              : `DRAG / SCROLL REEL // ACTIVE: 0${activeIndex + 1} ${projects[activeIndex]?.name}`}
          </span>
        </div>
      </Suspense>
    </div>
  );
};

export default FlexCarouselStage;
