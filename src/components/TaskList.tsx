import React from 'react';
import { Card } from 'react-bootstrap';
import type { Task } from '../models/Task.model';
import styles from './TaskList.module.css';

const TaskList: React.FC<Task> = ({ title, description, status }) => {
  return (
    <Card className={styles.card}>
      <Card.Header className={styles.title}>{title}</Card.Header>
      <Card.Body className={styles.body}>
        <p className={styles.description}>
          {description || 'No description provided'}
        </p>
        <p className={`${styles.status} ${styles[status.toLowerCase()]}`}>
          {status}
        </p>
      </Card.Body>
    </Card>
  );
};

export default TaskList;
