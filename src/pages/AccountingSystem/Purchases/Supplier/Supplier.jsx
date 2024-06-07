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
import DownloadIcon from "@mui/icons-material/Download";
export default function Supplier() {
  const transactions = [
    {
      invoiceID: "001",
      customer: "John Doe",
      contact: "+1 234 567 890",
      email: "john.doe@example.com",
      balance: "$1,000",
    },
    {
      invoiceID: "002",
      customer: "Jane Smith",
      contact: "+1 987 654 321",
      email: "jane.smith@example.com",
      balance: "$2,500",
    },
    {
      invoiceID: "003",
      customer: "Acme Corp",
      contact: "+1 555 555 555",
      email: "contact@acmecorp.com",
      balance: "$3,200",
    },
    {
      invoiceID: "004",
      customer: "Global Tech",
      contact: "+1 123 456 789",
      email: "info@globaltech.com",
      balance: "$1,750",
    },
    {
      invoiceID: "005",
      customer: "Future Innovations",
      contact: "+1 111 222 333",
      email: "support@futureinnovations.com",
      balance: "$4,000",
    },
    {
      invoiceID: "006",
      customer: "StartUp Inc.",
      contact: "+1 444 555 666",
      email: "hello@startupinc.com",
      balance: "$1,500",
    },
    {
      invoiceID: "007",
      customer: "Tech Solutions",
      contact: "+1 222 333 444",
      email: "services@techsolutions.com",
      balance: "$2,200",
    },
    {
      invoiceID: "008",
      customer: "Green Energy",
      contact: "+1 666 777 888",
      email: "contact@greenenergy.com",
      balance: "$3,800",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Vendors</h2>
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
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>
                      <p className={styles.employeeID}>{transaction.invoiceID}</p>
                    </td>
                    <td>{transaction.customer}</td>
                    <td>{transaction.contact}</td>
                    <td>{transaction.email}</td>
                    <td>{transaction.balance}</td>
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
                              backgroundColor: "green",
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
                Showing 1 to {transactions.length} of {transactions.length} entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
