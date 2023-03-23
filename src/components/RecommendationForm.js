import React from 'react';

function RecommendationForm({ onSubmit }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Decision tree logic
    const experience = parseFloat(event.target.elements.experience.value);
    const bodyFat = parseFloat(event.target.elements.bodyFat.value);

    let recommendation = 'Recomp';

    if (experience <= 1) {
      if (bodyFat <= 15) {
        recommendation = 'Bulk';
      } else {
        recommendation = 'Cut';
      }
    } else {
      if (bodyFat <= 10) {
        recommendation = 'Bulk';
      } else if (bodyFat >= 20) {
        recommendation = 'Cut';
      }
    }

    onSubmit(recommendation);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="experience">Experience (years):</label>
      <input type="number" name="experience" id="experience" required />

      <label htmlFor="bodyFat">Body Fat Percentage:</label>
      <input type="number" name="bodyFat" id="bodyFat" required />

      <button type="submit">Submit</button>
    </form>
  );
}

export default RecommendationForm;
