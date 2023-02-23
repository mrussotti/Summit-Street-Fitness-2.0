import React from 'react';
import './RectangleCard.css';

const RectangleCard = ({ heading, text }) => {
  return (
    <div className="rectangle-card">
      <h1>{heading}</h1>
      <p>{text}</p>
    </div>
  );
}

export default RectangleCard;