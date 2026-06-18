import { useState, useEffect } from 'react';

export const DESKTOP_WIDTH = 1920;
export const DESKTOP_HEIGHT = 1080;
export const TAB_WIDTH = 1200;
export const MOBILE_WIDTH = 414;

export type LayoutMode = 'desktop' | 'tablet' | 'mobile';

export function useResponsiveLayout() {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('desktop');
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Prevent horizontal scrolling at the document level
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';

    const updateLayout = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (width <= 900) {
        // Mobile Layout: Cap scale at 1.5x to prevent massive zoomed elements on wide phones
        setLayoutMode('mobile');
        const newScale = Math.min(width / MOBILE_WIDTH, 1.5);
        setScale(newScale);
        setOffset(Math.max(0, (width - (MOBILE_WIDTH * newScale)) / 2));
      } else if (width <= 1280) {
        // Tablet Layout: Scale to fit width perfectly, natural vertical scroll
        setLayoutMode('tablet');
        const newScale = width / TAB_WIDTH;
        setScale(newScale);
        setOffset(Math.max(0, (width - (TAB_WIDTH * newScale)) / 2));
      } else {
        // Desktop Layout: Scale to fit within both width and height viewport constraints
        setLayoutMode('desktop');
        const scaleX = width / DESKTOP_WIDTH;
        const scaleY = height / DESKTOP_HEIGHT;
        setScale(Math.min(scaleX, scaleY));
        setOffset(0); // Desktop uses flexbox centering
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  return { layoutMode, scale, offset };
}