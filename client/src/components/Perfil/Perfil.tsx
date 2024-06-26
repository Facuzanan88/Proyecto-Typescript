"use client";

import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useUserStore } from "../../store/userStore";

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SocialProfileWithImageHorizontal: React.FC<{}> = () => {
  const [searchParams] = useSearchParams();

  const userStore = useUserStore(); // Usando el hook directamente
  const user = userStore.user;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const emailParam = searchParams.get("email");
        if (emailParam && emailParam !== null) {
          await userStore.userByMail(emailParam);
        }
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "540px" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={user.photo}
            alt="la foto no funciona"
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {user.name} {user.lastname}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            {user.name}
          </Text>
          <Text
            textAlign={"center"}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            Actress, musician, songwriter and artist. PM for work inquires or
            <Text color={"blue.400"}>#tag</Text>
            {user.cel}
          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #art
            </Badge>
            <Badge
              px={2}
              py={1}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #photography
            </Badge>
            <Badge
              px={2}
              py={1}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              {user.age}
            </Badge>
          </Stack>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              Message
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              {user.number}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};

export default SocialProfileWithImageHorizontal;
