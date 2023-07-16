import instance from "../routes/userRoute";

const endpoint = "users";

export const getUsers = async () => {
  try {
    const result = await instance.get(endpoint);
    console.log(result.data);
    return result.data;
  } catch (err) {
    console.log(err);
  }
};
