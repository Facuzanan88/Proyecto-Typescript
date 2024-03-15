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
            m={6}
            rounded={"md"}
            alt={"product image"}
            src="https://www.on24.com.ar/wp-content/uploads/2021/03/Ruralista.gif"
            fit={"cover"}
            align={"center"}
            w={"60%"}
            h={{ base: "100%", sm: "300px", lg: "450px" }}
          />
        </Flex>
      </Container>
    </Box>
  );
}
