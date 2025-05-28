// src/context/AuthContext.tsx
import React, { createContext, useContext } from 'react';
import { useAuth0, type LogoutOptions } from '@auth0/auth0-react';
import type { AuthUser } from '../models/AuthUser.model';

interface AuthContextProps {
  user: AuthUser | undefined;
  isAuthenticated: boolean;
  loginWithRedirect: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <AuthContext.Provider
      value={{
        user: user as AuthUser,
        isAuthenticated,
        loginWithRedirect,
        logout: () => logout({
            returnTo: window.location.origin,
          } as LogoutOptions),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
