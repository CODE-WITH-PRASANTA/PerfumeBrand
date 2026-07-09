import React, { useState } from 'react';
import './PerfumeLimitedEditionFind.css';

// Your correct image import
import perfumeImg1 from '../../assets/LimitedEdition.webp';

const PerfumeLimitedEditionFind = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideoModal = () => setIsVideoOpen(true);
  const closeVideoModal = () => setIsVideoOpen(false);

  return (
    <section className="perfume-find-section">
      <div className="perfume-find-container">
        
        {/* Left Side: Media Container with Play Button */}
        <div className="perfume-find-media" onClick={openVideoModal}>
          {/* UPDATED HERE TO USE YOUR IMAGE */}
          <img 
            src={perfumeImg1} 
            alt="Find The Perfect Perfume" 
            className="perfume-find-img"
          />
          <div className="video-play-overlay">
            <div className="play-button-ring">
              <svg className="play-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side: Content Block */}
        <div className="perfume-find-content">
          <h2 className="perfume-find-title">
            Find The Perfect Perfume To Express Unique Style.
          </h2>
          <p className="perfume-find-description">
            Pair text with an image to focus on your chosen product, collection, or blog post. 
            Add details on availability, style, or even provide a review.
          </p>

          <div className="perfume-features-list">
            {/* Feature 1 */}
            <div className="perfume-feature-item">
              <div className="feature-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="feature-svg-icon">
                  <circle cx="12" cy="12" r="10" strokeDasharray="3 3"/>
                  <path d="M12 6v12M9 9h6M9 13h6" strokeLinecap="round"/>
                  <path d="M12 8c2 0 3 1.5 3 3s-1 3-3 3-3-1.5-3-3 1-3 3-3z" fill="none"/>
                </svg>
              </div>
              <div className="feature-text-box">
                <h4 className="feature-item-title">Ingredient Sourcing</h4>
                <p className="feature-item-desc">Natural ingredients ut enim ad minim veniam, quis nostrud</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="perfume-feature-item">
              <div className="feature-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="feature-svg-icon">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l3 3 5-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feature-text-box">
                <h4 className="feature-item-title">Guaranteed Pure</h4>
                <p className="feature-item-desc">Natural ingredients ut enim ad minim veniam, quis nostrud</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Smooth Video Modal Overlay */}
      {isVideoOpen && (
        <div className="video-modal-backdrop" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close-btn" onClick={closeVideoModal}>&times;</button>
            <div className="video-responsive-wrapper">
              {/* Replace URL below with your actual YouTube embed link or HTML5 video tag */}
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Perfume Presentation Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PerfumeLimitedEditionFind;