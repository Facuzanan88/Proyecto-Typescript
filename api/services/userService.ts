import db from "../models";
import { v4 as uuidv4 } from "uuid";
import UserAtributtes from "../interfaces/user";

export const getUsers = async (): Promise<UserAtributtes[]> => {
  let result = await db.User.findAll();
  return result;
};

export const createUser = async (userData: any): Promise<UserAtributtes> => {
  let result = await db.User.create({
    id: uuidv4(),
    name: userData.name,
    lastname: userData.lastname,
    photo: userData.photo,
    age: userData.age,
    email: userData.email,
    cel: userData.cel,
    street: userData.street,
    number: userData.number,
    apartment: userData.apartment,
    comment: userData.comment,
  });
  return result;
};

export const modifyUser = async (
  id: string,
  updateUser: any
): Promise<UserAtributtes | null> => {
  try {
    let result = await db.User.findByPk(id);

    if (!result) {
      throw new Error("User not found");
    }

    await result.update({
      name: updateUser.name,
      lastname: updateUser.lastname,
      photo: updateUser.photo,
      age: updateUser.age,
      cel: updateUser.cel,
      street: updateUser.street,
      number: updateUser.number,
      apartment: updateUser.apartment,
      comment: updateUser.comment,
    });

    return result;
  } catch (error) {
    console.error("Error modifying user:", error);
    return null;
  }
};

export const getAUser = async (id: string): Promise<UserAtributtes> => {
  let result = await db.User.findByPk(id);
  return result;
};

export const getUserByMail = async (email: string): Promise<UserAtributtes> => {
  let result = await db.User.findOne({ where: { email: email } });
  return result;
};
