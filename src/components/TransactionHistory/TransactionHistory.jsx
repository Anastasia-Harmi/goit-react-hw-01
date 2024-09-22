import React from "react";

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((transactionItem) => {
            return (
              <tr key={transactionItem.id}>
                <td>{transactionItem.type}</td>
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
