import { FC } from "react";
import { ROUTES } from "../../routes/routes";
import { Outlet, Route, Routes } from "react-router-dom";
import { useTransactions } from "../../hooks/useTransactionsHook";
import CardBalance from "../../components/CardBalance/CardBalance";
import NoPaymentDue from "../../components/NoPaymentDue/NoPaymentDue";
import DailyPoints from "../../components/DailyPoints/DailyPoints";
import TransactionsList from "../../components/Transaction/TransactionList/TransactionList";
import TransactionDetail from "../TransactionDetail/TransactionDetail";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import getDailyPoints from "../../utils/getDailyPoints";
import "./TransactionList.scss";

const TransactionList: FC = () => {
  const { limit, transactions, loading } = useTransactions();
  const today = new Date();
  const points = getDailyPoints(today);

  return (
    <Wrapper>
      <section className="transaction-list-page">
        <div className="tlp-info-block">
          <div className="tlp-balance-points">
            <div className="tlp-balance-points__balance">
              <CardBalance limit={limit || 0} />
            </div>
            <div className="tlp-balance-points__points">
              <DailyPoints dailyPoints={points} />
            </div>
          </div>
          <div className="tlp-no-payment">
            <NoPaymentDue />
          </div>
        </div>
        <span className="tlp-transaction-title">Latest Transactions</span>
        <div className="tlp-transactions-block">
          <TransactionsList transactions={transactions || []} />
        </div>
      </section>
      <>
        <Routes>
          <Route
            path={ROUTES.TRANSACTION_DETAIL}
            element={<TransactionDetail />}
          />
        </Routes>
        <Outlet />
      </>
    </Wrapper>
  );
};

export default TransactionList;
