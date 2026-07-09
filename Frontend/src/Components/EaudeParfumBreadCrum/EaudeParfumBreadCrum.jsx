import React from 'react';
import './EaudeParfumBreadCrum.css';

const EaudeParfumBreadCrum = () => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-container">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <a href="/" className="breadcrumb-link">Home</a>
        </li>
        <li className="breadcrumb-separator" aria-hidden="true">/</li>
        <li className="breadcrumb-item">
          <span className="breadcrumb-current" aria-current="page">Gift Sets</span>
        </li>
      </ol>
    </nav>
  );
};

export default EaudeParfumBreadCrum;