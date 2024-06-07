import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./TableContent.module.css";

export default function TableContent({ title, columns, data }) {
  return (
    <>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>{title}</h2>
      </div>
      <div className={styles.fullWidthContainer} style={{ margin: "0" }}>
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
                {columns.map((column, index) => (
                  <th key={index} style={{ width: column.width || "auto" }}>
                    {column.label}
                  </th>
                ))}
                <th style={{ width: "15%" }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {columns.map((column, colIndex) => (
                    <td key={colIndex}>{row[column.field]}</td>
                  ))}
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <Tooltip title="Edit">
                        <IconButton
                          style={{ backgroundColor: "green", color: "white", padding: "5px" }}
                        >
                          <EditIcon style={{ fontSize: "20px" }} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          style={{ backgroundColor: "red", color: "white", padding: "5px" }}
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
              Showing 1 to {data.length} of {data.length} entries
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
