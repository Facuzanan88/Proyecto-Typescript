import { Request, Response } from "express";
import * as userService from "../services/userService";

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function postUser(req: Request, res: Response) {
  const user = req.body;
  try {
    let result = await userService.createUser(user);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send("We could not create the user");
  }
}

export async function getUser(req: Request, res: Response) {
  const { id } = req.params;
  try {
    let result = await userService.getAUser(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send(`The id ${id} not found`);
  }
}
