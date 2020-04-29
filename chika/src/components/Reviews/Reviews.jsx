import React from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import Ashley from "../../images/ashleyreview.png";
import Rpoonai from "../../images/rpoonaireview.png";

import "./Reviews.css";

function Reviews(props) {
  return (
    <div className="review-containers">
      <h2 className="reviewsTitle">Reviews</h2>
      <div className="reviews">
        <section>
          <img src={Ashley} alt="Ashley" />
          <p className="web">
            See more on{" "}
            <span>
              <a
                href="https://www.yelp.com/biz/chikalicious-dessert-bar-new-york-3"
                target="_blank"
              >
                Yelp
              </a>
            </span>
          </p>
        </section>

        <section>
          <img src={Rpoonai} alt="Rpoonai" />
          <p className="web">
            See more on{" "}
            <span>
              <a
                href="https://www.google.com/search?sxsrf=ALeKk01IMewqBIBnO5DNDWuzBbQkedcIHg%3A1588024942502&ei=blanXqOUHqiwytMPjpScgAo&q=chikalicious+google+reviews&oq=chikalicious+google+re&gs_lcp=CgZwc3ktYWIQARgAMgUIIRCgATIFCCEQoAEyBQghEKsCMgUIIRCrAjoFCAAQzQJQwxxYsR5g6SRoAHAAeACAAZ0BiAHrBJIBAzAuNZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab#lrd=0x89c2599c49f749b7:0x714d802b46ffd353,1,,,"
                target="_blank"
              >
                Google
              </a>
            </span>
          </p>
        </section>
      </div>
        <div className="scrollTop">
        <ScrollUpButton style={{position: "flex", height: "15px", width: "15px", backgroundColor: "transparent", color: "#f3c26c"}}/>
        <p>Back to Top</p>
      </div>
    </div>
  );
}

export default Reviews;
