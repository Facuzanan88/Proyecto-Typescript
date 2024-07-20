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

  const [usuario, setUsuario] = useState<UserAtributtes>({
    id: undefined,
    name: undefined,
    lastname: undefined,
    photo: undefined,
    age: undefined,
    email: undefined,
    cel: undefined,
    street: undefined,
    number: undefined,
    apartment: undefined,
    comment: undefined,
  });

  const [isChecked, setIsChecked] = useState(usuario?.apartment);

  const [apartment, setApartment] = useState(false);

  const [id, setId] = useState(usuario.id);

  const navigate = useNavigate();

  const UserStore = useUserStore();

  const captcha = useRef<ReCAPTCHAType | null>(null); // Definir el tipo explícitamente

  useEffect(() => {
    const fetchData = async () => {
      if (user && user.email) {
        const oldUser = await UserStore.userByMail(user.email);
        if (oldUser && oldUser.email) {
          setUsuario({
            ...usuario,
            id: oldUser.id,
            name: oldUser.name,
            lastname: oldUser.lastname,
            photo: oldUser.photo,
            age: oldUser.age,
            email: oldUser.email,
            cel: oldUser.cel,
            street: oldUser.street,
            number: oldUser.number,
            apartment: oldUser.apartment,
            comment: oldUser.comment,
          });
          setIsChecked(oldUser.apartment);
        }
        console.log("piki");
      }
    };

    fetchData();
  }, [user, UserStore.modifyUser]);

  const onChange = () => {
    if (captcha.current?.getValue()) {
      console.log("el usuario no es un robot");
      setCaptchaValido(true);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleInputCheck = (event: any) => {
    setIsChecked(event.target.checked);
    // Aquí puedes realizar cualquier otra acción que necesites con el estado actualizado
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
    usuario.apartment = isChecked; // NO FUNCIONA EL isChecked

    if (captcha.current?.getValue()) {
      console.log("el usuario esta verificado");
      setUsuarioValido(true);
      setCaptchaValido(true);
      Swal.fire({
        title: "Perfil",
        text: "Desea guardar los cambios realizados?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borralo",
      }).then(async (result) => {
        if (result.isConfirmed && user?.email) {
          const newUser = await UserStore.userByMail(user.email);
          if (newUser && newUser.id) {
            await UserStore.modifyUser(usuario);
            console.log("Modificar");
          }
        }
        Swal.fire({
          title: "Perfil Guardado",
          text: "Sus datos han sido guardados correctamente",
          icon: "success",
        });
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
          <FormLabel>Nombre:</FormLabel>
          <Input
            type="text"
            name="name"
            value={usuario?.name}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl id="lastname" w="50%">
          <FormLabel>Apellido:</FormLabel>
          <Input
            type="text"
            name="lastname"
            value={usuario?.lastname}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl id="photo" w="50%">
          <FormLabel>Foto:</FormLabel>
          <Input
            type="text"
            name="photo"
            value={usuario?.photo}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl id="age" w="50%">
          <FormLabel>Edad:</FormLabel>
          <Input
            type="number"
            name="age"
            value={usuario?.age}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl id="email" w="50%">
          <FormLabel>E-Mail</FormLabel>
          <Input
            type="text"
            name="email"
            value={usuario?.email}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl id="cel" w="50%">
          <FormLabel>Celular:s</FormLabel>
          <Input
            type="number"
            name="cel"
            value={usuario?.cel}
            onChange={handleInputChange}
            required
          />
        </FormControl>

        <FormControl id="street" w="50%">
          <FormLabel>Calle</FormLabel>
          <Input
            type="text"
            name="street"
            value={usuario?.street}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl id="number" w="50%">
          <FormLabel>Numero</FormLabel>
          <Input
            type="number"
            name="number"
            value={usuario?.number}
            onChange={handleInputChange}
            required
          />
        </FormControl>

        <FormControl id="apartment" w="50%">
          <FormLabel>Departamento</FormLabel>
          <Checkbox
            name="apartment"
            isChecked={isChecked}
            onChange={handleInputCheck}
          />
        </FormControl>

        <FormControl id="comment" w="50%">
          <FormLabel>Comentarios</FormLabel>
          <Input
            type="text"
            name="comment"
            value={usuario?.comment}
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
          <Button type="submit">Guardar Cambios</Button>
        </Grid>
      </VStack>
    </form>
  );
};

export default Registro;
