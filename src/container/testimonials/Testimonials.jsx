import React from "react";
import { images } from "../../constants";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="app__testimonials">
      <div className="app__testimonials-content">
        <h1>A truly wonderful experience</h1>
        <p>
          Brilliant for anyone looking to get away from the hustle and bustle of
          city life or detox from their tech for a few days. I could have stayed
          another week!<br></br>
          <br></br>They really have thought about everything here down to the
          finest details.
        </p>
        <img src={images.RatingAndReview2} alt="RatingAndReview2" />
      </div>
    </div>
  );
};

export default Testimonials;
