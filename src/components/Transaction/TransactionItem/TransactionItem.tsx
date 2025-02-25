import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCoffee,
  faChevronRight,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { formatTransactionDate } from "../../../utils/formatTransactionDate";
import getRandomGradient from "../../../utils/getRandomGradient";
import ITransaction from "../../../interfaces/transaction.interface";
import Button from "../../Button/Button";
import "./TransactionItem.scss";

const TransactionItem: FC<{ transaction: ITransaction }> = ({
  transaction,
}) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "fa-shopping-cart":
        return faShoppingCart;
      case "fa-coffee":
        return faCoffee;
      case "fa-screwdriver-wrench":
        return faScrewdriverWrench;
      default:
        return faShoppingCart;
    }
  };

  return (
    <div
      className="transaction-item"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <Button to={`/transaction/${transaction.id}`} className="ti-button">
        <div className="ti-img-block">
          <div
            className="ti-img-wrapper"
            style={{ background: getRandomGradient() }}
          >
            <FontAwesomeIcon
              className="ti-img-wrapper__img"
              icon={getIcon(transaction.icon)}
            />
          </div>
        </div>
        <div className="ti-content-block">
          <div className="ti-content-block__upper">
            <span className="ti__upper-tz-name">{transaction.name}</span>
            <div className="ti__upper-amount">
              {transaction.type === "Payment" ? "+" : ""}$
              {transaction.amount.toFixed(2)}
            </div>
          </div>
          <div className="ti-content-block__middle">
            <span className="ti__middle-description">
              {transaction.status === "Pending"
                ? `Pending ${transaction.description}`
                : transaction.description}
            </span>
            {transaction.type === "Credit" ? (
              <div className="ti__middle-percent">3%</div>
            ) : (
              ""
            )}
          </div>
          <div className="ti-content-block__bottom">
            <span className="ti__bottom-user">
              {transaction.supplier ? `${transaction.supplier} - ` : ""}
              {formatTransactionDate(transaction.datetime)}
            </span>
          </div>
        </div>
        <div className="ti-icon-block">
          <FontAwesomeIcon
            className="ti-icon-block__icon"
            icon={faChevronRight}
          />
        </div>
      </Button>
    </div>
  );
};

export default TransactionItem;
