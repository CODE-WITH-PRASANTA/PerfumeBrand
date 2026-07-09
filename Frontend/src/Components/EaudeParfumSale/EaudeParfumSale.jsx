import React, { useState, useEffect, useRef } from 'react';
import './EaudeParfumSale.css';

import product1Primary from "../../assets/perfume1.webp";
import product1Secondary from "../../assets/perfume2.webp";
import product2Primary from "../../assets/perfume3.webp";
import product2Secondary from "../../assets/perfume4.webp";
import product3Primary from "../../assets/perfume5.webp";
import product3Secondary from "../../assets/perfume6.webp";
import product4Primary from "../../assets/perfume7.webp";
import product4Secondary from "../../assets/perfume8.webp";

// FIXED: Removed quotation marks so they reference the imported variables directly
const PRODUCT_DATA = [
  {
    id: 1,
    title: "Essence Pour Home",
    price: 90.00,
    originalPrice: null,
    rating: 3,
    badge: "Sold out",
    badgeType: "soldout",
    imgPrimary: product1Primary,
    imgSecondary: product1Secondary,
    colors: ["#dfa071", "#c58f62", "#d9b48f", "#782a39"],
    sizes: ["100ML", "200ML", "500ML"]
  },
  {
    id: 2,
    title: "Arome Virtual Flower",
    price: 800.00,
    originalPrice: 900.00,
    rating: 5,
    badge: "Save 11%",
    badgeType: "discount",
    imgPrimary: product2Primary,
    imgSecondary: product2Secondary,
    colors: ["#e07a5f", "#f4f1de", "#3d5a80", "#293241"],
    sizes: ["100ML", "200ML"]
  },
  {
    id: 3,
    title: "Aersace For Men",
    price: 50.99,
    originalPrice: null,
    rating: 5,
    badge: null,
    badgeType: null,
    imgPrimary: product3Primary,
    imgSecondary: product3Secondary,
    colors: ["#4a5759", "#dedbd2", "#f7ede2"],
    sizes: ["100ML", "200ML", "500ML"]
  },
  {
    id: 4,
    title: "Black Wild Fragrance",
    price: 30.00,
    originalPrice: 60.00,
    rating: 4,
    badge: "Save 50%",
    badgeType: "discount",
    imgPrimary: product4Primary,
    imgSecondary: product4Secondary,
    colors: ["#222222", "#444444", "#888888"],
    sizes: ["100ML", "500ML"]
  }
];

