import React, { useRef, useState, useEffect } from 'react';
import DesktopTabletContent from '../shared/DesktopTabletContent';
import { TAB_WIDTH } from '../../hooks/useResponsiveLayout';

interface TabletViewProps {
  readonly scale: number;
  readonly leftOffset: number;
}

export default function TabletView({ scale, leftOffset }: TabletViewProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [wrapperHeight, setWrapperHeight] = useState<number | 'auto'>('auto');

  useEffect(() => {
    if (!contentRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      if (contentRef.current) {
        setWrapperHeight(Math.ceil(contentRef.current.getBoundingClientRect().height));
      }
    });
    resizeObserver.observe(contentRef.current);
    return () => resizeObserver.disconnect();
  }, [scale]);

  return (
    <div className="panda-tab-shell" style={{ display: 'block' }}>
      <div style={{ position: 'relative', width: '100%', height: wrapperHeight === 'auto' ? 'auto' : `${wrapperHeight}px`, overflow: 'hidden' }}>
        <div 
          ref={contentRef} 
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            width: `${TAB_WIDTH}px`,
            position: 'absolute',
            top: 0,
            left: `${leftOffset}px`,
          }}
        >
          <DesktopTabletContent />
        </div>
      </div>
    </div>
  );
}