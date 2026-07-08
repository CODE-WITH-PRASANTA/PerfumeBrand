import React, { useState } from 'react';
import { 
  FaChevronDown, 
  FaChevronUp, 
  FaStar, 
  FaRegHeart,
  FaRegEye,
  FaShoppingBasket
} from 'react-icons/fa';
import './ProductCatalog.css';

// Import regular images
import img1 from "../../assets/all1.webp";
import img2 from "../../assets/all2.webp";
import img3 from "../../assets/all3.webp";

// Import new hover variant images
import img1Hover from "../../assets/all4.webp"; 
import img2Hover from "../../assets/all5.webp";
import img3Hover from "../../assets/all6.webp";

const ProductCatalog = () => {
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Alphabetically, A-Z');
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const [accordions, setAccordions] = useState({
    availability: true,
    price: true,
    notes: true,
    gender: true,
    longevity: true,
    weight: true,
    category: true,
    brand: true,
    color: true
  });

  const [priceFrom, setPriceFrom] = useState('0');
  const [priceTo, setPriceTo] = useState('800.00');

  const toggleAccordion = (section) => {
    setAccordions(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const sortOptions = [
    'Featured', 'Most relevant', 'Best selling', 
    'Alphabetically, A-Z', 'Alphabetically, Z-A', 
    'Price, low to high', 'Price, high to low', 
    'Date, old to new', 'Date, new to old'
  ];

  const products = [
    {
      id: 1,
      name: 'Arome Virtual Flower',
      price: 800.00,
      oldPrice: 900.00,
      rating: 5,
      saveBadge: 'Save 11%',
      image: img1,
      hoverImage: img1Hover
    },
    {
      id: 2,
      name: 'Black Wild Fragrance',
      price: 30.00,
      oldPrice: 60.00,
      rating: 4,
      saveBadge: 'Save 50%',
      image: img2,
      hoverImage: img2Hover
    },
    {
      id: 3,
      name: 'Brown Devotion Man',
      price: 50.00,
      oldPrice: null,
      rating: 5,
      saveBadge: null,
      image: img3,
      hoverImage: img3Hover
    }
  ];

  return (
    <div className="ProductCatalog">
      {/* ==================== TOP NAVIGATION HEADER BAR ==================== */}
      <header className="ProductCatalog-topBar">
        <div className="ProductCatalog-filterControls">
          
          {/* Right Container: Sort elements and product counter pushed to the far right */}
          <div className="ProductCatalog-rightControlsGroup">
            <div className="ProductCatalog-sortWrapper">
              <span className="ProductCatalog-sortLabel">Sort by:</span>
              <div className="ProductCatalog-dropdown">
                <button 
                  className="ProductCatalog-dropdownSelect" 
                  onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                >
                  {selectedSort} <FaChevronDown className="ProductCatalog-dropdownIcon" />
                </button>
                
                {sortDropdownOpen && (
                  <ul className="ProductCatalog-dropdownMenu">
                    {sortOptions.map((option, idx) => (
                      <li 
                        key={idx} 
                        className={`ProductCatalog-dropdownItem ${selectedSort === option ? 'active' : ''}`}
                        onClick={() => {
                          setSelectedSort(option);
                          setSortDropdownOpen(false);
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            
            <span className="ProductCatalog-productCount">3 products</span>
          </div>

        </div>
      </header>

      <div className="ProductCatalog-mainLayout">
        {/* ==================== LEFT FILTER SIDEBAR ==================== */}
        <aside className="ProductCatalog-sidebar">
          {/* Availability */}
          <div className="ProductCatalog-filterSection">
            <div className="ProductCatalog-filterHeader" onClick={() => toggleAccordion('availability')}>
              <span>Availability</span>
              {accordions.availability ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {accordions.availability && (
              <div className="ProductCatalog-filterContent">
                <label className="ProductCatalog-checkboxLabel">
                  <input type="checkbox" className="ProductCatalog-checkbox" />
                  <span className="ProductCatalog-labelText">In stock</span>
                  <span className="ProductCatalog-countText">(3)</span>
                </label>
                <label className="ProductCatalog-checkboxLabel">
                  <input type="checkbox" className="ProductCatalog-checkbox" />
                  <span className="ProductCatalog-labelText">Out of stock</span>
                  <span className="ProductCatalog-countText">(2)</span>
                </label>
              </div>
            )}
          </div>

          {/* Price Range */}
          <div className="ProductCatalog-filterSection">
            <div className="ProductCatalog-filterHeader" onClick={() => toggleAccordion('price')}>
              <span>Price</span>
              {accordions.price ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {accordions.price && (
              <div className="ProductCatalog-priceInputsContainer">
                <div className="ProductCatalog-priceInputWrapper">
                  <label className="ProductCatalog-priceInputLabel">From</label>
                  <input 
                    type="text" 
                    className="ProductCatalog-priceInputField" 
                    value={priceFrom} 
                    onChange={(e) => setPriceFrom(e.target.value)} 
                  />
                </div>
                <span className="ProductCatalog-priceSeparator">—</span>
                <div className="ProductCatalog-priceInputWrapper">
                  <label className="ProductCatalog-priceInputLabel">To</label>
                  <input 
                    type="text" 
                    className="ProductCatalog-priceInputField" 
                    value={priceTo} 
                    onChange={(e) => setPriceTo(e.target.value)} 
                  />
                </div>
              </div>
            )}
          </div>

          {/* Notes */}
          <div className="ProductCatalog-filterSection">
            <div className="ProductCatalog-filterHeader" onClick={() => toggleAccordion('notes')}>
              <span>Notes</span>
              {accordions.notes ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {accordions.notes && (
              <div className="ProductCatalog-filterContent">
                {[['Bergamot', 1], ['Lavender', 1], ['Leather', 1]].map(([label, count]) => (
                  <label key={label} className="ProductCatalog-checkboxLabel">
                    <input type="checkbox" className="ProductCatalog-checkbox" />
                    <span className="ProductCatalog-labelText">{label}</span>
                    <span className="ProductCatalog-countText">({count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Gender */}
          <div className="ProductCatalog-filterSection">
            <div className="ProductCatalog-filterHeader" onClick={() => toggleAccordion('gender')}>
              <span>Gender</span>
              {accordions.gender ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {accordions.gender && (
              <div className="ProductCatalog-filterContent">
                {[['Couples', 2], ['Men', 1]].map(([label, count]) => (
                  <label key={label} className="ProductCatalog-checkboxLabel">
                    <input type="checkbox" className="ProductCatalog-checkbox" />
                    <span className="ProductCatalog-labelText">{label}</span>
                    <span className="ProductCatalog-countText">({count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Longevity */}
          <div className="ProductCatalog-filterSection">
            <div className="ProductCatalog-filterHeader" onClick={() => toggleAccordion('longevity')}>
              <span>Longevity</span>
              {accordions.longevity ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {accordions.longevity && (
              <div className="ProductCatalog-filterContent">
                {[['8–12 hours', 1], ['Strong', 2]].map(([label, count]) => (
                  <label key={label} className="ProductCatalog-checkboxLabel">
                    <input type="checkbox" className="ProductCatalog-checkbox" />
                    <span className="ProductCatalog-labelText">{label}</span>
                    <span className="ProductCatalog-countText">({count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Weight */}
          <div className="ProductCatalog-filterSection">
            <div className="ProductCatalog-filterHeader" onClick={() => toggleAccordion('weight')}>
              <span>Weight</span>
              {accordions.weight ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {accordions.weight && (
              <div className="ProductCatalog-filterContent scrollable">
                {[['100g', 2], ['200g', 2], ['300g', 1], ['500g', 1], ['100ML', 1]].map(([label, count]) => (
                  <label key={label} className="ProductCatalog-checkboxLabel">
                    <input type="checkbox" className="ProductCatalog-checkbox" />
                    <span className="ProductCatalog-labelText">{label}</span>
                    <span className="ProductCatalog-countText">({count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Category */}
          <div className="ProductCatalog-filterSection">
            <div className="ProductCatalog-filterHeader" onClick={() => toggleAccordion('category')}>
              <span>Category</span>
              {accordions.category ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {accordions.category && (
              <div className="ProductCatalog-filterContent">
                {[['Charging Cables', 1], ['Face Powder', 1]].map(([label, count]) => (
                  <label key={label} className="ProductCatalog-checkboxLabel">
                    <input type="checkbox" className="ProductCatalog-checkbox" />
                    <span className="ProductCatalog-labelText">{label}</span>
                    <span className="ProductCatalog-countText">({count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Brand */}
          <div className="ProductCatalog-filterSection">
            <div className="ProductCatalog-filterHeader" onClick={() => toggleAccordion('brand')}>
              <span>Brand</span>
              {accordions.brand ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {accordions.brand && (
              <div className="ProductCatalog-filterContent">
                <label className="ProductCatalog-checkboxLabel">
                  <input type="checkbox" className="ProductCatalog-checkbox" />
                  <span className="ProductCatalog-labelText">Arome</span>
                  <span className="ProductCatalog-countText">(3)</span>
                </label>
              </div>
            )}
          </div>

          {/* Color */}
          <div className="ProductCatalog-filterSection">
            <div className="ProductCatalog-filterHeader" onClick={() => toggleAccordion('color')}>
              <span>Color</span>
              {accordions.color ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {accordions.color && (
              <div className="ProductCatalog-filterContent scrollable">
                {[['Black', 2], ['Blue', 1], ['blue', 1], ['Green', 1], ['green', 1], ['Red', 1], ['red', 1], ['yellow', 1]].map(([label, count], i) => (
                  <label key={i} className="ProductCatalog-checkboxLabel">
                    <input type="checkbox" className="ProductCatalog-checkbox" />
                    <span className="ProductCatalog-labelText">{label}</span>
                    <span className="ProductCatalog-countText">({count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* ==================== PRODUCT GRID AREA ==================== */}
        <main className="ProductCatalog-content">
          <div className="ProductCatalog-grid">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="ProductCatalog-card"
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(null)}
              >
                <div className="ProductCatalog-imageContainer">
                  {product.saveBadge && (
                    <span className="ProductCatalog-badge">{product.saveBadge}</span>
                  )}
                  
                  <img 
                    src={hoveredProductId === product.id ? product.hoverImage : product.image} 
                    alt={product.name} 
                    className="ProductCatalog-image" 
                  />

                  <div className="ProductCatalog-actionOverlay">
                    <button className="ProductCatalog-actionBtn" title="Add to Wishlist">
                      <FaRegHeart />
                    </button>
                    <button className="ProductCatalog-actionBtn" title="Quick View">
                      <FaRegEye />
                    </button>
                    <button className="ProductCatalog-actionBtn" title="Add to Basket">
                      <FaShoppingBasket />
                    </button>
                  </div>
                </div>
                
                <div className="ProductCatalog-info">
                  <div className="ProductCatalog-stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < product.rating ? "star-filled" : "star-empty"} 
                      />
                    ))}
                  </div>
                  
                  <h3 className="ProductCatalog-productTitle">{product.name}</h3>
                  
                  <div className="ProductCatalog-pricing">
                    <span className="ProductCatalog-currentPrice">${product.price.toFixed(2)}</span>
                    {product.oldPrice && (
                      <span className="ProductCatalog-oldPrice">${product.oldPrice.toFixed(2)}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductCatalog;