import { useState } from "react";

export const InlineEdit = ({ field, initialValue, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue || "");

  const handleFinishEdit = (e) => {
    if (e.type === "blur" || (e.type === "keydown" && e.key === "Enter")) {
      setIsEditing(false);
      if (value !== initialValue && onSave) {
        onSave(value);
      }
    }
  };

  return !isEditing ? (
    <p
      onClick={() => setIsEditing(true)}
      style={{
        cursor: "pointer",
        fontStyle: !initialValue ? "italic" : "normal",
      }}
    >
      {value || field}
    </p>
  ) : (
    <input
      type="text"
      value={value}
      autoFocus
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleFinishEdit}
      onKeyDown={handleFinishEdit}
      style={{
        border: "none",
        borderBottom: "2px solid orange",
        outline: "none",
        padding: "2px",
      }}
    />
  );
};
