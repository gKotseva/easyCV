const { executeQuery } = require("./db");

exports.documents = (userId) => {
  const query = `SELECT * FROM cv_details WHERE user_id=?`;

  return executeQuery(query, [userId]);
};

exports.deleteDocument = (cvId) => {
  const query = `DELETE FROM cv_details WHERE cv_id=?`;

  return executeQuery(query, [cvId]);
};

exports.renameDocument = (cvId, title) => {
  const query = `UPDATE cv_details SET title = ?, updated_at = NOW() WHERE cv_id = ?;`;

  return executeQuery(query, [title, cvId]);
};

exports.getSections = () => {
  const query = `SELECT
  cs.cv_section_id   AS section_id,
  cs.cv_section_name AS section_name,
  cs.cv_section_label AS section_label,
  cs.multiple AS multiple,
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
