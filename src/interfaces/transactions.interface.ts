export type Exchange = 'ars' | 'usd' ;
export type TransactionType = 'transfer' | 'deposit' | 'withdrawal' | 'fixedterm' ;

export interface Transaction {
  
  userId: string;
  transactionId: string;
  transactionCreationDate : number ;
  transactionAmount: number;
  transactionType: TransactionType;
  accountType: Exchange;

}
