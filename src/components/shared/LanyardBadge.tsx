import React, { Suspense, lazy } from 'react';
import { isWebGLAvailable } from '../../utils/webgl';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';

const LazyLanyard = lazy(() => import('../reactbits/Lanyard'));

interface LanyardBadgeProps {
  className?: string;
}

export const LanyardBadge: React.FC<LanyardBadgeProps> = ({ className = '' }) => {
  const prefersReducedMotion = useReducedMotion();
  const hasWebGL = isWebGLAvailable();

  const shouldRender3D = hasWebGL && !prefersReducedMotion;

  // Accessible Static Fallback Card
  const StaticBadgeFallback = (
    <div
      className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-gradient-to-b from-background-surface to-background p-6 shadow-surface"
      aria-label="Tarun R. Developer Identity Badge (Static Display)"
      role="img"
    >
      {/* Top Lanyard Clip Representation */}
      <div className="flex items-center justify-between border-b border-border/70 pb-3 font-mono text-[11px] text-foreground-muted">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-metallic" />
          <span>SECURITY // PASS_V2</span>
        </div>
        <span className="rounded border border-border bg-background px-2 py-0.5 text-[10px] uppercase text-foreground-secondary">
          AUTHENTICATED
        </span>
      </div>

      {/* Visual Badge Card Display */}
      <div className="my-auto flex flex-col items-center py-4">
        <div className="group relative w-48 overflow-hidden rounded-lg border border-border/80 bg-background-surface shadow-xl transition-transform duration-300 hover:scale-105 sm:w-56">
          <img
            src="/images/profile/badge-front.png"
            alt="Tarun R. — AI & Systems Developer Official Credential"
            className="h-auto w-full object-cover"
            loading="lazy"
            width={800}
            height={1125}
          />
        </div>
        <p className="mt-3 font-mono text-[11px] text-foreground-muted">
          ID: TRB_89 // CSBS_RIT_CHENNAI
        </p>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between border-t border-border/70 pt-3 font-mono text-[10px] text-foreground-muted">
        <span>MODE: ACCESSIBLE_STATIC</span>
        <span className="text-metallic">STATUS: LEVEL_01_CLEARANCE</span>
      </div>
    </div>
  );

  return (
    <div
      className={`relative flex h-[440px] w-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-background-surface/60 sm:h-[500px] ${className}`}
      aria-label="Interactive 3D Lanyard Identity Badge"
    >
      {shouldRender3D ? (
        <Suspense
          fallback={
            <div className="flex h-full w-full items-center justify-center font-mono text-xs text-foreground-muted">
              <RefreshCw className="mr-2 h-4 w-4 animate-spin text-metallic" />
              <span>INITIALIZING 3D BADGE KINEMATICS...</span>
            </div>
          }
        >
          <div className="relative h-full w-full">
            <LazyLanyard
              frontImage="/images/profile/badge-front.png"
              backImage="/images/profile/badge-back.png"
              cardColor="#0E0E0E"
              orientation="portrait"
              finish="metallic"
              cornerRadius={0.25}
              size={0.65}
              strapLength={0.52}
              strapColor="#1A1A1A"
              strapWidth={0.65}
              metal="silver"
              gravity={1.2}
              damping={0.6}
              elasticity={0.4}
              breeze={0.3}
              interactive={true}
              intro={true}
              className="cursor-target h-full w-full cursor-grab active:cursor-grabbing"
            />

            {/* Interactive Instruction Pill */}
            <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-border/80 bg-background/90 px-3 py-1 font-mono text-[10px] text-foreground-secondary shadow-sm backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-metallic" />
              <span>DRAG BADGE // VERLET ROPE SIMULATION</span>
            </div>
          </div>
        </Suspense>
      ) : (
        StaticBadgeFallback
      )}
    </div>
  );
};

export default LanyardBadge;
