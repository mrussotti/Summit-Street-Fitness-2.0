import React from 'react';
import { useDrag } from 'react-dnd';

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
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      {name}
    </div>
  );
};

export default Exercise;
