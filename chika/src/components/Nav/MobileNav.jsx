import React from "react";
import logo from "../../images/logo.png";
import "./MobileNav.css";

const MobileNav = props => {
  return (
    <div className="mobile-container">
    <div className="mobileLogo">
    <img src={logo} alt="Chikalicious"></img>
    </div>
    <div className="nav-M">
    <ul>
      <li className="linksM"><a href="#">Menu</a></li>
      <li className="linksM"><a href="#">Our Story</a></li>
      <li className="linksM"><a href="#">Support Us</a></li>
      <li className="linksM"><a href="#">Location & Hours</a></li>
      <li className="linksM"><a href="#">Contact Us</a></li>
      <li className="linksM"><a href="#">Photo Gallery</a></li>
    </ul>
    </div>
    </div>
  )
}

export default MobileNav