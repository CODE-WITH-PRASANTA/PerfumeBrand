import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io'; 
import './Cart.css';

// Removed the default '= true' from isOpen to let the parent state rule explicitly
const Cart = ({ isOpen, onClose }) => {
  
  const drawerVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0,
      transition: { type: 'tween', duration: 0.35, ease: 'easeOut' }
    },
    exit: { 
      x: '100%',
      transition: { type: 'tween', duration: 0.3, ease: 'easeIn' }
    }
  };

  const boxIconVariants = {
    animate: {
      y: [0, -5, 0],
      transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="cart-overlay" onClick={onClose}>
          {/* Main Sliding Drawer Panel */}
          <motion.div 
            className="cart-container"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // Blocks overlay trigger inside container
          >
            {/* Cart Header Section */}
            <div className="cart-header">
              <h2 className="cart-header-title">Shopping Cart</h2>
              <button className="cart-close-button" onClick={onClose} aria-label="Close cart">
                <IoMdClose size={24} />
              </button>
            </div>

            {/* Cart Central Content Area */}
            <div className="cart-content">
              <div className="cart-empty-wrapper">
                
                {/* Animated Empty Box Graphic Context */}
                <motion.div 
                  className="cart-icon-container"
                  variants={boxIconVariants}
                  animate="animate"
                >
                  <svg 
                    className="cart-svg-box"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    <path d="m3.3 7 8.7 5 8.7-5" />
                    <path d="M12 22V12" />
                    <circle cx="12" cy="14.5" r="0.8" fill="currentColor" />
                    <path d="M10.5 17.2c.4-.4.9-.6 1.5-.6s1.1.2 1.5.6" />
                  </svg>
                  <span className="cart-sparkle particle-cross">×</span>
                  <span className="cart-sparkle particle-circle">○</span>
                  <span className="cart-sparkle particle-plus">+</span>
                </motion.div>

                {/* Empty State Labels */}
                <h3 className="cart-title">Your cart is empty</h3>
                <a href="#shop" className="cart-continue-link" onClick={onClose}>
                  Continue shopping
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Cart;