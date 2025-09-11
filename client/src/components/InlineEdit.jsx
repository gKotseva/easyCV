import { useState, useEffect, useRef } from "react";

export const InlineEdit = ({
  inputType = "text",
  initialValue = "",
  onSave,
  forceEdit = false,
}) => {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(forceEdit);
  const inputRef = useRef(null);

  useEffect(() => {
    if (forceEdit) {
      setIsEditing(true);
    }
  }, [forceEdit]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = () => {
    if (onSave) onSave(value);
    setIsEditing(false);
  };

  const commonProps = {
    value,
    ref: inputRef,
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
      <input
        {...commonProps}
        style={{
          width: "100%",
          border: "none",
          borderBottom: "1px solid #00c8aa",
          outline: "none",
          padding: "0.2em 0.2em",
          background: "transparent",
        }}
      />
    )
  ) : (
    <span onClick={() => setIsEditing(true)}>{value || "Click to edit"}</span>
  );
};
