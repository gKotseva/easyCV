import "./styles.css";

export const ContactInformation = ({ theme, section }) => {
  return (
    <>
      <div className={`section-container ${theme}`}>
        <h1
          className="section-title"
          style={theme === "theme3" ? { display: "none" } : null}
        >
          {section.section_name}
        </h1>
        <div className="section-body">
          <div
            className={`${section.section_label}-entry`}
            style={
              theme === "theme3"
                ? {
                    borderTop: "1px solid black",
                    borderBottom: "1px solid black",
                    padding: "1em 0em",
                  }
                : null
            }
          >
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
