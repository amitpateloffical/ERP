import React from "react";
import styles from "../../AccountingSystem.module.css";
import style from "./TrialBalance.module.css";
import PdfExport from "../../../../Components/Exports/Pdf/PdfExport";
import ExcelExport from "../../../../Components/Exports/Excel/ExcelExport";
export default function TrialBalance() {
const balanceSheet = [
  {
    category: "Assets",
    account: "Petty Cash",
    code: "1065",
    debit: "$ 96,444.00",
    credit: "$ 5,000.00",
  },
  {
    category: "Assets",
    account: "Account Receivables",
    code: "1200",
    debit: "$ 11,325.00",
    credit: "$ 3,200.00",
  },
  {
    category: "Assets",
    account: "Allowance for doubtful accounts",
    code: "1205",
    debit: "$ 1,905.00",
    credit: "$ 0.00",
  },
  {
    category: "Assets",
    account: "Inventory",
    code: "1510",
    debit: "$ 1,650.00",
    credit: "$ 100.00",
  },
  {
    category: "Assets",
    account: "Stock of Raw Materials",
    code: "1520",
    debit: "$ 0.00",
    credit: "$ 2,000.00",
  },
  {
    category: "Assets",
    account: "Stock of Work In Progress",
    code: "1530",
    debit: "$ 100.00",
    credit: "$ 0.00",
  },
  {
    category: "Assets",
    account: "Land and Buildings",
    code: "1810",
    debit: "$ 150.00",
    credit: "$ 0.00",
  },
  {
    category: "Assets",
    account: "Checking Account",
    code: "",
    debit: "$ 9,720.00",
    credit: "$ 10,650.00",
  },
  {
    category: "Liabilities",
    account: "Account Payable",
    code: "2100",
    debit: "$ 160.00",
    credit: "$ 100.00",
  },
  {
    category: "Liabilities",
    account: "Deferred Income",
    code: "2105",
    debit: "$ 190.00",
    credit: "$ 0.00",
  },
  {
    category: "Liabilities",
    account: "Accrued Franchise Tax",
    code: "2130",
    debit: "$ 650.00",
    credit: "$ 0.00",
  },
  {
    category: "Liabilities",
    account: "Vat Provision",
    code: "2140",
    debit: "$ 0.00",
    credit: "$ 1,500.00",
  },
  {
    category: "Liabilities",
    account: "Purchase Tax",
    code: "2145",
    debit: "$ 140.00",
    credit: "$ 0.00",
  },
  {
    category: "Liabilities",
    account: "Accrued Holiday Pay",
    code: "2230",
    debit: "$ 140.00",
    credit: "$ 0.00",
  },
  {
    category: "Liabilities",
    account: "Common Shares",
    code: "",
    debit: "$ 100.00",
    credit: "$ 0.00",
  },
  {
    category: "Income",
    account: "Service Income",
    code: "4020",
    debit: "$ 0.00",
    credit: "$ 3,450.00",
  },
  {
    category: "Income",
    account: "Sundry Income",
    code: "4435",
    debit: "$ 0.00",
    credit: "$ 9,975.00",
  },
  {
    category: "Income",
    account: "Sales Income",
    code: "",
    debit: "$ 0.00",
    credit: "$ 328,300.00",
  },
  {
    category: "Costs of Goods Sold",
    account: "Cost of Sales - On Services",
    code: "5005",
    debit: "$ 219,600.00",
    credit: "$ 0.00",
  },
  {
    category: "Costs of Goods Sold",
    account: "Operating Costs",
    code: "5015",
    debit: "$ 7,030.00",
    credit: "$ 0.00",
  },
  {
    category: "Costs of Goods Sold",
    account: "Material Usage Variance",
    code: "5020",
    debit: "$ 8,000.00",
    credit: "$ 0.00",
  },
  {
    category: "Expenses",
    account: "Salaries and Wages",
    code: "5410",
    debit: "$ 100.00",
    credit: "$ 0.00",
  },
  {
    category: "Expenses",
    account: "Repairs and Maintenance",
    code: "5765",
    debit: "$ 2,000.00",
    credit: "$ 0.00",
  },
  {
    category: "Total",
    account: "",
    code: "",
    debit: "$ 359,404.00",
    credit: "$ 364,275.00",
  },
];


  // Export balanceSheet object as an Excel file using a library like xlsx or similar

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2 className={styles.textGreen}>Trial Balance </h2>
            <div style={{ display: "flex", justifyContent: "space-around", minWidth: "40%" }}>
              <PdfExport contentId="trial-balance-summary" fileName="trial-balance-summary.pdf" />
              <ExcelExport data={balanceSheet} fileName="trial-balance-summary.xlsx" />
            </div>
          </div>
        </div>
        <div className={style.balanceSheetContainer} id="trial-balance-summary">
          <h4 style={{ textAlign: "center", marginBottom: "5%" }}>
            Trial Balance of Workdo as of 2024-01-01 to 2024-06-09
          </h4>
          <table style={{ width: "100%" }}>
            <thead>
              <th style={{ width: "50%" }}>Account</th>
              <th> Account Code </th>
              <th>Debit</th>
              <th>Credit</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className={style.listHead}>Assets</p>
                </td>
              </tr>

              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Petty Cash </p>{" "}
                </td>
                <td>1065</td>
                <td className={style.dollarSigntd}>$ 96.444,00</td>
                <td className={style.dollarSigntd}>$ 5.000,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Account Receivables </p>
                </td>
                <td>1200</td>
                <td className={style.dollarSigntd}>$ 11.325,00</td>
                <td className={style.dollarSigntd}>$ 3.200,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Allowance for doubtful accounts </p>
                </td>
                <td>1205</td>
                <td className={style.dollarSigntd}>$ 1.905,00</td>
                <td className={style.dollarSigntd}>$ 0,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Inventory </p>
                </td>
                <td>1510</td>
                <td className={style.dollarSigntd}>$ 1.650,00</td>
                <td className={style.dollarSigntd}>$ 100,00 </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Stock of Raw Materials</p>
                </td>
                <td>1520</td>
                <td className={style.dollarSigntd}>$ 0,00</td>
                <td className={style.dollarSigntd}> $ 2.000,00 </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Stock of Work In Progress </p>
                </td>
                <td>1530</td>
                <td className={style.dollarSigntd}>$ 100,00</td>
                <td className={style.dollarSigntd}> $ 0,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Land and Buildings </p>
                </td>
                <td>1810</td>
                <td className={style.dollarSigntd}>$ 150,00</td>
                <td className={style.dollarSigntd}> $ 0,00</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <p style={{ paddingLeft: "6%" }} className={style.dollarSigntd}>
                    Checking Account
                  </p>
                </td>
                {/* <td>1060</td> */}
                <td className={style.dollarSigntd}>$ 9.720,00</td>
                <td className={style.dollarSigntd}>$ 10.650,00</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <p className={style.listHead}>Liabilities</p>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Account Payable </p>{" "}
                </td>
                <td>2100</td>
                <td className={style.dollarSigntd}> $ 160,00</td>
                <td className={style.dollarSigntd}> $ 100,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Deferred Income </p>{" "}
                </td>
                <td>2105</td>
                <td className={style.dollarSigntd}> $ 190,00</td>
                <td className={style.dollarSigntd}> $ 0,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Accrued Franchise Tax </p>{" "}
                </td>
                <td>2130</td>
                <td className={style.dollarSigntd}> $ 650,00</td>
                <td className={style.dollarSigntd}> $ 0,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Vat Provision </p>{" "}
                </td>
                <td>2140</td>
                <td className={style.dollarSigntd}> $ 0,00</td>
                <td className={style.dollarSigntd}>$ 1.500,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Purchase Tax </p>{" "}
                </td>
                <td>2145</td>
                <td className={style.dollarSigntd}>$ 140,00</td>
                <td className={style.dollarSigntd}> $ 0,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Accrued Holiday Pay </p>{" "}
                </td>
                <td>2230</td>
                <td className={style.dollarSigntd}> $ 140,00</td>
                <td className={style.dollarSigntd}> $ 0,00</td>
              </tr>

              <tr>
                <td colSpan={2}>
                  <p style={{ paddingLeft: "6%" }} className={style.dollarSigntd}>
                    Common Shares
                  </p>
                </td>
                {/* <td>1060</td> */}
                <td className={style.dollarSigntd}>$ 100,00</td>
                <td className={style.dollarSigntd}>$ 0,00</td>
              </tr>

              <tr>
                <td>
                  <p className={style.listHead}>Income</p>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Service Income </p>{" "}
                </td>
                <td>4020</td>
                <td className={style.dollarSigntd}>$ 0,00</td>
                <td className={style.dollarSigntd}> $ 3.450,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Sundry Income </p>{" "}
                </td>
                <td>4435</td>
                <td className={style.dollarSigntd}>$ 0,00</td>
                <td className={style.dollarSigntd}>$ 9.975,00</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <p style={{ paddingLeft: "6%" }} className={style.dollarSigntd}>
                    Sales Income
                  </p>
                </td>
                <td className={style.dollarSigntd}> $ 0,00</td>
                <td className={style.dollarSigntd}>$ 328.300,00</td>
              </tr>

              <tr>
                <td>
                  <p className={style.listHead}>Costs of Goods Sold</p>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Cost of Sales- On Services </p>{" "}
                </td>
                <td>5005</td>
                <td className={style.dollarSigntd}>$ 219.600,00</td>
                <td className={style.dollarSigntd}>$ 0,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Operating Costs </p>{" "}
                </td>
                <td>5015</td>
                <td className={style.dollarSigntd}>$ 7.030,00</td>
                <td className={style.dollarSigntd}>$ 0,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Material Usage Varaiance </p>{" "}
                </td>
                <td>5020</td>
                <td className={style.dollarSigntd}>$ 8.000,00</td>
                <td className={style.dollarSigntd}>$ 0,00</td>
              </tr>

              <tr>
                <td>
                  <p className={style.listHead}>Expenses</p>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Salaries and Wages </p>
                </td>
                <td>5410</td>
                <td className={style.dollarSigntd}>$ 100,00</td>
                <td className={style.dollarSigntd}>$ 0,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Repairs and Maintenance </p>
                </td>
                <td>5765</td>
                <td className={style.dollarSigntd}>$ 2.000,00</td>
                <td className={style.dollarSigntd}>$ 0,00</td>
              </tr>

              <tr>
                <td>
                  <p className={`${style.subhead} ${style.paddingsubhead}`}>Total</p>
                </td>
                <td></td>
                <td style={{ fontWeight: "500" }}>
                  <p className={style.subhead}> $ 359.404,00</p>
                </td>
                <td style={{ fontWeight: "500" }}>
                  <p className={style.subhead}>$ 364.275,00</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
