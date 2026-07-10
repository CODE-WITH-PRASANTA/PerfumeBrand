import React, { useState, useEffect } from 'react';
import { Star, Minus, Plus, X } from 'lucide-react';
import './HomeDeal.css';

// --- Image Imports ---
import imageAersace from '../../assets/perfume1.webp';
import hoverAersace from '../../assets/perfume2.webp';
import imageBlackWild from '../../assets/perfume3.webp';
import hoverBlackWild from '../../assets/perfume4.webp';
import imageCaramelDream from '../../assets/perfume5.webp';
import hoverCaramelDream from '../../assets/perfume6.webp';
import imageKleinWomen from '../../assets/perfume7.webp';
import hoverKleinWomen from '../../assets/perfume8.webp';
import imageAromeParfum from '../../assets/perfume9.webp';
import hoverAromeParfum from '../../assets/perfume10.webp';
import imageBrownDevotion from '../../assets/perfume11.webp';
import hoverBrownDevotion from '../../assets/perfume12.webp';

const PRODUCTS = [
  { id: 1, name: "Aersace For Men", rating: 5, reviews: 1, price: 50.99, originalPrice: null, discount: null, image: imageAersace, hoverImage: hoverAersace, sku: "101", stock: 80, colors: ["Gold", "Red", "Black"], weights: ["100ML", "200ML", "300ML"] },
  { id: 2, name: "Black Wild Fragrance", rating: 4, reviews: 2, price: 30.00, originalPrice: 60.00, discount: "-50%", image: imageBlackWild, hoverImage: hoverBlackWild, sku: "102", stock: 15, colors: ["Black"], weights: ["100ML"] },
  { id: 3, name: "Men Caramel Dream", rating: 5, reviews: 1, price: 50.00, originalPrice: 60.00, discount: "-16%", image: imageCaramelDream, hoverImage: hoverCaramelDream, sku: "103", stock: 45, colors: ["Amber"], weights: ["100ML", "200ML"] },
  { id: 4, name: "Klein Women Spray", rating: 5, reviews: 1, price: 99.00, originalPrice: null, discount: null, image: imageKleinWomen, hoverImage: hoverKleinWomen, sku: "104", stock: 12, colors: ["Pink"], weights: ["100ML"] },
  { id: 5, name: "Arome Le Parfum", rating: 4, reviews: 3, price: 79.00, originalPrice: null, discount: null, image: imageAromeParfum, hoverImage: hoverAromeParfum, sku: "105", stock: 4, colors: ["Clear"], weights: ["100ML", "200ML"] },
  { id: 6, name: "Brown Devotion Man", rating: 5, reviews: 1, price: 50.00, originalPrice: null, discount: null, image: imageBrownDevotion, hoverImage: hoverBrownDevotion, sku: "106", stock: 22, colors: ["Blue"], weights: ["100ML"] }
];

const COLOR_MAP = {
  Gold: '#D4AF37', Red: '#8B0000', Black: '#1A1A1A', Amber: '#FFBF00', Pink: '#FFB6C1', Clear: '#E2E8F0', Blue: '#1E3A8A'
};

