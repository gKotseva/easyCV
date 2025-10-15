import { useCV } from "../../context/CV";

export const SectionCards = () => {
  const { sections, cv, removeSection, addSection } = useCV();

  if (!sections) return <p>Loading...</p>;

  const isSectionInCV = (sectionId) =>
    cv.data.some((obj) => Number(Object.keys(obj)[0]) === sectionId);

  return (
    <div className="section-cards-container">
      {sections.map((s) => (
        <div className="section-card" key={s.section_id}>
          {s.section_name}
          <input
            type="checkbox"
            checked={isSectionInCV(s.section_id)}
            onChange={(e) => {
              if (e.target.checked) {
                addSection(s);
              } else {
                removeSection(s.section_id);
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};
