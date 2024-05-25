import React from "react";
import DateFilter from "../../../../../Components/Datefilter/Datefilter";
import styles from "../Reports.module.css";
import BarChart2 from "../../../../../Components/Charts/Barchart2";
import Tab from "../../../../../Components/Tabs/Tabs";
export default function BillSummary() {
  const summaryContent = <BarChart2 />;
  const BillContent = (
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
            <th>Bill</th>
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
            <td>content</td>
            <td>content</td>
            <td>content</td>
            <td>content</td>
            <td>content</td>
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
            <td>content</td>
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
            <td>content</td>
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
            <td>content</td>
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
            <td>content</td>
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
    { label: "Summary", content: summaryContent },
    { label: "Bills", content: BillContent },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Bill Summary</h2>
      </div>
      <div className={styles.fullWidthContainer}>
        <DateFilter />
      </div>
      <div className={styles.verticalContainer}>
        <div className={styles.item}>
          <pre>Report : </pre>
          <p>
            <b>Bill Summary</b>
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
          <pre>Total Bill :</pre>
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
