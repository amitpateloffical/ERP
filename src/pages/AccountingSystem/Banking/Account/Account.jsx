import React from "react";
import styles from "../../AccountingSystem.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { FaSearch, FaTimes } from "react-icons/fa";
export default function Account() {
  const reportData = [
    {
      name: "Account 1",
      title: "Savings",
      description: "Bank of America",
      accountNumber: "123456789",
      currentBalance: "$1000",
      contactNumber: "123-456-7890",
      bankBranch: "Main Street Branch",
    },
    {
      name: "Account 2",
      title: "Current",
      description: "Chase Bank",
      accountNumber: "987654321",
      currentBalance: "$500",
      contactNumber: "987-654-3210",
      bankBranch: "Downtown Branch",
    },
    {
      name: "Account 1",
      title: "Savings",
      description: "Bank of America",
      accountNumber: "123456789",
      currentBalance: "$1000",
      contactNumber: "123-456-7890",
      bankBranch: "Main Street Branch",
    },
    {
      name: "Account 2",
      title: "Current",
      description: "Chase Bank",
      accountNumber: "987654321",
      currentBalance: "$500",
      contactNumber: "987-654-3210",
      bankBranch: "Downtown Branch",
    },

    // Add more objects as needed
  ];

  return (
    <div>
      <div class={styles.container}>
        <div class={styles.fullWidthContainer}>
          <h2 class={styles.textGreen}>Manage Bank Account</h2>
        </div>
        <div class={styles.fullWidthContainer}>
          <div className={styles.dateFilter}>
            <div className={styles.field}>
              <label>From</label>
              <input type="date" name="" id="" />
            </div>
            <div className={styles.field}>
              <label>To</label>
              <input type="date" name="" id="" />
            </div>
            <div className={styles.field}>
              <label>From Account</label>
              <select>
                <option>Select Account</option>
                <option>India</option>
                <option>China</option>
                <option>Jordan</option>
                <option>USA</option>
                <option>Australia</option>
                <option>United Kingdom</option>
              </select>
            </div>
            <div className={styles.field}>
              <label>To Account</label>
              <select>
                <option>Select Account</option>
                <option>Financials</option>
                <option>Industrials</option>
                <option>Health Care</option>
                <option>Telecommunications</option>
                <option>Health Care</option>
                <option>Financials</option>
                <option>Industrials</option>
              </select>
            </div>

            <button className={styles.searchButton}>
              <FaSearch />
            </button>
            <button className={styles.clearButton}>
              <FaTimes />
            </button>
          </div>{" "}
        </div>
        <div class={styles.fullWidthContainer}>
          <div class={styles.reportTableContainer}>
            <div class={styles.tableTop}>
              <div class={styles.tableTopleft}>
                <select>
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                </select>
                <p>entries per Page</p>
              </div>
              <div class={styles.field}>
                <input type="text" placeholder="Search..." />
              </div>
            </div>
            <table class={styles.dashboardTable}>
              <thead>
                <tr>
                  <th>DATE </th>
                  <th>FROM ACCOUNT</th>
                  <th>TO ACCOUNT</th>
                  <th>AMOUNT</th>
                  <th>REFERENCE</th>
                  <th>DESCRIPTION</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr key={index}>
                    <td>{report.name}</td>
                    <td>{report.title}</td>
                    <td>{report.description}</td>
                    <td>{report.accountNumber}</td>
                    <td>{report.currentBalance}</td>
                    <td>{report.contactNumber}</td>
                    <td>{report.bankBranch}</td>
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

            <div class={styles.tableBottom}>
              <p>
                Showing 1 to {reportData.length} of {reportData.length} entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
