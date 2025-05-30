import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "./PageLayout";
import styles from "./CallbackPage.module.css";

const CallbackPage: React.FC = () => {
  const { error } = useAuth0();

  if (error) {
    return (
      <div className={styles.errorBox}>
        Oops... {error.message}
      </div>
    );
  }

  return (
    <PageLayout>
      <h1 className={styles.title}>Callback Page</h1>
    </PageLayout>
  );
};

export default CallbackPage;
