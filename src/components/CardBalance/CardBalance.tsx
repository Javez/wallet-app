import React, { FC } from "react";
import getRandomBalance from "../../utils/getRandomBalance";
import toFixed from "../../utils/toFixed";
import "./CardBalance.scss";

type Prop = {
  limit: number;
};

const CardBalance: FC<Prop> = ({ limit }) => {
  const balance = getRandomBalance();

  const available = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(limit - balance);

  return (
    <div className="card-balance-block">
      <span className="cbb__title">Card Balance</span>
      <span className="cbb__balance">${balance}</span>
      <span className="cbb__available">{available} Available</span>
    </div>
  );
};

export default CardBalance;
