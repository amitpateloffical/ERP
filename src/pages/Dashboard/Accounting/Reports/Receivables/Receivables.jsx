import React from "react";
import styles from "../Reports.module.css";
import Tab from "../../../../../Components/Tabs/Tabs";
export default function Receivables() {
  const salesbyItemTabContent = (
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
            <th>INVOICE ITEM</th>
            <th>QUANTITY SOLD </th>
            <th>AMOUNT </th>
            <th>AVERAGE PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>content</td>
            <td>content</td>
            <td>content</td>
            <td>content</td>
          </tr>
          <tr>
            <td>content</td>
            <td>content</td>
            <td>content</td>
            <td>content</td>
          </tr>
          <tr>
            <td>content</td>
            <td>content</td>
            <td>content</td>
            <td>content</td>
          </tr>
          <tr>
            <td>content</td>
            <td>content</td>
            <td>content</td>
            <td>content</td>
          </tr>
          <tr>
            <td>content</td>
            <td>content</td>
            <td>content</td>
            <td>content</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.tableBottom}>
        <p>Showing 1 to 5 of 5 entries</p>
      </div>
    </div>
  );

  const salesbyCustomerTabContent = (
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
            <th>CUSTOMER NAME </th>
            <th>INVOICE COUNT </th>
            <th>SALES</th>
            <th> SALES WITH TAX </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>content</td>
            <td>content</td>
            <td>content</td>
            <td>content</td>
          </tr>
          <tr>
            <td>content</td>
            <td>content</td>
            <td>content</td>
            <td>content</td>
          </tr>
          <tr>
            <td>content</td>
            <td>content</td>
            <td>content</td>
            <td>content</td>
          </tr>
          <tr>
            <td>content</td>
            <td>content</td>
            <td>content</td>
            <td>content</td>
          </tr>
          <tr>
            <td>content</td>
            <td>content</td>
            <td>content</td>
            <td>content</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.tableBottom}>
        <p>Showing 1 to 5 of 5 entries</p>
      </div>
    </div>
  );

  const tabs = [
    { label: "Customer Balance", content: salesbyItemTabContent },
    { label: "Receivable Summary ", content: salesbyCustomerTabContent },
    { label: "Receivable Details ", content: salesbyCustomerTabContent },
    { label: "Aging Summary ", content: salesbyCustomerTabContent },
    { label: "Aging Details ", content: salesbyCustomerTabContent },
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
}