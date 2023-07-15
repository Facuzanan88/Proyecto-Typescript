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
    age: userData.age,
    email: userData.email,
    cel: userData.cel,
  });
  return result;
};

export const getAUser = async (id: string): Promise<UserAtributtes> => {
  let result = await db.User.findByPk(id);
  return result;
};
