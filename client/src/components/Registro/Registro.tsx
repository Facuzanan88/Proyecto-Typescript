import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useUserStore } from "../../store/userStore";

const Registro: React.FC<{}> = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  const { createUser } = useUserStore();

  return (
    <>
      <div>
        <h1>ERROR DE URL</h1>
      </div>
    </>
  );
};

export default Registro;
