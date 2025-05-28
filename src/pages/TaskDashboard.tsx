import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import type { Task } from "../models/Task.model";
import { Link } from "react-router-dom";

const TaskDashboard: React.FC = () => {
  const { user, isLoading } = useAuth0();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (user && !isLoading) {
      const allTasks: Task[] = [];

      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (!key) continue;

        try {
          const raw = sessionStorage.getItem(key);
          if (!raw) continue;
          const task: Task = JSON.parse(raw);
          // Optional: filter tasks by user.sub if you store that
          allTasks.push(task);
        } catch (e) {
          console.warn(`Invalid task at ${key}`);
        }
      }

      setTasks(allTasks);
    }
  }, [user, isLoading]);

  return (
    <Container>
      <h1>Task Dashboard</h1>
      <Link to="/create">Create New Task</Link>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id}>
            <h5>{task.title}</h5>
            <p>{task.description}</p>
          </div>
        ))
      )}
    </Container>
  );
};

export default TaskDashboard;
