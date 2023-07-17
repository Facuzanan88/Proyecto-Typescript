import React, { useState } from "react";
import { getUsers } from "../services/usersService";
import UserAtributtes from "../interfaces/user";

const Root: React.FC<{}> = () => {
  const [user, setUser] = useState<UserAtributtes | null>();

  const handleClick = async () => {
    let result = await getUsers();
    setUser(result);
    return result;
  };

  const handleGet = async () => {
    console.log(user);
  };

  return (
    <>
      <div>
        <h1>FACUNDO</h1>
        <button onClick={handleClick}>Usuarios</button>
        <button onClick={handleGet}>Mostrar</button>
      </div>
    </>
  );
};

export default Root;
