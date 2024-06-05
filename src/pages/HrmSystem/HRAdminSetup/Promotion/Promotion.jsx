import React from "react";
import styles from "../../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Visibility } from "@mui/icons-material";

export default function Promotion() {
  const reportData = [
    {
      employeeName: "John Doe",
      designation: "Software Engineer",
      promotionTitle: "Senior Software Engineer",
      promotionDate: "2024-06-01",
      description: "Promoted due to excellent performance and contributions to the project.",
    },
    {
      employeeName: "Jane Smith",
      designation: "Marketing Specialist",
      promotionTitle: "Marketing Manager",
      promotionDate: "2024-07-15",
      description: "Recognized for outstanding leadership in the marketing team.",
    },
    {
      employeeName: "Alice Johnson",
      designation: "Data Analyst",
      promotionTitle: "Senior Data Analyst",
      promotionDate: "2024-08-20",
      description: "Promoted for her expertise and improvements in data processes.",
    },
    {
      employeeName: "Bob Brown",
      designation: "HR Executive",
      promotionTitle: "HR Manager",
      promotionDate: "2024-09-18",
      description: "Acknowledged for his effective management of HR operations.",
    },
    {
      employeeName: "Eve Davis",
      designation: "Sales Associate",
      promotionTitle: "Sales Team Lead",
      promotionDate: "2024-10-12",
      description: "Promoted for consistently exceeding sales targets.",
    },
    // Add more report data here...
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Promotion</h2>
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
                  <th>EMPLOYEE NAME</th>
                  <th>DESIGNATION</th>
                  <th>PROMOTION TITLE</th>
                  <th>PROMOTION DATE</th>
                  <th>DESCRIPTION</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr key={index}>
                    <td>{report.employeeName}</td>
                    <td>{report.designation}</td>
                    <td>{report.promotionTitle}</td>
                    <td>{report.promotionDate}</td>
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
