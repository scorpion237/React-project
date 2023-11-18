import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Corporate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">A propos</Nav.Link>
            <Nav.Link as={Link} to="/fonctionnement">fonctionnement</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/works">Works</Nav.Link>
            <Nav.Link as={Link} to="/teams">Teams</Nav.Link>
            {/* <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link> */}
            <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
            {/* <Nav.Link as={Link} to="/blog">Blog</Nav.Link> */}
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default AppHeader;
