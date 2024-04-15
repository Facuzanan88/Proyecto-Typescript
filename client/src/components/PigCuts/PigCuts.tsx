import React, { useEffect, useState } from "react";
import UserAtributtes from "../../interfaces/user";
import Profile from "../LoginButtons/Profile";
import { useUserStore } from "../../store/userStore";
import { usePigStore } from "../../store/pigStore";
import Cards from "../Cards/Cards";

const PigCuts: React.FC<{}> = () => {
  const [user, setUser] = useState<UserAtributtes | null>(null);
  const pigStore = usePigStore();
  const userStore = useUserStore(); // Usando el hook directamente

  const cards = pigStore.pigCuts;

  useEffect(() => {
    pigStore.getPigs();
  }, [pigStore.getPigs, pigStore]);

  const handleUser = async () => {
    const mail = "dsfsewrewqweqweqweqdf@gmail.com";
    const userMail = await userStore.userByMail(mail); // Usando userByMail desde el store
    console.log(userMail?.name, "mail");
  };

  const handleClick = async () => {
    try {
      const result = await userStore.getUsers(); // Usando getUsers desde el store
      if (result && result.length !== 0) {
        setUser(result[0]);
      }
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  const handlePig = async () => {
    try {
      const result = await pigStore.getPigs(); // Usando getUsers desde el store
      if (result && result.length !== 0) {
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

        <button onClick={handlePig}>cortes de Vaca</button>

        <Profile />
      </div>
      <Cards cards={cards} />
    </>
  );
};

export default PigCuts;
