import { Box, Heading, VStack } from "@chakra-ui/react";
import Map from "../Map/Map";

const Sucursales = () => {
  const sucursales = [
    {
      name: "CARNICERIA DELIRIUS",
      address: "Humberto Primo N`1005",
      lat: -31.64881,
      long: -60.70868,
    },
    {
      name: "POLLERIA DELIRIUS",
      address: "Hipolito Irigoyen N`849",
      lat: 0,
      long: 0,
    },
    {
      name: "DELIRIUS CERDO",
      address: "Laprida N`526",
      lat: 0,
      long: 0,
    },
  ];

  return (
    <Box p={8}>
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        NUESTRAS SUCURSALES
      </Heading>
      <Heading as="h4" size="lg" mb={4}>
        CONCORDIA, ENTRE RIOS
      </Heading>

      <VStack spacing={4} align="stretch">
        {sucursales.map((sucursal, index) => (
          <Box key={index} mt={12}>
            <Heading as="h4" size="md" mb={2} ml={4}>
              {sucursal.name}
            </Heading>
            <Box ml={4} mb={2}>
              {sucursal.address}
            </Box>
            <Map lat={sucursal.lat} long={sucursal.long} />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Sucursales;
