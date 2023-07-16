import axios from "axios";
import React from "react";
import { getUsers } from "../services/usersService";

const handleClick = async () => {
  let result = await getUsers();
  return result;
};

const Root: React.FC<{}> = () => {
  return (
    <>
      <div>
        <h1>FACUNDO</h1>
        <button onClick={handleClick}>Usuarios</button>
      </div>
    </>
  );
};

export default Root;
