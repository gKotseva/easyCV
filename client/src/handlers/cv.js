import * as request from "../lib/request";

export const getSections = async () => {
  const response = await request.get(`/api/cv/sections`);
  return response;
};
