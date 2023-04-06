import React from 'react';
import { useDrag } from 'react-dnd';
import styles from './Exercise.module.css';

const Exercise = ({ name, id, muscleGroups }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'exercise',
    item: { id, name, muscleGroups },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={styles.exercise}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {name}
      <br />
      <small>Muscle groups: {muscleGroups.join(', ')}</small>
    </div>
  );
};

export default Exercise;
