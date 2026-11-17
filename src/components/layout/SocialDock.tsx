import React from 'react';
import { Github, Mail, Code2, ArrowUp } from 'lucide-react';
import { profileData } from '../../data/profile';

export const SocialDock: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside
      aria-label="Quick Access Dock"
      className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-xl border border-border/80 bg-background-surface/85 px-3 py-2 shadow-surface backdrop-blur-lg"
    >
      {/* GitHub Profile */}
      <a
        href={profileData.contact.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className="group relative flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background-secondary text-foreground-secondary transition-all hover:border-metallic hover:bg-background hover:text-foreground"
      >
        <Github className="h-4 w-4" />
        <span className="sr-only">GitHub</span>
        <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-foreground opacity-0 transition-opacity group-hover:opacity-100">
          GitHub
        </span>
      </a>

      {/* Verified Email */}
      <a
        href={`mailto:${profileData.contact.email}`}
        aria-label="Send Email"
        className="group relative flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background-secondary text-foreground-secondary transition-all hover:border-metallic hover:bg-background hover:text-foreground"
      >
        <Mail className="h-4 w-4" />
        <span className="sr-only">Email</span>
        <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-foreground opacity-0 transition-opacity group-hover:opacity-100">
          Email
        </span>
      </a>

      {/* Portfolio Repository */}
      <a
        href="https://github.com/TRB-89/portfolio-trb"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Source Repository"
        className="group relative flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background-secondary text-foreground-secondary transition-all hover:border-metallic hover:bg-background hover:text-foreground"
      >
        <Code2 className="h-4 w-4" />
        <span className="sr-only">Source Code</span>
        <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-foreground opacity-0 transition-opacity group-hover:opacity-100">
          Source
        </span>
      </a>

      <div className="mx-1 h-4 w-px bg-border/80" aria-hidden="true" />

      {/* Back to Top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className="group relative flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background-secondary text-foreground-secondary transition-all hover:border-metallic hover:bg-background hover:text-foreground"
      >
        <ArrowUp className="h-4 w-4" />
        <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-foreground opacity-0 transition-opacity group-hover:opacity-100">
          Top
        </span>
      </button>
    </aside>
  );
};
