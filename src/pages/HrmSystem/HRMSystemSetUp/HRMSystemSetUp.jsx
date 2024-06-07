import React, { useEffect, useState } from "react";
import styles from "../HRMS.module.css";
import style from "./HRMSystemSetUp.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Visibility } from "@mui/icons-material";
import TabSidebar from "../../../Components/TabSidebar/TabSidebar";
import { data } from "./HRMSystemSetUpFunction.jsx";
import TableContent from "../../../Components/TableContent/TableContent.jsx";

export default function HRMSystemSetUp() {
  const [activeTab, setActiveTab] = useState("Branch");

  const renderContent = () => {
    const content = data[activeTab];
    if (content) {
      return <TableContent title={content.title} columns={content.columns} data={content.data} />;
    }
    return <div>Select a tab to view content</div>;
  };
  return (
    <>
      <div className={styles.container}>
        <div className={style.upperContainer}>
          <div className={style.sidebar}>
            <TabSidebar onTabChange={setActiveTab} />
          </div>
          <div className={style.contentBar}>{renderContent()}</div>
        </div>
      </div>
    </>
  );
}

// function BranchContent() {
//   const reportData = [
//     {
//       name: "China",
//     },
//     {
//       name: "India",
//     },
//     {
//       name: "Canada",
//     },
//     {
//       name: "Greece",
//     },
//     {
//       name: "Italy",
//     },
//   ];

//   return (
//     <>
//       <div className={styles.fullWidthContainer}>
//         <h2 className={styles.textGreen}>Manage Branch</h2>
//       </div>
//       <div className={styles.fullWidthContainer} style={{ margin: "0" }}>
//         <div className={styles.reportTableContainer}>
//           <div className={styles.tableTop}>
//             <div className={styles.tableTopleft}>
//               <select>
//                 <option>5</option>
//                 <option>10</option>
//                 <option>15</option>
//                 <option>20</option>
//               </select>
//               <p>entries per Page</p>
//             </div>
//             <div className={styles.field}>
//               <input type="text" placeholder="Search..." />
//             </div>
//           </div>
//           <table className={styles.dashboardTable}>
//             <thead>
//               <tr>
//                 <th style={{ width: "85%" }}>BRANCH</th>
//                 <th>ACTION</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reportData.map((report, index) => (
//                 <tr key={index}>
//                   <td>{report.name}</td>
//                   <td>
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-evenly",
//                         alignItems: "center",
//                       }}
//                     >
//                       <Tooltip title="Edit">
//                         <IconButton
//                           style={{ backgroundColor: "green", color: "white", padding: "5px" }}
//                         >
//                           <EditIcon style={{ fontSize: "20px" }} />
//                         </IconButton>
//                       </Tooltip>
//                       <Tooltip title="Delete">
//                         <IconButton
//                           style={{ backgroundColor: "red", color: "white", padding: "5px" }}
//                         >
//                           <DeleteIcon style={{ fontSize: "20px" }} />
//                         </IconButton>
//                       </Tooltip>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div className={styles.tableBottom}>
//             <p>
//               Showing 1 to {reportData.length} of {reportData.length} entries
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

 
 
 
 
           































// const renderContent = () => {
//   switch (activeTab) {
//     case "Branch":
//       return (
//         <TableContent
//           title={data[activeTab].title}
//           columns={data[activeTab].columns}
//           data={data[activeTab].data}
//         />
//       );
//     case "Department":
//       return <DepartmentContent />;
//     case "Designation":
//       return <DesignationContent />;
//     case "Leave Type":
//       return <LeaveTypeContent />;
//     case "Document Type":
//       return <DocTypeContent />;
//     case "PaySlip Type":
//       return <PaySlipTypeContent />;
//     case "Allowance Option":
//       return <AllowanceOptionContent />;
//     case "Loan Option":
//       return <LoanOptionContent />;
//     case "Deduction Option":
//       return <DeductionOptionContent />;
//     case "Goal Type":
//       return <GoalTypeContent />;
//     case "Training Type":
//       return <TrainingTypeContent />;
//     case "Award Type":
//       return <AwardTypeContent />;
//     case "Termination Type":
//       return <TerminationTypeContent />;
//     case "Job Category":
//       return <DesignationContent />;
//     case "Job Stage":
//       return <DesignationContent />;
//     case "Performance Type":
//       return <DesignationContent />;
//     case "Competencies":
//       return <DesignationContent />;
//     default:
//       return <div>Select a tab to view content</div>;
//   }
// };
