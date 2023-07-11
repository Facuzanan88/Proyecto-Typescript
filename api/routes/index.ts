import { getAllUsers } from "../controllers/userController";

const { Router } = require("express");
const router = Router();

Router.use("/users", getAllUsers);

export default router;
