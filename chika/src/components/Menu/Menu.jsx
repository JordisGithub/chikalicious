import React, { Component } from "react";
import Drink from "../../images/drinks.png";
import Food from "../../images/food.png";
import "./Menu.css";

export default class Menu extends Component {
  constructor() {
    super();

    this.state = {
      dessertMenu: true,
      beverageMenu: false,
    };
  }

  handleBeverage = () => {
    this.setState({
      dessertMenu: false,
      beverageMenu: true,
    });
  };

  handleDessert = () => {
    this.setState({
      dessertMenu: true,
      beverageMenu: false,
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
          <h3 className="menu-title" onClick={this.handleDessert}>
            Desserts
          </h3>
          <h3 className="menu-title" onClick={this.handleBeverage}>
            Beverage
          </h3>
        </div>
        {/* =========================================
                Test Menu
        ========================================= */}
        {this.state.dessertMenu && (
          <div>
            <div className="menu-highlight-container">
              <h1 className="menu-highlight-heading">
                All Desserts are $18 <span className="menu-highlight-indent" />{" "}
                | <span className="menu-highlight-indent" />
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
                <p></p>
                <p>$25</p>
              </div>

              <div>
                <h3>
                  Steamed Fig Pudding Cake with Warm Vanilla Anglaise and
                  Shredded Apple
                </h3>
                <h4>Pairing: Dios Baco Cream Sherry</h4>
              </div>

              <div className="dessert-menu-price">
                <p></p>
                <p>$25</p>
              </div>

              <div>
                <h3>
                  Our Version of Savory Cheese Plate Herb Profiterole filled
                  Three Cheese with Sage Honey and White Truffle Powder
                </h3>
                <h4>Pairing: Quinta do, Tawny Porto, medium dry</h4>
              </div>

              <div className="dessert-menu-price">
                <p></p>
                <p>$22</p>
              </div>

              <div>
                <h3>Basil Sorbet and Fresh Mango on Coconut Cream</h3>
                <h4>Pairing: Malvasia di Casorzo Dolce 2017</h4>
              </div>
              <div className="dessert-menu-price">
                <p></p>
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
                <p></p>
                <p>$25</p>
              </div>

              <div>
                <h3>Coconut Marshmellow</h3>
                <h4>Packaged to go</h4>
              </div>
              <div className="dessert-menu-price">
                <p></p>
                <p>$8</p>
              </div>

              <div>
                <h3>
                  Black Truffle Ice Cream on Asian Pear Tartare with Lace Tuile
                  and Almond Cake drizzled Cognac Sauce
                </h3>
                <h4>Pairing: Yalumba Muscat Museum Reserve</h4>
              </div>
              <div className="dessert-menu-price">
                <p></p>
                <p>$25</p>
              </div>

              <div>
                <h3>
                  Warm Chocolate Tart with Pink Peppercorn Ice Cream and Red
                  Wine Sauce
                </h3>
                <h4>Pairing: Churchill Graham Reserve Port</h4>
              </div>
              <div className="dessert-menu-price">
                <p></p>
                <p>$25</p>
              </div>

              <div>
                <h3>Shortbread</h3>
                <h4>Packaged to go</h4>
              </div>
              <div className="dessert-menu-price">
                <p></p>
                <p>$10</p>
              </div>
            </div>
          </div>
        )}
        {/* =============================================================== 
        Test Drinks Menu //
        =============================================================== */}

        {this.state.beverageMenu && (
          <div>
            <div className="beverage-highlight-container">
              <h1 className="beverage-highlight-heading">
                Today's Sparkling House Cocktail
              </h1>
              <h2 className="beverage-highlight-heading2">
                Peach-Blackberry $12
              </h2>
            </div>

            <div className="beverage-menu-size-heading-desktop">
              <h4>glass</h4>
              <h3>bottle</h3>
              <h4>glass</h4>
              <h3>bottle</h3>
              <h4>glass</h4>
              <h3>bottle</h3>
            </div>

            <div className="beverage-menu-size-heading-mobile">
              <h4>glass</h4>
              <h3>bottle</h3>
            </div>

            <div className="beverage-menu-container">
              <div className="beverage-menu-left-section">
                <div className="beverage-menu-container-div">
                  <h3>Champagne</h3>
                  <p>Moet & Chandon Imperial Brut </p>
                  <p>NV Veuve Clicquot Ponsardin NV</p>
                  <p>Veuve Clicquot Ponsardin Rose NV</p>
                  <p>Dom Perignon Brut 2000</p>
                </div>
                <div className="beverage-menu-container-glass-prices"></div>

                <div className="beverage-menu-container-bottle-prices">
                  <p>$30 (375ml)</p>
                  <p>$30 (375ml)</p>
                  <p>$98 (750ml)</p>
                  <p>$235 (750ml)</p>
                </div>

                <div className="beverage-menu-container-div">
                  <h3>Sparkling Wine </h3>
                  <p>Prosecco Del Veneto </p>
                  <p>Brachetto d’Acqui Banfi 2007</p>
                  <p>Moscato dEAsti, La Spinetta 2007</p>
                </div>

                <div className="beverage-menu-container-glass-prices">
                  <p>$9</p>
                </div>
                <div className="beverage-menu-container-bottle-prices">
                  <p>$31 (750ml)</p>
                  <p>$19 (187ml)</p>
                  <p>$98 (750ml)</p>
                </div>

                <div className="beverage-menu-container-div">
                  <h3>White Wine </h3>
                  <p>Paso a Paso Verdejo 2007 </p>
                </div>
                <div className="beverage-menu-container-glass-prices">
                  <p>$12</p>
                </div>
                <div className="beverage-menu-container-bottle-prices">
                  <p>$32 (750ml)</p>
                </div>
                <div className="beverage-menu-container-div">
                  <h3>Sherry </h3>
                  <p>Alvear Pedro Ximenez 2004 </p>
                  <p>Lustau Cream Sherry Solera Reserva</p>
                </div>
                <div className="beverage-menu-container-glass-prices">
                  <p>$13</p>
                  <p>$12</p>
                </div>
                <div className="beverage-menu-container-bottle-prices">
                  <p>$55 (37 5ml)</p>
                </div>
              </div>

              <div className="beverage-menu-middle-section">
                <div className="beverage-menu-container-div">
                  <h3> Red Wine</h3>
                  <p>Vega Sindoa Tempranillo 2007</p>
                </div>
                <div className="beverage-menu-container-glass-prices">
                  <p>$12</p>
                </div>
                <div className="beverage-menu-container-bottle-prices">
                  <p>$32 (750ml)</p>
                </div>

                <div className="beverage-menu-container-div">
                  <h3>White Dessert Wine </h3>
                  <p> Ice Wine, Vidal Vin Blanc Doux 2005 </p>
                  <p> Sauternes, Le Tertre D’or 2005 </p>
                  <p> Campbells Rutherglen Muscat </p>
                  <p>Quady Essensia Orange</p>
                  <p>Muscat 2006 </p>
                  <p>Moscatel De Lustau Emilin </p>
                </div>

                <div className="beverage-menu-container-glass-prices">
                  <p>$12</p>
                  <p>$12</p>
                  <p>$10</p>
                </div>
                <div className="beverage-menu-container-bottle-prices">
                  <p>$32 (750ml)</p>
                  <p>$43 (375ml)</p>
                  <p>$43 (375ml)</p>
                </div>

                <div className="beverage-menu-container-div">
                  <h3>Red Dessert Wine </h3>
                  <p>Banyuls Les Clos de Paulilles 2006 </p>
                </div>
                <div className="beverage-menu-container-glass-prices">
                  <p>$13</p>
                </div>
                <div className="beverage-menu-container-bottle-prices"></div>
                <div className="beverage-menu-container-div">
                  <h3> Port </h3>
                  <p>Taylor Fladgate 10yr Tawny Churchill</p>
                  <p>Graham Reserve Port</p>
                </div>
                <div className="beverage-menu-container-glass-prices">
                  <p>$13</p>
                  <p>$12</p>
                </div>
                <div className="beverage-menu-container-bottle-prices"></div>
              </div>

              <div className="beverage-menu-right-section">
                <div className="beverage-menu-container-div">
                  <h3> Beer</h3>
                  <p>McSorley’s Irish Pale Ale</p>
                </div>
                <div className="beverage-menu-container-glass-prices">
                  <p>$5</p>
                </div>
                <div className="beverage-menu-container-bottle-prices"></div>

                <div className="beverage-menu-container-div">
                  <h3>Water & Juice</h3>
                  <p>Saratoga still</p>
                  <p> Perrier</p>
                  <p> Orangina</p>
                </div>

                <div className="beverage-menu-container-glass-prices"></div>
                <div className="beverage-menu-container-bottle-prices">
                  <p>$3.5 (12oz)</p>
                  <p>$3.5 (12oz)</p>
                  <p>$3.5 (12oz)</p>
                </div>

                <div className="beverage-menu-container-div">
                  <h3>Coffee & Tea Personal</h3>
                  <p>Pot of French Press Coffee</p>
                  <p>Espresso</p>
                  <p>Cappuccino</p>
                  <p>Café au Lait</p>
                  <p>Personal Pot of Tea</p>
                  <p>Iced Coffee</p>
                  <p>Iced Tea</p>
                  <p>Iced Cappuccino</p>
                  <p>Iced Café Latte</p>
                </div>
                <div className="beverage-menu-container-glass-prices">
                  <p>$3.5</p>
                  <p>$3.5</p>
                  <p>$5.0</p>
                  <p>$5.0</p>
                  <p>$3.5</p>
                  <p>$4.0</p>
                  <p>$3.5</p>
                  <p>$5.5</p>
                  <p>$5.5</p>
                </div>
                <div className="beverage-menu-container-bottle-prices"></div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
