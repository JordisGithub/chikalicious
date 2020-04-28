import React from "react";
import "./PhotoGallery.css";

import PhotoGallery1 from "../../images/PhotoGallery_tile1.JPG";
import PhotoGallery2 from "../../images/PhotoGallery_tile2.JPG";
import PhotoGallery3 from "../../images/PhotoGallery_tile3.jpg";
import PhotoGallery4 from "../../images/PhotoGallery_tile4.png";
import PhotoGallery5 from "../../images/PhotoGallery_tile5.png";
import PhotoGallery6 from "../../images/PhotoGallery_tile6.png";
import PhotoGallery7 from "../../images/PhotoGallery_tile7.png";
import PhotoGallery8 from "../../images/PhotoGallery_tile8.JPG";

function HeroFoodPhotos(props) {
  return (
    <>
      <div className="hero-grid-dotted-line"></div>
      <div className="hero-grid-title">Photo Gallery</div>
      <div className="hero-grid-line"></div>
      <div className="hero-photo-grid-container">
        <img className="hero-grid-ind-img" src={PhotoGallery1} />
        <img className="hero-grid-ind-img" src={PhotoGallery2} />
        <img className="hero-grid-ind-img" src={PhotoGallery3} />
        <img className="hero-grid-ind-img" src={PhotoGallery4} />
        <img className="hero-grid-ind-img" src={PhotoGallery5} />
        <img className="hero-grid-ind-img" src={PhotoGallery6} />
        <img className="hero-grid-ind-img" src={PhotoGallery7} />
        <img className="hero-grid-ind-img" src={PhotoGallery8} />
      </div>

      <div className="bottom-text">
        <p>
          See More on
          <a
            className="instagram-link"
            href="https://www.instagram.com/chikaliciousdessertbarnyc/"
            target="_blank"
          >
            {" "}
            Instagram
          </a>
        </p>
      </div>
      <div className="hero-grid-dotted-line"></div>
    </>
  );
}

export default HeroFoodPhotos;
