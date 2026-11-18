import React from 'react';
import { ArrowUp, Github, Mail, MapPin, GraduationCap, Terminal } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Site colophon and footer"
      className="relative border-t border-border/80 bg-background pb-32 pt-16 text-foreground-secondary sm:pb-36 sm:pt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Banner */}
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-border/60 pb-10 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-metallic">
              Colophon // 2024 — Present
            </span>
            <p className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              ENGINEERED WITH INTENTION.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="bg-surface/50 hover:bg-surface group flex items-center gap-2 self-start rounded-md border border-border/80 px-4 py-2 font-mono text-xs text-foreground-secondary transition-all hover:border-metallic hover:text-foreground md:self-auto"
          >
            <span>BACK_TO_TOP</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* 4-Column Editorial Metadata */}
        <div className="grid grid-cols-1 gap-10 border-b border-border/60 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-sm font-bold text-foreground">
              <Terminal className="h-4 w-4 text-metallic" />
              <span>{profileData.name}</span>
            </div>
            <p className="font-mono text-xs leading-relaxed text-foreground-muted">
              {profileData.role}
            </p>
            <p className="font-mono text-[11px] leading-relaxed text-foreground-muted/80">
              Autonomous architectures, GPU optimization, geospatial intelligence, and
              high-performance product engineering.
            </p>
          </div>

          {/* Academic Profile */}
          <div className="space-y-3 font-mono text-xs">
            <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-metallic">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>Academic Trajectory</span>
            </div>
            <p className="font-medium text-foreground">
              {profileData.education.institution} — CSBS
            </p>
            <p className="text-foreground-secondary">{profileData.education.degree}</p>
            <span className="bg-surface/40 inline-block rounded border border-border/60 px-2 py-0.5 text-[10px] text-foreground-muted">
              Enrollment: {profileData.education.status}
            </span>
          </div>

          {/* Geospatial Coordinates */}
          <div className="space-y-3 font-mono text-xs">
            <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-metallic">
              <MapPin className="h-3.5 w-3.5" />
              <span>Coordinates & Base</span>
            </div>
            <p className="font-medium text-foreground">{profileData.location}</p>
            <p className="text-foreground-muted">Coordinates: [13.0827° N, 80.2707° E]</p>
            <p className="text-foreground-muted">Timezone: UTC+05:30 (IST)</p>
          </div>

          {/* Direct Dispatch Links */}
          <div className="space-y-3 font-mono text-xs">
            <span className="block text-[11px] uppercase tracking-wider text-metallic">
              Direct Dispatch
            </span>
            <div className="flex flex-col gap-2.5">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground-secondary transition-colors hover:text-foreground"
              >
                <Github className="h-3.5 w-3.5 text-metallic" />
                <span>github.com/TRB-89</span>
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="flex items-center gap-2 text-foreground-secondary transition-colors hover:text-foreground"
              >
                <Mail className="h-3.5 w-3.5 text-metallic" />
                <span>{profileData.contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Oversized Brand Display & Fine Print */}
        <div className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          {/* Static Monochromatic Wordmark */}
          <div className="select-none font-display text-6xl font-black tracking-tighter text-foreground/15 sm:text-7xl md:text-8xl lg:text-9xl">
            TRB<span className="text-metallic/30">.</span>
          </div>

          <div className="space-y-2 text-left font-mono text-xs text-foreground-muted md:text-right">
            <p>© {new Date().getFullYear()} Tarun R. All rights reserved.</p>
            <p className="text-[11px] text-foreground-muted/70">
              Designed with strict architectural minimalism and zero proprietary templates.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-foreground-muted/60 md:justify-end">
              <span>REACT_19</span>
              <span>•</span>
              <span>TAILWIND_V3</span>
              <span>•</span>
              <span>THREE_JS</span>
              <span>•</span>
              <span className="text-crimson">OP_MONO</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
