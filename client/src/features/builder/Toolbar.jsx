import "./Toolbar.modules.css";

export const Toolbar = () => {
  return (
    <div className="toolbar">
      <button className="orange-button">Preview</button>
      <button className="blue-button">Export</button>
      <button className="green-button">Save</button>
    </div>
  );
};
