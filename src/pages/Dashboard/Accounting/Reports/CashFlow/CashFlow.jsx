import React from "react";
import styles from "../Reports.module.css";
import style from "./CashFlow.module.css";
import { FaSearch, FaTimes } from "react-icons/fa";
import Tab from "../../../../../Components/Tabs/Tabs";
export default function CashFlow() {
  const MonthlyCashflow = (
    <>
      <div className={styles.verticalContainer}>
        <div className={styles.item}>
          <pre>Report : </pre>
          <p>
            <b>Monthly CashFlow</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Duration : </pre>
          <p>
            <b>Jan-2024 to Dec-2024</b>
          </p>
        </div>
      </div>
      <div className={styles.reportTableContainer}>
        <h5>Income</h5>
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
                <b>Revenue :</b>
              </td>
            </tr>
            <tr>
              <td colSpan="13">
                <b>Invoice :</b>
              </td>
            </tr>
            <tr>
              <td>Maintenance Sales</td>
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
              <td>Product Sales</td>
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
                <b>Total Income = Revenue + Invoice</b>
              </td>
            </tr>
            <tr>
              <td>Total Income</td>
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
      <div className={styles.reportTableContainer}>
        <h5>Expense</h5>
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
      <div className={styles.reportTableContainer}>
        <h5>Net Profit</h5>
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
                <b>NET PROFIT = TOTAL INCOME - TOTAL EXPENSE</b>
              </td>
            </tr>
            <tr>
              <td>Net Profit</td>
              <td> $ 203.301,00</td>
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
    </>
  );
  const QuarterlyCashflow = (
    <>
      <div className={styles.verticalContainer}>
        <div className={styles.item}>
          <pre>Report : </pre>
          <p>
            <b>Quarterly CashFlow</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Duration : </pre>
          <p>
            <b>Jan-2024 to Dec-2024</b>
          </p>
        </div>
      </div>

      <div className={styles.reportTableContainer}>
        <h5>Income</h5>
        <table className={styles.dashboardTable}>
          <thead>
            <tr>
              <th>CATEGORY</th>
              <th> JAN - MAR</th>
              <th> APR - JUN</th>
              <th> JUL - SEP </th>
              <th> OCT - DEC</th>
              <th> TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="13">
                <b>Revenue :</b>
              </td>
            </tr>
            <tr>
              <td>Maintenance Sales</td>
              <td>$ 216.600,00</td>
              <td>$ 0,00</td>
              <td>$ 0,00</td>
              <td>$ 0.00 </td>
              <td>$ 216.600,00</td>
            </tr>
            <tr>
              <td>Product Sales</td>
              <td>$ 8.025,00</td>
              <td>$ 0,00</td>
              <td>$ 0,00 </td>
              <td>$ 0,00 </td>
              <td>$ 8.025,00</td>
            </tr>
            <tr>
              <td colSpan="13">
                <b>Invoice :</b>
              </td>
            </tr>
            <tr>
              <td>Maintenance Sales</td>
              <td>$ 216.600,00</td>
              <td>$ 0,00</td>
              <td>$ 0,00</td>
              <td>$ 0.00 </td>
              <td>$ 216.600,00</td>
            </tr>
            <tr>
              <td>Product Sales</td>
              <td>$ 8.025,00</td>
              <td>$ 0,00</td>
              <td>$ 0,00 </td>
              <td>$ 0,00 </td>
              <td>$ 8.025,00</td>
            </tr>
            <tr>
              <td colSpan="13">
                <b>Total Income = Revenue + Invoice</b>
              </td>
            </tr>
            <tr>
              <td>Total Income</td>
              <td> $ 240.225,00</td>
              <td>$ 0,00</td>
              <td>$ 0,00 </td>
              <td>$ 0,00 </td>
              <td>$ 240.225,00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.reportTableContainer}>
        <h5>Expense</h5>
        <table className={styles.dashboardTable}>
          <thead>
            <tr>
              <th>CATEGORY</th>
              <th> JAN - MAR</th>
              <th> APR - JUN</th>
              <th> JUL - SEP </th>
              <th> OCT - DEC</th>
              <th> TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="13">
                <b>Payment :</b>
              </td>
            </tr>
            <tr>
              <td>Rent Or Lease</td>
              <td>$ 26.600,00</td>
              <td>$ 0,00</td>
              <td>$ 0,00</td>
              <td>$ 0.00 </td>
              <td>$ 26.600,00</td>
            </tr>
            <tr>
              <td>Travel</td>
              <td>$ 2.900,00</td>
              <td>$ 0,00</td>
              <td>$ 0,00</td>
              <td>$ 0.00 </td>
              <td>$ 2.900,00</td>
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
              <td>$ 10.420,00</td>
              <td>$ 0,00</td>
              <td>$ 0,00</td>
              <td>$ 0.00 </td>
              <td>$ 10.420,00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.reportTableContainer}>
        <h5>Net Profit</h5>
        <table className={styles.dashboardTable}>
          <thead>
            <tr>
              <th>CATEGORY</th>
              <th> JAN - MAR</th>
              <th> APR - JUN</th>
              <th> JUL - SEP </th>
              <th> OCT - DEC</th>
              <th> TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="13">
                <b>NET PROFIT = TOTAL INCOME - TOTAL EXPENSE</b>
              </td>
            </tr>
            <tr>
              <td>Net Profit</td>
              <td> $ 203.301,00</td>
              <td>$ 0,00</td>
              <td>$ 0,00 </td>
              <td>$ 0,00 </td>
              <td>$ 203.301,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
  const tabs = [
    { label: "Monthly", content: MonthlyCashflow },
    { label: "Quarterly", content: QuarterlyCashflow },
  ];
  return (
    <div className={styles.container}>
      {/* <div className={styles.fullWidthContainer}></div> */}
      <div className={styles.fullWidthContainer}>
        <div className={style.cashflowContainer}>
          <h2 className={styles.textGreen}>Cash Flow</h2>
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

      <div className={styles.fullWidthContainer}>
        <Tab tabs={tabs} />
      </div>
    </div>
  );
}
