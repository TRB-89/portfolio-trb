import React from 'react';
import { User, GraduationCap, Compass, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Tarun"
      className="border-b border-border bg-background-secondary px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-metallic">
            <User className="h-3.5 w-3.5" />
            <span>02 // BIOGRAPHY &amp; INTELLECTUAL FRAMEWORK</span>
          </div>
          <h2 className="font-display text-display-lg font-bold uppercase tracking-tight text-foreground">
            Systems Mindset. Verifiable Engineering.
          </h2>
          <p className="font-mono text-xs text-foreground-muted">
            CSBS UNDERGRADUATE // COMPUTATIONAL SYSTEMS &amp; INDUSTRIAL DESIGN
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Main Biography Column */}
          <div className="space-y-6 font-body text-base leading-relaxed text-foreground-secondary sm:text-lg lg:col-span-7">
            {profileData.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {/* Core Engineering Principles */}
            <div className="border-t border-border pt-6">
              <h3 className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-metallic">
                <Compass className="h-4 w-4" />
                <span>Operating Principles</span>
              </h3>
              <ul className="grid grid-cols-1 gap-3 font-mono text-xs sm:grid-cols-2">
                {profileData.principles.map((principle, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 rounded border border-border/70 bg-background-surface p-3"
                  >
                    <span className="font-bold text-crimson">0{index + 1}</span>
                    <span className="text-foreground-secondary">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Institutional Card & 3D Lanyard Staging Container */}
          <div className="space-y-6 lg:col-span-5">
            {/* Academic Snapshot Card */}
            <div className="space-y-5 rounded-xl border border-border bg-background-surface p-6">
              <div className="flex items-center justify-between border-b border-border/70 pb-4">
                <div className="flex items-center gap-2.5 font-mono text-xs font-semibold text-foreground">
                  <GraduationCap className="h-4 w-4 text-metallic" />
                  <span>Academic Trajectory</span>
                </div>
                <span className="rounded border border-border bg-background px-2 py-0.5 font-mono text-[10px] uppercase text-foreground-muted">
                  Undergraduate
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="block text-[11px] text-foreground-muted">Degree Program</span>
                  <span className="font-medium text-foreground">
                    {profileData.education.degree}
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] text-foreground-muted">Institution</span>
                  <span className="font-medium text-foreground">
                    {profileData.education.institution}
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] text-foreground-muted">Specialization</span>
                  <span className="text-foreground-secondary">
                    Mathematical Algorithms, Distributed Data &amp; Systems Architecture
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 border-t border-border/70 pt-4 font-mono text-[11px] text-foreground-muted">
                <ShieldCheck className="h-3.5 w-3.5 text-metallic" />
                <span>Academic Record &amp; Enrollment Authenticated</span>
              </div>
            </div>

            {/* 3D Lanyard Interactive Stage (Reserved for Phase 4) */}
            <div
              className="relative flex aspect-square w-full flex-col justify-between rounded-xl border border-dashed border-border bg-background p-6"
              aria-label="3D Lanyard Identity Badge Stage"
            >
              <div className="flex items-center justify-between font-mono text-[11px] text-foreground-muted">
                <span>[3D_IDENTITY_NODE]</span>
                <span className="text-crimson">STAGE // PENDING_R3F</span>
              </div>

              <div className="space-y-2 py-8 text-center">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                  Interactive Physics Lanyard
                </p>
                <p className="mx-auto max-w-xs font-mono text-[11px] text-foreground-muted">
                  Reserved for React Three Fiber + Three.js swinging badge integration in Phase 04.
                </p>
              </div>

              <div className="flex justify-between font-mono text-[10px] text-foreground-muted">
                <span>ID: TRB_89_CSBS</span>
                <span>PHYSICS: VERLET_ROPE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
