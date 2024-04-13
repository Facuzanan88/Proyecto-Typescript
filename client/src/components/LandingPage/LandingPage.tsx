import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Carousel from "../Corousel/Carousel";
import Features from "../../components/Features/Features";
import PrincipalCategory from "../PrincipalCategory/PrincipalCategory";
import { useUserStore } from "../../store/userStore";

const LandingPage: React.FC<{}> = () => {
  const { user, isAuthenticated } = useAuth0();

  const userStore = useUserStore(); // Usando el hook directamente

  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated && user && user.email) {
        const existingUser = await userStore.userByMail(user.email);
        if (!existingUser) {
          const newUser = {
            name: user.given_name,
            lastname: user.family_name,
            photo: user.picture,
            age: 0,
            email: user.email,
            cel: 0,
            street: "",
            number: 0,
          };
          await userStore.createUser(newUser);
        }
      }
    };

    fetchData(); // Llama a la función fetchData para iniciar la operación asincrónica
  }, [isAuthenticated, user, userStore]); // Dependencias del useEffect

  const handleClick = async () => {};

  const handleGet = async () => {};

  return (
    <>
      <Stack justifyContent={"center"} alignItems={"center"} my={10}>
        <Text>{user?.given_name}</Text>
      </Stack>
      <div>
        <Carousel />
        <Features />
        <PrincipalCategory />
        <button onClick={handleClick}>Usuarios</button>
        <button onClick={handleGet}>Mostrar</button>
      </div>
    </>
  );
};

export default LandingPage;
