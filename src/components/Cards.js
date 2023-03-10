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
              text='0-2 years of training. If you do not know where to start, click here.'
              label='Beginner'
              path='/Beginner'
            />
            <CardItem
              src='images/Intermediate.png'
              text='3-6 years of training. If you think you are here, you are not. Start at beginner.'
              label='Intermediate'
              path='/Intermediate'
            />
          
          
            <CardItem
              src='images/Advanced.png'
              text='5+ years of training. If this is where you wanna start good luck lmao.'
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
