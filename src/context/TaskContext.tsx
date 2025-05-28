// src/context/TaskContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Task } from '../models/Task.model';

interface TaskContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  deleteTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadedTasks: Task[] = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (!key) continue;
      try {
        const item = sessionStorage.getItem(key);
        if (!item) continue;
        const task = JSON.parse(item);
        if (task && task.title && task.dueDate) {
          loadedTasks.push(task);
        }
      } catch (e) {
        console.warn(`Skipping invalid task: ${key}`);
      }
    }
    setTasks(loadedTasks);
  }, []);

  const deleteTask = (id: string) => {
    sessionStorage.removeItem(id);
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
