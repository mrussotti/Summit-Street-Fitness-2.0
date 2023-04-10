import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import styles from './Day.module.css';

const Day = React.forwardRef(({ day, onVolumeUpdate }, ref) => {
  const [exercises, setExercises] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'exercise',
    drop: (item) => {
      setExercises((prevExercises) => [...prevExercises, { ...item, sets: 1, reps: 1 }]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const updateSetsReps = (index, sets, reps) => {
    setExercises((prevExercises) =>
      prevExercises.map((exercise, idx) => {
        if (index === idx) {
          return { ...exercise, sets: parseInt(sets, 10), reps: parseInt(reps, 10) };
        }
        return exercise;
      }),
    );
  };

  const calculateTotalSets = () => exercises.reduce((acc, exercise) => acc + exercise.sets, 0);

  const calculateMuscleGroupVolume = () => {
    const muscleGroupVolume = {};

    exercises.forEach((exercise) => {
      const volume = exercise.sets;
      exercise.muscleGroups.forEach((muscleGroup) => {
        if (muscleGroupVolume[muscleGroup]) {
          muscleGroupVolume[muscleGroup] += volume;
        } else {
          muscleGroupVolume[muscleGroup] = volume;
        }
      });
    });

    return muscleGroupVolume;
  };

  const handleDeleteExercise = (index) => {
    setExercises((prevExercises) => prevExercises.filter((_, idx) => idx !== index));
  };

  useEffect(() => {
    if (typeof onVolumeUpdate === 'function') {
      onVolumeUpdate(day, calculateMuscleGroupVolume());
    }
  }, [exercises, onVolumeUpdate]);

  const addExercise = (exercise) => {
    setExercises((prevExercises) => [...prevExercises, { ...exercise, sets: 1, reps: 1 }]);
  };

  React.useImperativeHandle(ref, () => ({
    day,
    addExercise,
  }));

  return (
    <div
      ref={drop}
      className={styles.day}
      style={{
        background: isOver ? 'lightblue' : 'white',
      }}
    >
      <h3 className={styles.dayTitle}>{day}</h3>
      <ol>
        {exercises.map((exercise, index) => (
          <li key={index}>
            <span className={styles.exerciseName}>{exercise.name}:</span>
            <span>
              <input
                type="number"
                min="1"
                value={exercise.sets}
                onChange={(e) => updateSetsReps(index, e.target.value, exercise.reps)}
              />{' '}
              sets,
            </span>
            <span>
              <input
                type="number"
                min="1"
                value={exercise.reps}
                onChange={(e) => updateSetsReps(index, exercise.sets, e.target.value)}
              />{' '}
              reps
            </span>
            <button onClick={() => handleDeleteExercise(index)}>Delete</button>
            <br />
            <small>Muscle groups: {exercise.muscleGroups.join(', ')}</small>
          </li>
        ))}
      </ol>
      <p>Total sets: {calculateTotalSets()}</p>
      {Object.entries(calculateMuscleGroupVolume()).map(([muscleGroup, volume]) => (
        <p key={muscleGroup}>
          {muscleGroup}: {volume}
        </p>
      ))}
    </div>
  );
});

export default Day;
