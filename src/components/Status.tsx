import React from 'react';
import styles from './Status.module.css';

export type StatusProp = {
  status: 'loading' | 'error' | 'success';
};

const Status: React.FC = () => {
  const statusInput: StatusProp = {
    status: 'loading', // You can replace this with dynamic props or context
  };

  let message: string;
  let statusClass = '';

  switch (statusInput.status) {
    case 'loading':
      message = 'Loading...';
      statusClass = styles.loading;
      break;
    case 'error':
      message = 'Error fetching data';
      statusClass = styles.error;
      break;
    case 'success':
      message = 'Data fetched successfully';
      statusClass = styles.success;
      break;
    default:
      message = 'Unknown status';
  }

  return (
    <div className={styles.statusContainer}>
      <h1 className={styles.title}>Status</h1>
      <p className={statusClass}>{message}</p>
    </div>
  );
};

export default Status;
