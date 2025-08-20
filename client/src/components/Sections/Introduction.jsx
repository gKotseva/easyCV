import "./styles.css";

export const Introduction = ({ theme, section }) => {
  return (
    <>
      <div className={`section-container ${theme}`}>
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
