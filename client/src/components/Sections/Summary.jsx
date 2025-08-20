import "./styles.css";

export const Summary = ({ theme, section }) => {
  return (
    <>
      <div className={`section-container ${theme}`}>
        <h1 className="section-title">{section.section_name}</h1>
        <div className="section-body">
          <div className={`${section.section_label}-entry`}>
            {section.fields.map((field) => (
              <div key={field} className={`field ${field}`}>
                {field}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
