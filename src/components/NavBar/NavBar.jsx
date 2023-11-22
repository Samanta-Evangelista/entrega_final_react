import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CardWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Kiosco Virtual</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Bebidas</Nav.Link>
            <Nav.Link href="#pricing">Snacks</Nav.Link>
            <Nav.Link href="#pricing">Golosinas</Nav.Link>
            <Nav.Link href="#pricing">
              <CardWidget />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
