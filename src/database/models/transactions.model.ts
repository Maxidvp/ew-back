import mongoose from "mongoose";
import { Transaction } from "../../interfaces/transactions.interface";

const transactionSchema = new mongoose.Schema<Transaction>(
  {
    transactionId: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
      required: true,
    },
    transactionAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    transactionCreationDate: {
      type: Number,
      required: false,
      default: Date.now,
    },
    transactionType: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


const TransactionModel = mongoose.model<Transaction>("Transaction", transactionSchema);

export default TransactionModel;
