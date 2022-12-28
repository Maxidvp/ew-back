import mongoose from "mongoose";
import UserModel, { IUserDocument } from "../database/models/user.model";
import { BaseRepository } from "./BaseRepository";

export class UserRepository extends BaseRepository<IUserDocument> {
  constructor(model: mongoose.Model<IUserDocument>) {
    super(UserModel);
    this.model = model;
  }

  async find(): Promise<IUserDocument[]> {
    return await this.model.find({});
  }

  async findOne(id: string): Promise<IUserDocument> {
    return await this.model.findOne({ id });
  }
}

export const UserRepo = new UserRepository(UserModel);
