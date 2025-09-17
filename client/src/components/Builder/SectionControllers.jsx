import { IoIosReorder } from "react-icons/io";
import { GoTrash } from "react-icons/go";

export const SectionControllers = ({ children }) => {
  return (
    <div className="section-wrapper">
      <div className="controllers">
        <IoIosReorder />
        <GoTrash color="red" />
      </div>
      <div className="section-content">{children}</div>
    </div>
  );
};
