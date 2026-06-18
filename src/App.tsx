import React from 'react';
import { useResponsiveLayout } from './hooks/useResponsiveLayout';
import DesktopView from './components/views/DesktopView';
import TabletView from './components/views/TabletView';
import MobileView from './components/views/MobileView';
import './App.css';

export default function App() {
  const { layoutMode, scale, offset } = useResponsiveLayout();

  return (
    <div className="panda-page" style={{ width: '100%', overflowX: 'hidden' }}>
      {layoutMode === 'desktop' && <DesktopView scale={scale} />}
      {layoutMode === 'tablet' && <TabletView scale={scale} leftOffset={offset} />}
      {layoutMode === 'mobile' && <MobileView scale={scale} leftOffset={offset} />}
    </div>
  );
}