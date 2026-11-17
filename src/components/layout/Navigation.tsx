import React, { useState } from 'react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  code: string;
}

const navItems: NavItem[] = [
  { label: 'Identity', href: '#hero', code: '01' },
  { label: 'About', href: '#about', code: '02' },
  { label: 'Selected Work', href: '#projects', code: '03' },
  { label: 'Case Studies', href: '#case-studies', code: '04' },
  { label: 'Arsenal', href: '#tech-stack', code: '05' },
  { label: 'Milestones', href: '#achievements', code: '06' },
  { label: 'Building', href: '#current-work', code: '07' },
  { label: 'Contact', href: '#contact', code: '08' }
];

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Lockup */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 font-mono text-sm font-semibold tracking-wider text-foreground transition-colors hover:text-metallic"
          aria-label="Tarun R. Portfolio Home"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded border border-border bg-background-surface transition-colors group-hover:border-metallic">
            <Terminal className="h-3.5 w-3.5 text-metallic" />
          </div>
          <span className="text-foreground">TARUN R.</span>
          <span className="hidden text-xs text-foreground-muted sm:inline-block">/ SYS_V2</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-1.5 rounded px-3 py-1.5 font-mono text-xs text-foreground-secondary transition-all hover:bg-background-surface/80 hover:text-foreground"
            >
              <span className="text-[10px] font-normal text-foreground-muted">{item.code}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Status Badge & Contact Action */}
        <div className="hidden items-center gap-4 sm:flex">
          <div className="flex items-center gap-2 rounded border border-border bg-background-secondary px-2.5 py-1 font-mono text-xs text-foreground-secondary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-crimson"></span>
            </span>
            <span className="text-[11px] uppercase tracking-wider text-foreground-muted">
              Status: Active
            </span>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-1 rounded bg-foreground px-3 py-1.5 font-mono text-xs font-medium text-background transition-colors hover:bg-metallic"
          >
            Connect
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded border border-border bg-background-surface p-2 text-foreground-secondary hover:text-foreground lg:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background-secondary px-4 py-4 sm:px-6 lg:hidden">
          <nav className="grid grid-cols-2 gap-2" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 rounded border border-border/50 bg-background-surface p-2 font-mono text-xs text-foreground-secondary hover:border-metallic hover:text-foreground"
              >
                <span className="font-bold text-crimson">{item.code}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-3 font-mono text-xs">
            <span className="text-foreground-muted">tarunbanu2007@gmail.com</span>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-metallic hover:underline"
            >
              Contact →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
