import SplitPage from "../components/SplitPage";
import styles from './universal.module.css';
import React, { useEffect } from 'react';

export default function About() {

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
