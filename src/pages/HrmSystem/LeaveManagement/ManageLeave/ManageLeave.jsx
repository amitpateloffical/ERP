import React from "react";
import styles from "../../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function ManageLeave() {

const leaveData = [
  {
    employeeId: "E001",
    leaveType: "Sick Leave",
    appliedOn: "2024-05-01",
    startDate: "2024-05-10",
    endDate: "2024-05-15",
    totalDays: 5,
    leaveReason: "Medical issue",
    status: "Pending",
  },
  {
    employeeId: "E002",
    leaveType: "Annual Leave",
    appliedOn: "2024-05-03",
    startDate: "2024-06-01",
    endDate: "2024-06-10",
    totalDays: 10,
    leaveReason: "Vacation",
    status: "Approved",
  },
  // Add more employee leave data here...
];



  return (
    <>
      {" "}
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Employee</h2>
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
                  <th>LEAVE TYPE</th>
                  <th>APPLIED ON</th>
                  <th>START DATE</th>
                  <th>END DATE</th>
                  <th>TOTAL DAYS</th>
                  <th>LEAVE REASON</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {leaveData.map((employee, index) => (
                  <tr key={index}>
                    <td>{employee.employeeId}</td>
                    <td>{employee.leaveType}</td>
                    <td>{employee.appliedOn}</td>
                    <td>{employee.startDate}</td>
                    <td>{employee.endDate}</td>
                    <td>{employee.totalDays}</td>
                    <td>{employee.leaveReason}</td>
                    <td>{employee.status}</td>
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
                Showing 1 to {leaveData.length} of {leaveData.length} entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
