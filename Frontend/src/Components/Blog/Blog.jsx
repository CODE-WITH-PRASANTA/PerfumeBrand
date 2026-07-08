import React from 'react';
import './Blog.css';
import perfumeImage from '../../assets/girl.webp';

const stats = [
  { value: '1.5K', label: 'RETAIL OUTLETS' },
  { value: '5.0K', label: 'PRODUCTS' },
  { value: '1.3 MILLION', label: 'CUSTOMERS' },
  { value: '2.5K', label: 'PHARMACISTS' },
];

const progressItems = [
  { percent: 98, label: 'HAPPY CUSTOMERS' },
  { percent: 85, label: '12 YEARS OF EXPERIENCE' },
];

const WhoWeAre = () => {
  return (
    <div className="WhoWeAre">
      <div className="WhoWeAre-top">
        <div className="WhoWeAre-imageWrap">
          <img
            src={perfumeImage}
            alt="Woman choosing perfume from a store shelf"
            className="WhoWeAre-image"
          />

          <div className="WhoWeAre-card">
            {progressItems.map((item, index) => (
              <div className="WhoWeAre-progressRow" key={index}>
                <div className="WhoWeAre-progressHeader">
                  <span className="WhoWeAre-badge">{item.percent}%</span>
                  <span className="WhoWeAre-progressLabel">{item.label}</span>
                </div>
                <div className="WhoWeAre-progressTrack">
                  <div
                    className="WhoWeAre-progressFill"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="WhoWeAre-content">
          <span className="WhoWeAre-eyebrow">WHO WE ARE</span>
          <h2 className="WhoWeAre-heading">
            Arome<sup>®</sup> was founded belief that Perfect Perfume is more
            than just a necessity.
          </h2>
          <p className="WhoWeAre-text">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type.
          </p>
          <button type="button" className="WhoWeAre-button">
            SHOP NOW
          </button>
        </div>
      </div>

      <div className="WhoWeAre-stats">
        {stats.map((stat, index) => (
          <div className="WhoWeAre-statItem" key={index}>
            <div className="WhoWeAre-statValue">{stat.value}</div>
            <div className="WhoWeAre-statLabel">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;