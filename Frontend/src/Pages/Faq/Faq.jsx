import React from "react";
import "./Faq.css";
import FaqBreadCrum from "../../Components/FaqBreadCrum/FaqBreadCrum";
import FaqQuestions from "../../Components/FaqQuestions/FaqQuestions";
import FaqTrusted from "../../Components/FaqTrusted/FaqTrusted";
import FaqBasicQuestions from "../../Components/FaqBasicQuestions/FaqBasicQuestions";


const Faq = () => {
  return (
    <div>
      <FaqBreadCrum/>
      <FaqQuestions/>
      <FaqTrusted/>
      <FaqBasicQuestions/>

    </div>
  )
}

export default Faq