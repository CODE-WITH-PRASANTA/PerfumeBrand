import React, { useState } from 'react';
import logoImg from '../../assets/logo.png'; // Proper import for local image

import { 
  FiSearch, 
  FiUser, 
  FiHeart, 
  FiShoppingBag, 
  FiChevronDown, 
  FiMenu, 
  FiX 
} from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setActiveMobileDropdown(null);
  };

  const toggleMobileDropdown = (menuName) => {
    setActiveMobileDropdown(activeMobileDropdown === menuName ? null : menuName);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Mobile Menu Icon */}
        <div className="navbar-mobile-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </div>

        {/* Left Section: Navigation Links */}
        <div className={`navbar-links-section ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-nav-list">
            
            {/* Home - Direct Link (No Dropdown) */}
            <li className="navbar-nav-item">
              <a href="/" className="navbar-nav-link-pure main-title-hover">HOME</a>
            </li>

            {/* About Dropdown */}
            <li className="navbar-nav-item">
              <button 
                className="navbar-nav-link main-title-hover" 
                onClick={() => toggleMobileDropdown('about')}
              >
                ABOUT <FiChevronDown className={`navbar-chevron ${activeMobileDropdown === 'about' ? 'rotated' : ''}`} />
              </button>
              <ul className={`navbar-dropdown-menu ${activeMobileDropdown === 'about' ? 'mobile-visible' : ''}`}>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/all-perfumes">All Perfumes</a></li>
                <li><a href="/limited-edition">Limited Edition</a></li>
                <li><a href="/faq">FAQ</a></li>
              </ul>
            </li>

            {/* Category Dropdown (Updated with your list) */}
            <li className="navbar-nav-item">
              <button 
                className="navbar-nav-link main-title-hover" 
                onClick={() => toggleMobileDropdown('category')}
              >
                CATEGORY <FiChevronDown className={`navbar-chevron ${activeMobileDropdown === 'category' ? 'rotated' : ''}`} />
              </button>
              <ul className={`navbar-dropdown-menu ${activeMobileDropdown === 'category' ? 'mobile-visible' : ''}`}>
                <li><a href="/eau-de-parfum">Eau de Parfum</a></li>
                <li><a href="/eau-de-toilette">Eau de Toilette</a></li>
                <li><a href="/body-mists">Body Mists</a></li>
                <li><a href="/travel-sizes">Travel Sizes</a></li>
              </ul>
            </li>

            <li className="navbar-nav-item">
              <a href="/blog" className="navbar-nav-link-pure main-title-hover">BLOG</a>
            </li>

            <li className="navbar-nav-item">
              <a href="/contact" className="navbar-nav-link-pure main-title-hover">CONTACT</a>
            </li>

          </ul>
        </div>

        {/* Center Section: Logo */}
        <div className="navbar-logo-section">
          <a href="/">
            <img src={logoImg} alt="AROME LOGO" className="navbar-logo-img" />
          </a>
        </div>

        {/* Right Section: Actions */}
        <div className="navbar-actions-section">
          <div className="navbar-search-container">
            <input type="text" placeholder="Search our store" className="navbar-search-input" />
            <FiSearch className="navbar-search-icon" size={18} />
          </div>

          <div className="navbar-icons-group">
            <a href="/account" className="navbar-action-btn"><FiUser size={22} /></a>
            <a href="/wishlist" className="navbar-action-btn">
                <FiHeart size={22} />
                <span className="navbar-badge">0</span>
            </a>
            <a href="/cart" className="navbar-action-btn">
                <FiShoppingBag size={22} />
                <span className="navbar-badge">0</span>
            </a>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;