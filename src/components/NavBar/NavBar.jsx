import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CardWidget from "../CartWidget/CartWidget.jsx";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Kiosco Virtual
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/categoria/bebidas" className="nav-link">
              Bebidas
            </Link>
            <Link to="/categoria/snaks" className="nav-link">
              Snacks
            </Link>
            <Link to="/categoria/golosinas" className="nav-link">
              Golosinas
            </Link>
          </Nav>
          <Link to="carrito" className="nav-link">
            <CardWidget />
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
