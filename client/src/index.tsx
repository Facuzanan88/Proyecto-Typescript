import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const domain: string | undefined = process.env.REACT_APP_DOMAIN || "ERRORAUTH0";
const clientID = process.env.REACT_APP_CLIENT_ID || "ERRORAUTH0";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={clientID}
        authorizationParams={{
          redirect_uri: `${window.location.origin}/registrarse`,
        }}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
