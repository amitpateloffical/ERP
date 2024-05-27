import React from "react";
import DateFilter from "../../../../../Components/Datefilter/Datefilter";
import styles from "../Reports.module.css";
import ExpenseLineChart from "../../../../../Components/Charts/ExpenseLineChart";
// import styles from "./AccountStatement.module.css";
export default function ExpenseSummary() {
  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Expense Summary</h2>
      </div>
      <div className={styles.fullWidthContainer}>
        <DateFilter />
      </div>
      <div className={styles.verticalContainer}>
        <div className={styles.item}>
          <pre>Report : </pre>
          <p>
            <b>Expense Summary</b>
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
        <ExpenseLineChart />
      </div>
      <div className={styles.reportTableContainer}>
        <table className={styles.dashboardTable}>
          <thead>
            <tr>
              <th>CATEGORY</th>
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
              <td colSpan="13">
                <b>Payment :</b>
              </td>
            </tr>
            <tr>
              <td>Rent or Lease</td>
              <td> $ 20.301,00</td>
              <td>$ 0,00</td>
              <td>$ 0,00 </td>
              <td>$ 0,00 </td>
              <td>$ 10.00</td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
            </tr>
            <tr>
              <td>Travel</td>
              <td> $ 20.301,00</td>
              <td>$ 0,00</td>
              <td>$ 0,00 </td>
              <td>$ 0,00 </td>
              <td>$ 10.00</td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
            </tr>
            <tr>
              <td colSpan="13">
                <b>Bill :</b>
              </td>
            </tr>
            <tr>
              <td colSpan="13">
                <b>Total Expense = Payment + Bill</b>
              </td>
            </tr>
            <tr>
              <td>Total Expense</td>
              <td> $ 20.301,00</td>
              <td>$ 0,00</td>
              <td>$ 0,00 </td>
              <td>$ 0,00 </td>
              <td>$ 10.00</td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
