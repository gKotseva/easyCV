import { MdOutlineFormatColorText } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { RiDraggable } from "react-icons/ri";
import { BsFillTrash3Fill } from "react-icons/bs";

export const SectionControllers = () => (
  <div className="control-icons transition">
    <MdOutlineFormatColorText className="animation-up transition" />
    <IoIosColorPalette className="animation-up transition" />
    <RiDraggable className="animation-up transition" />
    <BsFillTrash3Fill className="animation-up transition" />
  </div>
);
