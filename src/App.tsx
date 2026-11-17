import React, { useState } from 'react';
import { Navigation } from './components/layout/Navigation';
import { SocialDock } from './components/layout/SocialDock';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { CaseStudies } from './sections/CaseStudies';
import { TechStack } from './sections/TechStack';
import { Achievements } from './sections/Achievements';
import { CurrentWork } from './sections/CurrentWork';
import { Contact } from './sections/Contact';
import { ErrorBoundary } from './components/shared/ErrorBoundary';
import Noise from './components/reactbits/Noise';
import TargetCursor from './components/reactbits/TargetCursor';
import GradualBlur from './components/reactbits/GradualBlur';

export const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col justify-between bg-background text-foreground antialiased selection:bg-metallic selection:text-background">
      {/* Target Cursor with Spring Tracking and Lock-On */}
      <TargetCursor
        targetSelector=".cursor-target"
        cursorColor="#F2F2F2"
        cursorColorOnTarget="#C0C0C0"
        size={32}
        cornerSize={10}
        thickness={1.5}
        blendMode="difference"
      />

      {/* Cinematic Film Grain Overlay */}
      <Noise opacity={0.03} fixed={true} zIndex={15} />

      {/* Atmospheric Top Gradual Blur */}
      <GradualBlur
        position="top"
        target="page"
        height="4.5rem"
        strength={1.2}
        layers={6}
        curve="ease-out"
        opacity={0.7}
        zIndex={20}
        className="pointer-events-none fixed left-0 top-0 w-full"
      />

      {/* Primary Sticky / Fixed Navigation with Staggered Menu */}
      <Navigation onMenuStateChange={setIsMenuOpen} />

      {/* Main Content Landmark */}
      <main id="main-content" className="w-full flex-1 pb-20 pt-14 sm:pb-24 sm:pt-16" tabIndex={-1}>
        <ErrorBoundary componentName="Hero Section">
          <Hero />
        </ErrorBoundary>

        <ErrorBoundary componentName="About Section">
          <About />
        </ErrorBoundary>

        <ErrorBoundary componentName="Selected Work Section">
          <Projects />
        </ErrorBoundary>

        <ErrorBoundary componentName="Case Studies Section">
          <CaseStudies />
        </ErrorBoundary>

        <ErrorBoundary componentName="Technical Arsenal Section">
          <TechStack />
        </ErrorBoundary>

        <ErrorBoundary componentName="Achievements Section">
          <Achievements />
        </ErrorBoundary>

        <ErrorBoundary componentName="Currently Building Section">
          <CurrentWork />
        </ErrorBoundary>

        <ErrorBoundary componentName="Contact Section">
          <Contact />
        </ErrorBoundary>
      </main>

      {/* Quick Navigation Social Dock */}
      <SocialDock hidden={isMenuOpen} />

      {/* Colophon & Footer */}
      <Footer />
    </div>
  );
};

export default App;
