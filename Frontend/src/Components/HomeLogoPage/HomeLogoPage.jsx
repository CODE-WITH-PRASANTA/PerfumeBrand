import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeLogoPage.css";

// Import your logo images here
// Example:
import hayden from "../../assets/hayden.webp";
import parker from "../../assets/parker&co.webp";
import beast from "../../assets/thebeast1999.webp";
import gallery from "../../assets/grandgalary.webp";
import goodMood from "../../assets/goodmood.webp";

const brands = [
  {
    id: 1,
    logo: hayden,
    path: "/hayden",
    alt: "Hayden",
  },
  {
    id: 2,
    logo: parker,
    path: "/parker",
    alt: "Parker & Co.",
  },
  {
    id: 3,
    logo: beast,
    path: "/the-beast",
    alt: "The Beast 1999",
  },
  {
    id: 4,
    logo: gallery,
    path: "/grand-golden-gallery",
    alt: "Grand Golden Gallery",
  },
  {
    id: 5,
    logo: hayden,
    path: "/hayden",
    alt: "Hayden",
  },
  {
    id: 6,
    logo: goodMood,
    path: "/good-mood",
    alt: "Good Mood",
  },
];

const HomeLogoPage = () => {
  const navigate = useNavigate();

  return (
    <section className="logo-section">
      <div className="logo-container">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="logo-card"
            onClick={() => navigate(brand.path)}
          >
            <img src={brand.logo} alt={brand.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeLogoPage;