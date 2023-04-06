// WeeklySummary.js
import React from 'react';
import styles from './WeeklySummary.module.css';

const WeeklySummary = ({ volumeData }) => {
  const calculateTotalVolume = () => {
    const totalVolume = {};

    Object.values(volumeData).forEach((dayVolume) => {
      Object.entries(dayVolume).forEach(([muscleGroup, volume]) => {
        if (totalVolume[muscleGroup]) {
          totalVolume[muscleGroup] += volume;
        } else {
          totalVolume[muscleGroup] = volume;
        }
      });
    });

    return totalVolume;
  };

  const totalVolume = calculateTotalVolume();

  return (
    <div className={styles.weeklySummary}>
      <h2 className={styles.title}>Weekly Summary</h2>
      {Object.entries(totalVolume).map(([muscleGroup, volume]) => (
        <p key={muscleGroup}>
          {muscleGroup}: {volume}
        </p>
      ))}
    </div>
  );
};

export default WeeklySummary;
