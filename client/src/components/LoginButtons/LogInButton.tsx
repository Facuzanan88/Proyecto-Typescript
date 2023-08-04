import { useAuth0 } from "@auth0/auth0-react";
import { Box, Stack, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserAtributtes from "../../interfaces/user";
import { userByMail } from "../../services/usersService";
import { useUserStore } from "../../store/userStore";

const LogInButton: React.FC<{}> = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  const [usuario, setUsuario] = useState<UserAtributtes | null>();

  const { userByMail, createUser, modifyUser } = useUserStore();

  const navigate = useNavigate();

  const handleClick = () => {
    loginWithRedirect();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let usuarioData: UserAtributtes | null = await userByMail(user?.mail);
        console.log(usuarioData, "usuarioData");
        if (!usuarioData) {
          const userLogin = {
            name: user?.given_name,
            lastname: user?.family_name,
            email: user?.email,
          };
          usuarioData = await createUser(userLogin);
        }

        setUsuario(usuarioData);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };

    fetchData();
  }, [user, userByMail, createUser]);

  useEffect(() => {
    if (isAuthenticated && usuario?.number !== null) {
      console.log("porque no redirige");
      navigate("registrarse");
    }
  }, [isAuthenticated, usuario, navigate]);

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
function createUser(userLogin: {
  name: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
}): UserAtributtes | PromiseLike<UserAtributtes | null> | null {
  throw new Error("Function not implemented.");
}
