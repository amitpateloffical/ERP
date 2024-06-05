import React from "react";
import styles from "../../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Visibility } from "@mui/icons-material";

export default function Award() {
  const reportData = [
    {
      employee: "John Doe",
      awardType: "Employee of the Month",
      date: "2023-05-15",
      gift: "Amazon Gift Card",
      description: "Awarded for outstanding performance and dedication.",
    },
    {
      employee: "Jane Smith",
      awardType: "Best Team Player",
      date: "2023-04-10",
      gift: "Dinner Voucher",
      description: "Recognized for excellent teamwork and collaboration.",
    },
    {
      employee: "Alice Johnson",
      awardType: "Innovation Award",
      date: "2023-03-20",
      gift: "Tech Gadget",
      description: "Awarded for innovative solutions and creativity.",
    },
    {
      employee: "Bob Brown",
      awardType: "Customer Service Excellence",
      date: "2023-02-25",
      gift: "Weekend Getaway",
      description: "For exceptional customer service and client satisfaction.",
    },
    {
      employee: "Eve Davis",
      awardType: "Leadership Award",
      date: "2023-01-30",
      gift: "Leadership Training Course",
      description: "Awarded for outstanding leadership and guidance.",
    },
    // Add more report data here...
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Award</h2>
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
                  <th>EMPLOYEE</th>
                  <th>AWARD TYPE</th>
                  <th>DATE</th>
                  <th>GIFT</th>
                  <th>DESCRIPTION</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr key={index}>
                    <td>{report.employee}</td>
                    <td>{report.awardType}</td>
                    <td>{report.date}</td>
                    <td>{report.gift}</td>
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
