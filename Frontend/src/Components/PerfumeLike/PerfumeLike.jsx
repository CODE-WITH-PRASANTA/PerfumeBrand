import React, { useState } from 'react';
import './PerfumeLike.css';

// Import your main and hover images from your assets folder
import loveMain from '../../assets/perfume1.webp';
import loveHover from '../../assets/perfume2.webp'; 
import orchidMain from '../../assets/perfume3.webp';
import orchidHover from '../../assets/perfume4.webp';
import aromeMain from '../../assets/perfume5.webp';
import aromeHover from '../../assets/perfume6.webp';
import brownMain from '../../assets/perfume7.webp';
import brownHover from '../../assets/perfume8.webp';

const PERFUME_DATA = [
  {
    id: 'love-edition',
    title: 'Love Edition For Her',
    price: '$30.00',
    oldPrice: '$60.00',
    saveBadge: 'Save 50%',
    mainImg: loveMain,
    hoverImg: loveHover, // Fallback to main if no alternative is added
  },
  {
    id: 'orchid-flora',
    title: 'Orchid Flora Geous',
    price: '$75.00',
    oldPrice: null,
    saveBadge: null,
    mainImg: orchidMain,
    hoverImg: orchidHover,
  },
  {
    id: 'arome-virtual',
    title: 'Arome Virtual Flower',
    price: '$800.00',
    oldPrice: '$900.00',
    saveBadge: 'Save 11%',
    mainImg: aromeMain,
    hoverImg: aromeHover,
  },
  {
    id: 'brown-devotion',
    title: 'Brown Devotion Man',
    price: '$50.00',
    oldPrice: null,
    saveBadge: null,
    mainImg: brownMain,
    hoverImg: brownHover, // Matches your second image swap exactly
  }
];

const PerfumeLike = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const handleCardClick = (id) => {
    // Navigates to another detail page by product ID
    window.location.href = `/products/${id}`;
  };

  return (
    <section className="PerfumeLike-wrapper">
      <h2 className="PerfumeLike-section-title">You May Also Like</h2>
      
      <div className="PerfumeLike-grid-container">
        {PERFUME_DATA.map((product) => {
          const isHovered = hoveredCardId === product.id;
          
          return (
            <div 
              key={product.id}
              className="PerfumeLike-card"
              onClick={() => handleCardClick(product.id)}
              onMouseEnter={() => setHoveredCardId(product.id)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              {/* Card Top Display Box */}
              <div className="PerfumeLike-image-frame">
                {product.saveBadge && (
                  <span className="PerfumeLike-badge">{product.saveBadge}</span>
                )}
                
                <img 
                  src={isHovered ? product.hoverImg : product.mainImg} 
                  alt={product.title} 
                  className="PerfumeLike-display-image"
                />

                {/* Floating Utility Circle Buttons shown on point/hover */}
                <div className={`PerfumeLike-action-toolbar ${isHovered ? 'visible' : ''}`}>
                  <button className="toolbar-icon-btn" title="Add to Cart" onClick={(e) => e.stopPropagation()}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </button>
                  <button className="toolbar-icon-btn" title="Quick View" onClick={(e) => e.stopPropagation()}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                  <button className="toolbar-icon-btn" title="Add to Wishlist" onClick={(e) => e.stopPropagation()}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Card Meta Description Details */}
              <div className="PerfumeLike-info-block">
                <div className="PerfumeLike-stars-row">★★★★★</div>
                <h3 className="PerfumeLike-item-title">{product.title}</h3>
                <div className="PerfumeLike-pricing-row">
                  <span className="price-current">{product.price}</span>
                  {product.oldPrice && (
                    <span className="price-slashed">{product.oldPrice}</span>
                  )}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PerfumeLike;