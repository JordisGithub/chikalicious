import React, { Component } from "react";
import MapImg from "../../images/map.png";
import Train from "../../images/trains.png";
import "./Contact.css";

class Location extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="location-container">
          <div className="locationTitle">
            <h2 className="loco">Location & Hours</h2>
            <div className="cont-line-loco"></div>
          </div>
          <div>
            <div className="mock-container">
            <div className="map-img">
              <img src={MapImg} alt="map" />
            </div>
            <div className="transportation">
              <section className="trains-container">
                <h4 className="heading-location">Location</h4>
                <p className="info-location">203 E. 10th St.</p>
                <p className="info-location">between 1st Ave. & 2nd Ave.</p>
                <div className="train-icons">
                  <img style={{width: "90px", height: "30px"}} src={Train} alt="trains"/>
                </div>
              </section>
              <section className="hours-container">
                <h4 className="heading-location">Hours</h4>
                <p className="info-location" style={{width: "165px"}}>Wednesday - Sunday</p>
                <p className="info-location">pm to 10pm</p>
                <a className="take-out" href="https://www.chikalicious.com/menu.htm" target="_blank">FOR TAKEOUT ONLY</a>
              </section>
            </div>
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default Location;
