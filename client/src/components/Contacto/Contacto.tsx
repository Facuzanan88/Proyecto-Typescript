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
  Textarea,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import logo from "../../Assest/logo.jpg";
import React, { useState, useRef } from "react";
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHAType } from "react-google-recaptcha";

function ContactSection() {
  return (
    <Stack
      spacing={4}
      maxH={"full"}
      color={useColorModeValue("black", "white")}
      marginLeft={28}
    >
      <Flex justify="center" margin={"auto"}>
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
  const [captchaValido, setCaptchaValido] = useState(true);
  const [usuarioValido, setUsuarioValido] = useState(false);

  const captcha = useRef<ReCAPTCHAType | null>(null); // Definir el tipo explícitamente

  const onChange = () => {
    if (captcha.current?.getValue()) {
      console.log("el usuario no es un robot", captcha.current.getValue());
      setCaptchaValido(true);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (captcha.current?.getValue()) {
      console.log("el usuario no es un robot", captcha.current.getValue());
      setUsuarioValido(true);
      setCaptchaValido(true);
    } else {
      console.log("primero debes completar el CAPTCHA");
      setUsuarioValido(false);
      setCaptchaValido(false);
    }
  };

  return (
    <ChakraProvider theme={theme}>
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

      <Flex justifyContent={"center"} alignItems={"center"}>
        <Image
          rounded={"md"}
          alt={"product image"}
          src="https://www.on24.com.ar/wp-content/uploads/2021/03/Ruralista.gif"
          fit={"cover"}
          align={"center"}
          w={"full"}
          h={{ base: "100%", sm: "200px", lg: "300px" }}
        />
      </Flex>
      <Flex justifyContent={"space-between"} align={"top"} marginTop={4} p={6}>
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
          width="50%"
          marginRight={14}
          marginTop={16}
        >
          <Text fontSize={"lg"} fontWeight={"bold"}>
            Envía tus sugerencias o consultas:
          </Text>
          {!usuarioValido && (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="stretch" alignItems="center">
                <FormControl id="name">
                  <FormLabel>Nombre</FormLabel>
                  <Input type="text" name="name" />
                </FormControl>

                <FormControl id="email">
                  <FormLabel>Correo Electrónico</FormLabel>
                  <Input type="email" name="email" />
                </FormControl>

                <FormControl id="phone">
                  <FormLabel>Teléfono (Opcional)</FormLabel>
                  <Input type="tel" name="phone" />
                </FormControl>

                <FormControl id="message">
                  <FormLabel>Mensaje</FormLabel>
                  <Textarea name="message" />
                </FormControl>

                <Grid>
                  <ReCAPTCHA
                    ref={captcha}
                    sitekey="6Lf_ZJ0pAAAAAFZUFexbCLg9vd1Zi7o5d80rUQ5-"
                    onChange={onChange}
                    /* onErrored={() => console.log("Error al cargar reCAPTCHA")} */
                  />
                  {captchaValido === false && (
                    <Text>Por favor completa el CAPTCHA</Text>
                  )}
                </Grid>
                <Grid pb="4">
                  <Button type="submit">Guardar</Button>
                </Grid>
              </VStack>
            </form>
          )}
          {usuarioValido && (
            <Stack>
              <Text fontSize={"lg"} fontWeight={"bold"}>
                GRACIAS POR SUS COMENTARIOS
              </Text>
            </Stack>
          )}
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
