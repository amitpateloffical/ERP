import React from "react";
import styles from "../style.module.css";
import { saveAs } from "file-saver";

const ExcelExport = ({ data, fileName }) => {
  const exportToExcel = async () => {
    try {
      const xlsx = await import("xlsx");
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = {
        Sheets: { data: worksheet },
        SheetNames: ["data"],
      };
      const excelBuffer = xlsx.write(workbook, { bookType: "xlsx", type: "array" });
      saveAsExcel(excelBuffer, fileName);
    } catch (error) {
      console.error("Error exporting to Excel: ", error);
    }
  };

  const saveAsExcel = (buffer, fileName) => {
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    saveAs(blob, fileName);
  };

  return (
    <button className={styles.buttonStyle} onClick={exportToExcel}>
      Export to Excel
    </button>
  );
};

export default ExcelExport;
