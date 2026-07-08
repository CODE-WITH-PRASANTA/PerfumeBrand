import React, { useState } from 'react';
import { 
  FaCalendarAlt, 
  FaUser, 
  FaComments, 
  FaFacebookF, 
  FaTwitter, 
  FaPinterestP, 
  FaLinkedinIn 
} from 'react-icons/fa';
import './BlogDetails.css';

// Importing the header image you provided (assuming it's saved locally)
import bannerImg from "../../assets/pr1.webp"; 
// A placeholder for the secondary image layout slot
import secondaryImgPlaceholder from "../../assets/pr2.webp"; 

const BlogDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add form submission logic here
    setFormData({ name: '', email: '', comment: '' });
  };

  return (
    <article className="BlogDetails">
      {/* 1. Main Header Panoramic Image Canvas */}
      <div className="BlogDetails-bannerContainer">
        <img 
          src={bannerImg} 
          alt="Perfume bottle with floral elements" 
          className="BlogDetails-bannerImg" 
        />
      </div>

      {/* Nested Text Margin Content Alignment Frame */}
      <div className="BlogDetails-mainContent">
        
        {/* Typography & Meta */}
        <h1 className="BlogDetails-mainHeading">
          The Art of Scent: Crafting the Perfect Fragrance Palette
        </h1>

        <div className="BlogDetails-metaRow">
          <div className="BlogDetails-metaItem">
            <FaCalendarAlt className="BlogDetails-metaIcon" />
            <span>July 8, 2026</span>
          </div>
          <div className="BlogDetails-metaItem">
            <FaUser className="BlogDetails-metaIcon" />
            <span>By Sophia Loren</span>
          </div>
          <div className="BlogDetails-metaItem">
            <FaComments className="BlogDetails-metaIcon" />
            <span>1 Comment</span>
          </div>
        </div>

        <p className="BlogDetails-paragraph">
          Scent is a powerful language that speaks directly to our emotions and memories. Finding the right balance between top, middle, and base notes requires patience, precision, and an understanding of how distinct botanical essences interact over time. Whether it's the crisp bite of citrus or the deep warmth of amber, every layer matters.
        </p>

        <p className="BlogDetails-paragraph">
          When exploring artisanal perfume creation, the environment plays a massive role. Natural elements, raw floral backdrops, and aged wood accents don't just provide visual inspiration—they represent the very ingredients grounding the olfactory experience.
        </p>

        {/* 2nd Photo Layout Area (Swapped Architecture Style) */}
        <div className="BlogDetails-secondaryImageContainer">
          <div className="BlogDetails-secondaryImgWrapper">
            <img 
              src={secondaryImgPlaceholder} 
              alt="Fragrance details presentation" 
              className="BlogDetails-secondaryImg" 
            />
          </div>
        </div>

        {/* Quotes & Interactive Elements */}
        <blockquote className="BlogDetails-quoteBox">
          "Perfume is like a new dress, it makes you quite simply marvelous." – Estée Lauder
        </blockquote>

        <p className="BlogDetails-paragraph">
          As you build out your own fragrance collection or design signature spaces, remember that scent longevity relies heavily on base fixatives. Utilizing high-quality botanical extracts ensures a lingering essence that transitions gracefully throughout the day.
        </p>

        {/* Share Bar */}
        <div className="BlogDetails-shareBar">
          <a href="#facebook" className="BlogDetails-shareLink">
            <FaFacebookF /> Share on Facebook
          </a>
          <a href="#twitter" className="BlogDetails-shareLink">
            <FaTwitter /> Tweet Layout
          </a>
          <a href="#pinterest" className="BlogDetails-shareLink">
            <FaPinterestP /> Pin This
          </a>
          <a href="#linkedin" className="BlogDetails-shareLink">
            <FaLinkedinIn /> Share
          </a>
        </div>

        {/* Post Navigation */}
        <nav className="BlogDetails-postNavigation">
          <span className="BlogDetails-navLink">← Previous Post</span>
          <span className="BlogDetails-navLink">Next Post →</span>
        </nav>

        {/* Comments Section */}
        <section className="BlogDetails-commentsSection">
          <h3 className="BlogDetails-sectionTitle">Comments (1)</h3>
          
          <div className="BlogDetails-commentItem">
            <div className="BlogDetails-avatarPlaceholder">E</div>
            <div className="BlogDetails-commentBody">
              <div className="BlogDetails-commentHeader">
                <span className="BlogDetails-commentAuthor">Elena Rostova</span>
                <span className="BlogDetails-commentDate">July 8, 2026 at 2:15 PM</span>
              </div>
              <p className="BlogDetails-commentText">
                This layout looks absolutely spectacular! The panoramic crop option for the secondary image emphasizes the workspace setup beautifully. Thanks for sharing.
              </p>
            </div>
          </div>
        </section>

        {/* Form Fields & Buttons */}
        <section className="BlogDetails-formSection">
          <h3 className="BlogDetails-sectionTitle">Leave a Reply</h3>
          <form className="BlogDetails-form" onSubmit={handleSubmit}>
            <div className="BlogDetails-formRow">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name *" 
                className="BlogDetails-input" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email *" 
                className="BlogDetails-input" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            <textarea 
              name="comment"
              rows="6" 
              placeholder="Write your comment here..." 
              className="BlogDetails-textarea"
              value={formData.comment}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit" className="BlogDetails-submitBtn">
              SUBMIT COMMENT
            </button>
          </form>
        </section>

      </div>
    </article>
  );
};

export default BlogDetails;