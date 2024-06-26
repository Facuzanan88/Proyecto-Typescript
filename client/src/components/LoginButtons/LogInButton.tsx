import { useAuth0 } from "@auth0/auth0-react";
import { Box, Stack, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { useUserStore } from "../../store/userStore";

const LogInButton: React.FC<{}> = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const UserStore = useUserStore();

  const handleClick = async () => {
    loginWithRedirect();
  };

  return (
    <Box>
      {!isAuthenticated && (
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction="row"
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            onClick={() => handleClick()}
          >
            Ingresar
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"red.500"}
            _hover={{
              bg: "red.300",
            }}
            onClick={() => handleClick()}
          >
            Registrarse
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default LogInButton;
