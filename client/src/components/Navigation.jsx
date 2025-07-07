import { useNavigate } from "react-router-dom";
import "./Navigation.modules.css";
import { useState } from "react";
import { Modal } from "./Modal";

export const Navigation = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="navigation-container">
      <div className="logo">
        <img src="no-image.png"></img>
      </div>
      <div className="pages">
        <ul>
          <button className="orange-button" onClick={() => setOpenModal(true)}>
            Create a CV
          </button>
          <li>Login</li>
          <li>Logout</li>
        </ul>
      </div>
      {openModal && <Modal />}
    </div>
  );
};
