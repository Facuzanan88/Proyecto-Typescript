import { useEffect, useState } from "react";
import UserAtributtes from "../../interfaces/user";
import { getUsers, userByMail } from "../../services/usersService";
import { useUserStore } from "../../store/userStore";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const LandingPage: React.FC<{}> = () => {
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

  const handleClick = async () => {};

  const handleGet = async () => {};

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

export default LandingPage;
