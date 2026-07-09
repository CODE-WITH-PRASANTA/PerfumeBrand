import React, { useState } from 'react';
import './PerfumeHomeBlack.css';

// Import local assets
import perfumeImg1 from '../../assets/perfume1.webp';
import perfumeImg2 from '../../assets/perfume2.webp';
import perfumeImg3 from '../../assets/perfume3.webp';
import perfumeImg4 from '../../assets/perfume4.webp';
import perfumeImg5 from '../../assets/perfume5.webp';
import perfumeImg6 from '../../assets/perfume6.webp';
import perfumeImg7 from '../../assets/perfume7.webp';
import perfumeImg8 from '../../assets/perfume8.webp';

const perfumeData = [
  { id: 1, name: "Black Wild Fragrance", colorName: "red", colorHex: "#5E3A4E", price: 30.00, oldPrice: 60.00, sku: "3010", stock: 8, rating: 4, img: perfumeImg1 },
  { id: 2, name: "Midnight Noir Luxury", colorName: "black", colorHex: "#111111", price: 45.00, oldPrice: 90.00, sku: "3011", stock: 3, rating: 5, img: perfumeImg2 },
  { id: 3, name: "Velvet Amber Essence", colorName: "amber", colorHex: "#D4A373", price: 35.00, oldPrice: 70.00, sku: "3012", stock: 5, rating: 4, img: perfumeImg3 },
  { id: 4, name: "Classic Gold Premium", colorName: "gold", colorHex: "#B58A3D", price: 50.00, oldPrice: 100.00, sku: "3013", stock: 12, rating: 5, img: perfumeImg4 },
  { id: 5, name: "Ocean Breeze Fresh", colorName: "green", colorHex: "#A4C3B2", price: 28.00, oldPrice: 56.00, sku: "3014", stock: 2, rating: 3, img: perfumeImg5 },
  { id: 6, name: "Mystic Royale Blue", colorName: "blue", colorHex: "#2B4C7E", price: 42.00, oldPrice: 84.00, sku: "3015", stock: 6, rating: 4, img: perfumeImg6 },
  { id: 7, name: "Sweet Rose Petals", colorName: "pink", colorHex: "#E0909A", price: 34.00, oldPrice: 68.00, sku: "3016", stock: 7, rating: 5, img: perfumeImg7 },
  { id: 8, name: "Deep Forest Woods", colorName: "darkgreen", colorHex: "#1C352D", price: 48.00, oldPrice: 96.00, sku: "3017", stock: 4, rating: 4, img: perfumeImg8 }
];

