import React from "react";
import HeroImg from "../../images/ChikaliciousHeaderImage.png";
import "./Hero.css";

function Hero(props) {
  return (
    <div className="hero-container">
      <img className="hero-image" src={HeroImg} alt="hero"></img>

      <div className="hero-text-block">
        <h2 className="heroTitle">We Dessert First.</h2>
        <h4 className="heroSlogan">Even at home.</h4>
        <button className="hero-button"><a href="https://www.grubhub.com/restaurant/chikalicious-dessert-bar--doughyaki-203-e-10th-st-new-york/2055367" target="_blank">Order Online</a></button>
      </div>
    </div>
  );
}

export default Hero;
