import React, { useState } from 'react';
import './PerfumeWishlist.css';

// Pre-configured hooks ready for your own asset files inside the src/assets/ folder
import perfume1 from '../../assets/perfume1.webp';
import perfume2 from '../../assets/perfume2.webp';
import perfume3 from '../../assets/perfume3.webp';
import perfume4 from '../../assets/perfume4.webp';
import perfume5 from '../../assets/perfume5.webp';
import perfume6 from '../../assets/perfume6.webp';

const INITIAL_WISHLIST = [
  {
    id: 'arome-le-parfum',
    title: 'Arome Le Parfum',
    price: 999.00,
    rating: '★★★★★',
    //  Removed quotes to use the imported variable directly
    image: perfume1 
  },
  {
    id: 'orchid-flora-geous',
    title: 'Orchid Flora Geous',
    price: 75.00,
    rating: '★★★★★',
    //  Removed quotes to use the imported variable directly
    image: perfume2
  },
];

const COLOR_VARIANTS = [
  { id: 'black', name: 'Black', fallbackColor: '#252525' },
  { id: 'blue', name: 'Blue', fallbackColor: '#A2C2E1' },
  { id: 'pink', name: 'Pink', fallbackColor: '#EBBEC6' },
  { id: 'green', name: 'Green', fallbackColor: '#D18D53' }
];

const PerfumeWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(INITIAL_WISHLIST);
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  
  // Interactive Modal Internal Controls
  const [selectedColor, setSelectedColor] = useState('Black');
  const [hoveredColor, setHoveredColor] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('100g');
  const [quantity, setQuantity] = useState(1);

  // Removals handler triggered on Love button click
  const handleRemoveItem = (id, e) => {
    e.stopPropagation();
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  // Launch modal view on eye button click OR bag button click
  const handleOpenModalView = (product, e) => {
    e.stopPropagation();
    setActiveModalProduct(product);
    setQuantity(1); // resets default counters
    setSelectedColor('Black');
    setSelectedWeight('100g');
  };

  // Simulated link forwarding page handler
  const handleRedirectAction = (pageName, e) => {
    e.stopPropagation();
    alert(`Redirecting system route to the external "${pageName}" page.`);
  };

  /* ================= 1. EMPTY WISHLIST WINDOW STATE ================= */
  if (wishlistItems.length === 0) {
    return (
      <div className="wishlist-component-scope empty-state-active">
        <div className="empty-center-card">
          <div className="empty-icon-container">
            <svg viewBox="0 0 64 64" fill="none" className="box-svg-element" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22L32 10L52 22L32 34L12 22Z" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M12 22V44L32 56V34L12 22Z" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M52 22V44L32 56V34L52 22Z" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M26 26C26 26 28 29 32 29C36 29 38 26 38 26" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="25" cy="20" r="1.5" fill="#1a1a1a"/>
              <circle cx="39" cy="20" r="1.5" fill="#1a1a1a"/>
            </svg>
          </div>
          <h2 className="empty-main-heading">Your wishlist is empty</h2>
          <p className="empty-sub-text">No products were added to the wishlist page.</p>
          <button className="back-shopping-button" onClick={() => setWishlistItems(INITIAL_WISHLIST)}>
            BACK TO SHOPPING
          </button>
        </div>
      </div>
    );
  }

  /* ================= 2. ACTIVE GRID WINDOW STATE ================= */
  return (
    <div className="wishlist-component-scope main-grid-active">
      <div className="wishlist-responsive-grid">
        {wishlistItems.map((product) => (
          <div key={product.id} className="perfume-product-card">
            <div className="card-image-wrapper">
              <img src={product.image} alt={product.title} className="perfume-primary-render" />
              
              {/* Overlay controls panel triggered cleanly upon hover */}
              <div className="card-hover-actions-panel">
                <button 
                  className="action-round-node" 
                  title="Add to Card / Quick View"
                  onClick={(e) => handleOpenModalView(product, e)}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                </button>
                
                <button 
                  className="action-round-node" 
                  title="Quick View Details" 
                  onClick={(e) => handleOpenModalView(product, e)}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </button>
                
                <button 
                  className="action-round-node filled-wishlist-node" 
                  title="Remove Item From Wishlist"
                  onClick={(e) => handleRemoveItem(product.id, e)}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                </button>
              </div>
            </div>

            <div className="card-info-footer">
              <div className="star-rating-row">{product.rating}</div>
              <h3 className="perfume-title-text">{product.title}</h3>
              <div className="perfume-price-tag">${product.price.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= 3. REFERENCE QUICK VIEW MODAL OVERLAY ================= */}
      {activeModalProduct && (
        <div className="modal-fixed-overlay" onClick={() => setActiveModalProduct(null)}>
          <div className="modal-window-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-dismiss-cross" onClick={() => setActiveModalProduct(null)}>×</button>
            
            <div className="modal-content-split">
              {/* Gallery Side Section */}
              <div className="modal-left-gallery">
                <img src={activeModalProduct.image} alt={activeModalProduct.title} className="modal-main-display-img" />
              </div>

              {/* Attributes Configurator Side Section */}
              <div className="modal-right-configurator">
                <h1 className="modal-product-heading">{activeModalProduct.title}</h1>
                
                <div className="modal-pricing-block">
                  <span className="price-primary">${activeModalProduct.price.toFixed(2)}</span>
                  <span className="discount-pill">-0%</span>
                </div>

                {/* Variant Selector Zone with Dynamic Pointer Feedback */}
                <div className="variant-options-wrapper">
                  <span className="option-title-label">
                    Color: <span className="highlight-current-value">{hoveredColor || selectedColor}</span>
                  </span>
                  <div className="variant-swatch-flex-row">
                    {COLOR_VARIANTS.map((v) => (
                      <div 
                        key={v.id}
                        className={`swatch-ring-container ${selectedColor === v.name ? 'swatch-ring-selected' : ''}`}
                        onMouseEnter={() => setHoveredColor(v.name)}
                        onMouseLeave={() => setHoveredColor('')}
                        onClick={() => setSelectedColor(v.name)}
                      >
                        <div className="swatch-solid-circle" style={{ backgroundColor: v.fallbackColor }} />
                        
                        {/* Hover Tooltip Render Engine */}
                        {hoveredColor === v.name && (
                          <div className="swatch-floating-tooltip">{v.name}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weight Options Zone */}
                <div className="variant-options-wrapper">
                  <span className="option-title-label">Weight: <span className="highlight-current-value">{selectedWeight}</span></span>
                  <div className="weight-chips-flex-row">
                    {['100g', '200g', '500g'].map((w) => (
                      <button
                        key={w}
                        className={`weight-selection-chip ${selectedWeight === w ? 'weight-chip-selected' : ''}`}
                        onClick={() => setSelectedWeight(w)}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Controls & Add to Cart Action Row */}
                <div className="quantity-and-cart-row">
                  <div className="quantity-counter-widget">
                    <button className="qty-step-btn" onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}>−</button>
                    <span className="qty-display-number">{quantity}</span>
                    <button className="qty-step-btn" onClick={() => setQuantity(q => q + 1)}>+</button>
                  </div>
                  <button 
                    className="modal-action-button primary-plum-btn"
                    onClick={(e) => handleRedirectAction('Add to Cart', e)}
                  >
                    ADD TO CART
                  </button>
                </div>

                {/* Buy it Now Action Button */}
                <button 
                  className="modal-action-button primary-plum-btn buy-now-spacing"
                  onClick={(e) => handleRedirectAction('Buy It Now', e)}
                >
                  BUY IT NOW
                </button>

                {/* Full Details Redirect Link */}
                <button 
                  className="full-details-redirect-trigger"
                  onClick={(e) => handleRedirectAction('Full Product Details', e)}
                >
                  View full details <span className="diagonal-arrow-glyph">↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerfumeWishlist;