"use client";

import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  HStack,
  Container,
  useColorModeValue,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  VStack,
  ChakraProvider,
  theme,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import logo from "../../Assest/logo.jpg";

function ContactSection() {
  return (
    <Stack
      spacing={4}
      maxH={"full"}
      color={useColorModeValue("black", "white")}
    >
      <Flex justify="space-between" mx={20}>
        <Stack>
          <Text fontSize={"lg"} fontWeight={"bold"}>
            Contactos:
          </Text>
          <Text>Correo electrónico: contacto@pampaynovillo.com</Text>
          <Text>Teléfono: +54 11 1234 5678</Text>
          {/* Agrega aquí más información de contacto si es necesario */}
        </Stack>
        <Stack>
          <Text fontSize={"lg"} fontWeight={"bold"}>
            Redes Sociales:
          </Text>
          <HStack spacing={4}>
            <Link to={`/facebook`}>Facebook</Link>
            <Link to={"#"}>Instagram</Link>
            {/* Agrega aquí más enlaces a redes sociales si es necesario */}
          </HStack>
        </Stack>
      </Flex>
    </Stack>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex justifyContent={"space-between"} align={"center"} p={4}>
        {/* Contactos y redes sociales */}
        <Stack
          spacing={4}
          align={"center"}
          maxH={"full"}
          color={useColorModeValue("black", "white")}
          width="40%"
        >
          <ContactSection />
        </Stack>

        {/* Formulario de sugerencias */}
        <Stack
          spacing={4}
          align={"center"}
          maxH={"full"}
          color={useColorModeValue("black", "white")}
          width="60%"
        >
          <Text fontSize={"lg"} fontWeight={"bold"}>
            Envía tus sugerencias o consultas:
          </Text>
          <form>
            <VStack spacing={4} align="stretch" alignItems="center">
              <FormControl id="name">
                <FormLabel>Nombre</FormLabel>
                <Input type="text" name="name" />
              </FormControl>

              <FormControl id="lastname">
                <FormLabel>Apellido</FormLabel>
                <Input type="text" name="lastname" />
              </FormControl>

              <FormControl id="age">
                <FormLabel>Edad:</FormLabel>
                <Input type="number" name="age" />
              </FormControl>

              <Grid pb="4">
                <Button type="submit">Guardar</Button>
              </Grid>
            </VStack>
          </form>
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
