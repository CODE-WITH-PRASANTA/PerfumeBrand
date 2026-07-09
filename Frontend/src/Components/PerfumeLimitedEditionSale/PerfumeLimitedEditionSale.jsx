import React, { useRef, useState } from 'react';
import './PerfumeLimitedEditionSale.css';

// Replace these mock paths with your actual asset imports
import perfumeImg1 from '../../assets/perfume1.webp'; 
import perfumeImg2 from '../../assets/perfume2.webp';
import perfumeImg3 from '../../assets/perfume3.webp';
import perfumeImg4 from '../../assets/perfume4.webp';
import perfumeImg5 from '../../assets/perfume5.webp';
import perfumeImg6 from '../../assets/perfume6.webp';
import perfumeImg7 from '../../assets/perfume7.webp';
import perfumeImg8 from '../../assets/perfume8.webp';

const MOCK_SALE_PRODUCTS = [
  {
    id: 5,
    name: 'Essence Pour Home',
    price: 90.00,
    oldPrice: null,
    rating: 3,
    badge: 'Sold out',
    primaryImage: perfumeImg1,
    hoverImage: perfumeImg5,
  },
  {
    id: 6,
    name: 'Arome Virtual Flower',
    price: 800.00,
    oldPrice: 900.00,
    rating: 5,
    badge: 'Save 11%',
    primaryImage: perfumeImg2,
    hoverImage: perfumeImg6,
  },
  {
    id: 7,
    name: 'Aersace For Men',
    price: 50.99,
    oldPrice: null,
    rating: 5,
    badge: null,
    primaryImage: perfumeImg3,
    hoverImage: perfumeImg7,
  },
  {
    id: 8,
    name: 'Black Wild Fragrance',
    price: 30.00,
    oldPrice: 60.00,
    rating: 4,
    badge: 'Save 50%',
    primaryImage: perfumeImg4,
    hoverImage: perfumeImg8,
  },
  {
    id: 9,
    name: 'Brown Devotion Man',
    price: 50.00,
    oldPrice: null,
    rating: 5,
    badge: 'Trending',
    primaryImage: perfumeImg7,
    hoverImage: perfumeImg3,
  },
  {
    id: 10,
    name: 'Velvet Oud Intense',
    price: 120.00,
    oldPrice: 150.00,
    rating: 5,
    badge: 'New',
    primaryImage: perfumeImg6,
    hoverImage: perfumeImg2,
  }
];

const PerfumeLimitedEditionSale = () => {
  const sliderRef = useRef(null);
  // Track hovered item IDs to swap images individually
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      // Find the actual width of a single card dynamically to move exactly one item forward/backward
      const firstCard = sliderRef.current.querySelector('.sale-product-card');
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const gap = 20; // Matches CSS gap
        const scrollAmount = cardWidth + gap;

        if (direction === 'left') {
          sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  const handleActionClick = (e, actionType, productName) => {
    e.preventDefault();
    e.stopPropagation(); // Prevents clicking the buttons from triggering the page navigation
    alert(`${actionType} clicked for: ${productName}`);
  };

  return (
    <div className="sale-section-wrapper">
      {/* Top Header Controls bar */}
      <div className="sale-header-row">
        <h2 className="sale-section-title">Sale Collection Products</h2>
        <div className="slider-arrow-controls">
          <button 
            className="arrow-btn btn-left" 
            onClick={() => scrollSlider('left')}
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            className="arrow-btn btn-right" 
            onClick={() => scrollSlider('right')}
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable Slider Area */}
      <div className="slider-scroll-viewport" ref={sliderRef}>
        {MOCK_SALE_PRODUCTS.map((product) => (
          <div 
            key={product.id} 
            className="sale-product-card"
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            
            {/* Clickable Image Container */}
            <a href={`#/product/${product.id}`} className="product-media-link">
              <div className="product-media-box">
                {product.badge && (
                  <span className={`sale-badge ${product.badge.toLowerCase().includes('sold') ? 'sold-out' : ''}`}>
                    {product.badge}
                  </span>
                )}
                
                {/* Dynamically swaps source image on hover */}
                <img 
                  src={hoveredProductId === product.id ? product.hoverImage : product.primaryImage} 
                  alt={product.name} 
                  className="sale-product-image" 
                />
                
                {/* Embedded Hover Action Buttons (Cart, Eye, Heart) */}
                <div className="media-overlay-actions">
                  <button 
                    className="icon-action-circle" 
                    onClick={(e) => handleActionClick(e, 'Add to Cart', product.name)}
                    title="Add to Cart"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                  </button>
                  <button 
                    className="icon-action-circle" 
                    onClick={(e) => handleActionClick(e, 'Quick View', product.name)}
                    title="Quick View"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                  <button 
                    className="icon-action-circle" 
                    onClick={(e) => handleActionClick(e, 'Add to Wishlist', product.name)}
                    title="Add to Wishlist"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </a>

            {/* Product Meta Text Content */}
            <div className="product-info-box">
              <div className="star-rating-row">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span 
                    key={index} 
                    className={`star-symbol ${index < product.rating ? 'filled-star' : 'empty-star'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <h3 className="sale-product-title">
                <a href={`#/product/${product.id}`}>{product.name}</a>
              </h3>
              <div className="sale-price-row">
                <span className="current-sale-price">${product.price.toFixed(2)}</span>
                {product.oldPrice && <span className="slashed-sale-price">${product.oldPrice.toFixed(2)}</span>}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default PerfumeLimitedEditionSale;