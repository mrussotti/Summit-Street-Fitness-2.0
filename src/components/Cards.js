import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>What experience level are you?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/SummitBackground.jpg'
              text='0-2 years of training'
              label='Beginner'
              path='/Beginner'
            />
            <CardItem
              src='images/SummitBackground.jpg'
              text='2-5 years of training'
              label='Intermediate'
              path='/Intermediate'
            />
          
          
            <CardItem
              src='images/SummitBackground.jpg'
              text='5+ years of training make larger by adding more text'
              label='Advanced'
              path='/Advanced'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
