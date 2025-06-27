import html2pdf from "html2pdf.js";

export const DownloadButton = ({ targetRef }) => {
  const handleDownloadPDF = () => {
    const element = targetRef.current;

    if (!element) {
      console.error("No DOM element found");
      return;
    }

    const opt = {
      margin: 0,
      filename: "cv.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    try {
      html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => console.log("PDF Generated!"))
        .catch((err) => console.error("Error generating PDF:", err));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <button
      onClick={handleDownloadPDF}
      className="mb-4 px-4 py-2 text-white rounded bg-linear-to-r from-cyan-500 to-blue-500 uppercase tracking-wider"
    >
      Export
    </button>
  );
};
