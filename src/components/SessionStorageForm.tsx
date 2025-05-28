import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SessionStorageForm: React.FC = () => {
  const [keyInput, setKeyInput] = useState<string>("");
  const [valueInput, setValueInput] = useState<string>("");

  const saveToSessionStorage = () => {
    // Check if key and value are not empty
    if (keyInput && valueInput) {
      // Save to session storage
      sessionStorage.setItem(keyInput, valueInput);

      // Clear input fields
      setKeyInput("");
      setValueInput("");

      // Log success message
      console.log(`Stored: ${keyInput} - ${valueInput}`);
    } else {
      alert("Please enter both key and value.");
    }
  };

  const clearSessionStorage = () => {
    // Clear all data from session storage
    sessionStorage.clear();

    // Log success message
    console.log("Session Storage cleared.");

    // Optionally, you can provide feedback to the user
    alert("Session Storage cleared.");
  };

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Key</Form.Label>
          <Form.Control
            type="text"
            id="keyInput"
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            required
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
          />
        </Form.Group>

        <Row>
          <Col>
            <Button
              className="m-3"
              type="submit"
              onClick={saveToSessionStorage}
            >
              Save to Session Storage
            </Button>
          </Col>
          <Col>
            <Button
              className="m-3 float-right"
              type="button"
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