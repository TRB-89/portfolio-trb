import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import StaggeredMenu, {
  StaggeredMenuItem,
  StaggeredMenuSocialItem
} from '../reactbits/StaggeredMenu';
import MetallicPaint from '../reactbits/MetallicPaint';

export interface NavigationProps {
  onMenuStateChange?: (isOpen: boolean) => void;
}

const menuItems: StaggeredMenuItem[] = [
  { label: 'Home', ariaLabel: 'Navigate to 01 Home and identity architecture', link: '#hero' },
  { label: 'About', ariaLabel: 'Navigate to 02 About and background section', link: '#about' },
  { label: 'Projects', ariaLabel: 'Navigate to 03 Selected projects showcase', link: '#projects' },
  {
    label: 'Case Studies',
    ariaLabel: 'Navigate to 04 Engineering deep dives',
    link: '#case-studies'
  },
  {
    label: 'Technical Expertise',
    ariaLabel: 'Navigate to 05 Technical arsenal and skills',
    link: '#tech-stack'
  },
  {
    label: 'Achievements',
    ariaLabel: 'Navigate to 06 Verified milestones and awards',
    link: '#achievements'
  },
  {
    label: 'Currently Building',
    ariaLabel: 'Navigate to 07 Active engineering research',
    link: '#current-work'
  },
  {
    label: 'Contact',
    ariaLabel: 'Navigate to 08 Direct transmission and contact',
    link: '#contact'
  }
];

const socialItems: StaggeredMenuSocialItem[] = [
  { label: 'GitHub', link: 'https://github.com/TRB-89' },
  { label: 'Email', link: 'mailto:tarunbanu2007@gmail.com' },
  { label: 'Source', link: 'https://github.com/TRB-89/portfolio-trb' }
];

export const Navigation: React.FC<NavigationProps> = ({ onMenuStateChange }) => {
  return (
    <header className="pointer-events-none fixed left-0 top-0 z-50 w-full">
      <StaggeredMenu
        isFixed={true}
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        colors={['#141414', '#1C1C1C']}
        accentColor="#C0C0C0"
        menuButtonColor="#F2F2F2"
        openMenuButtonColor="#F2F2F2"
        onMenuOpen={() => onMenuStateChange?.(true)}
        onMenuClose={() => onMenuStateChange?.(false)}
        logoContent={
          <a
            href="#hero"
            className="cursor-target group flex items-center gap-3 font-mono text-xs font-semibold tracking-wider text-foreground transition-colors hover:text-metallic"
            aria-label="Tarun R. Portfolio Home"
          >
            {/* TRB Metallic Paint Branding Seal */}
            <div className="flex h-7 w-12 items-center justify-center overflow-hidden rounded border border-border bg-background-surface transition-colors group-hover:border-metallic">
              <MetallicPaint
                text="TRB"
                fontFamily="Space Grotesk, sans-serif"
                fontWeight={800}
                color="#C0C0C0"
                backgroundColor="#141414"
                density={2.5}
                speed={0.25}
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-foreground">TARUN R.</span>
              <span className="hidden text-[10px] text-foreground-muted sm:inline-block">
                / SYS_V2
              </span>
            </div>

            <span className="hidden border-l border-border pl-3 text-[10px] text-foreground-secondary md:inline-block">
              CHENNAI // AI &amp; SYSTEMS
            </span>
          </a>
        }
        headerRightExtra={
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Operational Status Pill */}
            <div className="hidden items-center gap-2 rounded border border-border bg-background-secondary px-2.5 py-1 font-mono text-xs text-foreground-secondary sm:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-crimson"></span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-foreground-muted">
                Status: Active
              </span>
            </div>

            {/* Quick Connect CTA */}
            <a
              href="#contact"
              className="cursor-target hidden items-center gap-1 rounded bg-foreground px-3 py-1.5 font-mono text-xs font-medium text-background transition-colors hover:bg-metallic sm:flex"
            >
              <span>Connect</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        }
      />
    </header>
  );
};

export default Navigation;
