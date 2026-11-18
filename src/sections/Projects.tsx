import React from 'react';
import { FolderGit2 } from 'lucide-react';
import { showcaseProjects } from '../data/projects';
import { FlexCarouselStage } from '../components/shared/FlexCarouselStage';

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      aria-label="Selected Work"
      className="bg-industrial-grid scroll-mt-16 border-b border-border bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-metallic">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>03 // SELECTED WORK</span>
          </div>
          <h2 className="font-display text-display-lg font-bold uppercase tracking-tight text-foreground">
            ENGINEERED TO EXIST.
          </h2>
          <p className="font-mono text-xs text-foreground-muted">
            IMMERSIVE OGL WAVE RIBBON // 11 CATALOGUED INITIATIVES
          </p>
        </div>

        {/* Primary and Immediately Visible Flex Carousel Showcase Stage */}
        <FlexCarouselStage projects={showcaseProjects} />
      </div>
    </section>
  );
};

export default Projects;
