import React from "react";
import styles from "../AccountingSystem.module.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import DownloadIcon from "@mui/icons-material/Download";
export default function FinancialGoal() {
  const transactions = [
    {
      customer: "John Doe",
      type: "Transfer",
      from: "Savings",
      to: "Checking",
      amount: 1000,
      isDashboardDisplay: true,
    },
    {
      customer: "Jane Smith",
      type: "Deposit",
      from: "External",
      to: "Savings",
      amount: 500,
      isDashboardDisplay: false,
    },
    {
      customer: "Alice Johnson",
      type: "Withdrawal",
      from: "Checking",
      to: "Cash",
      amount: 200,
      isDashboardDisplay: true,
    },
    {
      customer: "Bob Brown",
      type: "Transfer",
      from: "Investment",
      to: "Savings",
      amount: 1500,
      isDashboardDisplay: true,
    },
    {
      customer: "Eva Wilson",
      type: "Withdrawal",
      from: "Savings",
      to: "ATM",
      amount: 300,
      isDashboardDisplay: false,
    },
    {
      customer: "Michael Lee",
      type: "Deposit",
      from: "External",
      to: "Checking",
      amount: 700,
      isDashboardDisplay: true,
    },
    {
      customer: "Sophia Martinez",
      type: "Transfer",
      from: "Checking",
      to: "Savings",
      amount: 900,
      isDashboardDisplay: true,
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Financial Goals</h2>
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
                  <th>NAME</th>
                  <th>TYPE</th>
                  <th>FROM</th>
                  <th>TO</th>
                  <th>AMOUNT</th>
                  <th>IS DASHBOARD DISPLAY</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.customer}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.from}</td>
                    <td>{transaction.to}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.isDashboardDisplay ? "Yes" : "No"}</td>
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
                        <Tooltip title="View">
                          <IconButton
                            style={{
                              backgroundColor: "green",
                              color: "white",
                              padding: "5px",
                            }}
                          >
                            <VisibilityIcon style={{ fontSize: "20px" }} />
                          </IconButton>
                        </Tooltip>
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
