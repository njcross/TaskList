import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import styles from './Auth0ProviderWithNavigate.module.css';

type Auth0ProviderWithNavigateProps = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate: React.FC<Auth0ProviderWithNavigateProps> = ({ children }) => {
  const navigate = useNavigate();

  const domain = "dev-cg6kohwh8lokt8xp.us.auth0.com";
  const clientId = "7Llr0UXKAdXlo9wheqnfLOPwC3J5dPnp";
  const redirectUri = "http://localhost:5173/authorize";

  const onRedirectCallback = (appState: any) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return <div className={styles.auth0Container}>Missing Auth0 configuration.</div>;
  }

  return (
    <div className={styles.auth0providerwithnavigateContainer}>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: redirectUri,
          scope: "openid profile email",
        }}
        onRedirectCallback={onRedirectCallback}
        cacheLocation="localstorage"
      >
        {children}
      </Auth0Provider>
    </div>
  );
};

export default Auth0ProviderWithNavigate;
