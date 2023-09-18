import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {store} from './store/store.ts'
import { Provider } from "react-redux";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <Provider store={store}>
        <App />
        </Provider>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>
);
