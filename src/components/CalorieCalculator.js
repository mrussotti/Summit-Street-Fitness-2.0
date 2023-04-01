import React, { useState } from "react";
import styles from "./calorieCalculator.module.css";

const CalorieCalculator = () => {
  const [state, setState] = useState({
    age: "",
    gender: "male",
    weight: "",
    height: "",
    activity: "sedentary",
    unit: "metric",
  });

  const [result, setResult] = useState(null);

  const [halfPoundLoss, setHalfPoundLoss] = useState(null);
  const [onePoundLoss, setOnePoundLoss] = useState(null);
  const [twoPoundLoss, setTwoPoundLoss] = useState(null);

  const [halfPoundGain, setHalfPoundGain] = useState(null);
  const [onePoundGain, setOnePoundGain] = useState(null);
  const [twoPoundGain, setTwoPoundGain] = useState(null);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { age, gender, weight, height, activity, unit } = state;

    // Convert weight and height to metric if necessary
    const weightMetric = unit === "imperial" ? weight * 0.453592 : weight;
    const heightMetric = unit === "imperial" ? height * 2.54 : height;

    let bmr;
    if (gender === "male") {
      bmr = 10 * weightMetric + 6.25 * heightMetric - 5 * age + 5;
    } else {
      bmr = 10 * weightMetric + 6.25 * heightMetric - 5 * age - 161;
    }

    const activityMultiplier = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };

    const calories = bmr * activityMultiplier[activity];
    setResult(Math.round(calories));

    // Calculate calories for weight loss goals
    const caloriesPerHalfPound = 250;
    const caloriesPerPound = 500;
    const caloriesPerTwoPounds = 1000;

    setHalfPoundLoss(Math.round(calories - caloriesPerHalfPound));
    setOnePoundLoss(Math.round(calories - caloriesPerPound));
    setTwoPoundLoss(Math.round(calories - caloriesPerTwoPounds));

    // Calculate calories for weight gain goals
    setHalfPoundGain(Math.round(calories + caloriesPerHalfPound));
    setOnePoundGain(Math.round(calories + caloriesPerPound));
    setTwoPoundGain(Math.round(calories + caloriesPerTwoPounds));
  };

  return (
    <div className={styles.calculatorContainer}>
      <h2 className={styles.calculatorTitle}>Calorie Calculator</h2>
      <form onSubmit={handleSubmit} className={styles.calculatorForm}>
        {/* Input fields and labels */}
        {/* Measurement Unit */}
        <label htmlFor="unit">Unit:</label>
        <select
          name="unit"
          id="unit"
          value={state.unit}
          onChange={handleChange}
        >
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>
        {/* Age */}
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={state.age}
          onChange={handleChange}
        />
        {/* Gender */}
        <label htmlFor="gender">Gender:</label>
        <select
          name="gender"
          id="gender"
          value={state.gender}
          onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {/* Weight */}
        <label htmlFor="weight">Weight ({state.unit === "metric" ? "kg" : "lbs"}):</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={state.weight}
          onChange={handleChange}
        />
        {/* Height */}
        <label htmlFor="height">Height ({state.unit === "metric" ? "cm" : "inches"}):</label>
        <input
          type="number"
          id="height"
          name="height"
          value={state.height}
          onChange={handleChange}
        />
        {/* Activity level */}
        <label htmlFor="activity">Activity Level:</label>
        <select
          name="activity"
          id="activity"
          value={state.activity}
          onChange={handleChange}
        >
          <option value="sedentary">Sedentary</option>
          <option value="light">Light</option>
          <option value="moderate">Moderate</option>
          <option value="active">Active</option>
          <option value="veryActive">Very Active</option>
        </select>
        <button type="submit" className={styles.submitButton}>
          Calculate
        </button>
      </form>
      {result && (
        <div>
          <p className={styles.resultParagraph}>
            Based on your input, your estimated daily caloric needs are{" "}
            <strong>{result}</strong> calories.
          </p>
          <p className={styles.resultParagraph}>
            To lose 0.5 lbs per week, consume approximately{" "}
            <strong>{halfPoundLoss}</strong> calories per day.
          </p>
          <p className={styles.resultParagraph}>
            To lose 1 lb per week, consume approximately{" "}
            <strong>{onePoundLoss}</strong> calories per day.
          </p>
          <p className={styles.resultParagraph}>
            To lose 2 lbs per week, consume approximately{" "}
            <strong>{twoPoundLoss}</strong> calories per day.
          </p>
          <p className={styles.resultParagraph}>
            To gain 0.5 lbs per week, consume approximately{" "}
            <strong>{halfPoundGain}</strong> calories per day.
          </p>
          <p className={styles.resultParagraph}>
            To gain 1 lb per week, consume approximately{" "}
            <strong>{onePoundGain}</strong> calories per day.
          </p>
          <p className={styles.resultParagraph}>
            To gain 2 lbs per week, consume approximately{" "}
            <strong>{twoPoundGain}</strong> calories per day.
          </p>
        </div>
      )}
    </div>
    );
  };
  
  export default CalorieCalculator;
