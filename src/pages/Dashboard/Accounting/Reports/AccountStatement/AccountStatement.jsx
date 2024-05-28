import React from "react";
import DateFilter from "../../../../../Components/Datefilter/Datefilter";
import styles from "../Reports.module.css";

const accountStatements = [
  {
    date: "Jan 07, 2024",
    amount: "$ 500,00",
    description: "Small Description",
  },
  {
    date: "Jan 29, 2024",
    amount: "$ 9900,00",
    description: "Description",
  },
  {
    date: "Apr 27, 2024",
    amount: "$ 500,000",
    description: "Test Description",
  },
  {
    date: "Dec 11, 2024",
    amount: "$ 1500,00",
    description: "More Description",
  },
];

const AccountRow = ({ statement }) => (
  <tr>
    <td>{statement.date}</td>
    <td>{statement.amount}</td>
    <td>{statement.description}</td>
  </tr>
);

export default function AccountStatement() {
  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Account Statement Summary</h2>
      </div>
      <div className={styles.fullWidthContainer}>
        <DateFilter />
      </div>
      <div className={styles.verticalContainer}>
        <div className={styles.item}>
          <pre>Report : </pre>
          <p>
            <b>Account Statement Summary</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Type : </pre>
          <p>
            <b>Revenue</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Duration : </pre>
          <p>
            <b>Dec-2023 to May-2024</b>
          </p>
        </div>
      </div>
      <div className={styles.verticalContainer}>
        <div className={styles.item}>
          <pre>Cash - </pre>
          <p>
            <b>$ 300,00</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Benjamin Adams - ROUNDBANK -</pre>
          <p>
            <b>$ 10.000,00</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Chisom Latifat - COBIZ BANK -</pre>
          <p>
            <b>$ 5.000,00</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Earl Hane MD - US BANK, NA -</pre>
          <p>
            <b>$ 100,00</b>
          </p>
        </div>
      </div>

      <div className={styles.fullWidthContainer}>
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
                <th>Date</th>
                <th>Amount</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {accountStatements.map((statement, index) => (
                <AccountRow key={index} statement={statement} />
              ))}
            </tbody>
          </table>
          <div className={styles.tableBottom}>
            <p>
              Showing 1 to {accountStatements.length} of {accountStatements.length} entries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
