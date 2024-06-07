import React from "react";
import styles from "../../AccountingSystem.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadIcon from "@mui/icons-material/Download";
export default function Payment() {
  const transactions = [
    {
      date: "2024-01-15",
      amount: 250.0,
      account: "Bank of America",
      vendor: "ABC Supplies",
      category: "Office Supplies",
      reference: "REF1234",
      description: "Purchased office chairs",
      paymentReceipt: "receipt1234.pdf",
    },
    {
      date: "2024-01-20",
      amount: 150.0,
      account: "Chase Bank",
      vendor: "XYZ Technologies",
      category: "Software",
      reference: "REF5678",
      description: "Annual software subscription",
      paymentReceipt: "receipt5678.pdf",
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
                  <th>DATE</th>
                  <th>AMOUNT</th>
                  <th>ACCOUNT</th>
                  <th>VENDOR</th>
                  <th>CATEGORY</th>
                  <th>REFERENCE</th>
                  <th>DESCRIPTION</th>
                  <th>PAYMENT RECEIPT</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.date}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.account}</td>
                    <td>{transaction.vendor}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.reference}</td>
                    <td>{transaction.description}</td>
                    <td>
                      {" "}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                          margin: "0",
                          minWidth: "70px",
                        }}
                      >
                        <Tooltip title="Download">
                          <IconButton
                            style={{
                              backgroundColor: "blue",
                              color: "white",
                              padding: "5px",
                            }}
                          >
                            <DownloadIcon style={{ fontSize: "20px" }} />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
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
