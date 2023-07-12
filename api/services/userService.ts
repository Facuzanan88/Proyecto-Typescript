import db from "../models";
import { v4 as uuidv4 } from "uuid";
import UserAtributtes from "../interfaces/user";

export async function getUsers(): Promise<UserAtributtes[]> {
  let result = await db.User.findAll();
  return result;
}

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
