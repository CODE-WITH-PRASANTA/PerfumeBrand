import React from "react";
import "./OurCollections.css";

import womenPerfume from "../../assets/ta1.webp";
import menPerfume from "../../assets/ta2.webp";

import giftSets from "../../assets/ta1.webp";
import bestSeller from "../../assets/ta2.webp";
import newFragrance from "../../assets/ta3.webp";

import kidsPerfume from "../../assets/ta2.webp";
import hotDeals from "../../assets/ta2.webp";
import menCologne from "../../assets/ta2.webp";

const featuredCollections = [
  {
    id: 1,
    title: "Women Perfumes",
    items: "7 Items",
    image: womenPerfume,
  },
  {
    id: 2,
    title: "Men Colognes",
    items: "9 Items",
    image: menPerfume,
  },
];

const middleCollections = [
  {
    id: 1,
    title: "Gift Sets",
    items: "10 Items",
    image: giftSets,
  },
  {
    id: 2,
    title: "Best Sellers",
    items: "12 Items",
    image: bestSeller,
  },
  {
    id: 3,
    title: "New Fragrance",
    items: "3 Items",
    image: newFragrance,
  },
];

const bottomCollections = [
  {
    id: 1,
    title: "Kids Perfume",
    items: "8 Items",
    image: kidsPerfume,
  },
  {
    id: 2,
    title: "Hot Deals",
    items: "8 Items",
    image: hotDeals,
  },
  {
    id: 3,
    title: "Men Colognes",
    items: "9 Items",
    image: menCologne,
  },
];

const Card = ({ item, large }) => {
  return (
    <div className={large ? "OurCollectionsLargeCard" : "OurCollectionsCard"}>
      <div
        className={
          large
            ? "OurCollectionsLargeImageBox"
            : "OurCollectionsImageBox"
        }
      >
        <img
          src={item.image}
          alt={item.title}
          className={
            large
              ? "OurCollectionsLargeImage"
              : "OurCollectionsImage"
          }
        />
      </div>

      <div className="OurCollectionsContent">
        <h3>{item.title}</h3>
        <span>{item.items}</span>
      </div>
    </div>
  );
};

const OurCollections = () => {
  return (
    <section className="OurCollections">
      <div className="OurCollectionsContainer">

        <div className="OurCollectionsHeading">
          <h2>Our Best Collections</h2>
        </div>

        {/* Top Large Cards */}
        <div className="OurCollectionsLargeGrid">
          {featuredCollections.map((item) => (
            <Card key={item.id} item={item} large />
          ))}
        </div>

        {/* Middle Cards */}
        <div className="OurCollectionsGrid">
          {middleCollections.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom Cards */}
        <div className="OurCollectionsGrid OurCollectionsBottomGrid">
          {bottomCollections.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurCollections;