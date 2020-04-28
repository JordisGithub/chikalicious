import React from "react";
import MapImg from "../../images/map.png";
import { Component } from "react";

class Location extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="location-container">
          <h2>Location & Hours</h2>
          <div>
            <div className="map-img">
              <img src={MapImg} alt="map" />
            </div>
            <div className="transportation">
              <section className="trains-container">
                <h4>Location</h4>
                <p>203 E. 10th St. between 1st Ave. & 2nd Ave. </p>
                <div className="train-icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="250px"
                    height="250px"
                    viewBox="0 0 125 125"
                  >
                    <title>NYCS Bullet, Standard Set - L Local</title>
                    <circle cx="62.5" cy="62.5" r="50" fill="#A7A9AC" />
                    <polygon
                      points="78.8,87.3 78.8,78.1 58.6,78.1 58.6,36.9 48.7,36.9 48.7,87.3"
                      fill="#FFF"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="250px"
                    height="250px"
                    viewBox="0 0 125 125"
                  >
                    <title>NYCS Bullet, Standard Set - R Local</title>
                    <circle cx="62.5" cy="62.5" r="50" fill="#FCCC0A" />
                    <path d="M85.2,87.3L74,67.1c2.4-1,4.267-2.167,5.6-3.5c2.8-2.8,4.2-6.6,4.2-11.4c0-4.533-1.533-8.217-4.6-11.05c-3.067-2.833-7.233-4.25-12.5-4.25h-21v50.4h9.9V68.9h8.5l9.7,18.4H85.2zM73.5,52.9c0,2.2-0.733,3.967-2.2,5.3c-1.467,1.333-3.4,2-5.8,2h-9.9V45.7h8.5C70.367,45.7,73.5,48.1,73.5,52.9z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="74.9"
                    height="74.9"
                  >
                    <circle cy="37.45" cx="36.972" r="28.563" fill="#FCCC0A" />
                    <path d="m18.64 23.492h6.4c3.68 15.72 4.04 17.72 4.56 21h0.08c0.52-3 0.96-5.92 4-21h6.359c3.36 15.76 3.641 17.28 4.28 21h0.08c0.48-2.721 0.96-5.2 4.68-21h6.08l-8.08 28.72h-5.76c-2.96-14.08-3.479-16.88-4.44-22.4h-0.079c-0.88 5.52-1.36 7.6-4.44 22.4h-5.6l-8.12-28.72z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="74.9"
                    height="74.9"
                  >
                    <circle cy="37.45" cx="36.972" r="28.563" fill="#00933C" />
                    <path
                      d="m41.109 30.07c-0.16-1.6-1.2-2.72-3.28-2.72-3.64 0-4.48 4.16-4.68 7.84l0.08 0.08c0.76-1.04 2.16-2.36 5.32-2.36 5.88 0 8.681 4.52 8.681 8.76 0 6.199-3.801 10.359-9.28 10.359-8.6 0-10.28-7.2-10.28-14.279 0-5.4 0.72-14.88 10.56-14.88 1.161 0 4.4 0.44 5.8 1.84 1.56 1.52 2.12 2.36 2.64 5.36h-5.561zm-3.56 7.32c-2.12 0-4.28 1.32-4.28 4.88 0 3.08 1.76 5.28 4.44 5.28 2.04 0 3.92-1.561 3.92-5.4-0.001-3.6-2.32-4.76-4.08-4.76z"
                      fill="#fff"
                    />
                  </svg>
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
      </>
    );
  }
}

export default Location;
