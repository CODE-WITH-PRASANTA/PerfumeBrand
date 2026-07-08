import React, { useState, useEffect } from "react";
import "./AboutTrusted.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaRegStar,
  FaCheckCircle,
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Megan Steele",
    rating: 5,
    review:
      "Arome supplements have been a game-changer for me! I feel more energized and healthier than ever. Highly recommend!",
    verified: true,
  },
  {
    id: 2,
    name: "Karen Summers",
    rating: 5,
    review:
      "Fast shipping and great customer support. The products are high-quality. Wish there were more flavor options. Excellent service and item.",
    verified: true,
  },
  {
    id: 3,
    name: "Darrel Austin",
    rating: 4,
    review:
      "Excellent service and top-notch supplements. The loyalty rewards are a great bonus. Will definitely keep ordering!",
    verified: true,
  },
  {
    id: 4,
    name: "Sophia Clark",
    rating: 5,
    review:
      "Amazing quality and excellent customer support. Highly satisfied with every purchase.",
    verified: true,
  },
  {
    id: 5,
    name: "William Scott",
    rating: 5,
    review:
      "Fantastic products, fast delivery and genuine service. I will definitely buy again.",
    verified: true,
  },
];

const AboutTrusted = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  /* -----------------------------
      Responsive Cards
  ------------------------------ */

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  /* -----------------------------
      Auto Slide
  ------------------------------ */

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, [currentSlide, cardsPerView]);

  const totalSlides = testimonials.length - cardsPerView + 1;

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev >= totalSlides - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev <= 0 ? totalSlides - 1 : prev - 1
    );
  };

  /* -----------------------------
      Mobile Swipe
  ------------------------------ */

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchEnd - touchStart > 50) {
      prevSlide();
    }
  };

  /* -----------------------------
      Rating Stars
  ------------------------------ */

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) =>
      index < rating ? (
        <FaStar key={index} className="at-star-fill" />
      ) : (
        <FaRegStar key={index} className="at-star-empty" />
      )
    );
  };

    return (
    <section className="at-section">
      <div className="at-container">

        {/* ===========================
              Header
        ============================ */}

        <div className="at-header">

          <div className="at-heading">
            <h2>
              Trusted by Thousands of
              <br />
              Satisfied Customers.
            </h2>
          </div>

          <div className="at-navigation">
            <button
              className="at-nav-btn"
              onClick={prevSlide}
            >
              <FaChevronLeft />
            </button>

            <button
              className="at-nav-btn"
              onClick={nextSlide}
            >
              <FaChevronRight />
            </button>
          </div>

        </div>

        {/* ===========================
              Slider
        ============================ */}

        <div
          className="at-slider-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="at-slider"
            style={{
              transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                className="at-card"
                key={item.id}
                style={{
                  minWidth: `${100 / cardsPerView}%`,
                  maxWidth: `${100 / cardsPerView}%`,
                }}
              >
                <div className="at-card-inner">

                  {/* Review */}

                  <p className="at-review">
                    "{item.review}"
                  </p>

                  {/* Stars */}

                  <div className="at-stars">
                    {renderStars(item.rating)}
                  </div>

                  {/* User */}

                  <div className="at-user">

                    <div className="at-avatar">
                      {item.name.charAt(0)}
                    </div>

                    <div className="at-user-info">

                      <h4>{item.name}</h4>

                      <span>
                        <FaCheckCircle className="at-verify-icon" />
                        Verified Buyer
                      </span>

                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===========================
              Mobile Dots
        ============================ */}

        <div className="at-dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`at-dot ${
                currentSlide === index ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutTrusted;
