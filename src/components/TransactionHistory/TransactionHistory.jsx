import React from "react";
import styles from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={styles.wrapper}>
        <thead className={styles.listNameWrapper}>
          <tr>
            <th className={styles.listName}>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((transactionItem) => {
            return (
              <tr className={styles.tr} key={transactionItem.id}>
                <td className={styles.td}>{transactionItem.type}</td>
                <td>{transactionItem.amount}</td>
                <td>{transactionItem.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
