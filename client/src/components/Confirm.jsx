import "./Confirm.modules.css";

export const Confirm = ({ message = "Are you sure?", onConfirm, onCancel }) => {
  return (
    <div className="confirm-container">
      <p>{message}</p>
      <div className="confirm-buttons">
        <button className="confirm-yes" onClick={onConfirm}>
          Yes
        </button>
        <button className="confirm-no" onClick={onCancel}>
          No
        </button>
      </div>
    </div>
  );
};
