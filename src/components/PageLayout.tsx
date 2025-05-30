import { Col, Container } from "react-bootstrap";
import NavBar from "./NavBar";
import NavBarButtons from "./NavBarButtons";
import styles from "./PageLayout.module.css";

type PageLayoutProps = {
  children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className={styles.pageLayoutWrapper}>
      <NavBar />
      <Container className={styles.pageContent}>
        <Col>
          <h1 className={styles.title}>My App</h1>
          {children}
          <footer className={styles.footer}>
            <NavBarButtons />
          </footer>
        </Col>
      </Container>
    </div>
  );
};

export default PageLayout;
