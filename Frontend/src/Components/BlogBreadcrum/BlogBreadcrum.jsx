import React from 'react';
import { FaHome } from 'react-icons/fa';
import './BlogBreadcrum.css';

const BlogBreadcrum = () => {
  return (
    <div className="BlogBreadcrum">
      <div className="BlogBreadcrum-container">
        <a href="/" className="BlogBreadcrum-link">
          <FaHome className="BlogBreadcrum-icon" />
          <span>Home</span>
        </a>
        <span className="BlogBreadcrum-separator">/</span>
        <span className="BlogBreadcrum-current">News</span>
      </div>
    </div>
  );
};

export default BlogBreadcrum;