import React, { Component } from "react";
import logo from "../../images/logo.png";
import "./Nav.css";
import DrawerToggleButton from "./DrawerToggleButton";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   displayMobile: false,
    // };
  }
  render() {
    return (
      <>
        <div className="container-nav">
          <DrawerToggleButton click={this.props.drawerClickHandler} />
          <div className="logo">
            <img src={logo} alt="Chikalicious"></img>
          </div>
          <div className="nav-links">
            <ul>
              <li className="links">
                <a href="#">Menu</a>
              </li>
              <li className="links">
                <a href="#">Our Story</a>
              </li>
              <li className="links">
                <a href="#">Support Us</a>
              </li>
              <li className="links">
                <a href="#">Location & Hours</a>
              </li>
              <li className="links">
                <a href="#">Contact Us</a>
              </li>
              <li className="links">
                <a href="#">Photo Gallery</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="covidInfo">
          <i class="fas fa-info-circle"></i>We are still accepting onlines for
          pickup and delivery. Please consider supporting our staff by donating
          to our GoFundMe page during these unprecedented time.
        </p>
      </>
    );
  }
}
