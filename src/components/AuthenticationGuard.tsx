import { withAuthenticationRequired } from "@auth0/auth0-react";
import styles from "./AuthenticationGuard.module.css";

type AuthenticationGuardProps = {
  component: React.ComponentType<any>;
};

const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className={styles.authguardMessage}>
        Redirecting you to the login page...
      </div>
    ),
  });

  return <Component />;
};

export default AuthenticationGuard;
