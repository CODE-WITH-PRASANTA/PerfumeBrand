import React, { useState } from 'react';
import { FaPlay, FaLeaf, FaAward } from 'react-icons/fa';
import './Perfectperfume.css';

// Import your beautiful cover image asset
import perfumeHeroImg from '../../assets/all7.webp'; 

const Perfectperfume = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Your YouTube video ID string
  const youtubeVideoId = "dQw4w9WgXcQ"; 

  return (
    <section className="Perfectperfume">
      <div className="Perfectperfume-container">
        
        {/* ==================== LEFT HAND MEDIA SHOWCASE ==================== */}
        <div className="Perfectperfume-mediaBlock">
          <div className="Perfectperfume-imageWrapper">
            
            {!isVideoPlaying ? (
              <>
                {/* Static Placeholder Cover Image */}
                <img 
                  src={perfumeHeroImg} 
                  alt="Luxury perfume bottle display" 
                  className="Perfectperfume-heroImage" 
                />
                {/* Bottom-Left Positioned Play Button Ring */}
                <button 
                  className="Perfectperfume-videoPlayBtn" 
                  onClick={() => setIsVideoPlaying(true)}
                  aria-label="Play commercial video stream"
                >
                  <div className="Perfectperfume-playRing">
                    <FaPlay className="Perfectperfume-playIcon" />
                  </div>
                </button>
              </>
            ) : (
              /* Inline Responsive YouTube Iframe Embed */
              <div className="Perfectperfume-videoContainer">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="Perfectperfume-iframe"
                ></iframe>
              </div>
            )}

          </div>
        </div>

        {/* ==================== RIGHT HAND CONTENT AREA ==================== */}
        <div className="Perfectperfume-contentBlock">
          <h2 className="Perfectperfume-mainTitle">
            Find The Perfect Perfume To <br /> Express Unique Style.
          </h2>
          
          <p className="Perfectperfume-description">
            Pair text with an image to focus on your chosen product, collection, or blog post. 
            Add details on availability, style, or even provide a review.
          </p>

          {/* Feature List Items */}
          <div className="Perfectperfume-featuresList">
            
            {/* Feature Item 1 */}
            <div className="Perfectperfume-featureItem">
              <div className="Perfectperfume-iconWrapper">
                <FaLeaf className="Perfectperfume-featureIcon" />
              </div>
              <div className="Perfectperfume-featureTexts">
                <h3 className="Perfectperfume-featureTitle">Ingredient Sourcing</h3>
                <p className="Perfectperfume-featureDesc">
                  Natural ingredients ut enim ad minim veniam, quis nostrud
                </p>
              </div>
            </div>

            {/* Feature Item 2 */}
            <div className="Perfectperfume-featureItem">
              <div className="Perfectperfume-iconWrapper">
                <FaAward className="Perfectperfume-featureIcon" />
              </div>
              <div className="Perfectperfume-featureTexts">
                <h3 className="Perfectperfume-featureTitle">Guaranteed Pure</h3>
                <p className="Perfectperfume-featureDesc">
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

export default Perfectperfume;