import React from 'react';
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

export const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-between bg-background text-foreground antialiased selection:bg-metallic selection:text-background">
      {/* Cinematic Background Film Grain */}
      <Noise opacity={0.03} fixed={true} zIndex={15} />

      {/* Primary Sticky Navigation */}
      <Navigation />

      {/* Main Content Landmark */}
      <main id="main-content" className="w-full flex-1" tabIndex={-1}>
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
      <SocialDock />

      {/* Colophon & Footer */}
      <Footer />
    </div>
  );
};

export default App;
