import "./BuilderNav.modules.css";
import { IoMdMenu } from "react-icons/io";
import { RiFontSansSerif } from "react-icons/ri";
import { IoIosColorFilter } from "react-icons/io";
import { FiSave } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";
import { VscOpenPreview } from "react-icons/vsc";

export const BuilderNav = () => {
  return (
    <div className="builder-controllers">
      <div className="logo-container">
        <img src="no-image.png" />
      </div>
      <div className="formatting-container">
        <div className="formatting-nav">
          <div className="styling">
            <p className="animation-up">
              <RiFontSansSerif /> Fonts
            </p>
            <p className="animation-up">
              <IoIosColorFilter />
              Colors
            </p>
          </div>
          <div className="control">
            <button className="btn-green animation-up">
              <FiSave size={"1.3em"} /> Save
            </button>
            <button className="btn-orange animation-up">
              <VscOpenPreview size={"1.3em"} /> Preview
            </button>
            <button className="btn-blue animation-up">
              <BsDownload size={"1.3em"} /> Download
            </button>
          </div>
        </div>
      </div>
      <div className="menu-container">
        <div className="animation-up">
          <p>My Documents</p>
          <IoMdMenu />
        </div>
      </div>
    </div>
  );
};
