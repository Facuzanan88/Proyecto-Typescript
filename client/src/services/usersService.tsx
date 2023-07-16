import instance from "../routes/userRoute";

const endpoint = "users";

export const getUsers = async () => {
  try {
    const result = await instance.get(endpoint);
    console.log(result);
    return result.data;
  } catch (err) {
    console.log(err);
  }
};
