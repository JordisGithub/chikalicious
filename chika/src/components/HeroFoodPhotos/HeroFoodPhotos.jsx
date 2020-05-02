import React from "react";
import "./HeroFoodPhotos.css";

function HeroFoodPhotos(props) {
  return (
    <>
      <div className="hero-photo-grid-container">
        <div>
          <div className="hero-photo-div"></div>
          <span className="photo-Title">Prix Fix</span>
        </div>

        <div>
          <div className="hero-photo-div2"></div>
          <span className="photo-Title">Prix Fix Coffee</span>
        </div>

        <div>
          <div className="hero-photo-div3"></div>
          <span className="photo-Title">Prix Fix Tea</span>
        </div>

        <div>
          <div className="hero-photo-div4"></div>
          <span className="photo-Title">Prix Fix Wine</span>
        </div>
      </div>
    </>
  );
}

export default HeroFoodPhotos;
