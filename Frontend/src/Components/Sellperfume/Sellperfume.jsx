import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Sellperfume.css';

// Import images from your assets directory
import img1 from "../../assets/all1.webp";
import img2 from "../../assets/all2.webp";
import img3 from "../../assets/all3.webp";

const Sellperfume = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Expanded product data with distinct images
  const saleProducts = [
    { id: 1, name: "Black Wild Fragrance", currentPrice: "$30.00", oldPrice: "$60.00", rating: 4, badge: { text: "Save 50%", type: "discount" }, image: img2 },
    { id: 2, name: "Men Caramel Dream", currentPrice: "$50.00", oldPrice: "$60.00", rating: 5, badge: { text: "Sold out", type: "soldout" }, image: img3 },
    { id: 3, name: "Klein Women Spray", currentPrice: "$99.00", oldPrice: null, rating: 5, badge: null, image: img1 },
    { id: 4, name: "Arome Le Parfum", currentPrice: "$999.00", oldPrice: null, rating: 5, badge: null, image: img2 },
    { id: 5, name: "Arome Virtual Flower", currentPrice: "$800.00", oldPrice: "$900.00", rating: 5, badge: { text: "Save 11%", type: "discount" }, image: img1 },
    { id: 6, name: "Brown Devotion Man", currentPrice: "$50.00", oldPrice: null, rating: 4, badge: null, image: img3 },
    { id: 7, name: "Velvet Amber Oud", currentPrice: "$120.00", oldPrice: "$150.00", rating: 5, badge: { text: "Save 20%", type: "discount" }, image: img2 },
    { id: 8, name: "Pure Rouge Crystal", currentPrice: "$210.00", oldPrice: null, rating: 5, badge: null, image: img1 }
  ];

  // Logic to determine how many items show at once based on layout calculations
  const itemsPerPage = 4;
  const totalPages = Math.ceil(saleProducts.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Get current active row slices
  const visibleProducts = saleProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="Sellperfume">
      <div className="Sellperfume-wrapper">
        
        {/* ================= HEADER CONTROLS ================= */}
        <div className="Sellperfume-header">
          <h2 className="Sellperfume-heading">Sale Collection Products</h2>
          <div className="Sellperfume-navigation">
            <button 
              className="Sellperfume-navBtn Sellperfume-navBtn--prev" 
              onClick={handlePrev}
              aria-label="Previous page"
            >
              <FaChevronLeft />
            </button>
            <button 
              className="Sellperfume-navBtn Sellperfume-navBtn--next" 
              onClick={handleNext}
              aria-label="Next page"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* ================= PRODUCT DISPLAY SHIELD GRID ================= */}
        <div className="Sellperfume-grid">
          {visibleProducts.map((product) => (
            <div key={product.id} className="Sellperfume-card">
              
              <div className="Sellperfume-imageContainer">
                {product.badge && (
                  <span className={`Sellperfume-badge Sellperfume-badge--${product.badge.type}`}>
                    {product.badge.text}
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="Sellperfume-productImg" 
                />
              </div>

              <div className="Sellperfume-infoBlock">
                <div className="Sellperfume-rating">
                  {[...Array(5)].map((_, index) => (
                    <FaStar 
                      key={index} 
                      className={`Sellperfume-starIcon ${index < product.rating ? 'Sellperfume-starIcon--active' : 'Sellperfume-starIcon--inactive'}`}
                    />
                  ))}
                </div>
                
                <h3 className="Sellperfume-productTitle">{product.name}</h3>
                
                <div className="Sellperfume-pricing">
                  <span className="Sellperfume-priceCurrent">{product.currentPrice}</span>
                  {product.oldPrice && (
                    <span className="Sellperfume-priceOld">{product.oldPrice}</span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sellperfume;