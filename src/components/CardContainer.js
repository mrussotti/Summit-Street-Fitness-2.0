import React from 'react';
import VerticalCard from './VerticalCard';
import './VerticalCard.css';


const CardContainer = () => {
  const card1Items = ['Item 1', 'Item 2', 'Item 3'];
  const card2Items = ['Item 4', 'Item 5', 'Item 6'];
  const card3Items = ['Item 7', 'Item 8', 'Item 9'];

  return (
    <div className="vertical-cards-container">
      <VerticalCard title="Beginner" items={card1Items} backgroundColor="#39a809" />
      <VerticalCard title="Intermediate" items={card2Items} backgroundColor="#3d85c6" />
      <VerticalCard title="Advanced" items={card3Items} backgroundColor="#bd0d0d" />
    </div>
  );
};

export default CardContainer;
