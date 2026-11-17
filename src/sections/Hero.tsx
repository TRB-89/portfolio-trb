import React from 'react';
import { ArrowDown, Code2, Terminal, Cpu } from 'lucide-react';
import { profileData } from '../data/profile';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Identity and Hero"
      className="bg-industrial-grid relative flex min-h-[calc(100vh-61px)] flex-col justify-between border-b border-border bg-background px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Top Technical Metadata Bar */}
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 border-b border-border/70 pb-4 font-mono text-xs text-foreground-muted">
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-metallic" />
          <span className="text-foreground-secondary">SPECIFICATION: PORTFOLIO_V2</span>
          <span className="text-border">|</span>
          <span>CODENAME: BEYOND THE INTERFACE</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-foreground-secondary">ARCH: CLIENT_SIDE_REACT</span>
          <span className="text-border">|</span>
          <span className="font-medium text-crimson">LOC: CHENNAI [13.0827° N, 80.2707° E]</span>
        </div>
      </div>

      {/* Main Hero Identity Stage */}
      <div className="mx-auto my-auto w-full max-w-7xl py-12">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded border border-border bg-background-surface px-2.5 py-1 font-mono text-xs text-foreground-secondary">
            <Cpu className="h-3.5 w-3.5 text-metallic" />
            <span>01 // IDENTITY ARCHITECTURE</span>
          </div>

          {/* Primary Name Display */}
          <div className="space-y-2">
            <h1 className="font-display text-display-2xl font-bold uppercase tracking-tight text-foreground">
              {profileData.name}
            </h1>
            <p className="font-mono text-lg font-medium uppercase tracking-wide text-metallic sm:text-xl">
              {profileData.role}
            </p>
          </div>

          {/* Dynamic / Rotating Title Preview Foundation */}
          <div className="flex flex-wrap gap-2 pt-2" aria-label="Professional Roles">
            {profileData.titles.map((title, idx) => (
              <span
                key={title}
                className={`rounded border px-2.5 py-1 font-mono text-xs ${
                  idx === 0
                    ? 'border-metallic/60 bg-background-surface font-semibold text-foreground'
                    : 'border-border/60 bg-background-secondary text-foreground-muted'
                }`}
              >
                {title}
              </span>
            ))}
          </div>

          <p className="max-w-2xl pt-2 font-body text-base leading-relaxed text-foreground-secondary sm:text-lg">
            {profileData.tagline} Focused on GPU-accelerated numerical kernels, multi-spectral SAR
            geospatial pipelines, and resilient interactive interfaces.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded bg-foreground px-5 py-3 font-semibold text-background transition-all hover:bg-metallic"
            >
              <Code2 className="h-4 w-4" />
              <span>Explore Selected Work</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded border border-border bg-background-surface px-5 py-3 text-foreground transition-all hover:border-metallic hover:bg-background-secondary"
            >
              <span>Initiate Transmission</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Footnote / Scroll Indicator */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between border-t border-border/70 pt-6 font-mono text-xs text-foreground-muted">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-metallic"></span>
          <span>RAJALAKSHMI INSTITUTE OF TECHNOLOGY // CSBS</span>
        </div>
        <a
          href="#about"
          className="flex items-center gap-1.5 text-foreground-secondary transition-colors hover:text-foreground"
        >
          <span>Scroll down</span>
          <ArrowDown className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
};
