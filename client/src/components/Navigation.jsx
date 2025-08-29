import { AuthForms } from "./Forms/AuthForms";
import { Modal } from "./Modal/Modal";
import "./Navigation.modules.css";

import { useEffect, useState } from "react";

export const Navigation = () => {
  const phrases = [
    "Build your CV in minutes — fast and easy!",
    "Choose from 100+ professional templates",
    "Stand out with a sleek, modern design",
    "Download and share your CV instantly",
    "Tailor your CV for any job with ease",
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formName, setFormName] = useState("");

  const openModal = (formType) => {
    setFormName(formType);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 500);
    }, 2500);

    return () => {
      clearInterval(fadeTimeout);
    };
  }, [phrases.length]);

  return (
    <div className="navigation">
      <div className="logo">
        <img src="./no-image.png" />
      </div>
      <div className={`phrases ${fade ? "fade-in" : "fade-out"}`}>
        {phrases[phraseIndex]}
      </div>
      <div className="menu">
        <div onClick={() => openModal("login")}>Login</div>
        <div onClick={() => openModal("register")}>Register</div>
        {/* <div>Logout</div> */}
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <AuthForms formName={formName} />
          </Modal>
        )}
      </div>
    </div>
  );
};
