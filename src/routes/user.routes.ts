import { Router } from "express";
import {
  getUserById,
  getUsers,
  loginUser,
  registerUser,
  updateUserById,
  removeUser,
} from "../controllers/user.controller";
import {
  authUserValidator,
  loginValidator,
} from "../middlewares/validators/validators";
import { verifyToken } from "../middlewares/validators/verifyToken";

const userRoutes = Router();

userRoutes.post("/register", authUserValidator, registerUser);

userRoutes.post("/login", loginValidator, loginUser);

userRoutes.get("/", verifyToken, getUsers);

userRoutes.get("/:id", verifyToken, getUserById);

userRoutes.put("/:id", verifyToken, updateUserById);

userRoutes.delete("/:id", verifyToken, removeUser);

export default userRoutes;
