"use client";

import {
  Box,
  Image,
  Link,
  Input,
  IconButton,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

import logo from "../../Assest/logo.jpg";

import { BiMailSend } from "react-icons/bi";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"8xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Box display="flex" alignItems="center">
          <Link href="/">
            <Image
              src={logo}
              alt="Raes Logo"
              width={12}
              height={12}
              margin={{ base: "1", md: "2" }}
              padding={{ base: "-20" }}
            />
          </Link>
          <Box>
            <Text ml={3} fontSize={"sm"}>
              © 2024 Carniceria Delirius
            </Text>
            {/*     <br></br> */}
            <Text fontSize={"sm"}>Todos los Derechos Reservados</Text>
          </Box>
        </Box>

        <Stack align={"flex-start"}>
          <ListHeader>
            Dejanos tu e-mail y te estaremos enviando las promociones
          </ListHeader>
          <Stack direction={"row"}>
            <Input
              placeholder={"Direccion de E-mail"}
              bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
              border={0}
              _focus={{
                bg: "whiteAlpha.300",
              }}
              ml={24}
            />
            <IconButton
              bg={useColorModeValue("red.100", "red.500")}
              color={"white"}
              _hover={{
                bg: "red.300",
              }}
              aria-label="Subscribe"
              icon={<BiMailSend />}
            />
          </Stack>
        </Stack>

        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
