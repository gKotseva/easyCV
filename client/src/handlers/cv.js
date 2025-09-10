import * as request from "../lib/request";

export const getAllDocuments = async (userId) => {
  try {
    const response = await request.get(`/api/cv/documents?userId=${userId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteDocument = async (cvId) => {
  try {
    const response = await request.remove(`/api/cv/delete`, { cvId });
    return response;
  } catch (error) {
    throw error;
  }
};

export const renameDocument = async (cvId, title) => {
  try {
    const response = await request.put(`/api/cv/rename`, { cvId, title });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getAllSections = async () => {
  try {
    const response = await request.get(`/api/cv/sections`);
    return response;
  } catch (error) {
    throw error;
  }
};
