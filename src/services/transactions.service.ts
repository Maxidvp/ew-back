import TransactionModel from "../database/models/transactions.model";
import { Transaction } from "../interfaces/transactions.interface";

//function to create a new transaction

export const createTransactionDB = async (transaction:Transaction) => {
    
    try {
        const newTransaction = await TransactionModel.create(transaction);
        return transaction;
    } catch (err: any) {
    throw new Error(err);
    }

};

