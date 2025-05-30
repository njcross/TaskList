import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Navbar expand="lg" className={`mb-4 shadow-sm ${styles.navbar}`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.brand}>
          TaskList App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className={styles.navLink}>Home</Nav.Link>
            {isAuthenticated && (
              <>
                <Nav.Link as={Link} to="/profile" className={styles.navLink}>Profile</Nav.Link>
                <Nav.Link as={Link} to="/tasks" className={styles.navLink}>Tasks</Nav.Link>
                <Nav.Link as={Link} to="/create" className={styles.navLink}>Create</Nav.Link>
              </>
            )}
          </Nav>
          <Nav className="ms-auto">
            {!isAuthenticated ? (
              <Button className={styles.loginBtn} onClick={() => loginWithRedirect()}>
                Login
              </Button>
            ) : (
              <Button
                className={styles.logoutBtn}
                onClick={() =>
                  logout({ logoutParams: { returnTo: "http://localhost:5173" } })
                }
              >
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
