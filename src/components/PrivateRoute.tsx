import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './PrivateRoute.module.css';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className={styles.redirectMessage}>
        <p>You must be logged in to access this page.</p>
        <Navigate to="/login" />
      </div>
    );
  }

  return children;
};

export default PrivateRoute;
