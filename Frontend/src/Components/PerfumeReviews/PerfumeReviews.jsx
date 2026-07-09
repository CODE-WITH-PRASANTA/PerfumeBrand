import React, { useState, useMemo, useRef, useEffect } from 'react';
import './PerfumeReviews.css';

const INITIAL_REVIEWS = [
  {
    id: 1,
    author: "Best",
    initial: "B",
    avatarBg: "#8A2BE2", 
    rating: 5,
    title: "Best Products",
    comment: "I would buy again. It's a Nice product.",
    date: "28/02/2025",
    timestamp: new Date(2025, 1, 28).getTime(),
    helpfulCount: 1,
    hasPhoto: false,
    photoUrl: null
  }
];

const PerfumeReviews = () => {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [activeTab, setActiveTab] = useState('all'); 
  const [selectedStars, setSelectedStars] = useState([]); 
  const [sortBy, setSortBy] = useState('Most helpful'); 
  
  const [isRatingDropdownOpen, setIsRatingDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formRating, setFormRating] = useState(0);
  const [formHoverRating, setFormHoverRating] = useState(0);
  const [formReview, setFormReview] = useState('');
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');

  const ratingDropdownRef = useRef(null);
  const sortDropdownRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ratingDropdownRef.current && !ratingDropdownRef.current.contains(event.target)) {
        setIsRatingDropdownOpen(false);
      }
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
        setIsSortDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const metrics = useMemo(() => {
    const total = reviews.length;
    if (total === 0) return { avg: "0.0", counts: {5:0, 4:0, 3:0, 2:0, 1:0}, percents: {5:0, 4:0, 3:0, 2:0, 1:0} };
    
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    const avg = (sum / total).toFixed(1);
    
    const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach(r => { counts[r.rating] = (counts[r.rating] || 0) + 1; });
    
    const percents = {};
    for (let i = 1; i <= 5; i++) {
      percents[i] = total > 0 ? Math.round((counts[i] / total) * 100) : 0;
    }
    
    return { avg, total, counts, percents };
  }, [reviews]);

  const processedReviews = useMemo(() => {
    let result = [...reviews];
    if (activeTab === 'photos') result = result.filter(r => r.hasPhoto);
    if (selectedStars.length > 0) result = result.filter(r => selectedStars.includes(r.rating));

    if (sortBy === 'Most helpful') {
      result.sort((a, b) => b.helpfulCount - a.helpfulCount);
    } else if (sortBy === 'Highest rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'Lowest rating') {
      result.sort((a, b) => a.rating - b.rating);
    } else if (sortBy === 'Newest') {
      result.sort((a, b) => b.timestamp - a.timestamp);
    } else if (sortBy === 'Oldest') {
      result.sort((a, b) => a.timestamp - b.timestamp);
    }
    return result;
  }, [reviews, activeTab, selectedStars, sortBy]);

  const handleStarCheckboxChange = (star) => {
    if (selectedStars.includes(star)) {
      setSelectedStars(selectedStars.filter(s => s !== star));
    } else {
      setSelectedStars([...selectedStars, star]);
    }
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (formRating === 0) return alert("Please select a star rating.");

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    const newReviewItem = {
      id: Date.now(),
      author: formName || "John Smith",
      initial: (formName || "J").charAt(0).toUpperCase(),
      avatarBg: "#343743",
      rating: formRating,
      title: formReview.split('.').filter(Boolean)[0] || "Nice Product",
      comment: formReview,
      date: `${dd}/${mm}/${yyyy}`,
      timestamp: today.getTime(),
      helpfulCount: 0,
      hasPhoto: false,
      photoUrl: null
    };

    setReviews([newReviewItem, ...reviews]);
    setFormRating(0);
    setFormReview('');
    setFormName('');
    setFormEmail('');
    setIsModalOpen(false);
  };

  return (
    <div className="PerfumeReviews-wrapper">
      <h2 className='PerfumeReviews-section-titel'>Customer Reviews</h2>
      <div className="PerfumeReviews-layout-grid">
        
        {/* SIDEBAR RATING CARD */}
        <div className="PerfumeReviews-sidebar-card">
          <div className="sidebar-card-top-row">
            <div className="PerfumeReviews-score-block">
              <span className="PerfumeReviews-huge-score">{metrics.avg}</span>
              <div className="PerfumeReviews-stars-row static">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className={`star-icon ${s <= Math.round(parseFloat(metrics.avg)) ? 'filled' : ''}`}>★</span>
                ))}
              </div>
              <span className="PerfumeReviews-total-text">{metrics.total} Review{metrics.total !== 1 && 's'}</span>
            </div>

            <div className="PerfumeReviews-bars-stack">
              {[5, 4, 3, 2, 1].map((starNum) => (
                <div key={starNum} className="PerfumeReviews-bar-row">
                  <span className="bar-num-label">{starNum}</span>
                  <span className="bar-star-mini">★</span>
                  <div className="bar-track-bg">
                    <div className="bar-fill-indicator" style={{ width: `${metrics.percents[starNum]}%` }}></div>
                  </div>
                  <span className="bar-percentage-value">{metrics.percents[starNum]}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="PerfumeReviews-action-prompt">
            <h3>Review this product</h3>
            <p>Share your thoughts with other customers</p>
            <button className="PerfumeReviews-write-trigger-btn" onClick={() => setIsModalOpen(true)}>
              Write a review
            </button>
          </div>
        </div>

        {/* RIGHT FEED STREAM LIST */}
        <div className="PerfumeReviews-feed-block">
          <div className="PerfumeReviews-controls-navbar">
            <div className="controls-left-group">
              <button className={`filter-pill-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => { setActiveTab('all'); setSelectedStars([]); }}>All</button>
              <button className={`filter-pill-btn ${activeTab === 'photos' ? 'active' : ''}`} onClick={() => setActiveTab('photos')}>Review with photos</button>

              <div className="dropdown-wrapper" ref={ratingDropdownRef}>
                <button className="dropdown-trigger-btn" onClick={() => setIsRatingDropdownOpen(!isRatingDropdownOpen)}>
                  All ratings <span className="chevron-icon">▼</span>
                </button>
                {isRatingDropdownOpen && (
                  <div className="dropdown-popup-menu ratings-dropdown">
                    {[5, 4, 3, 2, 1].map((starNum) => (
                      <label key={starNum} className="dropdown-checkbox-item">
                        <input type="checkbox" checked={selectedStars.includes(starNum)} onChange={() => handleStarCheckboxChange(starNum)} />
                        <span className="checkbox-stars-display">★ {starNum}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="controls-right-group">
              <span className="sort-by-label-text">Sort by</span>
              <div className="dropdown-wrapper" ref={sortDropdownRef}>
                <button className="dropdown-trigger-btn sort-btn" onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}>
                  {sortBy} <span className="chevron-icon">▼</span>
                </button>
                {isSortDropdownOpen && (
                  <div className="dropdown-popup-menu sort-dropdown">
                    {['Most helpful', 'Highest rating', 'Lowest rating', 'Oldest', 'Newest'].map((option) => (
                      <div key={option} className={`sort-option-item ${sortBy === option ? 'selected' : ''}`} onClick={() => { setSortBy(option); setIsSortDropdownOpen(false); }}>
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="PerfumeReviews-cards-container">
            {processedReviews.length > 0 ? (
              processedReviews.map((review) => (
                <div key={review.id} className="single-review-card-item">
                  <div className="reviewer-identity-header">
                    <div className="identity-avatar-circle" style={{ backgroundColor: review.avatarBg }}>{review.initial}</div>
                    <span className="identity-name-text">{review.author}</span>
                  </div>
                  <div className="review-stars-row">
                    {[1, 2, 3, 4, 5].map((s) => <span key={s} className={`star-icon ${s <= review.rating ? 'filled' : ''}`}>★</span>)}
                  </div>
                  <h4 className="review-headline-text">{review.title}</h4>
                  <p className="review-body-comment">{review.comment}</p>
                  <div className="review-meta-timestamp">Review on {review.date}</div>
                  <div className="review-card-actions-footer">
                    <button className="helpful-voting-button"><span className="thumbs-up-icon">👍</span> ({review.helpfulCount})</button>
                    <button className="report-abuse-button">Report</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="reviews-empty-state">
                <div className="empty-smiley-face-icon">
                  <div className="smiley-eyes"></div>
                  <div className="smiley-mouth"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MATCHING WRITE A REVIEW PAGE MODAL */}
      {isModalOpen && (
        <div className="PerfumeReviews-modal-backdrop">
          <div className="PerfumeReviews-modal-window modal-exact-look animate-popup">
            
            <div className="modal-exact-header">
              <h3>Ratings & Reviews</h3>
              <button className="modal-exact-close-btn" onClick={() => setIsModalOpen(false)}>×</button>
            </div>

            <form onSubmit={handleSubmitReview} className="modal-exact-body">
              
              {/* Star Selectors */}
              <div className="modal-exact-stars-container">
                {[1, 2, 3, 4, 5].map((starIdx) => {
                  const isFilled = formHoverRating ? starIdx <= formHoverRating : starIdx <= formRating;
                  return (
                    <span 
                      key={starIdx} 
                      className={`exact-star-node ${isFilled ? 'active' : ''}`} 
                      onMouseEnter={() => setFormHoverRating(starIdx)} 
                      onMouseLeave={() => setFormHoverRating(0)} 
                      onClick={() => setFormRating(starIdx)}
                    >
                      ★
                    </span>
                  );
                })}
              </div>

              {/* Product Review TextArea */}
              <div className="modal-exact-field-group">
                <label>Product Review</label>
                <textarea 
                  required 
                  placeholder="Example: Since i bought this a month ago, it has been used a lot. What i like best this product is..." 
                  value={formReview} 
                  onChange={(e) => setFormReview(e.target.value)} 
                />
              </div>

              {/* Upload Media Section */}
              <div className="modal-exact-field-group">
                <label>Upload media</label>
                <div className="modal-exact-upload-zone" onClick={() => fileInputRef.current.click()}>
                  <input type="file" ref={fileInputRef} multiple style={{ display: 'none' }} accept="image/*" />
                  <div className="upload-placeholder-icon">
                    <div className="inner-photo-frame">
                      <div className="inner-circle-sun"></div>
                      <div className="inner-mountains"></div>
                    </div>
                  </div>
                  <p>Upload up to 5 photos drag & drop or <span className="underline-link">click here</span> to upload files</p>
                </div>
              </div>

              {/* Customer Name */}
              <div className="modal-exact-field-group">
                <div className="field-label-row-split">
                  <label>Customer Name</label>
                  <div className="name-display-format-selector">
                    Name display format <span className="arrows-up-down">↕</span> <span className="info-circle-icon">?</span>
                  </div>
                </div>
                <input 
                  type="text" 
                  required 
                  placeholder="Type your name here" 
                  value={formName} 
                  onChange={(e) => setFormName(e.target.value)} 
                />
                <span className="input-subtext-hint">Your name will appear as {formName || "John Smith"}</span>
              </div>

              {/* Customer Email */}
              <div className="modal-exact-field-group">
                <label>Customer Email</label>
                <input 
                  type="email" 
                  required 
                  placeholder="email@example.com" 
                  value={formEmail} 
                  onChange={(e) => setFormEmail(e.target.value)} 
                />
                <span className="input-subtext-hint">Your email is private and is used to send you discount vouchers</span>
              </div>

              {/* Exact Dark Styled Submit Button */}
              <button type="submit" className="modal-exact-submit-btn">Submit Review</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerfumeReviews;