import React, { useEffect, useState } from "react";
import ITransaction from "../../interfaces/transaction.interface";
import transactionsData from "../../data/transactions.json";
import TransactionContext from "../context/transaction.context";

export const TransactionProvider = ({
  children,
}: {
  children: React.ReactNode | undefined;
}) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [limit, setLimit] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLimit(transactionsData.limit);
      setTransactions(transactionsData.transactions);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <TransactionContext.Provider value={{ limit, transactions, loading }}>
      {children}
    </TransactionContext.Provider>
  );
};
