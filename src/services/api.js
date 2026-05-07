import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getUser = async (id) => {
  const response = await api.get(`/user/getUser?id=${id}`);
  return response.data;
};

export const registrarAlimento = async (data) => {
  const response = await api.post(`/daily/registrar`, data);
  return response.data;
};

export const getManyAlimentos = async (name, signal) => {
  try {
    const response = await api.get('/taco/getManyAlimentos', {
      params: {
        name: name
      },
      signal: signal
    })
    return response.data;
  } catch (error) {
    if (error.name === 'CanceledError') return [];
    if (error.response && error.response.status === 404) return [];
    throw error;
  }
};

export const zerarAlimentos = async(id) => {
  const data = {
    idUser: id,
  }
  try{
    const response = await api.post('/daily/zerar', data)
  }
  catch (error) {
    if (error.response && error.response.status === 404) return [];
    throw error;
  }
}

export const loginUser = async(id,senha) => {
  const data = {
    id: id,
    senha: senha
  }
  try{
    const response = await api.post('/user/login', data)
    if (response.status===200){
      return response.data
    }
  }
  catch (error) {
    if (error.response && error.response.status === 404) return [];
    throw error;
  }
}