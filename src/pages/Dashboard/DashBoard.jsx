import React from "react";
import styles from "./Dashboard.module.css";
import {
  FaUser,
  FaUserTie,
  FaFileInvoice,
  FaFileAlt,
  FaMoneyBillAlt,
  FaMoneyCheckAlt,
} from "react-icons/fa";
    // import {FaUserTie, } from 'react-icons/fa'; /
import { Padding } from "@mui/icons-material";
import LineChart from "../../Components/Charts/Linechart";
import BarChart from "../../Components/Charts/Barchart";

const Dashboard = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Dashboard</h2>
      </div>
      <div className={`${styles.leftColumn} ${styles.cardDiv}`}>
        <div className={styles.vertical_cards}>
          <span
            style={{
              padding: "15%",
              backgroundColor: "#c06bd6",
              borderRadius: "33%",
              marginLeft: "25%",
            }}
          >
            <FaUser className={styles.icon} />
          </span>
          <p>Total</p>
          <h5>Customers</h5>
          <h3>17</h3>
        </div>
        <div className={styles.vertical_cards}>
          <span
            style={{
              padding: "15%",
              backgroundColor: "#c06bd6",
              borderRadius: "33%",
              marginLeft: "25%",
            }}
          >
            <FaUserTie className={styles.icon} />
          </span>
          <p>Total</p>
          <h5>Vendors</h5>
          <h3>13</h3>
        </div>
        <div className={styles.vertical_cards}>
          <span
            style={{
              padding: "15%",
              backgroundColor: "#c06bd6",
              borderRadius: "33%",
              marginLeft: "25%",
            }}
          >
            <FaFileInvoice className={styles.icon} />
          </span>
          <p>Total</p>
          <h5>Invoices</h5>
          <h3>9</h3>
        </div>
        <div className={styles.vertical_cards}>
          <span
            style={{
              padding: "15%",
              backgroundColor: "#c06bd6",
              borderRadius: "33%",
              marginLeft: "25%",
            }}
          >
            <FaFileAlt className={styles.icon} />
          </span>
          <p>Total</p>
          <h5>Bills</h5>
          <h3>7</h3>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <h5>Cashflow Chart</h5>
        <div className={styles.lineChartDiv}>
          <LineChart />
        </div>
      </div>
      <div className={styles.leftColumn}>
        <h5>Income & Expense Chart</h5>
        <div className={styles.lineChartDiv}>
          <BarChart />
        </div>
      </div>
      {/* Add more divs as needed */}
  
      <div className={`${styles.rightColumn}`}>
        <h5>Income Vs Expense</h5>
        <div className={styles.IvEdiv}>
          <div className={styles.IvEcard}>
            <div className={styles.leftIvEcard}>
              <span
                style={{
                  padding: "15%",
                  backgroundColor: "#c06bd6",
                  borderRadius: "23%",
                }}
              >
                <FaMoneyCheckAlt className={styles.icon} /> 
              </span>
            </div>
            <div className={styles.rightIvEcard}>
              <p>Income Today</p>
              <h6 className={styles.textGreen}>$ 0.00 </h6>
            </div>
          </div>
          <div className={styles.IvEcard}>
            <div className={styles.leftIvEcard}>
              <span
                style={{
                  padding: "15%",
                  backgroundColor: "#c06bd6",
                  borderRadius: "23%",
                }}
              >
                <FaMoneyBillAlt className={styles.icon} /> {/* Changed icon */}
              </span>
            </div>
            <div className={styles.rightIvEcard}>
              <p>Expense Today</p>
              <h6 className={styles.textGreen}>$ 0.00 </h6>
            </div>
          </div>
          <div className={styles.IvEcard}>
            <div className={styles.leftIvEcard}>
              <span
                style={{
                  padding: "15%",
                  backgroundColor: "#c06bd6",
                  borderRadius: "23%",
                }}
              >
                <FaMoneyCheckAlt className={styles.icon} /> {/* Changed icon */}
              </span>
            </div>
            <div className={styles.rightIvEcard}>
              <p>Income This Month</p>
              <h6 className={styles.textGreen}>$ 23762.34 </h6>
            </div>
          </div>
          <div className={styles.IvEcard}>
            <div className={styles.leftIvEcard}>
              <span
                style={{
                  padding: "15%",
                  backgroundColor: "#c06bd6",
                  borderRadius: "23%",
                }}
              >
                <FaMoneyBillAlt className={styles.icon} /> {/* Changed icon */}
              </span>
            </div>
            <div className={styles.rightIvEcard}>
              <p>Expense This month</p>
              <h6 className={styles.textGreen}>$ 0.00 </h6>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.leftColumn}>
        <h5>Account Balance </h5>
        <table className={styles.dashboardTable}>
          <thead>
            <th>Bank</th>
            <th>Holder Name</th>
            <th>Balance</th>
          </thead>
          <tbody>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
            </tr>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
            </tr>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
            </tr>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.IncomebyCatDiv}>
          <h5>Income by Category </h5>
          <p className={styles.yearP}>Year - 2024</p>
        </div>
      </div>
      <div className={styles.leftColumn}>
        <h5>Latest Income</h5>
        <table className={styles.dashboardTable}>
          <thead>
            <th>Date</th>
            <th>Customer</th>
            <th>Amount Due</th>
          </thead>
          <tbody>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
            </tr>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
            </tr>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
            </tr>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.IncomebyCatDiv}>
          <h5>Expense by Category </h5>
          <p className={styles.yearP}>Year - 2024</p>
        </div>
      </div>
      <div className={styles.leftColumn}>
        <h5>Recent Invoices</h5>
        <table className={styles.dashboardTable}>
          <thead>
            <th>#</th>
            <th>Vendor</th>
            <th>Bill Date</th>
            <th>Due Date</th>
            <th>Amount</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td className={styles.statusTd}>
                <p className={`${styles.tableContent} ${styles.statusPaid}`}>content</p>{" "}
              </td>
            </tr>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td className={styles.statusTd}>
                <p className={`${styles.tableContent} ${styles.statusPartiallypaid}`}>content</p>{" "}
              </td>
            </tr>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td className={styles.statusTd}>
                <p className={`${styles.tableContent} ${styles.statusdraft}`}>content</p>{" "}
              </td>
            </tr>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td className={styles.statusTd}>
                <p className={`${styles.tableContent} ${styles.statusPartiallypaid}`}>content</p>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.rightColumn}>
        <h5>Latest Expense</h5>
        <table className={styles.dashboardTable}>
          <thead>
            <th>Date</th>
            <th>Vendor</th>
            <th>Amount Due</th>
          </thead>
          <tbody>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
            </tr>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
            </tr>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
            </tr>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.leftColumn}>
        <h5>Recent Bills</h5>
        <table className={styles.dashboardTable}>
          <thead>
            <th>#</th>
            <th>Vendor</th>
            <th>Bill Date</th>
            <th>Due Date</th>
            <th>Amount</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td className={styles.statusTd}>
                <p className={`${styles.tableContent} ${styles.statusPaid}`}>content</p>{" "}
              </td>
            </tr>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td className={styles.statusTd}>
                <p className={`${styles.tableContent} ${styles.statusPartiallypaid}`}>content</p>{" "}
              </td>
            </tr>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td className={styles.statusTd}>
                <p className={`${styles.tableContent} ${styles.statusdraft}`}>content</p>{" "}
              </td>
            </tr>
            <tr>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td>content</td>
              <td className={styles.statusTd}>
                <p className={`${styles.tableContent} ${styles.statusPartiallypaid}`}>content</p>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.toggleheadingDiv}>
          <p className={styles.toggleActive}>Invoices Weekly Statistics</p>
          <p>Invoices Monthly Statistics</p>
        </div>
        <div style={{ marginTop: "0%" }}>
          <div className={styles.statisticsDiv}>
            <div className={styles.statisticsDivLeft}>
              <p>
                <b>Total</b>
              </p>
              <pre>Bill Generated</pre>
            </div>
            <p className={styles.textGreen}>$ 0.00</p>
          </div>
          <div className={styles.statisticsDiv}>
            <div className={styles.statisticsDivLeft}>
              <p>
                <b>Total</b>
              </p>
              <pre>Paid</pre>
            </div>
            <p className={styles.textGreen}>$ 0.00</p>
          </div>
          <div className={styles.statisticsDiv}>
            <div className={styles.statisticsDivLeft}>
              <p>
                <b>Total</b>
              </p>
              <pre>Due</pre>
            </div>
            <p className={styles.textGreen}>$ 0.00</p>
          </div>
        </div>
      </div>
      <div></div>
      <div className={styles.rightColumn}>
        <div className={styles.toggleheadingDiv}>
          <p className={styles.toggleActive}>Bills Weekly Statistics</p>
          <p>Bills Monthly Statistics</p>
        </div>
        <div style={{ marginTop: "0%" }}>
          <div className={styles.statisticsDiv}>
            <div className={styles.statisticsDivLeft}>
              <p>
                <b>Total</b>
              </p>
              <pre>Bill Generated</pre>
            </div>
            <p className={styles.textGreen}>$ 0.00</p>
          </div>
          <div className={styles.statisticsDiv}>
            <div className={styles.statisticsDivLeft}>
              <p>
                <b>Total</b>
              </p>
              <pre>Paid</pre>
            </div>
            <p className={styles.textGreen}>$ 0.00</p>
          </div>
          <div className={styles.statisticsDiv}>
            <div className={styles.statisticsDivLeft}>
              <p>
                <b>Total</b>
              </p>
              <pre>Due</pre>
            </div>
            <p className={styles.textGreen}>$ 0.00</p>
          </div>
        </div>
      </div>
      <div className={styles.fullWidthContainer}>
        <h5>Goal </h5>
        <div style={{ marginTop: "0%" }}>
          <div className={styles.statisticsDiv}>
            <div className={styles.statisticsDivLeft}>
              <pre>Name</pre>
              <p>
                <b>Bill Goal</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Type</pre>
              <p>
                <b>Bill</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Duration</pre>
              <p>
                <b>2021-04 To 2021-06</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Target</pre>
              <p>
                <b>$ 0,00 of $ 3.000,00</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Progress</pre>
              <p className={styles.progress}>
                <b>0.00%</b>
              </p>
            </div>
          </div>
          <div className={styles.statisticsDiv}>
            <div className={styles.statisticsDivLeft}>
              <pre>Name</pre>
              <p>
                <b>Bill Goal</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Type</pre>
              <p>
                <b>Bill</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Duration</pre>
              <p>
                <b>2021-04 To 2021-06</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Target</pre>
              <p>
                <b>$ 0,00 of $ 3.000,00</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Progress</pre>
              <p className={styles.progress}>
                <b>0.00%</b>
              </p>
            </div>
          </div>
          <div className={styles.statisticsDiv}>
            <div className={styles.statisticsDivLeft}>
              <pre>Name</pre>
              <p>
                <b>Bill Goal</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Type</pre>
              <p>
                <b>Bill</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Duration</pre>
              <p>
                <b>2021-04 To 2021-06</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Target</pre>
              <p>
                <b>$ 0,00 of $ 3.000,00</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Progress</pre>
              <p className={styles.progress}>
                <b>0.00%</b>
              </p>
            </div>
          </div>
          <div className={styles.statisticsDiv}>
            <div className={styles.statisticsDivLeft}>
              <pre>Name</pre>
              <p>
                <b>Bill Goal</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Type</pre>
              <p>
                <b>Bill</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Duration</pre>
              <p>
                <b>2021-04 To 2021-06</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Target</pre>
              <p>
                <b>$ 0,00 of $ 3.000,00</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Progress</pre>
              <p className={styles.progress}>
                <b>0.00%</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
