 import React from "react";
import EaudeParfumBreadCrum from "../../Components/EaudeParfumBreadCrum/EaudeParfumBreadCrum";
import EaudeParfumProduct from "../../Components/EaudeParfumProduct/EaudeParfumProduct";
import EaudeParfumStyle from "../../Components/EaudeParfumStyle/EaudeParfumStyle";
import EaudeParfumSale from "../../Components/EaudeParfumSale/EaudeParfumSale";

 const EaudeParfum = () => {
  return (
    <div>
       <EaudeParfumBreadCrum/>
       <EaudeParfumProduct/>
       <EaudeParfumStyle/>
       <EaudeParfumSale/>
       
    </div>
  )
}

export default EaudeParfum 