import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';
import styles from './TaskDetails.module.css';

const TaskDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tasks } = useTaskContext();
  const task = tasks.find(t => t.id === id);

  if (!task) return <div className={styles.notFound}>Task not found</div>;

  return (
    <div className={styles.detailsContainer}>
      <h2 className={styles.title}>{task.title}</h2>
      <p className={styles.description}>{task.description}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Due Date:</strong> {task.dueDate}</p>
      <Link to={`/edit/${task.id}`} className={styles.editLink}>✎ Edit Task</Link>
    </div>
  );
};

export default TaskDetails;
