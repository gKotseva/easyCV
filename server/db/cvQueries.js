const { executeQuery } = require("./db");

exports.getSections = () => {
  const query = `SELECT
  cs.cv_section_id   AS section_id,
  cs.cv_section_name AS section_name,
  cs.cv_section_label AS section_label,
  cs.multiple,
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
GROUP BY cs.cv_section_id, cs.cv_section_name, cs.cv_section_label;`;

  return executeQuery(query);
};

exports.saveCV = (userId, title, theme, columns, data) => {
  const query = `INSERT INTO cv_details(user_id, title, theme, columns, data) VALUES(?, ?, ?, ?, ?)`;

  return executeQuery(query, [userId, title, theme, columns, data]);
};

exports.updateCV = (title, theme, columns, data, cvId) => {
  const query = `
        UPDATE cv_details
        SET title = ?, theme = ?, columns = ?, data = ?
        WHERE cv_id = ?
      `;
  return executeQuery(query, [title, theme, columns, data, cvId]);
};

exports.getDocuments = (userId) => {
  const query = `SELECT * FROM cv_details WHERE user_id=?`;

  return executeQuery(query, [userId]);
};
