import PlantsModel from "../database/models/plants.model";
import { IPlant } from "../interfaces/plants.interface";

export const createPlant = async (input: Omit<IPlant, "nursery">) => {
  try {
    const plant = await PlantsModel.create(input);

    return plant;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const findAll = async () => {
  try {
    const plants = await PlantsModel.find();

    return plants;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const findById = async (id: string) => {
  try {
    const plant = await PlantsModel.findOne({ _id: id });
    if (!plant) return false;

    return plant;
  } catch (err: any) {
    throw new Error(err);
  }
};


// Update User
export const updatePlant = async (id: string, input: Omit<IPlant, "nursery">) => {
  try {
    const user = await PlantsModel.findByIdAndUpdate({ _id: id }, input, {
      new: true,
    });
    return user;
  } catch (err: any) {
    throw new Error(err);
  }
};


// Service of Delete
export const deletePlant = async (id: string, input: {}) => {
  try {
    const plant = await PlantsModel.findById({ _id: id}, input, { new: true });
    await plant?.remove()
  } catch (err: any) {
    throw new Error(err);
  }
}
