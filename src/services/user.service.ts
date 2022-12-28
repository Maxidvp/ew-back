import UserModel from "../database/models/user.model";
import { IUser } from "../interfaces/user.interface";
import { comparePassword } from "../utils/jwt";

//test
//import { UserRepo } from "../repository/UserRepository";

//funcion para crear un usuario en la bbdd
export const createUser = async (input: Omit<IUser, "review" | "role">) => {
  try {
    const user = await UserModel.create(input);
    return user;
  } catch (err: any) {
    throw new Error(err);
  }
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
  const user = await UserModel.findOne({ email: email });

  if (!user) return false;

  //comparo pwd
  const validate = await comparePassword(password, user.password);

  if (!validate) return false;

  return user;
};

export const findAll = async () => {
  try {
    const users = await UserModel.find();

    return users;
    //return await UserRepo.find();
  } catch (err: any) {
    throw new Error(err);
  }
};

export const findById = async (id: string) => {
  try {
    const user = await UserModel.findOne({ _id: id });
    if (!user) return false;

    return user;
    //return await UserRepo.findOne(id);
  } catch (err: any) {
    throw new Error(err);
  }
};

// Update User
export const updateUser = async (
  id: string,
  input: Omit<IUser, "review" | "role">
) => {
  try {
    const user = await UserModel.findByIdAndUpdate({ _id: id }, input, {
      new: true,
    });
    return user;
  } catch (err: any) {
    throw new Error(err);
  }
};

// Service of Delete
export const deleteUser = async (id: string, input: {}) => {
  try {
    const user = await UserModel.findById({ _id: id }, input, { new: true });
    await user?.remove();
  } catch (err: any) {
    throw new Error(err);
  }
};
