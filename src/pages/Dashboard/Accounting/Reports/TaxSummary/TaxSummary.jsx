import React from "react";
import styles from "../Reports.module.css";
import style from "./TaxSummary.module.css";
import { FaSearch, FaTimes } from "react-icons/fa";
import Tab from "../../../../../Components/Tabs/Tabs";
export default function TaxSummary() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.fullWidthContainer}></div> */}
      <div className={styles.fullWidthContainer}>
        <div className={style.cashflowContainer}>
          <h2 className={styles.textGreen}>Tax Summary</h2>
          <div className={style.dateFilter}>
            <div className={style.field}>
              <label>Year</label>
              <select>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
              </select>
            </div>
            <button className={style.searchButton}>
              <FaSearch />
            </button>
            <button className={style.clearButton}>
              <FaTimes />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.verticalContainer}>
        <div className={styles.item}>
          <pre>Report : </pre>
          <p>
            <b>Tax Summary</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Duration : </pre>
          <p>
            <b>Dec-2023 to May-2024</b>
          </p>
        </div>
      </div>
      <div className={styles.fullWidthContainer}>
        <div className={styles.reportTableContainer}>
          <h5>Income</h5>
          <table className={styles.dashboardTable}>
            <thead>
              <tr>
                <th>TAX</th>
                <th> JANUARY</th>
                <th> FEBRUARY</th>
                <th> MARCH </th>
                <th> APRIL</th>
                <th> MAY </th>
                <th>JUNE </th>
                <th>JULY </th>
                <th>AUGUST </th>
                <th>SEPTEMBER </th>
                <th>OCTOBER </th>
                <th>NOVEMBER </th>
                <th>DECEMBER </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CGST</td>
                <td>$ 2,00</td>
                <td>$ 0,00</td>
                <td>$ 0,00 </td>
                <td>$ 0,00 </td>
                <td>$ 0,00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 10.00 </td>
              </tr>
              <tr>
                <td>SGST</td>
                <td>$ 2,00</td>
                <td>$ 0,00</td>
                <td>$ 0,00 </td>
                <td>$ 0,00 </td>
                <td>$ 0,00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 10.00 </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.reportTableContainer}>
          <h5>EXPENSE</h5>
          <table className={styles.dashboardTable}>
            <thead>
              <tr>
                <th>TAX</th>
                <th> JANUARY</th>
                <th> FEBRUARY</th>
                <th> MARCH </th>
                <th> APRIL</th>
                <th> MAY </th>
                <th>JUNE </th>
                <th>JULY </th>
                <th>AUGUST </th>
                <th>SEPTEMBER </th>
                <th>OCTOBER </th>
                <th>NOVEMBER </th>
                <th>DECEMBER </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CGST</td>
                <td>$ 2,00</td>
                <td>$ 0,00</td>
                <td>$ 0,00 </td>
                <td>$ 0,00 </td>
                <td>$ 0,00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 10.00 </td>
              </tr>
              <tr>
                <td>SGST</td>
                <td>$ 2,00</td>
                <td>$ 0,00</td>
                <td>$ 0,00 </td>
                <td>$ 0,00 </td>
                <td>$ 0,00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 0.00 </td>
                <td>$ 10.00 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
