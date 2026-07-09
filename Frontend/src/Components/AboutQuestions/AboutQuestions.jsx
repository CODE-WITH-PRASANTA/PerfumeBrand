import React, { useState } from "react";
import "./AboutQuestions.css";
import { FiPlus, FiMinus } from "react-icons/fi";

import faqImage from "../../assets/About img08.webp";
 
const faqData = [
  {
    id: 1,
    question: "How do I choose the right perfume for me?",
    answer:
      "We recommend consulting a fragrance specialist or testing perfumes based on your preferred scent family. Floral, woody, citrus, and oriental fragrances all create different impressions. Choose one that matches your personality and occasion.",
  },
  {
    id: 2,
    question: "Are your perfume certified and safe to use?",
    answer:
      "Yes. All of our perfumes are manufactured using premium-quality ingredients and are tested for safety before reaching our customers.",
  },
  {
    id: 3,
    question: "How long does it take to see results from perfume?",
    answer:
      "Our perfumes provide an instant fragrance experience. Longevity depends on your skin type, weather conditions, and the perfume concentration.",
  },
  {
    id: 4,
    question: "Do you offer subscription plans for perfume?",
    answer:
      "Yes. We offer monthly and quarterly perfume subscription plans with exclusive discounts, early product access, and premium member benefits.",
  },
];

const AboutQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const handleHelp = () => {
    alert("Redirect to Contact Page");
    // Example:
    // navigate("/contact");
    // or
    // window.location.href="/contact";
  };

  return (
    <section className="aq-section">
      <div className="aq-container">

        {/*================ LEFT IMAGE =================*/}

        <div className="aq-left">

          <div className="aq-image-wrapper">

            <img
              src={faqImage}
              alt="Perfume"
            />

            <div className="aq-help-card">

              <div className="aq-help-content">
                <h3>Still Have Questions?</h3>

                <p>
                  Feel free to ask any questions you have!
                </p>
              </div>

              <button
                className="aq-help-btn"
                onClick={handleHelp}
              >
                HERE TO HELP
              </button>

            </div>

          </div>

        </div>

        {/*================ RIGHT FAQ =================*/}

        <div className="aq-right">

          <span className="aq-subtitle">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="aq-title">
            You've Got Any Questions?
          </h2>

          <div className="aq-accordion">

            {faqData.map((item, index) => (
              <div
                className={`aq-item ${
                  activeIndex === index ? "active" : ""
                }`}
                key={item.id}
              >
                <button
                  className="aq-question"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.question}</span>

                  {activeIndex === index ? (
                    <FiMinus />
                  ) : (
                    <FiPlus />
                  )}
                </button>

                <div
                  className={`aq-answer ${
                    activeIndex === index ? "show" : ""
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutQuestions;