import React from 'react';
import './Topbar.css';

const Topbar = ({ onToggleSidebar }) => {
  return (
    <header className="topbar">
      <div className="topbar__left">
        <button 
          className="topbar__toggle-btn" 
          onClick={onToggleSidebar}
          aria-label="Toggle Side Drawer Menu Navigation"
        >
          ☰
        </button>
        <span className="topbar__brand">Maison de Parfum</span>
      </div>
      
      <div className="topbar__right">
        <div className="topbar__profile">
          <span>👑 Admin Control</span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;