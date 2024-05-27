import React from "react";
import DateFilter from "../../../../../Components/Datefilter/Datefilter";
import styles from "../Reports.module.css";
// import styles from "./AccountStatement.module.css";
export default function ProductStock() {
  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Product Stock</h2>
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
              <th>DATE </th>
              <th>PRODUCT NAME</th>
              <th>QUANTITY </th>
              <th>TYPE </th>
              <th>DESCRIPTION </th>
            </thead>
            <tbody>
              <tr>
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
              </tr>
              <tr>
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
              </tr>
              <tr>
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
              </tr>
            </tbody>
          </table>
          <div className={styles.tableBottom}>
            <p>Showing 1 to 5 of 5 entries</p>
          </div>
        </div>
      </div>
    </div>
  );
}
