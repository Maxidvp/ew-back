import { Request, Response } from "express";
import { IUser, IUserDTO } from "../interfaces/user.interface";
import {
  createUser,
  findAll,
  findById,
  validatePassword,
  updateUser,
  deleteUser,
} from "../services/user.service";
import { hashPassword, signToken } from "../utils/jwt";

//register controller
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password, first_name, last_name,birthdate, img, social } = req.body;

    const newUser: Omit<IUser, "review" | "role" > = {
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
  } catch (err: any) {
    return res.status(409).send("Error at register " + err);
  }
};

//login controller
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const userValidation = { email, password };

    const validate = await validatePassword(userValidation);

    if (!validate) {
      return res.status(401).send("Wrong email or password");
    }

    //data para encriptar
    const encrypt = {
      _id: validate._id,
      email : email
    };

    //sign payload
    const token = await signToken(encrypt);

    //generar refresh token

    return res
      .header("Authorization", token)
      .send({ 
        message: "User succesffully auth",
        accessToken: token
      });
  } catch (err: any) {
    return res.status(409).send(err);
  }
};

//find all users in DB
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await findAll();

    return res.send(users);
  } catch (err: any) {
    return res.status(409).send(err);
  }
};

//find one user by ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await findById(id);

    return res.send(user);
  } catch (err: any) {
    return res.status(404).send("User not found");
  }
};

// update user by ID
export const updateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await findById(id);
  if (!user) {
    return res.status(404).send("User not found");
  }

  const { email, username, password, first_name, last_name, birthdate, img, social  } = req.body;

  //const hash = await hashPassword(password);
  //const hashUsername = await hashPassword(user.password);

  const newUser = {
    email: email ? email : user.email,
    username: username ? username : user.username,
    password: password ? password : user.password,
    first_name: first_name ? first_name : user.first_name,
    last_name: last_name ? last_name : user.last_name,
    birthdate: birthdate ? birthdate : user.birthdate,
    img: img ? img : user.img,
    social: social ? social : user.social,
  };
  try {
    const user = await updateUser(id, newUser);

    return res.send(user);
  } catch (err: any) {
    return res.status(400).send("Error updating User " + err);
  }
};

// User Delete of the BBDD
export const removeUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email, password, username } = req.body;

    if (!email || !password || !username)
      return res.status(404).send("No existe el link");

    const userDelete = { email, password, username };
    const userRemove = await deleteUser(id, userDelete);

    return res.status(200).send(`El usuario ${userRemove} fue eliminado`);
  } catch (error: any) {
    if (error.kind === "ObjectId") {
      return res.status(403).send("Fomrato User ID not found");
    }
    return res.status(500).send("Error del servidor");
  }
};
