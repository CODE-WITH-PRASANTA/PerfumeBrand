import React, { useState, useEffect, useRef } from 'react';
import { FiUser, FiSettings, FiLogOut, FiChevronDown } from 'react-icons/fi';
import './Topbar.css';

const Topbar = ({ onToggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown cleanly if clicking anywhere outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        {/* Profile Dropdown Wrapper */}
        <div className="topbar__profile-container" ref={dropdownRef}>
          <button 
            className={`topbar__profile-trigger ${isDropdownOpen ? 'topbar__profile-trigger--active' : ''}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="topbar__avatar">
              <span>A</span>
            </div>
            <div className="topbar__user-info">
              <span className="topbar__username">Admin Control</span>
              <span className="topbar__role">Super Admin</span>
            </div>
            <FiChevronDown className={`topbar__arrow ${isDropdownOpen ? 'topbar__arrow--rotate' : ''}`} />
          </button>

          {/* Contextual Action Menu Overlay */}
          {isDropdownOpen && (
            <div className="topbar__dropdown">
              <a href="/profile" className="topbar__dropdown-item">
                <FiUser className="topbar__dropdown-icon" />
                <span>My Profile</span>
              </a>
              <a href="/settings" className="topbar__dropdown-item">
                <FiSettings className="topbar__dropdown-icon" />
                <span>Settings</span>
              </a>
              <hr className="topbar__dropdown-divider" />
              <button 
                className="topbar__dropdown-item topbar__dropdown-item--logout"
                onClick={() => console.log("Logging out...")}
              >
                <FiLogOut className="topbar__dropdown-icon" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;