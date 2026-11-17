import React from 'react';
import { Terminal, Github, Mail } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-background-secondary py-12 text-foreground-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 border-b border-border/60 pb-10 md:grid-cols-3">
          {/* Identity Column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-sm font-bold text-foreground">
              <Terminal className="h-4 w-4 text-metallic" />
              <span>TARUN R.</span>
            </div>
            <p className="font-mono text-xs leading-relaxed text-foreground-muted">
              PORTFOLIO V2 — BEYOND THE INTERFACE.
              <br />
              High-performance computational engineering, AI systems, and tactile web architecture.
            </p>
          </div>

          {/* Institutional / Academic Context */}
          <div className="space-y-2 font-mono text-xs">
            <span className="text-[10px] uppercase tracking-wider text-metallic">
              Academic Standing
            </span>
            <p className="text-foreground-secondary">{profileData.education.degree}</p>
            <p className="text-foreground-muted">{profileData.education.institution}</p>
            <p className="text-foreground-muted">Location: {profileData.location}</p>
          </div>

          {/* Verified Dispatch Links */}
          <div className="space-y-2 font-mono text-xs">
            <span className="text-[10px] uppercase tracking-wider text-metallic">
              Verified Dispatch
            </span>
            <div className="flex flex-col gap-2">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground-secondary transition-colors hover:text-foreground"
              >
                <Github className="h-3.5 w-3.5" />
                <span>github.com/TRB-89</span>
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="flex items-center gap-2 text-foreground-secondary transition-colors hover:text-foreground"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{profileData.contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 font-mono text-xs text-foreground-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} Tarun R. Built with code, engineering discipline, and zero
            templates.
          </p>
          <div className="flex items-center gap-3 text-[11px]">
            <span>STRICT_TYPESCRIPT</span>
            <span>•</span>
            <span>VITE_REACT</span>
            <span>•</span>
            <span className="text-crimson">MONOCHROME_SYSTEM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
