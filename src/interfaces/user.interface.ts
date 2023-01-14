import { IRolesDocument } from "../database/models/roles.model";
import { IReviewDocument } from "../database/models/review.model";
import { IAccount } from "./account.interface";

export interface IUser {
  username: string;
  birthdate: Date;
  img: string;
  social: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  role: IRolesDocument["_id"];
  review: IReviewDocument["_id"];
  ARSAccount: IAccount;
  USDAccount: IAccount;
}

export interface IUserDTO {
  email: string;
  first_name: string;
  last_name: string;
}