import React from 'react';
//import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      {/* <img src= "./SummitBackground.jpg" alt="Summit Background"/> //use this to cover whole background. change video tag to img */}
      <h1>Coaching For Everyone</h1>
      <p>Become your own bodybuilding coach</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to= "/InfoDump"
        >
          Start Learning
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          to= "/ActionAssist"
        >
          Build A Plan <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
