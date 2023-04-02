import React from 'react';
import Exercise from './Exercise';
import Day from './Day';

const exercises = [
  { id: 'exercise1', name: 'Push-ups' },
  { id: 'exercise2', name: 'Sit-ups' },
  { id: 'exercise3', name: 'Squats' },
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const ExerciseScheduler = () => {
  return (
    <div>
      <div>
        <h1>Exercises</h1>
        {exercises.map((exercise) => (
          <Exercise key={exercise.id} id={exercise.id} name={exercise.name} />
        ))}
      </div>
      <div>
        <h1>Days</h1>
        {days.map((day) => (
          <Day key={day} day={day} />
        ))}
      </div>
    </div>
  );
};

export default ExerciseScheduler;
