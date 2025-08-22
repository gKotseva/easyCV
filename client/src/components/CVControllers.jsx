import "./CVControllers.modules.css";

export const CVControllers = ({
  saveHandler,
  downloadHandler,
  previewHandler,
}) => {
  return (
    <div className="cv-controllers">
      <button className="btn btn-green" onClick={saveHandler}>
        Save
      </button>
      <button className="btn btn-orange" onClick={previewHandler}>
        Preview
      </button>
      <button className="btn btn-blue" onClick={downloadHandler}>
        Download
      </button>
    </div>
  );
};
