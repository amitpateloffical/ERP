import React from "react";
import DateFilter from "../../../../../Components/Datefilter/Datefilter";
import Tab from "../../../../../Components/Tabs/Tabs";
import styles from "../Reports.module.css";

const salesByItemData = [
  { item: "Refrigerator", quantity: 6, amount: "$ 569,000.00", averagePrice: "$ 46,500.00" },
  { item: "Recreation", quantity: 24, amount: "$ 452,000.00", averagePrice: "$ 46,500.00" },
  { item: "Shrugs", quantity: 3, amount: "$ 159,000.00", averagePrice: "$ 46,500.00" },
  { item: "Headphone", quantity: 7, amount: "$ 959,000.00", averagePrice: "$ 46,500.00" },
  { item: "Purse", quantity: 11, amount: "$ 4,000.00", averagePrice: "$ 4,500.00" },
];

const salesByCustomerData = [
  { customer: "Keire", invoiceCount: 2, sales: "$ 271,500.00", salesWithTax: "$ 312,225.00" },
  { customer: "Protiong", invoiceCount: 3, sales: "$ 199,500.00", salesWithTax: "$ 271,500.00" },
  {
    customer: "Carla Chambers",
    invoiceCount: 5,
    sales: "$ 199,500.00",
    salesWithTax: "$ 3,825.00",
  },
  {
    customer: "Preston Watkins",
    invoiceCount: 59,
    sales: "$ 199,500.00",
    salesWithTax: "$ 3,825.00",
  },
  {
    customer: "Mariko Gonzales",
    invoiceCount: 11,
    sales: "$ 199,500.00",
    salesWithTax: "$ 3,825.00",
  },
];

const SalesByItemRow = ({ item }) => (
  <tr>
    <td>{item.item}</td>
    <td>{item.quantity}</td>
    <td>{item.amount}</td>
    <td>{item.averagePrice}</td>
  </tr>
);

const SalesByCustomerRow = ({ customer }) => (
  <tr>
    <td>{customer.customer}</td>
    <td>{customer.invoiceCount}</td>
    <td>{customer.sales}</td>
    <td>{customer.salesWithTax}</td>
  </tr>
);

const SalesByItemTable = () => (
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
          <th>QUANTITY SOLD</th>
          <th>AMOUNT</th>
          <th>AVERAGE PRICE</th>
        </tr>
      </thead>
      <tbody>
        {salesByItemData.map((item, index) => (
          <SalesByItemRow key={index} item={item} />
        ))}
      </tbody>
    </table>
    <div className={styles.tableBottom}>
      <p>Showing 1 to 5 of 5 entries</p>
    </div>
  </div>
);

const SalesByCustomerTable = () => (
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
          <th>CUSTOMER NAME</th>
          <th>INVOICE COUNT</th>
          <th>SALES</th>
          <th>SALES WITH TAX</th>
        </tr>
      </thead>
      <tbody>
        {salesByCustomerData.map((customer, index) => (
          <SalesByCustomerRow key={index} customer={customer} />
        ))}
      </tbody>
    </table>
    <div className={styles.tableBottom}>
      <p>Showing 1 to 5 of 5 entries</p>
    </div>
  </div>
);

export default function SalesReport() {
  const tabs = [
    { label: "Sales by Item", content: <SalesByItemTable /> },
    { label: "Sales by Customer", content: <SalesByCustomerTable /> },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Sales Report</h2>
      </div>
      <div className={styles.fullWidthContainer}>
        <DateFilter />
      </div>
      <div className={styles.fullWidthContainer}>
        <Tab tabs={tabs} />
      </div>
    </div>
  );
}
