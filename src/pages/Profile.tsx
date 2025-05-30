import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from './ProfilePage.module.css';

const Profile: React.FC = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((token) =>
        console.log("Access token:", token)
      );
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (!isAuthenticated) {
    return (
      <Container className="py-4">
        <h1 className={styles.heading}>Profile</h1>
        <p className={styles.message}>You are not authenticated.</p>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container className="py-4">
        <h1 className={styles.heading}>Profile</h1>
        <p className={styles.message}>No user profile available.</p>
      </Container>
    );
  }

  return (
    <Container className={`py-4 ${styles.profileContainer}`}>
      <h1 className={styles.heading}>Profile</h1>
      <Row className="mt-4">
        <Col xs={12} md={4} className="text-center mb-4">
          {user.picture && (
            <Image
              src={user.picture}
              alt={user.name}
              roundedCircle
              fluid
              className={styles.avatar}
            />
          )}
          <h4 className="mt-3">{user.name}</h4>
          <p className="text-muted">{user.email}</p>
        </Col>
        <Col xs={12} md={8}>
          <h5 className={styles.subheading}>User Details</h5>
          <div className={styles.details}>
            {Object.entries(user).map(([key, value], index) => (
              <p key={index}>
                <strong>{key}</strong>: {JSON.stringify(value)}
              </p>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
