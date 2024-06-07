// import React, { useState } from "react";
// import styles from "./TabSidebar.module.css";
// import { MdChevronRight } from "react-icons/md";

// export default function TabSidebar({ onTabChange }) {
//   const tabData = [
//     { name: "Branch", key: "Branch" },
//     { name: "Department", key: "Department" },
//     { name: "Designation", key: "Designation" },
//     { name: "Leave Type", key: "LeaveType" },
//     { name: "Document Type", key: "DocumentType" },
//     { name: "PaySlip Type", key: "PaySlipType" },
//     { name: "Allowance Option", key: "AllowanceOption" },
//     { name: "Loan Option", key: "LoanOption" },
//     { name: "Deduction Option", key: "DeductionOption" },
//     { name: "Goal Type", key: "GoalType" },
//     { name: "Training Type", key: "TrainingType" },
//     { name: "Award Type", key: "AwardType" },
//     { name: "Termination Type", key: "TerminationType" },
//     { name: "Job Category", key: "JobCategory" },
//     { name: "Job Stage", key: "JobStage" },
//     { name: "Performance Type", key: "PerformanceType" },
//     { name: "Competencies", key: "Competencies" },
//   ];
//   const [activeTab, setActiveTab] = useState(tabData[0].key);

//   const handleTabClick = (tabName) => {
//     setActiveTab(tabName);
//     onTabChange(tabName);
//   };
//   return (
//     <div className={styles.sidebar}>
//       {tabData.map((tab, index) => (
//         <div
//           //   className={styles.tabDiv}
//           key={tab.name}
//           className={`${activeTab === tab.key ? styles.toggleActive : styles.tabDiv} `}
//           onClick={() => handleTabClick(tab.key)}
//         >
//           <p key={index}>{tab.name}</p>
//           <span>
//             <MdChevronRight />
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import styles from "./TabSidebar.module.css";
import { MdChevronRight } from "react-icons/md";

export default function TabSidebar(props) {
  const { onTabChange, tabData } = props;
  const [activeTab, setActiveTab] = useState(tabData[0].key);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    onTabChange(tabName);
  };
  return (
    <div className={styles.sidebar}>
      {tabData.map((tab, index) => (
        <div
          //   className={styles.tabDiv}
          key={tab.name}
          className={`${activeTab === tab.key ? styles.toggleActive : styles.tabDiv} `}
          onClick={() => handleTabClick(tab.key)}
        >
          <p key={index}>{tab.name}</p>
          <span>
            <MdChevronRight />
          </span>
        </div>
      ))}
    </div>
  );
}
