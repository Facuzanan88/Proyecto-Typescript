import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";

const Registro: React.FC<{}> = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
  });

  return (
    <>
      <div>
        <h1>ERROR DE URL</h1>
      </div>
    </>
  );
};

export default Registro;
