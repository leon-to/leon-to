import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Navbar, Nav, Alert, Badge} from 'react-bootstrap';
import {Home, ProjectList} from './pages';
import {PROJECT_LIST} from './const';

function App() {
  return (
    <div className="App">
      <Navbar fixed='top' bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Badge variant='danger'>L</Badge>
          <Badge variant='dark'>T</Badge>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home" >About Me</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>

      <Home />
      <ProjectList project_list={PROJECT_LIST} />
    </div>
  );
}

export default App;
