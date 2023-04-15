import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { useContext } from "react";
import { AuthContext } from "../../../../Contex/AuthProvider/AuthProvider";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  const { user, LogOut } = useContext(AuthContext);
  console.log(user);
  console.log(user);

  const handleLogOut = () => {
    LogOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {user?.photoURL ? (
              <Link to="/profile">
                <Image
                  roundedCircle
                  src={user?.photoURL}
                  style={{ height: "40px" }}
                ></Image>
              </Link>
            ) : (
              <FaUserCircle></FaUserCircle>
            )}
            {user?.uid ? (
              <Button className="ms-2" onClick={handleLogOut} variant="primary">
                LogOut
              </Button>
            ) : (
              <div>
                <Link to="/login">
                  <Button className="me-2" variant="primary">
                    LogIn
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary">Register</Button>
                </Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
