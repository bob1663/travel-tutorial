import React from "react";
import "./SubHeading.css";

const SubHeading = ({ title, text, link }) => {
  return (
    <div className="subheading__content">
      <div className="subheading__content-title">
        <h2>{title}</h2>
        <span></span>
      </div>
      <div className="subheading__content-text">
        <p>{text}</p>
        <p>{link}</p>
      </div>
    </div>
  );
};

export default SubHeading;
