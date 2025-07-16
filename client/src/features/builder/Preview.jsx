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
import { useState } from "react";

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

  const [overId, setOverId] = useState(null);

  useDndMonitor({
    onDragOver(event) {
      const { active, over } = event;
      if (!active || !over) return;

      const isNewSection = !!active.data?.current?.section;

      if (isNewSection) {
        setOverId(over.id); // запазваме ID-то върху което се дропва
      }
    },

    onDragEnd(event) {
      const { active, over } = event;
      if (!over) return;

      const isNewSection = !!active.data?.current?.section;

      if (isNewSection) {
        const droppedSection = active.data.current.section;

        // Не добавяй повторно, ако вече съществува
        if (droppedSections.some((s) => s.id === droppedSection.id)) return;

        const targetId = overId || over.id;
        const insertIndex = droppedSections.findIndex((s) => s.id === targetId);

        if (insertIndex === -1) {
          setDroppedSections([...droppedSections, droppedSection]); // ако е пуснат извън секция
        } else {
          const updated = [...droppedSections];
          updated.splice(insertIndex, 0, droppedSection);
          setDroppedSections(updated);
        }
      } else {
        // Пренареждане на вече добавени секции
        const oldIndex = droppedSections.findIndex((s) => s.id === active.id);
        const newIndex = droppedSections.findIndex((s) => s.id === over.id);

        if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
          const reordered = arrayMove(droppedSections, oldIndex, newIndex);
          setDroppedSections(reordered);
        }
      }

      setOverId(null); // нулирай
    },
  });

  return (
    <SortableContext
      items={droppedSections.map((s) => s.id)}
      strategy={verticalListSortingStrategy}
    >
      <div
        className={`preview ${isOver ? "preview-over" : ""} ${
          isPreviewMode ? "preview-hidden-border preview-full-page" : ""
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
