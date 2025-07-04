import { useDraggable } from "@dnd-kit/core";
import "./Sections.modules.css";

export const Sections = ({ sections }) => {
  return (
    <div className="sections-container">
      <h3>Sections</h3>
      <div className="sections">
        {sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export const Section = ({ section }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `section-${section.id}`,
    data: section,
  });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    <div
      className="navigation-section-card"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <p>{section.name}</p>
    </div>
  );
};
