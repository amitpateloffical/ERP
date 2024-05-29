import React from "react";
import DateFilter from "../../../../../Components/Datefilter/Datefilter";
import styles from "../Reports.module.css";

export default function ProductStock() {
  // Pseudo data for the table
  const productStockData = [
    {
      date: "2024-05-01",
      productName: "Laptop",
      quantity: 50,
      type: "Electronics",
      description: "Dell Inspiron 15",
    },
    {
      date: "2024-05-02",
      productName: "Office Chair",
      quantity: 150,
      type: "Furniture",
      description: "Ergonomic Office Chair",
    },
    {
      date: "2024-05-03",
      productName: "Smartphone",
      quantity: 200,
      type: "Electronics",
      description: "Samsung Galaxy S21",
    },
    {
      date: "2024-05-04",
      productName: "Desk",
      quantity: 75,
      type: "Furniture",
      description: "Adjustable Height Desk",
    },
    {
      date: "2024-05-05",
      productName: "Monitor",
      quantity: 120,
      type: "Electronics",
      description: "LG UltraWide Monitor",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Product Stock</h2>
      </div>
      <div className={styles.fullWidthContainer}>
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
                <th>DATE</th>
                <th>PRODUCT NAME</th>
                <th>QUANTITY</th>
                <th>TYPE</th>
                <th>DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              {productStockData.map((product, index) => (
                <tr key={index}>
                  <td>{product.date}</td>
                  <td>{product.productName}</td>
                  <td>{product.quantity}</td>
                  <td>{product.type}</td>
                  <td>{product.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.tableBottom}>
            <p>
              Showing 1 to {productStockData.length} of {productStockData.length} entries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