const EaudeParfumSale = () => {
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("100ML");
  const [quantity, setQuantity] = useState(1);
  const sliderRef = useRef(null);

  // Automatic Smooth Scroll Loop Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current && !activeModalProduct) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: 280, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [activeModalProduct]);

  const handleManualScroll = (direction) => {
    if (sliderRef.current) {
      const offset = direction === 'left' ? -320 : 320;
      sliderRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const openQuickView = (product) => {
    setActiveModalProduct(product);
    setSelectedColor(0);
    setSelectedSize(product.sizes[0]);
    setQuantity(1);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star-glyph ${i < rating ? 'filled' : 'empty'}`}>★</span>
    ));
  };

  return (
    <div className="sale-products-wrapper">
      {/* HEADER CONTROLS SECTION */}
      <div className="sale-products-header">
        <h2 className="sale-title-typography">Sale Collection Products</h2>
        <div className="carousel-navigation-arrows">
          <button className="nav-arrow-btn" onClick={() => handleManualScroll('left')} aria-label="Scroll left">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="nav-arrow-btn" onClick={() => handleManualScroll('right')} aria-label="Scroll right">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* PRODUCTS SLIDER GRID */}
      <div className="products-carousel-track" ref={sliderRef}>
        {PRODUCT_DATA.map((product) => (
          <div key={product.id} className="product-card-container">
            <div className="product-image-card-box">
              {product.badge && (
                <span className={`product-status-tag ${product.badgeType}`}>
                  {product.badge}
                </span>
              )}
              
              {/* Dual State Image Layer */}
              <div className="card-image-display-frame">
                <img src={product.imgPrimary} alt={product.title} className="primary-img" />
                <img src={product.imgSecondary} alt={`${product.title} perspective`} className="secondary-hover-img" />
              </div>

              {/* Action Hover Utilities Bar Panel */}
              <div className="card-interactive-action-overlay">
                <button className="action-circle-icon-btn" title="Add to Cart">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                </button>
                <button className="action-circle-icon-btn highlight-eye" onClick={() => openQuickView(product)} title="Quick View Product">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
                <button className="action-circle-icon-btn" title="Add to Wishlist">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* PRODUCT DETAILS TEXT BLOCK */}
            <div className="product-meta-text-details">
              <div className="product-stars-row">{renderStars(product.rating)}</div>
              <h3 className="product-item-title">{product.title}</h3>
              <div className="product-item-prices">
                <span className="current-sale-price">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="original-strikethrough-price">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* QUICK VIEW POPUP DIALOGUE MODAL */}
      {activeModalProduct && (
        <div className="quickview-portal-backdrop" onClick={() => setActiveModalProduct(null)}>
          <div className="quickview-modal-surface" onClick={(e) => e.stopPropagation()}>
            <button className="quickview-dismiss-panel-btn" onClick={() => setActiveModalProduct(null)} aria-label="Close modal">
              ✕
            </button>
            
            <div className="quickview-two-column-layout">
              {/* MODAL LEFT CONTAINER */}
              <div className="quickview-media-pane">
                <img src={activeModalProduct.imgPrimary} alt={activeModalProduct.title} />
              </div>

              {/* MODAL RIGHT CONTAINER */}
              <div className="quickview-specifications-pane">
                <h1 className="modal-product-header">{activeModalProduct.title}</h1>
                
                <div className="modal-pricing-row-panel">
                  <span className="modal-current-price">${activeModalProduct.price.toFixed(2)}</span>
                  {activeModalProduct.originalPrice && (
                    <>
                      <span className="modal-strikethrough-price">${activeModalProduct.originalPrice.toFixed(2)}</span>
                      <span className="modal-sale-capsule-tag">Sale</span>
                      <span className="modal-percentage-capsule-tag">
                        -{Math.round(((activeModalProduct.originalPrice - activeModalProduct.price) / activeModalProduct.originalPrice) * 100)}%
                      </span>
                    </>
                  )}
                  {activeModalProduct.badgeType === 'soldout' && (
                    <span className="modal-soldout-capsule-tag">Sold out</span>
                  )}
                </div>

                <hr className="modal-divider-rule" />

                {/* COLOR SELECTION PICKER */}
                <div className="modal-variant-selector-group">
                  <span className="variant-label-title">Color: <span className="variant-selected-value">Selection</span></span>
                  <div className="variant-swatch-list">
                    {activeModalProduct.colors.map((color, idx) => (
                      <button 
                        key={idx} 
                        className={`color-swatch-circle-btn ${selectedColor === idx ? 'active-swatch' : ''}`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(idx)}
                        aria-label={`Select color variant ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* SIZE SELECTION PICKER */}
                <div className="modal-variant-selector-group">
                  <span className="variant-label-title">Weight: <span className="variant-selected-value">{selectedSize}</span></span>
                  <div className="variant-size-tabs-row">
                    {activeModalProduct.sizes.map((size) => (
                      <button 
                        key={size} 
                        className={`size-tab-btn ${selectedSize === size ? 'active-size-tab' : ''}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* QUANTITY & PRIMARY ACTION PANEL */}
                <div className="modal-purchase-actions-row">
                  <div className="quantity-stepper-counter-box">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                    <input type="number" value={quantity} readOnly />
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                  </div>
                  
                  <button 
                    className={`modal-cart-action-btn ${activeModalProduct.badgeType === 'soldout' ? 'disabled-state' : ''}`} 
                    disabled={activeModalProduct.badgeType === 'soldout'}
                  >
                    {activeModalProduct.badgeType === 'soldout' ? 'SOLD OUT' : 'ADD TO CART'}
                  </button>
                </div>

                <button className="modal-instant-buy-now-btn">BUY IT NOW</button>

                <a href="#details" className="modal-view-full-details-anchor-link">
                  View full details <span className="arrow-diagonal">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EaudeParfumSale;