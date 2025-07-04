import "./Main.modules.css";

import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { Sections } from "./Sections";
import { Column } from "./Column";
import { sections } from "../cvData";

export const Main = () => {
  const [allSections, setAllSections] = useState(sections);

  const [columns, setColumns] = useState([
    { id: "column-1", name: "Column 1", sections: [] },
    { id: "column-2", name: "Column 2", sections: [] },
  ]);

  const handleDragEnd = ({ active, over }) => {
    if (!over) return;

    const section = active.data.current;
    const columnId = over.id;

    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? col.sections.some((s) => s.id === section.id)
            ? col
            : { ...col, sections: [...col.sections, section] }
          : col
      )
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="layout">
        <Sections sections={allSections} />
        <div className="columns">
          {columns.map((col) => (
            <Column
              key={col.id}
              id={col.id}
              name={col.name}
              sections={col.sections}
            />
          ))}
        </div>
      </div>
    </DndContext>
  );
};
