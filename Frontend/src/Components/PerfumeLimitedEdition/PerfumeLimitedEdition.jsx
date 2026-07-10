import React, { useState, useMemo } from 'react';
import './PerfumeLimitedEdition.css';

import perfumeImg1 from '../../assets/perfume1.webp';
import perfumeImg2 from '../../assets/perfume2.webp';
import perfumeImg3 from '../../assets/perfume3.webp';
import perfumeImg4 from '../../assets/perfume4.webp';
import perfumeImg5 from '../../assets/perfume5.webp';
import perfumeImg6 from '../../assets/perfume6.webp';
import perfumeImg7 from '../../assets/perfume7.webp';
import perfumeImg8 from '../../assets/perfume8.webp';
import perfumeImg9 from '../../assets/perfume9.webp';
import perfumeImg10 from '../../assets/perfume10.webp';
import perfumeImg11 from '../../assets/perfume11.webp';
import perfumeImg12 from '../../assets/perfume12.webp';

const PRODUCTS_PER_PAGE = 8;

const MOCK_PERFUMES = [
  {
    id: 1,
    name: 'Love Edition For Her',
    price: 30.00,
    oldPrice: 60.00,
    rating: 5,
    tag: 'Save 50%',
    inStock: true,
    note: 'Bergamot',
    gender: 'Women',
    longevity: 'Strong',
    primaryImage: perfumeImg1,
    hoverImage: perfumeImg8
  },
  {
    id: 2,
    name: 'Arome Le Parfum',
    price: 999.00,
    oldPrice: null,
    rating: 5,
    tag: null,
    inStock: true,
    note: 'Lavender',
    gender: 'Unisex',
    longevity: 'Very Strong',
    primaryImage: perfumeImg2,
    hoverImage: perfumeImg5
  },
  {
    id: 3,
    name: 'Aersace For Men',
    price: 50.99,
    oldPrice: null,
    rating: 5,
    tag: null,
    inStock: true,
    note: 'Leather',
    gender: 'Men',
    longevity: 'Moderate',
    primaryImage: perfumeImg3,
    hoverImage: perfumeImg12
  },
  {
    id: 4,
    name: 'Million Gold for Her',
    price: 50.00,
    oldPrice: null,
    rating: 5,
    tag: null,
    inStock: true,
    note: 'Sandalwood',
    gender: 'Women',
    longevity: 'Strong',
    primaryImage: perfumeImg4,
    hoverImage: perfumeImg9
  },
  {
    id: 5,
    name: 'Arome Virtual Flower',
    price: 800.00,
    oldPrice: 900.00,
    rating: 5,
    tag: 'Save 11%',
    inStock: false,
    note: 'Vanilla',
    gender: 'Couples',
    longevity: 'Very Strong',
    primaryImage: perfumeImg5,
    hoverImage: perfumeImg1
  },
  {
    id: 6,
    name: 'Black Wild Fragrance',
    price: 30.00,
    oldPrice: 60.00,
    rating: 4,
    tag: 'Save 50%',
    inStock: true,
    note: 'Bergamot',
    gender: 'Men',
    longevity: '8-12 hours',
    primaryImage: perfumeImg6,
    hoverImage: perfumeImg7
  },
  {
    id: 7,
    name: 'Brown Devotion Man',
    price: 50.00,
    oldPrice: null,
    rating: 5,
    tag: null,
    inStock: true,
    note: 'Vanilla',
    gender: 'Men',
    longevity: '4-6 hours',
    primaryImage: perfumeImg7,
    hoverImage: perfumeImg10
  },
  {
    id: 8,
    name: 'Essence Pour Home',
    price: 90.00,
    oldPrice: null,
    rating: 3,
    tag: 'Sold out',
    inStock: false,
    note: 'Lavender',
    gender: 'Men',
    longevity: 'Moderate',
    primaryImage: perfumeImg2,
    hoverImage: perfumeImg12
  },
  {
    id: 9,
    name: 'Orchid Flora Geous',
    price: 75.00,
    oldPrice: null,
    rating: 5,
    tag: null,
    inStock: true,
    note: 'Sandalwood',
    gender: 'Women',
    longevity: 'Strong',
    primaryImage: perfumeImg9,
    hoverImage: perfumeImg2
  },
  {
    id: 10,
    name: 'Velvet Oud Intense',
    price: 120.00,
    oldPrice: 150.00,
    rating: 5,
    tag: 'Trending',
    inStock: true,
    note: 'Leather',
    gender: 'Unisex',
    longevity: 'Very Strong',
    primaryImage: perfumeImg10,
    hoverImage: perfumeImg8
  },
  {
    id: 11,
    name: 'Mystic Rose Noir',
    price: 85.00,
    oldPrice: null,
    rating: 4,
    tag: null,
    inStock: true,
    note: 'Bergamot',
    gender: 'Women',
    longevity: 'Strong',
    primaryImage: perfumeImg11,
    hoverImage: perfumeImg2
  },
  {
    id: 12,
    name: 'Oceanic Fresh Sport',
    price: 45.00,
    oldPrice: 65.00,
    rating: 5,
    tag: 'New',
    inStock: true,
    note: 'Lavender',
    gender: 'Men',
    longevity: '4-6 hours',
    primaryImage: perfumeImg12,
    hoverImage: perfumeImg4
  }
];

