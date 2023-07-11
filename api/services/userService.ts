import db from "../models/index";

export const getUsers = async (res: any) => {
  try {
    let result = await db.User.findAll();

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(404).send("Users not found");
  }
};
