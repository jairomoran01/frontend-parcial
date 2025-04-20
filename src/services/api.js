import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
});

export const api = {
  // Auth endpoints
  login: (credentials) => axiosInstance.post('/users/login', credentials),
  registerAdmin: (data) => axiosInstance.post('/users/admin/register', data),
  registerUser: (data) => axiosInstance.post('/users/register', data),

  // Sales endpoints
  createSale: (data) => axiosInstance.post('/sales', data),
  getUserSales: (userId) => axiosInstance.get(`/sales/user/${userId}`),
  getAllSales: () => axiosInstance.get('/sales/all'),
};