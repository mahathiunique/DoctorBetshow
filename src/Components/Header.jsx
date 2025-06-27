//Header.jsx
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Header(){
  return (
    <Navbar bg="none" variant="dark">
      <Container className='d-flex justify-content-center'>
        <Navbar.Brand className='fs-1 text-dark'>Appointments </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header;
