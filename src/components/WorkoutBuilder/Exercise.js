import React from 'react';
import { useDrag } from 'react-dnd';
import styles from './Exercise.module.css';

const Exercise = ({ name, id, muscleGroups, onDaySelect }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'exercise',
    item: { id, name, muscleGroups },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleDaySelect = (event) => {
    const selectedDay = event.target.value;
    if (selectedDay && onDaySelect) {
      onDaySelect({ id, name, muscleGroups }, selectedDay);
    }
  };

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
      <div className={styles.daySelectContainer}>
        <label>
          Add to day:
          <select onChange={handleDaySelect}>
            <option value="">Select day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Exercise;
