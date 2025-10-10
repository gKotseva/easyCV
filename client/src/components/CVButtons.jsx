export const CVButtons = () => {
  const buttons = [
    { name: "Save", class: "green" },
    { name: "Download", class: "blue" },
    { name: "Preview", class: "orange" },
  ];

  return (
    <div style={{ display: "flex", gap: "0.5em" }}>
      {buttons.map((b) => (
        <button className={`button ${b.class}`}>{b.name}</button>
      ))}
    </div>
  );
};
