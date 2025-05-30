import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styles from './SessionStorageForm.module.css';

const SessionStorageForm: React.FC = () => {
  const [keyInput, setKeyInput] = useState<string>("");
  const [valueInput, setValueInput] = useState<string>("");

  const saveToSessionStorage = () => {
    if (keyInput && valueInput) {
      sessionStorage.setItem(keyInput, valueInput);
      setKeyInput("");
      setValueInput("");
      console.log(`Stored: ${keyInput} - ${valueInput}`);
    } else {
      alert("Please enter both key and value.");
    }
  };

  const clearSessionStorage = () => {
    sessionStorage.clear();
    console.log("Session Storage cleared.");
    alert("Session Storage cleared.");
  };

  return (
    <Container className={styles.formContainer}>
      <h2 className={styles.title}>Session Storage Form</h2>
      <Form>
        <Form.Group>
          <Form.Label>Key</Form.Label>
          <Form.Control
            type="text"
            id="keyInput"
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            required
            className={styles.input}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Value</Form.Label>
          <Form.Control
            type="text"
            id="valueInput"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            required
            className={styles.input}
          />
        </Form.Group>

        <Row>
          <Col>
            <Button
              className={`${styles.button} m-3`}
              type="submit"
              onClick={saveToSessionStorage}
            >
              Save to Session Storage
            </Button>
          </Col>
          <Col>
            <Button
              className={`${styles.button} m-3 float-right`}
              type="button"
              variant="danger"
              onClick={clearSessionStorage}
            >
              Clear Session Storage
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SessionStorageForm;
