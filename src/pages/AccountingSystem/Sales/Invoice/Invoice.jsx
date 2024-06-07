import React from "react";
import styles from "../../AccountingSystem.module.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
export default function Invoice() {
  const invoices = [
    {
      invoiceId: "INV001",
      issueDate: "2023-05-12",
      dueDate: "2023-06-12",
      dueAmount: "$1,000",
      status: "Pending",
    },
    {
      invoiceId: "INV002",
      issueDate: "2023-04-22",
      dueDate: "2023-05-22",
      dueAmount: "$2,500",
      status: "Paid",
    },
    {
      invoiceId: "INV003",
      issueDate: "2023-06-10",
      dueDate: "2023-07-10",
      dueAmount: "$3,200",
      status: "Overdue",
    },
    {
      invoiceId: "INV004",
      issueDate: "2023-03-15",
      dueDate: "2023-04-15",
      dueAmount: "$1,750",
      status: "Paid",
    },
    {
      invoiceId: "INV005",
      issueDate: "2023-01-18",
      dueDate: "2023-02-18",
      dueAmount: "$4,000",
      status: "Pending",
    },
    {
      invoiceId: "INV006",
      issueDate: "2023-02-25",
      dueDate: "2023-03-25",
      dueAmount: "$1,500",
      status: "Overdue",
    },
    {
      invoiceId: "INV007",
      issueDate: "2023-04-10",
      dueDate: "2023-05-10",
      dueAmount: "$2,200",
      status: "Paid",
    },
    {
      invoiceId: "INV008",
      issueDate: "2023-05-05",
      dueDate: "2023-06-05",
      dueAmount: "$3,800",
      status: "Pending",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Invoices</h2>
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
                  <th>INVOICE</th>
                  <th>ISSUE DATE</th>
                  <th>DUE DATE</th>
                  <th>DUE AMOUNT</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice, index) => (
                  <tr key={index}>
                    <td>
                      <p className={styles.employeeID}>{invoice.invoiceId}</p>
                    </td>
                    <td>{invoice.issueDate}</td>
                    <td>{invoice.dueDate}</td>
                    <td>{invoice.dueAmount}</td>
                    <td>{invoice.status}</td>
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
                        <Tooltip title="Convert Invoice">
                          <IconButton
                            style={{
                              backgroundColor: "#ebcd49",
                              color: "white",
                              padding: "5px",
                            }}
                          >
                            <RotateLeftIcon style={{ fontSize: "20px" }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Duplicate">
                          <IconButton
                            style={{
                              backgroundColor: "#84e34d",
                              color: "white",
                              padding: "5px",
                            }}
                          >
                            <ContentCopyIcon style={{ fontSize: "20px" }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="View">
                          <IconButton
                            style={{
                              backgroundColor: "#4d7de3",
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
                Showing 1 to {invoices.length} of {invoices.length} entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
