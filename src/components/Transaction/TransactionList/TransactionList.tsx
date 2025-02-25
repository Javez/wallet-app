import React, { useState, useEffect, FC } from "react";
import TransactionItem from "../TransactionItem/TransactionItem";
import ITransaction from "../../../interfaces/transaction.interface";
import "./TransactionList.scss";

interface Props {
  transactions: ITransaction[];
}

const TransactionsList: FC<Props> = ({ transactions }) => {
  return (
    <div className="transactions-list-block">
      {transactions ? (
        transactions.map((tx) => (
          <>
            <TransactionItem key={tx.id} transaction={tx} />
            <span className="tlb-horisontal-line" />
          </>
        ))
      ) : (
        <div>No transactions</div>
      )}
    </div>
  );
};

export default TransactionsList;
