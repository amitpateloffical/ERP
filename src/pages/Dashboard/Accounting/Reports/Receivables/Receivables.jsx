import React from "react";
import styles from "../Reports.module.css";
import Tab from "../../../../../Components/Tabs/Tabs";
import {
  customerBalanceData,
  receivableSummaryData,
  receivableDetailsData,
  agingSummaryData,
  agingDetailData,
} from "./ReceivableFunctions.jsx";

const Receivables = () => {
  const CustomerBalance = (
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
            <th>CUSTOMER NAME</th>
            <th>INVOICE BALANCE</th>
            <th>AVAILABLE CREDITS</th>
            <th>BALANCE</th>
          </tr>
        </thead>
        <tbody>
          {customerBalanceData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.invoiceBalance}</td>
              <td>{item.availableCredits}</td>
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

  const ReceivableSummary = (
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
            <th>CUSTOMER NAME</th>
            <th>DATE</th>
            <th>TRANSACTION</th>
            <th>STATUS</th>
            <th>TRANSACTION TYPE</th>
            <th>TOTAL</th>
            <th>BALANCE</th>
          </tr>
        </thead>
        <tbody>
          {receivableSummaryData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.transaction}</td>
              <td>{item.status}</td>
              <td>{item.type}</td>
              <td>{item.total}</td>
              <td>{item.balance} </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.tableBottom}>
        <p>Showing 1 to 5 of 5 entries</p>
      </div>
    </div>
  );

  const ReceivableDetails = (
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
            <th>CUSTOMER NAME</th>
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
          {receivableDetailsData.map((item, index) => (
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

  const AgingSummary = (
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
            <th>CUSTOMER NAME</th>
            <th>CURRENT</th>
            <th>1-15 DAYS</th>
            <th>16-30 DAYS</th>
            <th>31-45 DAYS</th>
            <th> 45 DAYS</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {agingSummaryData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.current}</td>
              <td>{item.days1_15}</td>
              <td>{item.days16_30}</td>
              <td>{item.days31_45}</td>
              <td>{item.over45}</td>
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

  const AgingDetail = (
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
            <th>DATE</th>
            <th>TRANSACTION</th>
            <th>TYPE</th>
            <th>STATUS</th>
            <th>CUSTOMER NAME</th>
            <th>AGE</th>
            <th>AMOUNT</th>
            <th>BALANCE DUE</th>
          </tr>
        </thead>
        <tbody>
          {agingDetailData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.transaction}</td>
              <td>{item.type}</td>
              <td>{item.status}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.amount}</td>
              <td>{item.balanceDue}</td>
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
    { label: "Customer Balance", content: CustomerBalance },
    { label: "Receivable Summary", content: ReceivableSummary },
    { label: "Receivable Details", content: ReceivableDetails },
    { label: "Aging Summary", content: AgingSummary },
    { label: "Aging Details", content: AgingDetail },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Receivable Reports</h2>
      </div>

      <div className={styles.fullWidthContainer}>
        <Tab tabs={tabs} />
      </div>
    </div>
  );
};

export default Receivables;
