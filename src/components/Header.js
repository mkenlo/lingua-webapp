import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand href="/home">Lingua</Navbar.Brand>
        <Nav defaultActiveKey="#home" as="ul">
          <Nav.Item as="li">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
