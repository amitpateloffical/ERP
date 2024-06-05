import React from "react";
import styles from "../../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Visibility } from "@mui/icons-material";

export default function Trip() {
  const reportData = [
    {
      employeeName: "John Doe",
      startDate: "2024-06-01",
      endDate: "2024-06-10",
      purposeOfTrip: "Business Meeting",
      country: "USA",
      description: "John is traveling to the USA for a business meeting with potential clients.",
    },
    {
      employeeName: "Jane Smith",
      startDate: "2024-07-05",
      endDate: "2024-07-15",
      purposeOfTrip: "Conference",
      country: "Germany",
      description: "Jane will attend an international conference in Germany.",
    },
    {
      employeeName: "Alice Johnson",
      startDate: "2024-08-12",
      endDate: "2024-08-20",
      purposeOfTrip: "Training",
      country: "Japan",
      description: "Alice is going to Japan for a training session on new technologies.",
    },
    {
      employeeName: "Bob Brown",
      startDate: "2024-09-10",
      endDate: "2024-09-18",
      purposeOfTrip: "Project Collaboration",
      country: "Australia",
      description: "Bob will collaborate with the Australian team on a new project.",
    },
    {
      employeeName: "Eve Davis",
      startDate: "2024-10-05",
      endDate: "2024-10-12",
      purposeOfTrip: "Site Visit",
      country: "India",
      description: "Eve is visiting the India site to oversee operations.",
    },
    // Add more report data here...
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Trip</h2>
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
                  <th>START DATE</th>
                  <th>END DATE</th>
                  <th>PURPOSE OF TRIP</th>
                  <th>COUNTRY</th>
                  <th>DESCRIPTION</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr key={index}>
                    <td>{report.employeeName}</td>
                    <td>{report.startDate}</td>
                    <td>{report.endDate}</td>
                    <td>{report.purposeOfTrip}</td>
                    <td>{report.country}</td>
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
