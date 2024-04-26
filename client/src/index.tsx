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

const handleRedirectCallback = (appState: any) => {
  // Si hay un estado de la aplicación (por ejemplo, una ruta a la que se debe redirigir después de la autorización),
  // puedes redirigir a esa ruta utilizando el objeto navigate de React Router DOM
  if (appState && appState.returnTo) {
    window.location.replace(appState.returnTo);
  } else {
    // Si no hay un estado de la aplicación, simplemente redirige a una ruta específica
    window.location.replace("/registrarse"); // Cambia "/dashboard" por la ruta a la que quieres redirigir
  }
};

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={clientID}
        authorizationParams={{
          redirect_uri: `${window.location.origin}`,
        }}
        onRedirectCallback={handleRedirectCallback} // Maneja la redirección después de la autorización
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
