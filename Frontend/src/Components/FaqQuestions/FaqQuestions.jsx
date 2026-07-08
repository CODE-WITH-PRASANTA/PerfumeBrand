import React, { useState } from "react";
import "./FaqQuestions.css";
import { FiPlus, FiMinus } from "react-icons/fi";

// Replace this with your image
import faqImage from "../../assets/About img02.webp";
 
const faqData = [
  {
    question: "How do I choose the right vitamins for me?",
    answer:
      "We recommend consulting a healthcare professional to determine which vitamins or supplements best fit your needs.",
  },
  {
    question: "Are your vitamins certified and safe to use?",
    answer:
      "Yes. All our vitamins are manufactured in certified facilities and undergo strict quality testing to ensure safety and effectiveness.",
  },
  {
    question: "How long does it take to see results from vitamins?",
    answer:
      "Results vary depending on the individual and the supplement. Most people begin noticing benefits within a few weeks of consistent use.",
  },
  {
    question: "Do you offer subscription plans for vitamins?",
    answer:
      "Yes! We offer flexible monthly subscription plans with discounts, automatic delivery, and the option to cancel anytime.",
  },
];

const FaqQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* LEFT SIDE */}
        <div className="faq-left">
          <div className="faq-image-wrapper">
            <img
              src={faqImage}
              alt="FAQ"
              className="faq-image"
            />

            <div className="faq-help-card">
              <div className="faq-help-content">
                <h3>Still Have Questions?</h3>
                <p>Feel free to ask any questions you have!</p>
              </div>

              <button
                className="faq-help-btn"
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                HERE TO HELP
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="faq-right">
          <span className="faq-subtitle">
            GENERAL QUESTIONS HERE
          </span>

          <h2 className="faq-title">
            Some Frequently Asked Questions.
          </h2>

          <div className="faq-list">
            {faqData.map((item, index) => (
              <div
                className={`faq-item ${
                  activeIndex === index ? "active" : ""
                }`}
                key={index}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.question}</span>

                  <div className="faq-icon">
                    {activeIndex === index ? (
                      <FiMinus />
                    ) : (
                      <FiPlus />
                    )}
                  </div>
                </button>

                <div
                  className={`faq-answer-wrapper ${
                    activeIndex === index ? "show" : ""
                  }`}
                >
                  <div className="faq-answer">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqQuestions;