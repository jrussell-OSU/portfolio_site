import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from '@mui/material'

const NavbarMain = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="navbar-title" href="#home">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://www.linkedin.com/in/jrussell86">
              LinkedIn
            </Nav.Link>
            <NavDropdown title="My Work" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://conways-game-of-life-386401.uk.r.appspot.com/">
                Game of Life
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/jrussell-OSU">
                My Github
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;