import React, { Component } from "react"; 
import Drink from "../../images/drink.png";
import Food from "../../images/food.png";
import "./Menu.css"

export default class Menu extends Component {
  constructor() {
    super()

    this.state = {
      menuPhoto: {Food}
    }
  }

  render() {
    return (
      <>
      <div className="menu-title-cont">
      <h2 className="menu-title">Menu</h2>
      </div>
      <div className="menu-container">
      <img src={this.state.menuPhoto} alt=""/>
      </div>
      </>
    )
  }
}
