import React from "react";
import "./AboutBreadCrum.css";

const AboutBreadCrum = () => {
  return (
    <section className="about-breadcrumb">
      <div className="about-breadcrumb-overlay"></div>

      <div className="about-breadcrumb-container">
        <div className="about-breadcrumb-links">
          <a href="/">Home</a>
          <span>/</span>
          <p>About us</p>
        </div>
      </div>
    </section>
  );
};

export default AboutBreadCrum;