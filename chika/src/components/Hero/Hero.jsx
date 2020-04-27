import React from "react";
import HeroImg from "../../images/ChikaliciousHeaderImage.png"
import "./Hero.css"

function Hero (props) {
  return (
    <>
    <div className="hero-container">
    <div className="hero-image">
      <img src={HeroImg} alt="hero"></img>
    </div>
    <div>
    <h2 className="heroTitle">We Dessert First.</h2>
    <h4 className="heroSlogan">Even at home.</h4>
    <button>Order Online</button>
    </div>
    </div>
    </>
  )
}

export default Hero