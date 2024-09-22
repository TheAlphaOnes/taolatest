import React from "react";

import "../css/AuraPageStyle.css";

import rightArrow from "../assets/grey-arrow-line-right.png";
import AuraListBox from "../components/AuraListBox";
import MoveNextProg from "../components/MoveNextProg";

function AuraPage() {
  return (
    <div id="aura-box">
      <div id="aura-box-title-box">
        <div id="aura-box-title"> Aura LifeStyle</div>
        <div id="aura-box-title-img-box">
          <img id="aura-box-title-img" src={rightArrow} alt="" />
          <div className="ma-matchuda">Sometimes you’ve gotta run before you can walk.</div>
        </div>
      </div>

      <AuraListBox/>
      <MoveNextProg/>
    </div>
  );
}

export default AuraPage;
