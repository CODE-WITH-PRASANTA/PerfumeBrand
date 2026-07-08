import React from "react";
import "./AboutWhy.css";
import { FaPlay } from "react-icons/fa";

import whyImg1 from "../../assets/About img02.webp"
import whyImg2 from "../../assets/About img03.webp"

const AboutWhy = () => {
  const handleShopNow = () => {
    // Change according to your route
    window.location.href = "/shop";
  };

  const handleVideo = () => {
    // Replace with your YouTube/video link
    window.open("https://www.youtube.com/", "_blank");
  };

  return (
    <section className="about-why-section">
      <div className="about-why-container">

        {/* ================= Left Content ================= */}
        <div className="about-why-left">

          <span className="about-why-subtitle">
            WHY CHOOSE US
          </span>

          <h2 className="about-why-title">
            Fast, Reliable, and
            <br />
            Committed to
            <br />
            Your Satisfaction.
          </h2>

          <p className="about-why-description">
            Our team consists of highly skilled professionals with
            extensive training and certifications, ensuring top-quality
            service. We've been committed to excellence since the very
            beginning.
          </p>

          <div className="about-why-buttons">

            <button
              className="shop-btn"
              onClick={handleShopNow}
            >
              SHOP NOW
            </button>

            <button
              className="play-btn"
              onClick={handleVideo}
              aria-label="Play Video"
            >
              <FaPlay />
            </button>

          </div>

        </div>

        {/* ================= Right Images ================= */}

        <div className="about-why-right">

          <div className="about-img-card img-one">
            <img
              src={whyImg1}
              alt="Perfume"
            />
          </div>

          <div className="about-img-card img-two">
            <img
              src={whyImg2}
              alt="Perfume"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutWhy;