import React from "react";
import "./HeroFoodPhotos.css";

import Prixfix from "../../images/Prix_fixe.png";
import PrixfixCofee from "../../images/Prix_fix_with_coffee.png";
import PrixfixTea from "../../images/Prix_fixe_with_tea.JPG";
import PrixfixWine from "../../images/Prix_fixe_with_Wine.png";

function HeroFoodPhotos(props) {
  return (
    <>
      <div className="hero-photo-grid-container">
        <div>
          <img className="hero-grid-ind-img" src={Prixfix} />
          <span className="photo-Title">Prix Fix</span>
        </div>

        <div>
          <img className="hero-grid-ind-img" src={PrixfixCofee} />
          <span className="photo-Title">Prix Fix Coffee</span>
        </div>

        <div>
          <img className="hero-grid-ind-img" src={PrixfixTea} />
          <span className="photo-Title">Prix Fix Tea</span>
        </div>

        <div>
          <img className="hero-grid-ind-img" src={PrixfixWine} />
          <span className="photo-Title">Prix Fix Wine</span>
        </div>
      </div>
    </>
  );
}

export default HeroFoodPhotos;
