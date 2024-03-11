import instance from "../routes/userRoute";

const endpoint = "users";

export const getUsers = async () => {
  try {
    const result = await instance.get(endpoint);
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export const userByMail = async (email: string) => {
  try {
    const result = await instance.get(`${endpoint}?email=${email}`);
    console.log(result);
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export const createUserLogin = async (user: object) => {
  try {
    console.log("ejecuta la accion");
    const res = await instance.post(endpoint, user);
    const newUser = await res.data;
    return newUser;
  } catch (err) {
    console.log(err);
  }
};
