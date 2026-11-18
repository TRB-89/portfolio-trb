import React, { useMemo } from 'react';
import {
  Cpu,
  Terminal,
  Code2,
  Database,
  Layers,
  ShieldAlert,
  Globe2,
  Workflow,
  ArrowUpRight,
  GitBranch,
  Boxes,
  Server,
  Binary
} from 'lucide-react';
import { skillCategoriesData } from '../data/skills';
import { MagicBento, MagicBentoItem } from '../components/reactbits/MagicBento';
import { LogoLoop, LogoItem } from '../components/reactbits/LogoLoop';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useTouchDevice } from '../hooks/useTouchDevice';

// Tech Marquee items with monochrome styling
const TECH_LOGOS: LogoItem[] = [
  {
    node: (
      <span className="flex items-center gap-2 rounded border border-border/80 bg-background-surface/80 px-3 py-1.5 font-mono text-xs text-foreground-secondary transition-colors hover:border-metallic hover:text-foreground">
        <Binary className="h-3.5 w-3.5 text-metallic" />
        <span>C++20</span>
      </span>
    ),
    title: 'Modern C++20'
  },
  {
    node: (
      <span className="flex items-center gap-2 rounded border border-border/80 bg-background-surface/80 px-3 py-1.5 font-mono text-xs text-foreground-secondary transition-colors hover:border-metallic hover:text-foreground">
        <Cpu className="h-3.5 w-3.5 text-metallic" />
        <span>CUDA</span>
      </span>
    ),
    title: 'NVIDIA CUDA Parallel Computing'
  },
  {
    node: (
      <span className="flex items-center gap-2 rounded border border-border/80 bg-background-surface/80 px-3 py-1.5 font-mono text-xs text-foreground-secondary transition-colors hover:border-metallic hover:text-foreground">
        <Code2 className="h-3.5 w-3.5 text-metallic" />
        <span>Python</span>
      </span>
    ),
    title: 'Python Scientific Computing'
  },
  {
    node: (
      <span className="flex items-center gap-2 rounded border border-border/80 bg-background-surface/80 px-3 py-1.5 font-mono text-xs text-foreground-secondary transition-colors hover:border-metallic hover:text-foreground">
        <Workflow className="h-3.5 w-3.5 text-metallic" />
        <span>PyTorch</span>
      </span>
    ),
    title: 'PyTorch Deep Learning'
  },
  {
    node: (
      <span className="flex items-center gap-2 rounded border border-border/80 bg-background-surface/80 px-3 py-1.5 font-mono text-xs text-foreground-secondary transition-colors hover:border-metallic hover:text-foreground">
        <Globe2 className="h-3.5 w-3.5 text-metallic" />
        <span>Rasterio &amp; GDAL</span>
      </span>
    ),
    title: 'Geospatial Raster Analytics'
  },
  {
    node: (
      <span className="flex items-center gap-2 rounded border border-border/80 bg-background-surface/80 px-3 py-1.5 font-mono text-xs text-foreground-secondary transition-colors hover:border-metallic hover:text-foreground">
        <Layers className="h-3.5 w-3.5 text-metallic" />
        <span>MapLibre GL</span>
      </span>
    ),
    title: 'GPU Vector Tile Rendering'
  },
  {
    node: (
      <span className="flex items-center gap-2 rounded border border-border/80 bg-background-surface/80 px-3 py-1.5 font-mono text-xs text-foreground-secondary transition-colors hover:border-metallic hover:text-foreground">
        <Boxes className="h-3.5 w-3.5 text-metallic" />
        <span>React 19</span>
      </span>
    ),
    title: 'React 19 UI Architecture'
  },
  {
    node: (
      <span className="flex items-center gap-2 rounded border border-border/80 bg-background-surface/80 px-3 py-1.5 font-mono text-xs text-foreground-secondary transition-colors hover:border-metallic hover:text-foreground">
        <Code2 className="h-3.5 w-3.5 text-metallic" />
        <span>TypeScript</span>
      </span>
    ),
    title: 'Strict TypeScript'
  },
  {
    node: (
      <span className="flex items-center gap-2 rounded border border-border/80 bg-background-surface/80 px-3 py-1.5 font-mono text-xs text-foreground-secondary transition-colors hover:border-metallic hover:text-foreground">
        <Server className="h-3.5 w-3.5 text-metallic" />
        <span>FastAPI</span>
      </span>
    ),
    title: 'Asynchronous Python Web APIs'
  },
  {
    node: (
      <span className="flex items-center gap-2 rounded border border-border/80 bg-background-surface/80 px-3 py-1.5 font-mono text-xs text-foreground-secondary transition-colors hover:border-metallic hover:text-foreground">
        <Layers className="h-3.5 w-3.5 text-metallic" />
        <span>Electron</span>
      </span>
    ),
    title: 'Desktop Native Runtimes'
  },
  {
    node: (
      <span className="flex items-center gap-2 rounded border border-border/80 bg-background-surface/80 px-3 py-1.5 font-mono text-xs text-foreground-secondary transition-colors hover:border-metallic hover:text-foreground">
        <Database className="h-3.5 w-3.5 text-metallic" />
        <span>Supabase</span>
      </span>
    ),
    title: 'Distributed Postgres & Edge Auth'
  },
  {
    node: (
      <span className="flex items-center gap-2 rounded border border-border/80 bg-background-surface/80 px-3 py-1.5 font-mono text-xs text-foreground-secondary transition-colors hover:border-metallic hover:text-foreground">
        <Database className="h-3.5 w-3.5 text-metallic" />
        <span>PostgreSQL</span>
      </span>
    ),
    title: 'Relational Database Engine'
  },
  {
    node: (
      <span className="flex items-center gap-2 rounded border border-border/80 bg-background-surface/80 px-3 py-1.5 font-mono text-xs text-foreground-secondary transition-colors hover:border-metallic hover:text-foreground">
        <GitBranch className="h-3.5 w-3.5 text-metallic" />
        <span>Git &amp; GitHub</span>
      </span>
    ),
    title: 'Branching & Repository Workflows'
  },
  {
    node: (
      <span className="flex items-center gap-2 rounded border border-border/80 bg-background-surface/80 px-3 py-1.5 font-mono text-xs text-foreground-secondary transition-colors hover:border-metallic hover:text-foreground">
        <Layers className="h-3.5 w-3.5 text-metallic" />
        <span>Figma</span>
      </span>
    ),
    title: 'System Design & Prototyping'
  },
  {
    node: (
      <span className="flex items-center gap-2 rounded border border-border/80 bg-background-surface/80 px-3 py-1.5 font-mono text-xs text-foreground-secondary transition-colors hover:border-metallic hover:text-foreground">
        <Cpu className="h-3.5 w-3.5 text-metallic" />
        <span>Three.js</span>
      </span>
    ),
    title: 'WebGL 3D Rendering'
  }
];

