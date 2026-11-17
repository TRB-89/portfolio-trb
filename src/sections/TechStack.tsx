import React from 'react';
import { Cpu, Terminal, Layers } from 'lucide-react';
import { skillCategoriesData } from '../data/skills';

export const TechStack: React.FC = () => {
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
            <span>05 // TECHNICAL ARSENAL &amp; SYSTEMS CAPABILITY</span>
          </div>
          <h2 className="font-display text-display-lg font-bold uppercase tracking-tight text-foreground">
            Computational Arsenal
          </h2>
          <p className="font-mono text-xs text-foreground-muted">
            LOGO LOOP MARQUEE // MAGIC BENTO GRID SPECIFICATION // STRICT VERIFICATION
          </p>
        </div>

        {/* Tech Marquee Container (Staging for LogoLoop in Phase 7) */}
        <div
          aria-label="Technology Marquee Strip"
          className="mb-12 overflow-hidden rounded-xl border border-border bg-background-secondary p-4"
        >
          <div className="mb-4 flex items-center justify-between border-b border-border/80 pb-3 font-mono text-[11px] text-foreground-muted">
            <span className="flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5 text-metallic" />
              <span>CORE_PRIMITIVES_LOOP</span>
            </span>
            <span>PHASE_07_MARQUEE_SLOT</span>
          </div>

          <div className="flex flex-wrap gap-2 py-2">
            {[
              'C++20',
              'CUDA',
              'Python',
              'PyTorch',
              'Rasterio',
              'MapLibre GL',
              'React 19',
              'TypeScript',
              'FastAPI',
              'Electron',
              'Supabase',
              'PostgreSQL',
              'Docker',
              'CMake',
              'Figma',
              'Three.js'
            ].map((tech) => (
              <span
                key={tech}
                className="rounded border border-border bg-background-surface px-3 py-1.5 font-mono text-xs text-foreground-secondary transition-colors hover:border-metallic hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Magic Bento Skill Categories Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategoriesData.map((category, index) => (
            <div
              key={category.id}
              className="flex flex-col justify-between rounded-xl border border-border bg-background-surface p-6 transition-all hover:border-metallic/80"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border/70 pb-3 font-mono text-xs">
                  <span className="font-bold text-crimson">0{index + 1}</span>
                  <span className="text-[11px] text-foreground-muted">DISCIPLINE</span>
                </div>

                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-foreground">
                    {category.title}
                  </h3>
                  <p className="mt-1 font-body text-xs leading-relaxed text-foreground-muted">
                    {category.description}
                  </p>
                </div>

                <ul className="space-y-2 pt-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex flex-col gap-1 rounded border border-border/60 bg-background p-2.5 font-mono text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span
                          className={`rounded border px-1.5 py-0.5 text-[9px] uppercase ${
                            skill.level === 'competent'
                              ? 'border-metallic/50 text-metallic'
                              : skill.level === 'experimental'
                                ? 'border-crimson/50 text-foreground'
                                : 'border-border text-foreground-muted'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      {skill.note && (
                        <span className="text-[10px] text-foreground-muted">{skill.note}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-4 font-mono text-[10px] text-foreground-muted">
                <span className="flex items-center gap-1.5">
                  <Layers className="h-3 w-3 text-metallic" />
                  <span>{category.skills.length} Capabilities</span>
                </span>
                <span>AUTHENTICATED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
