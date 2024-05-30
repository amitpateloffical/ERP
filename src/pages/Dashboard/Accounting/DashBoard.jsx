import React from "react";
import styles from "./Dashboard.module.css";
import {
  FaUser,
  FaUserTie,
  FaFileInvoice,
  FaFileAlt,
  FaMoneyBillAlt,
  FaMoneyCheckAlt,
  FaHandHoldingUsd,
  FaMoneyBillWave,
  FaWallet,
  FaCashRegister,
} from "react-icons/fa";
// import {FaUserTie, } from 'react-icons/fa'; /
import { Padding } from "@mui/icons-material";
import LineChart from "../../../Components/Charts/Linechart";
import BarChart from "../../../Components/Charts/Barchart";
import Tab from "../../../Components/Tabs/Tabs";

const Dashboard = () => {
  const InvoiceWeeklyContent = (
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
  );
  const InvoiceMonthlyContent = (
    <div style={{ marginTop: "0%" }}>
      <div className={styles.statisticsDiv}>
        <div className={styles.statisticsDivLeft}>
          <p>
            <b>Total</b>
          </p>
          <pre>Bill Generated</pre>
        </div>
        <p className={styles.textGreen}>$ 10.00</p>
      </div>
      <div className={styles.statisticsDiv}>
        <div className={styles.statisticsDivLeft}>
          <p>
            <b>Total</b>
          </p>
          <pre>Paid</pre>
        </div>
        <p className={styles.textGreen}>$ 10.00</p>
      </div>
      <div className={styles.statisticsDiv}>
        <div className={styles.statisticsDivLeft}>
          <p>
            <b>Total</b>
          </p>
          <pre>Due</pre>
        </div>
        <p className={styles.textGreen}>$ 10.00</p>
      </div>
    </div>
  );

  const tabs1 = [
    { label: "Invoices Weekly Statistics", content: InvoiceWeeklyContent },
    { label: "Invoices Monthly Statistics", content: InvoiceMonthlyContent },
  ];
  const tabs2 = [
    { label: "Bills Weekly Statistics", content: InvoiceWeeklyContent },
    { label: "Bills Monthly Statistics", content: InvoiceMonthlyContent },
  ];
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
          <LineChart height={280} />
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
                  padding: "12%",
                  // backgroundColor: "#c06bd6",
                  backgroundColor: "green",
                  borderRadius: "23%",
                }}
              >
                <FaHandHoldingUsd className={styles.icon} />
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
                  padding: "12%",
                  // backgroundColor: "#c06bd6",
                  backgroundColor: "#e06c28",
                  borderRadius: "23%",
                }}
              >
                <FaMoneyBillWave className={styles.icon} /> {/* Changed icon */}
              </span>
            </div>
            <div className={styles.rightIvEcard}>
              <p>Expense Today</p>
              <h6 className={styles.textGreen1}>$ 0.00 </h6>
            </div>
          </div>
          <div className={styles.IvEcard}>
            <div className={styles.leftIvEcard}>
              <span
                style={{
                  padding: "12%",
                  backgroundColor: "green",
                  // backgroundColor: "#c06bd6",
                  borderRadius: "23%",
                }}
              >
                <FaWallet className={styles.icon} /> {/* Changed icon */}
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
                  padding: "12%",
                  // backgroundColor: "#c06bd6",
                  backgroundColor: "#e06c28",
                  borderRadius: "23%",
                }}
              >
                <FaCashRegister className={styles.icon} /> {/* Changed icon */}
              </span>
            </div>
            <div className={styles.rightIvEcard}>
              <p>Expense This month</p>
              <h6 className={styles.textGreen1}>$ 0.00 </h6>
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
              <td></td>
              <td>Cash </td>
              <td>$ 2.451.297,51</td>
            </tr>
            <tr>
              <td>ROUNDBANK </td>
              <td>Benjamin Adams</td>
              <td> $ -31.199,40</td>
            </tr>
            <tr>
              <td>COBIZ BANK </td>
              <td>Chisom Latifat </td>
              <td>$ 68.173,00</td>
            </tr>
            <tr>
              <td>US BANK, NA </td>
              <td>Earl Hane MD</td>
              <td>$ -939.007,00</td>
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
              <td>Jan 7, 2024 </td>
              <td>Ida F. Mullen</td>
              <td>$ 500,00</td>
            </tr>
            <tr>
              <td>Jan 31, 2024 </td>
              <td>Keire</td>
              <td>$ 100,00</td>
            </tr>
            <tr>
              <td>Jan 4, 2024 </td>
              <td>Protiong</td>
              <td>$ 5.000,00</td>
            </tr>
            <tr>
              <td>Jan 28, 2024 </td>
              <td>Protiong</td>
              <td>$ 5.000,00</td>
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
      {/* <div className={styles.rightColumn}>
        <div className={styles.IncomebyCatDiv}>
          <h5>Expense by Category </h5>
          <p className={styles.yearP}>Year - 2024</p>
        </div>
      </div> */}
      <div className={styles.leftColumn}>
        <h5>Recent Invoices</h5>
        <table className={styles.dashboardTable}>
          <thead>
            <th>#</th>
            <th>Customer</th>
            <th>Bill Date</th>
            <th>Due Date</th>
            <th>Amount</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className={styles.employeeID}>#GAU7879</p>
              </td>
              <td>Keire</td>
              <td>May 28, 2024 </td>
              <td>Jan 15, 2024 </td>
              <td>$ 208.725,00 </td>
              <td className={styles.statusTd}>
                <p className={`${styles.tableContent} ${styles.statusPaid}`}>Paid</p>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className={styles.employeeID}>#GAU7879</p>
              </td>
              <td>Protiong</td>
              <td>Jul 21, 2024 </td>
              <td>Jan 15, 2024 </td>
              <td>$ 308.725,00 </td>
              <td className={styles.statusTd}>
                <p className={`${styles.tableContent} ${styles.statusPartiallypaid}`}>
                  Partially Paid
                </p>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className={styles.employeeID}>#GAU7879</p>
              </td>
              <td>Preston Watkins</td>
              <td>Jan 28, 2024 </td>
              <td>Mar 22, 2024 </td>
              <td>$ 08.725,00 </td>
              <td className={styles.statusTd}>
                <p className={`${styles.tableContent} ${styles.statusdraft}`}>draft</p>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className={styles.employeeID}>#GAU7879</p>
              </td>
              <td>Mariko Gonzales</td>
              <td>Dec 17, 2024 </td>
              <td>Apr 30, 2024 </td>
              <td>$ 208.725,00 </td>
              <td className={styles.statusTd}>
                <p className={`${styles.tableContent} ${styles.statusPartiallypaid}`}>
                  Partially Paid
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div className={styles.rightColumn}>
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
      </div> */}
      <div className={styles.rightColumn}>
        <Tab tabs={tabs2} />
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
              <td>
                <p className={styles.employeeID}>#GAU7879</p>
              </td>
              <td>Wesley Zimmerman</td>
              <td>May 28, 2024 </td>
              <td>Jan 15, 2024 </td>
              <td>$ 208.725,00 </td>
              <td className={styles.statusTd}>
                <p className={`${styles.tableContent} ${styles.statusPaid}`}>Paid</p>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className={styles.employeeID}>#GAU7879</p>
              </td>
              <td>Anthony B Renfroe</td>
              <td>Jul 21, 2024 </td>
              <td>Jan 15, 2024 </td>
              <td>$ 308.725,00 </td>
              <td className={styles.statusTd}>
                <p className={`${styles.tableContent} ${styles.statusPaid}`}>Paid</p>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className={styles.employeeID}>#GAU7879</p>
              </td>
              <td>Preston Watkins</td>
              <td>Jan 28, 2024 </td>
              <td>Mar 22, 2024 </td>
              <td>$ 08.725,00 </td>
              <td className={styles.statusTd}>
                <p className={`${styles.tableContent} ${styles.statusPaid}`}>Paid</p>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <p className={styles.employeeID}>#GAU7879</p>
              </td>
              <td> Kim J Gibson</td>
              <td>Dec 17, 2024 </td>
              <td>Apr 30, 2024 </td>
              <td>$ 208.725,00 </td>
              <td className={styles.statusTd}>
                <p className={`${styles.tableContent} ${styles.statusdraft}`}>Draft</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.rightColumn}>
        <Tab tabs={tabs1} />
        {/* <div className={styles.toggleheadingDiv}>
          <p className={styles.toggleActive}>Invoices Weekly Statistics</p>
          <p>Invoices Monthly Statistics</p>
        </div> */}
        {/* <div style={{ marginTop: "0%" }}>
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
        </div> */}
      </div>
      <div></div>
      {/* <div className={styles.rightColumn}>
        <Tab tabs={tabs2} />
      </div> */}
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
                <b>Invoice Goal</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Type</pre>
              <p>
                <b>Invoice</b>
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
                <b>Payment Goal</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Type</pre>
              <p>
                <b>Payment</b>
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
                <b>Revenue Goal</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Type</pre>
              <p>
                <b>Revenue</b>
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
