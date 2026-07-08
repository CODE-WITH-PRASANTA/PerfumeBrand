import React, { useEffect, useMemo, useState } from "react";
import "./FaqTrusted.css";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar, FaRegStar, FaCheckCircle } from "react-icons/fa";

// Replace these images with your own
import customer1 from "../../assets/About img04.webp";
import customer2 from "../../assets/About img05.webp";
import customer3 from "../../assets/About img06.webp";


/* ==========================================================
   TESTIMONIAL DATA
========================================================== */

const testimonials = [
  {
    id: 1,
    name: "Karen Summers",
    image: customer1,
    rating: 5,
    review:
      '"Arome supplements have been a game-changer for me! I feel more energized and healthier than ever. Highly recommend!"',
    verified: true,
  },
  {
    id: 2,
    name: "Olivor Brown",
    image: customer2,
    rating: 4,
    review:
      '"Fast shipping and great customer support. The products are high-quality. wish there were more flavor options. excellent service"',
    verified: true,
  },
  {
    id: 3,
    name: "Sophia Martinez",
    image: customer3,
    rating: 5,
    review:
      '"Excellent service and top-notch supplements. The loyalty rewards is a great bonus. Will definitely keep ordering!"',
    verified: true,
  },
];

/* ==========================================================
   COMPONENT
========================================================== */

const FaqTrusted = () => {
  const [current, setCurrent] = useState(0);

  /* ======================================================
     RESPONSIVE CARD COUNT
  ====================================================== */

  const getCardsPerView = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ======================================================
     AUTO SLIDE
  ====================================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500); // 2.5 seconds

    return () => clearInterval(interval);
  }, [current, cardsPerView]);

  /* ======================================================
     NAVIGATION
  ====================================================== */

  const maxIndex = testimonials.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % maxIndex);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + maxIndex) % maxIndex);
  };

  /* ======================================================
     CURRENT VISIBLE CARDS
  ====================================================== */

  const visibleTestimonials = useMemo(() => {
    return Array.from({ length: cardsPerView }, (_, index) => {
      return testimonials[(current + index) % testimonials.length];
    });
  }, [current, cardsPerView]);

  /* ======================================================
     STAR RENDER
  ====================================================== */

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) =>
      index < rating ? (
        <FaStar key={index} className="trusted-star filled" />
      ) : (
        <FaRegStar key={index} className="trusted-star" />
      )
    );
  };

    return (
    <section className="trusted-section">
      <div className="trusted-container">

        {/* ===================== HEADER ===================== */}

        <div className="trusted-top">

          <h2 className="trusted-title">
            Trusted by Thousands of
            <br />
            Satisfied Customers.
          </h2>

          <div className="trusted-navigation">

            <button
              className="trusted-nav-btn"
              onClick={prevSlide}
              aria-label="Previous"
            >
              <FiChevronLeft />
            </button>

            <button
              className="trusted-nav-btn"
              onClick={nextSlide}
              aria-label="Next"
            >
              <FiChevronRight />
            </button>

          </div>

        </div>

        {/* ===================== CARDS ===================== */}

        <div className="trusted-grid">

          {visibleTestimonials.map((item) => (

            <div className="trusted-card-wrapper" key={item.id}>

              {/* Review Card */}

              <div className="trusted-card">

                <p className="trusted-review">
                  {item.review}
                </p>

                <div className="trusted-stars">
                  {renderStars(item.rating)}
                </div>

              </div>

              {/* Customer */}

              <div className="trusted-user">

                <img
                  src={item.image}
                  alt={item.name}
                  className="trusted-user-image"
                />

                <div className="trusted-user-info">

                  <h3 className="trusted-user-name">
                    {item.name}
                  </h3>

                  <div className="trusted-user-verified">

                    <FaCheckCircle className="verified-icon" />

                    <span>Verified Buyer</span>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default FaqTrusted;