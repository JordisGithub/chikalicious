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
          <div className="hero-photo-div">
            <img className="hero-grid-ind-img" src={Prixfix} />
          </div>
          <span className="photo-Title">Prix Fix</span>
        </div>

        <div>
          <div className="hero-photo-div">
            <img className="hero-grid-ind-img" src={PrixfixCofee} />
          </div>
          <span className="photo-Title">Prix Fix Coffee</span>
        </div>

        <div>
          <div className="hero-photo-div">
            <img className="hero-grid-ind-img" src={PrixfixTea} />
          </div>
          <span className="photo-Title">Prix Fix Tea</span>
        </div>

        <div>
          <div className="hero-photo-div">
            <img className="hero-grid-ind-img" src={PrixfixWine} />
          </div>
          <span className="photo-Title">Prix Fix Wine</span>
        </div>
      </div>
    </>
  );
}

export default HeroFoodPhotos;
