import React from "react";
import { Link } from "react-router-dom";
import "./ContactBreadCrum.css";

const ContactBreadCrum = () => {
  return (
    <section className="contact-breadcrumb">
      <div className="contact-breadcrumb-container">
        <nav className="contact-breadcrumb-nav" aria-label="breadcrumb">
          <Link to="/" className="contact-breadcrumb-link">
            Home
          </Link>

          <span className="contact-breadcrumb-separator">/</span>

          <span className="contact-breadcrumb-current">
            contact us
          </span>
        </nav>
      </div>
    </section>
  );
};

export default ContactBreadCrum;