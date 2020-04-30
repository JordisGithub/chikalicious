import React from "react";
import "./HeroFoodPhotos.css";

function HeroFoodPhotos(props) {
  return (
    <>
      <div className="hero-photo-grid-container">
        <div>
          <div className="hero-photo-div"></div>
          {/* <img className="hero-grid-ind-img" src={Prixfix} /> */}
          <span className="photo-Title">Prix Fix</span>
        </div>

        <div>
          <div className="hero-photo-div2"></div>
          {/* <img className="hero-grid-ind-img" src={PrixfixCofee} /> */}
          <span className="photo-Title">Prix Fix Coffee</span>
        </div>

        <div>
          <div className="hero-photo-div3"></div>
          {/* <img className="hero-grid-ind-img" src={PrixfixTea} /> */}
          <span className="photo-Title">Prix Fix Tea</span>
        </div>

        <div>
          <div className="hero-photo-div4"></div>
          {/* <img className="hero-grid-ind-img" src={PrixfixWine} /> */}
          <span className="photo-Title">Prix Fix Wine</span>
        </div>
      </div>
    </>
  );
}

export default HeroFoodPhotos;
