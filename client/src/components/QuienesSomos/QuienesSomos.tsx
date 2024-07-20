"use client";

import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
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
          LAS ENTREGAS SON SIN COSTO A PARTIR DE $30000. LOS PEDIDOS SE ENTREGAN
          AL OTRO DÍA DE REALIZADA LA COMPRA. NO HAY ENTREGAS LOS DOMINGOS.
        </Text>
      </Stack>
      <Container maxW={"full"}>
        <Stack spacing={0} align={"center"} mt={4}>
          <Heading>QUIENES SOMOS?</Heading>
        </Stack>

        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image
            m={6}
            rounded={"md"}
            alt={"product image"}
            src="https://www.on24.com.ar/wp-content/uploads/2021/03/Ruralista.gif"
            fit={"cover"}
            align={"center"}
            w={"50%"}
            h={{ base: "100%", sm: "300px", lg: "450px" }}
          />
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"} pb={10}>
          <Text maxW={"50%"} textAlign="center">
            Pampa y Novillo es una empresa familiar con más de 12 años de
            trayectoria brindando la mejor calidad y variedad en carnes. El
            compromiso, dedicación, evolución y adaptación al nuevo mercado nos
            permitió crecer exponencialmente dentro del mundo cárnico,
            instalando una planta elaboradora modelo y llegando a tener 11
            puntos de venta de forma física y una tienda on-line, pudiendo
            responder de manera inmediata a las necesidades de nuestros
            clientes. Con la distribución mayorista cubrimos no solo la ciudad
            de Mar del Plata sino también gran parte de la Costa Atlántica.
            Seguir creciendo y que nuestros productos sean un delicioso banquete
            en cada mesa, es nuestro mayor anhelo.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
