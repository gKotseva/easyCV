import * as request from "../lib/request";

export const getSections = async () => {
  try {
    const response = await request.get("/api/cv/sections");
    return response;
  } catch (error) {
    throw error;
  }
};

export const save = async (name, columns, theme, styling, sections) => {
  try {
    const response = await request.post("/api/cv/save", {
      name,
      columns,
      theme,
      styling,
      sections,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const update = async (name, columns, theme, styling, sections, cvId) => {
  try {
    const response = await request.put("/api/cv/update", {
      name,
      columns,
      theme,
      styling,
      sections,
      cvId,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
