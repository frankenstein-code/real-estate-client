import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import RequestType from "../enums/requestType"; // Import the enum from enums folder

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    requestType: RequestType.BUYING, // Default to 'Buying'
  });

  // Handle form input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Your message has been sent!");
  };

  return (
    <Container>
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Request Type</Form.Label>
          <Form.Control
            as="select"
            name="requestType"
            value={form.requestType}
            onChange={handleChange}
            required
          >
            <option value={RequestType.BUYING}>Buying</option>
            <option value={RequestType.SELLING}>Selling</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactPage;
