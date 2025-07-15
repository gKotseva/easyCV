import "./Builder.modules.css";

import { DndContext } from "@dnd-kit/core";
import { useRef, useState } from "react";

import { Preview } from "../features/builder/Preview";
import { SidePanel } from "../features/builder/SidePanel";
import { Toolbar } from "../features/builder/Toolbar";

export const Builder = () => {
  const cvRef = useRef();
  const [droppedSections, setDroppedSections] = useState([]);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const handleDragEnd = (event) => {
    const { over, active } = event;

    if (!over) return;

    if (over.id === "template-drop-zone") {
      const droppedSectionData = active.data?.current?.section;

      if (
        droppedSectionData &&
        !droppedSections.some((s) => s.id === droppedSectionData.id)
      ) {
        setDroppedSections((prev) => [...prev, droppedSectionData]);
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="builder-container">
        <div className="side-container">
          <SidePanel />
        </div>
        <div className="main-container">
          <Toolbar cvRef={cvRef} setIsPreviewMode={setIsPreviewMode} />
          <Preview
            droppedSections={droppedSections}
            setDroppedSections={setDroppedSections}
            cvRef={cvRef}
            isPreviewMode={isPreviewMode}
          />
        </div>
      </div>
    </DndContext>
  );
};
