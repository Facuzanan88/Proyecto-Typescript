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
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import logo from "../../Assest/logo.jpg";

export default function QuienesSomos() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Stack
        spacing={0}
        align={"center"}
        maxH={"full"}
        bg={useColorModeValue("white", "black")}
        color={useColorModeValue("black", "white")}
      >
        <Text
          bg={useColorModeValue("white", "black")}
          color={useColorModeValue("black", "white")}
          maxH={"full"}
          fontSize={"xs"}
        >
          LOS PEDIDOS SE ENTREGAN AL OTRO DÍA DE REALIZADA LA COMPRA. NO HAY
          ENTREGAS LOS DOMINGOS.
        </Text>
      </Stack>
      <Container maxW={"full"}>
        <Stack spacing={0} align={"center"} mt={4}>
          <Heading>QUIENES SOMOS?</Heading>
        </Stack>

        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image
            my={6}
            rounded={"md"}
            alt={"product image"}
            src="https://www.on24.com.ar/wp-content/uploads/2021/03/Ruralista.gif"
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "300px", lg: "250px" }}
          />
        </Flex>
        <Flex justifyContent={"space-between"} align={"center"} p={4}>
          {/* Contactos y redes sociales */}
          <Stack
            spacing={4}
            align={"center"}
            maxH={"full"}
            color={useColorModeValue("black", "white")}
          >
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Contactos:
            </Text>
            <Text>Correo electrónico: contacto@pampaynovillo.com</Text>
            <Text>Teléfono: +54 11 1234 5678</Text>
            {/* Agrega aquí más información de contacto si es necesario */}
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Redes Sociales:
            </Text>
            <HStack spacing={4}>
              <Link to={`/facebook`}>Facebook</Link>
              <Link to={"#"}>Instagram</Link>
              {/* Agrega aquí más enlaces a redes sociales si es necesario */}
            </HStack>
          </Stack>

          {/* Formulario de sugerencias */}
          <Stack
            spacing={4}
            align={"center"}
            maxH={"full"}
            color={useColorModeValue("black", "white")}
          >
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Envía tus sugerencias o consultas:
            </Text>
            <form>
              <VStack spacing={4} align="stretch" alignItems="center">
                <FormControl id="name" w="50%">
                  <FormLabel>Nombre</FormLabel>
                  <Input type="text" name="name" />
                </FormControl>

                <FormControl id="lastname" w="50%">
                  <FormLabel>Apellido</FormLabel>
                  <Input type="text" name="lastname" />
                </FormControl>

                <FormControl id="age" w="50%">
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
      </Container>
    </Box>
  );
}
