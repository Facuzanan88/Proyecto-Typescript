"use client";

import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FcLock, FcDonate, FcInTransit } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Stack alignItems="center" justifyContent="center">
          <Flex
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            color={"white"}
            rounded={"full"}
            bg={"gray.100"}
            mb={1}
          >
            {<Icon as={FcLock} w={10} h={10} />}
          </Flex>
          <Text fontWeight={600}>{"SITIO SEGURO"}</Text>
          <Text color={"gray.600"}>{"Protegemos tus datos"}</Text>
        </Stack>
        <Stack alignItems="center" justifyContent="center" mt={7}>
          <Flex
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            color={"white"}
            rounded={"full"}
            bg={"gray.100"}
            mb={1}
          >
            {<Icon as={FcDonate} w={10} h={10} />}
          </Flex>
          <Text fontWeight={600}>{"MEDIOS DE PAGO"}</Text>
          <Text textAlign="center" color={"gray.600"}>
            {
              "Aceptamos tarjeta de Credito, Debito, Transferencias y Criptomonedas"
            }
          </Text>
        </Stack>
        <Stack alignItems="center" justifyContent="center">
          <Flex
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            color={"white"}
            rounded={"full"}
            bg={"gray.100"}
            mb={1}
          >
            {<Icon as={FcInTransit} w={10} h={10} />}
          </Flex>
          <Text fontWeight={600}>{"ENVIOS EN TODA LA CIUDAD"}</Text>
          <Text color={"gray.600"}>{"Envios gratis a partir de $10000"}</Text>
        </Stack>

        {/*       <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"SITIO SEGURO"}
          text={"Protegemos tus datos"}
        /> 
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"MEDIOS DE PAGO"}
          text={
            "Aceptamos tarjeta de Credito, Debito, Transferencias y Criptomonedas"
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"ENVIOS EN TODA LA CIUDAD"}
          text={"Envios gratis a partir de $10000"}
        /> */}
      </SimpleGrid>
    </Box>
  );
}