const HomeDeal = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 175, hours: 3, minutes: 13, seconds: 32 });
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeModalImg, setActiveModalImg] = useState(null); // Track selected picture inside modal
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    let totalSeconds = timeLeft.days * 86400 + timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds;
    const timer = setInterval(() => {
      if (totalSeconds <= 0) { clearInterval(timer); return; }
      totalSeconds--;
      setTimeLeft({
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setActiveModalImg(product.image); // Set initial main layout photo matching default item card
    setQuantity(1);
    setSelectedWeight(product.weights[0] || "100ML");
    setSelectedColor(product.colors[0] || "");
  };

  return (
    <div className="deal-container">
      <div className="deal-card">
        
        {/* Header Section */}
        <div className="deal-header">
          <h2 className="deal-title">Deal Of The Day</h2>
          
          <div className="timer-group">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HRS', value: timeLeft.hours },
              { label: 'MIN', value: timeLeft.minutes },
              { label: 'SEC', value: timeLeft.seconds }
            ].map((item, idx, arr) => (
              <React.Fragment key={item.label}>
                <div className="timer-box">
                  <span className="timer-value">{String(item.value).padStart(2, '0')}</span>
                  <span className="timer-label">{item.label}</span>
                </div>
                {idx < arr.length - 1 && <span className="timer-divider">:</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Product Grid Layout */}
        <div className="products-grid">
          {PRODUCTS.map((product) => {
            const isHovered = hoveredProductId === product.id;
            return (
              <div
                key={product.id}
                onClick={() => handleProductSelect(product)}
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(null)}
                className="product-item-card"
              >
                <div className="product-img-wrapper">
                  <img
                    src={isHovered ? product.hoverImage : product.image}
                    alt={product.name}
                    className="product-img"
                  />
                </div>

                <div className="product-info-container">
                  <h3 className="product-name-heading">{product.name}</h3>
                  
                  <div className="rating-container">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < product.rating ? 'star-filled' : 'star-empty'}
                      />
                    ))}
                    <span className="rating-count">({product.reviews})</span>
                  </div>

                  <div className="price-matrix">
                    <span className="current-price">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                    )}
                    {product.discount && <span className="discount-tag">{product.discount}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- Detail Modal View --- */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content-window" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProduct(null)} className="modal-close-btn">
              <X size={20} />
            </button>

            {/* Left Side: Media Display */}
            <div className="modal-media-pane">
              <div className="modal-main-img-box">
                <img src={activeModalImg} alt={selectedProduct.name} className="modal-main-img" />
              </div>
              <div className="thumbnail-carousel-row">
                {[selectedProduct.image, selectedProduct.hoverImage].map((img, i) => (
                  <div 
                    key={i} 
                    className={`thumb-wrapper ${activeModalImg === img ? 'active' : ''}`}
                    onClick={() => setActiveModalImg(img)}
                  >
                    <img src={img} alt={`thumb-${i}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Configuration & Details */}
            <div className="modal-info-pane">
              <div className="modal-details-scroll-area">
                <nav className="modal-breadcrumb">
                  Home / <span>{selectedProduct.name}</span>
                </nav>
                
                <span className="sku-badge">Sku: {selectedProduct.sku}</span>

                <div className="modal-stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="star-filled" />
                  ))}
                  <span className="rating-count">({selectedProduct.reviews})</span>
                </div>

                <h1 className="modal-product-title">{selectedProduct.name}</h1>
                <p className="modal-product-price">${selectedProduct.price.toFixed(2)}</p>

                <div className="modal-divider" />

                {/* Stock tracker */}
                <div className="stock-meter-container">
                  <p className="stock-warning-text">Only {selectedProduct.stock} items left in stock!</p>
                  <div className="stock-meter-bar">
                    <div className="stock-meter-fill" style={{ width: `${Math.min((selectedProduct.stock / 100) * 100, 100)}%` }} />
                  </div>
                </div>

                {/* Variants Control */}
                <div className="variants-wrapper">
                  {/* Colors */}
                  <div>
                    <span className="variant-label">Color: <span className="variant-selected-value">{selectedColor}</span></span>
                    <div className="color-options-row">
                      {selectedProduct.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          style={{ backgroundColor: COLOR_MAP[color] || '#CCCCCC' }}
                          className={`color-picker-dot ${selectedColor === color ? 'selected' : ''}`}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Weights */}
                  <div>
                    <span className="variant-label">Weight: <span className="variant-selected-value">{selectedWeight}</span></span>
                    <div className="weight-options-row">
                      {selectedProduct.weights.map((wt) => (
                        <button
                          key={wt}
                          onClick={() => setSelectedWeight(wt)}
                          className={`weight-pill-btn ${selectedWeight === wt ? 'active' : ''}`}
                        >
                          {wt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Counter */}
                  <div>
                    <span className="variant-label">Quantity</span>
                    <div className="quantity-counter">
                      <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="quantity-btn">
                        <Minus size={14} />
                      </button>
                      <span className="quantity-display-value">{quantity}</span>
                      <button onClick={() => setQuantity(q => q + 1)} className="quantity-btn">
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Purchase Actions */}
              <div className="modal-actions-footer">
                <button className="action-btn-primary">ADD TO CART</button>
                <button className="action-btn-secondary">BUY IT NOW</button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default HomeDeal;