import React, { useState } from "react";

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
      bmr = 88.362 + 13.397 * weightMetric + 5.799 * heightMetric - 5.677 * age;
    } else {
      bmr = 447.593 + 9.247 * weightMetric + 3.098 * heightMetric - 4.330 * age;
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
  };

  return (
    <div>
      <h2>Calorie Calculator</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Calculate</button>
      </form>
      {result && (
        <p>
          Based on your input, your estimated daily caloric needs are{" "}
          <strong>{result}</strong> calories.
        </p>
      )}
    </div>
  );
};

export default CalorieCalculator;
