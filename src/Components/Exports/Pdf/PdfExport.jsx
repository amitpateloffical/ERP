import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PdfExport = ({ contentId, fileName }) => {
  const generatePDF = () => {
    const input = document.getElementById(contentId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(fileName);
    });
  };

  return <button onClick={generatePDF}>Export to PDF</button>;
};

export default PdfExport;
