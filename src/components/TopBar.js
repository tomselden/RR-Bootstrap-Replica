import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import logo from "../images/instacart-logo.svg";

export default function TopBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand
          style={{ margin: "5px 0 0 20px", float: "right", right: "10px" }}
          href="#home"
        >
          <img src={logo} alt="instacart logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              display: "",
              padding: "24px 40px 20px 40px",
            }}
          >
            <Nav.Link
              href="#LogIn"
              style={{ fontSize: "20px", fontWeight: "bolder", float: "left" }}
            >
              Log In
            </Nav.Link>
            <Button
              variant="success"
              style={{ fontSize: "20px", fontWeight: "bolder" }}
            >
              Sign Up
            </Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
