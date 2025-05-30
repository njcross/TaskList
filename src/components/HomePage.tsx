import { Col, Container } from "react-bootstrap";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <Container className={styles.homeContainer}>
      <Col className={styles.content}>
        <h1 className={styles.heading}>Hello Auth0 World</h1>
        <LoginButton />
        <LogoutButton />
      </Col>
    </Container>
  );
};

export default HomePage;
