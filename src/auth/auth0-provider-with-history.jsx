import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useNavigate();

  const onRedirectCallback = () => {
    history("/dashboard", { replace: true });
  };

  const DOMAIN = "dev-qhaa445v3rb8jumg.us.auth0.com";
  const CLIENT = "67jcfSYC8Qnhg6E6IWbYEmCdfwxJBSKJ";

  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
