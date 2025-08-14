import { useState } from "react";

export const InlineEdit = ({
  inputType = "text",
  initialValue = "",
  onSave,
}) => {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    if (onSave) onSave(value);
    setIsEditing(false);
  };

  const commonProps = {
    value,
    autoFocus: true,
    onChange: (e) => setValue(e.target.value),
    onBlur: handleSave,
    onKeyDown: (e) => {
      if (e.key === "Enter") handleSave();
      if (e.key === "Escape") {
        setValue(initialValue);
        setIsEditing(false);
      }
    },
  };

  return isEditing ? (
    inputType === "textarea" ? (
      <textarea {...commonProps} style={{ width: "100%", height: "10em" }} />
    ) : (
      <input {...commonProps} style={{ width: "100%", height: "3em" }} />
    )
  ) : (
    <span onClick={() => setIsEditing(true)}>{value || "Click to edit"}</span>
  );
};
