import React from 'react';
import './VerticalCard.css';

const VerticalCard = ({ title, items, backgroundColor }) => {
  return (
    <div className="vertical-card" style={{ backgroundColor }}>
      <h2 className="vertical-card-title">{title}</h2>
      <ul className="vertical-card-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalCard;
