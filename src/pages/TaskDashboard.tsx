// src/pages/TaskDashboard.tsx
import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';

const TaskDashboard: React.FC = () => {
  const { tasks, deleteTask } = useTaskContext();

  return (
    <div>
      <h1>Task Dashboard</h1>
      <Link to="/create">Create New Task</Link>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDashboard;
