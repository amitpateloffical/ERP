import React from "react";
import DateFilter from "../../../../../Components/Datefilter/Datefilter";
import styles from "../Reports.module.css";
import BarChart2 from "../../../../../Components/Charts/Barchart2";
import Tab from "../../../../../Components/Tabs/Tabs";
export default function SalesReport() {
  const salesbyItemTabContent = (
    <div className={styles.reportTableContainer}>
      <div className={styles.tableTop}>
        <div className={styles.tableTopleft}>
          <select>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
          <p>entries per Page</p>
        </div>
        <div className={styles.field}>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <table className={styles.dashboardTable}>
        <thead>
          <tr>
            <th>INVOICE ITEM</th>
            <th>QUANTITY SOLD </th>
            <th>AMOUNT </th>
            <th>AVERAGE PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Refrigerator </td>
            <td>6</td>
            <td>$ 569.000,00</td>
            <td>$ 46.500,00</td>
          </tr>
          <tr>
            <td>Recreation </td>
            <td>24</td>
            <td>$ 452.000,00</td>
            <td>$ 46.500,00</td>
          </tr>
          <tr>
            <td>Shrugs </td>
            <td>3</td>
            <td>$ 159.000,00</td>
            <td>$ 46.500,00</td>
          </tr>
          <tr>
            <td>Headphone </td>
            <td>7</td>
            <td>$ 959.000,00</td>
            <td>$ 46.500,00</td>
          </tr>
          <tr>
            <td>Purse </td>
            <td>11</td>
            <td>$ 4.000,00</td>
            <td>$ 4.500,00</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.tableBottom}>
        <p>Showing 1 to 5 of 5 entries</p>
      </div>
    </div>
  );

  const salesbyCustomerTabContent = (
    <div className={styles.reportTableContainer}>
      <div className={styles.tableTop}>
        <div className={styles.tableTopleft}>
          <select>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
          <p>entries per Page</p>
        </div>
        <div className={styles.field}>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <table className={styles.dashboardTable}>
        <thead>
          <tr>
            <th>CUSTOMER NAME </th>
            <th>INVOICE COUNT </th>
            <th>SALES</th>
            <th> SALES WITH TAX </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Keire </td>
            <td>2</td>
            <td>$ 271.500,00</td>
            <td>$ 312.225,00</td>
          </tr>
          <tr>
            <td>Protiong</td>
            <td>3</td>
            <td> $ 199.500,00</td>
            <td>$ 271.500,00</td>
          </tr>
          <tr>
            <td>Carla Chambers </td>
            <td>5</td>
            <td> $ 199.500,00</td>
            <td> $ 3.825,00</td>
          </tr>
          <tr>
            <td>Preston Watkins </td>
            <td>59</td>
            <td> $ 199.500,00</td>
            <td> $ 3.825,00</td>
          </tr>
          <tr>
            <td>Mariko Gonzales </td>
            <td>11</td>
            <td> $ 199.500,00</td>
            <td> $ 3.825,00</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.tableBottom}>
        <p>Showing 1 to 5 of 5 entries</p>
      </div>
    </div>
  );

  const tabs = [
    { label: "Sales by Item", content: salesbyItemTabContent },
    { label: "Sales by  Customer ", content: salesbyCustomerTabContent },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Sales Report</h2>
      </div>

      <div className={styles.fullWidthContainer}>
        <Tab tabs={tabs} />
      </div>
    </div>
  );
}
