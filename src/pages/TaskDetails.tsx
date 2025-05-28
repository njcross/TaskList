// src/pages/TaskDetails.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';

const TaskDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tasks } = useTaskContext();
  const task = tasks.find(t => t.id === id);

  if (!task) return <div>Task not found</div>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {task.dueDate}</p>
      <Link to={`/edit/${task.id}`}>Edit Task</Link>
    </div>
  );
};

export default TaskDetails;
