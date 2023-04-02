import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import styles from './Day.module.css';

const Day = ({ day }) => {
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
          return { ...exercise, sets, reps };
        }
        return exercise;
      }),
    );
  };

  return (
    <div
      ref={drop}
      className={styles.day}
      style={{
        background: isOver ? 'lightblue' : 'white',
      }}
    >
      <h3 className={styles.dayTitle}>{day}</h3>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            {exercise.name} -{' '}
            <input
              type="number"
              min="1"
              value={exercise.sets}
              onChange={(e) => updateSetsReps(index, e.target.value, exercise.reps)}
            />{' '}
            sets x{' '}
            <input
              type="number"
              min="1"
              value={exercise.reps}
              onChange={(e) => updateSetsReps(index, exercise.sets, e.target.value)}
            />{' '}
            reps
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Day;
