import React, { useState } from 'react';
import './PerfumeChoose.css';
// Import your image from your assets folder here
import perfumeImg from '../../assets/whychoose.webp'; 

const PerfumeChoose = () => {
  // State to track if the video should play
  const [isPlaying, setIsPlaying] = useState(false);

  // Replace this with your actual YouTube Video ID
 // Replace this with your actual YouTube Video ID
const youtubeVideoId = 'xeXV1KoX034';

  return (
    <section className="PerfumeChoose-container">
      <div className="PerfumeChoose-grid">
        
        {/* Left Side: Media Container */}
        <div className="PerfumeChoose-media-wrapper">
          {!isPlaying ? (
            <>
              {/* Static Thumbnail View */}
              <img 
                src={perfumeImg} 
                alt="Applying luxury perfume" 
                className="PerfumeChoose-image"
              />
              <button 
                className="PerfumeChoose-play-btn" 
                aria-label="Play Video"
                onClick={() => setIsPlaying(true)}
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10 8V16L16 12L10 8Z" fill="currentColor"/>
                </svg>
              </button>
            </>
          ) : (
            <iframe
              className="PerfumeChoose-video"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* Right Side: Text Content */}
        <div className="PerfumeChoose-content">
          <div className="PerfumeChoose-header-group">
            <h2 className="PerfumeChoose-title">Why Choose Us?</h2>
            <p className="PerfumeChoose-description">
              We believe you get out what you put in — that's why our products are 
              made with the highest standards of quality.
            </p>
          </div>

          <div className="PerfumeChoose-features-list">
            {/* Feature 1 */}
            <div className="PerfumeChoose-feature-item">
              <h3 className="PerfumeChoose-feature-title">Premium Quality</h3>
              <p className="PerfumeChoose-feature-text">
                Showcase your high-quality perfumes and essences with a clean, 
                professional blend that builds trust instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="PerfumeChoose-feature-item">
              <h3 className="PerfumeChoose-feature-title">Trust & Transparency</h3>
              <p className="PerfumeChoose-feature-text">
                Highlight premium notes, botanical benefits, and safe certifications clearly, 
                ensuring confidence in every elegant spray.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PerfumeChoose;