import React from "react";
import "./AboutOurTeam.css";

import {
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import { RiTwitterXFill } from "react-icons/ri";

/*============ TEAM IMAGES ============*/
/* Replace these with your own images */

import team1 from "../../assets/About img04.webp";
import team2 from "../../assets/About img05.webp";
import team3 from "../../assets/About img06.webp";
import team4 from "../../assets/About img07.webp";

const teamMembers = [
  {
    id: 1,
    name: "Kristopher Bunn",
    role: "Perfume Expert",
    image: team1,
  },
  {
    id: 2,
    name: "Barbara Hamby",
    role: "Labor Assistance",
    image: team2,
  },
  {
    id: 3,
    name: "Michael Murray",
    role: "Perfume Expert",
    image: team3,
  },
  {
    id: 4,
    name: "Kevin Berke",
    role: "Administrator",
    image: team4,
  },
];

/* Duplicate cards for seamless infinite scrolling */
const sliderData = [...teamMembers, ...teamMembers];

const AboutOurTeam = () => {
  return (
    <section className="aot-section">

      <div className="aot-heading">

        <h5>OUR TEAM</h5>

        <h2>
          Meet Our Experts
        </h2>

      </div>

      <div className="aot-slider-wrapper">

        <div className="aot-slider-track">

          {sliderData.map((member, index) => (

            <div
              className="aot-card"
              key={`${member.id}-${index}`}
            >
              {/*================ IMAGE ================*/}

              <div className="aot-image">

                <img
                  src={member.image}
                  alt={member.name}
                />

              </div>

              {/*================ INFO CARD ================*/}

              <div className="aot-info">

                <div className="aot-social">

                  <a href="#">
                    <FaFacebookF />
                  </a>

                  <a href="#">
                    <RiTwitterXFill />
                  </a>

                  <a href="#">
                    <FaYoutube />
                  </a>

                </div>

                <h3>{member.name}</h3>

                <p>{member.role}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default AboutOurTeam;