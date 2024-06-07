import React from "react";
import styles from "../../AccountingSystem.module.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import DownloadIcon from "@mui/icons-material/Download";
export default function Bill() {
  const transactions = [
    {
      invoiceID: "001",
      category: "Utilities",
      billDate: "2024-01-15",
      dueDate: "2024-02-15",
      status: "Paid",
    },
    {
      invoiceID: "002",
      category: "Office Supplies",
      billDate: "2024-01-20",
      dueDate: "2024-02-20",
      status: "Unpaid",
    },
    {
      invoiceID: "003",
      category: "Internet",
      billDate: "2024-01-25",
      dueDate: "2024-02-25",
      status: "Overdue",
    },
    {
      invoiceID: "004",
      category: "Maintenance",
      billDate: "2024-02-01",
      dueDate: "2024-03-01",
      status: "Paid",
    },
    {
      invoiceID: "005",
      category: "Travel",
      billDate: "2024-02-05",
      dueDate: "2024-03-05",
      status: "Unpaid",
    },
    {
      invoiceID: "006",
      category: "Marketing",
      billDate: "2024-02-10",
      dueDate: "2024-03-10",
      status: "Paid",
    },
    {
      invoiceID: "007",
      category: "Software",
      billDate: "2024-02-15",
      dueDate: "2024-03-15",
      status: "Unpaid",
    },
    {
      invoiceID: "008",
      category: "Consulting",
      billDate: "2024-02-20",
      dueDate: "2024-03-20",
      status: "Overdue",
    },
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
                  <th>CATEGORY</th>
                  <th>BILL DATE</th>
                  <th>DUE DATE</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>
                      <p className={styles.employeeID}>{transaction.invoiceID}</p>
                    </td>
                    <td>{transaction.category}</td>
                    <td>{transaction.billDate}</td>
                    <td>{transaction.dueDate}</td>
                    <td>{transaction.status}</td>
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
                        <Tooltip title="Copy">
                          <IconButton
                            style={{
                              backgroundColor: "green",
                              color: "white",
                              padding: "5px",
                            }}
                          >
                            <ContentCopyIcon style={{ fontSize: "20px" }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="View">
                          <IconButton
                            style={{
                              backgroundColor: "blue",
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
