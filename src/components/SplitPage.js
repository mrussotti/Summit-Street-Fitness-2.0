import React from 'react';
import styles from './SplitPage.module.css';

const SplitPage = ({ leftImage, rightImage, leftText, rightText }) => {
  return (
    <div className={styles.splitPage}>
      <div className={styles.splitPage__half}>
        <div className={styles.splitPage__content}>
          <img src={leftImage} alt="Left side" className={styles.splitPage__image} />
          <p className={styles.splitPage__text}>{leftText}</p>
        </div>
      </div>
      <div className={styles.splitPage__half}>
        <div className={styles.splitPage__content}>
          <img src={rightImage} alt="Right side" className={styles.splitPage__image} />
          <p className={styles.splitPage__text}>{rightText}</p>
        </div>
      </div>
    </div>
  );
};

export default SplitPage;