// Mock data for variants inside the modal
const COLOR_VARIANTS = [
  { id: 'v1', name: 'Black', img: perfumeImg1 },
  { id: 'v2', name: 'Blue', img: perfumeImg2 },
  { id: 'v3', name: 'Pink', img: perfumeImg3 },
  { id: 'v4', name: 'Gold', img: perfumeImg4 }
];

const WEIGHT_VARIANTS = ['100ML', '200ML', '500ML'];

const PerfumeLimitedEdition = () => {
  const [gridCols, setGridCols] = useState(3);
  const [sortBy, setSortBy] = useState('Featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredProductId, setHoveredProductId] = useState(null);

  // Quick View Modal States
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [modalQuantity, setModalQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(COLOR_VARIANTS[0]);
  const [hoveredColorName, setHoveredColorName] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState('100ML');

  // Filters Collapsible Toggles State
  const [openSections, setOpenSections] = useState({
    availability: true,
    price: true,
    notes: true,
    gender: true,
    longevity: true,
    color: true,
    weight: true,
    category: true,
    brand: true,
  });

  // Filters Form State
  const [stockFilter, setStockFilter] = useState({ inStock: false, outOfStock: false });
  const [priceRange, setPriceRange] = useState({ from: '', to: '' });
  const [selectedNote, setSelectedNote] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Processing Filter + Sort Logic
  const filteredAndSortedPerfumes = useMemo(() => {
    let result = [...MOCK_PERFUMES];

    if (stockFilter.inStock && !stockFilter.outOfStock) result = result.filter(p => p.inStock);
    if (stockFilter.outOfStock && !stockFilter.inStock) result = result.filter(p => !p.inStock);
    if (priceRange.from) result = result.filter(p => p.price >= parseFloat(priceRange.from));
    if (priceRange.to) result = result.filter(p => p.price <= parseFloat(priceRange.to));
    if (selectedNote) result = result.filter(p => p.note === selectedNote);
    if (selectedGender) result = result.filter(p => p.gender === selectedGender);

    switch (sortBy) {
      case 'Alphabetically, A-Z': result.sort((a, b) => a.name.localeCompare(b.name)); break;
      case 'Alphabetically, Z-A': result.sort((a, b) => b.name.localeCompare(a.name)); break;
      case 'Price, low to high': result.sort((a, b) => a.price - b.price); break;
      case 'Price, high to low': result.sort((a, b) => b.price - a.price); break;
      default: break;
    }
    return result;
  }, [stockFilter, priceRange, selectedNote, selectedGender, sortBy]);

  // Real-time Pagination math calculations
  const totalPages = Math.ceil(filteredAndSortedPerfumes.length / PRODUCTS_PER_PAGE);
  
  const paginatedPerfumes = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredAndSortedPerfumes.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [filteredAndSortedPerfumes, currentPage]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Open Modal Handler
  const openQuickView = (perfume) => {
    setQuickViewProduct(perfume);
    setModalQuantity(1);
    setSelectedColor(COLOR_VARIANTS[0]);
    setSelectedWeight('100ML');
  };

  return (
    <div className="perfume-catalog-wrapper">
      {/* Top Controls Toolbar */}
      <div className="catalog-top-bar">
        <div className="layout-toggle-buttons">
          <button className={`layout-btn ${gridCols === 2 ? 'active' : ''}`} onClick={() => setGridCols(2)}>||</button>
          <button className={`layout-btn ${gridCols === 3 ? 'active' : ''}`} onClick={() => setGridCols(3)}>|||</button>
          <button className={`layout-btn ${gridCols === 4 ? 'active' : ''}`} onClick={() => setGridCols(4)}>||||</button>
        </div>

        <div className="sorting-and-stats">
          <span className="sort-label">Sort by:</span>
          <select className="sort-dropdown" value={sortBy} onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}>
            <option value="Featured">Featured</option>
            <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
            <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
            <option value="Price, low to high">Price, low to high</option>
            <option value="Price, high to low">Price, high to low</option>
          </select>
          <span className="product-count">{filteredAndSortedPerfumes.length} products total</span>
        </div>
      </div>

      <div className="catalog-main-layout">
        
        {/* LEFT ACCORDION SIDEBAR PANEL */}
        <aside className="catalog-sidebar">
          
          {/* Availability */}
          <div className="filter-section">
            <div className="filter-header-clickable" onClick={() => toggleSection('availability')}>
              <h4 className="filter-title">Availability</h4>
              <span className={`arrow-indicator ${openSections.availability ? 'expanded' : ''}`}>▼</span>
            </div>
            {openSections.availability && (
              <div className="filter-content-wrapper">
                <label className="filter-checkbox-row">
                  <input type="checkbox" checked={stockFilter.inStock} onChange={(e) => { setStockFilter({ ...stockFilter, inStock: e.target.checked }); setCurrentPage(1); }} />
                  <span className="checkbox-label">In stock</span> <span className="checkbox-count">(10)</span>
                </label>
                <label className="filter-checkbox-row">
                  <input type="checkbox" checked={stockFilter.outOfStock} onChange={(e) => { setStockFilter({ ...stockFilter, outOfStock: e.target.checked }); setCurrentPage(1); }} />
                  <span className="checkbox-label">Out of stock</span> <span className="checkbox-count">(2)</span>
                </label>
              </div>
            )}
          </div>

          {/* Price */}
          <div className="filter-section">
            <div className="filter-header-clickable" onClick={() => toggleSection('price')}>
              <h4 className="filter-title">Price</h4>
              <span className={`arrow-indicator ${openSections.price ? 'expanded' : ''}`}>▼</span>
            </div>
            {openSections.price && (
              <div className="filter-content-wrapper price-range-inputs">
                <div className="input-field-box">
                  <span className="currency-symbol">$</span>
                  <input type="number" placeholder="0" value={priceRange.from} onChange={(e) => { setPriceRange({ ...priceRange, from: e.target.value }); setCurrentPage(1); }} />
                  <label>From</label>
                </div>
                <div className="input-separator">—</div>
                <div className="input-field-box">
                  <span className="currency-symbol">$</span>
                  <input type="number" placeholder="999.00" value={priceRange.to} onChange={(e) => { setPriceRange({ ...priceRange, to: e.target.value }); setCurrentPage(1); }} />
                  <label>To</label>
                </div>
              </div>
            )}
          </div>

          {/* Notes */}
          <div className="filter-section">
            <div className="filter-header-clickable" onClick={() => toggleSection('notes')}>
              <h4 className="filter-title">Notes</h4>
              <span className={`arrow-indicator ${openSections.notes ? 'expanded' : ''}`}>▼</span>
            </div>
            {openSections.notes && (
              <div className="filter-content-wrapper">
                {['Bergamot', 'Lavender', 'Leather', 'Sandalwood', 'Vanilla'].map((note) => (
                  <label key={note} className="filter-checkbox-row">
                    <input type="radio" name="perfume-note" checked={selectedNote === note} onChange={() => { setSelectedNote(selectedNote === note ? '' : note); setCurrentPage(1); }} />
                    <span className="checkbox-label">{note}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Gender */}
          <div className="filter-section">
            <div className="filter-header-clickable" onClick={() => toggleSection('gender')}>
              <h4 className="filter-title">Gender</h4>
              <span className={`arrow-indicator ${openSections.gender ? 'expanded' : ''}`}>▼</span>
            </div>
            {openSections.gender && (
              <div className="filter-content-wrapper">
                {['Couples', 'Men', 'Unisex', 'Women'].map((gender) => (
                  <label key={gender} className="filter-checkbox-row">
                    <input type="radio" name="perfume-gender" checked={selectedGender === gender} onChange={() => { setSelectedGender(selectedGender === gender ? '' : gender); setCurrentPage(1); }} />
                    <span className="checkbox-label">{gender}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Longevity */}
          <div className="filter-section">
            <div className="filter-header-clickable" onClick={() => toggleSection('longevity')}>
              <h4 className="filter-title">Longevity</h4>
              <span className={`arrow-indicator ${openSections.longevity ? 'expanded' : ''}`}>▼</span>
            </div>
            {openSections.longevity && (
              <div className="filter-content-wrapper">
                {['4-6 hours', '8-12 hours', 'Moderate', 'Strong', 'Very Strong'].map((long) => (
                  <label key={long} className="filter-checkbox-row">
                    <input type="checkbox" />
                    <span className="checkbox-label">{long}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

        </aside>

        {/* RIGHT DISPLAY CARDS AREA */}
        <main className="catalog-display-area">
          {paginatedPerfumes.length === 0 ? (
            <div className="no-products-found">No items matching current filters.</div>
          ) : (
            <div className={`products-grid-system columns-${gridCols}`}>
              {paginatedPerfumes.map((perfume) => (
                <div 
                  key={perfume.id} 
                  className="perfume-product-card"
                  onMouseEnter={() => setHoveredProductId(perfume.id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                >
                  <div className="card-media-link-wrapper" onClick={() => openQuickView(perfume)} style={{ cursor: 'pointer' }}>
                    <div className="card-media-box">
                      {perfume.tag && <span className={`product-badge ${perfume.tag.toLowerCase().includes('sold') ? 'sold-out' : ''}`}>{perfume.tag}</span>}
                      <img src={hoveredProductId === perfume.id ? perfume.hoverImage : perfume.primaryImage} alt={perfume.name} className="product-display-image" />
                      
                      {/* Hover Quick Action Buttons Container */}
                      <div className="hover-action-buttons">
                        <button 
                          className="action-btn wishlist-btn" 
                          title="Add to Wishlist"
                          onClick={(e) => { e.stopPropagation(); alert(`Liked ${perfume.name}!`); }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                          </svg>
                        </button>
                        <button 
                          className="action-btn quickview-btn" 
                          title="Quick View"
                          onClick={(e) => { e.stopPropagation(); openQuickView(perfume); }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                        <button 
                          className="action-btn cart-btn" 
                          title="Add to Cart"
                          onClick={(e) => { e.stopPropagation(); openQuickView(perfume); }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                          </svg>
                        </button>
                      </div>

                    </div>
                  </div>

                  <div className="card-info-box">
                    <div className="product-rating-stars">{"★".repeat(perfume.rating)}</div>
                    <h3 className="product-display-title">
                      <span onClick={() => openQuickView(perfume)} style={{ cursor: 'pointer' }}>{perfume.name}</span>
                    </h3>
                    <div className="product-pricing-row">
                      <span className="current-price">${perfume.price.toFixed(2)}</span>
                      {perfume.oldPrice && <span className="slashed-old-price">${perfume.oldPrice.toFixed(2)}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Container */}
          {totalPages > 1 && (
            <div className="pagination-navigation-container">
              <button 
                className="pagination-box-btn action-nav-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              
              {[...Array(totalPages)].map((_, index) => {
                const pageNum = index + 1;
                return (
                  <button 
                    key={pageNum}
                    className={`pagination-box-btn ${currentPage === pageNum ? 'current-active' : ''}`} 
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button 
                className="pagination-box-btn action-nav-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </main>

      </div>

      {/* QUICK VIEW DYNAMIC ACCORDION MODAL */}
      {quickViewProduct && (
        <div className="arome-modal-backdrop" onClick={() => setQuickViewProduct(null)}>
          <div className="arome-modal-container" onClick={(e) => e.stopPropagation()}>
            
            {/* Close Circle Button */}
            <button className="arome-modal-close" onClick={() => setQuickViewProduct(null)}>✕</button>
            
            {/* Left Side: Product Media Panel */}
            <div className="arome-modal-left-media">
              <img src={quickViewProduct.primaryImage} alt={quickViewProduct.name} />
            </div>

            {/* Right Side: Product Customization Panel */}
            <div className="arome-modal-right-details">
              <h2 className="arome-modal-title">{quickViewProduct.name}</h2>
              <div className="arome-modal-price">${quickViewProduct.price.toFixed(2)}</div>

              {/* Color Swatches Selector with Live Labels */}
              <div className="arome-modal-variant-section">
                <div className="arome-variant-label-row">
                  <span className="variant-label-title">Color:</span>
                  <span className="variant-label-value">{quickViewProduct.gender || 'Standard'}</span>
                  {hoveredColorName && (
                    <span className="arome-hover-badge-tint">{hoveredColorName}</span>
                  )}
                </div>
                <div className="arome-color-swatches-grid">
                  {COLOR_VARIANTS.map((variant) => (
                    <div 
                      key={variant.id}
                      className={`arome-swatch-box ${selectedColor.id === variant.id ? 'active-swatch' : ''}`}
                      onClick={() => setSelectedColor(variant)}
                      onMouseEnter={() => setHoveredColorName(variant.name)}
                      onMouseLeave={() => setHoveredColorName(null)}
                    >
                      <img src={variant.img} alt={variant.name} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Weight Options Box Selection */}
              <div className="arome-modal-variant-section">
                <div className="arome-variant-label-row">
                  <span className="variant-label-title">Weight:</span>
                  <span className="variant-label-value">{selectedWeight}</span>
                </div>
                <div className="arome-weight-buttons-row">
                  {WEIGHT_VARIANTS.map((weight) => (
                    <button
                      key={weight}
                      className={`arome-weight-btn ${selectedWeight === weight ? 'active-weight' : ''}`}
                      onClick={() => setSelectedWeight(weight)}
                    >
                      {weight}
                    </button>
                  ))}
                </div>
              </div>

              {/* Counter and Actions Layout row */}
              <div className="arome-actions-stack">
                <div className="arome-quantity-row-container">
                  <div className="arome-quantity-selector">
                    <button 
                      onClick={() => setModalQuantity(prev => Math.max(1, prev - 1))}
                      disabled={modalQuantity <= 1}
                    >
                      —
                    </button>
                    <input type="text" value={modalQuantity} readOnly />
                    <button onClick={() => setModalQuantity(prev => prev + 1)}>
                      +
                    </button>
                  </div>

                  <button className="arome-btn-action arome-btn-cart" onClick={() => alert(`Added ${modalQuantity} items to cart!`)}>
                    ADD TO CART
                  </button>
                </div>

                <button className="arome-btn-action arome-btn-buy" onClick={() => alert('Proceeding to Checkout immediately!')}>
                  BUY IT NOW
                </button>
              </div>

              {/* View Full Details Redirection Link */}
              <div className="arome-view-details-wrapper">
                <a href="#/full-details-blank" target="_blank" rel="noopener noreferrer" className="arome-view-details-link">
                  View full details <span>↗</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default PerfumeLimitedEdition;