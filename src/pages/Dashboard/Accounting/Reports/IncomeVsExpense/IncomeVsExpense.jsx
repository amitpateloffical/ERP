import React from "react";
import DateFilter from "../../../../../Components/Datefilter/Datefilter";
import styles from "../Reports.module.css";
import LineChart from "../../../../../Components/Charts/Linechart";
import IncomeLineChart from "../../../../../Components/Charts/IncomeLineChart";
import ProfitLineChart from "../../../../../Components/Charts/ProfitLineChart";
// import styles from "./AccountStatement.module.css";
export default function IncomeVsExpense() {
  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Income vs Expense Summary</h2>
      </div>
      <div className={styles.fullWidthContainer}>
        <DateFilter />
      </div>
      <div className={styles.verticalContainer}>
        <div className={styles.item}>
          <pre>Report : </pre>
          <p>
            <b>Income vs Expense Summary</b>
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
        <ProfitLineChart />
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
                <b>Income :</b>
              </td>
            </tr>
            <tr>
              <td>Revenue</td>
              <td>$ 216.600,00</td>
              <td>$ 0,00</td>
              <td>$ 0,00 </td>
              <td>$ 0,00 </td>
              <td>$ 103.500,00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
            </tr>
            <tr>
              <td>Invoice</td>
              <td>$ 8.025,00</td>
              <td>$ 0,00</td>
              <td>$ 0,00 </td>
              <td>$ 0,00 </td>
              <td>$ 4.03 </td>
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
                <b>Expense :</b>
              </td>
            </tr>
            <tr>
              <td>Payment</td>
              <td>$ 216.600,00</td>
              <td>$ 0,00</td>
              <td>$ 0,00 </td>
              <td>$ 0,00 </td>
              <td>$ 103.500,00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
              <td>$ 0.00 </td>
            </tr>
            <tr>
              <td>Bill</td>
              <td>$ 8.025,00</td>
              <td>$ 0,00</td>
              <td>$ 0,00 </td>
              <td>$ 0,00 </td>
              <td>$ 4.03 </td>
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
                <b>Profit = Income - Expense</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Profit</b>
              </td>
              <td> $ 240.225,00</td>
              <td>$ 0,00</td>
              <td>$ 0,00 </td>
              <td>$ 0,00 </td>
              <td>$ 104.300,00</td>
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
