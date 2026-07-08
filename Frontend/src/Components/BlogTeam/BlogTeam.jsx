import React, { useState } from 'react';
import { FaUserCircle, FaCalendarAlt } from 'react-icons/fa';
import './BlogTeam.css';

// --- Dummy Data Array (8 items total) ---
const cardData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
    author: 'Team 90Degree',
    date: 'Feb 28, 2025',
    title: 'Proper way to apply perfumes 2025',
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in...'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    author: 'Team 90Degree',
    date: 'Feb 28, 2025',
    title: 'Top 5 Timeless & Classic Fragrances',
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in...'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
    author: 'Team 90Degree',
    date: 'Feb 28, 2025',
    title: "Our Perfumers' Picks Of The Top 8",
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in...'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
    author: 'Team 90Degree',
    date: 'Mar 02, 2025',
    title: 'How to Store Your Luxury Fragrances',
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in...'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
    author: 'Team 90Degree',
    date: 'Mar 10, 2025',
    title: 'Understanding Fragrance Notes: Base vs Top',
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in...'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1588405748373-122b2321bc31?auto=format&fit=crop&w=800&q=80',
    author: 'Team 90Degree',
    date: 'Mar 15, 2025',
    title: 'The Rise of Unisex Scents in Modern Fashion',
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in...'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80',
    author: 'Team 90Degree',
    date: 'Mar 22, 2025',
    title: 'Choosing Your Signature Spring Aroma',
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in...'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=80',
    author: 'Team 90Degree',
    date: 'Apr 01, 2025',
    title: 'The History and Chemistry of Fine Perfumery',
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in...'
  }
];

const BlogTeam = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6; 

  // Pagination Calculations
  const totalPages = Math.ceil(cardData.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevChange = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextChange = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  return (
    <div className="BlogTeam">
      {/* Blog Cards Grid Layout */}
      <div className="BlogTeam-grid">
        {currentCards.map((card) => (
          <div key={card.id} className="BlogTeam-card">
            <div className="BlogTeam-imageWrapper">
              <img src={card.image} alt={card.title} className="BlogTeam-img" />
            </div>
            
            <div className="BlogTeam-content">
              <div className="BlogTeam-meta">
                <span className="BlogTeam-metaItem">
                  <FaUserCircle className="BlogTeam-icon" />
                  {card.author}
                </span>
                <span className="BlogTeam-metaItem">
                  <FaCalendarAlt className="BlogTeam-icon" />
                  {card.date}
                </span>
              </div>
              
              <h3 className="BlogTeam-title">{card.title}</h3>
              <p className="BlogTeam-text">{card.text}</p>
              
              <button className="BlogTeam-btn">READ MORE</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="BlogTeam-pagination">
        {/* Prev button ONLY displays when you are not on page 1 */}
        {currentPage > 1 && (
          <button onClick={handlePrevChange} className="BlogTeam-pageBtn prev">
            Prev
          </button>
        )}

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`BlogTeam-pageBtn ${currentPage === pageNumber ? 'active' : ''}`}
          >
            {pageNumber}
          </button>
        ))}

        {/* Next button disappears dynamically when reaching the last page */}
        {currentPage < totalPages && (
          <button onClick={handleNextChange} className="BlogTeam-pageBtn next">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogTeam;