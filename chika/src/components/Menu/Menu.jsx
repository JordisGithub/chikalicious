import React, { Component } from "react";
import Drink from "../../images/drinks.png";
import Food from "../../images/food.png";
import "./Menu.css";

export default class Menu extends Component {
  constructor() {
    super();

    this.state = {
      menuPhoto: Food,
    };
  }

  handleBeverage = () => {
    this.setState({
      menuPhoto: Drink,
    });
  };

  handleMenu = () => {
    this.setState({
      menuPhoto: Food,
    });
  };

  //   render() {
  //     return (
  //       <>
  //       <div className="menu" id="menu">
  //       <h2 className="title-menu">Menu</h2>
  //       <div className="menu-line"></div>
  //       </div>

  //       <div className="menu-title-cont">
  //       <h3 className="menu-title" onClick={this.handleMenu}>Desserts</h3>
  //       <h3 className="menu-title" onClick={this.handleBeverage}>Beverage</h3>
  //       </div>

  //       <div className="menu-container">
  //       <img className="img-cont" src={this.state.menuPhoto} style={{width: "1200px", height: "550px"}} alt="Menu"/>
  //       </div>
  //       </>
  //     )
  //   }
  // }

  // ========================================================
  //                        Testing Menu
  // ========================================================

  render() {
    return (
      <>
        <div className="menu" id="menu">
          <h2 className="title-menu">Menu</h2>
          <div className="menu-line"></div>
        </div>
        <div className="menu-title-cont">
          <h3 className="menu-title" onClick={this.handleMenu}>
            Desserts
          </h3>
          <h3 className="menu-title" onClick={this.handleBeverage}>
            Beverage
          </h3>
        </div>
        <div className="menu-container">
          <img
            className="img-cont"
            src={this.state.menuPhoto}
            style={{ width: "1200px", height: "550px" }}
            alt="Menu"
          />
        </div>
        {/* =========================================
                Test Menu
        ========================================= */}
        <div className="menu-highlight-container">
          <h1 className="menu-highlight-heading">
            All Desserts are $18 <span className="menu-highlight-indent" /> |{" "}
            <span className="menu-highlight-indent" />
            Wine pairing additional $9
            <span className="menu-highlight-indent" /> |{" "}
            <span className="menu-highlight-indent" />
            Sharing Fee $9
          </h1>

          <div className="menu-highlight-heading2">
            {" "}
            All desserts come with amuse and petits fours
          </div>
        </div>
        <div className="dessert-menu-container">
          <div>
            <h3>Fromage Blanc Island “Cheese Cake”</h3>
            <h4>Pairing: Il Santo Zari</h4>
          </div>

          <div className="dessert-menu-price">
            <p>$25</p>
          </div>

          <div>
            <h3>
              Steamed Fig Pudding Cake with Warm Vanilla Anglaise and Shredded
              Apple
            </h3>
            <h4>Pairing: Dios Baco Cream Sherry</h4>
          </div>

          <div className="dessert-menu-price">
            <p>$25</p>
          </div>

          <div>
            <h3>
              Our Version of Savory Cheese Plate Herb Profiterole filled Three
              Cheese with Sage Honey and White Truffle Powder
            </h3>
            <h4>Pairing: Quinta do, Tawny Porto, medium dry</h4>
          </div>

          <div className="dessert-menu-price">
            <p>$22</p>
          </div>

          <div>
            <h3>Basil Sorbet and Fresh Mango on Coconut Cream</h3>
            <h4>Pairing: Malvasia di Casorzo Dolce 2017</h4>
          </div>
          <div className="dessert-menu-price">
            <p>$25</p>
          </div>

          <div>
            <h3>
              Yogurt Panna Cotta with Peach Sorbet and Strawberry Juice Agar
              Agar Cubes
            </h3>
            <h4>Pairing: Moscato d’Asti, La Moradina 2018</h4>
          </div>
          <div className="dessert-menu-price">
            <p>$25</p>
          </div>

          <div>
            <h3>Coconut Marshmellow</h3>
            <h4>Packaged to go</h4>
          </div>
          <div className="dessert-menu-price">
            <p>$8</p>
          </div>

          <div>
            <h3>
              Black Truffle Ice Cream on Asian Pear Tartare with Lace Tuile and
              Almond Cake drizzled Cognac Sauce
            </h3>
            <h4>Pairing: Yalumba Muscat Museum Reserve</h4>
          </div>
          <div className="dessert-menu-price">
            <p>$25</p>
          </div>

          <div>
            <h3>
              Warm Chocolate Tart with Pink Peppercorn Ice Cream and Red Wine
              Sauce
            </h3>
            <h4>Pairing: Churchill Graham Reserve Port</h4>
          </div>
          <div className="dessert-menu-price">
            <p>$25</p>
          </div>

          <div>
            <h3>Shortbread</h3>
            <h4>Packaged to go</h4>
          </div>
          <div className="dessert-menu-price">
            <p>$10</p>
          </div>
        </div>

        {/* =============================================================== 
        Test Drinks Menu //
        =============================================================== */}

        <div className="beverage-highlight-container">
          <h1 className="beverage-highlight-heading">
            Today's Sparkling House Cocktail
          </h1>

          <h2 className="beverage-highlight-heading2">Peach-Blackberry</h2>
        </div>
      </>
    );
  }
}
