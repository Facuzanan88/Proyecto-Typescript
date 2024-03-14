"use client";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Link,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useCowStore } from "../../store/cowStore";

export default function ProductSimple() {
  const cowStore = useCowStore(); // usando el hook directamente
  const cow = cowStore.cowCuts;

  useEffect(() => {
    cowStore.getCows();
  }, [cowStore]);

  return (
    <Center py={12}>
      {cow && cow.length > 0 ? (
        cow.map((cow, index) => {
          // Agrega item y index como parámetros
          return (
            // Añade un return aquí
            <Box
              key={index} // Agrega una clave única para cada elemento en el array
              role={"group"}
              p={6}
              maxW={"330px"}
              w={"full"}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
            >
              <Box
                rounded={"lg"}
                mt={-12}
                pos={"relative"}
                height={"230px"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${cow.photo})`, // Usa item.IMAGE en lugar de IMAGE
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(20px)",
                  },
                }}
              >
                <Link href={`/${cow.id}`}>
                  <Image
                    rounded={"lg"}
                    height={230}
                    width={282}
                    objectFit={"cover"}
                    src={cow.photo} // Usa item.IMAGE en lugar de IMAGE
                    alt="#"
                  />
                </Link>
              </Box>
              <Stack pt={10} align={"center"}>
                <Text
                  color={"gray.500"}
                  fontSize={"sm"}
                  textTransform={"uppercase"}
                >
                  {cow.name} {/* Usa item.name */}
                </Text>
                <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                  Nice Chair, pink
                </Heading>
                <Stack direction={"row"} align={"center"}>
                  <Text fontWeight={800} fontSize={"xl"}>
                    ${cow.price} {/* Usa item.price */}
                  </Text>
                  <Text textDecoration={"line-through"} color={"gray.600"}>
                    $199
                  </Text>
                </Stack>
              </Stack>
            </Box>
          );
        })
      ) : (
        <Text>No hay corte</Text>
      )}
    </Center>
  );
}
