import { Request, Response } from "express";
import * as userService from "../services/userService";

export async function getUsers(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const email = req.query.email;

  if (id) {
    try {
      let result = await userService.getAUser(id);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).send(`The id ${id} not found`);
    }
  } else if (typeof email === "string") {
    try {
      let result = await userService.getUserByMail(email);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(200).json();
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const users = await userService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export async function postUser(req: Request, res: Response): Promise<void> {
  const user = req.body;
  try {
    let result = await userService.createUser(user);
    res.status(200).json(result);
  } catch (error) {
    console.log(error, "we could not create user");
    res.status(500).json(error);
  }
}

export async function putUser(req: Request, res: Response): Promise<void> {
  const updateUser = req.body;
  try {
    let result = await userService.modifyUser(updateUser);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("We could not update the user");
  }
}
