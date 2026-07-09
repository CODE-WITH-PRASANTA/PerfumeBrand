import React, { useState } from 'react';
import './PerfumeFAQ.css';
// Import your image from your assets folder here
import faqImg from '../../assets/faqimage.webp'; 

const PerfumeFAQ = () => {
  // State to track which accordion item index is currently open (null means all closed)
  const [openIndex, setOpenIndex] = useState(0); // Default to 0 to match your reference showing the first one open

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleHelpClick = () => {
    // Navigates to your contact or support page
    window.location.href = '/contact-support';
  };

  const faqData = [
    {
      question: "How do I choose the right perfume for me?",
      answer: "We recommend exploring our fragrance family guide or trying our sample discovery sets to determine which base notes and scent balances best fit your individual skin chemistry and personal preferences."
    },
    {
      question: "Are your ingredients ethically sourced and safe to use?",
      answer: "Absolutely. All of our premium fragrance oils and botanical essences are meticulously tested, sustainably harvested, and completely certified to guarantee skin safety and eco-conscious luxury."
    },
    {
      question: "How long does a premium fragrance typically last throughout the day?",
      answer: "Our Eau de Parfum formulations boast an impressive high-concentration oil profile, typically allowing the base notes to bloom beautifully on your pulse points for 6 to 8 hours."
    }
  ];

  return (
    <section className="PerfumeFAQ-container">
      <div className="PerfumeFAQ-grid">
        
        {/* Left Column: Accordion Questions */}
        <div className="PerfumeFAQ-content-side">
          <span className="PerfumeFAQ-tagline">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="PerfumeFAQ-main-title">You've Got Any Questions?</h2>
          
          <div className="PerfumeFAQ-accordion">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`PerfumeFAQ-item ${isOpen ? 'active' : ''}`}
                >
                  <button 
                    className="PerfumeFAQ-trigger" 
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="PerfumeFAQ-question">{item.question}</span>
                    <span className="PerfumeFAQ-icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  
                  <div className={`PerfumeFAQ-panel ${isOpen ? 'show' : ''}`}>
                    <p className="PerfumeFAQ-answer">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Visual Media Wrapper with Floating Call-to-Action */}
        <div className="PerfumeFAQ-media-side">
          <div className="PerfumeFAQ-image-wrapper">
            <img 
              src={faqImg} 
              alt="Applying premium luxury fragrance" 
              className="PerfumeFAQ-image"
            />
            
            {/* Embedded Floating Help Card */}
            <div className="PerfumeFAQ-floating-box">
              <div className="floating-box-text">
                <h4 className="floating-box-title">Still Have Questions?</h4>
                <p className="floating-box-desc">Feel free to ask any questions you have!</p>
              </div>
              <button 
                className="PerfumeFAQ-help-btn" 
                onClick={handleHelpClick}
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

export default PerfumeFAQ;