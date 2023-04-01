import React, { useState } from 'react';
import styles from './recommendationForm.module.css';

function ContentFilter({ onSubmit }) {
  const [lifterLevel, setLifterLevel] = useState(''); //delete?

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const beginner = event.target.elements.beginner.checked;
    const intermediate = event.target.elements.intermediate.checked;
    const advanced = event.target.elements.advanced.checked;

    let recommendation = '';

    if (beginner) {
      recommendation = 'Beginner';
    } else if (intermediate) {
      recommendation = 'Intermediate';
    } else if (advanced) {
      recommendation = 'Advanced';
    }

    onSubmit(recommendation);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className={styles.formContainer}>
        <p>Do you consider yourself to be a beginner, intermediate, or advanced lifter?</p>
        <label htmlFor="beginner" className={styles.formLabel}>Beginner</label>
        <input type="radio" name="lifterLevel" id="beginner" value="Beginner" checked={lifterLevel === 'Beginner'} onChange={() => setLifterLevel('Beginner')} />
  
        <label htmlFor="intermediate" className={styles.formLabel}>Intermediate</label>
        <input type="radio" name="lifterLevel" id="intermediate" value="Intermediate" checked={lifterLevel === 'Intermediate'} onChange={() => setLifterLevel('Intermediate')} />
  
        <label htmlFor="advanced" className={styles.formLabel}>Advanced</label>
        <input type="radio" name="lifterLevel" id="advanced" value="Advanced" checked={lifterLevel === 'Advanced'} onChange={() => setLifterLevel('Advanced')} />
  
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </>
  );
}

export default ContentFilter;