import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useTransactions } from "../../hooks/useTransactionsHook";
import Button from "../../components/Button/Button";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import {
  formatTransactionDate,
  formatTransactionTime,
} from "../../utils/formatTransactionDate";
import "./TransactionDetail.scss";

const TransactionDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { limit, transactions, loading } = useTransactions();

  const curTransaction = transactions.find((item) => item.id.toString() === id);
  const curTransactionDate = curTransaction
    ? formatTransactionDate(curTransaction.datetime)
    : null;
  const curTransactionTime = curTransaction
    ? formatTransactionTime(curTransaction.datetime)
    : null;
  console.log("test", curTransaction);

  if (!transactions) {
    return <p>Transaction not found</p>;
  }

  return (
    <Wrapper>
      <section className="transaction-detail-page">
        <Button className="button-tdp" back>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
        <div className="tdp-header-block">
          <span className="tdp-header-block__amount">
            ${curTransaction?.amount?.toFixed(2)}
          </span>
          <span className="tdp-header-block__name">
            {curTransaction?.description}
          </span>
          <span className="tdp-header-block__date">
            {curTransactionDate && curTransactionTime && curTransaction
              ? `${curTransactionDate} ${curTransactionTime}`
              : "No date"}
          </span>
        </div>
        <div className="tdp-info-block">
          <div className="tdp-card-status">
            <span className="tdp-card-status__status">
              Status: {curTransaction?.status}
            </span>
            <span className="tdp-card-status__card">
              {curTransaction?.supplier}
            </span>
          </div>
          <span className="tdp-horisontal-line"></span>
          <div className="tdp-total-block">
            <span className="tdp-total-block__name">Total</span>
            <span className="tdp-total-block__amount">
              ${curTransaction?.amount}
            </span>
          </div>
        </div>
        <div className="tdp-space-block" />
      </section>
    </Wrapper>
  );
};

export default TransactionDetail;
