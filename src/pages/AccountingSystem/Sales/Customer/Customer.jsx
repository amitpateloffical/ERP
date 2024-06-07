import React from "react";
import styles from "../../AccountingSystem.module.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
export default function Customer() {
  const employeeSalary = [
    {
      employeeId: "E001",
      name: "John Doe",
      contact: "123-456-7890",
      email: "john.doe@example.com",
      balance: "$5,000",
    },
    {
      employeeId: "E002",
      name: "Jane Smith",
      contact: "098-765-4321",
      email: "jane.smith@example.com",
      balance: "$4,200",
    },
    {
      employeeId: "E003",
      name: "Bob Johnson",
      contact: "555-555-5555",
      email: "bob.johnson@example.com",
      balance: "$6,800",
    },
    {
      employeeId: "E004",
      name: "Alice Williams",
      contact: "444-444-4444",
      email: "alice.williams@example.com",
      balance: "$3,900",
    },
    {
      employeeId: "E005",
      name: "Charlie Brown",
      contact: "333-333-3333",
      email: "charlie.brown@example.com",
      balance: "$7,100",
    },
    {
      employeeId: "E006",
      name: "Emily Davis",
      contact: "222-222-2222",
      email: "emily.davis@example.com",
      balance: "$4,500",
    },
    {
      employeeId: "E007",
      name: "Frank Wilson",
      contact: "111-111-1111",
      email: "frank.wilson@example.com",
      balance: "$5,600",
    },
    {
      employeeId: "E008",
      name: "Grace Lee",
      contact: "666-666-6666",
      email: "grace.lee@example.com",
      balance: "$6,200",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Customers</h2>
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
                  <th>#</th>
                  <th>NAME</th>
                  <th>CONTACT</th>
                  <th>EMAIL</th>
                  <th>BALANCE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {employeeSalary.map((employee, index) => (
                  <tr key={index}>
                    <td>
                      <p className={styles.employeeID}>{employee.employeeId}</p>
                    </td>
                    <td>{employee.name}</td>
                    <td>{employee.contact}</td>
                    <td>{employee.email}</td>
                    <td>{employee.balance}</td>
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
                Showing 1 to {employeeSalary.length} of {employeeSalary.length} entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
