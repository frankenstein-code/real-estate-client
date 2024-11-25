import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Navbar, Nav, Form, FormControl } from "react-bootstrap";

const Header = () => {
  const location = useLocation(); // Determine the current route

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://via.placeholder.com/50"
            alt="Logo"
            className="me-2"
            style={{ width: 40 }}
          />
          Real Estate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/listings">
              Listings
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
