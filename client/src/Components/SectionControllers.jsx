import "./SectionControllers.modules.css";

export const SectionControllers = ({ children }) => {
  return (
    <div className="controllers-container">
      <div className="controller-buttons">
        <button onClick={() => console.log("changing color")}>🎨</button>
        <button onClick={() => console.log("reordering")}>↕️</button>
        <button onClick={() => console.log("trash")}>🗑️</button>
      </div>
      {children}
    </div>
  );
};
