import React, { useState, useMemo } from 'react';
import './EaudeParfumProduct.css';

// --- IMAGE ASSET IMPORTS ---
import img1Front from "../../assets/perfume1.webp";
import img1Back from '../../assets/perfume2.webp';
import img2Front from '../../assets/perfume3.webp';
import img2Back from '../../assets/perfume4.webp';
import img3Front from '../../assets/perfume5.webp';
import img3Back from '../../assets/perfume6.webp';
import img4Front from '../../assets/perfume7.webp';
import img4Back from '../../assets/perfume8.webp';
import img5Front from '../../assets/all1.webp';
import img5Back from '../../assets/all2.webp';
import img6Front from '../../assets/all3.webp';
import img6Back from '../../assets/all4.webp';
import img7Front from '../../assets/all5.webp';
import img7Back from "../../assets/all6.webp";
import img8Front from '../../assets/all7.webp';
import img8Back from '../../assets/pr1.webp';
import img9Front  from '../../assets/pr2.webp';
import img9Back from '../../assets/perfume2.webp';
import img10Front from '../../assets/perfume4.webp';
import img10Back from '../../assets/perfume6.webp';

// 10 Mock products with normalized attributes matching your screenshot needs
const MOCK_PRODUCTS = [
  { id: 1, name: "Love Edition For Her", price: 30.00, oldPrice: 60.00, rating: 5, tag: "Save 50%", tagType: "save", frontImage: img1Front, backImage: img1Back, isSoldOut: false, availability: "In stock", notes: "Vanilla", gender: "Women", longevity: "4–6 hours", color: "Pink", weight: "100ML", category: "Face Powder", brand: "Arome" },
  { id: 2, name: "Arome Le Parfum", price: 999.00, oldPrice: null, rating: 5, tag: null, tagType: null, frontImage: img2Front, backImage: img2Back, isSoldOut: false, availability: "In stock", notes: "Bergamot", gender: "Unisex", longevity: "Very Strong", color: "Gold", weight: "500g", category: "Face Powder", brand: "Arome Store" },
  { id: 3, name: "Aersace For Men", price: 50.99, oldPrice: null, rating: 5, tag: null, tagType: null, frontImage: img3Front, backImage: img3Back, isSoldOut: false, availability: "In stock", notes: "Sandalwood", gender: "Men", longevity: "Strong", color: "Blue", weight: "100ML", category: "Charging Cables", brand: "Perfume" },
  { id: 4, name: "Million Gold for Her", price: 50.00, oldPrice: null, rating: 4, tag: null, tagType: null, frontImage: img4Front, backImage: img4Back, isSoldOut: false, availability: "In stock", notes: "Vanilla", gender: "Women", longevity: "Moderate", color: "Gold", weight: "100g", category: "Doll House Playsets", brand: "Arome" },
  { id: 5, name: "Arome Virtual Flower", price: 800.00, oldPrice: 900.00, rating: 5, tag: "Save 11%", tagType: "save", frontImage: img5Front, backImage: img5Back, isSoldOut: false, availability: "In stock", notes: "Lavender", gender: "Couples", longevity: "Very Strong", color: "Green", weight: "200g", category: "Foraging Toys", brand: "Arome" },
  { id: 6, name: "Black Wild Fragrance", price: 30.00, oldPrice: 60.00, rating: 4, tag: "Save 50%", tagType: "save", frontImage: img6Front, backImage: img6Back, isSoldOut: false, availability: "In stock", notes: "Leather", gender: "Men", longevity: "Strong", color: "Black", weight: "100ML", category: "Foraging Toys", brand: "Srmani" },
  { id: 7, name: "Brown Devotion Man", price: 50.00, oldPrice: null, rating: 5, tag: null, tagType: null, frontImage: img7Front, backImage: img7Back, isSoldOut: false, availability: "In stock", notes: "Bergamot", gender: "Men", longevity: "8–12 hours", color: "Black", weight: "300g", category: "Toy Gift Baskets", brand: "Arome" },
  { id: 8, name: "Essence Pour Home", price: 900.00, oldPrice: null, rating: 3, tag: "Sold out", tagType: "soldout", frontImage: img8Front, backImage: img8Back, isSoldOut: true, availability: "Out of stock", notes: "Sandalwood", gender: "Unisex", longevity: "Very Strong", color: "Blue", weight: "500g", category: "Charging Cables", brand: "Arome" },
  { id: 9, name: "Orchid Flora Gorgeous", price: 75.00, oldPrice: null, rating: 5, tag: null, tagType: null, frontImage: img9Front, backImage: img9Back, isSoldOut: false, availability: "In stock", notes: "Lavender", gender: "Couples", longevity: "Strong", color: "Green", weight: "100ML", category: "Face Powder", brand: "Arome" },
  { id: 10, name: "Luxury Velvet Oud", price: 120.00, oldPrice: 150.00, rating: 5, tag: "Save 20%", tagType: "save", frontImage: img10Front, backImage: img10Back, isSoldOut: false, availability: "In stock", notes: "Vanilla", gender: "Women", longevity: "Strong", color: "Black", weight: "100ML", category: "Face Powder", brand: "Perfume" }
];

