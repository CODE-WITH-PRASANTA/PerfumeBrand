import React, { useState } from 'react';
import './HomeUniqueStyle.css';
// 1. Import the image file directly
import perfumeImage from "../../assets/homeuniquestyle.webp";

const HomeUniqueStyle = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="sectionContainer">
      <div className="contentWrapper">
        <div className="headerText">
          <span className="subHeading">Your Signature Scent</span>
          <h2 className="mainHeading">
            Find The Perfect Perfume To <br className="desktopOnly" />
            Express Your Unique Style.
          </h2>
        </div>

        <div className="mediaWrapper">
          {!isPlaying ? (
            <>
              {/* 2. Use the imported variable here instead of a string */}
              <img
                src={perfumeImage}
                alt="Find Your Unique Style"
                className="displayImage"
              />
              
              <div className="overlay">
                <button 
                  className="playButton" 
                  onClick={handlePlayClick}
                  aria-label="Play Video"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="playIcon"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <video
              className="videoPlayer"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              autoPlay
              controls
              playsInline
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeUniqueStyle;