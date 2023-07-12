import { Request, Response } from "express";
import * as userService from "../services/userService";

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  try {
    const users = await userService.getUsers();
    // console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function postUser(req: Request, res: Response) {
  const user = req.body;
  // console.log(user);
  try {
    let result = await userService.createUser(user);
    // console.log(result);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send("We could not create the user");
  }
}
