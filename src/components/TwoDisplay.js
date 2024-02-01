// TwoDisplay.js
import React from "react";
import dataArray from "../components/Twodata";
import "../styles/TwoDisplay.css";

const TwoDisplay = () => {
  return (
    <div className="container">
      {dataArray.map((item) => (
        <div key={item.id} className="item">
          <img
            src={item.imageUrl}
            alt={`Image ${item.id}`}
            className="image"
          />
          <p className="textOverlay">{item.text}</p>
          <button className="shopButton">{item.buttonText}</button>
        </div>
      ))}
    </div>
  );
};

export default TwoDisplay;
