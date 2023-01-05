import { Request, Response } from "express";
import { Exchange, Transaction, TransactionType } from "../interfaces/transactions.interface";
import { createTransactionDB } from "../services/transactions.service";

//Alls transactions controller
export const createTransaction = async (req: Request, res: Response) => {
  try {
    const {
      userId,
      transactionAmount,
    } = req.body;
    
    const accountType = req.url.split("/")[1] as Exchange;
    const transactionType = req.url.split("/")[2] as TransactionType;

    console.log();
    const newTransaction: Transaction = {
      accountType ,
      transactionAmount,
      transactionType ,
      userId,
    };

    const transaction = await createTransactionDB(newTransaction);

    return res.send({
      message: ` ${transactionAmount} ${accountType} ${transactionType} done succefully `
    }); 
  } catch (err: any) {
    return res.status(409).send("Error  " + err);
  }
};

