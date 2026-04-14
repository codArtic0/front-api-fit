import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getUser = async (id) => {
  const response = await api.get(`/user/getUser?id=${id}`);
  return response.data;
};