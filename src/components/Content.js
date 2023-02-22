import React from 'react';
import './Content.css';

const Content = ({ text, imageUrl }) => {
  return (
    <div className="text-with-image">
      <p>{text}</p>
      <img src={imageUrl} alt="Image" />
    </div>
  );
};

export default Content;
