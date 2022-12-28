import NurseryModel from "../database/models/nursery.model";
import { INursery } from "../interfaces/nursery.interface";
import { comparePassword } from "../utils/jwt";

//funcion para crear un vivero en la bbdd
export const createUserNursery = async (input: Omit<INursery, "role">) => {
  try {
    const userNursery = await NurseryModel.create(input);

    return userNursery;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const validatePassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const userNursery = await NurseryModel.findOne({ email: email });
  if (!userNursery) return false;

  const validate = await comparePassword(password, userNursery.password);
  if (!validate) return false;

  return userNursery;
};

export const findAll = async () => {
  try {
    const usersNursery = await NurseryModel.find();

    return usersNursery;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const findById = async (id: string) => {
  try {
    const userNursery = await NurseryModel.findOne({ _id: id });
    if (!userNursery) return false;

    return userNursery;
  } catch (err: any) {
    throw new Error(err);
  }
};

// Update Nursery
export const updateNursery = async (
  id: string,
  input: Omit<INursery, "role">
) => {
  try {
    const userNursery = await NurseryModel.findByIdAndUpdate(
      { _id: id },
      input,
      { new: true }
    );
    return userNursery;
  } catch (err: any) {
    throw new Error(err);
  }
};

// Service of Delete
export const deleteNursery = async (id: string, input: {}) => {
  try {
    const nursery = await NurseryModel.findById({ _id: id }, input, {
      new: true,
    });
    await nursery?.remove();
  } catch (err: any) {
    throw new Error(err);
  }
};
