import React from "react";
import logo from "../../images/logo.png";
import "./MobileNav.css";

const MobileNav = props => {
  let mobileClasses = "mobile-container";
  if (props.show) {
    mobileClasses = "mobile-container open"
  }

  return (
    <div className={mobileClasses}>
      {/* <div className="mobileLogo">
        <img src={logo} alt="Chikalicious"></img>
      </div> */}
      <div className="nav-M">
        <ul>
          <li className="linksM"><a href="#menu">Menu</a></li>
          <li className="linksM"><a href="#story">Our Story</a></li>
          <li className="linksM"><a href="#support">Support Us</a></li>
          <li className="linksM"><a href="#location">Location & Hours</a></li>
          <li className="linksM"><a href="#contact">Contact Us</a></li>
          <li className="linksM"><a href="#photo">Photo Gallery</a></li>
        </ul>
      </div>
    </div>
  )
}

export default MobileNav