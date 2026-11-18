import React from 'react';
import { Terminal, Code2, Github, Mail, ArrowUp } from 'lucide-react';
import Dock, { DockItemData } from '../reactbits/Dock';
import { profileData } from '../../data/profile';

export interface SocialDockProps {
  hidden?: boolean;
}

export const SocialDock: React.FC<SocialDockProps> = ({ hidden = false }) => {
  const dockItems: DockItemData[] = [
    {
      icon: <Terminal className="h-4 w-4" />,
      label: 'Home',
      onClick: () => {
        document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
      },
      className: 'cursor-target'
    },
    {
      icon: <Code2 className="h-4 w-4" />,
      label: 'Projects',
      onClick: () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
      },
      className: 'cursor-target'
    },
    {
      icon: <Github className="h-4 w-4" />,
      label: 'GitHub',
      onClick: () => {
        window.open(profileData.contact.github, '_blank', 'noopener,noreferrer');
      },
      className: 'cursor-target'
    },
    {
      icon: <Mail className="h-4 w-4" />,
      label: 'Email',
      onClick: () => {
        window.location.href = `mailto:${profileData.contact.email}`;
      },
      className: 'cursor-target'
    },
    {
      separator: true
    },
    {
      icon: <ArrowUp className="h-4 w-4" />,
      label: 'Top',
      onClick: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      className: 'cursor-target'
    }
  ];

  return (
    <aside
      aria-label="Quick Access Dock"
      className={`fixed bottom-3 left-1/2 z-30 -translate-x-1/2 pb-[env(safe-area-inset-bottom)] transition-all duration-300 ease-out sm:bottom-6 ${
        hidden
          ? 'pointer-events-none translate-y-12 opacity-0'
          : 'pointer-events-auto translate-y-0 opacity-100'
      }`}
    >
      <Dock
        position="bottom"
        theme="dark"
        tiles={true}
        showLabels={true}
        accentColor="#C0C0C0"
        baseItemSize={38}
        magnification={52}
        distance={110}
        roundness={0.65}
        spring={{ mass: 0.5, stiffness: 180, damping: 18 }}
        items={dockItems}
      />
    </aside>
  );
};

export default SocialDock;
