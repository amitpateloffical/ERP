import React from "react";
import styles from "../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
export default function EmployeeAssetSetup() {
  const reportData = [
    {
      name: "John Doe",
      users: 50,
      purchaseDate: "2024-06-01",
      supportedDate: "2025-06-01",
      amount: "$200",
      description: "Support package for 50 users",
    },
    {
      name: "Jane Smith",
      users: 100,
      purchaseDate: "2024-05-15",
      supportedDate: "2025-05-15",
      amount: "$400",
      description: "Support package for 100 users",
    },
    {
      name: "Alice Johnson",
      users: 150,
      purchaseDate: "2024-04-20",
      supportedDate: "2025-04-20",
      amount: "$600",
      description: "Support package for 150 users",
    },
    {
      name: "Bob Brown",
      users: 200,
      purchaseDate: "2024-03-10",
      supportedDate: "2025-03-10",
      amount: "$800",
      description: "Support package for 200 users",
    },
    {
      name: "Charlie Davis",
      users: 250,
      purchaseDate: "2024-02-25",
      supportedDate: "2025-02-25",
      amount: "$1000",
      description: "Support package for 250 users",
    },
    {
      name: "Diana Evans",
      users: 300,
      purchaseDate: "2024-01-30",
      supportedDate: "2025-01-30",
      amount: "$1200",
      description: "Support package for 300 users",
    },
    {
      name: "Ethan Green",
      users: 350,
      purchaseDate: "2024-01-05",
      supportedDate: "2025-01-05",
      amount: "$1400",
      description: "Support package for 350 users",
    },
    {
      name: "Fiona Hill",
      users: 400,
      purchaseDate: "2023-12-15",
      supportedDate: "2024-12-15",
      amount: "$1600",
      description: "Support package for 400 users",
    },
    {
      name: "George Clark",
      users: 450,
      purchaseDate: "2023-11-20",
      supportedDate: "2024-11-20",
      amount: "$1800",
      description: "Support package for 450 users",
    },
    {
      name: "Hannah Lewis",
      users: 500,
      purchaseDate: "2023-10-25",
      supportedDate: "2024-10-25",
      amount: "$2000",
      description: "Support package for 500 users",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Employee Assest</h2>
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
                  <th>USERS</th>
                  <th>PURCHASE DATE</th>
                  <th>SUPPORTED DATE</th>
                  <th>AMOUNT</th>
                  <th>DESCRIPTION</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr key={index}>
                    <td>{report.name}</td>
                    <td>{report.users}</td>
                    <td>{report.purchaseDate}</td>
                    <td>{report.supportedDate}</td>
                    <td>{report.amount}</td>
                    <td>{report.description}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
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
                Showing 1 to {reportData.length} of {reportData.length} entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
