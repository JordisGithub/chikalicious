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
          </div>
          <div>
            <div className="mock-container">
            <div className="map-img">
              <img src={MapImg} alt="map" />
            </div>
            <div className="transportation">
              <section className="trains-container">
                <h4>Location</h4>
                <p>203 E. 10th St.</p>
                <p>between 1st Ave. & 2nd Ave.</p>
                <div className="train-icons">
                  <img style={{width: "80px", height: "25px"}} src={Train} alt="trains"/>
                </div>
              </section>
              <section className="hours-container">
                <h4>Hours</h4>
                <p>Wednesday - Sunday</p>
                <p>pm to 10pm</p>
                <a href="">FOR TAKEOUT ONLY</a>
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
