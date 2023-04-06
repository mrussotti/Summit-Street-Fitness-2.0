import RectangleCard from "../components/RectangleCard";
import styles from './universal.module.css';
import React, { useEffect } from 'react';


const text5 = [
  "Do exercises that give you a stim-to-fatigue ratio. Different people benefit from different things",
];
const text4 = ["Decreasing gains as you keep lifting"];
const text3 = [
  "Giant sets, drop sets, etc. Explain the advantages and disadvantages",
];
const text2 = ["Supplementation with amino acids"];
const text1 = [
  "If you only make gains when everything is dialed in to the max. This is the place for you.",
];

export default function Advanced() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

      </div>
    </>
  );
}
