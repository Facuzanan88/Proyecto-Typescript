import React, { useState } from "react";
import { getUsers } from "../services/usersService";
import UserAtributtes from "../interfaces/user";
import Profile from "./LoginButtons/Profile";

const Root: React.FC<{}> = () => {
  const [user, setUser] = useState<UserAtributtes | null>();

  const handleClick = async () => {
    let result = await getUsers();
    setUser(result);
    return result;
  };

  const handleGet = async () => {
    if (user) {
      console.log(user);
    }
  };

  return (
    <>
      <div>
        <h1>FACUNDO</h1>
        <button onClick={handleClick}>Usuarios</button>
        <button onClick={handleGet}>Mostrar</button>
        <Profile />
      </div>
    </>
  );
};

export default Root;
