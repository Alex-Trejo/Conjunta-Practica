// api.js
import axios from 'axios';

// La URL base para las solicitudes a la API
const API_URL = 'http://localhost:5000/api';

// Crear una instancia de Axios con la URL base configurada
const api = axios.create({
  baseURL: API_URL,
});

// Configurar un interceptor para agregar el token de autenticación a cada solicitud
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Funciones para manejar las solicitudes relacionadas con las tareas
export const getTasks = () => api.get('/tasks').then(res => res.data);
export const createTask = (task) => api.post('/tasks', task).then(res => res.data);
export const fetchTaskById = (id) => api.get(`/tasks/${id}`).then(res => res.data);
export const updateTask = (id, task) => api.put(`/tasks/${id}`, task).then(res => res.data);
export const deleteTask = (id) => api.delete(`/tasks/${id}`).then(res => res.data);


// Funciones para manejar las solicitudes de autenticación
export const login = async (credentials) => {
  try {
    const response = await api.post('/users/login', credentials); // Cambiado
    return response.data;
  } catch (error) {
    console.error('Error en la solicitud de login:', error);
    throw error;
  }
};

export const register = async (credentials) => {
  try {
    const response = await api.post('/users/register', credentials); // Cambiado
    return response.data;
  } catch (error) {
    console.error('Error en la solicitud de registro:', error);
    throw error;
  }
};


export const getProfile = () => api.get('/users/profile').then(res => res.data);
export const updateProfile = (user) => api.put('/users/profile', user).then(res => res.data);


export default api;