export const TechStack: React.FC = () => {
  const isReducedMotion = useReducedMotion();
  const isTouch = useTouchDevice();

  // Map 6 skill categories to MagicBentoItem format
  const bentoItems: MagicBentoItem[] = useMemo(() => {
    return skillCategoriesData.map((category, index) => {
      const categoryNumber = `0${index + 1}`;
      const domainIcons = [
        Cpu, // 01 Computational Engineering
        Globe2, // 02 Geospatial Intelligence
        Workflow, // 03 Artificial Intelligence
        ShieldAlert, // 04 Cybersecurity
        Server, // 05 Full-Stack Development
        Layers // 06 Design & Product Development
      ];
      const IconComponent = domainIcons[index] || Cpu;

      return {
        id: category.id,
        colSpan: category.colSpan ?? 1,
        rowSpan: category.rowSpan ?? 1,
        content: (
          <div className="flex h-full flex-col justify-between p-6">
            <div className="space-y-3">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-border/60 pb-3 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-crimson">{categoryNumber}</span>
                  <span className="text-[10px] uppercase tracking-wider text-metallic">
                    DOMAIN // {category.projectName || 'SYSTEM'}
                  </span>
                </div>
                <IconComponent className="h-4 w-4 text-metallic/70" />
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-foreground">
                  {category.title}
                </h3>
                {category.tagline && (
                  <p className="mt-0.5 font-mono text-[11px] text-metallic">{category.tagline}</p>
                )}
                <p className="mt-2 font-body text-xs leading-relaxed text-foreground-muted">
                  {category.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1 rounded border px-2 py-0.5 font-mono text-[10px] ${
                      skill.level === 'experimental'
                        ? 'text-crimson-light border-crimson/40 bg-crimson/10'
                        : skill.level === 'competent'
                          ? 'border-metallic/40 bg-metallic/5 text-foreground'
                          : 'border-border bg-background-surface text-foreground-secondary'
                    }`}
                  >
                    <span>{skill.name}</span>
                    <span className="text-[8px] opacity-70">
                      [{skill.level.slice(0, 3).toUpperCase()}]
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer: Flagship Reference */}
            {category.projectName && (
              <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 font-mono text-[11px]">
                <span className="text-foreground-muted">Associated Initiative:</span>
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-1 font-semibold text-foreground-secondary transition-colors hover:text-metallic"
                >
                  <span>{category.projectName}</span>
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            )}
          </div>
        )
      };
    });
  }, []);

  return (
    <section
      id="tech-stack"
      aria-label="Technical Arsenal"
      className="bg-industrial-grid border-b border-border bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-metallic">
            <Cpu className="h-3.5 w-3.5" />
            <span>05 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="font-display text-display-lg font-bold uppercase tracking-tight text-foreground">
            BUILT FOR COMPLEXITY.
          </h2>
          <p className="max-w-3xl font-body text-sm leading-relaxed text-foreground-muted sm:text-base">
            A multidisciplinary engineering toolkit spanning intelligent systems, computational
            engineering, cybersecurity and software development.
          </p>
        </div>

        {/* Primary Showcase: Official React Bits Magic Bento */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-border bg-background-surface/30 p-2 sm:p-4">
          <MagicBento
            items={bentoItems}
            columns={3}
            rowHeight={290}
            gap={16}
            radius={16}
            theme="dark"
            glowColor="#C0C0C0"
            textAutoHide={false}
            enableBorderGlow={true}
            enableSpotlight={!isReducedMotion}
            spotlightRadius={320}
            enableStars={false}
            enableTilt={!isReducedMotion && !isTouch}
            disableAnimations={isReducedMotion}
            style={
              {
                '--mb-surface': 'linear-gradient(180deg, #111111 0%, #080808 100%)',
                '--mb-edge': 'rgba(255, 255, 255, 0.08)',
                '--mb-tile': 'linear-gradient(180deg, #141414 0%, #0d0d0d 100%)',
                '--mb-tile-edge': 'rgba(255, 255, 255, 0.07)',
                '--mb-ink': '#f2f2f2',
                '--mb-muted': 'rgba(242, 242, 242, 0.6)'
              } as React.CSSProperties
            }
          />
        </div>

        {/* Understated Toolchain Marquee: Official React Bits Logo Loop */}
        <div
          aria-label="Technology Marquee Strip"
          className="overflow-hidden rounded-xl border border-border bg-background-secondary p-4"
        >
          <div className="mb-3 flex items-center justify-between border-b border-border/80 pb-2.5 font-mono text-[11px] text-foreground-muted">
            <span className="flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5 text-metallic" />
              <span>CORE_PRIMITIVES_LOOP // 18 ENGINEERING CAPABILITIES</span>
            </span>
            <span className="hidden sm:inline">AUTHENTIC_TOOLCHAIN_STRIP</span>
          </div>

          {isReducedMotion ? (
            /* Reduced Motion Static Fallback */
            <div className="flex flex-wrap gap-2 py-2">
              {TECH_LOGOS.map((item, idx) => (
                <div key={idx}>{'node' in item ? item.node : null}</div>
              ))}
            </div>
          ) : (
            <div className="py-1">
              <LogoLoop
                logos={TECH_LOGOS}
                speed={45}
                direction="left"
                logoHeight={34}
                gap={16}
                pauseOnHover={true}
                fadeOut={true}
                fadeOutWidth={0.08}
                ariaLabel="Core Engineering Technologies and Primitives"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
