import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

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
      style={{
        border: '1px solid black',
        padding: '1rem',
        minHeight: '200px',
        minWidth: '200px',
        background: isOver ? 'lightblue' : 'white',
      }}
    >
      <h3>{day}</h3>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Day;
