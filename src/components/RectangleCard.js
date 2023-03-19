import React from 'react';
import './RectangleCard.css';

const RectangleCard = ({ heading, text, text2, text3 , text4}) => {
  return (
    <div className="rectangle-card">
      <h1>{heading}</h1>
      <p>{text}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{text4}</p>
    </div>
  );
}

export default RectangleCard;