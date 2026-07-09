import React, { useState, useEffect } from "react";

import "./HomePopularPerfume.css";

// 12 Images for 6 Products (1 Permanent, 1 Hover per product)
import perfumeImg1 from "../../assets/perfume1.webp";
import perfumeImg2 from "../../assets/perfume2.webp";
import perfumeImg3 from "../../assets/perfume3.webp";
import perfumeImg4 from "../../assets/perfume4.webp";
import perfumeImg5 from "../../assets/perfume5.webp";
import perfumeImg6 from "../../assets/perfume6.webp";
import perfumeImg7 from "../../assets/perfume7.webp";
import perfumeImg8 from "../../assets/perfume8.webp";
import perfumeImg9 from "../../assets/perfume9.webp";
import perfumeImg10 from "../../assets/perfume10.webp";
import perfumeImg11 from "../../assets/perfume11.webp";
import perfumeImg12 from "../../assets/perfume12.webp";

const HomePopularPerfume = () => {
  const [isSectionHovered, setIsSectionHovered] = useState(false);
  const [activeHoverId, setActiveHoverId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4); // Dynamic track sizing

  // Modal Interactive States
  const [modalQuantity, setModalQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Green");
  const [hoveredColor, setHoveredColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState("100ML");

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
      colors: ["Black", "Green", "Amber"],
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
      colors: ["Black", "Crimson", "Gold"],
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
      colors: ["Clear", "Bronze", "Plum"],
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
      colors: ["Rose Gold", "Silver", "Emerald"],
    },
    {
      id: 5,
      name: "Signature Oud Intense",
      price: "$120.00",
      oldPrice: "$145.00",
      rating: 5,
      tag: "New",
      weight: "100ML",
      imgDefault: perfumeImg9,
      imgHover: perfumeImg10,
      colors: ["Midnight", "Onyx", "Sapphire"],
    },
    {
      id: 6,
      name: "Velvet Rose Elixir",
      price: "$85.00",
      oldPrice: "$110.00",
      rating: 5,
      tag: "Save 20%",
      weight: "100ML",
      imgDefault: perfumeImg11,
      imgHover: perfumeImg12,
      colors: ["Blush", "Burgundy", "Platinum"],
    }
  ];

  // Dynamic viewport tracking to fix slide translations perfectly
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setVisibleItems(1);
      } else if (width <= 992) {
        setVisibleItems(2);
      } else if (width <= 1200) {
        setVisibleItems(3);
      } else {
        setVisibleItems(4);
      }
    };

    handleResize(); // Init on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Safely auto-adjust slide index if resizing leaves it out of bounds
  useEffect(() => {
    const maxPossibleIndex = Math.max(0, products.length - visibleItems);
    if (currentIndex > maxPossibleIndex) {
      setCurrentIndex(maxPossibleIndex);
    }
  }, [visibleItems, currentIndex, products.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, products.length - visibleItems));
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalQuantity(1);
    setSelectedColor(product.colors[0] || "Default");
    setHoveredColor(null);
    setSelectedSize("100ML");
  };

  const handleFullDetailsRedirect = (productName) => {
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
        {/* Left Arrow Button */}
        {((isSectionHovered && currentIndex > 0) || (window.innerWidth <= 768 && currentIndex > 0)) && (
          <button className="navArrow leftArrow" onClick={handlePrev} aria-label="Previous">
            ‹
          </button>
        )}

        <div className="carouselViewport">
          <div 
            className="carouselTrack" 
            style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="productCard"
                onMouseEnter={() => setActiveHoverId(product.id)}
                onMouseLeave={() => setActiveHoverId(null)}
              >
                <div className="imageContainer">
                  {product.tag && (
                    <span className={`statusTag ${product.tag.toLowerCase().replace(" ", "").replace("%", "")}`}>
                      {product.tag}
                    </span>
                  )}
                  
                  <img
                    src={activeHoverId === product.id ? product.imgHover : product.imgDefault}
                    alt={product.name}
                    className="perfumeImage"
                  />

                  {/* Buttons appear on hover (always display on mobile if active item) */}
                  {(activeHoverId === product.id || window.innerWidth <= 768) && (
                    <div className="floatingActionMenu">
                      <button 
                        className={`actionIconButton ${favorites.includes(product.id) ? "activeHeart" : ""}`}
                        onClick={() => toggleFavorite(product.id)}
                      >
                        {favorites.includes(product.id) ? "♥" : "♡"}
                      </button>
                      <button className="actionIconButton" onClick={() => openModal(product)}>
                        👁
                      </button>
                      <button className="actionIconButton" onClick={() => openModal(product)}>
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
        </div>

        {/* Right Arrow Button */}
        {((isSectionHovered && currentIndex < products.length - visibleItems) || 
          (window.innerWidth <= 768 && currentIndex < products.length - visibleItems)) && (
          <button className="navArrow rightArrow" onClick={handleNext} aria-label="Next">
            ›
          </button>
        )}
      </div>

      <div className="footerActionArea">
        <button className="viewAllButton">VIEW ALL</button>
      </div>

      {/* Quick View Modal Popup */}
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
                  {selectedProduct.tag && (
                    <span className="modalInlineBadge statusSoldout">{selectedProduct.tag}</span>
                  )}
                </div>
                
                <div className="modalMetaLabel">
                  Color: <span className="dynamicColorText">{hoveredColor || selectedColor}</span>
                </div>
                
                <div className="colorSwatchesGroup">
                  {selectedProduct.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`colorSwatchVariant ${selectedColor === color ? "activeColor" : ""}`}
                      onClick={() => setSelectedColor(color)}
                      onMouseEnter={() => setHoveredColor(color)}
                      onMouseLeave={() => setHoveredColor(null)}
                    >
                      <span className="swatchMiniIcon" style={{ filter: `hue-rotate(${index * 120}deg)` }}>🧴</span>
                    </button>
                  ))}
                </div>

                <div className="modalMetaLabel" style={{ marginTop: "15px" }}>
                  Weight: <span className="metaValue">{selectedSize}</span>
                </div>

                <div className="sizeSelectorGroup">
                  {["100ML", "200ML", "500ML"].map((size) => (
                    <button
                      key={size}
                      className={`sizePillButton ${selectedSize === size ? "activeSize" : ""}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                
                <div className="quantitySelectorRow">
                  <div className="qtyCounter">
                    <button onClick={() => setModalQuantity(q => Math.max(1, q - 1))}>-</button>
                    <span>{modalQuantity}</span>
                    <button onClick={() => setModalQuantity(q => q + 1)}>+</button>
                  </div>
                  
                  <button 
                    className={`addToCartSubmitBtn ${selectedProduct.tag === "Sold out" ? "disabledBtn" : ""}`}
                    disabled={selectedProduct.tag === "Sold out"}
                  >
                    {selectedProduct.tag === "Sold out" ? "SOLD OUT" : "ADD TO CART"}
                  </button>
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