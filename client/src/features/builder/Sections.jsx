import "./Sections.modules.css";

import { useDraggable } from "@dnd-kit/core";

export const Sections = () => {
  const sections = [
    { id: 1, name: "Personal Info" },
    { id: 2, name: "Contact Details" },
    { id: 3, name: "Summary" },
    { id: 4, name: "Work Experience" },
    { id: 5, name: "Education" },
    { id: 6, name: "Technical Skills" },
    { id: 7, name: "Soft Skills" },
    { id: 8, name: "Projects" },
    { id: 9, name: "Languages" },
  ];

  return (
    <div className="sections-panel">
      {sections.map((section) => (
        <DraggableSection key={section.id} section={section} />
      ))}
    </div>
  );
};

const DraggableSection = ({ section }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `section-${section.id}`,
    data: {
      type: "section",
      section,
    },
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  return (
    <div
      className="section"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <img src="no-image.png" alt="placeholder" />
      <h5>{section.name}</h5>
    </div>
  );
};
