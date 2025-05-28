//App.tsx
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CallbackPage from "./components/CallbackPage";
import TaskListPage from "./components/TaskListPage";
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePage from "./components/ProfilePage";
import AuthenticationGuard from "./components/AuthenticationGuard";
import ContentPage from "./components/ContentPage";

const App: React.FC = () => {

  const {isLoading} = useAuth0();
  
  if(isLoading) return (<div>Loading...</div>)

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={ProfilePage} />}
      />
      <Route 
        path="/tasks"
        element={<AuthenticationGuard component={TaskListPage} />}
      />
      <Route 
        path="/content"
        element={<AuthenticationGuard component={ContentPage} />}
      />
      <Route path="/authorize" element={<CallbackPage />} />
    </Routes>
  );
};

export default App;