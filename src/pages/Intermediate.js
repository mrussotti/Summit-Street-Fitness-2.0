import React from 'react';
import styles from './universal.module.css';
import RectangleCard from '../components/RectangleCard';
import CalorieCalculator from '../components/CalorieCalculator';

const text5 = ['do exercises that give you a stim to fatigue ratio. Different people benefit from different things'];
const text4 = ['decreasing gains as you keep lifting'];
const text3 = ['Giant sets, drop sets, etc. explain the advantages and disadvantages'];
const text2 = ['shit with amino acids'];
const text1 = ["You know you're supposed to be here if you've plateaued in either size or strength for any meaningful amount of time. Now you need to really dial in your training to make gains"];

export default function Intermediate() {
  return (
    <>
      <h1 className={styles.pageTitle}>Intermediate</h1>
      <div className={styles.rectangleCardContainer}>
        <div className={styles.rectangleCard}>
          <RectangleCard heading="Intro" text={text4} />
        </div>
        <div className={styles.rectangleCard}>
          <RectangleCard heading="Stimulus to fatigue ratio" text={text1} />
        </div>
        <div className={styles.rectangleCard}>
          <RectangleCard heading="Advanced vocab Vocab" text={"MEV, MAV, Mesocycle. etc"} />
        </div>
        <div className={styles.rectangleCard}>
          <RectangleCard heading="Advanced nutrition" text={text2} />
        </div>
        <div className={styles.rectangleCard}>
          <RectangleCard heading="pre workout breakdown" text={"what are ingredients and what they do, red flags to look out for"} />
        </div>
        <div className={styles.rectangleCard}>
          <RectangleCard heading="Different kinds of sets" text={text3} />
        </div>
        <div className={styles.rectangleCard}>
          <RectangleCard heading="Need for custom workout plans and how to make one" text={text5} />
        </div>
        <div className={styles.rectangleCard}>
        <CalorieCalculator/>
        </div>
      </div>
    </>
  );
}
