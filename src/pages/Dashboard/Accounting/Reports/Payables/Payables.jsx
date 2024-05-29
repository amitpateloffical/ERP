import React from "react";
import styles from "../Reports.module.css";
import Tab from "../../../../../Components/Tabs/Tabs";

const payablesData = {
  vendorBalance: [
    { name: "Vendor A", billedAmount: "$500", availableDebit: "$50", closingBalance: "$450" },
    { name: "Vendor B", billedAmount: "$300", availableDebit: "$30", closingBalance: "$270" },
    { name: "Vendor C", billedAmount: "$700", availableDebit: "$70", closingBalance: "$630" },
    { name: "Vendor D", billedAmount: "$400", availableDebit: "$40", closingBalance: "$360" },
    { name: "Vendor E", billedAmount: "$200", availableDebit: "$20", closingBalance: "$180" },
  ],
  payableSummary: [
    {
      name: "Vendor A",
      date: "2023-05-01",
      transaction: "Invoice",
      status: "Paid",
      type: "Credit",
      total: "$500",
      balance: "$0",
    },
    {
      name: "Vendor B",
      date: "2023-05-02",
      transaction: "Invoice",
      status: "Unpaid",
      type: "Debit",
      total: "$300",
      balance: "$300",
    },
    {
      name: "Vendor C",
      date: "2023-05-03",
      transaction: "Payment",
      status: "Pending",
      type: "Credit",
      total: "$700",
      balance: "$350",
    },
    {
      name: "Vendor D",
      date: "2023-05-04",
      transaction: "Invoice",
      status: "Paid",
      type: "Credit",
      total: "$400",
      balance: "$0",
    },
    {
      name: "Vendor E",
      date: "2023-05-05",
      transaction: "Payment",
      status: "Unpaid",
      type: "Debit",
      total: "$200",
      balance: "$100",
    },
  ],
  payableDetails: [
    {
      name: "Vendor A",
      date: "2023-05-01",
      transaction: "Invoice",
      status: "Paid",
      type: "Credit",
      item: "Product A",
      quantity: 10,
      price: "$50",
      total: "$500",
    },
    {
      name: "Vendor B",
      date: "2023-05-02",
      transaction: "Invoice",
      status: "Unpaid",
      type: "Debit",
      item: "Product B",
      quantity: 5,
      price: "$60",
      total: "$300",
    },
    {
      name: "Vendor C",
      date: "2023-05-03",
      transaction: "Payment",
      status: "Pending",
      type: "Credit",
      item: "Product C",
      quantity: 7,
      price: "$100",
      total: "$700",
    },
    {
      name: "Vendor D",
      date: "2023-05-04",
      transaction: "Invoice",
      status: "Paid",
      type: "Credit",
      item: "Product D",
      quantity: 4,
      price: "$100",
      total: "$400",
    },
    {
      name: "Vendor E",
      date: "2023-05-05",
      transaction: "Payment",
      status: "Unpaid",
      type: "Debit",
      item: "Product E",
      quantity: 2,
      price: "$100",
      total: "$200",
    },
  ],
};

const Payables = () => {
  const VendorBalance = (
    <div className={styles.reportTableContainer}>
      <div className={styles.tableTop}>
        <div className={styles.tableTopleft}>
          <select>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
          <p>entries per Page</p>
        </div>
        <div className={styles.field}>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <table className={styles.dashboardTable}>
        <thead>
          <tr>
            <th>VENDOR NAME</th>
            <th>BILLED AMOUNT</th>
            <th>AVAILABLE DEBIT</th>
            <th>CLOSING BALANCE</th>
          </tr>
        </thead>
        <tbody>
          {payablesData.vendorBalance.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.billedAmount}</td>
              <td>{item.availableDebit}</td>
              <td>{item.closingBalance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.tableBottom}>
        <p>Showing 1 to 5 of 5 entries</p>
      </div>
    </div>
  );

  const PayableSummary = (
    <div className={styles.reportTableContainer}>
      <div className={styles.tableTop}>
        <div className={styles.tableTopleft}>
          <select>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
          <p>entries per Page</p>
        </div>
        <div className={styles.field}>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <table className={styles.dashboardTable}>
        <thead>
          <tr>
            <th>VENDOR NAME</th>
            <th>DATE</th>
            <th>TRANSACTION</th>
            <th>STATUS</th>
            <th>TRANSACTION TYPE</th>
            <th>TOTAL</th>
            <th>BALANCE</th>
          </tr>
        </thead>
        <tbody>
          {payablesData.payableSummary.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.transaction}</td>
              <td>{item.status}</td>
              <td>{item.type}</td>
              <td>{item.total}</td>
              <td>{item.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.tableBottom}>
        <p>Showing 1 to 5 of 5 entries</p>
      </div>
    </div>
  );

  const PayableDetails = (
    <div className={styles.reportTableContainer}>
      <div className={styles.tableTop}>
        <div className={styles.tableTopleft}>
          <select>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
          <p>entries per Page</p>
        </div>
        <div className={styles.field}>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <table className={styles.dashboardTable}>
        <thead>
          <tr>
            <th>VENDOR NAME</th>
            <th>DATE</th>
            <th>TRANSACTION</th>
            <th>STATUS</th>
            <th>TRANSACTION TYPE</th>
            <th>ITEM NAME</th>
            <th>QUANTITY ORDERED</th>
            <th>ITEM PRICE</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {payablesData.payableDetails.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.transaction}</td>
              <td>{item.status}</td>
              <td>{item.type}</td>
              <td>{item.item}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.tableBottom}>
        <p>Showing 1 to 5 of 5 entries</p>
      </div>
    </div>
  );

  const tabs = [
    { label: "Vendor Balance", content: VendorBalance },
    { label: "Payable Summary", content: PayableSummary },
    { label: "Payable Details", content: PayableDetails },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Payable Reports</h2>
      </div>
      <div className={styles.fullWidthContainer}>
        <Tab tabs={tabs} />
      </div>
    </div>
  );
};

export default Payables;
