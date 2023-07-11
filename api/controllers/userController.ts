import { Request, Response } from "express";
import { getUsers } from "../services/userService";

interface userAtributtes {
  id: string;
  name: string;
  subname: string;
  age: string;
  email: string;
  cel: number;
}

export const getAllUsers = async (req: Request, res: Response) => {
  const users: userAtributtes[] = await getUsers(req, res);
  return users;
};
