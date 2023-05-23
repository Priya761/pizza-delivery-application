import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalOffer } from "react-icons/md";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <h6
            className="offer-display text-warning"
            style={{ marginTop: "0.4rem" }}
          >
            <MdLocalOffer
              className="text-warning"
              style={{ marginRight: "1rem" }}
            />
            Free Home Delivery on order above 300/- Rupees
            {/* <span className="bg-light">
              Free Home Delivery on order above 300/- Rupees
            </span> */}
          </h6>
          <Nav className="ms-auto">
            <LinkContainer to="/" activeClassName>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName>
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName>
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/policy" activeClassName>
              <Nav.Link>Terms and policy</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
