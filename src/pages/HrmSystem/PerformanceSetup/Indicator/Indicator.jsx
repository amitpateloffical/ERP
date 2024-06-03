
import React from "react";
import styles from "../../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { FaStar } from "react-icons/fa";

export default function Indicator() {

const employeeData = [
  {
    branch: "New York",
    department: "HR",
    designation: "Manager",
    overallRating: "4.5",
    addedBy: "John Doe",
    createdAt: "2024-06-01",
  },
  {
    branch: "Los Angeles",
    department: "Finance",
    designation: "Analyst",
    overallRating: "4.0",
    addedBy: "Jane Smith",
    createdAt: "2024-06-01",
  },
  {
    branch: "Chicago",
    department: "IT",
    designation: "Developer",
    overallRating: "4.8",
    addedBy: "Chris Johnson",
    createdAt: "2024-06-01",
  },
  {
    branch: "San Francisco",
    department: "Marketing",
    designation: "Coordinator",
    overallRating: "4.2",
    addedBy: "Patricia Brown",
    createdAt: "2024-06-01",
  },
  {
    branch: "Miami",
    department: "Sales",
    designation: "Executive",
    overallRating: "1.1",
    addedBy: "Michael Davis",
    createdAt: "2024-06-01",
  },
  // Add more employee performance data here...
];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<FaStar key={i} color="#ffc107" />);
      } else if (i === Math.floor(rating) && rating % 1 !== 0) {
        stars.push(<FaStar key={i} color="#ffc107" />);
      } else {
        stars.push(<FaStar key={i} color="#e0e0e0" />);
      }
    }
    return stars;
  };

  return (
    <>
      {" "}
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Indicator</h2>
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
                  <th>DEPARTMENT</th>
                  <th>DESIGNATION</th>
                  <th>OVERALL RATING</th>
                  <th>ADDED BY</th>
                  <th>CREATED AT</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {employeeData.map((employee, index) => (
                  <tr key={index}>
                    <td>{employee.branch}</td>
                    <td>{employee.department}</td>
                    <td>{employee.designation}</td>
                    <td>
                      {renderStars(employee.overallRating)}({employee.overallRating})
                    </td>
                    <td>{employee.addedBy}</td>
                    <td>{employee.createdAt}</td>
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
                Showing 1 to {employeeData.length} of {employeeData.length} entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
