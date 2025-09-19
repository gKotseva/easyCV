import { IoIosReorder } from "react-icons/io";
import { GoTrash } from "react-icons/go";
import { useCV } from "../../context/CV";

export const SectionControllers = ({ children, section }) => {
  const { removeSection } = useCV();

  return (
    <div className="section-wrapper">
      <div className="controllers">
        <IoIosReorder onClick={() => console.log("reordering")} />
        <GoTrash
          color="red"
          onClick={() => removeSection(section.section_id)}
        />
      </div>
      <div className="section-content">{children}</div>
    </div>
  );
};
