import React, { useState } from 'react';

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
        <form onSubmit={handleInitialFormSubmit}>
          <p>
            Would you consider yourself to be any of the following: a new lifter, a
            de-trained lifter, or an obese individual?
          </p>

          <label htmlFor="Yes">Yes</label>
          <input type="radio" name="userType" id="Yes" />

          <label htmlFor="No">No</label>
          <input type="radio" name="userType" id="No" />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <form onSubmit={handleFollowUpFormSubmit}>
          <p>Would you like to bulk up or cut down?</p>

          <label htmlFor="bulk">Bulk</label>
          <input type="radio" name="goal" id="bulk" />

          <label htmlFor="cut">Cut</label>
          <input type="radio" name="goal" id="cut" />

          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}

export default RecommendationForm;
