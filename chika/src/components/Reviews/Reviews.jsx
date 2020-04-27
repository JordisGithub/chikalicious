import React from "react";
import "./Reviews.css";

function Reviews(props) {
  return (
    <div className="review-containers">
      <h2 className="reviewsTitle">Reviews</h2>

      <div className="reviews">
        <section>
          <p>
            <span className="reviewsQuote">"</span>This will be the best meal
            you'll ever experience. And yes, dessert. You will leave this place
            changed for the better. Chika we love you !
            <span className="reviewsQuote">"</span>
          </p>
          <p className="author">-Ashley A.</p>
        </section>
        <section>
          <p>
            <span className="reviewsQuote">"</span>This is such a wonderful
            place for a date night, girls' night out or any special celebration.
            The desserts were artfully presented. A definite must try.
            <span className="reviewsQuote">"</span>
          </p>
          <p className="author">-Rpoonai</p>
        </section>
      </div>
    </div>
  );
}

export default Reviews;
