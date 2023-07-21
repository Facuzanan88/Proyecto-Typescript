import { useAuth0 } from "@auth0/auth0-react";
import { Box, Stack, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogInButton: React.FC<{}> = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

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
            onClick={() => loginWithRedirect()}
          >
            Ingresar
          </Button>
          <Link to="/registrarse">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"red.500"}
              _hover={{
                bg: "red.300",
              }}
            >
              Registrarse
            </Button>
          </Link>
        </Stack>
      )}
    </Box>
  );
};

export default LogInButton;