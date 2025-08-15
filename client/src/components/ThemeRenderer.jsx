import "./ThemeRenderer.modules.css";

import { SectionControllers } from "./SectionControllers";

import { Themes } from "./Themes/Themes";

const OneColumnLayout = ({ sections }) => {
  return (
    <div className="one-column-layout">
      {Object.keys(sections).map((key) => {
        const SectionComponent = sections[key];
        return (
          <div key={key} className="builder-preview-section transition">
            <SectionControllers />
            <div className="section">
              <SectionComponent />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const TwoColumnLayout = ({ sections }) => {
  const sectionKeys = Object.keys(sections);
  const midIndex = Math.ceil(sectionKeys.length / 2);
  const leftSections = sectionKeys.slice(0, midIndex);
  const rightSections = sectionKeys.slice(midIndex);

  return (
    <div className="two-column-layout" style={{ display: "flex", gap: "2rem" }}>
      <div className="left-column" style={{ flex: 1 }}>
        {leftSections.map((key) => {
          const SectionComponent = sections[key];
          return (
            <div key={key} className="builder-preview-section transition">
              <SectionControllers />
              <div className="section">
                <SectionComponent />
              </div>
            </div>
          );
        })}
      </div>
      <div className="right-column" style={{ flex: 1 }}>
        {rightSections.map((key) => {
          const SectionComponent = sections[key];
          return (
            <div key={key} className="builder-preview-section transition">
              <SectionControllers />
              <div className="section">
                <SectionComponent />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ThemeRenderer = ({ columns, theme }) => {
  const themeInformation = Themes[columns]?.find((t) => t.name === theme);
  const sections = themeInformation.sections;

  return columns === "oneColumn" ? (
    <OneColumnLayout sections={sections} />
  ) : (
    <TwoColumnLayout sections={sections} />
  );
};
