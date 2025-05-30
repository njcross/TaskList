import { useAuth0 } from "@auth0/auth0-react";
import styles from './LoginButton.module.css';

const LoginButton: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <button className={styles.loginButton} onClick={handleLogin}>
        Log In
      </button>
    );
  }

  return null;
};

export default LoginButton;
