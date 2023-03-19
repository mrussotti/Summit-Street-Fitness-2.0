import React, { useState, useEffect } from 'react';

const muscleGroups = [
  { name: 'Chest', mev: 8, mavRange: [10, 20] },
  { name: 'Back', mev: 10, mavRange: [10, 20] },
  { name: 'Shoulders', mev: 8, mavRange: [12, 22] },
  { name: 'Biceps', mev: 6, mavRange: [8, 14] },
  { name: 'Triceps', mev: 6, mavRange: [8, 14] },
  { name: 'Quadriceps', mev: 8, mavRange: [10, 20] },
  { name: 'Hamstrings', mev: 8, mavRange: [10, 20] },
  { name: 'Calves', mev: 8, mavRange: [10, 20] },
];
const calculateProgression = (muscleGroup, weeks) => {
    const range = muscleGroup.mavRange[1] - muscleGroup.mev;
    const step = range / (weeks - 1);
    const progression = Array.from({ length: weeks }, (_, i) => {
      return Math.round(muscleGroup.mev + i * step);
    });
    return progression;
  };
  
  const adjustVolume = (muscleGroup, isSpecialized) => {
    const factor = isSpecialized ? 1.3 : 0.9;
    const adjustedMEV = Math.round(muscleGroup.mev * factor);
    const adjustedMAVRange = muscleGroup.mavRange.map((volume) => Math.round(volume * factor));
    return { ...muscleGroup, mev: adjustedMEV, mavRange: adjustedMAVRange };
  };
  
  const MuscleVolumeCalculator = () => {
    const [selectedMuscles, setSelectedMuscles] = useState([]);
    const [adjustedMuscleGroups, setAdjustedMuscleGroups] = useState(muscleGroups);
    const [volumeProgressions, setVolumeProgressions] = useState([]);
  
    useEffect(() => {
      const adjustedGroups = muscleGroups.map((muscleGroup) =>
        adjustVolume(
          muscleGroup,
          selectedMuscles.includes(muscleGroup)
        )
      );
      setAdjustedMuscleGroups(adjustedGroups);
    }, [selectedMuscles]);
  
    useEffect(() => {
      const progressions = adjustedMuscleGroups.map((muscleGroup) =>
        calculateProgression(muscleGroup, 8)
      );
      setVolumeProgressions(progressions);
    }, [adjustedMuscleGroups]);
  
    const handleMuscleSelect = (event, muscleGroup) => {
      const isChecked = event.target.checked;
  
      if (isChecked && selectedMuscles.length < 3) {
        setSelectedMuscles([...selectedMuscles, muscleGroup]);
      } else if (!isChecked) {
        setSelectedMuscles(selectedMuscles.filter((m) => m !== muscleGroup));
      }
    };
  
    return (
      <div>
        <h1>Muscle Volume Calculator</h1>
        <div>
          <h3>Select up to 3 muscle groups to specialize in:</h3>
          {muscleGroups.map((muscleGroup) => (
            <label key={muscleGroup.name}>
              <input
                type="checkbox"
                onChange={(event) => handleMuscleSelect(event, muscleGroup)}
                disabled={
                  !selectedMuscles.includes(muscleGroup) &&
                  selectedMuscles.length >= 3
                }
              />
              {muscleGroup.name}
            </label>
          ))}
        </div>
        <table>
          <thead>
            <tr>
              <th>Muscle Group</th>
              <th>MEV</th>
              <th>MAV</th>
              {Array.from({ length: 8 }, (_, i) => (
                <th key={`week-${i + 1}`}>Week {i + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {adjustedMuscleGroups.map((muscleGroup, index) => (
              <tr key={muscleGroup.name}>
                <td>{muscleGroup.name}</td>
                <td>{muscleGroup.mev}</td>
                <td>{muscleGroup.mavRange.join(' - ')}</td>
                {volumeProgressions[index]?.map((volume, i) => (
                  <td key={`week-${i + 1}`}>{volume}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default MuscleVolumeCalculator;