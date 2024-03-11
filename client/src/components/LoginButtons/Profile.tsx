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

  const { getUsers, userByMail } = useUserStore();

  useEffect(() => {
    if (user) {
      if (user.email) {
        const usuarioPromise: Promise<UserAtributtes> | null = userByMail(
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
            console.log("existe un tal number 1000");
          })
          .catch((error) => {
            // Manejo de errores si la promesa es rechazada
            console.error("Error al obtener el usuario:", error);
          });
      }
    }
  }, [navigate, user, userByMail]);

  return (
    <Box>
      {isAuthenticated && (
        <Box>
          <Text>Profile</Text>
          <Button>user</Button>
        </Box>
      )}
    </Box>
  );
};

export default Profile;
