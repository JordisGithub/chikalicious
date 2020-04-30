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
      <div className="instagram-grid-dotted-line2"></div>
      <div className="instagram-grid-title">Photo Gallery</div>
      <div className="instagram-grid-line"></div>

      <div className="instagram-photo-grid-container">
        <div className="instagram-photo-div"></div>
        <div className="instagram-photo-div2"></div>
        <div className="instagram-photo-div3"></div>
        <div className="instagram-photo-div4"></div>
        <div className="instagram-photo-div5"></div>
        <div className="instagram-photo-div6"></div>
        <div className="instagram-photo-div7"></div>
        <div className="instagram-photo-div8"></div>
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
      <div className="instagram-grid-dotted-line2"></div>
    </>
  );
}

export default HeroFoodPhotos;
