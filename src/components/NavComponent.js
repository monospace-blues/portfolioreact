import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavComponent() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand >Christian Gonzalez</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      </Nav>
      </Navbar>
    </div>

  )
}

export default NavComponent; 