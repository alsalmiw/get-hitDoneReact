import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#login">Login</Nav.Link>
                <Nav.Link href="#create-account">Create Account</Nav.Link>
                <Nav.Link href="#dashboard">Dashboard</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} key="dashboards" />
      </Routes>
    </BrowserRouter>
  );
}
