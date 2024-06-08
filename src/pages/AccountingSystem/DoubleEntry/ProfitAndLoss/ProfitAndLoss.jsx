import React from "react";
import styles from "../../AccountingSystem.module.css";
import style from "./ProfitAndLoss.module.css";
export default function ProfitAndLoss() {
  const transactions = [
    {
      invoiceID: "INV001",
      vendor: "ABC Supplies",
      date: "2024-01-15",
      amount: 250.0,
      description: "Purchased office chairs",
    },
    {
      invoiceID: "INV002",
      vendor: "XYZ Technologies",
      date: "2024-01-20",
      amount: 150.0,
      description: "Annual software subscription",
    },
    {
      invoiceID: "INV003",
      vendor: "123 Electronics",
      date: "2024-02-10",
      amount: 500.0,
      description: "Computer hardware purchase",
    },
    {
      invoiceID: "INV004",
      vendor: "Best Books Store",
      date: "2024-02-28",
      amount: 120.0,
      description: "Educational books purchase",
    },
    // Add more transactions as needed
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Profit & Loss</h2>
        </div>
        <div className={style.balanceSheetContainer}>
          <h4 style={{ textAlign: "center", marginBottom: "5%" }}>
            Profit & Loss of Workdo as of 2024-01-01 to 2024-06-09
          </h4>
          <table style={{ width: "100%" }}>
            <thead>
              <th style={{ width: "50%" }}>Account</th>
              <th> Account Code </th>
              <th>Total</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className={style.listHead}>Income</p>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <p style={{ paddingLeft: "6%" }} className={style.dollarSigntd}>
                    Sales Income
                  </p>{" "}
                </td>
                {/* <td>1060</td> */}
                <td className={style.dollarSigntd}>$ 328.300,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Service Income </p>{" "}
                </td>
                <td>4020</td>
                <td className={style.dollarSigntd}>$ 3.450,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Sundry Income </p>{" "}
                </td>
                <td>4435</td>
                <td className={style.dollarSigntd}>$ 9.975,00</td>
              </tr>
              <tr>
                <td>
                  <p className={`${style.subhead} ${style.paddingsubhead}`}>Total Income</p>
                </td>
                <td></td>
                <td style={{ fontWeight: "500" }}>
                  <p className={style.subhead}>$ 13.425,00</p>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <p className={style.listHead}>Cost of Goods Sold</p>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Cost of Sales- On Services </p>{" "}
                </td>
                <td>5005</td>
                <td className={style.dollarSigntd}> $ 219.600,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Operating Costs </p>{" "}
                </td>
                <td>5015</td>
                <td className={style.dollarSigntd}>$ 7.030,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Material Usage Varaiance </p>{" "}
                </td>
                <td>5020</td>
                <td className={style.dollarSigntd}>$ 8.000,00</td>
              </tr>
              <tr>
                <td>
                  <p className={`${style.subhead} ${style.paddingsubhead}`}>
                    Total Cost of Goods Sold
                  </p>{" "}
                </td>
                <td></td>
                <td style={{ fontWeight: "500" }}>
                  <p className={style.subhead}>$ 234.630,00</p>
                </td>
              </tr>

              <tr>
                <td>
                  <p className={style.listHead}>Expenses</p>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Salaries and Wages </p>{" "}
                </td>
                <td>5410</td>
                <td className={style.dollarSigntd}> $ 100,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Repairs and Maintenance </p>{" "}
                </td>
                <td>5765</td>
                <td className={style.dollarSigntd}>$ 2.000,00</td>
              </tr>
              <tr>
                <td>
                  <p className={`${style.subhead} ${style.paddingsubhead}`}>Total Expenses</p>
                </td>
                <td></td>
                <td style={{ fontWeight: "500" }}>
                  <p className={style.subhead}>$ 2.100,00</p>
                </td>
              </tr>

              <tr>
                <td colSpan={3}>
                  <div className={style.tophead}>
                    <p>Net Profit/Loss</p>
                    <p>$ 0,00</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
