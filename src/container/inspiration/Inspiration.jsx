import React from "react";
import { InspCard, SubHeading } from "../../components";
import { data } from "../../constants";
import "./Inspiration.css";

const Inspiration = () => {
  return (
    <div className="app__inspiration flex__center">
      <SubHeading
        title="Inspiration for your next getaway"
        text="We’ve curated some amazing experiences to help you find your next getaway."
        link="View all experiences"
      />
      <div className="app__inspiration-cards">
      {data.inspiration.map((inspiration) => (
          <InspCard data={inspiration} key={inspiration.title} />
        ))}
      </div>
    </div>
  );
};

export default Inspiration;