const EaudeParfumProduct = () => {
  const [columns, setColumns] = useState(4);
  const [sortBy, setSortBy] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Accordion Section Toggle state
  const [openFilters, setOpenFilters] = useState({
    availability: true, price: true, notes: true, gender: false,
    longevity: false, color: false, weight: false, category: false, brand: false
  });

  // Track checked filter options
  const [filters, setFilters] = useState({
    availability: [], notes: [], gender: [], longevity: [],
    color: [], weight: [], category: [], brand: []
  });
  const [priceRange, setPriceRange] = useState({ from: '', to: '' });

  // Quick view Modal Config states
  const [modalColor, setModalColor] = useState("red");
  const [modalWeight, setModalWeight] = useState("100ML");
  const [modalQuantity, setModalQuantity] = useState(1);

  const itemsPerPage = 6;

  const toggleFilterSection = (section) => {
    setOpenFilters(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCheckboxChange = (section, value) => {
    setFilters(prev => {
      const current = prev[section];
      const updated = current.includes(value) 
        ? current.filter(item => item !== value) 
        : [...current, value];
      return { ...prev, [section]: updated };
    });
    setCurrentPage(1);
  };

  // Compute metric item tallies dynamically from entire collection
  const getFilterCounts = (field) => {
    return MOCK_PRODUCTS.reduce((acc, product) => {
      const val = product[field];
      if (val) acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
  };

  // Filter and Sort Processing pipelines
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      for (const key in filters) {
        if (filters[key].length > 0 && !filters[key].includes(product[key])) {
          return false;
        }
      }
      if (priceRange.from && product.price < parseFloat(priceRange.from)) return false;
      if (priceRange.to && product.price > parseFloat(priceRange.to)) return false;
      return true;
    });
  }, [filters, priceRange]);

  const sortedAndFilteredProducts = useMemo(() => {
    let result = [...filteredProducts];
    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    }
    return result;
  }, [filteredProducts, sortBy]);

  const totalPages = Math.ceil(sortedAndFilteredProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedAndFilteredProducts.slice(start, start + itemsPerPage);
  }, [sortedAndFilteredProducts, currentPage]);

  const renderFilterOptions = (sectionName, dataField) => {
    const counts = getFilterCounts(dataField);
    return Object.keys(counts).map((option) => (
      <label key={option} className="checkbox-item-row">
        <input 
          type="checkbox" 
          checked={filters[sectionName].includes(option)}
          onChange={() => handleCheckboxChange(sectionName, option)}
        /> 
        <span>{option}</span>
        <span className="count-badge">({counts[option]})</span>
      </label>
    ));
  };

  return (
    <div className="perfume-marketplace-container">
      {/* HEADER CONTROLS VIEW */}
      <header className="marketplace-controls-header">
        <button className="mobile-filter-toggle-btn" onClick={() => setIsMobileFilterOpen(true)}>
          📁 Filters & Sort
        </button>

        <div className="column-layout-switchers">
          {[2, 3, 4].map(num => (
            <button 
              key={num}
              className={`switch-btn ${columns === num ? 'active' : ''}`} 
              onClick={() => setColumns(num)} 
              title={`${num} Columns`}
            >
              <span>{"|".repeat(num)}</span>
            </button>
          ))}
        </div>
        
        <div className="sorting-and-results-panel">
          <span className="sort-label-text">Sort by:</span>
          <select className="sort-native-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="Featured">Featured</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
          </select>
          <span className="product-count-indicator">{sortedAndFilteredProducts.length} products</span>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <div className="marketplace-main-layout">
        {/* SIDEBAR FILTER SYSTEM */}
        <aside className={`marketplace-sidebar-filters ${isMobileFilterOpen ? 'mobile-open' : ''}`}>
          <div className="mobile-sidebar-header">
            <h3>Filters</h3>
            <button className="close-sidebar-btn" onClick={() => setIsMobileFilterOpen(false)}>✕</button>
          </div>

          {/* Availability */}
          <div className="filter-block-wrapper">
            <button className="filter-header-trigger" onClick={() => toggleFilterSection('availability')}>
              <span>Availability</span>
              <span className={`chevron-icon ${openFilters.availability ? 'rotate' : ''}`}>∨</span>
            </button>
            {openFilters.availability && (
              <div className="filter-dropdown-content animate-fade">
                {renderFilterOptions('availability', 'availability')}
              </div>
            )}
          </div>

          {/* Price Range */}
          <div className="filter-block-wrapper">
            <button className="filter-header-trigger" onClick={() => toggleFilterSection('price')}>
              <span>Price</span>
              <span className={`chevron-icon ${openFilters.price ? 'rotate' : ''}`}>∨</span>
            </button>
            {openFilters.price && (
              <div className="filter-dropdown-content price-inputs-row animate-fade">
                <div className="input-group-cell">
                  <label>From</label>
                  <div className="price-input-prefix-box"><span>$</span>
                    <input type="number" placeholder="0" value={priceRange.from} onChange={(e) => setPriceRange({...priceRange, from: e.target.value})} />
                  </div>
                </div>
                <span className="range-dash-separator">—</span>
                <div className="input-group-cell">
                  <label>To</label>
                  <div className="price-input-prefix-box"><span>$</span>
                    <input type="number" placeholder="999.00" value={priceRange.to} onChange={(e) => setPriceRange({...priceRange, to: e.target.value})} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Dynamic Accordion Loops */}
          {[
            { name: 'notes', label: 'Notes', field: 'notes' },
            { name: 'gender', label: 'Gender', field: 'gender' },
            { name: 'longevity', label: 'Longevity', field: 'longevity' },
            { name: 'color', label: 'Color', field: 'color' },
            { name: 'weight', label: 'Weight', field: 'weight' },
            { name: 'category', label: 'Category', field: 'category' },
            { name: 'brand', label: 'Brand', field: 'brand' }
          ].map((item) => (
            <div className="filter-block-wrapper" key={item.name}>
              <button className="filter-header-trigger" onClick={() => toggleFilterSection(item.name)}>
                <span>{item.label}</span>
                <span className={`chevron-icon ${openFilters[item.name] ? 'rotate' : ''}`}>∨</span>
              </button>
              {openFilters[item.name] && (
                <div className="filter-dropdown-content animate-fade">
                  {renderFilterOptions(item.name, item.field)}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* PRODUCTS GRID */}
        <main className="marketplace-products-display">
          {paginatedProducts.length === 0 ? (
            <div className="no-products-fallback">No items match selected query parameters.</div>
          ) : (
            <div className={`products-responsive-grid cols-${columns}`}>
              {paginatedProducts.map((product) => {
                const isCurrentlyHovered = hoveredProductId === product.id;
                return (
                  <div 
                    className="product-card-container" 
                    key={product.id}
                    onMouseEnter={() => setHoveredProductId(product.id)}
                    onMouseLeave={() => setHoveredProductId(null)}
                  >
                    <div className="product-image-frame-container">
                      {product.tag && (
                        <span className={`product-status-tag ${product.tagType}`}>
                          {product.tag}
                        </span>
                      )}

                      <div className="product-display-image-wrapper">
                        <img 
                          src={isCurrentlyHovered ? product.backImage : product.frontImage} 
                          alt={product.name} 
                          className="product-display-image"
                          loading="lazy"
                        />
                      </div>

                      <div className={`product-hover-actions-sidebar ${isCurrentlyHovered ? 'visible' : ''}`}>
                        <button className="hover-action-btn" title="Add to Wishlist">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        </button>
                        <button className="hover-action-btn" title="Quick View" onClick={() => setSelectedProductForModal(product)}>
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </button>
                        <button className="hover-action-btn delete-bag-action" title="Add to Bag">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                        </button>
                      </div>
                    </div>

                    <div className="product-meta-details-box">
                      <div className="stars-rating-row-container">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span key={index} className={`star-element ${index < product.rating ? 'filled' : 'empty'}`}>★</span>
                        ))}
                      </div>
                      <h3 className="product-title-typography">{product.name}</h3>
                      <div className="pricing-labels-row">
                        <span className="current-price-label">${product.price.toFixed(2)}</span>
                        {product.oldPrice && <span className="slashed-old-price-label">${product.oldPrice.toFixed(2)}</span>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* PAGINATION PANEL */}
          {totalPages > 1 && (
            <footer className="pagination-navigation-container">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button 
                  key={i}
                  className={`pagination-node ${currentPage === i + 1 ? 'active-dark' : 'inactive-purple'}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button 
                className="pagination-node inactive-purple next-action"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </footer>
          )}
        </main>
      </div>

      {/* QUICK VIEW OVERLAY DIALOG */}
      {selectedProductForModal && (
        <div className="quickview-portal-backdrop-overlay" onClick={() => setSelectedProductForModal(null)}>
          <div className="quickview-modal-content-card animate-zoom" onClick={(e) => e.stopPropagation()}>
            <button className="close-portal-modal-trigger" onClick={() => setSelectedProductForModal(null)}>✕</button>
            
            <div className="quickview-modal-grid-split">
              <div className="quickview-visual-preview-pane">
                <img src={selectedProductForModal.frontImage} alt={selectedProductForModal.name} className="modal-main-display-image" />
              </div>

              <div className="quickview-functional-specs-pane">
                <h2 className="modal-product-header-title">{selectedProductForModal.name}</h2>
                
                <div className="modal-product-pricing-strip">
                  <span className="modal-current-price">${selectedProductForModal.price.toFixed(2)}</span>
                  {selectedProductForModal.oldPrice && ( <span className="modal-slashed-price">${selectedProductForModal.oldPrice.toFixed(2)}</span> )}
                  <span className="modal-pill-tag sale-tag">SALE</span>
                </div>

                <div className="modal-configuration-parameter-block">
                  <span className="parameter-label-row">Color: <strong className="highlight-selection">{modalColor}</strong></span>
                  <div className="color-swatches-flex-row">
                    {['red', 'green', 'pink', 'gold'].map((colorOpt) => (
                      <button 
                        key={colorOpt}
                        className={`color-thumbnail-node-swatch ${modalColor === colorOpt ? 'selected' : ''}`}
                        onClick={() => setModalColor(colorOpt)}
                      >
                        <div className={`inner-color-dot color-${colorOpt}`}></div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="modal-configuration-parameter-block">
                  <span className="parameter-label-row">Weight: <strong className="highlight-selection">{modalWeight}</strong></span>
                  <div className="weight-chips-flex-row">
                    {['100ML', '200ML', '500ML'].map((weightOpt) => (
                      <button 
                        key={weightOpt}
                        className={`weight-chip-interactive-node ${modalWeight === weightOpt ? 'selected' : ''}`}
                        onClick={() => setModalWeight(weightOpt)}
                      >
                        {weightOpt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="modal-purchasing-interactive-action-cluster">
                  <div className="quantity-stepper-counter-block">
                    <button className="step-decrement-trigger" onClick={() => setModalQuantity(p => Math.max(1, p - 1))}>−</button>
                    <span className="current-quantity-numerical-display">{modalQuantity}</span>
                    <button className="step-increment-trigger" onClick={() => setModalQuantity(p => p + 1)}>+</button>
                  </div>
                  <button className="modal-primary-cta-action-button add-to-cart-theme">ADD TO CART</button>
                </div>
                <button className="modal-primary-cta-action-button buy-now-theme">BUY IT NOW</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EaudeParfumProduct;