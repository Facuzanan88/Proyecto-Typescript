import React, { useState } from "react";
import UserAtributtes from "../interfaces/user";
import Profile from "./LoginButtons/Profile";
import { useUserStore } from "../store/userStore";
import { useCowStore } from "../store/cowStore";
import Cards from "../components/Cards/Cards";

const Root: React.FC<{}> = () => {
  const [user, setUser] = useState<UserAtributtes | null>(null);
  const userStore = useUserStore(); // Usando el hook directamente
  const cowStore = useCowStore(); // usando el hook directamente

  const handleUser = async () => {
    const mail = "dsfsewrewqweqweqweqdf@gmail.com";
    const userMail = await userStore.userByMail(mail); // Usando userByMail desde el store
    console.log(userMail?.name, "mail");
  };

  const handleClick = async () => {
    try {
      const result = await userStore.getUsers(); // Usando getUsers desde el store
      if (result && result.length !== 0) {
        console.log(result, "estado");
        setUser(result[0]);
      }
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  const handleCow = async () => {
    try {
      const result = await cowStore.getCows(); // Usando getUsers desde el store
      if (result && result.length !== 0) {
        console.log(result, "estado");
        return result;
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

        <button onClick={handleCow}>cortes de Vaca</button>

        <Profile />
      </div>
      <Cards />
    </>
  );
};

export default Root;
