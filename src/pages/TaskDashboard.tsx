import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import Button from "../components/Button";
import type { Task } from "../models/Task.model";
import { Link } from "react-router-dom";
import styles from './TaskDashboard.module.css';

const TaskDashboard: React.FC = () => {
  const { user, isLoading } = useAuth0();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (user && !isLoading) {
      const userTasks: Task[] = [];

      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (!key) continue;

        try {
          const raw = sessionStorage.getItem(key);
          if (!raw) continue;
          const task: Task = JSON.parse(raw);

          if (task.userId === user.sub) {
            userTasks.push(task);
          }
        } catch (e) {
          console.warn(`Invalid task at ${key}`);
        }
      }

      setTasks(userTasks);
    }
  }, [user, isLoading]);

  const handleDelete = (id: string) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    sessionStorage.removeItem(id);
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <Container className={styles.dashboardContainer}>
      <h1 className={styles.heading}>Task Dashboard</h1>
      <Link to="/create" className={styles.createLink}>+ Create New Task</Link>

      {tasks.length === 0 ? (
        <p className={styles.emptyMessage}>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <Card key={task.id} className={styles.taskCard}>
            <Card.Body>
              <Card.Title className={styles.title}>{task.title}</Card.Title>
              <Card.Text>{task.description}</Card.Text>
              <Card.Text><strong>Status:</strong> {task.status}</Card.Text>
              <Card.Text><strong>Due:</strong> {task.dueDate}</Card.Text>

              <div className={styles.buttonGroup}>
                <Button variant="info" as={Link} to={`/task/${task.id}`} className="me-2">
                  Details
                </Button>
                <Button variant="warning" as={Link} to={`/task/edit/${task.id}`} className="me-2">
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(task.id)}>
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
};

export default TaskDashboard;
