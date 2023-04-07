import React, { useState } from "react";
import styles from "./MesocycleSetsCalculator.module.css";


const MesocycleSetsCalculator = () => {
  const MEV = {
    chest: { pectorals: 10 },
    back: { lats: 10, traps: 8, rhomboids: 8 },
    legs: { quads: 10, hamstrings: 10, calves: 8 },
    shoulders: { anteriorDeltoid: 8, lateralDeltoid: 8, posteriorDeltoid: 8 },
    arms: { biceps: 8, triceps: 8, forearms: 6 },
  };

  const MAV = {
    chest: { pectorals: 20 },
    back: { lats: 20, traps: 16, rhomboids: 16 },
    legs: { quads: 20, hamstrings: 20, calves: 16 },
    shoulders: { anteriorDeltoid: 16, lateralDeltoid: 16, posteriorDeltoid: 16 },
    arms: { biceps: 16, triceps: 16, forearms: 12 },
  };

  const calculateWeeklyIncrease = () => {
    const muscleGroups = Object.keys(MEV);
    const increases = {};

    muscleGroups.forEach((muscleGroup) => {
      const muscles = Object.keys(MEV[muscleGroup]);
      increases[muscleGroup] = {};

      muscles.forEach((muscle) => {
        const increase = (MAV[muscleGroup][muscle] - MEV[muscleGroup][muscle]) / 12;
        increases[muscleGroup][muscle] = increase;
      });
    });

    return increases;
  };

  const [startingSets, setStartingSets] = useState(MEV);
  const [weeklyIncrease, setWeeklyIncrease] = useState(calculateWeeklyIncrease());

  const [deloadPercentage, setDeloadPercentage] = useState(50);

  const calculateSets = () => {
    const mesocycle = [];
    const muscleGroups = Object.keys(startingSets);

    for (let week = 1; week <= 13; week++) {
      const weekSets = {};

      muscleGroups.forEach((muscleGroup) => {
        weekSets[muscleGroup] = {};

        const muscles = Object.keys(startingSets[muscleGroup]);

        muscles.forEach((muscle) => {
          let sets = startingSets[muscleGroup][muscle] + weeklyIncrease[muscleGroup][muscle] * (week - 1);

          if (week === 7) {
            sets *= (100 - deloadPercentage) / 100;
          } else if (week > 7) {
            sets -= weeklyIncrease[muscleGroup][muscle];
          }

          weekSets[muscleGroup][muscle] = Math.round(sets);
        });
      });

      mesocycle.push(weekSets);
    }

    return mesocycle;
  };

  const mesocycle = calculateSets();


  const bgColorByVolume = (muscleGroup, muscle, volume) => {
    const minVolume = 0;
    const maxVolume = MAV[muscleGroup][muscle];
    const startColor = [245, 245, 245];
    const endColor = [21,71,52];

    const ratio = (volume - minVolume) / (maxVolume - minVolume);

    const r = Math.round(startColor[0] + ratio * (endColor[0] - startColor[0]));
    const g = Math.round(startColor[1] + ratio * (endColor[1] - startColor[1]));
    const b = Math.round(startColor[2] + ratio * (endColor[2] - startColor[2]));

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Mesocycle Sets Calculator</h2>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
        <thead>
          <tr>
            <th>Week</th>
            {Object.keys(startingSets).map((muscleGroup) =>
              Object.keys(startingSets[muscleGroup]).map((muscle) => (
                <th key={`${muscleGroup}-${muscle}`}>{muscle}</th>
              ))
            )}
          </tr>
        </thead>
        <tbody>
          {mesocycle.map((weekSets, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {Object.keys(weekSets).map((muscleGroup) =>
                Object.keys(weekSets[muscleGroup]).map((muscle) => (
                  <td
                    key={`${muscleGroup}-${muscle}`}
                    style={{ backgroundColor: bgColorByVolume(muscleGroup, muscle, weekSets[muscleGroup][muscle]) }}
                  >
                    {weekSets[muscleGroup][muscle]}
                  </td>
                ))
              )}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default MesocycleSetsCalculator;

