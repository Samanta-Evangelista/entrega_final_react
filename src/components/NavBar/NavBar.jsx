import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CardWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">Kiosco Virtual</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/bebidas">Bebidas</Nav.Link>
            <Nav.Link to="/snaks">Snacks</Nav.Link>
            <Nav.Link to="/golosinas">Golosinas</Nav.Link>
          </Nav>
          <Nav.Link to="/cart">
            {" "}
            <CardWidget />{" "}
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
