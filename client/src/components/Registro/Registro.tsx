import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useRef, useState } from "react";
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
import Swal from "sweetalert2";
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHAType } from "react-google-recaptcha";

const Registro: React.FC<{}> = () => {
  const { isAuthenticated, user } = useAuth0();

  const [captchaValido, setCaptchaValido] = useState(true);
  const [usuarioValido, setUsuarioValido] = useState(false);

  const userByStore = useUserStore((state) => ({
    id: state.id,
    name: state.name,
    lastname: state.lastname,
    age: state.age,
    email: state.email,
    cel: state.cel,
    street: state.street,
    number: state.number,
    apartment: state.apartment,
    comment: state.comment,
  }));

  const [apartment, setApartment] = useState(userByStore?.apartment || false);

  const [usuario, setUsuario] = useState<UserAtributtes>({
    name: "",
    lastname: "",
    age: 0,
    email: "",
    cel: 0,
    street: "",
    number: 0,
    apartment: false,
    comment: "",
  });

  const navigate = useNavigate();

  const UserStore = useUserStore();

  const captcha = useRef<ReCAPTCHAType | null>(null); // Definir el tipo explícitamente

  useEffect(() => {
    if (user) {
      if (user.email) {
        const usuarioPromise: Promise<UserAtributtes> | null =
          UserStore.userByMail(user.email);
        console.log(usuarioPromise);
        if (usuarioPromise instanceof Promise && usuarioPromise === null) {
          const userLogin = {
            name: user.given_name,
            lastname: user.family_name,
            email: user.email,
          };
          /*   createUser(userLogin); */
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
  }, [navigate, user, UserStore]);

  const onChange = () => {
    if (captcha.current?.getValue()) {
      console.log("el usuario no es un robot", captcha.current.getValue());
      setCaptchaValido(true);
    }
  };

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

    if (typeof usuario.age === "string") {
      usuario.age = parseFloat(usuario.age);
    }
    if (typeof usuario.cel === "string") {
      usuario.cel = parseFloat(usuario.cel);
    }
    if (typeof usuario.number === "string") {
      usuario.number = parseFloat(usuario.number);
    }

    usuario.apartment = apartment;

    if (captcha.current?.getValue()) {
      console.log("el usuario no es un robot");
      setUsuarioValido(true);
      setCaptchaValido(true);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          UserStore.createUser(usuario);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } else {
      console.log("primero debes completar el CAPTCHA");
      setUsuarioValido(false);
      setCaptchaValido(false);
    }
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
          />
        </FormControl>

        <FormControl id="lastname" w="50%">
          <FormLabel>Apellido</FormLabel>
          <Input
            type="text"
            name="lastname"
            value={usuario.lastname ? usuario.lastname : userByStore.lastname}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl id="age" w="50%">
          <FormLabel>Edad:</FormLabel>
          <Input
            type="number"
            name="age"
            value={usuario.age ? usuario.age : userByStore.age}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl id="email" w="50%">
          <FormLabel>E-Mail</FormLabel>
          <Input
            type="text"
            name="email"
            value={usuario.email ? usuario.email : userByStore.email}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl id="cel" w="50%">
          <FormLabel>Celular:s</FormLabel>
          <Input
            type="number"
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
          />
        </FormControl>

        <FormControl id="comment" w="50%">
          <FormLabel>Comentario</FormLabel>
          <Input
            type="text"
            name="comment"
            value={usuario.comment ? usuario.comment : userByStore.comment}
            onChange={handleInputChange}
          />
        </FormControl>
        <ReCAPTCHA
          ref={captcha}
          sitekey="6Lf_ZJ0pAAAAAFZUFexbCLg9vd1Zi7o5d80rUQ5-"
          onChange={onChange}
          /* onErrored={() => console.log("Error al cargar reCAPTCHA")} */
        />
        <Grid pb="4">
          <Button type="submit">Guardar</Button>
        </Grid>
      </VStack>
    </form>
  );
};

export default Registro;
