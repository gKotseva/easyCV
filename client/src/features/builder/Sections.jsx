import "./Sections.modules.css";

export const Sections = () => {
  const sections = [
    { id: 1, name: "Personal Info" },
    { id: 2, name: "Contact Details" },
    { id: 3, name: "Summary" },
    { id: 4, name: "Work Experience" },
    { id: 5, name: "Education" },
    { id: 6, name: "Technical Skills" },
    { id: 7, name: "Soft Skills" },
    { id: 8, name: "Projects" },
    { id: 9, name: "Languages" },
  ];

  return (
    <div className="sections-panel">
      {sections.map((section) => (
        <div className="section" key={section.id}>
          <img src="no-image.png" />
          <h5>{section.name}</h5>
        </div>
      ))}
    </div>
  );
};
