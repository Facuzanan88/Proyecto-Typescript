import { Request, Response } from "express";
import * as userService from "../services/userService";

export function getAllUsers(req: Request, res: Response): void {
  const users = userService.getAllUsers();
  res.json(users);
}
