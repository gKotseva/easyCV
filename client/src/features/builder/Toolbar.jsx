import "./Toolbar.modules.css";

import html2pdf from "html2pdf.js";

export const Toolbar = ({ cvRef, setIsPreviewMode }) => {
  const generatePdfDownload = () => {
    const element = cvRef.current;

    setIsPreviewMode(true);

    setTimeout(() => {
      const opt = {
        filename: "CV.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      };

      html2pdf()
        .set(opt)
        .from(element)
        .save()
        .finally(() => {
          setIsPreviewMode(false);
        });
    }, 100);
  };

  const generatePdfPreview = () => {
    const element = cvRef.current;

    setIsPreviewMode(true);

    setTimeout(() => {
      const opt = {
        filename: "CV.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      };

      html2pdf()
        .set(opt)
        .from(element)
        .outputPdf("blob")
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url);
        })
        .finally(() => {
          setIsPreviewMode(false);
        });
    }, 100);
  };

  return (
    <div className="toolbar">
      <button className="orange-button" onClick={generatePdfPreview}>
        Preview
      </button>
      <button className="blue-button" onClick={generatePdfDownload}>
        Export
      </button>
      <button className="green-button">Save</button>
    </div>
  );
};
