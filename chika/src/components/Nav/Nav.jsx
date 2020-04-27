import React, { Component } from "react";
import logo from "../../images/logo.png"
import "./Nav.css";


export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayMobile : false
    }
  }
  render() {
    return (
      <div className="container">
      <div className="logo"><img src={logo} alt="Chikalicious"></img></div>
      <div className="nav-links">
      <ul>
        <li className="links"><a href="#">Menu</a></li>
        <li className="links"><a href="#">Our Story</a></li>
        <li className="links"><a href="#">Support Us</a></li>
        <li className="links"><a href="#">Location & Hours</a></li>
        <li className="links"><a href="#">Contact Us</a></li>
        <li className="links"><a href="#">Photo Gallery</a></li>
      </ul>
      </div>
      </div>
    )
  }
}