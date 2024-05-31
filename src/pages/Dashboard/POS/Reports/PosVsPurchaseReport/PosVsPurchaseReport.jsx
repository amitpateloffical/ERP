

import React from "react";
import DateFilter from "../../../../../Components/Datefilter/Datefilter";
import styles from "../Reports.module.css";
import style from "./PosVsPurchaseReport.module.css";
import LineChart from "../../../../../Components/Charts/Linechart";
import IncomeLineChart from "../../../../../Components/Charts/IncomeLineChart";
import ProfitLineChart from "../../../../../Components/Charts/ProfitLineChart";
import { FaSearch, FaTimes } from "react-icons/fa";
import ApexAreaChart from "../../../../../Components/Charts/ApexAreaChart";
// import styles from "./AccountStatement.module.css";
export default function PosVsPurchaseReport() {
    const data = [
      {
        name: "Product",
        data: [100, 110, 120, 110, 115],
      },
    ];

    const labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    
  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <div className={style.cashflowContainer}>
          <h2 className={styles.textGreen}>POS Vs Purchase</h2>
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
            <b>POS Vs Purchase</b>
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
        <ApexAreaChart
          height="400"
          colors={["#77B6EA", "#545454"]}
          data={data}
          labels={labels}
          chartTitle="Cashflow Analysis"
          xAxisTitle="Warehouse"
          yAxisTitle=""
        />
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
              <td>POS</td>
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
              <td>Purchase</td>
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
              <td colSpan="13">Profit = POS - Purchase</td>
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
