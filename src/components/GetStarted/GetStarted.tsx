import { useState } from "react";
import "./GetStarted.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function GetStarted() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
    }

    setValidated(true);
  };

  return (
    <>
      <div className="get-started">
        <div className="header">
          <div>
            <h1>Personal Finance App</h1>
          </div>
          <div>
            Welcome! Sign up below to begin managing your personal finances.
          </div>
        </div>
        <div className="form">
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            action={"/personal-finance-app/loading"}
          >
            <Form.Group
              as={Col}
              md="12"
              controlId="validationName"
              className="mb-3"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="John Smith"
                onChange={(e) =>
                  localStorage.setItem(
                    "personal-finance-app-user-name",
                    e.target.value
                  )
                }
              />
              <Form.Control.Feedback type="invalid">
                Name is required.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="12"
              controlId="validationEmail"
              className="mb-3"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="I allow Personal Finance App to scan my email for finance
          accounts."
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit" className="btn btn-success">
              Get Started
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default GetStarted;
