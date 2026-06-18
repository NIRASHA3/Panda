import React from 'react';
import DesktopTabletContent from '../shared/DesktopTabletContent';
import { DESKTOP_WIDTH, DESKTOP_HEIGHT } from '../../hooks/useResponsiveLayout';

interface DesktopViewProps {
  readonly scale: number;
}

export default function DesktopView({ scale }: DesktopViewProps) {
  return (
    <div className="panda-desktop-shell" style={{ display: 'flex' }}>
      <div style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          width: `${DESKTOP_WIDTH}px`,
          height: `${DESKTOP_HEIGHT}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          flexShrink: 0,
        }}>
          <DesktopTabletContent />
        </div>
      </div>
    </div>
  );
}