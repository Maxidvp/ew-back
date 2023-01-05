import { Request, Response } from "express";
import { Transaction } from "../interfaces/transactions.interface";
import {nanoid} from "nanoid";
import { createTransactionDB } from "../services/transactions.service";

//Alls transactions controller
export const createTransaction = async (req: Request, res: Response) => {
  try {
    const {
      userId,
      transactionAmount,
      transactionType,
      accountType
    } = req.body;
    
    const newTransaction: Transaction = {

        accountType,
        transactionAmount,
        transactionType,
        userId,
        transactionId: nanoid(),
        transactionCreationDate: Date.now()
        
    };

    const transaction = await createTransactionDB(newTransaction);

    return res.send({
      message: "Transaction completed successfully"
    }); 
  } catch (err: any) {
    return res.status(409).send("Error  " + err);
  }
};

