import SplitPage from "../components/SplitPage";
import styles from './universal.module.css';
import React, { useEffect } from 'react';



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
      <h1 className={styles.pageTitle}>About</h1>
      <div className={styles.rectangleCardContainer}>
      <SplitPage
        leftImage="images/Matt.JPG"
        rightImage="images/Neal.JPG"
        leftText="Matt bio."
        rightText="Neal bio."
      />
      </div>
    </>
  );
}
