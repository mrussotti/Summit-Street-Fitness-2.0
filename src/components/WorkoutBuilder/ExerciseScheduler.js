import React, { useState } from 'react';
import Exercise from './Exercise';
import Day from './Day';
import WeeklySummary from './WeeklySummary';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { isMobile } from 'react-device-detect';
import styles from './ExerciseScheduler.module.css';

const backend = isMobile ? TouchBackend : HTML5Backend;

const exerciseList = [
  { id: 1, name: 'Push-ups', muscleGroups: ['Chest', 'Triceps', 'Shoulders'] },
  { id: 2, name: 'Pull-ups', muscleGroups: ['Back', 'Biceps', 'Forearms'] },
  { id: 3, name: 'Squats', muscleGroups: ['Quadriceps', 'Hamstrings', 'Glutes', 'Calves'] },
  { id: 4, name: 'Lunges', muscleGroups: ['Quadriceps', 'Hamstrings', 'Glutes'] },
  { id: 5, name: 'Sit-ups', muscleGroups: ['Abdominals'] },
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const ExerciseScheduler = () => {
  const [exercises, setExercises] = useState(exerciseList);
  const [volumeData, setVolumeData] = useState({});

  const [customExerciseName, setCustomExerciseName] = useState('');
  const [customMuscleGroups, setCustomMuscleGroups] = useState('');

  const handleVolumeUpdate = (day, volume) => {
    setVolumeData((prevVolumeData) => ({ ...prevVolumeData, [day]: volume }));
  };

  const handleCustomExerciseSubmit = (e) => {
    e.preventDefault();
    const newExercise = {
      id: exercises.length + 1,
      name: customExerciseName,
      muscleGroups: customMuscleGroups.split(',').map((group) => group.trim()),
    };
    setExercises([...exercises, newExercise]);
    setCustomExerciseName('');
    setCustomMuscleGroups('');
  };

  return (
    
    <DndProvider backend={backend}>
      <h1 className={styles.title}>Exercise Scheduler</h1>
      <div className={styles.exercisesContainer}>
        {exercises.map((exercise) => (
          <Exercise key={exercise.id} id={exercise.id} name={exercise.name} muscleGroups={exercise.muscleGroups} />
        ))}
      </div>
      <form onSubmit={handleCustomExerciseSubmit} className={styles.addCustomExerciseForm}>
        <label>
          Exercise name:
          <input
            type="text"
            value={customExerciseName}
            onChange={(e) => setCustomExerciseName(e.target.value)}
          />
        </label>
        <label>
          Muscle groups (comma separated):
          <input
            type="text"
            value={customMuscleGroups}
            onChange={(e) => setCustomMuscleGroups(e.target.value)}
          />
        </label>
        <button type="submit">Add custom exercise</button>
      </form>
      <div className={styles.container}>
        {days.map((day) => (
          <Day key={day} day={day} onVolumeUpdate={handleVolumeUpdate} />
        ))}
      </div>
      <WeeklySummary volumeData={volumeData} />
    </DndProvider>
  );
};

export default ExerciseScheduler;
