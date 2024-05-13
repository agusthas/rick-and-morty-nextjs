import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";

export default function Navbar() {
  return (
    <BootstrapNavbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container fluid>
        <BootstrapNavbar.Brand href="#home" className="mb-0 h1">
          Rick and Morty's
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0 ms-lg-4">
            <NavDropdown title="Characters" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">List</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                By Location
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
