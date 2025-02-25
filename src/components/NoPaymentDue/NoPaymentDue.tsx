import React from "react";
import "./NoPaymentDue.scss";
import getCurMonth from "../../utils/getCurMonth";

const NoPaymentDue: React.FC = () => {
  const month = getCurMonth();

  return (
    <div className="no-payment-block">
      <span className="npb__title">No Payment Due</span>
      <span className="npb__description">
        You've paid your {month} balance.
      </span>
    </div>
  );
};

export default NoPaymentDue;
