export type Exchange = 'ars' | 'usd' ;
export type TransactionType = 'transfer' | 'deposit' | 'withdrawal' | 'fixedterm' ;

export class Transaction {
  
  userId: string;
  userIdTransferTo? : string ;
  transactionAmount: number;
  transactionType: TransactionType;
  accountType: Exchange;

}
