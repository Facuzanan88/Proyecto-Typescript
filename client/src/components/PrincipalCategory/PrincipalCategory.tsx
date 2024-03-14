"use client";

import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import logo from "../../Assest/logo.jpg";

interface Props {
  children: React.ReactNode;
}

const Testimonial = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props: Props) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"full"} py={16}>
        <Stack spacing={0} align={"center"}>
          <Heading>CORTES DE CARNE</Heading>
          <Text>Trabajamos con carne de la región de la más alta calidad</Text>
        </Stack>
        <Flex mt={12} justifyContent={"space-between"} mx={"52"}>
          {" "}
          {/* Ajustando el margen horizontal */}
          <Link to="cow" style={{ textDecoration: "none" }}>
            <Box flex={1} mx={2} maxW="264.65px">
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Box p={4}>
                  <Heading as="h3" size="md" textAlign="center" mb={4}>
                    CORTES VACUNOS
                  </Heading>
                  <Image
                    src={logo}
                    alt="Cortes Vacunos"
                    paddingLeft={8}
                    paddingRight={8}
                    paddingBottom={6}
                  />
                  <Text textAlign="center">
                    Cortes frescos de los mejores frigoríficos de la zona
                  </Text>
                </Box>
              </Box>
            </Box>
          </Link>
          <Link to="/cortes-de-cerdo" style={{ textDecoration: "none" }}>
            <Box flex={1} mx={2} maxW="264.65px">
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Box p={4}>
                  <Heading as="h3" size="md" textAlign="center" mb={4}>
                    CORTES DE CERDO
                  </Heading>
                  <Image
                    src={logo}
                    alt="Cortes de Cerdo"
                    paddingLeft={8}
                    paddingRight={8}
                    paddingBottom={6}
                  />
                  <Text textAlign="center">
                    Cortes frescos de los mejores frigoríficos de la zona
                    sumados a diferentes cortes de productores de la zona
                  </Text>
                </Box>
              </Box>
            </Box>
          </Link>
          <Link to="/cortes-de-pollo" style={{ textDecoration: "none" }}>
            <Box flex={1} mx={2} maxW="264.65px">
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Box p={4}>
                  <Heading as="h3" size="md" textAlign="center" mb={4}>
                    CORTES DE POLLO
                  </Heading>
                  <Image
                    src={logo}
                    alt="Cortes de Pollo"
                    paddingLeft={8}
                    paddingRight={8}
                    paddingBottom={6}
                  />
                  <Text textAlign="center">
                    Todo proveniente de criaderos de pollo de la zona alimentado
                    a base de maíz
                  </Text>
                </Box>
              </Box>
            </Box>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