const PerfumeHomeBlack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0); 
  const [selectedWeight, setSelectedWeight] = useState("100g");
  const [quantity, setQuantity] = useState(1);
  const [hoveredColor, setHoveredColor] = useState("");
  const [openAccordion, setOpenAccordion] = useState(null);

  const currentPerfume = perfumeData[currentIndex];

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(perfumeData.length - 5); 
    }
  };

  const handleNext = () => {
    if (startIndex < perfumeData.length - 5) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0); 
    }
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const visiblePerfumes = perfumeData.slice(startIndex, startIndex + 5);

  return (
    <div className="PerfumeHomeBlack-container">
      <div className="PerfumeHomeBlack-layout">
        
        {/* LEFT SIDE: Images & Upgraded Carousel */}
        <div className="PerfumeHomeBlack-left">
          <div className="PerfumeHomeBlack-main-img-wrapper">
            <img 
              src={currentPerfume.img} 
              alt={currentPerfume.name} 
              className="PerfumeHomeBlack-main-img" 
            />
            <div className="PerfumeHomeBlack-zoom-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
            </div>
          </div>

          {/* Precision Carousel Container */}
          <div className="PerfumeHomeBlack-carousel-outer">
            <button className="PerfumeHomeBlack-carousel-arrow left" onClick={handlePrev}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            
            <div className="PerfumeHomeBlack-thumbnails-container">
              {visiblePerfumes.map((perfume) => {
                const globalIndex = perfumeData.findIndex(p => p.id === perfume.id);
                return (
                  <div 
                    key={perfume.id} 
                    className={`PerfumeHomeBlack-thumb-box ${globalIndex === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(globalIndex)}
                  >
                    <img src={perfume.img} alt={perfume.name} />
                  </div>
                );
              })}
            </div>

            <button className="PerfumeHomeBlack-carousel-arrow right" onClick={handleNext}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M9 19l7-7-7-7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Details */}
        <div className="PerfumeHomeBlack-right">
          <div className="PerfumeHomeBlack-breadcrumbs">Home / {currentPerfume.name}</div>
          <div className="PerfumeHomeBlack-sku">Sku: {currentPerfume.sku}</div>
          
          <div className="PerfumeHomeBlack-rating">
            {"★".repeat(currentPerfume.rating)}{"☆".repeat(5 - currentPerfume.rating)}
            <span className="PerfumeHomeBlack-rating-count">({currentPerfume.rating})</span>
          </div>

          <h1 className="PerfumeHomeBlack-title">{currentPerfume.name}</h1>

          <div className="PerfumeHomeBlack-price-row">
            <span className="PerfumeHomeBlack-current-price">${currentPerfume.price.toFixed(2)}</span>
            <span className="PerfumeHomeBlack-old-price">${currentPerfume.oldPrice.toFixed(2)}</span>
            <span className="PerfumeHomeBlack-badge sale">SALE</span>
            <span className="PerfumeHomeBlack-badge percent">-50%</span>
          </div>

          <div className="PerfumeHomeBlack-stock-bar">
            <div className="PerfumeHomeBlack-stock-text">Only {currentPerfume.stock} items in stock!</div>
            <div className="PerfumeHomeBlack-progress-line" style={{width: `${(currentPerfume.stock/15)*100}%`}}></div>
          </div>

          {/* Color Selection */}
          <div className="PerfumeHomeBlack-section">
            <span className="PerfumeHomeBlack-label">Color:</span> 
            <span className="PerfumeHomeBlack-value">{hoveredColor || currentPerfume.colorName}</span>
            <div className="PerfumeHomeBlack-color-swatches">
              {perfumeData.map((perfume, idx) => (
                <div 
                  key={perfume.id} 
                  className={`PerfumeHomeBlack-swatch-wrapper ${idx === currentIndex ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredColor(perfume.colorName)}
                  onMouseLeave={() => setHoveredColor("")}
                  onClick={() => setCurrentIndex(idx)}
                >
                  <span className="PerfumeHomeBlack-swatch" style={{ backgroundColor: perfume.colorHex }}></span>
                  {hoveredColor === perfume.colorName && (
                    <div className="PerfumeHomeBlack-tooltip">{perfume.colorName}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Weight Selection */}
          <div className="PerfumeHomeBlack-section">
            <span className="PerfumeHomeBlack-label">Weight:</span> 
            <span className="PerfumeHomeBlack-value">{selectedWeight}</span>
            <div className="PerfumeHomeBlack-weight-options">
              {["100g", "200g", "500g"].map((weight) => (
                <button 
                  key={weight} 
                  className={`PerfumeHomeBlack-weight-btn ${selectedWeight === weight ? 'active' : ''}`}
                  onClick={() => setSelectedWeight(weight)}
                >
                  {weight}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="PerfumeHomeBlack-quantity-section">
            <span className="PerfumeHomeBlack-label">Quantity</span>
            <div className="PerfumeHomeBlack-actions-row">
              <div className="PerfumeHomeBlack-qty-selector">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
                <input type="number" value={quantity} readOnly />
                <button onClick={() => setQuantity(q => q + 1)}>+</button>
              </div>
              <button className="PerfumeHomeBlack-btn primary">ADD TO CART</button>
            </div>
          </div>

          <button className="PerfumeHomeBlack-btn secondary">BUY IT NOW</button>

          {/* Graphical Trust Checkout Box */}
          <div className="PerfumeHomeBlack-checkout-box">
            <div className="PerfumeHomeBlack-checkout-title">Guaranteed safe checkout</div>
            <div className="PerfumeHomeBlack-trust-badges">
              {/* VISA */}
              <svg className="payment-logo" viewBox="0 0 24 15" width="38" height="24">
                <rect width="24" height="15" fill="#1A1F71" rx="2"/>
                <path d="M4 11.5l.8-4.8h1.2l-.8 4.8H4zm5.5-4.8c-.3-.2-.7-.3-1.1-.3-1.2 0-2 0-2.5.7l-.1-.5H4.7l.8 4.8h1.3l.5-3.1c.1-.4.5-.7.9-.7.3 0 .6.1.7.3.2.2.2.5.1.8l-.5 2.1h1.3l.6-3.4c.1-.7-.3-1.2-1.1-1.2zm4.3 1.1l-.3-1.1h-1	l-1.2 4.8h1.3l.3-1.2h1.4l.1 1.2h1.3l-1.9-4.8zm-1.1 2.5l.4-1.6.5 1.6h-.9zm6.2-3.6h-1.2c-.3 0-.6.2-.7.5l-1.9 4.3h1.3l.3-.8h1.5l.1.8h1.2l-1-4.8z" fill="#FFF"/>
              </svg>
              {/* MASTERCARD */}
              <svg className="payment-logo" viewBox="0 0 24 15" width="38" height="24">
                <rect width="24" height="15" fill="#222" rx="2"/>
                <circle cx="10" cy="7.5" r="4.5" fill="#EB001B"/>
                <circle cx="14" cy="7.5" r="4.5" fill="#FF5F00" fillOpacity="0.8"/>
              </svg>
              {/* AMEX */}
              <svg className="payment-logo" viewBox="0 0 24 15" width="38" height="24">
                <rect width="24" height="15" fill="#01A6E5" rx="2"/>
                <text x="3" y="10.5" fill="#FFF" fontSize="6" fontWeight="bold" fontFamily="sans-serif">AMEX</text>
              </svg>
              {/* PAYPAL */}
              <svg className="payment-logo" viewBox="0 0 24 15" width="38" height="24">
                <rect width="24" height="15" fill="#FFF" stroke="#EBEBEB" strokeWidth="1" rx="2"/>
                <path d="M8 4.5h2.5c1.2 0 1.8.5 1.6 1.4-.2 1.1-1 1.6-2.1 1.6H9.1l-.5 2.8H7.5l1.1-6.3z" fill="#003087"/>
                <path d="M9.5 5.5h2.5c1.2 0 1.8.5 1.6 1.4-.2 1.1-1 1.6-2.1 1.6H10.6l-.5 2.8H9l1.1-6.3z" fill="#0079C1" opacity="0.6"/>
              </svg>
              {/* DISCOVER */}
              <svg className="payment-logo" viewBox="0 0 24 15" width="38" height="24">
                <rect width="24" height="15" fill="#F4F4F4" stroke="#EBEBEB" rx="2"/>
                <text x="2" y="9.5" fill="#222" fontSize="4.5" fontWeight="900" fontFamily="sans-serif">DISCOVER</text>
                <circle cx="17.5" cy="7.5" r="2" fill="#FF6600"/>
              </svg>
            </div>
          </div>

          {/* Accordions */}
          <div className="PerfumeHomeBlack-accordions">
            <div className="PerfumeHomeBlack-accordion-item">
              <div className="PerfumeHomeBlack-accordion-header" onClick={() => toggleAccordion('desc')}>
                <span>☆ Product Description</span>
                <span className="arrow-indicator">{openAccordion === 'desc' ? '⎯' : '＋'}</span>
              </div>
              {openAccordion === 'desc' && (
                <div className="PerfumeHomeBlack-accordion-content">
                  <p>Experience the brilliant sensory depths of our premium formulation. Hand-blended under intense precision, this signature scent offers long-lasting top notes of wild citrus, smoothly decaying into rich musky undertones. Perfect for luxury wear across day or evening events.</p>
                </div>
              )}
            </div>

            <div className="PerfumeHomeBlack-accordion-item">
              <div className="PerfumeHomeBlack-accordion-header" onClick={() => toggleAccordion('privacy')}>
                <span>☉ Our Privacy policy</span>
                <span className="arrow-indicator">{openAccordion === 'privacy' ? '⎯' : '＋'}</span>
              </div>
              {openAccordion === 'privacy' && (
                <div className="PerfumeHomeBlack-accordion-content">
                  <p>Your privacy is strictly guarded. Any identity metrics, transaction accounts, or contact details managed during standard order checkouts remain fully encrypted end-to-end. We do not sell your transactional data logs to third-party aggregators under any circumstances.</p>
                </div>
              )}
            </div>
          </div>

          {/* Social Icons Share Line */}
          <div className="PerfumeHomeBlack-share-row">
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/></svg>
              Facebook
            </span>
            <span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Twitter
            </span>
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.22 2.62 7.83 6.35 9.31-.09-.79-.17-2 .03-2.86.19-.78 1.2-5.16 1.2-5.16s-.31-.61-.31-1.52c0-1.42.82-2.48 1.85-2.48.87 0 1.29.65 1.29 1.44 0 .88-.56 2.19-.85 3.41-.24 1.01.51 1.84 1.51 1.84 1.82 0 3.22-1.92 3.22-4.69 0-2.45-1.76-4.17-4.28-4.17-2.91 0-4.62 2.19-4.62 4.45 0 .88.34 1.82.76 2.32.08.1.1.17.07.29-.08.33-.25 1.01-.28 1.14-.04.17-.14.21-.33.12-1.24-.58-2.02-2.4-2.02-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.19 6.21-1.01 0-1.97-.53-2.3-1.14l-.62 2.38c-.22.86-.83 1.94-1.24 2.6 1 .31 2.06.48 3.16.48 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
              Pin it
            </span>
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/></svg>
              Share more
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PerfumeHomeBlack;