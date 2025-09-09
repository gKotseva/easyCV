import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modal, setModal] = useState({ open: false, content: null });

  const showModal = (content) => setModal({ open: true, content });
  const hideModal = () => setModal({ open: false, content: null });

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  };

  const contentStyle = {
    background: "#1f252d",
    padding: "2em",
    borderRadius: "10px",
    minWidth: "300px",
    maxWidth: "90vw",
    color: "white",
    boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
    position: "relative",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "0.5em",
    right: "0.5em",
    background: "transparent",
    border: "none",
    color: "red",
    fontSize: "1.2em",
    cursor: "pointer",
  };

  return (
    <ModalContext.Provider value={{ modal, showModal, hideModal }}>
      {children}
      {modal.open && (
        <div style={overlayStyle} onClick={hideModal}>
          <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
            <button style={closeButtonStyle} onClick={hideModal}>
              ×
            </button>
            {modal.content}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
