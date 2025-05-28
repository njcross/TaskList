//LogoutButton.tsx
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import React, { useState } from "react";

const LogoutButton: React.FC = () => {
  const { logout, isAuthenticated } = useAuth0();
  const [token, setToken] = useState('')

  const handleLogout = () => {
    sessionStorage.clear();
    setToken('');
    logout({
      logoutParams: {
        returnTo: "http://localhost:5173",
      },
    });
  };

  if(isAuthenticated) return (<Button onClick={handleLogout}>Log Out</Button>)
  return null;
}

export default LogoutButton;