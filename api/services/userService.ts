import db from "../models";
import { v4 as uuidv4 } from "uuid";

const users: userAtributtes[] = [];

interface userAtributtes {
  id: string;
  name: string;
  subname: string;
  age: string;
  email: string;
  cel: number;
}

export async function getUsers(): Promise<userAtributtes[]> {
  let result = await db.User.findAll();
  return result;
}

export const createUser = async (userData: any): Promise<userAtributtes> => {
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
