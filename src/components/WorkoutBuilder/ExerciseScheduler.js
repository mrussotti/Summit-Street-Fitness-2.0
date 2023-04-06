import React, { useState } from 'react';
import Exercise from './Exercise';
import Day from './Day';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './ExerciseScheduler.module.css';

const exerciseList = [
  { id: 1, name: 'Push-ups', muscleGroups: ['Chest', 'Triceps', 'Shoulders'] },
  { id: 2, name: 'Pull-ups', muscleGroups: ['Back', 'Biceps', 'Forearms'] },
  { id: 3, name: 'Squats', muscleGroups: ['Quadriceps', 'Hamstrings', 'Glutes', 'Calves'] },
  { id: 4, name: 'Lunges', muscleGroups: ['Quadriceps', 'Hamstrings', 'Glutes'] },
  { id: 5, name: 'Sit-ups', muscleGroups: ['Abdominals'] },
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const ExerciseScheduler = () => {
  const [volumeData, setVolumeData] = useState({});

  const handleVolumeUpdate = (day, volume) => {
    setVolumeData((prevVolumeData) => ({ ...prevVolumeData, [day]: volume }));
  };

  // You can now access the volume data from the `volumeData` state.

  return (
    <DndProvider backend={HTML5Backend}>
      <h1 className={styles.title}>Exercise Scheduler</h1>
      <div className={styles.exercisesContainer}>
        {exerciseList.map((exercise) => (
          <Exercise key={exercise.id} id={exercise.id} name={exercise.name} muscleGroups={exercise.muscleGroups} />
        ))}
      </div>
      <div className={styles.container}>
        {days.map((day) => (
          <Day key={day} day={day} onVolumeUpdate={handleVolumeUpdate} />
        ))}
      </div>
    </DndProvider>
  );
};

export default ExerciseScheduler;
