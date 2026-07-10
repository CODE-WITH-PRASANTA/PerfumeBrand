import React, { useState } from 'react';
import './EaudeParfumStyle.css';

// Asset placeholder path - replace with your real location path
import perfumeSectionImg from '../../assets/all7.webp'; 

const EaudeParfumStyle = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="perfume-style-section">
      <div className="perfume-style-container">
        
        {/* LEFT PANEL: MEDIA VIEWER */}
        <div className="perfume-style-media-wrapper">
          {!isVideoPlaying ? (
            <div className="media-poster-frame">
              <img 
                src={perfumeSectionImg} 
                alt="Luxury Perfume Glass Bottle Detail" 
                className="media-display-image"
              />
              {/* Play Action Overlay Button */}
              <button 
                className="media-play-trigger-overlay" 
                onClick={() => setIsVideoPlaying(true)}
                aria-label="Play product story feature video"
              >
                <div className="play-button-ring">
                  <svg className="play-icon-glyph" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
          ) : (
            <div className="video-player-embed-container">
              {/* Replace video source URL placeholder with your production video link stream */}
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Product Story Video Stream Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button 
                className="close-video-stream-btn" 
                onClick={() => setIsVideoPlaying(false)}
              >
                ✕ Close Preview
              </button>
            </div>
          )}
        </div>

        {/* RIGHT PANEL: PHILOSOPHY CONTENT */}
        <div className="perfume-style-content-specs">
          <h2 className="style-header-typography">
            Find The Perfect Perfume To Express Unique Style.
          </h2>
          
          <p className="style-paragraph-typography">
            Pair text with an image to focus on your chosen product, collection, or blog post. 
            Add details on availability, style, or even provide a review.
          </p>

          {/* ATTRIBUTE METRIC ROWS */}
          <div className="style-attributes-stack-panel">
            
            {/* ROW 1: SOURCING */}
            <div className="attribute-feature-row">
              <div className="attribute-icon-badge">
                <svg className="feature-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 3a9 9 0 110 18 9 9 0 010-18zm0 4a5 5 0 100 10 5 5 0 000-10z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                </svg>
              </div>
              <div className="attribute-text-block">
                <h4 className="attribute-title-text">Ingredient Sourcing</h4>
                <p className="attribute-description-text">
                  Natural ingredients ut enim ad minim veniam, quis nostrud
                </p>
              </div>
            </div>

            {/* ROW 2: PURITY */}
            <div className="attribute-feature-row">
              <div className="attribute-icon-badge">
                <svg className="feature-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 2a10 10 0 100 20 10 10 0 000-20z" />
                </svg>
              </div>
              <div className="attribute-text-block">
                <h4 className="attribute-title-text">Guaranteed Pure</h4>
                <p className="attribute-description-text">
                  Natural ingredients ut enim ad minim veniam, quis nostrud
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default EaudeParfumStyle;