import { NextFunction, Request, Response } from "express";
import { IUser, IUserDTO } from "../interfaces/user.interface";
import { newError } from "../middlewares/errorHandler/errorMiddleware";
import {
  createUser,
  findAll,
  findById,
  findByEmail,
  validatePassword,
  updateUser,
  deleteUser,
} from "../services/user.service";
import { decodeToken, hashPassword, signToken } from "../utils/jwt";

//register controller
export const registerUser = async (req: Request, res: Response) => {

  const { username, email, password, first_name, last_name, birthdate, img, social } = req.body;

  const newUser: Omit<IUser, "review" | "role"> = {
    username,
    email,
    password,
    first_name,
    last_name,
    birthdate,
    img,
    social,
  };

  const user = await createUser(newUser);

  const userDTO: IUserDTO = {
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name
  }
  return res.send({ message: "User registered successfully", email: user.email });//user:userDTO
};

//login controller
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {


  const { email, password } = req.body;
  const userValidation = { email, password };

  const validate = await validatePassword(userValidation);
  if (!validate) return next(newError(401, "Wrong email or password"));

  const user = await findByEmail(email);
  if (!user) return next(newError(404, "User not found"));

  //data para encriptar
  const encrypt = {
    _id: validate._id,
    email: email
  };

  //sign payload
  const token = await signToken(encrypt);

  return res
    .header("Authorization", token)
    .send({
      message: "User succesffully auth",
      token: token,
      email: email,
      first_name: user.first_name,
      last_name: user.last_name
    });
};

//find loged user
export const getMe = async (req: Request, res: Response, next: NextFunction) => {

  console.log('res.locals.payload', res.locals.payload, res.locals.payload._id)
  const user = await findById(res.locals.payload._id);
  if (!user) return next(newError(404, "User not found"));

  return res.send(
    {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    }
  )
};

//find all users in DB
export const getUsers = async (req: Request, res: Response) => {

  const users = await findAll();
  return res.send(users);
};

//find one user by ID
export const getUserById = async (req: Request, res: Response) => {

  const { id } = req.params;
  const user = await findById(id);
  return res.send(user);
};

// update user by ID
export const updateUserById = async (req: Request, res: Response, next: NextFunction) => {

  const { id } = req.params;
  const userExist = await findById(id);
  if (!userExist) return next(newError(404, "User not found"));

  const { email, username, password, first_name, last_name, birthdate, img, social } = req.body;

  //const hash = await hashPassword(password);
  //const hashUsername = await hashPassword(user.password);

  const newUser = {
    email: email ? email : userExist.email,
    username: username ? username : userExist.username,
    password: password ? password : userExist.password,
    first_name: first_name ? first_name : userExist.first_name,
    last_name: last_name ? last_name : userExist.last_name,
    birthdate: birthdate ? birthdate : userExist.birthdate,
    img: img ? img : userExist.img,
    social: social ? social : userExist.social,
  };

  const user = await updateUser(id, newUser);
  return res.send(user);
};

// User Delete of the BBDD
export const removeUser = async (req: Request, res: Response, next: NextFunction) => {

  const { id } = req.params;
  const { email, password, username } = req.body;

  /* if (!email || !password || !username) return next(newError(400, "Email, password or username missing")); 
  const userDelete = { email, password, username }; */

  const userRemove = await deleteUser(id);
  return res.status(200).send(`El usuario ${userRemove.email} fue eliminado`);
};
