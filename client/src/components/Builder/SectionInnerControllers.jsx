import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { useCV } from "../../context/CV";

export const SectionInnerControllers = ({ section, removeId }) => {
  const { addSectionItem, removeSectionItem } = useCV();

  return (
    <div className="inner-controllers">
      <IoIosAddCircle color="green" onClick={() => addSectionItem(section)} />
      <MdOutlineRemoveCircle
        color="red"
        onClick={() => removeSectionItem(section, removeId)}
      />
    </div>
  );
};
