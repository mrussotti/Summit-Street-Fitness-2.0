import React, { useState } from 'react';
import styles from './recommendationForm.module.css'; // Update the import

function RecommendationForm({ onSubmit }) {
  const [showFollowUpForm, setShowFollowUpForm] = useState(false);

  const handleInitialFormSubmit = (event) => {
    event.preventDefault();

    const Yes = event.target.elements.Yes.checked;

    let recommendation = '';

    if (Yes) {
      recommendation = 'Recomp';
      onSubmit(recommendation);
    } else {
      setShowFollowUpForm(true);
    }
  };

  const handleFollowUpFormSubmit = (event) => {
    event.preventDefault();
    const bulk = event.target.elements.bulk.checked;
    const cut = event.target.elements.cut.checked;

    let recommendation = '';

    if (bulk) {
      recommendation = 'Bulk';
    } else if (cut) {
      recommendation = 'Cut';
    }

    onSubmit(recommendation);
  };

return (
<>
{!showFollowUpForm ? (
<form onSubmit={handleInitialFormSubmit} className={styles.formContainer}>
<p>
Would you consider yourself to be any of the following: a new lifter, a
de-trained lifter, or an obese individual?
</p>      
<label htmlFor="Yes" className={styles.formLabel}>Yes</label>
      <input type="radio" name="userType" id="Yes" />

      <label htmlFor="No" className={styles.formLabel}>No</label>
      <input type="radio" name="userType" id="No" />

      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  ) : (
    <form onSubmit={handleFollowUpFormSubmit} className={styles.formContainer}>
      <p>Would you like to bulk up or cut down?</p>

      <label htmlFor="bulk" className={styles.formLabel}>Bulk</label>
      <input type="radio" name="goal" id="bulk" />

      <label htmlFor="cut" className={styles.formLabel}>Cut</label>
      <input type="radio" name="goal" id="cut" />

<button type="submit" className={styles.submitButton}>Submit</button>
</form>
)}
</>
);
}

export default RecommendationForm;