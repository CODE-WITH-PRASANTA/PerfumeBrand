import React, { useState, useRef } from "react";
import "./HomePopularPerfume.css";

// Import your perfume images from your assets directory
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

const HomePopularPerfume = () => {
  const [isSectionHovered, setIsSectionHovered] = useState(false);
  const [activeHoveredId, setActiveHoveredId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [favorites, setFavorites] = useState([]);
  const carouselRef = useRef(null);

  // Corrected product array matching your variables
  const products = [
    {
      id: 1,
      name: "Aersace For Men",
      price: "$50.99",
      oldPrice: null,
      rating: 5,
      tag: null,
      weight: "100ML",
      imgDefault: perfumeImg1,
      imgHover: perfumeImg2,
    },
    {
      id: 2,
      name: "Black Wild Fragrance",
      price: "$30.00",
      oldPrice: "$60.00",
      rating: 4,
      tag: "Save 50%",
      weight: "100ML",
      imgDefault: perfumeImg3,
      imgHover: perfumeImg4,
    },
    {
      id: 3,
      name: "Men Caramel Dream",
      price: "$50.00",
      oldPrice: "$60.00",
      rating: 5,
      tag: "Sold out",
      weight: "100ML",
      imgDefault: perfumeImg5,
      imgHover: perfumeImg6,
    },
    {
      id: 4,
      name: "Klein Women Spray",
      price: "$99.00",
      oldPrice: null,
      rating: 5,
      tag: null,
      weight: "100ML",
      imgDefault: perfumeImg7,
      imgHover: perfumeImg8,
    },
    {
      id: 5,
      name: "Signature Oud",
      price: "$120.00",
      oldPrice: "$150.00",
      rating: 5,
      tag: "Save 20%",
      weight: "100ML",
      imgDefault: perfumeImg9,
      imgHover: perfumeImg10,
    }
  ];

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleFullDetailsRedirect = (productName) => {
    // Navigate out to a completely unique layout view
    window.open(`/product-details?name=${encodeURIComponent(productName)}`, "_blank");
  };

  return (
    <section 
      className="popularPerfumeSection"
      onMouseEnter={() => setIsSectionHovered(true)}
      onMouseLeave={() => setIsSectionHovered(false)}
    >
      <div className="sectionHeader">
        <h2 className="sectionTitle">Popular Perfumes</h2>
        <p className="sectionSubtitle">Each fragrance crafted to complement unique essence</p>
      </div>

      <div className="carouselContainer">
        {/* Navigation Arrows displayed only when pointing cursor inside the container */}
        {isSectionHovered && (
          <button className="navArrow leftArrow" onClick={() => handleScroll("left")} aria-label="Previous image">
            ‹
          </button>
        )}

        <div className="carouselTrack" ref={carouselRef}>
          {products.map((product) => (
            <div 
              key={product.id} 
              className="productCard"
              onMouseEnter={() => setActiveHoveredId(product.id)}
              onMouseLeave={() => setActiveHoveredId(null)}
            >
              <div className="imageContainer">
                {product.tag && (
                  <span className={`statusTag ${product.tag.toLowerCase().replace(" ", "")}`}>
                    {product.tag}
                  </span>
                )}
                
                {/* Dynamically swap asset path configurations when individual cards are focused */}
                <img
                  src={activeHoveredId === product.id ? product.imgHover : product.imgDefault}
                  alt={product.name}
                  className="perfumeImage"
                />

                {/* Floating Action Menu Layer */}
                {activeHoveredId === product.id && (
                  <div className="floatingActionMenu">
                    <button 
                      className={`actionIconButton ${favorites.includes(product.id) ? "activeHeart" : ""}`}
                      onClick={() => toggleFavorite(product.id)}
                      title="Add to wishlist"
                    >
                      ♥
                    </button>
                    <button className="actionIconButton" onClick={() => setSelectedProduct(product)} title="Quick View">
                      👁
                    </button>
                    <button className="actionIconButton" onClick={() => setSelectedProduct(product)} title="Add to Cart">
                      🛒
                    </button>
                  </div>
                )}
              </div>

              <div className="productDetails">
                <div className="starRating">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </div>
                <h3 className="productName">{product.name}</h3>
                <div className="priceWrapper">
                  <span className="currentPrice">{product.price}</span>
                  {product.oldPrice && <span className="oldPrice">{product.oldPrice}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {isSectionHovered && (
          <button className="navArrow rightArrow" onClick={() => handleScroll("right")} aria-label="Next image">
            ›
          </button>
        )}
      </div>

      <div className="footerActionArea">
        <button className="viewAllButton">VIEW ALL</button>
      </div>

      {/* Elegant Modal Backdrop and Overlay Windows */}
      {selectedProduct && (
        <div className="modalBackdrop" onClick={() => setSelectedProduct(null)}>
          <div className="modalContentLayout" onClick={(e) => e.stopPropagation()}>
            <button className="closeModalButton" onClick={() => setSelectedProduct(null)}>✕</button>
            
            <div className="modalSplitView">
              <div className="modalImagePane">
                <img src={selectedProduct.imgDefault} alt={selectedProduct.name} />
              </div>
              
              <div className="modalTextPane">
                <h2 className="modalProductName">{selectedProduct.name}</h2>
                <div className="modalPricingRow">
                  <span className="modalCurrentPrice">{selectedProduct.price}</span>
                  {selectedProduct.oldPrice && <span className="modalOldPrice">{selectedProduct.oldPrice}</span>}
                  {selectedProduct.tag && <span className="modalBadge">{selectedProduct.tag}</span>}
                </div>
                
                <p className="modalMetaLabel">Color: <span className="metaValue">Default Classic</span></p>
                <p className="modalMetaLabel">Weight: <span className="metaValue">{selectedProduct.weight}</span></p>
                
                <div className="quantitySelectorRow">
                  <div className="qtyCounter">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <button className="addToCartSubmitBtn">ADD TO CART</button>
                </div>

                <button className="buyItNowBtn">BUY IT NOW</button>
                
                <button 
                  className="fullDetailsLink" 
                  onClick={() => handleFullDetailsRedirect(selectedProduct.name)}
                >
                  View full details ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomePopularPerfume;