import "./Profile.modules.css";

import { IoSettings } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { MdLiveHelp } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { useState } from "react";

import { Modal } from "../components/Modal";
import { Layouts } from "../features/builder/Layouts";

export const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="profile-container">
      <div className="profile-sideBar">
        <div className="profile-upper-sideBar">
          <div>
            <IoSettings />
            <p>Settings</p>
          </div>
          <div>
            <TbListDetails />
            <p>CV Details</p>
          </div>
        </div>
        <div className="profile-lower-sideBar">
          <div>
            <MdLiveHelp />
            <p>Help</p>
          </div>
          <div>
            <ImProfile />
            <p>Profile</p>
          </div>
        </div>
      </div>
      <div className="profile-body">
        <div className="profile-header">
          <button
            className="orange-button"
            onClick={() => setIsModalOpen(true)}
          >
            Create CV
          </button>
        </div>
        <div className="profile-files">
          <h4>Your files</h4>
          <div className="profile-files-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              quam natus ipsum debitis ad aliquid doloribus laboriosam provident
              officiis, vel pariatur, maiores nam, sunt asperiores nisi? Vel
              velit amet laborum?
            </p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <Layouts />
        </Modal>
      )}
    </div>
  );
};
