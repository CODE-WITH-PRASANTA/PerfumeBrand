import React, { useState } from 'react';
import './HomeLookbook.css';

// Importing assets directly as requested
import lookbookBanner from '../../assets/Lookbook 1.webp'; 
import arVirtualFlower from '../../assets/perfume3.webp'; 
import arVirtualFlower1 from '../../assets/perfume2.webp'; 
import arLeParfum from '../../assets/perfume1.webp';  
import arLeParfum1 from '../../assets/perfume4.webp';    
import menCaramelDream from '../../assets/perfume5.webp'; 
import menCaramelDream1 from '../../assets/perfume6.webp'; 

const ALL_PRODUCTS = [
  {
    id: 1,
    title: "Arome Virtual Flower",
    price: 800.00,
    originalPrice: 900.00,
    rating: 5,
    badge: "Save 11%",
    badgeType: "discount",
    image: arVirtualFlower,
    hoverImage: arVirtualFlower1,
  },
  {
    id: 2,
    title: "Arome Le Parfum",
    price: 999.00,
    originalPrice: null,
    rating: 5,
    badge: null,
    badgeType: null,
    image: arLeParfum,
    hoverImage: arLeParfum1
  },
  {
    id: 3,
    title: "Men Caramel Dream",
    price: 50.00,
    originalPrice: 60.00,
    rating: 5,
    badge: "Sold out",
    badgeType: "soldout",
    image: menCaramelDream,
    hoverImage: menCaramelDream1
  }
];

const HomeLookbook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredProductId, setHoveredProductId] = useState(null);

  // Exact sliding windows matching screenshots 1, 2, and 3 respectively
  const pageItems = [
    [ALL_PRODUCTS[0], ALL_PRODUCTS[1]], // Screen 1: Virtual Flower + Le Parfum
    [ALL_PRODUCTS[1], ALL_PRODUCTS[2]], // Screen 2: Le Parfum + Caramel Dream
    [ALL_PRODUCTS[2], ALL_PRODUCTS[0]]  // Screen 3: Caramel Dream + Virtual Flower
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i} className="lookbook-star">★</span>
    ));
  };

  const handleActionClick = (productTitle, e) => {
    e.stopPropagation();
    alert(`Added ${productTitle} to cart!`);
  };

  return (
    <div className="lookbook-section-container">
      {/* HEADER BLOCK */}
      <div className="lookbook-header-block">
        <h2 className="lookbook-main-title">Shop The Lookbook</h2>
        <p className="lookbook-subtitle">Each fragrance crafted to complement unique essence</p>
      </div>

      {/* CORE GRID */}
      <div className="lookbook-grid-layout">
        
        {/* LEFT COLUMN: HERO LOOKBOOK BANNER WITH HOTSPOTS */}
        <div className="lookbook-hero-banner-pane">
          <img src={lookbookBanner} alt="Shop the lookbook banner" className="lookbook-banner-media" />
          
          {/* Positioned hotspots matching layout */}
          <div className="lookbook-hotspot hotspot-one" title="View product info">
            <span className="hotspot-inner-core"></span>
          </div>
          <div className="lookbook-hotspot hotspot-two" title="View product info">
            <span className="hotspot-inner-core"></span>
          </div>
          <div className="lookbook-hotspot hotspot-three" title="View product info">
            <span className="hotspot-inner-core"></span>
          </div>
        </div>

        {/* RIGHT COLUMN: CAROUSEL FRAGRANCE TRACK */}
        <div className="lookbook-carousel-wrapper">
          <div className="lookbook-products-display-row">
            {pageItems[currentPage].map((product) => (
              <div 
                key={product.id} 
                className="lookbook-product-card"
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(null)}
              >
                <div className="lookbook-product-media-box">
                  
                  {/* Badge Label Rendering */}
                  {product.badge && (
                    <span className={`lookbook-badge-pill ${product.badgeType}`}>
                      {product.badge}
                    </span>
                  )}

                  {/* Primary Product Canvas Asset - Switches to hoverImage smoothly when hovered */}
                  <img 
                    src={hoveredProductId === product.id && product.hoverImage ? product.hoverImage : product.image} 
                    alt={product.title} 
                    className="lookbook-product-image" 
                  />

                  {/* UTILITY HOVER ACTION ELEMENT OVERLAY */}
                  <div className="lookbook-card-hover-overlay">
                    <button 
                      className="lookbook-hover-action-circular-btn"
                      onClick={(e) => handleActionClick(product.title, e)}
                      title="Quick Action"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* TEXT DATA CAPTIONS */}
                <div className="lookbook-product-meta-block">
                  <div className="lookbook-stars-row">{renderStars(product.rating)}</div>
                  <h3 className="lookbook-item-title-typography">{product.title}</h3>
                  <div className="lookbook-pricing-row">
                    <span className="lookbook-price-active">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="lookbook-price-strikethrough">${product.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CONTROL PAGINATION STEPS FOOTER */}
          <div className="lookbook-pagination-controls-row">
            {pageItems.map((_, index) => (
              <button
                key={index}
                className={`lookbook-pagination-dot-btn ${currentPage === index ? 'dot-active' : ''}`}
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to page ${index + 1}`}
              >
                <span className="dot-outer-ring">
                  <span className="dot-inner-center"></span>
                </span>
              </button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default HomeLookbook;