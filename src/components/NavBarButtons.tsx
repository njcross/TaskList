import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import styles from './NavBarButtons.module.css';

const NavBarButtons: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Container className={styles.navButtonsContainer}>
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && <LogoutButton />}
    </Container>
  );
};

export default NavBarButtons;
