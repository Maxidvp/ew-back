import mongoose from "mongoose";
import { IAccount } from "../../interfaces/account.interface";

const accountSchema = new mongoose.Schema<IAccount>(
  {
    money: {
      type: Number,
      default: 0,
    }
  },
  { timestamps: true }
);

const AccountModel = mongoose.model<IAccount>("Account", accountSchema);

export default AccountModel;