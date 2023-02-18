import React from "react";
import "./InspCard.css";

const InspCard = ({
  data: { imgUrl, subTitle, title, description },
}) => {
  return (
    <div className="app__inspCard">
      <div className="app__inspCard-image">
        <img src={imgUrl} alt="imspirationImage" />
      </div>
      <div className="app__inspCard-content">
        <p className="app__inspCard-content-subtitle">{subTitle}</p>
        <h3>{title}</h3>
        <p className="app__inspCard-content-description">{description}</p>
      </div>
    </div>
  );
};

export default InspCard;
