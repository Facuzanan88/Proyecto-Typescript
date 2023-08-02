import React, { useState } from "react";
import { getUsers } from "../services/usersService";
import UserAtributtes from "../interfaces/user";
import Profile from "./LoginButtons/Profile";
import { useUserStore } from "../store/userStore";

const Root: React.FC<{}> = () => {
  const [user, setUser] = useState<UserAtributtes | null>();

  const userByStore = useUserStore((state) => ({
    id: state.id,
    name: state.name,
    lastname: state.lastname,
    email: state.email,
    cel: state.cel,
    street: state.street,
    number: state.number,
    apartment: state.apartment,
    comment: state.comment,
  }));

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
