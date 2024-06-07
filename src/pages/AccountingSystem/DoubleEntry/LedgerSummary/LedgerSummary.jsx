// import React from "react";
// import styles from "../../AccountingSystem.module.css";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// export default function LedgerSummary() {
//   const transactions = [
//     {
//       invoiceID: "INV001",
//       vendor: "ABC Supplies",
//       date: "2024-01-15",
//       amount: 250.0,
//       description: "Purchased office chairs",
//     },
//     {
//       invoiceID: "INV002",
//       vendor: "XYZ Technologies",
//       date: "2024-01-20",
//       amount: 150.0,
//       description: "Annual software subscription",
//     },
//     {
//       invoiceID: "INV003",
//       vendor: "123 Electronics",
//       date: "2024-02-10",
//       amount: 500.0,
//       description: "Computer hardware purchase",
//     },
//     {
//       invoiceID: "INV004",
//       vendor: "Best Books Store",
//       date: "2024-02-28",
//       amount: 120.0,
//       description: "Educational books purchase",
//     },
//     // Add more transactions as needed
//   ];

//   return (
//     <>
//       <div className={styles.container}>
//         <div className={styles.fullWidthContainer}>
//           <h2 className={styles.textGreen}>Ledger Summary</h2>
//         </div>
//         <div className={styles.fullWidthContainer}>
//           <div className={styles.reportTableContainer}>
//             <div className={styles.tableTop}>
//               <div className={styles.tableTopleft}>
//                 <select>
//                   <option>5</option>
//                   <option>10</option>
//                   <option>15</option>
//                   <option>20</option>
//                 </select>
//                 <p>entries per Page</p>
//               </div>
//               <div className={styles.field}>
//                 <input type="text" placeholder="Search..." />
//               </div>
//             </div>
//             <table className={styles.dashboardTable}>
//               <thead>
//                 <tr>
//                   <th>Invoice ID</th>
//                   <th>Date</th>
//                   <th>Amount</th>
//                   <th>Description</th>
//                   <th>Vendor</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {transactions.map((transaction, index) => (
//                   <tr key={index}>
//                     <td>
//                       <p className={styles.employeeID}>{transaction.invoiceID}</p>
//                     </td>
//                     <td>{transaction.date}</td>
//                     <td>${transaction.amount}</td>
//                     <td>{transaction.description}</td>
//                     <td>{transaction.vendor}</td>
//                     <td>
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-evenly",
//                           alignItems: "center",
//                           margin: "0",
//                           minWidth: "70px",
//                         }}
//                       >
//                         <Tooltip title="Edit">
//                           <IconButton
//                             style={{
//                               backgroundColor: "green",
//                               color: "white",
//                               padding: "5px",
//                             }}
//                           >
//                             <EditIcon style={{ fontSize: "20px" }} />
//                           </IconButton>
//                         </Tooltip>
//                         <Tooltip title="Delete">
//                           <IconButton
//                             style={{
//                               backgroundColor: "red",
//                               color: "white",
//                               padding: "5px",
//                             }}
//                           >
//                             <DeleteIcon style={{ fontSize: "20px" }} />
//                           </IconButton>
//                         </Tooltip>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <div className={styles.tableBottom}>
//               <p>
//                 Showing 1 to {transactions.length} of {transactions.length} entries
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// try of

import React from "react";
import styles from "../../AccountingSystem.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PdfExport from "../../../../Components/Exports/Pdf/PdfExport";
import ExcelExport from "../../../../Components/Exports/Excel/ExcelExport";
// import ExcelExport from "../../../../Components/Exports/Excel/ExcelExport";

export default function LedgerSummary() {
  const transactions = [
    {
      invoiceID: "INV001",
      vendor: "ABC Supplies",
      date: "2024-01-15",
      amount: 250.0,
      description: "Purchased office chairs",
    },
    {
      invoiceID: "INV002",
      vendor: "XYZ Technologies",
      date: "2024-01-20",
      amount: 150.0,
      description: "Annual software subscription",
    },
    {
      invoiceID: "INV003",
      vendor: "123 Electronics",
      date: "2024-02-10",
      amount: 500.0,
      description: "Computer hardware purchase",
    },
    {
      invoiceID: "INV004",
      vendor: "Best Books Store",
      date: "2024-02-28",
      amount: 120.0,
      description: "Educational books purchase",
    },
    {
      invoiceID: "INV001",
      vendor: "ABC Supplies",
      date: "2024-01-15",
      amount: 250.0,
      description: "Purchased office chairs",
    },
    {
      invoiceID: "INV002",
      vendor: "XYZ Technologies",
      date: "2024-01-20",
      amount: 150.0,
      description: "Annual software subscription",
    },
    {
      invoiceID: "INV003",
      vendor: "123 Electronics",
      date: "2024-02-10",
      amount: 500.0,
      description: "Computer hardware purchase",
    },
    {
      invoiceID: "INV004",
      vendor: "Best Books Store",
      date: "2024-02-28",
      amount: 120.0,
      description: "Educational books purchase",
    },
    // Add more transactions as needed
  ];

  const exportToExcel = async () => {
    const xlsx = await import("xlsx");
    const worksheet = xlsx.utils.json_to_sheet(transactions);
    const workbook = {
      Sheets: { data: worksheet },
      SheetNames: ["data"],
    };
    const excelBuffer = xlsx.write(workbook, { bookType: "xlsx", type: "buffer" });
    saveAsExcel(excelBuffer, "ledger-summary.xlsx");
  };

  const saveAsExcel = (buffer, fileName) => {
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 200);
  };

  const generatePDF = () => {
    const input = document.getElementById("ledger-summary");
    html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");

      const imgWidth = 595.28;
      const pageHeight = 841.89;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("ledger-summary.pdf");
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Ledger Summary</h2>
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
            <table className={styles.dashboardTable} id="ledger-summary">
              <thead>
                <tr>
                  <th>Invoice ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Description</th>
                  <th>Vendor</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>
                      <p className={styles.employeeID}>{transaction.invoiceID}</p>
                    </td>
                    <td>{transaction.date}</td>
                    <td>${transaction.amount}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.vendor}</td>
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
        {/* <div
          className={styles.fullWidthContainer}
          style={{ textAlign: "right", marginTop: "20px" }}
        >
          <button onClick={exportToExcel} className={styles.pdfButton}>
            Export to Excel
          </button>
          <button onClick={generatePDF} className={styles.pdfButton}>
            Download PDF
          </button>
        </div> */}
        <div
          className={styles.fullWidthContainer}
          style={{ textAlign: "right", marginTop: "20px" }}
        > 
          <PdfExport contentId="ledger-summary" fileName="ledger-summary.pdf" />
          <ExcelExport data={transactions} fileName="ledger-summary.xlsx" />
        </div>
      </div>
    </>
  );
}
