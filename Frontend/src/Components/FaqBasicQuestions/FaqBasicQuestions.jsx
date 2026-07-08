import React, { useState } from "react";
import "./FaqBasicQuestions.css";
import { FiPlus, FiMinus } from "react-icons/fi";

// Replace with your image
import faqImage from "../../assets/About img03.webp";
 
const faqData = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, PayPal, UPI, Net Banking and other major payment methods.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes. We ship to most countries worldwide. Shipping charges and delivery time vary depending on your location.",
  },
  {
    question: "Can I cancel my order after placing it?",
    answer:
      "Yes. Orders can be cancelled before they are dispatched. Please contact our support team as soon as possible.",
  },
  {
    question: "At what age should you take vitamins?",
    answer:
      "Vitamins may be suitable at different ages depending on dietary needs. Please consult your healthcare professional for personalized advice.",
  },
];

const FaqBasicQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="basic-faq-section">
      <div className="basic-faq-container">
        {/* ================= LEFT ================= */}

        <div className="basic-faq-left">
          <span className="basic-faq-subtitle">
            BASIC QUESTIONS HERE
          </span>

          <h2 className="basic-faq-title">
            Some Frequently Asked Questions.
          </h2>

          <div className="basic-faq-list">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`basic-faq-item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <button
                  className="basic-faq-question"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.question}</span>

                  <div className="basic-faq-icon">
                    {activeIndex === index ? (
                      <FiMinus />
                    ) : (
                      <FiPlus />
                    )}
                  </div>
                </button>

                <div
                  className={`basic-faq-answer-wrapper ${
                    activeIndex === index ? "show" : ""
                  }`}
                >
                  <div className="basic-faq-answer">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="basic-faq-right">
          <div className="basic-faq-image-wrapper">
            <img
              src={faqImage}
              alt="FAQ"
              className="basic-faq-image"
            />

            <div className="basic-faq-help-card">
              <div className="basic-faq-help-content">
                <h3>Still Have Questions?</h3>
                <p>
                  Feel free to ask any questions you have!
                </p>
              </div>

              <button
                className="basic-faq-help-btn"
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                HERE TO HELP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqBasicQuestions;