import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import styles from './LogoutButton.module.css';

const LogoutButton: React.FC = () => {
  const { logout, isAuthenticated } = useAuth0();
  const [token, setToken] = useState('');

  const handleLogout = () => {
    sessionStorage.clear();
    setToken('');
    logout({
      logoutParams: {
        returnTo: "http://localhost:5173",
      },
    });
  };

  if (isAuthenticated) {
    return (
      <button className={styles.logoutButton} onClick={handleLogout}>
        Log Out
      </button>
    );
  }

  return null;
};

export default LogoutButton;
