import UserModel from "../database/models/user.model";
import { IUser } from "../interfaces/user.interface";
import { comparePassword } from "../utils/jwt";

//test
//import { UserRepo } from "../repository/UserRepository";

//funcion para crear un usuario en la bbdd
export const createUser = async (input: Omit<IUser, "review" | "role">) => {

  const user = await UserModel.create(input);
  return user;
};

//funcion que valida pwd. recibe como parametros email y pwd ingresados en request. defino los tipos
//el servicio se consume desde el controlador para la ruta /login
export const validatePassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  //busco user por email
  const user = await UserModel.findOne({ email });
  if (!user) return false;

  //comparo pwd
  const validate = await comparePassword(password, user.password);
  if (!validate) return false;
  return user;
};

export const findAll = async () => {

  const users = await UserModel.find();
  return users;
  //return await UserRepo.find();
};

export const findById = async (_id: string, fields: string) => {

  const user = await UserModel.findById(_id, fields);
  return user;
  //return await UserRepo.findOne(id);
};

export const findByEmail = async (email: string) => {

  const user = await UserModel.findOne({ email }, 'first_name last_name');
  return user;
  //return await UserRepo.findOne(id);
};

// Update User
export const updateUser = async (
  id: string,
  input: Omit<IUser, "review" | "role">
) => {

  const user = await UserModel.findByIdAndUpdate({ _id: id }, input, {
    new: true,
  });
  return user;
};

// Service of Delete
export const deleteUser = async (_id: string, input = {}) => {

  const user = await UserModel.findById(_id, input, { new: true });
  await user?.remove();
  return user;
};
