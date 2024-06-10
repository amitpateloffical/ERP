import React from "react";
import styles from "../../AccountingSystem.module.css";
import style from "./BalanceSheet.module.css";
import ExcelExport from "../../../../Components/Exports/Excel/ExcelExport";
import PdfExport from "../../../../Components/Exports/Pdf/PdfExport";
export default function BalanceSheet() {
  const balanceSheet = [
    {
      category: "Assets",
      account: "Checking Account",
      code: "1060",
      debit: "$280.00",
      credit: "$0.00",
    },
    {
      category: "Assets",
      account: "Transaction Account",
      code: "1044",
      debit: "$650.00",
      credit: "$0.00",
    },
    {
      category: "Assets",
      account: "Petty Cash",
      code: "1065",
      debit: "$0.00",
      credit: "$91,444.00",
    },
    {
      category: "Assets",
      account: "Account Receivables",
      code: "1200",
      debit: "$0.00",
      credit: "$8,125.00",
    },
    {
      category: "Assets",
      account: "Allowance for doubtful accounts",
      code: "1205",
      debit: "$0.00",
      credit: "$1,905.00",
    },
    {
      category: "Assets",
      account: "Inventory",
      code: "1510",
      debit: "$0.00",
      credit: "$1,550.00",
    },
    {
      category: "Assets",
      account: "Stock of Raw Materials",
      code: "1520",
      debit: "$0.00",
      credit: "$100.00",
    },
    {
      category: "Assets",
      account: "Stock of Work In Progress",
      code: "1530",
      debit: "$0.00",
      credit: "$100.00",
    },
    {
      category: "Assets",
      account: "Land and Buildings",
      code: "1810",
      debit: "$0.00",
      credit: "$150.00",
    },
    {
      category: "Liabilities",
      account: "Account Payable",
      code: "2100",
      debit: "$0.00",
      credit: "$60.00",
    },
    {
      category: "Liabilities",
      account: "Deferred Income",
      code: "2105",
      debit: "$0.00",
      credit: "$190.00",
    },
    {
      category: "Liabilities",
      account: "Accrued Franchise Tax",
      code: "2130",
      debit: "$0.00",
      credit: "$650.00",
    },
    {
      category: "Liabilities",
      account: "Vat Provision",
      code: "2140",
      debit: "$1,500.00",
      credit: "$0.00",
    },
    {
      category: "Liabilities",
      account: "Purchase Tax",
      code: "2145",
      debit: "$0.00",
      credit: "$140.00",
    },
    {
      category: "Liabilities",
      account: "Accrued Holiday Pay",
      code: "2230",
      debit: "$0.00",
      credit: "$140.00",
    },
    {
      category: "Equity",
      account: "Common Shares",
      code: "3350",
      debit: "$0.00",
      credit: "$0.00",
    },
    {
      category: "Equity",
      account: "Preferred Shares",
      code: "1089",
      debit: "$0.00",
      credit: "$100.00",
    },
  ];


  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2 className={styles.textGreen}>Balance Sheet </h2>
            <div style={{ display: "flex", justifyContent: "space-around", minWidth: "40%" }}>
              <PdfExport contentId="balance-sheet-summary" fileName="balance-sheet-summary.pdf" />
              <ExcelExport data={balanceSheet} fileName="balance-sheet-summary.xlsx" />
            </div>
          </div>
        </div>
        <div className={style.balanceSheetContainer} id="balance-sheet-summary">
          <h4 style={{ textAlign: "center", marginBottom: "5%" }}>
            Balance Sheet of Workdo as of 2024-01-01 to 2024-06-09
          </h4>
          <table style={{ width: "100%" }}>
            <thead>
              <th style={{ width: "50%" }}>Account</th>
              <th> Account Code </th>
              <th>Total</th>
            </thead>
            <tbody>
              <tr>
                <td colSpan={3}>
                  <p className={style.tophead}>Assets</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className={style.listHead}>Current Asset</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{ paddingLeft: "6%" }} className={style.dollarSigntd}>
                    Checking Account
                  </p>{" "}
                </td>
                <td>1060</td>
                <td className={style.dollarSigntd}> $ 280,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Transaction Account</p>{" "}
                </td>
                <td>1044</td>
                <td className={style.dollarSigntd}>$ 650,00</td>
              </tr>
              <tr>
                <td>
                  <p className={`${style.subhead} ${style.paddingsubhead}`}>
                    Total Checking Account
                  </p>{" "}
                </td>
                <td></td>
                <td style={{ fontWeight: "500" }}>
                  <p className={style.subhead}>$ 930,00</p>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Petty Cash </p>{" "}
                </td>
                <td>1065</td>
                <td className={style.dollarSigntd}>$ -91.444,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Account Receivables </p>{" "}
                </td>
                <td>1200</td>
                <td className={style.dollarSigntd}>$ -8.125,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Allowance for doubtful accounts </p>{" "}
                </td>
                <td>1205</td>
                <td className={style.dollarSigntd}>$ -1.905,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Petty Cash </p>{" "}
                </td>
                <td>1065</td>
                <td className={style.dollarSigntd}>$ -91.444,00</td>
              </tr>
              <tr>
                <td>
                  <p className={`${style.subhead} ${style.paddingsubhead}`}>Total Current Asset</p>{" "}
                </td>
                <td></td>
                <td style={{ fontWeight: "500" }}>
                  <p className={style.subhead}>$ -100.544,00</p>
                </td>
              </tr>

              <tr>
                <td>
                  <p className={style.listHead}>Inventory Asset</p>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Inventory </p>{" "}
                </td>
                <td>1510</td>
                <td className={style.dollarSigntd}>$ -1.550,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Stock of Raw Materials </p>{" "}
                </td>
                <td>1530</td>
                <td className={style.dollarSigntd}>$ -100,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Stock of Work In Progress 1530 $ -100,00</p>{" "}
                </td>
                <td>1065</td>
                <td className={style.dollarSigntd}>$ -91.444,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Petty Cash </p>{" "}
                </td>
                <td>1065</td>
                <td className={style.dollarSigntd}>$ -91.444,00</td>
              </tr>
              <tr>
                <td>
                  <p className={`${style.subhead} ${style.paddingsubhead}`}>
                    Total Inventory Asset{" "}
                  </p>{" "}
                </td>
                <td></td>
                <td style={{ fontWeight: "500" }}>
                  <p className={style.subhead}>$ -100.544,00</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className={style.listHead}>Non-current Asset</p>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Land And Building </p>{" "}
                </td>
                <td>1810</td>
                <td className={style.dollarSigntd}>$ -150,00</td>
              </tr>
              <tr>
                <td>
                  <p className={`${style.subhead} ${style.paddingsubhead}`}>
                    Total Non-current Asset{" "}
                  </p>{" "}
                </td>
                <td></td>
                <td style={{ fontWeight: "500" }}>
                  <p className={style.subhead}>$ -150,00</p>
                </td>
              </tr>

              <tr>
                <td colSpan={3}>
                  <div className={style.tophead}>
                    <p>Total for Assets:-</p>
                    <p>$ -100.344,00</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <p style={{ marginTop: "5%" }} className={style.tophead}>
                    Liabilities & Equity
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className={style.listHead}>Liabilities</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className={`${style.subhead} ${style.paddingsubhead}`}>Current Liabilities</p>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Account Payable </p>{" "}
                </td>
                <td>2100</td>
                <td className={style.dollarSigntd}>$ -60,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Deferred Income </p>{" "}
                </td>
                <td>2105</td>
                <td className={style.dollarSigntd}>$ -190,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Accrued Franchise Tax </p>{" "}
                </td>
                <td>2130</td>
                <td className={style.dollarSigntd}>$ -650,00 </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Vat Provision </p>{" "}
                </td>
                <td>2140</td>
                <td className={style.dollarSigntd}>$ 1.500,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Purchase Tax </p>{" "}
                </td>
                <td>2145</td>
                <td className={style.dollarSigntd}>$ -140,00</td>
              </tr>

              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Accrued Holiday Pay </p>{" "}
                </td>
                <td>2230</td>
                <td className={style.dollarSigntd}>$ -140,00</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <p className={`${style.subhead} ${style.paddingsubhead}`}>
                    Total Current Liabilities
                  </p>{" "}
                </td>
                <td style={{ fontWeight: "500" }}>
                  <p className={style.subhead}>$ 320,00</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className={`${style.subhead} ${style.paddingsubhead}`}>Share Capital</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{ paddingLeft: "6%" }} className={style.dollarSigntd}>
                    Common Shares
                  </p>{" "}
                </td>
                <td>3350</td>
                <td className={style.dollarSigntd}> $ 0,00</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "8%" }}>
                  <p className={style.dollarSigntd}>Preferred Shares </p>{" "}
                </td>
                <td>1089</td>
                <td className={style.dollarSigntd}>$ -100,00</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <p style={{ paddingLeft: "6%" }}>Total Common Shares</p>
                </td>
                <td className={style.dollarSigntd}> $ -100,00</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <p className={`${style.subhead} ${style.paddingsubhead}`}>Total Share Capital</p>{" "}
                </td>
                <td style={{ fontWeight: "500" }}>
                  <p className={style.subhead}>$ -100,00</p>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <p className={style.listHead}> Total for Liabilities</p>
                </td>
                <td>
                  <p className={style.listHead}>$ 220,00</p>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <div className={style.tophead}>
                    <p>Total for Liabilities & Equity</p>
                    <p>$ 220,00</p>
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
