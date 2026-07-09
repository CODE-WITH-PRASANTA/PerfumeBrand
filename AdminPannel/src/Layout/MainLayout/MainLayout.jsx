import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import './MainLayout.css';

const MainLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleSidebarToggle = () => {
    if (window.innerWidth <= 768) {
      // Toggle side-drawer behavior for smaller mobile touch displays
      setIsMobileOpen(!isMobileOpen);
    } else {
      // Collapse desktop view to mini-icons mode
      setIsCollapsed(!isCollapsed);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="main-layout">
      {/* Mobile structural blur-overlay background */}
      <div 
        className={`main-layout__overlay ${isMobileOpen ? 'main-layout__overlay--active' : ''}`}
        onClick={() => setIsMobileOpen(false)}
      />

      <Sidebar isCollapsed={isCollapsed} isMobileOpen={isMobileOpen} />
      
      <div className="main-layout__content-area">
        <Topbar onToggleSidebar={handleSidebarToggle} />
        <main className="main-layout__page-content">
          {/* 
            Replacing children with Outlet ensures react-router-dom knows 
            exactly where to render the targeted view components.
          */}
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default MainLayout;