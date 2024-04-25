import express from "express";
import {
  getUsers,
  postUser,
  putUser,
  userByMail,
} from "../controllers/userController";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUsers);
router.get("/userid", userByMail);
router.post("/users", postUser);
router.put("/users", putUser);

export default router;
