import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleSidebarToggle = () => {
    if (window.innerWidth <= 768) {
      setIsMobileOpen(!isMobileOpen);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  // Safe window-resizing cleanup cycle 
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
          {children ? children : (
            <div>
              <h2>Perfume Brand Admin Overview</h2>
              <p>Welcome back! Select an option from the sidebar panel to begin tracking operations.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;