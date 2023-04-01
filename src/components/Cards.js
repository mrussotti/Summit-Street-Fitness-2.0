import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>What experience level are you?</h1>
      <h3>The following diagrams are what you should be striving for...</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Beginner.png'
              text='All your questions answered'
              label='InfoDump'
              path='/InfoDump'
            />
            <CardItem
              src='images/Intermediate.png'
              text='Build a plan to achieve your goals'
              label='ActionAssist'
              path='/ActionAssist'
            />
          
          
            <CardItem
              src='images/Advanced.png'
              text='Why are we doing this?'
              label='About'
              path='/About'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
