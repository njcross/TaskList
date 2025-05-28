import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import type { Task } from '../models/Task.model';
import { useAuth0 } from "@auth0/auth0-react";

const defaultTask: Task = {
  id: '',
  title: '',
  description: '',
  status: 'pending',
  dueDate: '',
};

const TaskForm: React.FC = () => {
  const [task, setTask] = useState<Task>(defaultTask);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth0();

  useEffect(() => {
    if (id) {
      const storedTask = sessionStorage.getItem(id);
      if (storedTask) {
        setTask(JSON.parse(storedTask));
      }
    }
  }, [id]);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!task.title.trim()) newErrors.title = 'Title is required';
    if (!task.dueDate) newErrors.dueDate = 'Due date is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSaveToSessionStorage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const finalTask = {
        ...task,
        id: id || Math.random().toString(36).substr(2, 9),
        userId: user?.sub, 
      };

    sessionStorage.setItem(finalTask.id, JSON.stringify(finalTask));
    alert(`Task saved with ID: ${finalTask.id}`);
    navigate('/');
  };

  const clearForm = () => {
    setTask(defaultTask);
    setErrors({});
  };

  return (
    <Container>
      <h2>{id ? 'Edit Task' : 'Create Task'}</h2>
      <Form onSubmit={handleSaveToSessionStorage}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            isInvalid={!!errors.title}
          />
          <Form.Control.Feedback type="invalid">
            {errors.title}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={task.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Select name="status" value={task.status} onChange={handleChange}>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            isInvalid={!!errors.dueDate}
          />
          <Form.Control.Feedback type="invalid">
            {errors.dueDate}
          </Form.Control.Feedback>
        </Form.Group>

        <Row>
          <Col>
            <Button type="submit" className="m-2">
              Save to Session Storage
            </Button>
          </Col>
          <Col>
            <Button type="button" className="m-2 float-end" onClick={clearForm}>
              Clear Form
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default TaskForm;
