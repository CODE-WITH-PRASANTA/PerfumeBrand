import React from 'react';
import { motion } from 'framer-motion';
import './Wishlist.css'; // Importing the matching CSS file

const Wishlist = () => {
  // Animation configuration for the box floating effect
  const boxAnimation = {
    initial: { y: 15, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    },
    hover: {
      y: [0, -6, 0],
      transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
    }
  };

  // Sparkles pulsing animation
  const sparkleAnimation = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.4, 1, 0.4],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <div className="wishlist-container">
      <div className="wishlist-content">
        
        {/* Animated Icon Wrapper */}
        <motion.div 
          className="wishlist-icon-wrapper"
          variants={boxAnimation}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <svg 
            className="wishlist-svg"
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {/* Box Outer Structure */}
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
            
            {/* Box Inner Sad Face */}
            <circle cx="12" cy="14.5" r="1" fill="currentColor" />
            <path d="M10 17.5c.5-.5 1.2-.8 2-.8s1.5.3 2 .8" />
          </svg>

          {/* Floating Sparkles Details */}
          <motion.span variants={sparkleAnimation} animate="animate" className="wishlist-sparkle sparkle-one">✦</motion.span>
          <motion.span variants={sparkleAnimation} animate="animate" className="wishlist-sparkle sparkle-two">×</motion.span>
          <motion.span variants={sparkleAnimation} animate="animate" className="wishlist-sparkle sparkle-three">+</motion.span>
        </motion.div>

        {/* Text and Description */}
        <h1 className="wishlist-title">Your wishlist is empty</h1>
        <p className="wishlist-description">No products were added to the wishlist page.</p>

        {/* Button */}
        <button className="wishlist-button">
          BACK TO SHOPPING
        </button>
      </div>
    </div>
  );
};

export default Wishlist;