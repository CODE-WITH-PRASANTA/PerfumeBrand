import React, { useState } from "react";
import "./ContactDetalis.css";

const ContactDetalis = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill all fields.");
      return;
    }

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="contact-details-section">
      <div className="contact-details-container">
        {/* ================= LEFT FORM ================= */}

        <div className="contact-form-wrapper">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            {/* Name */}

            <div className="contact-field">
              <label>Name:</label>

              <input
                type="text"
                name="name"
                placeholder=""
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            {/* Email */}

            <div className="contact-field">
              <label>Email:</label>

              <input
                type="email"
                name="email"
                placeholder=""
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            {/* Phone */}

            <div className="contact-field">
              <label>Phone number:</label>

              <input
                type="tel"
                name="phone"
                placeholder=""
                value={formData.phone}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            {/* Message */}

            <div className="contact-field">
              <label>Message:</label>

              <textarea
                name="message"
                rows="5"
                placeholder=""
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="contact-submit-btn"
            >
              SEND NOW
            </button>
          </form>
        </div>

        {/* ================= RIGHT INFO ================= */}

        <div className="contact-info-wrapper">
          <h2>Keep In Touch with Us</h2>

          <p className="contact-description">
            We do not sell product from our corporate
            headquarters in New York City. If you want to
            visit please reach out to our customer service
            team first.
          </p>

          <div className="contact-info-item">
            <h4>Visit us:</h4>

            <p>
              Sydney road, Billboard Street 2219-11C
            </p>
          </div>

          <div className="contact-info-item">
            <h4>Email us:</h4>

            <p>aromesupport@mail.com</p>
          </div>

          <div className="contact-info-item">
            <h4>Call us:</h4>

            <p>+1 (880) 567 891 505</p>
          </div>

          <div className="contact-info-item">
            <h4>We are open:</h4>

            <p>Monday - Friday: 8:00-20:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetalis;