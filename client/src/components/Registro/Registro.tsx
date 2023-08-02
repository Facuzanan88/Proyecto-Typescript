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
  Checkbox,
} from "@chakra-ui/react";
import { createUserLogin } from "../../services/usersService";

const Registro: React.FC<{}> = () => {
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

  const [apartment, setApartment] = useState(userByStore?.apartment || false);

  const [usuario, setUsuario] = useState<UserAtributtes>({
    id: userByStore.id,
    name: userByStore?.name,
    lastname: userByStore.lastname,
    email: userByStore.email,
    cel: userByStore.cel,
    street: userByStore.street,
    number: userByStore.number,
    apartment: userByStore.apartment,
    comment: userByStore.comment,
  });

  const navigate = useNavigate();

  const { userByMail, createUser } = useUserStore();

  useEffect(() => {
    if (user) {
      if (user.email) {
        const usuarioPromise: Promise<UserAtributtes> | undefined = userByMail(
          user.email
        );
        if (usuarioPromise === undefined) {
          const userLogin = {
            name: user.given_name,
            lastname: user.family_name,
            email: user.email,
          };
          createUser(userLogin);
        }
        if (!usuarioPromise) {
          return;
        }
        usuarioPromise
          .then((usuario: UserAtributtes) => {
            if (usuario.number !== null) {
              navigate("/");
            }
          })
          .catch((error) => {
            console.error("Error al obtener el usuario:", error);
          });
      }
    }
  }, [navigate, user, userByMail]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleInputCheck = (event: { target: { name: any; checked: any } }) => {
    const { name, checked } = event.target;
    if (name === "apartment") {
      setApartment(checked);
    }
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
            value={usuario.name ? usuario.name : userByStore.name}
            onChange={handleInputChange}
            required
          />
        </FormControl>

        <FormControl id="lastname" w="50%">
          <FormLabel>Apellido</FormLabel>
          <Input
            type="text"
            name="lastname"
            value={usuario.lastname ? usuario.lastname : userByStore.lastname}
            onChange={handleInputChange}
            required
          />
        </FormControl>

        <FormControl id="email" w="50%">
          <FormLabel>E-Mail</FormLabel>
          <Input
            type="text"
            name="email"
            value={usuario.email ? usuario.email : userByStore.email}
            onChange={handleInputChange}
            required
          />
        </FormControl>

        <FormControl id="cel" w="50%">
          <FormLabel>Celular</FormLabel>
          <Input
            type="tel"
            name="cel"
            value={usuario.cel ? usuario.cel : userByStore.cel}
            onChange={handleInputChange}
            required
          />
        </FormControl>

        <FormControl id="street" w="50%">
          <FormLabel>Calle</FormLabel>
          <Input
            type="text"
            name="street"
            value={usuario.street ? usuario.street : userByStore.street}
            onChange={handleInputChange}
            required
          />
        </FormControl>

        <FormControl id="number" w="50%">
          <FormLabel>Numero</FormLabel>
          <Input
            type="number"
            name="number"
            value={usuario.number ? usuario.number : userByStore.number}
            onChange={handleInputChange}
            required
          />
        </FormControl>

        <FormControl id="apartment" w="50%">
          <FormLabel>Departamento</FormLabel>
          <Checkbox
            name="apartment"
            isChecked={apartment}
            onChange={handleInputCheck}
            required
          />
        </FormControl>

        <FormControl id="comment" w="50%">
          <FormLabel>Comentario</FormLabel>
          <Input
            type="text"
            name="comment"
            value={usuario.comment ? usuario.comment : userByStore.comment}
            onChange={handleInputChange}
            required
          />
        </FormControl>

        <Grid pb="4">
          <Button type="submit">Guardar</Button>
        </Grid>
      </VStack>
    </form>
  );
};

export default Registro;
