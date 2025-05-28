// src/pages/ProfilePage.tsx
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

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
        <h1>Profile</h1>
        <p>You are not authenticated.</p>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container className="py-4">
        <h1>Profile</h1>
        <p>No user profile available.</p>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h1>Profile</h1>
      <Row className="mt-4">
        <Col xs={12} md={4} className="text-center mb-4">
          {user.picture && (
            <Image
              src={user.picture}
              alt={user.name}
              roundedCircle
              fluid
              style={{ maxWidth: "150px" }}
            />
          )}
          <h4 className="mt-3">{user.name}</h4>
          <p className="text-muted">{user.email}</p>
        </Col>
        <Col xs={12} md={8}>
          <h5>User Details</h5>
          {Object.entries(user).map(([key, value], index) => (
            <p key={index}>
              <strong>{key}</strong>: {JSON.stringify(value)}
            </p>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
