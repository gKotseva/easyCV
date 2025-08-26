const { executeQuery } = require("./db");

exports.getSections = () => {
  const query = `SELECT
  cs.cv_section_id   AS section_id,
  cs.cv_section_name AS section_name,
  cs.cv_section_label AS section_label,
  CAST(
    CONCAT(
      '[',
      GROUP_CONCAT(JSON_QUOTE(sf.field_name) ORDER BY sf.id SEPARATOR ','),
      ']'
    ) AS JSON
  ) AS fields
FROM cv_sections cs
JOIN section_fields sf
  ON cs.cv_section_id = sf.section_id
GROUP BY cs.cv_section_id, cs.cv_section_name, cs.cv_section_label
ORDER BY 
  CASE cs.cv_section_label
    WHEN 'introduction'        THEN 1
    WHEN 'contact_information' THEN 2
    WHEN 'summary'             THEN 3
    WHEN 'work_experience'     THEN 4
    WHEN 'education'           THEN 5
    WHEN 'soft_skills'         THEN 6
    WHEN 'technical_skills'    THEN 7
    ELSE 999
  END;`;

  return executeQuery(query);
};

exports.saveCV = (userId, title, theme, columns, data) => {
  const query = `INSERT INTO cvs(user_id, title, theme, columns, data) VALUES(?, ?, ?, ?, ?)`;

  return executeQuery(query, [userId, title, theme, columns, data]);
};

exports.updateCV = (userId, title, theme, columns, data, cvId) => {
  const query = `
        UPDATE cvs
        SET title = ?, theme = ?, columns = ?, data = ?
        WHERE cv_id = ?
      `;
  executeQuery(query, [title || null, theme, columns, data, cvId]);
};
