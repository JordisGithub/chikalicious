import React from 'react';
import './OurStory.css';
import donchika from '../../images/donchika.png';
import story from '../../images/chika.jpg';

const OurStory = () => (
  <section className="our-story">
    <div>
      <h2>Our Story</h2>
      <div className="line" />
      <p className="mission">Our mission was to show off the magic as it happens,
          showing customers how we prepare, plate and serve elegantly
          crafted and tasty desserts.
    </p>
    </div>
    <div className="main-story">
      <div className="title">
        <h5>About Chikalicious</h5>
        <p>Est. 2003, Chikalicious Dessert Bar features fresh, fun and
          innovative individual desserts, as served in NYC's top restaurants.
          This intimate, 20 seat eatery is build around an open kitchen where the
          chefs and sommelier work and serve customers directly.
      </p>
        <div>
          <img src={donchika} alt="Chika and Don" />
        </div>
      </div>
      <div className="story-two">
        <img src={story} alt="Chika and dessert" />

      </div>
    </div>




  </section>
);

export default OurStory;