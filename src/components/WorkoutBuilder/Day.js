import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import styles from './Day.module.css';

const Day = ({ day }) => {
  const [exercises, setExercises] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'exercise',
    drop: (item) => {
      setExercises((prevExercises) => [...prevExercises, item]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
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
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Day;
