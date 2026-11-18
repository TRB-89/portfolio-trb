import React from 'react';
import { ArrowDown, Code2, Terminal, Cpu, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';
import TechText from '../components/reactbits/TechText';
import LiquidChrome from '../components/reactbits/LiquidChrome';
import RotatingText from '../components/reactbits/RotatingText';
import MetallicPaint from '../components/reactbits/MetallicPaint';
import Magnet from '../components/reactbits/Magnet';
import { isWebGLAvailable } from '../utils/webgl';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const hasWebGL = isWebGLAvailable();

  return (
    <section
      id="hero"
      aria-label="Identity and Hero"
      className="bg-industrial-grid relative flex min-h-[calc(100vh-61px)] flex-col justify-between overflow-hidden border-b border-border bg-background px-4 pb-28 pt-8 sm:px-6 sm:py-12 lg:px-8"
    >
      {/* Liquid Chrome Atmospheric WebGL Background */}
      {hasWebGL && !prefersReducedMotion && (
        <div className="pointer-events-none absolute inset-0 z-0 opacity-35" aria-hidden="true">
          <LiquidChrome
            color={[0.1, 0.1, 0.1]}
            speed={0.2}
            amplitude={0.25}
            interactive={true}
            maxDevicePixelRatio={1.5}
          />
        </div>
      )}

      {/* Top Technical Metadata Bar */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 border-b border-border/70 pb-4 font-mono text-xs text-foreground-muted">
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-metallic" />
          <span className="text-foreground-secondary">SPECIFICATION: PORTFOLIO_V2</span>
          <span className="text-border">|</span>
          <span>CODENAME: BEYOND THE INTERFACE</span>
        </div>

        {/* TRB Metallic Paint Branding Seal */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 rounded-lg border border-border/80 bg-background-surface/90 px-2.5 py-1 shadow-sm sm:flex">
            <div className="h-7 w-16 overflow-hidden">
              <MetallicPaint
                text="TRB"
                fontFamily="Space Grotesk, sans-serif"
                fontWeight={800}
                color="#C0C0C0"
                backgroundColor="#141414"
                density={2.5}
                speed={0.3}
              />
            </div>
            <span className="border-l border-border pl-2 font-mono text-[10px] text-foreground-muted">
              SYS_2.0
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-foreground-secondary">ARCH: CLIENT_SIDE_REACT</span>
            <span className="text-border">|</span>
            <span className="font-medium text-crimson">LOC: CHENNAI [13.0827° N, 80.2707° E]</span>
          </div>
        </div>
      </div>

      {/* Main Hero Identity Stage */}
      <div className="relative z-10 mx-auto my-auto w-full max-w-7xl py-8 sm:py-12">
        <div className="max-w-4xl space-y-6">
          {/* Identity Tag */}
          <div className="inline-flex items-center gap-2 rounded border border-border bg-background-surface/90 px-2.5 py-1 font-mono text-xs text-foreground-secondary">
            <Cpu className="h-3.5 w-3.5 text-metallic" />
            <span>01 // IDENTITY ARCHITECTURE</span>
          </div>

          {/* Primary Name Display with Tech Text */}
          <div className="space-y-3">
            <h1 className="relative font-display uppercase tracking-tight text-foreground">
              {/* Screen reader & SEO accessible fallback */}
              <span className="sr-only">{profileData.name}</span>
              <div
                className="h-[140px] w-full max-w-3xl overflow-visible text-foreground sm:h-[180px] md:h-[220px]"
                aria-hidden="true"
              >
                <TechText
                  text="TARUN R."
                  fontWeight={600}
                  fontSize={150}
                  reveal="letter"
                  dashLength={4}
                  dashGap={2}
                  specks={15}
                  intro="none"
                  introDuration={2}
                  clickKick
                  guides={false}
                  fontFamily="Space Grotesk, sans-serif"
                  letterSpacing={-0.05}
                  accentColor="currentColor"
                  reach={200}
                  softness={0.7}
                  lineStyle="dashed"
                  strokeWidth={1.5}
                  speed={1}
                  bounce={0.4}
                  selection
                  labels
                  color="currentColor"
                  align="left"
                  draggable
                  sweep
                  className="h-full w-full"
                />
              </div>
            </h1>

            {/* Professional Subtitle */}
            <p className="flex items-center gap-2 font-mono text-base font-semibold uppercase tracking-wide text-metallic sm:text-lg">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-crimson" />
              <span>{profileData.role}</span>
            </p>
          </div>

          {/* Rotating Professional Identities using RotatingText */}
          <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs sm:text-sm">
            <span className="flex items-center gap-1.5 text-foreground-muted">
              <Sparkles className="h-3.5 w-3.5 text-metallic" />
              <span>Discipline:</span>
            </span>
            <div className="inline-block rounded border border-border/80 bg-background-surface/90 px-3 py-1.5 shadow-sm">
              <RotatingText
                texts={profileData.titles}
                effect="flip"
                mainClassName="text-foreground font-semibold"
                rotationInterval={3200}
                staggerDuration={0.03}
                loop
                auto
              />
            </div>
          </div>

          {/* Tagline Narrative */}
          <p className="max-w-2xl pt-2 font-body text-base leading-relaxed text-foreground-secondary sm:text-lg">
            {profileData.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs">
            <Magnet
              magnetStrength={2}
              maxOffset={12}
              padding={30}
              disabled={prefersReducedMotion}
              wrapperClassName="inline-block"
              innerClassName="inline-block"
            >
              <a
                href="#projects"
                className="cursor-target inline-flex items-center gap-2 rounded bg-foreground px-5 py-3 font-semibold text-background transition-all hover:bg-metallic"
              >
                <Code2 className="h-4 w-4" />
                <span>Explore Selected Work</span>
              </a>
            </Magnet>
            <Magnet
              magnetStrength={2}
              maxOffset={12}
              padding={30}
              disabled={prefersReducedMotion}
              wrapperClassName="inline-block"
              innerClassName="inline-block"
            >
              <a
                href="#contact"
                className="cursor-target inline-flex items-center gap-2 rounded border border-border bg-background-surface px-5 py-3 text-foreground transition-all hover:border-metallic hover:bg-background-secondary"
              >
                <span>Initiate Transmission</span>
              </a>
            </Magnet>
          </div>
        </div>
      </div>

      {/* Hero Footnote / Scroll Indicator */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between border-t border-border/70 pt-6 font-mono text-xs text-foreground-muted">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-metallic"></span>
          <span>RAJALAKSHMI INSTITUTE OF TECHNOLOGY // CSBS</span>
        </div>
        <a
          href="#about"
          className="cursor-target flex items-center gap-1.5 text-foreground-secondary transition-colors hover:text-foreground"
        >
          <span>Scroll down</span>
          <ArrowDown className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
};
