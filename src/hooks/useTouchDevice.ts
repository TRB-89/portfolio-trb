import { useEffect, useState } from 'react';

/**
 * Detects whether the primary input device is a touch screen.
 * Disables mouse-following shaders or magnet effects on touch devices.
 */
export function useTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };
    setIsTouch(checkTouch());
  }, []);

  return isTouch;
}
