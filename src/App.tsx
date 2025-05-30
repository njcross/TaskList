//App.tsx
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CallbackPage from "./components/CallbackPage";
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationGuard from "./components/AuthenticationGuard";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import TaskDashboard from "./pages/TaskDashboard";
import TaskDetails from "./pages/TaskDetails";
import TaskForm from "./pages/TaskForm";
import NavBar from "./components/NavBar";
import Profile from "./pages/Profile";

const App: React.FC = () => {

  const {isLoading} = useAuth0();
  
  if(isLoading) return (<div>Loading...</div>)

  return (
    <TaskProvider>
    <AuthProvider>
    <NavBar />
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={Profile} />}
      />
      <Route 
        path="/tasks"
        element={<AuthenticationGuard component={TaskDashboard} />}
      />
      <Route
          path="/"
          element={<AuthenticationGuard component={TaskDashboard} />}
        />
      <Route
          path="/task/:id"
          element={<AuthenticationGuard component={TaskDetails} />}
        />
      <Route
        path="/create"
        element={<AuthenticationGuard component={TaskForm} />}
      />
      <Route
        path="/task/edit/:id"
        element={<AuthenticationGuard component={TaskForm} />}
      />
      <Route path="/authorize" element={<CallbackPage />} />
    </Routes>
    </AuthProvider>
    </TaskProvider>
  );
};

export default App;