import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useUserStore } from "../../store/userStore";
import { useNavigate } from "react-router-dom";
import UserAtributtes from "../../interfaces/user";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Grid,
  Button,
} from "@chakra-ui/react";

const Registro: React.FC<{}> = () => {
  const { logout, isAuthenticated, user } = useAuth0();

  const [usuario, setUsuario] = useState<UserAtributtes>({
    id: "",
    name: "",
    lastname: "",
    email: "",
    cel: 0,
    street: "",
    number: 0,
    apartment: false,
    comment: "",
  });

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

  useEffect(() => {
    if (user) {
      if (user.email) {
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
            console.log("existe un tal number 1000");
          })
          .catch((error) => {
            // Manejo de errores si la promesa es rechazada
            console.error("Error al obtener el usuario:", error);
          });
      }
    }
  }, [navigate, user, userByMail]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} align="stretch" alignItems="center">
        <FormControl id="name" w="50%">
          <FormLabel>Nombre</FormLabel>
          <Input
            type="text"
            name="name"
            value={user?.name}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl id="lastname" w="50%">
          <FormLabel>Apellido</FormLabel>
          <Input
            type="text"
            name="lastname"
            value={user?.lastname}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl id="email" w="50%">
          <FormLabel>E-Mail</FormLabel>
          <Input
            type="text"
            name="email"
            value={user?.email}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl id="phone" w="50%">
          <FormLabel>Telefono</FormLabel>
          <Input
            type="tel"
            name="phone"
            value={user?.phone}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl id="photo" w="50%">
          <FormLabel>Foto</FormLabel>
          <Input type="text" name="photo" onChange={handleInputChange} />
        </FormControl>
        <Grid pb="4">
          <Button type="submit">Guardar</Button>
        </Grid>
      </VStack>
    </form>
  );
};

export default Registro;
