import { useEffect, useState } from "react";
import UserAtributtes from "../../interfaces/user";
import { getUsers, userByMail } from "../../services/usersService";
import { useUserStore } from "../../store/userStore";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const LandingPage: React.FC<{}> = () => {
  const { logout, isAuthenticated, user } = useAuth0();

  const [usuario, setUsuario] = useState<UserAtributtes | null>();

  const navigate = useNavigate();

  const { userByMail, createUser, modifyUser } = useUserStore();
  /* 
  useEffect(() => {
    if (user) {
      if (user.email) {
        let usuarioPromise: Promise<UserAtributtes> | null = userByMail(
          user.email
        );

        const userLogin = {
          name: user.given_name,
          lastname: user.family_name,
          email: user.email,
        };
        usuarioPromise = createUser(userLogin);

        if (!usuarioPromise) {
          return;
        }
        usuarioPromise
          .then((usuario: UserAtributtes) => {
            if (usuario.number === null) {
              navigate("/registrarse");
            }
          })
          .catch((error) => {
            console.error("Error al obtener el usuario:", error);
          });
      }
    }
  }, [navigate, user, userByMail]); */
  useEffect(() => {
    const fetchData = async () => {
      try {
        let usuario: UserAtributtes | null = await userByMail(user?.mail);
        console.log(usuario, "usuario");
        if (!usuario) {
          const userLogin = {
            name: user?.given_name,
            lastname: user?.family_name,
            email: user?.email,
          };
          usuario = await createUser(userLogin);
        }

        if (usuario?.number !== null) {
          console.log("porque no redirige");
          navigate("registrarse");
        }
      } catch (error) {
        // Handle any errors that occurred during fetching or creating the user
        console.error("Error occurred:", error);
      }
    };

    fetchData();
  }, [user]);

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
    setUsuario(result);
    return result;
  };

  const handleGet = async () => {
    if (usuario) {
      console.log(usuario);
    }
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

export default LandingPage;
