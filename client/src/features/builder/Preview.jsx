import "./Preview.modules.css";

import { useDroppable, useDndMonitor } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SectionPreview } from "./SectionPreview";
import { RxDragHandleDots2 } from "react-icons/rx";
import { BsTrash } from "react-icons/bs";

const SortableSection = ({ section, isPreviewMode }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: isPreviewMode ? "default" : "grab",
  };

  return (
    <div ref={setNodeRef} style={style} className="dropped-section">
      <div className="section-preview">
        <SectionPreview section={section} />
        {!isPreviewMode && (
          <div className="section-controllers">
            <span className="drag-handle" {...attributes} {...listeners}>
              <RxDragHandleDots2 />
            </span>
            <span>
              <BsTrash />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export const Preview = ({
  droppedSections,
  setDroppedSections,
  cvRef,
  isPreviewMode,
  color,
}) => {
  const { setNodeRef, isOver } = useDroppable({
    id: "template-drop-zone",
  });

  const combinedRef = (node) => {
    setNodeRef(node);
    if (cvRef) cvRef.current = node;
  };

  useDndMonitor({
    onDragEnd(event) {
      const { active, over } = event;

      if (!over || active.id === over.id) return;

      const oldIndex = droppedSections.findIndex((s) => s.id === active.id);
      const newIndex = droppedSections.findIndex((s) => s.id === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        const reordered = arrayMove(droppedSections, oldIndex, newIndex);
        setDroppedSections(reordered);
      }
    },
  });

  return (
    <SortableContext
      items={droppedSections.map((s) => s.id)}
      strategy={verticalListSortingStrategy}
    >
      <div
        className={`preview ${isOver ? "preview-over" : ""} ${
          isPreviewMode ? "preview-hidden-border" : ""
        }`}
        ref={combinedRef}
        style={{ background: color }}
      >
        {droppedSections.map((section) => (
          <SortableSection
            key={section.id}
            section={section}
            isPreviewMode={isPreviewMode}
          />
        ))}
      </div>
    </SortableContext>
  );
};
