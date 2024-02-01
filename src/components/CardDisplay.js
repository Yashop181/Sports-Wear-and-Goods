// CardDisplay.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import cardData from './DataStorage';
import '../styles/CardDisplay.css';

const CardDisplay = () => {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <div key={index} className={`card ${card.category}`}>
          <img src={card.imageSrc} alt={card.category} />
          <Link to={`/${card.category}`} className="button">
            {card.buttonText}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardDisplay;
