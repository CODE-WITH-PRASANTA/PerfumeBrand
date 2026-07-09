import React from 'react';
import './Footer.css'; 

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="Footer-container">
      
      {/* Scroll-to-Top Button (Styled exactly like the double-arrow in the reference) */}
      <button 
        onClick={scrollToTop}
        className="Footer-scrollTop"
        aria-label="Scroll to top"
      >
        <span className="Footer-arrowUp">︾</span>
      </button>

      {/* Main Grid Content */}
      <div className="Footer-grid">
        
        {/* Column 1: Brand Info */}
        <div className="Footer-brand">
          <div className="Footer-logoContainer">
            {/* Custom SVG replicating the exact layout icon structure */}
            <svg className="Footer-logoSvg" viewBox="0 0 100 100" width="36" height="36">
              <path fill="currentColor" d="M50 15c-12 0-18 12-18 25 0 15 12 30 18 45 6-15 18-30 18-45 0-13-6-25-18-25zm0 35c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"/>
            </svg>
            <div className="Footer-logoText">
              <span className="Footer-brandName">AROME</span>
              <span className="Footer-brandSub">PERFUME SHOP</span>
            </div>
          </div>
          
          <p className="Footer-description">
            Arome® was founded on the belief that wellness is more than just a necessity—it's a powerful expression of self-care and vitality.
          </p>

          {/* Social Media Brands Container */}
          <div className="Footer-socials">
            <a href="#" className="Footer-socialIcon" aria-label="X"><span className="icon-x">𝕏</span></a>
            <a href="#" className="Footer-socialIcon" aria-label="Instagram"><span>📸</span></a>
            <a href="#" className="Footer-socialIcon" aria-label="Facebook"><span>facebook</span></a>
            <a href="#" className="Footer-socialIcon" aria-label="Pinterest"><span>pinterest</span></a>
            <a href="#" className="Footer-socialIcon" aria-label="Snapchat"><span>👻</span></a>
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div className="Footer-column">
          <h4 className="Footer-heading">Useful Links</h4>
          <ul className="Footer-list">
            <li><a href="#" className="Footer-link"><span className="Footer-dash">-</span> My Account</a></li>
            <li><a href="#" className="Footer-link"><span className="Footer-dash">-</span> Shopping Cart</a></li>
            <li><a href="#" className="Footer-link"><span className="Footer-dash">-</span> My Wishlist</a></li>
            <li><a href="#" className="Footer-link"><span className="Footer-dash">-</span> Our Store Info</a></li>
          </ul>
        </div>

        {/* Column 3: Information */}
        <div className="Footer-column">
          <h4 className="Footer-heading">Information</h4>
          <ul className="Footer-list">
            <li><a href="#" className="Footer-link"><span className="Footer-dash">-</span> Order tracking</a></li>
            <li><a href="#" className="Footer-link"><span className="Footer-dash">-</span> WishList</a></li>
            <li><a href="#" className="Footer-link"><span className="Footer-dash">-</span> Privacy Policy</a></li>
            <li><a href="#" className="Footer-link"><span className="Footer-dash">-</span> Terms of Service</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="Footer-column">
          <h4 className="Footer-heading">Contact Info</h4>
          <div className="Footer-contactInfo">
            <p><a href="mailto:manager@arome.com">manager@arome.com</a></p>
            <p><a href="mailto:support@arome.com">support@arome.com</a></p>
            <p className="Footer-phoneSpace"><a href="tel:+12345678910">+12345 678 910</a></p>
            <p><a href="tel:+12345678109">+12345 678 109</a></p>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Payments, Copyright, Currency & Language */}
      <div className="Footer-bottomBar">
        
        {/* Replicated Payment Card Badges */}
        <div className="Footer-payments">
          <div className="Footer-badge badge-visa">VISA</div>
          <div className="Footer-badge badge-mastercard">
            <span className="circle-red"></span>
            <span className="circle-orange"></span>
          </div>
          <div className="Footer-badge badge-amex">AM EX</div>
          <div className="Footer-badge badge-paypal">PayPal</div>
          <div className="Footer-badge badge-diners">🔲</div>
          <div className="Footer-badge badge-discover">DISCOVER</div>
        </div>

        {/* Copyright Text */}
        <div className="Footer-copyright">
          © 2026, ♡ Designed By Team90degree
        </div>

        {/* Localization UI Selectors */}
        <div className="Footer-selectors">
          <div className="Footer-selectWrapper">
            <select className="Footer-select" defaultValue="USD">
              <option value="USD">USD $</option>
            </select>
            <span className="Footer-selectArrow">⌵</span>
          </div>

          <div className="Footer-selectWrapper">
            <select className="Footer-select" defaultValue="EN">
              <option value="EN">ENGLISH</option>
            </select>
            <span className="Footer-selectArrow">⌵</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;