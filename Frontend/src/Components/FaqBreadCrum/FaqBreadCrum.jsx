import React from "react";
import "./FaqBreadCrum.css";
import { Link } from "react-router-dom";

const FaqBreadCrum = () => {
  return (
    <section className="faq-breadcrumb">
      <div className="faq-breadcrumb-container">
        <nav className="faq-breadcrumb-nav">

          <Link to="/" className="breadcrumb-link">
            Home
          </Link>

          <span className="breadcrumb-slash">/</span>

          <span className="breadcrumb-active">
            faq
          </span>

        </nav>
      </div>
    </section>
  );
};

export default FaqBreadCrum;