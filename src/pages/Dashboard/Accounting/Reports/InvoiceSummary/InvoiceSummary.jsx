import React from "react";
import DateFilter from "../../../../../Components/Datefilter/Datefilter";
// import styles from "./InvoiceSummary.module.css";
import styles from "../Reports.module.css";

import BarChart2 from "../../../../../Components/Charts/Barchart2";
import Tab from "../../../../../Components/Tabs/Tabs";
export default function InvoiceSummary() {
  const summaryContent = <BarChart2 />;
  const invoiceContent = (
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
            <th>INVOICE</th>
            <th> DATE</th>
            <th> CUSTOMER </th>
            <th> CATEGORY</th>
            <th> STATUS</th>
            <th>PAID AMOUNT </th>
            <th>DUE AMOUNT </th>
            <th>PAYMENT DATE </th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p className={styles.employeeID}>#GAU7879</p>
            </td>
            <td>Jan 7, 2024 </td>
            <td>Protiong </td>
            <td>Maintenance Sales</td>
            <td className={styles.statusTd}>
              <p className={`${styles.tableContent} ${styles.statusPaid}`}>Paid</p>{" "}
            </td>
            <td>$ 204.504,00</td>
            <td>$ 4.221,00</td>
            <td> </td>
            <td>$ 208.725,00</td>
          </tr>
          <tr>
            <td>
              <p className={styles.employeeID}>#GAU7879</p>
            </td>
            <td>Jan 7, 2024 </td>
            <td>Protiong </td>
            <td>Maintenance Sales</td>
            <td className={styles.statusTd}>
              <p className={`${styles.tableContent} ${styles.statusPaid}`}>Paid</p>{" "}
            </td>
            <td>$ 204.504,00</td>
            <td>$ 4.221,00</td>
            <td> </td>
            <td>$ 208.725,00</td>
          </tr>
          <tr>
            <td>
              <p className={styles.employeeID}>#GAU7879</p>
            </td>
            <td>Jan 7, 2024 </td>
            <td>Protiong </td>
            <td>Maintenance Sales</td>
            <td className={styles.statusTd}>
              <p className={`${styles.tableContent} ${styles.statusPaid}`}>Paid</p>{" "}
            </td>
            <td>$ 204.504,00</td>
            <td>$ 4.221,00</td>
            <td> </td>
            <td>$ 208.725,00</td>
          </tr>
          <tr>
            <td>
              <p className={styles.employeeID}>#GAU7879</p>
            </td>
            <td>Jan 7, 2024 </td>
            <td>Protiong </td>
            <td>Maintenance Sales</td>
            <td className={styles.statusTd}>
              <p className={`${styles.tableContent} ${styles.statusPaid}`}>Paid</p>{" "}
            </td>
            <td>$ 204.504,00</td>
            <td>$ 4.221,00</td>
            <td> </td>
            <td>$ 208.725,00</td>
          </tr>
          <tr>
            <td>
              <p className={styles.employeeID}>#GAU7879</p>
            </td>
            <td>Jan 7, 2024 </td>
            <td>Protiong </td>
            <td>Maintenance Sales</td>
            <td className={styles.statusTd}>
              <p className={`${styles.tableContent} ${styles.statusPaid}`}>Paid</p>{" "}
            </td>
            <td>$ 204.504,00</td>
            <td>$ 4.221,00</td>
            <td> </td>
            <td>$ 208.725,00</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.tableBottom}>
        <p>Showing 1 to 5 of 5 entries</p>
      </div>
    </div>
  );

  const tabs = [
    { label: "Summary", content: summaryContent },
    { label: "Invoices", content: invoiceContent },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Invoice Summary</h2>
      </div>
      <div className={styles.fullWidthContainer}>
        <DateFilter />
      </div>
      <div className={styles.verticalContainer}>
        <div className={styles.item}>
          <pre>Report : </pre>
          <p>
            <b>Invoice Summary</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Duration : </pre>
          <p>
            <b>Jan-2024 to Dec-2024</b>
          </p>
        </div>
      </div>
      <div className={styles.verticalContainer}>
        <div className={styles.item}>
          <pre>Total Invoice :</pre>
          <p>
            <b>$ 328.125,00</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Total Paid :</pre>
          <p>
            <b>$ 15.893,00</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Total Due :</pre>
          <p>
            <b>$ 312.232,00</b>
          </p>
        </div>
      </div>

      <div className={styles.fullWidthContainer}>
        <Tab tabs={tabs} />
      </div>
    </div>
  );
}
