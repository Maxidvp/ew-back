import mongoose from "mongoose";
import { Transaction } from "../../interfaces/transactions.interface";

const transactionSchema = new mongoose.Schema<Transaction>(
  {
    accountType: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    transactionType: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    userIdTransferTo: {
      type: String,
      required: false,
      default: null
    },
  },
  { timestamps: true }
);


const TransactionModel = mongoose.model<Transaction>("Transaction", transactionSchema);

export default TransactionModel;
