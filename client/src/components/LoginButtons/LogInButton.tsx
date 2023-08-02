import { useAuth0 } from "@auth0/auth0-react";
import { Box, Stack, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/userStore";

const LogInButton: React.FC<{}> = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  const navigate = useNavigate();

  const handleClick = () => {
    loginWithRedirect();

    setTimeout(() => {
      console.log(userRegister);
    }, 5000);

    console.log(userRegister);
  };
  const userRegister = useUserStore((state) => ({
    id: state.id,
    name: state.name,
    lastname: state.lastname,
    email: state.email,
    cel: state.cel,
    street: state.street,
    number: state.number,
    apartment: state.apartment,
    comment: state.comment,
  }));

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
              onClick={() => handleClick()}
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
