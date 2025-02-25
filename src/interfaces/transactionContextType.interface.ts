import ITransaction from "./transaction.interface";

export default interface TransactionContextType {
  limit: number;
  transactions: ITransaction[];
  loading: boolean;
}
