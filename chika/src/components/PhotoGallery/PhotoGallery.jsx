import React from "react";
import "./HeroFoodPhotos.css";

import Prixfix from "../../images/Prix_fixe.png";

import PrixfixCofee from "../../images/Prix_fix_with_coffee.png";
import PrixfixTea from "../../images/Prix_fixe_with_tea.JPG";
import PrixfixWine from "../../images/Prix_fixe_with_Wine.png";

function HeroFoodPhotos(props) {
  return (
    <div className="hero-photo-grid-container">
      <img className="hero-grid-ind-img" src={Prixfix} />
      {/* <h1>Prix Fix</h1> */}

      <img className="hero-grid-ind-img" src={PrixfixCofee} />
      {/* <h1>Prix Fix Coffee</h1> */}

      <img className="hero-grid-ind-img" src={PrixfixTea} />
      {/* <h1>Prix Fix Tea</h1> */}

      <img className="hero-grid-ind-img" src={PrixfixWine} />
      {/* <h1>Prix Fix Wine</h1> */}
    </div>
  );
}

export default HeroFoodPhotos;
