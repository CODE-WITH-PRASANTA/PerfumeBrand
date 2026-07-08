import React, { useState } from 'react';
import { 
  FaXTwitter, 
  FaInstagram, 
  FaFacebookF, 
  FaPinterestP, 
  FaSnapchat,
  FaChevronUp,
  FaRegUser,
  FaRegCalendarDays
} from 'react-icons/fa6';
import './Blog.css';

const Blog = () => {
  // 6 specific mock cards from your reference visuals
  const blogCards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
      author: "Team 90Degree",
      date: "Feb 28, 2025",
      title: "Proper way to apply perfumes 2025",
      excerpt: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in..."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
      author: "Team 90Degree",
      date: "Feb 28, 2025",
      title: "Top 5 Timeless & Classic Fragrances",
      excerpt: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in..."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
      author: "Team 90Degree",
      date: "Feb 28, 2025",
      title: "Our Perfumers' Picks Of The Top 8",
      excerpt: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in..."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
      author: "Team 90Degree",
      date: "Feb 28, 2025",
      title: "Traveling Through Scent with Botanicae",
      excerpt: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in..."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80",
      author: "Team 90Degree",
      date: "Feb 28, 2025",
      title: "Guide to Always Smelling Exquisite",
      excerpt: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in..."
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=600&q=80",
      author: "Team 90Degree",
      date: "Feb 28, 2025",
      title: "Arome Rose Incense ~ new fragrance",
      excerpt: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in..."
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="blog-container">
      
      {/* Blog Cards Grid Wrapper */}
      <main className="blog-main">
        <div className="blog-grid">
          {blogCards.map((card) => (
            <div key={card.id} className="blog-card">
              <div className="blog-card-image-wrapper">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="blog-card-image" 
                />
              </div>

              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span className="blog-card-author">
                    <FaRegUser className="blog-meta-icon" /> {card.author}
                  </span>
                  <span className="blog-card-date">
                    <FaRegCalendarDays className="blog-meta-icon" /> {card.date}
                  </span>
                </div>

                <h3 className="blog-card-title">{card.title}</h3>
                <p className="blog-card-excerpt">{card.excerpt}</p>

                <button className="blog-card-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="blog-pagination">
          <button 
            onClick={() => setCurrentPage(1)}
            className={`blog-pag-item ${currentPage === 1 ? 'blog-pag-active' : ''}`}
          >
            1
          </button>
          <button 
            onClick={() => setCurrentPage(2)}
            className={`blog-pag-item ${currentPage === 2 ? 'blog-pag-active' : ''}`}
          >
            2
          </button>
          <button 
            onClick={() => setCurrentPage(prev => (prev === 1 ? 2 : 1))}
            className="blog-pag-item blog-pag-next"
          >
            Next
          </button>
        </div>
      </main>

      {/* Brand Footer Panel */}
      <footer className="blog-footer">
        <div className="blog-footer-max">
          
          {/* Column 1: Identity & Description */}
          <div className="blog-footer-col">
            <div className="blog-logo-container">
              <span className="blog-logo-main">AROME</span>
              <span className="blog-logo-sub">PERFUME SHOP</span>
            </div>
            <p className="blog-footer-desc">
              Arome® was founded on the belief that wellness is more than just a necessity—it's a powerful expression of self-care and vitality.
            </p>
            <div className="blog-footer-socials">
              <a href="#x" aria-label="X Twitter"><FaXTwitter size={13} /></a>
              <a href="#instagram" aria-label="Instagram"><FaInstagram size={13} /></a>
              <a href="#facebook" aria-label="Facebook"><FaFacebookF size={13} /></a>
              <a href="#pinterest" aria-label="Pinterest"><FaPinterestP size={13} /></a>
              <a href="#snapchat" aria-label="Snapchat"><FaSnapchat size={13} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="blog-footer-col">
            <h4 className="blog-footer-heading">Useful Links</h4>
            <ul className="blog-footer-list">
              <li><span>-</span> My Account</li>
              <li><span>-</span> Shopping Cart</li>
              <li><span>-</span> My Wishlist</li>
              <li><span>-</span> Our Store Info</li>
            </ul>
          </div>

          {/* Column 3: Corporate Info */}
          <div className="blog-footer-col">
            <h4 className="blog-footer-heading">Information</h4>
            <ul className="blog-footer-list">
              <li><span>-</span> Order tracking</li>
              <li><span>-</span> WishList</li>
              <li><span>-</span> Privacy Policy</li>
              <li><span>-</span> Terms of Service</li>
            </ul>
          </div>

          {/* Column 4: Contact Particulars */}
          <div className="blog-footer-col">
            <h4 className="blog-footer-heading">Contact Info</h4>
            <div className="blog-footer-contact">
              <div className="blog-contact-group">
                <a href="mailto:manager@arome.com">manager@arome.com</a>
                <a href="mailto:support@arome.com">support@arome.com</a>
              </div>
              <div className="blog-contact-group">
                <a href="tel:+12345678910">+12345678 910</a>
                <a href="tel:+12345678109">+12345678 109</a>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll-Back-Up Node */}
        <button className="blog-scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
          <FaChevronUp size={14} />
        </button>
      </footer>

    </div>
  );
};

export default Blog;