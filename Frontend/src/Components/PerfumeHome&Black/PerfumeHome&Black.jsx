import React, { useState } from "react";
import './PerfumeHome&Black.css'
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearchPlus,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import {
  BsDash,
  BsPlus,
  BsShieldCheck,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// Dummy Images
import perfume1 from "../../assets/perfume1.png";
import perfume2 from "../../assets/perfume2.png";
import perfume3 from "../../assets/perfume3.png";
import perfume4 from "../../assets/perfume4.png";
import perfume5 from "../../assets/perfume5.png";

const perfumes = [
  {
    id: 1,
    name: "Black Wild Fragrance",
    color: "Red",
    image: perfume1,
    route: "/perfume-black",
  },
  {
    id: 2,
    name: "Royal Black",
    color: "Black",
    image: perfume2,
    route: "/perfume-royal",
  },
  {
    id: 3,
    name: "Golden Luxury",
    color: "Brown",
    image: perfume3,
    route: "/perfume-golden",
  },
  {
    id: 4,
    name: "Luxury Night",
    color: "Amber",
    image: perfume4,
    route: "/perfume-night",
  },
  {
    id: 5,
    name: "Ocean Fresh",
    color: "Blue",
    image: perfume5,
    route: "/perfume-ocean",
  },
];

const PerfumeHomeBlack = () => {
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);

  const [weight, setWeight] = useState("100g");

  const [quantity, setQuantity] = useState(1);

  const [showDescription, setShowDescription] = useState(false);

  const [showPrivacy, setShowPrivacy] = useState(false);

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === perfumes.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? perfumes.length - 1 : prev - 1
    );
  };

  return (
    <div className="PerfumeHomeBlack">

      <div className="PerfumeHomeBlack-wrapper">

        {/* LEFT */}

        <div className="PerfumeHomeBlack-left">

          <div className="PerfumeHomeBlack-imageBox">

            <img
              src={perfumes[currentImage].image}
              alt=""
            />

            <div className="PerfumeHomeBlack-zoom">

              <FaSearchPlus />

            </div>

          </div>

          <div className="PerfumeHomeBlack-thumbnailWrapper">

            <button
              className="PerfumeHomeBlack-arrow"
              onClick={previousImage}
            >
              <FaChevronLeft />
            </button>

            <div className="PerfumeHomeBlack-thumbnailContainer">

              {perfumes.map((item, index) => (

                <div
                  key={item.id}
                  className={`PerfumeHomeBlack-thumbnail ${
                    currentImage === index ? "active" : ""
                  }`}
                  onClick={() => {
                    setCurrentImage(index);
                    navigate(item.route);
                  }}
                >
                  <img src={item.image} alt="" />
                </div>

              ))}

            </div>

            <button
              className="PerfumeHomeBlack-arrow"
              onClick={nextImage}
            >
              <FaChevronRight />
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="PerfumeHomeBlack-right">

          <div className="PerfumeHomeBlack-breadcrumb">

            Home / {perfumes[currentImage].name}

          </div>

          <p className="PerfumeHomeBlack-sku">

            <strong>Sku:</strong> 3010

          </p>

          <div className="PerfumeHomeBlack-rating">

            ★★★★☆

            <span>(2)</span>

          </div>

          <h1>

            {perfumes[currentImage].name}

          </h1>

          <div className="PerfumeHomeBlack-price">

            <span className="new">$30.00</span>

            <span className="old">$60.00</span>

            <span className="sale">SALE</span>

            <span className="discount">-50%</span>

          </div>

          <p className="PerfumeHomeBlack-stock">

            Only 8 items in stock!

          </p>

          <div className="PerfumeHomeBlack-progress">

            <div></div>

          </div>

          {/* COLOR */}

          <div className="PerfumeHomeBlack-section">

            <h4>

              Color:
              <span>

                {" "}
                {perfumes[currentImage].color}

              </span>

            </h4>

            <div className="PerfumeHomeBlack-colors">

              {perfumes.map((item, index) => (

                <div
                  key={item.id}
                  className={`PerfumeHomeBlack-colorCircle ${
                    currentImage === index ? "selected" : ""
                  }`}
                  title={item.color}
                  onClick={() => {
                    setCurrentImage(index);
                  }}
                >
                  <img
                    src={item.image}
                    alt=""
                  />
                </div>

              ))}

            </div>

          </div>

          {/* WEIGHT */}

          <div className="PerfumeHomeBlack-section">

            <h4>

              Weight:
              <span> {weight}</span>

            </h4>

            <div className="PerfumeHomeBlack-weight">

              <button
                className={
                  weight === "100g"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setWeight("100g")
                }
              >
                100g
              </button>

              <button
                className={
                  weight === "200g"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setWeight("200g")
                }
              >
                200g
              </button>

              <button
                className={
                  weight === "500g"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setWeight("500g")
                }
              >
                500g
              </button>

            </div>

          </div>

          {/* QUANTITY */}

          <div className="PerfumeHomeBlack-section">

            <h4>Quantity</h4>

            <div className="PerfumeHomeBlack-cartRow">

              <div className="PerfumeHomeBlack-quantity">

                <button
                  onClick={decreaseQty}
                >
                  <BsDash />
                </button>

                <span>{quantity}</span>

                <button
                  onClick={increaseQty}
                >
                  <BsPlus />
                </button>

              </div>

              <button className="PerfumeHomeBlack-cartBtn">

                ADD TO CART

              </button>

            </div>

            <button className="PerfumeHomeBlack-buyBtn">

              BUY IT NOW

            </button>
                        {/* GUARANTEED SAFE CHECKOUT */}

            <div className="PerfumeHomeBlack-safeCheckout">

              <h4>Guaranteed safe checkout</h4>

              <div className="PerfumeHomeBlack-paymentIcons">

                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                  alt="Visa"
                />

                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  alt="Mastercard"
                />

                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
                  alt="American Express"
                />

                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="Paypal"
                />

                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/39/Discover_Card_logo.svg"
                  alt="Discover"
                />

              </div>

            </div>

            {/* PRODUCT DESCRIPTION */}

            <div className="PerfumeHomeBlack-accordion">

              <div
                className="PerfumeHomeBlack-accordionHeader"
                onClick={() =>
                  setShowDescription(!showDescription)
                }
              >

                <div className="PerfumeHomeBlack-accordionTitle">

                  <BsShieldCheck />

                  <span>Product Description</span>

                </div>

                {showDescription ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}

              </div>

              {showDescription && (

                <div className="PerfumeHomeBlack-accordionBody">

                  <p>

                    Black Wild Fragrance is a luxurious premium perfume
                    designed for people who appreciate elegance and
                    sophistication. The fragrance opens with fresh citrus
                    notes, blends into floral heart notes, and finishes with
                    warm woody musk for a long-lasting impression.

                  </p>

                  <p>

                    Carefully crafted using high-quality essential oils,
                    this perfume provides an exceptional fragrance
                    experience throughout the day while remaining gentle on
                    the skin.

                  </p>

                  <ul>

                    <li>✔ Premium long-lasting fragrance</li>

                    <li>✔ Elegant crystal bottle design</li>

                    <li>✔ Suitable for men & women</li>

                    <li>✔ Perfect for parties & daily use</li>

                    <li>✔ Skin-friendly ingredients</li>

                  </ul>

                </div>

              )}

            </div>

            {/* PRIVACY POLICY */}

            <div className="PerfumeHomeBlack-accordion">

              <div
                className="PerfumeHomeBlack-accordionHeader"
                onClick={() =>
                  setShowPrivacy(!showPrivacy)
                }
              >

                <div className="PerfumeHomeBlack-accordionTitle">

                  <BsShieldCheck />

                  <span>Our Privacy Policy</span>

                </div>

                {showPrivacy ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}

              </div>

              {showPrivacy && (

                <div className="PerfumeHomeBlack-accordionBody">

                  <p>

                    Your privacy is our highest priority. All personal
                    information shared while placing an order is protected
                    using secure encryption technology.

                  </p>

                  <p>

                    We never sell or distribute customer information to
                    third parties. Payment transactions are securely
                    processed through trusted payment gateways.

                  </p>

                  <ul>

                    <li>✔ 100% Secure Payment</li>

                    <li>✔ SSL Encrypted Checkout</li>

                    <li>✔ Fast & Safe Delivery</li>

                    <li>✔ Easy Return Policy</li>

                    <li>✔ Customer Data Protection</li>

                  </ul>

                </div>

              )}

            </div>

            {/* SOCIAL SHARE */}

            <div className="PerfumeHomeBlack-social">

              <a href="#">
                <FaFacebookF />
                <span>Facebook</span>
              </a>

              <a href="#">
                <FaTwitter />
                <span>Twitter</span>
              </a>

              <a href="#">
                <FaPinterestP />
                <span>Pin it</span>
              </a>

              <a href="#">
                Share More
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default PerfumeHomeBlack;