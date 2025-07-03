import html2pdf from "html2pdf.js";

export function CVButtons({ ref }) {
  const generatePdfDownload = () => {
    const element = ref.current;

    const opt = {
      filename: "CV.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  const generatePdfPreview = () => {
    const element = ref.current;

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
      });
  };

  return (
    <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
      <button onClick={generatePdfPreview} className="orange-button">
        Preview
      </button>

      <button onClick={generatePdfDownload} className="blue-button">
        Download
      </button>
    </div>
  );
}
