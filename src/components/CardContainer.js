import React from 'react';
import VerticalCard from './VerticalCard';
import './VerticalCard.css';


const CardContainer = () => {
  const card1Items = ['Item 1', 'Item 2', 'Item 3'];
  const card2Items = ['Item 4', 'Item 5', 'Item 6'];
  const card3Items = ['Item 7', 'Item 8', 'Item 9'];

  return (
    <div className="vertical-cards-container">
      <VerticalCard title="Card 1" items={card1Items} color="#f1c40f" />
      <VerticalCard title="Card 2" items={card2Items} color="#2ecc71" />
      <VerticalCard title="Card 3" items={card3Items} color="#e74c3c" />
    </div>
  );
};

export default CardContainer;
