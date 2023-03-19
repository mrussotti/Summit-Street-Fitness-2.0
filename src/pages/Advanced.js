import RectangleCard from "../components/RectangleCard"; 
import styles from './universal.module.css';
import React from "react";

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
  return (
    <div className={styles.advancedContainer}>
      <h1>Advanced</h1>
      <div className="rectangle-cards">
        <RectangleCard heading="Intro" text={text4} />
        <RectangleCard heading="Stimulus to Fatigue Ratio" text={text1} />
        <RectangleCard
          heading="Advanced Vocab"
          text={"MEV, MAV, Mesocycle, etc."}
        />
        <RectangleCard heading="Advanced Nutrition" text={text2} />
        <RectangleCard
          heading="Pre-Workout Breakdown"
          text={
            "What are ingredients and what they do, red flags to look out for"
          }
        />
        <RectangleCard heading="Different Kinds of Sets" text={text3} />
        <RectangleCard
          heading="Need for Custom Workout Plans and How to Make One"
          text={text5}
        />
      </div>
    </div>
  );
}
