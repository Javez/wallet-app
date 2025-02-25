import { createContext } from "react";
import TransactionContextType from "../../interfaces/transactionContextType.interface";

const TransactionContext = createContext<TransactionContextType | undefined>(
  undefined
);

export default TransactionContext;
