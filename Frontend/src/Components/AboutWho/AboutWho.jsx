import React, { useEffect, useRef, useState } from "react";
import "./AboutWho.css";
import aboutImg from "../../Asset/About img1.webp"

const AboutWho = () => {
  // ===========================
  // Progress Bar Animation
  // ===========================
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [experience, setExperience] = useState(0);

  // ===========================
  // Counter Animation
  // ===========================
  const [retail, setRetail] = useState(0);
  const [products, setProducts] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [pharmacists, setPharmacists] = useState(0);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateProgress();
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ===========================
  // Progress Function
  // ===========================
  const animateProgress = () => {
    let p1 = 0;
    let p2 = 0;

    const progress = setInterval(() => {
      if (p1 < 98) {
        p1++;
        setHappyCustomers(p1);
      }

      if (p2 < 85) {
        p2++;
        setExperience(p2);
      }

      if (p1 >= 98 && p2 >= 85) {
        clearInterval(progress);
      }
    }, 20);
  };

  // ===========================
  // Counter Function
  // ===========================
  const animateValue = (setter, end, duration = 1800) => {
    let start = 0;

    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setter(end);
        clearInterval(timer);
      } else {
        setter(start);
      }
    }, 20);
  };

  const animateCounters = () => {
    animateValue(setRetail, 1500);
    animateValue(setProducts, 5000);
    animateValue(setCustomers, 1300000);
    animateValue(setPharmacists, 2500);
  };

  // ===========================
  // Counter Formatter
  // ===========================
  const formatCounter = (value, type) => {
    switch (type) {
      case "retail":
        return `${(value / 1000).toFixed(1)}K`;

      case "products":
        return `${(value / 1000).toFixed(1)}K`;

      case "customers":
        return value >= 1300000
          ? "1.3 MILLION"
          : `${(value / 1000000).toFixed(1)}M`;

      case "pharmacists":
        return `${(value / 1000).toFixed(1)}K`;

      default:
        return value;
    }
  };

  // ===========================
  // Shop Button
  // ===========================
  const handleShop = () => {
    window.location.href = "/shop";
  };

  return (
    <section className="aw-section" ref={sectionRef}>
      <div className="aw-container">
        {/* ================= LEFT ================= */}

        <div className="aw-left">
          <div className="aw-image-box">
            <img src={aboutImg} alt="About" />

            <div className="aw-progress-card">
              {/* Progress 1 */}

              <div className="aw-progress-item">
                <div className="aw-progress-top">
                  <span className="aw-percent">
                    {happyCustomers}%
                  </span>

                  <h4>HAPPY CUSTOMERS</h4>
                </div>

                <div className="aw-progress">
                  <div
                    className="aw-progress-fill"
                    style={{
                      width: `${happyCustomers}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Progress 2 */}

              <div className="aw-progress-item">
                <div className="aw-progress-top">
                  <span className="aw-percent">
                    {experience}%
                  </span>

                  <h4>12 YEARS OF EXPERIENCE</h4>
                </div>

                <div className="aw-progress">
                  <div
                    className="aw-progress-fill"
                    style={{
                      width: `${experience}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="aw-right">
          <span className="aw-small-title">
            WHO WE ARE
          </span>

          <h2>
            Arome<sup>®</sup> was founded belief that Perfect
            Perfume is more than just a necessity.
          </h2>

          <p>
            Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a
            type.
          </p>

          <button
            className="aw-shop-btn"
            onClick={handleShop}
          >
            SHOP NOW
          </button>
        </div>
      </div>

      {/* ================= Counter Section ================= */}

      <div className="aw-counter-section">
        <div className="aw-counter-box">
          <h2>{formatCounter(retail, "retail")}</h2>
          <p>RETAIL OUTLETS</p>
        </div>

        <div className="aw-counter-box">
          <h2>{formatCounter(products, "products")}</h2>
          <p>PRODUCTS</p>
        </div>

        <div className="aw-counter-box">
          <h2>{formatCounter(customers, "customers")}</h2>
          <p>CUSTOMERS</p>
        </div>

        <div className="aw-counter-box">
          <h2>{formatCounter(pharmacists, "pharmacists")}</h2>
          <p>PHARMACISTS</p>
        </div>
      </div>
    </section>
  );
};

export default AboutWho;