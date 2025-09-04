import "./SectionControllers.modules.css";
import { BsTrash } from "react-icons/bs";
import { IoMdReorder } from "react-icons/io";

export const SectionControllers = ({ children }) => {
  return (
    <div className="controllers-container">
      <div className="controller-buttons">
        <button onClick={() => console.log("reordering")}>
          <IoMdReorder size={"0.8em"} />
        </button>
        <button onClick={() => console.log("deleting section")}>
          <BsTrash size={"0.7em"} color="red" />
        </button>
      </div>
      {children}
    </div>
  );
};

export const InnerControllers = ({
  section,
  handleAddMore,
  handleRemove,
  index,
}) => {
  return (
    <div className="inner-container">
      {section.multiple && (
        <button
          onClick={() => handleAddMore(section)}
          className="add-entry-button animation-up"
        >
          +
        </button>
      )}
      <button
        onClick={() => handleRemove(section.section_id, index)}
        className="remove-entry-button animation-up"
      >
        x
      </button>
    </div>
  );
};
