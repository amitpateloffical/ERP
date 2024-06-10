import React from "react";
import styles from "../../AccountingSystem.module.css";
import style from "./ProfitAndLoss.module.css";
import PdfExport from "../../../../Components/Exports/Pdf/PdfExport";
import ExcelExport from "../../../../Components/Exports/Excel/ExcelExport";
export default function ProfitAndLoss() {
  const profitAndLoss = [
    {
      category: "Income",
      account: "Sales Income",
      code: "",
      total: "$328,300.00",
    },
    {
      category: "Income",
      account: "Service Income",
      code: "4020",
      total: "$3,450.00",
    },
    {
      category: "Income",
      account: "Sundry Income",
      code: "4435",
      total: "$9,975.00",
    },
    {
      category: "Income",
      account: "Total Income",
      code: "",
      total: "$13,425.00",
    },
    {
      category: "Cost of Goods Sold",
      account: "Cost of Sales- On Services",
      code: "5005",
      total: "$219,600.00",
    },
    {
      category: "Cost of Goods Sold",
      account: "Operating Costs",
      code: "5015",
      total: "$7,030.00",
    },
    {
      category: "Cost of Goods Sold",
      account: "Material Usage Variance",
      code: "5020",
      total: "$8,000.00",
    },
    {
      category: "Cost of Goods Sold",
      account: "Total Cost of Goods Sold",
      code: "",
      total: "$234,630.00",
    },
    {
      category: "Expenses",
      account: "Salaries and Wages",
      code: "5410",
      total: "$100.00",
    },
    {
      category: "Expenses",
      account: "Repairs and Maintenance",
      code: "5765",
      total: "$2,000.00",
    },
    {
      category: "Expenses",
      account: "Total Expenses",
      code: "",
      total: "$2,100.00",
    },
    {
      category: "Net Profit/Loss",
      account: "",
      code: "",
      total: "$0.00",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2 className={styles.textGreen}>Profit & Loss </h2>
            <div style={{ display: "flex", justifyContent: "space-around", minWidth: "40%" }}>
              <PdfExport contentId="profit-loss-summary" fileName="profit-loss-summary.pdf" />
              <ExcelExport data={profitAndLoss} fileName="profit-loss-summary.xlsx" />
            </div>
          </div>
        </div>
        <div className={style.balanceSheetContainer} id="profit-loss-summary">
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
