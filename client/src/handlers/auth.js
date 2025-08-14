import * as request from "../lib/request";

export const register = async (data) => {
  try {
    const response = await request.post("/api/auth/register", { data });
    return response;
  } catch (error) {
    throw error;
  }
};

export const login = async (data) => {
  try {
    const response = await request.post("/api/auth/login", { data });
    return response;
  } catch (error) {
    throw error;
  }
};
