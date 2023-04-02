// ActoinAssist.js
import styles from './universal.module.css';
import CalorieCalculator from '../components/CalorieCalculator';
import React, { useEffect } from 'react';
import MesocycleSetsCalculator from '../components/MesocycleSetsCalculator';

export default function ActoinAssist() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <h1 className={styles.pageTitle}>Action Assist</h1>
          
        <CalorieCalculator/>
        <MesocycleSetsCalculator/>
    </>
  );
}
