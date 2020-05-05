import React from "react";
import "./HeroFoodPhotos.css";

function HeroFoodPhotos(props) {
  return (
    <>
      <div className="hero-photo-grid-container">
        <div className="hero-photo-div"></div>
        <div className="hero-photo-div2"></div>
        <div className="hero-photo-div3"></div>
        <div className="hero-photo-div4"></div>
        <span className="photo-Title">Prix Fixe</span>
        <span className="photo-Title">Prix Fixe with Coffee</span>
        <span className="photo-Title">Prix Fixe with Tea</span>
        <span className="photo-Title">Prix Fixe with Wine</span>
      </div>
    </>
  );
}

export default HeroFoodPhotos;
