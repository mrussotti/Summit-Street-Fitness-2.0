import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Where do you want to start?</h1>
      <h3>What features do you want us to implement next? Fill out the form below...</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Brain.png'
              text='All your questions answered'
              label='InfoDump'
              path='/InfoDump'
            />
            <CardItem
              src='images/Advanced.png'
              text='Build a plan to achieve your goals'
              label='ActionAssist'
              path='/ActionAssist'
            />
          
          
            <CardItem
              src='images/Question.png'
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
