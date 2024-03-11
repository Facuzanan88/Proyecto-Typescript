/* import React, { useState } from "react";
import { getUsers, userByMail } from "../services/usersService";
import UserAtributtes from "../interfaces/user";
import Profile from "./LoginButtons/Profile";
import { useUserStore } from "../store/userStore";

const Root: React.FC<{}> = () => {
  const [user, setUser] = useState<[UserAtributtes] | null>();

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

  const handleUser = async () => {
    const mail = "dsfsewrewqweqweqweqdf@gmail.com";
    const userMail = await userByMail(mail);
    console.log(userMail.name, "mail");
    console.log(userByStore, "store");
  };

  const handleClick = async () => {
    let result = await getUsers();
    if (result && result.length !== 0) {
      setUser(result);
      return result;
    }
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>{user ? user[0].name : "No existe usuario"}</h1>
        <button onClick={handleClick}>Usuarios</button>
        <button onClick={handleUser}>Usuario por Mail</button>

        <Profile />
      </div>
    </>
  );
};

export default Root; */

import React, { useState } from "react";
import UserAtributtes from "../interfaces/user";
import Profile from "./LoginButtons/Profile";
import { useUserStore } from "../store/userStore";

const Root: React.FC<{}> = () => {
  const [user, setUser] = useState<UserAtributtes | null>(null);
  const userStore = useUserStore(); // Usando el hook directamente

  const handleUser = async () => {
    const mail = "dsfsewrewqweqweqweqdf@gmail.com";
    const userMail = await userStore.userByMail(mail); // Usando userByMail desde el store
    console.log(userMail?.name, "mail");
  };

  const handleClick = async () => {
    try {
      const result = await userStore.getUser(
        "55f123a5-f323-47a8-9d8b-688b0eae8d89"
      ); // Usando getUsers desde el store
      if (result && result.length !== 0) {
        setUser(result[0]);
      }
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>{user ? user.name : "No existe usuario"}</h1>
        <button onClick={handleClick}>Usuarios</button>
        <button onClick={handleUser}>Usuario por Mail</button>

        <Profile />
      </div>
    </>
  );
};

export default Root;
