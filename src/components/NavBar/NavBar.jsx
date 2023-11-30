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
            <Link to="/">Home</Link>
            <Link to="/bebidas">Bebidas</Link>
            <Link to="/snaks">Snacks</Link>
            <Link to="/golosinas">Golosinas</Link>
          </Nav>
          <Link to="/cart">
            {" "}
            <CardWidget />{" "}
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
