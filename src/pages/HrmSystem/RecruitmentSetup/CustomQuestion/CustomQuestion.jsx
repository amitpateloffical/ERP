import React from "react";
import styles from "../../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Visibility } from "@mui/icons-material";

export default function CustomQuestion() {
  const reportData = [
    {
      branch: "New York",
      trainingType: "Leadership Training",
      status: "Completed",
      employee: "John Doe",
      trainer: "Jane Smith",
      trainingDuration: "2 Weeks",
      cost: "$2000",
    },
    {
      branch: "Los Angeles",
      trainingType: "Technical Training",
      status: "In Progress",
      employee: "Mary Johnson",
      trainer: "Robert Brown",
      trainingDuration: "1 Month",
      cost: "$5000",
    },
    {
      branch: "Chicago",
      trainingType: "Customer Service Training",
      status: "Pending",
      employee: "Michael Williams",
      trainer: "Patricia Taylor",
      trainingDuration: "3 Weeks",
      cost: "$3000",
    },
    {
      branch: "San Francisco",
      trainingType: "Project Management Training",
      status: "Completed",
      employee: "Jennifer Jones",
      trainer: "Charles Miller",
      trainingDuration: "1 Month",
      cost: "$4000",
    },
    {
      branch: "Miami",
      trainingType: "Sales Training",
      status: "In Progress",
      employee: "David Wilson",
      trainer: "Elizabeth Garcia",
      trainingDuration: "2 Weeks",
      cost: "$2500",
    },
  ];

  return (
    <>
      {" "}
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Custom Question for interview</h2>
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
                  <th>QUESTION </th>
                  <th>IS REQUIRED</th>
                  <th>ACTION </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Why Do You Want to Work at This Company? </td>
                  <td>
                    <p className={styles.greenButton}>Yes</p>
                    {/* {report.status === "Completed" && (
                    )} */}
                    {/* <p className={styles.yellowButton}></p>
                    <p className={styles.pinkButton}></p> */}
                  </td>
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
                            backgroundColor: "skyblue",
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
                <tr>
                  <td>Why Do You Want This Job? </td>
                  <td>
                    {/* <p className={styles.greenButton}>Yes</p> */}
                    {/* {report.status === "Completed" && (
                    )} */}
                    <p className={styles.yellowButton}>yes</p>
                    {/* <p className={styles.pinkButton}></p> */}
                  </td>
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
                            backgroundColor: "skyblue",
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
                <tr>
                  <td>What Do You Consider to Be Your Weaknesses? </td>
                  <td>
                    <p className={styles.pinkButton}>Yes</p>
                  </td>
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
                            backgroundColor: "skyblue",
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
