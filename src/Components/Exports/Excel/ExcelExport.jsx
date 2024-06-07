import React from "react";

const ExcelExport = ({ data, fileName }) => {
  const exportToExcel = async () => {
    const xlsx = await import("xlsx");
    const worksheet = xlsx.utils.json_to_sheet(data);
    const workbook = {
      Sheets: { data: worksheet },
      SheetNames: ["data"],
    };
    const excelBuffer = xlsx.write(workbook, { bookType: "xlsx", type: "buffer" });
    saveAsExcel(excelBuffer, fileName);
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

  return <button onClick={exportToExcel}>Export to Excel</button>;
};

export default ExcelExport;
