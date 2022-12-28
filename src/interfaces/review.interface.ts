import { IUserDocument } from "../database/models/user.model";

export interface IReview {
  username: IUserDocument["_id"];
  rate: number;
  description: string;
}
