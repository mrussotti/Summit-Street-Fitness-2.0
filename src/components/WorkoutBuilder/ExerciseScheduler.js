import React from 'react';
import Exercise from './Exercise';
import Day from './Day';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './ExerciseScheduler.module.css';

const exerciseList = [
  { id: 1, name: 'Push-ups' },
  { id: 2, name: 'Pull-ups' },
  { id: 3, name: 'Squats' },
  { id: 4, name: 'Lunges' },
  { id: 5, name: 'Sit-ups' },
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const ExerciseScheduler = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <h1 className={styles.title}>Exercise Scheduler</h1>
      <div className={styles.exercisesContainer}>
        {exerciseList.map((exercise) => (
          <Exercise key={exercise.id} id={exercise.id} name={exercise.name} />
        ))}
      </div>
      <div className={styles.container}>
        {days.map((day) => (
          <Day key={day} day={day} />
        ))}
      </div>
    </DndProvider>
  );
};

export default ExerciseScheduler;
