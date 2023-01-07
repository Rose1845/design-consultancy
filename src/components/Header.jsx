import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#/">Design Consultancy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#/about">About</Nav.Link>
            <Nav.Link href="#/services">Services</Nav.Link>
            <Nav.Link href="#/contact">Contact</Nav.Link>
            <Link to='/account' style={{backgroundColor:'orange',border:' solid orange'}} className='btn btn-primary p-2'>Get Started</Link> 
            {/* <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="#/register">
                Register
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header