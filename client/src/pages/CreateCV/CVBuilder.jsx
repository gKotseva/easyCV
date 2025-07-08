import { useLocation } from "react-router-dom";
import { Template1 } from "../../components/CVTemplates/OneColumnTemplates/Template1";
import { Sections } from "../../components/Sections";
import { CVButtons } from "../../components/CVButtons";
import { useRef, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import "./CVBuilder.modules.css";

export const CVBuilder = () => {
  const cvRef = useRef();
  const location = useLocation();
  const { templateId } = location.state || {};

  const [droppedSections, setDroppedSections] = useState([]);

  const renderTemplate = () => {
    switch (templateId) {
      case 1:
        return <Template1 droppedSections={droppedSections} />;
      default:
        return <div>No template selected</div>;
    }
  };

  const handleDragEnd = (event) => {
    const { over, active } = event;

    if (over?.id === "template-drop-zone") {
      const droppedSectionData = active.data?.current;

      if (
        droppedSectionData &&
        !droppedSections.some((section) => section.id === droppedSectionData.id)
      ) {
        setDroppedSections((prev) => [...prev, droppedSectionData]);
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="builder-container">
        <div className="builder-sidebar">
          <Sections />
        </div>
        <div className="builder-body">
          <div className="builder-heading">
            <CVButtons ref={cvRef} />
          </div>
          <div className="builder-template">{renderTemplate()}</div>
        </div>
      </div>
    </DndContext>
  );
};
