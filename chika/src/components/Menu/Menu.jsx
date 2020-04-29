import React, { Component } from "react"; 
import Drink from "../../images/drinks.png";
import Food from "../../images/food.png";
import "./Menu.css"

export default class Menu extends Component {
  constructor() {
    super()

    this.state = {
      menuPhoto: Food
    }
  }

handleBeverage = () => {
  this.setState({
    menuPhoto: Drink
  })
}

handleMenu = () => {
  this.setState({
    menuPhoto: Food
  })
}

  render() {
    return (
      <>
      <div className="menu">
      <h2 className="title-menu">Menu</h2>
      <div className="menu-line"></div>
      </div>

      <div className="menu-title-cont">
      <h3 className="menu-title" onClick={this.handleMenu}>Desserts</h3>
      <h3 className="menu-title" onClick={this.handleBeverage}>Beverage</h3>
      </div>

      {/* make this div a certain height and weight */}
      <div className="menu-container"> 
      <img className="img-cont" src={this.state.menuPhoto} style={{width: "1200px", height: "550px"}} alt="Menu"/>
      </div>
      </>
    )
  }
}
