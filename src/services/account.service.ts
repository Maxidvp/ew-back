import AccountModel from "../database/models/account.model";
import { IAccount } from "../interfaces/account.interface";

//funcion para crear un usuario en la bbdd
export const createAccount = async (input: IAccount) => {
  console.log('en creat account',input)
  const account = await AccountModel.create(input);
  return account;
};