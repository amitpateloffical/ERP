import React from "react";
import styles from "../../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link, Visibility } from "@mui/icons-material";
import { FaMoneyBillWave, FaProjectDiagram, FaTasks } from "react-icons/fa";

export default function Jobs() {
  const reportData = [
    {
      branch: "New York",
      titleAction: "Annual Review",
      startDate: "2023-01-01",
      endDate: "2023-01-15",
      status: "Completed",
      createdAt: "2022-12-15",
    },
    {
      branch: "Los Angeles",
      titleAction: "Quarterly Meeting",
      startDate: "2023-02-01",
      endDate: "2023-02-05",
      status: "In Progress",
      createdAt: "2023-01-20",
    },
    {
      branch: "Chicago",
      titleAction: "Project Kickoff",
      startDate: "2023-03-01",
      endDate: "2023-03-03",
      status: "Pending",
      createdAt: "2023-02-10",
    },
    {
      branch: "Houston",
      titleAction: "Training Session",
      startDate: "2023-04-01",
      endDate: "2023-04-10",
      status: "Completed",
      createdAt: "2023-03-15",
    },
    {
      branch: "Phoenix",
      titleAction: "Client Meeting",
      startDate: "2023-05-01",
      endDate: "2023-05-02",
      status: "Pending",
      createdAt: "2023-04-20",
    },
    // Add more report data here...
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Job</h2>
        </div>
        <div className={styles.verticalContainer}>
          <div className={`${styles.card} ${styles.lead}`}>
            <div className={styles.cardLeft}>
              <span
                style={{
                  padding: "5%",
                  backgroundColor: "#c06bd6",
                  borderRadius: "33%",
                  marginLeft: "2%",
                }}
              >
                <FaProjectDiagram className={styles.icon2} />
              </span>
              <div className={styles.contentLeft}>
                <pre>Total </pre>
                <p className={styles.textPurple}>
                  <b>Jobs </b>
                </p>
              </div>
            </div>
            <div className={styles.value}>14</div>
          </div>
          <div className={`${styles.card} ${styles.lead}`}>
            <div className={styles.cardLeft}>
              <span
                style={{
                  padding: "5%",
                  backgroundColor: "green",
                  borderRadius: "33%",
                  marginLeft: "2%",
                }}
              >
                <FaTasks className={styles.icon2} />
              </span>
              <div className={styles.contentLeft}>
                <pre>Active </pre>
                <p className={styles.textGreen}>
                  <b>Jobs</b>
                </p>
              </div>
            </div>
            <div className={styles.value}>8</div>
          </div>
          <div className={`${styles.card} ${styles.lead}`}>
            <div className={styles.cardLeft}>
              <span
                style={{
                  padding: "5%",
                  backgroundColor: "#e06c28",
                  borderRadius: "33%",
                  marginLeft: "2%",
                }}
              >
                <FaMoneyBillWave className={styles.icon2} />
              </span>
              <div className={styles.contentLeft}>
                <pre>Inactive </pre>
                <p className={styles.textOrange}>
                  <b>Jobs</b>
                </p>
              </div>
            </div>
            <div className={styles.value}>6</div>
          </div>
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
                  <th>BRANCH</th>
                  <th>TITLE</th>
                  <th>START DATE</th>
                  <th>END DATE</th>
                  <th>STATUS</th>
                  <th>CREATED AT</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr key={index}>
                    <td>{report.branch}</td>
                    <td>{report.titleAction}</td>
                    <td>{report.startDate}</td>
                    <td>{report.endDate}</td>
                    <td>
                      {report.status === "Completed" && (
                        <p className={styles.greenButton}>{report.status}</p>
                      )}
                      {report.status === "In Progress" && (
                        <p className={styles.yellowButton}>{report.status}</p>
                      )}
                      {report.status === "Pending" && (
                        <p className={styles.pinkButton}>{report.status}</p>
                      )}
                    </td>
                    <td>{report.createdAt}</td>
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
                        <Tooltip title="Link">
                          <IconButton
                            style={{
                              backgroundColor: "orange",
                              color: "white",
                              padding: "5px",
                            }}
                          >
                            <Link style={{ fontSize: "20px" }} />
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
                            <Visibility style={{ fontSize: "20px" }} />
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
                Showing 1 to {reportData.length} of {reportData.length} entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
