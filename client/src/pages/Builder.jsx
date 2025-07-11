import "./Builder.modules.css";
import { DndContext } from "@dnd-kit/core";
import { useRef, useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";

import { Preview } from "../features/builder/Preview";
import { SidePanel } from "../features/builder/SidePanel";
import { Toolbar } from "../features/builder/Toolbar";

export const Builder = () => {
  const cvRef = useRef();
  const [droppedSections, setDroppedSections] = useState([]);

  const handleDragEnd = (event) => {
    const { over, active } = event;

    if (over?.id === "template-drop-zone") {
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
          <Toolbar cvRef={cvRef} />
          <Preview droppedSections={droppedSections} cvRef={cvRef} />
        </div>
      </div>
    </DndContext>
  );
};
