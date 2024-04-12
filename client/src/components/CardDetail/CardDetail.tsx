"use client";

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
import { MdLocalShipping } from "react-icons/md";
import { useCowStore } from "../../store/cowStore";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const CardDetail: React.FC<{}> = () => {
  const cowStore = useCowStore(); // usando el hook directamente
  const cow = {
    id: cowStore.id,
    name: cowStore.name,
    photo: cowStore.photo,
    price: cowStore.price,
    fat: cowStore.fat,
    bone: cowStore.bone,
    description: cowStore.description,
    stock: cowStore.stock,
  };

  const id = useParams();
  const idCow = id.id;
  console.log(idCow);

  useEffect(() => {
    cowStore.cowById(idCow);
  }, []);

  const [quantity, setQuantity] = useState(0);
  const cowPrice = cow.price;
  const total = cowPrice * quantity;

  const handleQuantityChange = (event: any) => {
    setQuantity(event.target.value);
  };

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 2, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 8, md: 12 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={cow.photo}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack>
          <Box
            as={"header"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            pt={"8"}
            pb={"12"}
          >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {cow.name}
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{cow.description}</Text>
            </VStack>

            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
                pt={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Precio:
                  </Text>{" "}
                  ${cow.price}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    kg de Hueso:
                  </Text>{" "}
                  {cow.bone}%
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    kg de Grasa:
                  </Text>{" "}
                  {cow.fat}%
                </ListItem>
                <ListItem pt={2}>
                  <Box display={"center"} justifyContent={"center"}>
                    <Text
                      fontSize="md"
                      mr={4}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      PESO (aprox.) (KG)
                    </Text>
                    <Input
                      maxW={150}
                      textAlign={"center"}
                      placeholder={"Ingrese el peso"}
                      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                      border={0}
                      _focus={{
                        bg: "whiteAlpha.300",
                      }}
                      value={quantity}
                      onChange={handleQuantityChange}
                    />
                  </Box>
                  <Box display={"flex"} justifyContent={"center"}>
                    <Text>TOTAL:</Text>
                    <Text fontSize="md" ml={4}>
                      ${total}
                    </Text>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
      <Stack
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        pb={{ base: 8, md: 12 }}
      >
        <Button
          rounded={"none"}
          width={"400px"}
          py={"5"}
          bg={useColorModeValue("gray.900", "gray.50")}
          color={useColorModeValue("white", "gray.900")}
          textTransform={"uppercase"}
          _hover={{
            transform: "translateY(2px)",
            boxShadow: "lg",
          }}
        >
          <Text mr={4}>Agrega al Carrito</Text>
          <MdLocalShipping />
        </Button>
        <Text fontSize={"xs"} maxW={300} textAlign={"center"}>
          El peso del producto recibido puede variar brevemente del ingresado lo
          que impacta directamente en el precio total, sin ser cambios
          significativos
        </Text>
      </Stack>
    </Container>
  );
};

export default CardDetail;
