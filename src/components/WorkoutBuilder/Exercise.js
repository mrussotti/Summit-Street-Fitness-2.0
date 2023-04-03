import React from 'react';
import { useDrag } from 'react-dnd';
import styles from './Exercise.module.css';

const Exercise = ({ name, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'exercise',
    item: { id, name },
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
    </div>
  );
};

export default Exercise;
