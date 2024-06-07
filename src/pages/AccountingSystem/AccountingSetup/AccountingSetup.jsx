import React, { useState } from "react";
import styles from "../AccountingSystem.module.css";
import style from "./AccountingSetup.module.css";
import { data } from "./AccountingSetupFunction.jsx";
import TableContent from "../../../Components/TableContent/TableContent.jsx";
import TabSidebar from "../../../Components/TabSidebar/TabSidebar.jsx";

export default function AccountingSetup() {
  const [activeTab, setActiveTab] = useState("Taxes");
  const tabData = [
    { name: "Taxes", key: "Taxes" },
    { name: "Category", key: "Category" },
    { name: "Unit", key: "Unit" },
    { name: "Custom field", key: "CustomField" },
  ];
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
            <TabSidebar onTabChange={setActiveTab} tabData={tabData} />
          </div>
          <div className={style.contentBar}>{renderContent()}</div>
        </div>
      </div>
    </>
  );
}
