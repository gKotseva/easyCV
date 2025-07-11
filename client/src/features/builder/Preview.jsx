import { useDroppable } from "@dnd-kit/core";
import "./Preview.modules.css";

export const Preview = ({ droppedSections, cvRef }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: "template-drop-zone",
  });

  const combinedRef = (node) => {
    setNodeRef(node);
    if (cvRef) cvRef.current = node;
  };

  return (
    <div
      className={`preview ${isOver ? "preview-over" : ""}`}
      ref={combinedRef}
    >
      {droppedSections.map((section) => (
        <div key={section.id} className="dropped-section">
          <h4>{section.name}</h4>
        </div>
      ))}
    </div>
  );
};
