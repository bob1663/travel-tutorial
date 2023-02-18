import React from "react";
import { images } from "../../constants";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <div className="app__whoweare">
      <div className="app__whoweare-subheading">
        <h2>Get ready to unwind</h2>
        <span></span>
        <p>
          A cabin getaway can be a wonderful way to relax and reconnect with
          nature. Many cabin rentals are located in beautiful, secluded areas,
          surrounded by trees and other natural beauty.<br></br>
          <br></br>A cabin getaway can be a wonderful way to escape the hustle
          and bustle of daily life and reconnect with nature.
        </p>
        <p>Learn more</p>
      </div>
      <img src={images.VideoCard} alt="VideoCard" />
    </div>
  );
};

export default WhoWeAre;
