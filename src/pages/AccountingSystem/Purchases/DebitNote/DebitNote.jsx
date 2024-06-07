import React from "react";
import styles from "../../AccountingSystem.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
export default function DebitNote() {
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
          <h2 className={styles.textGreen}>Manage Bills</h2>
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
                  <th>BILL</th>
                  <th>VENDOR</th>
                  <th>DATE</th>
                  <th>AMOUNT</th>
                  <th>DESCRIPTION</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>
                      <p className={styles.employeeID}>{transaction.invoiceID}</p>
                    </td>
                    <td>{transaction.vendor}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.description}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                          margin: "0",
                          minWidth: "70px",
                        }}
                      >
                        <Tooltip title="Edit">
                          <IconButton
                            style={{
                              backgroundColor: "green",
                              color: "white",
                              padding: "5px",
                            }}
                          >
                            <EditIcon style={{ fontSize: "20px" }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton
                            style={{
                              backgroundColor: "red",
                              color: "white",
                              padding: "5px",
                            }}
                          >
                            <DeleteIcon style={{ fontSize: "20px" }} />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.tableBottom}>
              <p>
                Showing 1 to {transactions.length} of {transactions.length} entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
