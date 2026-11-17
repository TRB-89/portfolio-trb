import React from 'react';
import { User, GraduationCap, Compass, ShieldCheck, Cpu } from 'lucide-react';
import { profileData } from '../data/profile';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import { LanyardBadge } from '../components/shared/LanyardBadge';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Tarun"
      className="scroll-mt-16 border-b border-border bg-background-secondary px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading Bar */}
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

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left Column: Editorial Narrative & Principles (7 cols on lg) */}
          <div className="space-y-8 lg:col-span-7">
            {/* Lead Statement with React Bits Scroll Reveal */}
            <div className="border-b border-border/80 pb-6">
              <ScrollReveal
                splitBy="words"
                mode="scrub"
                enableBlur={true}
                blurStrength={3}
                baseOpacity={0.15}
                highlightColor="#C0C0C0"
                containerClassName="scroll-reveal my-0 text-left"
                textClassName="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-snug"
              >
                Architecting software at the convergence of accelerated numerical computation,
                autonomous intelligence, and tactile industrial interfaces.
              </ScrollReveal>
            </div>

            {/* Biographical Narrative */}
            <div className="space-y-5 font-body text-base leading-relaxed text-foreground-secondary sm:text-lg">
              {profileData.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Operating Principles */}
            <div className="border-t border-border pt-6">
              <h3 className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-metallic">
                <Compass className="h-4 w-4" />
                <span>Operating Principles</span>
              </h3>
              <ul className="grid grid-cols-1 gap-3 font-mono text-xs sm:grid-cols-2">
                {profileData.principles.map((principle, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 rounded border border-border/70 bg-background-surface p-3.5 transition-colors hover:border-metallic/60"
                  >
                    <span className="font-bold text-crimson">0{index + 1}</span>
                    <span className="text-foreground-secondary">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Academic Credentials & 3D Identity Lanyard (5 cols on lg) */}
          <div className="space-y-6 lg:col-span-5">
            {/* Academic Snapshot Card */}
            <div className="space-y-5 rounded-xl border border-border bg-background-surface p-6 shadow-sm">
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

            {/* Interactive 3D Lanyard Developer Identity Badge */}
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-[11px] text-foreground-muted">
                <span className="flex items-center gap-1.5">
                  <Cpu className="h-3 w-3 text-metallic" />
                  <span>3D_IDENTITY_NODE</span>
                </span>
                <span className="text-metallic">THREE_JS // VERLET_PHYSICS</span>
              </div>

              <LanyardBadge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
