import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useUserStore } from "../../store/userStore";
import { useEffect } from "react";
import UserAtributtes from "../../interfaces/user";
import { useNavigate } from "react-router-dom";

const Profile: React.FC<{}> = () => {
  const { logout, isAuthenticated, user } = useAuth0();

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

  const navigate = useNavigate();

  const { getUser, userByMail } = useUserStore();
  const handleClick = () => {
    getUser("c6a655c5-4222-4fc8-bfed-e32028a01f9a");
  };

  /*  useEffect(() => {
    if (user?.email) {
      const usuario: Promise<UserAtributtes> | undefined = userByMail(
        user.email
      );

      if (usuario.number) {
        history.pushState("/");
      }
    }
  }); */

  useEffect(() => {
    if (user?.email) {
      const usuarioPromise: Promise<UserAtributtes> | undefined = userByMail(
        user.email
      );

      // Verificar si la promesa es 'undefined'
      if (!usuarioPromise) {
        // Manejar el caso en el que 'userByMail' devuelva 'undefined'
        navigate("/");
        console.error("La promesa es 'undefined'.");
        return;
      }

      // Usar 'then' para trabajar con el resultado de la promesa
      usuarioPromise
        .then((usuario: UserAtributtes) => {
          // Aquí 'usuario' es el objeto UserAtributtes resultante
          if (usuario.number === undefined) {
            console.log("redireccion");
            navigate("/");
          }
        })
        .catch((error) => {
          // Manejo de errores si la promesa es rechazada
          console.error("Error al obtener el usuario:", error);
        });
    }
  }, [navigate, user, userByMail]);

  return (
    <Box>
      {isAuthenticated && (
        <Box>
          <Text>{userByStore.name}</Text>
          <Button onClick={() => handleClick()}>user</Button>
        </Box>
      )}
    </Box>
  );
};

export default Profile;
