import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useUserStore } from "../../store/userStore";
import shallow from "zustand/shallow"; // esta opcion de zustand "shallow" me permite comparar un objeto con otro e ir actualizando los valores si es que estos varian.

const Profile: React.FC<{}> = () => {
  const { logout, isAuthenticated } = useAuth0();

  const user = useUserStore(
    (state) => ({
      id: state.id,
      name: state.name,
      lastname: state.lastname,
      email: state.email,
      cel: state.cel,
      street: state.street,
      number: state.number,
      apartment: state.apartment,
      comment: state.comment,
    }),
    shallow
  );

  const { getUser } = useUserStore();
  const handleClick = () => {
    getUser("dda03e98-716c-4429-9c1e-9e0bcc2d0573");
  };

  return (
    <Box>
      {isAuthenticated && (
        <Box>
          <Text>{user.name}</Text>
          <Button onClick={() => handleClick()}>user</Button>
        </Box>
      )}
    </Box>
  );
};

export default Profile;
